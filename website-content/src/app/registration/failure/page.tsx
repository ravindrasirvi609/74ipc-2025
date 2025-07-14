"use client";

import { useSearchParams } from "next/navigation";
import { XCircle, RotateCcw, Phone, Mail, AlertTriangle } from "lucide-react";
import Link from "next/link";

const PaymentFailure = () => {
  const searchParams = useSearchParams();
  const orderId = searchParams.get("order_id");
  const errorMessage =
    searchParams.get("error_message") || "Payment could not be processed";

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Failure Header */}
      <section className="bg-gradient-to-r from-red-500 to-red-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <XCircle className="w-20 h-20 mx-auto mb-6" />
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Payment Failed
          </h1>
          <p className="text-xl">
            We were unable to process your payment at this time
          </p>
        </div>
      </section>

      {/* Error Details */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="bg-red-50 border-b border-red-200 px-8 py-6">
                <h2 className="text-2xl font-bold text-red-900">
                  Transaction Details
                </h2>
                {orderId && <p className="text-red-700">Order ID: {orderId}</p>}
              </div>

              <div className="p-8">
                <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-8">
                  <div className="flex items-start">
                    <AlertTriangle className="w-5 h-5 text-red-600 mt-0.5 mr-3" />
                    <div>
                      <h3 className="font-semibold text-red-900 mb-1">
                        Payment Error
                      </h3>
                      <p className="text-red-700 text-sm">{errorMessage}</p>
                    </div>
                  </div>
                </div>

                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Common Reasons for Payment Failure:
                </h3>
                <ul className="space-y-2 text-gray-600 mb-8">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3"></span>
                    Insufficient funds in your account
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3"></span>
                    Card/UPI limit exceeded
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3"></span>
                    Network connectivity issues
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3"></span>
                    Card expired or blocked
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3"></span>
                    Incorrect OTP or PIN
                  </li>
                </ul>

                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  What You Can Do:
                </h3>
                <div className="grid md:grid-cols-2 gap-4 mb-8">
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <RotateCcw className="w-6 h-6 text-blue-600 mb-2" />
                    <h4 className="font-semibold text-blue-900 mb-1">
                      Try Again
                    </h4>
                    <p className="text-blue-700 text-sm">
                      Return to registration and try a different payment method
                    </p>
                  </div>
                  <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                    <Phone className="w-6 h-6 text-green-600 mb-2" />
                    <h4 className="font-semibold text-green-900 mb-1">
                      Contact Bank
                    </h4>
                    <p className="text-green-700 text-sm">
                      Contact your bank to check for any transaction blocks
                    </p>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="text-center space-y-4">
                  <div className="space-y-3">
                    <Link
                      href="/registration"
                      className="w-full bg-pharmaceutical-600 text-white px-8 py-3 rounded-full font-bold hover:bg-pharmaceutical-700 transition-colors inline-block"
                    >
                      <RotateCcw className="w-4 h-4 inline mr-2" />
                      Try Registration Again
                    </Link>
                    <Link
                      href="/contact"
                      className="w-full bg-gray-600 text-white px-8 py-3 rounded-full font-bold hover:bg-gray-700 transition-colors inline-block"
                    >
                      <Mail className="w-4 h-4 inline mr-2" />
                      Contact Support
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

            {/* Support Information */}
            <div className="mt-8 bg-gray-100 rounded-xl p-6 text-center">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Need Help?
              </h3>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">
                    Technical Support
                  </h4>
                  <p className="text-gray-600">Email: support@74ipc2025.com</p>
                  <p className="text-gray-600">Phone: +91-XXX-XXX-XXXX</p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">
                    Business Hours
                  </h4>
                  <p className="text-gray-600">
                    Monday - Friday: 9:00 AM - 6:00 PM
                  </p>
                  <p className="text-gray-600">Saturday: 9:00 AM - 2:00 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PaymentFailure;
