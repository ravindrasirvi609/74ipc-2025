import { Metadata } from "next";
import {
  RotateCcw,
  AlertTriangle,
  Clock,
  CreditCard,
  CheckCircle,
} from "lucide-react";

export const metadata: Metadata = {
  title:
    "Refund & Cancellation Policy - 74th Indian Pharmaceutical Congress 2025",
  description:
    "Refund and Cancellation Policy for the 74th Indian Pharmaceutical Congress, Bengaluru 2025.",
};

export default function RefundCancellationPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-pharmaceutical-600 to-secondary-900 text-white py-24">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <RotateCcw className="h-16 w-16 text-pharmaceutical-200 mx-auto mb-6" />
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Refund & Cancellation Policy
          </h1>
          <p className="text-xl md:text-2xl text-pharmaceutical-100">
            Clear Guidelines for Registration Changes
          </p>
        </div>
      </section>

      {/* Policy Content */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="prose prose-lg max-w-none">
              <div className="mb-8">
                <p className="text-gray-600 text-lg">
                  Last updated: July 12, 2025
                </p>
                <p className="text-gray-700 mt-4">
                  This policy outlines the terms and conditions for registration
                  cancellations, modifications, and refunds for the 74th Indian
                  Pharmaceutical Congress.
                </p>
              </div>

              <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                <Clock className="h-6 w-6 text-pharmaceutical-600 mr-2" />
                1. Cancellation Timeline and Refund Rates
              </h2>
              <div className="text-gray-700 leading-relaxed mb-6">
                <div className="bg-pharmaceutical-50 p-6 rounded-lg mb-6">
                  <h3 className="text-xl font-semibold mb-4 text-pharmaceutical-800">
                    Refund Schedule Based on Cancellation Date
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 bg-white rounded border-l-4 border-green-500">
                      <div>
                        <p className="font-semibold text-gray-800">
                          90+ days before congress
                        </p>
                        <p className="text-sm text-gray-600">
                          Before September 20, 2025
                        </p>
                      </div>
                      <div className="text-green-600 font-bold text-lg">
                        85% refund
                      </div>
                    </div>
                    <div className="flex items-center justify-between p-4 bg-white rounded border-l-4 border-blue-500">
                      <div>
                        <p className="font-semibold text-gray-800">
                          60-89 days before congress
                        </p>
                        <p className="text-sm text-gray-600">
                          September 21 - October 20, 2025
                        </p>
                      </div>
                      <div className="text-blue-600 font-bold text-lg">
                        70% refund
                      </div>
                    </div>
                    <div className="flex items-center justify-between p-4 bg-white rounded border-l-4 border-yellow-500">
                      <div>
                        <p className="font-semibold text-gray-800">
                          30-59 days before congress
                        </p>
                        <p className="text-sm text-gray-600">
                          October 21 - November 19, 2025
                        </p>
                      </div>
                      <div className="text-yellow-600 font-bold text-lg">
                        50% refund
                      </div>
                    </div>
                    <div className="flex items-center justify-between p-4 bg-white rounded border-l-4 border-orange-500">
                      <div>
                        <p className="font-semibold text-gray-800">
                          15-29 days before congress
                        </p>
                        <p className="text-sm text-gray-600">
                          November 20 - December 4, 2025
                        </p>
                      </div>
                      <div className="text-orange-600 font-bold text-lg">
                        25% refund
                      </div>
                    </div>
                    <div className="flex items-center justify-between p-4 bg-white rounded border-l-4 border-red-500">
                      <div>
                        <p className="font-semibold text-gray-800">
                          Less than 15 days before congress
                        </p>
                        <p className="text-sm text-gray-600">
                          After December 4, 2025
                        </p>
                      </div>
                      <div className="text-red-600 font-bold text-lg">
                        No refund
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                <CreditCard className="h-6 w-6 text-pharmaceutical-600 mr-2" />
                2. Registration Fee Structure & Non-Transferable Policy
              </h2>
              <div className="text-gray-700 leading-relaxed mb-6">
                <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded mb-6">
                  <h3 className="text-lg font-semibold text-blue-800 mb-3">
                    📋 Registration Categories - STRICTLY NON-TRANSFERABLE
                  </h3>
                  <p className="text-blue-700 mb-4">
                    All registration fees are category-specific and{" "}
                    <strong>CANNOT be transferred</strong>
                    between different registration types. Each category has
                    distinct eligibility criteria and benefits.
                  </p>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-blue-800 mb-2">
                        🎓 Student Categories (NON-TRANSFERABLE):
                      </h4>
                      <ul className="list-disc list-inside space-y-1 text-blue-700 text-sm">
                        <li>UG Student (requires valid student ID)</li>
                        <li>PG Student (requires valid student ID)</li>
                        <li>PhD Scholar (requires enrollment proof)</li>
                        <li>
                          ⚠️ Cannot be upgraded to professional categories
                        </li>
                        <li>⚠️ Verification required - no exceptions</li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold text-blue-800 mb-2">
                        👨‍💼 Professional Categories (NON-TRANSFERABLE):
                      </h4>
                      <ul className="list-disc list-inside space-y-1 text-blue-700 text-sm">
                        <li>Industry Professional</li>
                        <li>Academic Faculty</li>
                        <li>Research Scientist</li>
                        <li>⚠️ Cannot be downgraded to student rates</li>
                        <li>⚠️ Professional verification required</li>
                      </ul>
                    </div>
                  </div>

                  <div className="mt-4 p-4 bg-blue-100 rounded">
                    <p className="text-blue-800 text-sm font-medium">
                      <strong>CRITICAL:</strong> Registration fees paid for one
                      category are permanently locked to that category.
                      Participants who provide false information for category
                      eligibility will forfeit their entire registration with NO
                      REFUND and may be barred from future IPCA events.
                    </p>
                  </div>
                </div>

                <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                  <CheckCircle className="h-6 w-6 text-pharmaceutical-600 mr-2" />
                  3. Refund Processing
                </h2>
                <div className="text-gray-700 leading-relaxed mb-6">
                  <h3 className="text-xl font-semibold mb-3">
                    3.1 Processing Timeline
                  </h3>
                  <ul className="list-disc list-inside space-y-2 mb-4">
                    <li>
                      Refund requests are processed within 7-10 business days of
                      approval
                    </li>
                    <li>
                      Bank transfers typically take 3-5 additional business days
                    </li>
                    <li>
                      International transfers may take 10-15 business days
                    </li>
                    <li>
                      Processing fees and bank charges are deducted from refund
                      amount
                    </li>
                  </ul>

                  <h3 className="text-xl font-semibold mb-3">
                    3.2 Refund Methods
                  </h3>
                  <ul className="list-disc list-inside space-y-2 mb-4">
                    <li>
                      Refunds will be processed using the original payment
                      method
                    </li>
                    <li>
                      Credit card refunds appear within 2-3 billing cycles
                    </li>
                    <li>
                      Bank transfers require valid account details for
                      processing
                    </li>
                    <li>Cash payments will be refunded via bank transfer</li>
                  </ul>

                  <h3 className="text-xl font-semibold mb-3">
                    3.3 Documentation Required
                  </h3>
                  <ul className="list-disc list-inside space-y-2">
                    <li>
                      Original registration confirmation and payment receipt
                    </li>
                    <li>Written cancellation request with reason</li>
                    <li>Valid identification documents</li>
                    <li>
                      Bank account details for refund processing (if applicable)
                    </li>
                  </ul>
                </div>

                <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                  <CheckCircle className="h-6 w-6 text-pharmaceutical-600 mr-2" />
                  4. Registration Modifications
                </h2>
                <div className="text-gray-700 leading-relaxed mb-6">
                  <h3 className="text-xl font-semibold mb-3">
                    4.1 Category Changes
                  </h3>
                  <ul className="list-disc list-inside space-y-2 mb-4">
                    <li>
                      Registration category changes are permitted up to 30 days
                      before congress
                    </li>
                    <li>
                      Upgrade fees must be paid immediately for category
                      upgrades
                    </li>
                    <li>Downgrades are subject to refund policy terms</li>
                    <li>
                      Student to professional category changes require
                      verification
                    </li>
                  </ul>

                  <h3 className="text-xl font-semibold mb-3">
                    4.2 Participant Transfer
                  </h3>
                  <ul className="list-disc list-inside space-y-2 mb-4">
                    <li>
                      Registration can be transferred to another participant
                      with ₹500 processing fee
                    </li>
                    <li>
                      Transfer requests must be submitted 15 days before
                      congress
                    </li>
                    <li>
                      New participant must meet eligibility criteria for
                      registration category
                    </li>
                    <li>
                      Abstract submissions cannot be transferred between
                      participants
                    </li>
                  </ul>

                  <h3 className="text-xl font-semibold mb-3">
                    4.3 Personal Information Updates
                  </h3>
                  <ul className="list-disc list-inside space-y-2">
                    <li>Name corrections are free with supporting documents</li>
                    <li>
                      Contact information can be updated anytime before congress
                    </li>
                    <li>
                      Institutional affiliation changes require verification
                    </li>
                    <li>
                      Special requirements can be added subject to availability
                    </li>
                  </ul>
                </div>

                <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                  <AlertTriangle className="h-6 w-6 text-pharmaceutical-600 mr-2" />
                  6. Special Circumstances
                </h2>
                <div className="text-gray-700 leading-relaxed mb-6">
                  <h3 className="text-xl font-semibold mb-3">
                    4.1 Medical Emergency
                  </h3>
                  <ul className="list-disc list-inside space-y-2 mb-4">
                    <li>
                      Medical certificates from licensed practitioners required
                    </li>
                    <li>
                      50% refund available regardless of cancellation timing
                    </li>
                    <li>
                      Documentation must be submitted within 7 days of incident
                    </li>
                    <li>
                      Family emergency cases considered on individual basis
                    </li>
                  </ul>

                  <h3 className="text-xl font-semibold mb-3">
                    4.2 Visa Denial
                  </h3>
                  <ul className="list-disc list-inside space-y-2 mb-4">
                    <li>
                      70% refund for international participants with visa denial
                    </li>
                    <li>Official visa rejection letter required</li>
                    <li>Must demonstrate timely visa application submission</li>
                    <li>Applies only to first-time visa applications</li>
                  </ul>

                  <h3 className="text-xl font-semibold mb-3">
                    4.3 Force Majeure Events
                  </h3>
                  <ul className="list-disc list-inside space-y-2">
                    <li>
                      Congress cancellation due to natural disasters, pandemics,
                      or government restrictions
                    </li>
                    <li>Full refund minus non-recoverable costs</li>
                    <li>
                      Alternative arrangements may be offered (virtual
                      participation, future congress credit)
                    </li>
                    <li>
                      Participants will be notified immediately of any such
                      events
                    </li>
                  </ul>
                </div>

                <h2 className="text-2xl font-bold text-gray-800 mb-6">
                  5. Non-Refundable Items & Non-Transferable Registrations
                </h2>
                <div className="text-gray-700 leading-relaxed mb-6">
                  <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded mb-6">
                    <h3 className="text-lg font-semibold text-red-800 mb-3">
                      ⚠️ STRICTLY NON-REFUNDABLE ITEMS - No Exceptions
                    </h3>
                    <p className="text-red-700 mb-4 font-medium">
                      The following items are completely non-refundable under
                      ALL circumstances, including medical emergencies, visa
                      denials, force majeure events, or any other situation:
                    </p>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-semibold text-red-800 mb-2">
                          Administrative Fees:
                        </h4>
                        <ul className="list-disc list-inside space-y-1 text-red-700 text-sm">
                          <li>Processing fees and administrative charges</li>
                          <li>Payment gateway transaction fees</li>
                          <li>System processing costs</li>
                          <li>Document verification charges</li>
                          <li>Registration handling fees</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-red-800 mb-2">
                          Scientific Services:
                        </h4>
                        <ul className="list-disc list-inside space-y-1 text-red-700 text-sm">
                          <li>
                            Abstract submission fees (regardless of acceptance)
                          </li>
                          <li>Peer review processing charges</li>
                          <li>Publication and proceedings fees</li>
                          <li>Certificate issuance costs</li>
                          <li>Scientific evaluation fees</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-red-800 mb-2">
                          Additional Services:
                        </h4>
                        <ul className="list-disc list-inside space-y-1 text-red-700 text-sm">
                          <li>
                            Special events (welcome reception, gala dinner)
                          </li>
                          <li>Tour packages and excursions</li>
                          <li>Congress merchandise and materials</li>
                          <li>VIP lounge access and premium services</li>
                          <li>Workshop fees and special sessions</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-red-800 mb-2">
                          Third-Party Services:
                        </h4>
                        <ul className="list-disc list-inside space-y-1 text-red-700 text-sm">
                          <li>
                            Accommodation bookings (subject to hotel policies)
                          </li>
                          <li>Travel arrangements and transfers</li>
                          <li>Membership fees and certification costs</li>
                          <li>Insurance premiums and visa assistance</li>
                          <li>Digital content and access codes</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="bg-orange-50 border-l-4 border-orange-500 p-6 rounded">
                    <h3 className="text-lg font-semibold text-orange-800 mb-3">
                      🚫 NON-TRANSFERABLE REGISTRATIONS - Important Notice
                    </h3>
                    <p className="text-orange-700 mb-4 font-medium">
                      All registration categories are strictly NON-TRANSFERABLE
                      between different categories once payment is confirmed,
                      except under specific conditions outlined below:
                    </p>

                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-orange-800 mb-2">
                          ❌ PROHIBITED TRANSFERS:
                        </h4>
                        <ul className="list-disc list-inside space-y-1 text-orange-700">
                          <li>
                            <strong>Student to Professional:</strong> Student
                            registrations cannot be upgraded to professional
                            categories
                          </li>
                          <li>
                            <strong>Domestic to International:</strong> Domestic
                            rates cannot be transferred to international
                            participants
                          </li>
                          <li>
                            <strong>Early Bird to Regular:</strong> Early bird
                            discounts are locked to original registration date
                          </li>
                          <li>
                            <strong>Group to Individual:</strong> Group
                            registration benefits cannot be split or transferred
                          </li>
                          <li>
                            <strong>Accompanying Person:</strong> Cannot be
                            transferred to main participant registration
                          </li>
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-semibold text-orange-800 mb-2">
                          ✅ LIMITED TRANSFER OPTIONS (₹500 fee applies):
                        </h4>
                        <ul className="list-disc list-inside space-y-1 text-orange-700">
                          <li>
                            <strong>Same Category Transfer:</strong>{" "}
                            Registration can be transferred to another person in
                            the SAME category only
                          </li>
                          <li>
                            <strong>Within Same Institution:</strong> Transfer
                            permitted within the same organization/institution
                          </li>
                          <li>
                            <strong>Professional to Professional:</strong> Only
                            between equivalent professional categories
                          </li>
                          <li>
                            <strong>15-Day Notice Required:</strong> Transfer
                            requests must be submitted at least 15 days before
                            congress
                          </li>
                        </ul>
                      </div>

                      <div className="bg-orange-100 p-4 rounded mt-4">
                        <p className="text-orange-800 font-medium text-sm">
                          <strong>Important:</strong> Abstract submissions,
                          presentation slots, and scientific program
                          participation are permanently linked to the original
                          registrant and CANNOT be transferred to any other
                          participant under any circumstances.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <h2 className="text-2xl font-bold text-gray-800 mb-6">
                  6. Refund Request Process
                </h2>
                <div className="text-gray-700 leading-relaxed mb-6">
                  <div className="bg-blue-50 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold text-blue-800 mb-4">
                      To request a cancellation and refund:
                    </h3>
                    <ol className="list-decimal list-inside space-y-3 text-blue-700">
                      <li>
                        <strong>Submit Written Request:</strong> Email your
                        cancellation request to
                        <span className="font-mono bg-blue-100 px-2 py-1 rounded ml-1">
                          refunds@74ipc2025.org
                        </span>
                      </li>
                      <li>
                        <strong>Include Required Documents:</strong> Attach
                        registration confirmation, payment receipt, and any
                        supporting documents
                      </li>
                      <li>
                        <strong>Receive Confirmation:</strong> You will receive
                        acknowledgment within 2 business days
                      </li>
                      <li>
                        <strong>Review Process:</strong> Our team will review
                        your request and calculate applicable refund
                      </li>
                      <li>
                        <strong>Approval Notification:</strong> You will be
                        notified of the decision within 5 business days
                      </li>
                      <li>
                        <strong>Refund Processing:</strong> Approved refunds are
                        processed within 7-10 business days
                      </li>
                    </ol>
                  </div>
                </div>

                <h2 className="text-2xl font-bold text-gray-800 mb-6">
                  8. Appeals and Disputes
                </h2>
                <div className="text-gray-700 leading-relaxed mb-6">
                  <p className="mb-4">
                    If you disagree with a refund decision, you may appeal
                    within 10 days of notification:
                  </p>
                  <ul className="list-disc list-inside space-y-2">
                    <li>
                      Submit a formal appeal with additional supporting
                      documentation
                    </li>
                    <li>
                      Appeals are reviewed by the Congress Finance Committee
                    </li>
                    <li>
                      Final decisions are communicated within 15 business days
                    </li>
                    <li>Committee decisions are final and binding</li>
                  </ul>
                </div>

                <h2 className="text-2xl font-bold text-gray-800 mb-6">
                  9. Contact Information
                </h2>
                <div className="bg-pharmaceutical-50 p-6 rounded-lg">
                  <p className="text-gray-700 leading-relaxed mb-4">
                    For cancellation requests and refund inquiries:
                  </p>
                  <div className="space-y-2">
                    <p className="font-semibold text-gray-800">
                      Refunds Department - 74th Indian Pharmaceutical Congress
                    </p>
                    <p className="text-gray-700">
                      Email: refunds@74ipc2025.org
                    </p>
                    <p className="text-gray-700">
                      Phone: +91-80-2234-5678 (Ext. 205)
                    </p>
                    <p className="text-gray-700">
                      Office Hours: Monday - Friday, 9:00 AM - 6:00 PM IST
                    </p>
                    <p className="text-gray-700">
                      Address: Department of Pharmaceutics, JSS College of
                      Pharmacy, Ooty Road, Bengaluru
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
