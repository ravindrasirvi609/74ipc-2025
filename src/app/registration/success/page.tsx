"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import {
  CheckCircle,
  Loader2,
  AlertCircle,
  Download,
  Mail,
  Calendar,
} from "lucide-react";
import Link from "next/link";

const PaymentSuccess = () => {
  const searchParams = useSearchParams();
  const [isVerifying, setIsVerifying] = useState(true);
  const [verificationResult, setVerificationResult] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);

  const orderId = searchParams.get("order_id");
  const orderToken = searchParams.get("order_token");

  useEffect(() => {
    if (orderId) {
      verifyPayment();
    } else {
      setError("Order ID not found");
      setIsVerifying(false);
    }
  }, [orderId]);

  const verifyPayment = async () => {
    try {
      const response = await fetch("/api/registration/verify-payment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ orderId }),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setVerificationResult(result.data);
      } else {
        setError(result.message || "Payment verification failed");
      }
    } catch (err) {
      setError("An error occurred while verifying payment");
    } finally {
      setIsVerifying(false);
    }
  };

  if (isVerifying) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <Loader2 className="w-12 h-12 text-pharmaceutical-600 mx-auto mb-4 animate-spin" />
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Verifying Payment
          </h2>
          <p className="text-gray-600">
            Please wait while we confirm your payment...
          </p>
        </div>
      </div>
    );
  }

  if (error || !verificationResult) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-20">
          <div className="max-w-2xl mx-auto text-center">
            <AlertCircle className="w-16 h-16 text-red-600 mx-auto mb-6" />
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              Payment Verification Failed
            </h1>
            <p className="text-gray-600 mb-8">
              {error || "We could not verify your payment at this time."}
            </p>
            <div className="space-y-4">
              <Link
                href="/contact"
                className="inline-block bg-pharmaceutical-600 text-white px-8 py-3 rounded-full font-bold hover:bg-pharmaceutical-700 transition-colors"
              >
                Contact Support
              </Link>
              <div>
                <Link
                  href="/registration"
                  className="text-pharmaceutical-600 hover:text-pharmaceutical-700 font-medium"
                >
                  Try Registration Again
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const { registration, paymentStatus, paymentAmount, paymentTime } =
    verificationResult;

  if (paymentStatus !== "SUCCESS") {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-20">
          <div className="max-w-2xl mx-auto text-center">
            <AlertCircle className="w-16 h-16 text-red-600 mx-auto mb-6" />
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              Payment Not Completed
            </h1>
            <p className="text-gray-600 mb-8">
              Your payment was not successful. Please try again or contact
              support.
            </p>
            <div className="space-y-4">
              <Link
                href="/registration"
                className="inline-block bg-pharmaceutical-600 text-white px-8 py-3 rounded-full font-bold hover:bg-pharmaceutical-700 transition-colors"
              >
                Try Again
              </Link>
              <div>
                <Link
                  href="/contact"
                  className="text-pharmaceutical-600 hover:text-pharmaceutical-700 font-medium"
                >
                  Contact Support
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Success Header */}
      <section className="bg-gradient-to-r from-green-500 to-green-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <CheckCircle className="w-20 h-20 mx-auto mb-6" />
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Payment Successful!
          </h1>
          <p className="text-xl">
            Thank you for registering for the 74th Indian Pharmaceutical
            Congress 2025
          </p>
        </div>
      </section>

      {/* Registration Details */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="bg-gradient-to-r from-pharmaceutical-600 to-primary-700 px-8 py-6">
                <h2 className="text-2xl font-bold text-white">
                  Registration Confirmation
                </h2>
                <p className="text-pharmaceutical-100">
                  Order ID: {registration.orderId}
                </p>
              </div>

              <div className="p-8">
                <div className="grid md:grid-cols-2 gap-8">
                  {/* Personal Details */}
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">
                      Personal Details
                    </h3>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Name:</span>
                        <span className="font-medium">
                          {registration.firstName} {registration.lastName}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Email:</span>
                        <span className="font-medium">
                          {registration.email}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Phone:</span>
                        <span className="font-medium">
                          {registration.phone}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Category:</span>
                        <span className="font-medium">
                          {registration.category}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Institution:</span>
                        <span className="font-medium">
                          {registration.institution}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Payment Details */}
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">
                      Payment Details
                    </h3>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-600">
                          Registration Type:
                        </span>
                        <span className="font-medium">
                          {registration.registrationType}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Amount Paid:</span>
                        <span className="font-medium text-green-600">
                          ₹{paymentAmount?.toLocaleString()}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Payment Time:</span>
                        <span className="font-medium">
                          {paymentTime
                            ? new Date(paymentTime).toLocaleString()
                            : "N/A"}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Status:</span>
                        <span className="font-medium text-green-600">
                          Confirmed
                        </span>
                      </div>
                      {registration.isAPTIMember && (
                        <div className="flex justify-between">
                          <span className="text-gray-600">APTI Discount:</span>
                          <span className="font-medium text-green-600">
                            Applied
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Additional Services */}
                {(registration.accommodation ||
                  registration.accompanying > 0) && (
                  <div className="mt-8 pt-8 border-t border-gray-200">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">
                      Additional Services
                    </h3>
                    <div className="grid md:grid-cols-2 gap-4 text-sm">
                      {registration.accommodation && (
                        <div className="flex items-center">
                          <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                          <span>Accommodation requested</span>
                        </div>
                      )}
                      {registration.accompanying > 0 && (
                        <div className="flex items-center">
                          <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                          <span>
                            Accompanying persons: {registration.accompanying}
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                )}

                {/* What's Next */}
                <div className="mt-8 pt-8 border-t border-gray-200">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">
                    What's Next?
                  </h3>
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="text-center">
                      <Mail className="w-8 h-8 text-pharmaceutical-600 mx-auto mb-2" />
                      <h4 className="font-medium text-gray-900 mb-1">
                        Confirmation Email
                      </h4>
                      <p className="text-sm text-gray-600">
                        You'll receive a detailed confirmation email within 24
                        hours
                      </p>
                    </div>
                    <div className="text-center">
                      <Download className="w-8 h-8 text-pharmaceutical-600 mx-auto mb-2" />
                      <h4 className="font-medium text-gray-900 mb-1">
                        Registration Kit
                      </h4>
                      <p className="text-sm text-gray-600">
                        Download link will be shared closer to the event date
                      </p>
                    </div>
                    <div className="text-center">
                      <Calendar className="w-8 h-8 text-pharmaceutical-600 mx-auto mb-2" />
                      <h4 className="font-medium text-gray-900 mb-1">
                        Event Updates
                      </h4>
                      <p className="text-sm text-gray-600">
                        Stay tuned for schedule and venue updates
                      </p>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="mt-8 pt-8 border-t border-gray-200 text-center space-y-4">
                  <div className="space-x-4">
                    <button
                      onClick={() => window.print()}
                      className="bg-pharmaceutical-600 text-white px-6 py-3 rounded-full font-medium hover:bg-pharmaceutical-700 transition-colors"
                    >
                      <Download className="w-4 h-4 inline mr-2" />
                      Print Confirmation
                    </button>
                    <Link
                      href="/schedule"
                      className="bg-gray-600 text-white px-6 py-3 rounded-full font-medium hover:bg-gray-700 transition-colors inline-block"
                    >
                      <Calendar className="w-4 h-4 inline mr-2" />
                      View Schedule
                    </Link>
                  </div>
                  <div>
                    <Link
                      href="/"
                      className="text-pharmaceutical-600 hover:text-pharmaceutical-700 font-medium"
                    >
                      Return to Home
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PaymentSuccess;
