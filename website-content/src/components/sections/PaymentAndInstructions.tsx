import React from "react";
import { CreditCard, FileText, CheckCircle, AlertCircle } from "lucide-react";

const paymentMethods = [
  {
    icon: <CreditCard className="h-12 w-12 text-pharmaceutical-600" />,
    title: "Credit/Debit Cards",
    description: "Visa, MasterCard, RuPay accepted",
  },
  {
    icon: <FileText className="h-12 w-12 text-pharmaceutical-600" />,
    title: "Bank Transfer",
    description: "NEFT/RTGS transfers accepted",
  },
  {
    icon: <CheckCircle className="h-12 w-12 text-pharmaceutical-600" />,
    title: "UPI/Digital Wallets",
    description: "PhonePe, GPay, Paytm supported",
  },
];

const registrationSteps = [
  {
    step: 1,
    title: "Fill Registration Form",
    description: "Complete the online registration form with accurate details",
  },
  {
    step: 2,
    title: "Make Payment",
    description:
      "Choose your preferred payment method and complete the transaction",
  },
  {
    step: 3,
    title: "Receive Confirmation",
    description:
      "Get your registration confirmation via email with registration ID",
  },
  {
    step: 4,
    title: "Attend Conference",
    description:
      "Present your confirmation at the venue to collect your conference kit",
  },
];

export default function PaymentAndInstructions() {
  return (
    <>
      {/* Payment Methods */}
      <section className="py-20 bg-gradient-to-r from-pharmaceutical-50 to-primary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Secure Payment Methods
            </h2>
            <p className="text-lg text-gray-600">
              We accept multiple payment methods for your convenience
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {paymentMethods.map((method, index) => (
              <div
                key={index}
                className="text-center p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="mx-auto mb-4">{method.icon}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {method.title}
                </h3>
                <p className="text-gray-600">{method.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 p-6 bg-white rounded-xl shadow-md max-w-2xl mx-auto">
            <div className="flex items-start gap-3">
              <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">
                  Secure Payment Processing
                </h3>
                <p className="text-gray-600 text-sm">
                  All payments are processed through Cashfree Payment Gateway
                  with industry-standard security protocols. Your payment
                  information is encrypted and secure.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Registration Instructions */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              How to Register
            </h2>
            <p className="text-lg text-gray-600">
              Follow these simple steps to complete your registration
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {registrationSteps.map((step) => (
                <div key={step.step} className="flex gap-6">
                  <div className="flex-shrink-0 w-10 h-10 bg-pharmaceutical-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                    {step.step}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 p-6 bg-yellow-50 border border-yellow-200 rounded-xl">
              <div className="flex gap-3">
                <AlertCircle className="h-6 w-6 text-yellow-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-yellow-800 mb-2">
                    Important Notes
                  </h3>
                  <div className="text-yellow-700 text-sm space-y-1">
                    <p>
                      • Registration fees are non-refundable once payment is
                      confirmed
                    </p>
                    <p>
                      • Registrations can be transferred to another person with
                      prior notification
                    </p>
                    <p>
                      • Student registrations require valid ID proof at the
                      venue
                    </p>
                    <p>
                      • Keep your registration confirmation email for venue
                      entry
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
