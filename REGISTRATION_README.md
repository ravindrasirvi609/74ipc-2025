# 74th Indian Pharmaceutical Congress 2025 - Registration System

A comprehensive registration system with integrated Cashfree payment gateway for the 74th Indian Pharmaceutical Congress 2025.

## 🚀 Features

- **Complete Registration Form** with validation using Zod
- **Cashfree Payment Gateway** integration for secure payments
- **MongoDB Database** for storing registration data
- **Email Notifications** for confirmation and failure cases
- **Responsive Design** with Tailwind CSS
- **TypeScript** for type safety
- **RESTful APIs** for registration and payment management
- **Webhook Support** for real-time payment updates

## 🛠️ Technology Stack

- **Frontend**: Next.js 15, React 19, TypeScript
- **Styling**: Tailwind CSS
- **Forms**: React Hook Form with Zod validation
- **Database**: MongoDB with Mongoose
- **Payment**: Cashfree Payment Gateway
- **Email**: Nodemailer
- **Icons**: Lucide React

## 📋 Prerequisites

Before you begin, ensure you have:

- Node.js 18+ installed
- MongoDB database (local or cloud)
- Cashfree merchant account
- SMTP server access (for email notifications - optional)

## ⚙️ Installation & Setup

### 1. Clone and Install Dependencies

```bash
git clone <repository-url>
cd 74ipc-2025-website
npm install
```

### 2. Environment Configuration

Create a `.env.local` file in the root directory:

```env
# MongoDB Configuration
MONGODB_URI=mongodb://localhost:27017/74ipc-2025-website

# Cashfree Payment Gateway Configuration
CASHFREE_APP_ID=your_cashfree_app_id
CASHFREE_SECRET_KEY=your_cashfree_secret_key
CASHFREE_ENVIRONMENT=sandbox # Use 'production' for live payments

# Next.js Configuration
NEXTAUTH_SECRET=your_nextauth_secret_key_here
NEXTAUTH_URL=http://localhost:3000

# Email Configuration (Optional - for confirmation emails)
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_app_password

# Application Configuration
APP_URL=http://localhost:3000
```

### 3. Database Setup

Run the database setup script:

```bash
npm run setup-db
```

This will:

- Create necessary MongoDB collections
- Set up database indexes for optimal performance
- Verify the database connection

### 4. Cashfree Configuration

1. Sign up for a Cashfree merchant account at [cashfree.com](https://cashfree.com)
2. Get your App ID and Secret Key from the dashboard
3. For testing, use sandbox environment
4. For production, switch to production environment and use live credentials

### 5. Start Development Server

```bash
npm run dev
```

The application will be available at `http://localhost:3000`

## 📊 Registration Categories & Pricing

| Category                | Super Saver | Regular |
| ----------------------- | ----------- | ------- |
| Students                | ₹4,720      | ₹5,310  |
| Delegates               | ₹9,440      | ₹10,620 |
| International Delegates | ₹17,700     | ₹21,240 |
| Accompanying Person     | ₹5,900      | ₹7,080  |

### Special Offers:

- **APTI Members**: 10% discount on base registration fee
- **Accommodation**: ₹3,000 additional
- **Accompanying Persons**: ₹2,000 per person

## 🔄 Payment Flow

1. **User Registration**: Fill out the registration form
2. **Payment Calculation**: System calculates total amount based on category, discounts, and additional services
3. **Order Creation**: Creates order in database and Cashfree
4. **Payment Gateway**: Redirects user to Cashfree payment page
5. **Payment Processing**: User completes payment
6. **Webhook Notification**: Cashfree sends payment status to our webhook
7. **Database Update**: Payment status updated in database
8. **Email Notification**: Confirmation or failure email sent to user

## 📁 Project Structure

```
src/
├── app/
│   ├── api/
│   │   └── registration/
│   │       ├── route.ts              # Registration API
│   │       ├── webhook/
│   │       │   └── route.ts          # Payment webhook
│   │       └── verify-payment/
│   │           └── route.ts          # Payment verification
│   ├── registration/
│   │   ├── page.tsx                  # Registration page
│   │   ├── success/
│   │   │   └── page.tsx              # Payment success page
│   │   └── failure/
│   │       └── page.tsx              # Payment failure page
│   └── ...
├── components/
│   └── RegistrationForm.tsx          # Main registration form
├── lib/
│   ├── mongodb.ts                    # Database connection
│   ├── cashfree.ts                   # Payment gateway service
│   └── email.ts                      # Email service
├── models/
│   └── Registration.ts               # Database schema
└── ...
```

## 🔗 API Endpoints

### Registration API

- **POST** `/api/registration` - Create new registration
- **GET** `/api/registration` - Get registration by order ID or email

### Payment APIs

- **POST** `/api/registration/webhook` - Cashfree payment webhook
- **POST** `/api/registration/verify-payment` - Verify payment status

## 📧 Email Notifications

The system sends automated emails for:

1. **Registration Confirmation** - When payment is successful
2. **Payment Failure** - When payment fails

Email templates include:

- Registration details
- Payment information
- Event information
- Support contact details

## 🔧 Configuration Options

### Payment Gateway Settings

```typescript
// In lib/cashfree.ts
const cashfreeConfig = {
  environment: "sandbox", // or 'production'
  appId: process.env.CASHFREE_APP_ID,
  secretKey: process.env.CASHFREE_SECRET_KEY,
};
```

### Email Configuration

```typescript
// In lib/email.ts
const emailConfig = {
  host: process.env.EMAIL_HOST,
  port: parseInt(process.env.EMAIL_PORT || "587"),
  secure: false, // true for 465, false for other ports
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
};
```

## 🧪 Testing

### Test the Registration Flow

1. Navigate to `http://localhost:3000/registration`
2. Fill out the registration form
3. Use Cashfree test credentials for sandbox testing
4. Verify email notifications are sent

### Test Payment Webhook

Use tools like ngrok to expose your local server for webhook testing:

```bash
ngrok http 3000
```

Then configure the webhook URL in Cashfree dashboard as:
`https://your-ngrok-url.ngrok.io/api/registration/webhook`

## 🚀 Production Deployment

### Before deploying to production:

1. **Environment Variables**: Update all environment variables for production
2. **Cashfree Environment**: Switch to production environment
3. **Database**: Use a production MongoDB instance
4. **Domain Configuration**: Update APP_URL and webhook URLs
5. **Email Configuration**: Configure production SMTP settings

### Deployment Checklist:

- [ ] Update `.env.local` with production values
- [ ] Set `CASHFREE_ENVIRONMENT=production`
- [ ] Configure production MongoDB URI
- [ ] Set up production domain in Cashfree dashboard
- [ ] Configure webhook URL in Cashfree dashboard
- [ ] Test payment flow end-to-end
- [ ] Verify email notifications work

## 🆘 Troubleshooting

### Common Issues:

1. **Database Connection Failed**

   - Check MongoDB URI format
   - Ensure MongoDB server is running
   - Verify network connectivity

2. **Payment Gateway Errors**

   - Verify Cashfree credentials
   - Check environment setting (sandbox vs production)
   - Ensure webhook URL is accessible

3. **Email Not Sending**
   - Check SMTP server settings
   - Verify email credentials
   - Check firewall/network restrictions

### Debug Mode:

Enable detailed logging by setting:

```env
NODE_ENV=development
```

## 📞 Support

For technical support or questions:

- **Email**: support@74ipc2025.com
- **Phone**: +91-XXX-XXX-XXXX
- **Documentation**: Check the inline code comments and TypeScript types

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

---

**Built with ❤️ for the 74th Indian Pharmaceutical Congress 2025**
