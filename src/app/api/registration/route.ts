import { NextRequest, NextResponse } from "next/server";
import dbConnect from "@/lib/mongodb";
import Registration from "@/models/Registration";
import CashfreeService from "@/lib/cashfree";
import { z } from "zod";

// Validation schema
const registrationSchema = z.object({
  firstName: z.string().min(1, "First name is required").max(50),
  lastName: z.string().min(1, "Last name is required").max(50),
  email: z.string().email("Invalid email address"),
  phone: z.string().regex(/^[0-9]{10}$/, "Invalid phone number"),
  dateOfBirth: z.string().min(1, "Date of birth is required"),
  gender: z.enum(["Male", "Female", "Other"]),
  category: z.enum([
    "Students",
    "Delegates",
    "International Delegates",
    "Accompanying Person",
  ]),
  institution: z.string().min(1, "Institution is required").max(200),
  designation: z.string().min(1, "Designation is required").max(100),
  address: z.string().min(1, "Address is required").max(500),
  city: z.string().min(1, "City is required").max(100),
  state: z.string().min(1, "State is required").max(100),
  pincode: z.string().regex(/^[0-9]{6}$/, "Invalid pincode"),
  country: z.string().min(1, "Country is required").max(100),
  registrationType: z.enum(["Super Saver", "Regular"]),
  isAPTIMember: z.boolean(),
  aptiMembershipNumber: z.string().optional(),
  accommodation: z.boolean(),
  accompanying: z.number().min(0).max(10),
  dietaryRequirements: z.string().optional(),
  paymentAmount: z.number().min(0),
});

// Pricing configuration
const getPricing = () => {
  return {
    Students: {
      "Super Saver": { base: 4000, withGST: 4720 },
      Regular: { base: 4500, withGST: 5310 },
    },
    Delegates: {
      "Super Saver": { base: 8000, withGST: 9440 },
      Regular: { base: 9000, withGST: 10620 },
    },
    "International Delegates": {
      "Super Saver": { base: 15000, withGST: 17700 },
      Regular: { base: 18000, withGST: 21240 },
    },
    "Accompanying Person": {
      "Super Saver": { base: 5000, withGST: 5900 },
      Regular: { base: 6000, withGST: 7080 },
    },
  };
};

// Generate unique order ID
const generateOrderId = () => {
  const timestamp = Date.now().toString();
  const randomStr = Math.random().toString(36).substring(2, 8).toUpperCase();
  return `IPC2025_${timestamp}_${randomStr}`;
};

export async function POST(request: NextRequest) {
  try {
    await dbConnect();

    const body = await request.json();

    // Validate input data
    const validatedData = registrationSchema.parse(body);

    // Check if email already exists
    const existingRegistration = await Registration.findOne({
      email: validatedData.email,
    });

    if (existingRegistration) {
      return NextResponse.json(
        {
          success: false,
          message:
            "Email already registered. Please use a different email address.",
        },
        { status: 400 }
      );
    }

    // Calculate pricing
    const pricing = getPricing();
    const categoryPricing =
      pricing[validatedData.category as keyof typeof pricing];
    const typePricing =
      categoryPricing[
        validatedData.registrationType as keyof typeof categoryPricing
      ];

    // Apply APTI member discount (10% off base price)
    let finalAmount = typePricing.withGST;
    if (validatedData.isAPTIMember && validatedData.aptiMembershipNumber) {
      const discountAmount = typePricing.base * 0.1;
      finalAmount = typePricing.withGST - discountAmount * 1.18; // Apply GST to discount as well
    }

    // Add accommodation charges if selected
    if (validatedData.accommodation) {
      finalAmount += 3000; // ₹3000 for accommodation
    }

    // Add accompanying person charges
    if (validatedData.accompanying > 0) {
      const accompanyingCharges = validatedData.accompanying * 2000; // ₹2000 per person
      finalAmount += accompanyingCharges;
    }

    // Generate order ID
    const orderId = generateOrderId();

    // Create registration record
    const registration = new Registration({
      ...validatedData,
      dateOfBirth: new Date(validatedData.dateOfBirth),
      paymentAmount: finalAmount,
      orderId,
      paymentStatus: "Pending",
    });

    await registration.save();

    // Create Cashfree payment order
    const paymentData = await CashfreeService.createOrder({
      orderId,
      orderAmount: finalAmount,
      customerName: `${validatedData.firstName} ${validatedData.lastName}`,
      customerEmail: validatedData.email,
      customerPhone: validatedData.phone,
      returnUrl: `${process.env.APP_URL}/registration/success`,
      notifyUrl: `${process.env.APP_URL}/api/registration/webhook`,
    });

    // Update registration with Cashfree order ID
    await Registration.findByIdAndUpdate(registration._id, {
      cashfreeOrderId: paymentData.paymentSessionId,
    });

    return NextResponse.json({
      success: true,
      message: "Registration created successfully",
      data: {
        registrationId: registration._id,
        orderId,
        paymentAmount: finalAmount,
        paymentSessionId: paymentData.paymentSessionId,
        paymentUrl: paymentData.paymentUrl,
      },
    });
  } catch (error) {
    console.error("Registration API error:", error);

    if (error instanceof z.ZodError) {
      return NextResponse.json(
        {
          success: false,
          message: "Validation error",
          errors: error.issues,
        },
        { status: 400 }
      );
    }

    return NextResponse.json(
      {
        success: false,
        message:
          error instanceof Error
            ? error.message
            : "An error occurred during registration",
      },
      { status: 500 }
    );
  }
}

export async function GET(request: NextRequest) {
  try {
    await dbConnect();

    const { searchParams } = new URL(request.url);
    const orderId = searchParams.get("orderId");
    const email = searchParams.get("email");

    if (!orderId && !email) {
      return NextResponse.json(
        { success: false, message: "Order ID or email is required" },
        { status: 400 }
      );
    }

    let registration;
    if (orderId) {
      registration = await Registration.findOne({ orderId });
    } else if (email) {
      registration = await Registration.findOne({ email });
    }

    if (!registration) {
      return NextResponse.json(
        { success: false, message: "Registration not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      data: registration,
    });
  } catch (error) {
    console.error("Registration GET API error:", error);
    return NextResponse.json(
      {
        success: false,
        message: "An error occurred while fetching registration",
      },
      { status: 500 }
    );
  }
}
