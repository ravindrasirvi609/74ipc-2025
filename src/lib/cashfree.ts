export interface CreateOrderData {
  orderId: string;
  orderAmount: number;
  customerName: string;
  customerEmail: string;
  customerPhone: string;
  returnUrl: string;
  notifyUrl: string;
}

export interface PaymentSessionData {
  orderId: string;
  paymentSessionId: string;
  paymentUrl: string;
}

export class CashfreeService {
  private static getBaseUrl(): string {
    return process.env.CASHFREE_ENVIRONMENT === "production"
      ? "https://api.cashfree.com"
      : "https://sandbox.cashfree.com";
  }

  private static getHeaders(): Record<string, string> {
    return {
      "Content-Type": "application/json",
      "x-client-id": process.env.CASHFREE_APP_ID!,
      "x-client-secret": process.env.CASHFREE_SECRET_KEY!,
      "x-api-version": "2023-08-01",
    };
  }

  /**
   * Create a new payment order
   */
  static async createOrder(
    orderData: CreateOrderData
  ): Promise<PaymentSessionData> {
    try {
      const requestBody = {
        order_id: orderData.orderId,
        order_amount: orderData.orderAmount,
        order_currency: "INR",
        customer_details: {
          customer_id: orderData.customerEmail,
          customer_name: orderData.customerName,
          customer_email: orderData.customerEmail,
          customer_phone: orderData.customerPhone,
        },
        order_meta: {
          return_url: orderData.returnUrl,
          notify_url: orderData.notifyUrl,
        },
        order_expiry_time: new Date(
          Date.now() + 24 * 60 * 60 * 1000
        ).toISOString(), // 24 hours from now
      };

      const response = await fetch(`${this.getBaseUrl()}/pg/orders`, {
        method: "POST",
        headers: this.getHeaders(),
        body: JSON.stringify(requestBody),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(
          `Cashfree API error: ${errorData.message || response.statusText}`
        );
      }

      const data = await response.json();

      if (data && data.payment_session_id) {
        return {
          orderId: orderData.orderId,
          paymentSessionId: data.payment_session_id,
          paymentUrl: data.payment_link || "",
        };
      } else {
        throw new Error("Failed to create payment order");
      }
    } catch (error) {
      console.error("Cashfree order creation error:", error);
      throw new Error(
        `Payment order creation failed: ${
          error instanceof Error ? error.message : "Unknown error"
        }`
      );
    }
  }

  /**
   * Verify payment status
   */
  static async verifyPayment(orderId: string) {
    try {
      const response = await fetch(
        `${this.getBaseUrl()}/pg/orders/${orderId}`,
        {
          method: "GET",
          headers: this.getHeaders(),
        }
      );

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(
          `Cashfree API error: ${errorData.message || response.statusText}`
        );
      }

      const data = await response.json();

      if (data) {
        return {
          orderId: data.order_id,
          orderStatus: data.order_status,
          paymentStatus: data.payment_status,
          orderAmount: data.order_amount,
          paymentTime: data.payment_time,
          paymentMethod: data.payment_method,
          cfOrderId: data.cf_order_id,
        };
      } else {
        throw new Error("Failed to fetch payment details");
      }
    } catch (error) {
      console.error("Cashfree payment verification error:", error);
      throw new Error(
        `Payment verification failed: ${
          error instanceof Error ? error.message : "Unknown error"
        }`
      );
    }
  }

  /**
   * Get payment sessions for an order
   */
  static async getPaymentSession(orderId: string) {
    try {
      const response = await fetch(
        `${this.getBaseUrl()}/pg/orders/${orderId}/payments`,
        {
          method: "GET",
          headers: this.getHeaders(),
        }
      );

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(
          `Cashfree API error: ${errorData.message || response.statusText}`
        );
      }

      return await response.json();
    } catch (error) {
      console.error("Cashfree payment session error:", error);
      throw new Error(
        `Failed to get payment session: ${
          error instanceof Error ? error.message : "Unknown error"
        }`
      );
    }
  }

  /**
   * Process refund (if needed)
   */
  static async processRefund(
    orderId: string,
    refundAmount: number,
    refundId: string
  ) {
    try {
      const requestBody = {
        refund_amount: refundAmount,
        refund_id: refundId,
        refund_note: "Registration cancellation refund",
      };

      const response = await fetch(
        `${this.getBaseUrl()}/pg/orders/${orderId}/refunds`,
        {
          method: "POST",
          headers: this.getHeaders(),
          body: JSON.stringify(requestBody),
        }
      );

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(
          `Cashfree API error: ${errorData.message || response.statusText}`
        );
      }

      const data = await response.json();

      if (data) {
        return {
          refundId: data.refund_id,
          refundStatus: data.refund_status,
          refundAmount: data.refund_amount,
        };
      } else {
        throw new Error("Failed to process refund");
      }
    } catch (error) {
      console.error("Cashfree refund error:", error);
      throw new Error(
        `Refund processing failed: ${
          error instanceof Error ? error.message : "Unknown error"
        }`
      );
    }
  }
}

export default CashfreeService;
