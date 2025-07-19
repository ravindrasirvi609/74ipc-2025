import { NextRequest, NextResponse } from "next/server";
import dbConnect from "@/lib/mongodb";
import Registration from "@/models/Registration";
import { sendRegistrationConfirmationEmail } from "@/lib/email";
import crypto from "crypto";

export async function POST(request: NextRequest) {
  try {
    await dbConnect();

    const body = await request.text();
    const signature = request.headers.get("x-razorpay-signature");

    if (!signature) {
      return NextResponse.json(
        { success: false, message: "Missing signature" },
        { status: 400 }
      );
    }

    // Verify webhook signature (if webhook secret is configured)
    if (process.env.RAZORPAY_WEBHOOK_SECRET) {
      const expectedSignature = crypto
        .createHmac("sha256", process.env.RAZORPAY_WEBHOOK_SECRET)
        .update(body)
        .digest("hex");

      if (expectedSignature !== signature) {
        return NextResponse.json(
          { success: false, message: "Invalid signature" },
          { status: 400 }
        );
      }
    }

    const webhookData = JSON.parse(body);
    console.log("Razorpay webhook received:", webhookData.event);

    const { event, payload } = webhookData;

    // Handle payment.captured event
    if (event === "payment.captured") {
      const payment = payload.payment.entity;
      const orderId = payment.notes?.order_id || payment.order_id;

      if (!orderId) {
        return NextResponse.json(
          { success: false, message: "Order ID not found in payment data" },
          { status: 400 }
        );
      }

      const registration = await Registration.findOne({
        $or: [{ orderId: orderId }, { razorpayOrderId: payment.order_id }],
      });

      if (!registration) {
        console.error(`Registration not found for order ID: ${orderId}`);
        return NextResponse.json(
          { success: false, message: "Registration not found" },
          { status: 404 }
        );
      }

      // Update registration with payment details
      const updateData = {
        paymentStatus: "Completed",
        razorpayPaymentId: payment.id,
        paymentCompletedAt: new Date(),
        paymentMethod: payment.method,
      };

      await Registration.findByIdAndUpdate(registration._id, updateData);

      // Send confirmation email
      try {
        await sendRegistrationConfirmationEmail(registration);
        console.log("Confirmation email sent successfully via webhook");
      } catch (emailError) {
        console.error(
          "Failed to send confirmation email via webhook:",
          emailError
        );
        // Don't fail the webhook if email fails
      }

      return NextResponse.json({ success: true, message: "Payment processed" });
    }

    // Handle payment.failed event
    if (event === "payment.failed") {
      const payment = payload.payment.entity;
      const orderId = payment.notes?.order_id || payment.order_id;

      if (orderId) {
        await Registration.findOneAndUpdate(
          {
            $or: [{ orderId: orderId }, { razorpayOrderId: payment.order_id }],
          },
          {
            paymentStatus: "Failed",
            paymentFailureReason: payment.error_description || "Payment failed",
          }
        );
      }

      return NextResponse.json({
        success: true,
        message: "Payment failure recorded",
      });
    }

    // For other events, just acknowledge
    return NextResponse.json({ success: true, message: "Webhook received" });
  } catch (error) {
    console.error("Webhook processing error:", error);
    return NextResponse.json(
      {
        success: false,
        message: "Webhook processing failed",
        error: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}
