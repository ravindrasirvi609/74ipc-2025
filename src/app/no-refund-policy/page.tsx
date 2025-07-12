import { Metadata } from "next";
import { XCircle, AlertTriangle, Clock, CreditCard } from "lucide-react";

export const metadata: Metadata = {
  title: "No Refund Policy - 74th Indian Pharmaceutical Congress 2025",
  description:
    "No Refund Policy for specific items and services at the 74th Indian Pharmaceutical Congress, Bengaluru 2025.",
};

export default function NoRefundPolicyPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-red-600 to-red-800 text-white py-24">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <XCircle className="h-16 w-16 text-red-200 mx-auto mb-6" />
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            No Refund Policy
          </h1>
          <p className="text-xl md:text-2xl text-red-100">
            Non-Refundable Items and Services
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
                  This policy outlines specific items and services that are
                  non-refundable under any circumstances for the 74th Indian
                  Pharmaceutical Congress.
                </p>
              </div>

              <div className="bg-red-50 border-l-4 border-red-500 p-6 mb-8 rounded">
                <div className="flex items-start">
                  <AlertTriangle className="h-6 w-6 text-red-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold text-red-800 mb-2">
                      Important Notice
                    </h3>
                    <p className="text-red-700">
                      The following items and services are completely
                      non-refundable regardless of circumstances, including
                      medical emergencies, visa issues, or force majeure events.
                      Please consider this carefully before making your
                      purchases.
                    </p>
                  </div>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                <CreditCard className="h-6 w-6 text-red-600 mr-2" />
                1. Non-Refundable Fees and Services
              </h2>
              <div className="text-gray-700 leading-relaxed mb-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-red-50 p-6 rounded-lg border-l-4 border-red-500">
                    <h3 className="text-lg font-semibold text-red-800 mb-3">
                      Processing Fees
                    </h3>
                    <ul className="text-red-700 space-y-2 text-sm">
                      <li>• Registration processing charges</li>
                      <li>• Payment gateway fees</li>
                      <li>• Administrative handling charges</li>
                      <li>• System processing costs</li>
                      <li>• Document verification fees</li>
                    </ul>
                  </div>

                  <div className="bg-red-50 p-6 rounded-lg border-l-4 border-red-500">
                    <h3 className="text-lg font-semibold text-red-800 mb-3">
                      Scientific Services
                    </h3>
                    <ul className="text-red-700 space-y-2 text-sm">
                      <li>• Abstract submission fees</li>
                      <li>• Peer review processing charges</li>
                      <li>• Publication fees</li>
                      <li>• Certificate issuance costs</li>
                      <li>• Scientific evaluation fees</li>
                    </ul>
                  </div>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-gray-800 mb-6">
                2. Additional Services (Non-Refundable)
              </h2>
              <div className="text-gray-700 leading-relaxed mb-6">
                <div className="space-y-6">
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold mb-3 text-gray-800">
                      2.1 Special Events and Tours
                    </h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <ul className="list-disc list-inside space-y-2">
                        <li>Welcome reception tickets</li>
                        <li>Gala dinner reservations</li>
                        <li>Cultural event bookings</li>
                        <li>City tour packages</li>
                        <li>Industrial visit fees</li>
                      </ul>
                      <ul className="list-disc list-inside space-y-2">
                        <li>Networking event charges</li>
                        <li>Special workshop fees</li>
                        <li>VIP lounge access</li>
                        <li>Premium service charges</li>
                        <li>Exclusive session access</li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold mb-3 text-gray-800">
                      2.2 Merchandise and Materials
                    </h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <ul className="list-disc list-inside space-y-2">
                        <li>Congress bags and kits</li>
                        <li>Branded merchandise</li>
                        <li>Books and publications</li>
                        <li>USB drives with content</li>
                        <li>Conference proceedings</li>
                      </ul>
                      <ul className="list-disc list-inside space-y-2">
                        <li>Certificates and awards</li>
                        <li>Digital access codes</li>
                        <li>Printed materials</li>
                        <li>Name badges and lanyards</li>
                        <li>Promotional items</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-gray-800 mb-6">
                3. Accommodation Bookings
              </h2>
              <div className="text-gray-700 leading-relaxed mb-6">
                <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded">
                  <h3 className="text-lg font-semibold text-yellow-800 mb-3">
                    Hotel Booking Policy
                  </h3>
                  <p className="text-yellow-700 mb-4">
                    Accommodation bookings made through our congress partners
                    are subject to individual hotel cancellation policies and
                    are generally non-refundable.
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-yellow-700">
                    <li>Pre-paid hotel reservations</li>
                    <li>Group booking commitments</li>
                    <li>Special rate accommodations</li>
                    <li>Extended stay packages</li>
                    <li>Room upgrade charges</li>
                    <li>Additional service bookings (spa, dining, etc.)</li>
                  </ul>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-gray-800 mb-6">
                4. Travel Arrangements
              </h2>
              <div className="text-gray-700 leading-relaxed mb-6">
                <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded">
                  <h3 className="text-lg font-semibold text-blue-800 mb-3">
                    Transportation Services
                  </h3>
                  <p className="text-blue-700 mb-4">
                    Travel arrangements made through congress-affiliated
                    services or pre-paid transportation bookings are
                    non-refundable.
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-blue-700">
                    <li>Airport transfer bookings</li>
                    <li>Group transportation reservations</li>
                    <li>Shuttle service payments</li>
                    <li>Car rental arrangements</li>
                    <li>Travel insurance premiums</li>
                    <li>Visa processing assistance fees</li>
                  </ul>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-gray-800 mb-6">
                5. Membership and Certification Fees
              </h2>
              <div className="text-gray-700 leading-relaxed mb-6">
                <div className="space-y-4">
                  <div className="bg-purple-50 p-6 rounded-lg border-l-4 border-purple-500">
                    <h3 className="text-lg font-semibold text-purple-800 mb-3">
                      Professional Services
                    </h3>
                    <ul className="list-disc list-inside space-y-2 text-purple-700">
                      <li>IPCA membership application fees</li>
                      <li>Professional certification costs</li>
                      <li>Continuing education credit fees</li>
                      <li>Professional development workshop charges</li>
                      <li>Accreditation and validation fees</li>
                    </ul>
                  </div>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                <Clock className="h-6 w-6 text-red-600 mr-2" />
                6. Time-Sensitive Services
              </h2>
              <div className="text-gray-700 leading-relaxed mb-6">
                <p className="mb-4">
                  The following services become non-refundable once processed or
                  delivered:
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-3">
                      Immediate Processing
                    </h3>
                    <ul className="list-disc list-inside space-y-2">
                      <li>Digital content downloads</li>
                      <li>Online access credentials</li>
                      <li>Email communications sent</li>
                      <li>Instant confirmations</li>
                      <li>Digital certificates issued</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-3">
                      Upon Delivery
                    </h3>
                    <ul className="list-disc list-inside space-y-2">
                      <li>Physical materials shipped</li>
                      <li>Printed name badges</li>
                      <li>Customized items produced</li>
                      <li>Services already rendered</li>
                      <li>Third-party bookings confirmed</li>
                    </ul>
                  </div>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-gray-800 mb-6">
                7. No Exceptions Policy
              </h2>
              <div className="bg-red-100 border-2 border-red-300 p-6 rounded-lg mb-6">
                <h3 className="text-lg font-semibold text-red-800 mb-3">
                  Circumstances Where No Refunds Apply
                </h3>
                <p className="text-red-700 mb-4">
                  The no-refund policy applies even in the following exceptional
                  circumstances:
                </p>
                <ul className="list-disc list-inside space-y-2 text-red-700">
                  <li>
                    <strong>Medical Emergencies:</strong> No refunds for
                    non-refundable items even with medical certificates
                  </li>
                  <li>
                    <strong>Visa Denials:</strong> Processing fees and
                    non-refundable services remain chargeable
                  </li>
                  <li>
                    <strong>Force Majeure:</strong> Pre-paid third-party
                    services may not be recoverable
                  </li>
                  <li>
                    <strong>Personal Emergencies:</strong> Non-refundable items
                    cannot be refunded regardless of circumstances
                  </li>
                  <li>
                    <strong>Change of Plans:</strong> Personal decisions do not
                    override no-refund policies
                  </li>
                  <li>
                    <strong>Event Modifications:</strong> Changes to program do
                    not entitle refunds for non-refundable items
                  </li>
                </ul>
              </div>

              <h2 className="text-2xl font-bold text-gray-800 mb-6">
                8. Alternative Options
              </h2>
              <div className="text-gray-700 leading-relaxed mb-6">
                <p className="mb-4">
                  While refunds are not available for the items listed above, we
                  may offer the following alternatives where possible:
                </p>
                <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
                  <ul className="list-disc list-inside space-y-2 text-green-700">
                    <li>
                      <strong>Transfer of Benefits:</strong> Some services may
                      be transferred to another eligible participant
                    </li>
                    <li>
                      <strong>Future Credit:</strong> Certain fees may be
                      applied as credit toward future IPCA events
                    </li>
                    <li>
                      <strong>Digital Alternatives:</strong> Physical items may
                      be replaced with digital equivalents
                    </li>
                    <li>
                      <strong>Partial Exchanges:</strong> Some merchandise may
                      be exchanged for items of equal value
                    </li>
                    <li>
                      <strong>Documentation:</strong> Proof of purchase provided
                      for insurance or tax purposes
                    </li>
                  </ul>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-gray-800 mb-6">
                9. Acknowledgment Required
              </h2>
              <div className="bg-gray-100 p-6 rounded-lg mb-6">
                <p className="text-gray-700 leading-relaxed mb-4">
                  By proceeding with any purchase of non-refundable items or
                  services, you explicitly acknowledge and agree that:
                </p>
                <ol className="list-decimal list-inside space-y-2 text-gray-700">
                  <li>You have read and understood this No Refund Policy</li>
                  <li>
                    You accept that the specified items are non-refundable under
                    all circumstances
                  </li>
                  <li>You will not dispute charges for non-refundable items</li>
                  <li>
                    You understand that exceptional circumstances do not
                    override this policy
                  </li>
                  <li>
                    You have considered all risks before making your purchase
                  </li>
                </ol>
              </div>

              <h2 className="text-2xl font-bold text-gray-800 mb-6">
                10. Contact Information
              </h2>
              <div className="bg-pharmaceutical-50 p-6 rounded-lg">
                <p className="text-gray-700 leading-relaxed mb-4">
                  For questions about non-refundable items or to explore
                  alternative options:
                </p>
                <div className="space-y-2">
                  <p className="font-semibold text-gray-800">
                    No Refund Policy Inquiries - 74th Indian Pharmaceutical
                    Congress
                  </p>
                  <p className="text-gray-700">Email: norefund@74ipc2025.org</p>
                  <p className="text-gray-700">
                    Phone: +91-80-2234-5678 (Ext. 206)
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
      </section>
    </div>
  );
}
