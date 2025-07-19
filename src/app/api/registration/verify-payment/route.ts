import { NextRequest, NextResponse } from "next/server";
import dbConnect from "@/lib/mongodb";
import Registration from "@/models/Registration";
import RazorpayService from "@/lib/razorpay";
import { sendRegistrationConfirmationEmail } from "@/lib/email";

export async function POST(request: NextRequest) {
  try {
    await dbConnect();

    const body = await request.json();
    const {
      razorpay_order_id,
      razorpay_payment_id,
      razorpay_signature,
      order_id,
    } = body;

    if (
      !razorpay_order_id ||
      !razorpay_payment_id ||
      !razorpay_signature ||
      !order_id
    ) {
      return NextResponse.json(
        {
          success: false,
          message: "Missing required payment verification data",
        },
        { status: 400 }
      );
    }

    // Verify payment signature
    const isValidSignature = RazorpayService.verifyPaymentSignature({
      razorpay_order_id,
      razorpay_payment_id,
      razorpay_signature,
    });

    if (!isValidSignature) {
      return NextResponse.json(
        { success: false, message: "Invalid payment signature" },
        { status: 400 }
      );
    }

    // Find registration by order ID
    const registration = await Registration.findOne({ orderId: order_id });

    if (!registration) {
      return NextResponse.json(
        { success: false, message: "Registration not found" },
        { status: 404 }
      );
    }

    // Get payment details from Razorpay
    const paymentDetails =
      await RazorpayService.getPaymentDetails(razorpay_payment_id);

    // Update registration with payment details
    const updatedRegistration = await Registration.findByIdAndUpdate(
      registration._id,
      {
        paymentStatus: "Completed",
        razorpayPaymentId: razorpay_payment_id,
        paymentCompletedAt: new Date(),
        paymentMethod: paymentDetails.method,
      },
      { new: true }
    );

    if (updatedRegistration) {
      // Send confirmation email
      try {
        await sendRegistrationConfirmationEmail(updatedRegistration);
        console.log("Confirmation email sent successfully");
      } catch (emailError) {
        console.error("Failed to send confirmation email:", emailError);
        // Don't fail the payment verification if email fails
      }
    }

    return NextResponse.json({
      success: true,
      message: "Payment verified successfully",
      data: {
        orderId: order_id,
        paymentId: razorpay_payment_id,
        status: "completed",
        registration: updatedRegistration,
      },
    });
  } catch (error) {
    console.error("Payment verification error:", error);
    return NextResponse.json(
      {
        success: false,
        message: "Payment verification failed",
        error: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}
