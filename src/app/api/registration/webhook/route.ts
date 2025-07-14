import { NextRequest, NextResponse } from "next/server";
import dbConnect from "@/lib/mongodb";
import Registration from "@/models/Registration";
import CashfreeService from "@/lib/cashfree";

export async function POST(request: NextRequest) {
  try {
    await dbConnect();

    const body = await request.json();
    console.log("Cashfree webhook received:", body);

    const { order_id, order_status, payment_status, order_amount } = body;

    if (!order_id) {
      return NextResponse.json(
        { success: false, message: "Order ID is required" },
        { status: 400 }
      );
    }

    const registration = await Registration.findOne({ orderId: order_id });

    if (!registration) {
      console.error(`Registration not found for order ID: ${order_id}`);
      return NextResponse.json(
        { success: false, message: "Registration not found" },
        { status: 404 }
      );
    }

    try {
      const paymentDetails = await CashfreeService.verifyPayment(order_id);

      let updateData: any = {
        paymentStatus:
          paymentDetails.paymentStatus === "SUCCESS" ? "Completed" : "Failed",
      };

      if (paymentDetails.paymentStatus === "SUCCESS") {
        updateData.paymentId = paymentDetails.cfOrderId;
        updateData.paymentAmount = paymentDetails.orderAmount;

        // Send confirmation email
        try {
          const emailModule = await import("@/lib/email");
          const emailResult =
            await emailModule.sendRegistrationConfirmationEmail(registration);
          if (!emailResult.success) {
            console.error(
              "Failed to send confirmation email:",
              emailResult.error
            );
          } else {
            console.log(
              "Confirmation email sent successfully:",
              emailResult.messageId
            );
          }
        } catch (emailError) {
          console.error("Error sending confirmation email:", emailError);
        }
      } else {
        // Send failure email
        try {
          const emailModule = await import("@/lib/email");
          const failureReason = "Payment verification failed";
          const emailResult = await emailModule.sendPaymentFailureEmail(
            registration,
            failureReason
          );
          if (!emailResult.success) {
            console.error("Failed to send failure email:", emailResult.error);
          } else {
            console.log(
              "Failure email sent successfully:",
              emailResult.messageId
            );
          }
        } catch (emailError) {
          console.error("Error sending failure email:", emailError);
        }
      }

      await Registration.findByIdAndUpdate(registration._id, updateData);

      console.log(
        `Payment ${paymentDetails.paymentStatus} for order ${order_id}`
      );

      // TODO: Add email notifications here using Resend
      // For now, just log the status
      console.log(`Registration updated for ${registration.email}`);

      return NextResponse.json({
        success: true,
        message: "Webhook processed successfully",
      });
    } catch (verificationError) {
      console.error("Payment verification failed:", verificationError);

      await Registration.findByIdAndUpdate(registration._id, {
        paymentStatus: "Failed",
      });

      // Send failure email for verification error
      try {
        const emailModule = await import("@/lib/email");
        const failureReason =
          verificationError instanceof Error
            ? verificationError.message
            : "Payment verification failed";
        const emailResult = await emailModule.sendPaymentFailureEmail(
          registration,
          failureReason
        );
        if (!emailResult.success) {
          console.error("Failed to send failure email:", emailResult.error);
        } else {
          console.log(
            "Failure email sent successfully:",
            emailResult.messageId
          );
        }
      } catch (emailError) {
        console.error("Error sending failure email:", emailError);
      }

      return NextResponse.json(
        { success: false, message: "Payment verification failed" },
        { status: 400 }
      );
    }
  } catch (error) {
    console.error("Webhook processing error:", error);
    return NextResponse.json(
      {
        success: false,
        message: "Webhook processing failed",
      },
      { status: 500 }
    );
  }
}

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const challenge = searchParams.get("challenge");

  if (challenge) {
    return NextResponse.json({ challenge });
  }

  return NextResponse.json({
    success: true,
    message: "Webhook endpoint is active",
  });
}
