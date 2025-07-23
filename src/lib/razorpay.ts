import Razorpay from "razorpay";
import crypto from "crypto";

export interface CreateOrderData {
  orderId: string;
  orderAmount: number;
  customerName: string;
  customerEmail: string;
  customerPhone: string;
  notes?: Record<string, string>;
}

export interface PaymentSessionData {
  orderId: string;
  razorpayOrderId: string;
  orderAmount: number;
  currency: string;
  keyId: string;
}

export interface PaymentVerificationData {
  razorpay_order_id: string;
  razorpay_payment_id: string;
  razorpay_signature: string;
}

export class RazorpayService {
  private static getInstance(): Razorpay {
    const keyId = process.env.RAZORPAY_KEY_ID;
    const keySecret = process.env.RAZORPAY_KEY_SECRET;

    if (!keyId || !keySecret) {
      console.error("Missing Razorpay credentials:", {
        keyId: keyId ? "✅ Present" : "❌ Missing",
        keySecret: keySecret ? "✅ Present" : "❌ Missing",
      });
      throw new Error("Razorpay credentials are not configured");
    }

    // Validate key format
    if (!keyId.startsWith("rzp_")) {
      console.error("Invalid Razorpay Key ID format. Should start with 'rzp_'");
      throw new Error("Invalid Razorpay Key ID format");
    }

    console.log("Razorpay credentials validated:", {
      keyId: keyId.substring(0, 10) + "...",
      environment: keyId.includes("test") ? "TEST" : "LIVE",
    });

    return new Razorpay({
      key_id: keyId,
      key_secret: keySecret,
    });
  }

  /**
   * Create a new payment order
   */
  static async createOrder(
    orderData: CreateOrderData
  ): Promise<PaymentSessionData> {
    try {
      console.log("Creating Razorpay order with data:", {
        orderId: orderData.orderId,
        orderAmount: orderData.orderAmount,
        customerName: orderData.customerName,
        customerEmail: orderData.customerEmail,
        customerPhone: orderData.customerPhone,
      });

      const razorpay = this.getInstance();

      const options = {
        amount: Math.round(orderData.orderAmount * 100), // Convert to paise
        currency: "INR",
        receipt: orderData.orderId,
        notes: {
          customer_name: orderData.customerName,
          customer_email: orderData.customerEmail,
          customer_phone: orderData.customerPhone,
          order_id: orderData.orderId, // Add order_id to notes for webhook identification
          ...orderData.notes,
        },
        payment_capture: 1, // Auto capture payment
      };

      console.log("Razorpay order options:", {
        ...options,
        notes: { ...options.notes, customer_phone: "[REDACTED]" },
      });

      const order = await razorpay.orders.create(options);

      console.log("Razorpay order created successfully:", {
        id: order.id,
        amount: order.amount,
        currency: order.currency,
        status: order.status,
      });

      if (!order || !order.id) {
        throw new Error("Failed to create Razorpay order");
      }

      return {
        orderId: orderData.orderId,
        razorpayOrderId: order.id,
        orderAmount: orderData.orderAmount,
        currency: order.currency,
        keyId: process.env.RAZORPAY_KEY_ID!,
      };
    } catch (error: any) {
      console.error("Razorpay order creation error:", {
        message: error.message,
        statusCode: error.statusCode,
        error: error.error,
        description: error.error?.description,
        code: error.error?.code,
        reason: error.error?.reason,
        source: error.error?.source,
      });

      // Provide more specific error messages
      let errorMessage = "Payment order creation failed";

      if (error.statusCode === 400) {
        errorMessage = `Invalid request: ${error.error?.description || error.message}`;
      } else if (error.statusCode === 401) {
        errorMessage =
          "Authentication failed. Please check your Razorpay credentials.";
      } else if (error.statusCode === 500) {
        errorMessage =
          "Razorpay server error. Please try again in a few moments.";
      } else if (error.error?.description) {
        errorMessage = error.error.description;
      } else if (error.message) {
        errorMessage = error.message;
      }

      throw new Error(errorMessage);
    }
  }

  /**
   * Verify payment signature
   */
  static verifyPaymentSignature(data: PaymentVerificationData): boolean {
    try {
      if (!process.env.RAZORPAY_KEY_SECRET) {
        throw new Error("Razorpay key secret is not configured");
      }

      const body = data.razorpay_order_id + "|" + data.razorpay_payment_id;
      const expectedSignature = crypto
        .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET)
        .update(body.toString())
        .digest("hex");

      return expectedSignature === data.razorpay_signature;
    } catch (error) {
      console.error("Payment signature verification error:", error);
      return false;
    }
  }

  /**
   * Get payment details
   */
  static async getPaymentDetails(paymentId: string) {
    try {
      const razorpay = this.getInstance();
      const payment = await razorpay.payments.fetch(paymentId);

      return {
        id: payment.id,
        amount: Number(payment.amount) / 100, // Convert from paise to rupees
        currency: payment.currency,
        status: payment.status,
        order_id: payment.order_id,
        method: payment.method,
        created_at: payment.created_at,
        email: payment.email,
        contact: payment.contact,
      };
    } catch (error) {
      console.error("Get payment details error:", error);
      throw new Error(
        `Failed to get payment details: ${
          error instanceof Error ? error.message : "Unknown error"
        }`
      );
    }
  }

  /**
   * Get order details
   */
  static async getOrderDetails(orderId: string) {
    try {
      const razorpay = this.getInstance();
      const order = await razorpay.orders.fetch(orderId);

      return {
        id: order.id,
        amount: Number(order.amount) / 100, // Convert from paise to rupees
        currency: order.currency,
        status: order.status,
        receipt: order.receipt,
        created_at: order.created_at,
        notes: order.notes,
      };
    } catch (error) {
      console.error("Get order details error:", error);
      throw new Error(
        `Failed to get order details: ${
          error instanceof Error ? error.message : "Unknown error"
        }`
      );
    }
  }

  /**
   * Process refund (if needed)
   */
  static async processRefund(
    paymentId: string,
    refundAmount: number,
    notes?: Record<string, string>
  ) {
    try {
      const razorpay = this.getInstance();

      const refundOptions = {
        amount: Math.round(refundAmount * 100), // Convert to paise
        notes: {
          reason: "Registration cancellation refund",
          ...notes,
        },
      };

      const refund = await razorpay.payments.refund(paymentId, refundOptions);

      return {
        refundId: refund.id,
        refundStatus: refund.status,
        refundAmount: Number(refund.amount) / 100, // Convert from paise to rupees
        paymentId: refund.payment_id,
      };
    } catch (error) {
      console.error("Razorpay refund error:", error);
      throw new Error(
        `Refund processing failed: ${
          error instanceof Error ? error.message : "Unknown error"
        }`
      );
    }
  }
}

export default RazorpayService;
