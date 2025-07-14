import { NextRequest, NextResponse } from "next/server";
import dbConnect from "@/lib/mongodb";
import Registration from "@/models/Registration";
import CashfreeService from "@/lib/cashfree";

export async function POST(request: NextRequest) {
  try {
    await dbConnect();

    const body = await request.json();
    const { orderId } = body;

    if (!orderId) {
      return NextResponse.json(
        { success: false, message: "Order ID is required" },
        { status: 400 }
      );
    }

    // Find the registration
    const registration = await Registration.findOne({ orderId });

    if (!registration) {
      return NextResponse.json(
        { success: false, message: "Registration not found" },
        { status: 404 }
      );
    }

    // Verify payment with Cashfree
    try {
      const paymentDetails = await CashfreeService.verifyPayment(orderId);

      // Update registration based on payment status
      const updateData: any = {
        paymentStatus:
          paymentDetails.paymentStatus === "SUCCESS" ? "Completed" : "Failed",
      };

      if (paymentDetails.paymentStatus === "SUCCESS") {
        updateData.paymentId = paymentDetails.cfOrderId;
        updateData.paymentAmount = paymentDetails.orderAmount;
      }

      const updatedRegistration = await Registration.findByIdAndUpdate(
        registration._id,
        updateData,
        { new: true }
      );

      return NextResponse.json({
        success: true,
        data: {
          paymentStatus: paymentDetails.paymentStatus,
          orderStatus: paymentDetails.orderStatus,
          paymentAmount: paymentDetails.orderAmount,
          paymentTime: paymentDetails.paymentTime,
          registration: updatedRegistration,
        },
      });
    } catch (verificationError) {
      console.error("Payment verification failed:", verificationError);

      return NextResponse.json(
        {
          success: false,
          message: "Payment verification failed",
          error:
            verificationError instanceof Error
              ? verificationError.message
              : "Unknown error",
        },
        { status: 400 }
      );
    }
  } catch (error) {
    console.error("Payment verification API error:", error);
    return NextResponse.json(
      {
        success: false,
        message: "An error occurred during payment verification",
      },
      { status: 500 }
    );
  }
}
