import { NextRequest, NextResponse } from "next/server";
import { CashfreeService } from "@/lib/cashfree";

export async function POST(request: NextRequest) {
  console.log("🧪 Test Cashfree session API called");
  try {
    const body = await request.json();
    console.log("📝 Request body:", body);

    const { amount, mode } = body;
    // Use dummy data for test session
    const orderId = `TEST_${Date.now()}`;
    const customerName = "Test User";
    const customerEmail = "testuser@example.com";
    const customerPhone = "9999999999";
    const orderAmount = amount || 100;
    const returnUrl = `${process.env.APP_URL}/cashfree-test?order_id=${orderId}`;
    const notifyUrl = `${process.env.APP_URL}/api/registration/webhook`;

    console.log("🔄 Creating test order with Cashfree...");
    console.log("Order details:", { orderId, orderAmount, customerEmail });

    const paymentData = await CashfreeService.createOrder({
      orderId,
      orderAmount,
      customerName,
      customerEmail,
      customerPhone,
      returnUrl,
      notifyUrl,
    });

    console.log("✅ Test order created successfully:", paymentData);

    return NextResponse.json({
      success: true,
      data: {
        orderId,
        paymentSessionId: paymentData.paymentSessionId,
        paymentUrl: paymentData.paymentUrl,
      },
    });
  } catch (error) {
    console.error("❌ Test session creation error:", error);
    return NextResponse.json(
      {
        success: false,
        message:
          error instanceof Error
            ? error.message
            : "Failed to create test payment session",
      },
      { status: 500 }
    );
  }
}
