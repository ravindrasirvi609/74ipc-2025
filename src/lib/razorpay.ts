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
    if (!process.env.RAZORPAY_KEY_ID || !process.env.RAZORPAY_KEY_SECRET) {
      throw new Error("Razorpay credentials are not configured");
    }

    return new Razorpay({
      key_id: process.env.RAZORPAY_KEY_ID,
      key_secret: process.env.RAZORPAY_KEY_SECRET,
    });
  }

  /**
   * Create a new payment order
   */
  static async createOrder(
    orderData: CreateOrderData
  ): Promise<PaymentSessionData> {
    try {
      const razorpay = this.getInstance();

      const options = {
        amount: Math.round(orderData.orderAmount * 100), // Convert to paise
        currency: "INR",
        receipt: orderData.orderId,
        notes: {
          customer_name: orderData.customerName,
          customer_email: orderData.customerEmail,
          customer_phone: orderData.customerPhone,
          ...orderData.notes,
        },
        payment_capture: 1, // Auto capture payment
      };

      const order = await razorpay.orders.create(options);

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
    } catch (error) {
      console.error("Razorpay order creation error:", error);
      throw new Error(
        `Payment order creation failed: ${
          error instanceof Error ? error.message : "Unknown error"
        }`
      );
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
