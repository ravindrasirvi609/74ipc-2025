import { NextRequest, NextResponse } from "next/server";
import dbConnect from "@/lib/mongodb";
import Sponsorship from "@/models/Sponsorship";
import { z } from "zod";
import { sendEmail } from "@/lib/email";

// Validation schema for sponsorship submission
const sponsorshipSchema = z.object({
  // Sponsorship Selection
  sponsorshipType: z.string().min(1, "Sponsorship type is required"),
  sponsorshipPrice: z.string().min(1, "Sponsorship price is required"),
  sponsorshipCategory: z.string().min(1, "Sponsorship category is required"),

  // Company Information
  companyName: z.string().min(1, "Company name is required").max(200),
  contactPerson: z.string().min(1, "Contact person is required").max(100),
  designation: z.string().max(100).optional(),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(1, "Phone number is required"),
  website: z.string().url("Invalid website URL").optional().or(z.literal("")),

  // Address Information
  address: z.string().min(1, "Address is required").max(500),
  city: z.string().min(1, "City is required").max(100),
  state: z.string().min(1, "State is required").max(100),
  country: z.string().min(1, "Country is required").max(100),

  // Company Details
  companyType: z
    .enum([
      "Pharmaceutical Company",
      "Biotechnology Company",
      "Medical Device Company",
      "Healthcare Service Provider",
      "Research Institution",
      "Academic Institution",
      "Government Organization",
      "Non-Profit Organization",
      "Consulting Firm",
      "Other",
    ])
    .optional(),
  industryType: z
    .enum([
      "Pharmaceuticals",
      "Biotechnology",
      "Medical Devices",
      "Healthcare Services",
      "Research & Development",
      "Education",
      "Government",
      "Non-Profit",
      "Consulting",
      "Other",
    ])
    .optional(),

  // Sponsorship Details
  marketingObjectives: z.string().max(1000).optional(),
  previousSponsorships: z.string().max(1000).optional(),
  specialRequests: z.string().max(1000).optional(),

  // Agreements
  agreedToTerms: z.boolean().refine((val) => val === true, {
    message: "You must agree to the terms and conditions",
  }),
  subscribeNewsletter: z.boolean().optional(),
});

// POST - Submit sponsorship application
export async function POST(request: NextRequest) {
  try {
    await dbConnect();

    const body = await request.json();

    // Validate the request body
    const validationResult = sponsorshipSchema.safeParse(body);

    if (!validationResult.success) {
      return NextResponse.json(
        {
          success: false,
          message: "Validation failed",
          errors: validationResult.error.flatten().fieldErrors,
        },
        { status: 400 }
      );
    }

    const sponsorshipData = validationResult.data;

    // Check if a sponsorship application already exists for this email and company
    const existingSponsorship = await Sponsorship.findOne({
      email: sponsorshipData.email.toLowerCase(),
      companyName: sponsorshipData.companyName,
      status: { $in: ["Pending", "Under Review", "Approved"] },
    });

    if (existingSponsorship) {
      return NextResponse.json(
        {
          success: false,
          message:
            "A sponsorship application from this email and company is already pending or approved",
          sponsorshipId: existingSponsorship._id,
        },
        { status: 409 }
      );
    }

    // Create new sponsorship application
    const sponsorship = new Sponsorship({
      ...sponsorshipData,
      email: sponsorshipData.email.toLowerCase(),
      submissionDate: new Date(),
      status: "Pending",
    });

    await sponsorship.save();

    // Send confirmation email to applicant
    try {
      await sendSponsorshipConfirmationEmail(sponsorship);
    } catch (emailError) {
      console.error("Failed to send confirmation email:", emailError);
      // Don't fail the request if email fails
    }

    // Send notification email to admin
    try {
      await sendSponsorshipNotificationEmail(sponsorship);
    } catch (emailError) {
      console.error("Failed to send admin notification:", emailError);
      // Don't fail the request if email fails
    }

    return NextResponse.json(
      {
        success: true,
        message: "Sponsorship application submitted successfully",
        sponsorshipId: sponsorship._id,
        data: {
          sponsorshipType: sponsorship.sponsorshipType,
          sponsorshipPrice: sponsorship.sponsorshipPrice,
          companyName: sponsorship.companyName,
          contactPerson: sponsorship.contactPerson,
          email: sponsorship.email,
          status: sponsorship.status,
          submissionDate: sponsorship.submissionDate,
        },
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Sponsorship submission error:", error);

    if (error instanceof Error) {
      return NextResponse.json(
        {
          success: false,
          message: "Failed to submit sponsorship application",
          error:
            process.env.NODE_ENV === "development"
              ? error.message
              : "Internal server error",
        },
        { status: 500 }
      );
    }

    return NextResponse.json(
      {
        success: false,
        message: "An unexpected error occurred",
      },
      { status: 500 }
    );
  }
}

// GET - Retrieve sponsorship applications (admin only)
export async function GET(request: NextRequest) {
  try {
    await dbConnect();

    const { searchParams } = new URL(request.url);
    const page = parseInt(searchParams.get("page") || "1");
    const limit = parseInt(searchParams.get("limit") || "10");
    const status = searchParams.get("status");
    const category = searchParams.get("category");
    const email = searchParams.get("email");

    const skip = (page - 1) * limit;

    // Build query filter
    const filter: any = {};
    if (status) filter.status = status;
    if (category) filter.sponsorshipCategory = category;
    if (email) filter.email = email.toLowerCase();

    // Get sponsorships with pagination
    const [sponsorships, totalCount] = await Promise.all([
      Sponsorship.find(filter)
        .select("-__v")
        .sort({ createdAt: -1 })
        .skip(skip)
        .limit(limit)
        .lean(),
      Sponsorship.countDocuments(filter),
    ]);

    const totalPages = Math.ceil(totalCount / limit);

    return NextResponse.json({
      success: true,
      data: sponsorships,
      pagination: {
        currentPage: page,
        totalPages,
        totalCount,
        hasNext: page < totalPages,
        hasPrev: page > 1,
      },
    });
  } catch (error) {
    console.error("Failed to fetch sponsorships:", error);
    return NextResponse.json(
      {
        success: false,
        message: "Failed to fetch sponsorship applications",
      },
      { status: 500 }
    );
  }
}

// Helper function to send confirmation email to applicant
async function sendSponsorshipConfirmationEmail(sponsorship: any) {
  const emailContent = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <h2 style="color: #1e3a8a;">Sponsorship Application Received</h2>
      
      <p>Dear ${sponsorship.contactPerson},</p>
      
      <p>Thank you for your interest in sponsoring the 74th Indian Pharmaceutical Congress 2025. We have successfully received your sponsorship application.</p>
      
      <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
        <h3 style="color: #1e3a8a; margin-top: 0;">Application Details:</h3>
        <p><strong>Company:</strong> ${sponsorship.companyName}</p>
        <p><strong>Sponsorship Type:</strong> ${sponsorship.sponsorshipType}</p>
        <p><strong>Category:</strong> ${sponsorship.sponsorshipCategory}</p>
        <p><strong>Price:</strong> ${sponsorship.sponsorshipPrice}</p>
        <p><strong>Application ID:</strong> ${sponsorship._id}</p>
        <p><strong>Submission Date:</strong> ${new Date(sponsorship.submissionDate).toLocaleDateString()}</p>
      </div>
      
      <p>Our sponsorship team will review your application and contact you within 2-3 business days to discuss the next steps.</p>
      
      <p>If you have any questions, please contact us at:</p>
      <ul>
        <li>Email: sponsorship@74ipc2025.org</li>
        <li>Website: www.74ipc.com</li>
      </ul>
      
      <p>Thank you for partnering with us!</p>
      
      <p>Best regards,<br>
      74th Indian Pharmaceutical Congress<br>
      Sponsorship Team</p>
    </div>
  `;

  await sendEmail({
    to: sponsorship.email,
    subject: "Sponsorship Application Confirmation - 74th IPC 2025",
    html: emailContent,
  });
}

// Helper function to send notification email to admin
async function sendSponsorshipNotificationEmail(sponsorship: any) {
  const emailContent = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <h2 style="color: #dc2626;">New Sponsorship Application</h2>
      
      <p>A new sponsorship application has been submitted for the 74th Indian Pharmaceutical Congress 2025.</p>
      
      <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
        <h3 style="color: #1e3a8a; margin-top: 0;">Application Details:</h3>
        <p><strong>Company:</strong> ${sponsorship.companyName}</p>
        <p><strong>Contact Person:</strong> ${sponsorship.contactPerson}</p>
        <p><strong>Email:</strong> ${sponsorship.email}</p>
        <p><strong>Phone:</strong> ${sponsorship.phone}</p>
        <p><strong>Sponsorship Type:</strong> ${sponsorship.sponsorshipType}</p>
        <p><strong>Category:</strong> ${sponsorship.sponsorshipCategory}</p>
        <p><strong>Price:</strong> ${sponsorship.sponsorshipPrice}</p>
        <p><strong>Application ID:</strong> ${sponsorship._id}</p>
        <p><strong>Submission Date:</strong> ${new Date(sponsorship.submissionDate).toLocaleDateString()}</p>
      </div>
      
      ${
        sponsorship.marketingObjectives
          ? `
      <div style="background-color: #fef3c7; padding: 15px; border-radius: 8px; margin: 15px 0;">
        <h4 style="margin-top: 0;">Marketing Objectives:</h4>
        <p>${sponsorship.marketingObjectives}</p>
      </div>
      `
          : ""
      }
      
      ${
        sponsorship.specialRequests
          ? `
      <div style="background-color: #ecfdf5; padding: 15px; border-radius: 8px; margin: 15px 0;">
        <h4 style="margin-top: 0;">Special Requests:</h4>
        <p>${sponsorship.specialRequests}</p>
      </div>
      `
          : ""
      }
      
      <p>Please review and follow up with the applicant.</p>
    </div>
  `;

  await sendEmail({
    to: "sponsorship@74ipc2025.org",
    subject: `New Sponsorship Application - ${sponsorship.companyName}`,
    html: emailContent,
  });
}
