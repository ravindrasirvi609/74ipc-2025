# Razorpay Payment Gateway Integration

This document outlines the complete Razorpay payment gateway integration for the 74th Indian Pharmaceutical Congress registration system.

## Overview

The system has been migrated from Cashfree to Razorpay payment gateway with the following features:

- Secure payment processing
- Automatic payment verification
- Email confirmation after successful payment
- Webhook handling for payment status updates
- Real-time payment tracking

## Environment Variables

Create a `.env.local` file with the following variables:

```bash
# Database
MONGODB_URI=mongodb://localhost:27017/74ipc-2025

# Razorpay Configuration
RAZORPAY_KEY_ID=your_razorpay_key_id
RAZORPAY_KEY_SECRET=your_razorpay_key_secret
RAZORPAY_WEBHOOK_SECRET=your_razorpay_webhook_secret

# Email Service
RESEND_API_KEY=your_resend_api_key

# Application URLs
APP_URL=http://localhost:3000
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

## Getting Razorpay Credentials

1. Sign up at [Razorpay Dashboard](https://dashboard.razorpay.com/)
2. Go to Settings > API Keys
3. Generate API Keys for Test/Live mode
4. Copy the Key ID and Key Secret
5. For webhooks, go to Settings > Webhooks and create a new webhook
6. Set the webhook URL to: `https://yourdomain.com/api/registration/webhook`
7. Enable the following events:
   - `payment.captured`
   - `payment.failed`
8. Copy the webhook secret

## Payment Flow

1. **Registration Form Submission**
   - User fills out the registration form
   - Form data is validated and saved to database
   - Razorpay order is created on the server
   - Order details are returned to the client

2. **Payment Processing**
   - Razorpay checkout is opened with order details
   - User completes payment on Razorpay's secure interface
   - Payment response is received on the client

3. **Payment Verification**
   - Client sends payment response to server for verification
   - Server verifies the payment signature
   - Registration status is updated in database
   - Confirmation email is sent to the user

4. **Webhook Handling** (Optional)
   - Razorpay sends webhooks for payment events
   - Server processes webhooks and updates registration status
   - Additional email confirmations can be sent via webhooks

## API Endpoints

### POST `/api/registration`

Creates a new registration and Razorpay order.

**Request Body:**

```json
{
  "firstName": "John",
  "lastName": "Doe",
  "email": "john@example.com",
  "phone": "1234567890",
  "category": "Delegates",
  "registrationType": "Regular",
  // ... other registration fields
  "paymentAmount": 10620
}
```

**Response:**

```json
{
  "success": true,
  "data": {
    "registrationId": "...",
    "orderId": "IPC2025_...",
    "razorpayOrderId": "order_...",
    "keyId": "rzp_test_...",
    "currency": "INR",
    "paymentAmount": 10620,
    "customerInfo": {
      "name": "John Doe",
      "email": "john@example.com",
      "contact": "1234567890"
    }
  }
}
```

### POST `/api/registration/verify-payment`

Verifies payment and updates registration status.

**Request Body:**

```json
{
  "razorpay_order_id": "order_...",
  "razorpay_payment_id": "pay_...",
  "razorpay_signature": "...",
  "order_id": "IPC2025_..."
}
```

### GET `/api/registration?orderId=IPC2025_...`

Retrieves registration details by order ID.

### POST `/api/registration/webhook`

Handles Razorpay webhooks for payment events.

## Frontend Components

### RegistrationForm

- Handles form submission and payment initiation
- Integrates with Razorpay checkout
- Manages payment verification flow

### useRazorpay Hook

- Loads Razorpay SDK dynamically
- Provides `openCheckout` function for payment processing

## Database Schema

The Registration model includes the following Razorpay-specific fields:

```typescript
{
  razorpayOrderId?: string;
  razorpayPaymentId?: string;
  paymentCompletedAt?: Date;
  paymentMethod?: string;
  paymentFailureReason?: string;
}
```

## Email Notifications

After successful payment verification, the system automatically sends:

- Registration confirmation email with details
- Payment receipt information
- Event details and instructions

## Testing

### Test Mode

1. Use Razorpay test credentials
2. Use test card numbers from [Razorpay documentation](https://razorpay.com/docs/payments/payments/test-card-details/)
3. No real money is charged in test mode

### Test Cards

- Success: 4111 1111 1111 1111
- Failure: 4000 0000 0000 0002
- CVV: Any 3 digits
- Expiry: Any future date

## Security Features

1. **Payment Signature Verification**: All payments are verified using HMAC-SHA256 signature
2. **Webhook Signature Verification**: Webhooks are verified before processing
3. **HTTPS Required**: All payment operations require HTTPS in production
4. **Server-side Validation**: All payment verification happens on the server

## Error Handling

The system handles various error scenarios:

- Network failures during payment
- Invalid payment signatures
- Duplicate registrations
- Email delivery failures
- Database connection issues

## Deployment Checklist

Before going live:

1. ✅ Replace test Razorpay credentials with live credentials
2. ✅ Update webhook URL to production domain
3. ✅ Ensure HTTPS is enabled
4. ✅ Test the complete payment flow
5. ✅ Verify email delivery
6. ✅ Test webhook processing
7. ✅ Monitor error logs

## Support

For Razorpay-related issues:

- [Razorpay Documentation](https://razorpay.com/docs/)
- [Razorpay Support](https://razorpay.com/support/)

For integration issues:

- Check browser console for client-side errors
- Check server logs for API errors
- Verify environment variables are set correctly
- Ensure webhook URL is accessible from Razorpay servers
