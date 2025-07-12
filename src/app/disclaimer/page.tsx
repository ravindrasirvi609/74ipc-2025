import { Metadata } from "next";
import { AlertTriangle, Shield, Info, ExternalLink } from "lucide-react";

export const metadata: Metadata = {
  title: "Disclaimer - 74th Indian Pharmaceutical Congress 2025",
  description:
    "Disclaimer and legal notices for the 74th Indian Pharmaceutical Congress, Bengaluru 2025.",
};

export default function DisclaimerPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-pharmaceutical-600 to-secondary-900 text-white py-24">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AlertTriangle className="h-16 w-16 text-pharmaceutical-200 mx-auto mb-6" />
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Disclaimer</h1>
          <p className="text-xl md:text-2xl text-pharmaceutical-100">
            Important Legal Notices and Disclaimers
          </p>
        </div>
      </section>

      {/* Disclaimer Content */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="prose prose-lg max-w-none">
              <div className="mb-8">
                <p className="text-gray-600 text-lg">
                  Last updated: July 12, 2025
                </p>
                <p className="text-gray-700 mt-4">
                  This disclaimer applies to the 74th Indian Pharmaceutical
                  Congress website, services, and all related materials. Please
                  read this carefully before using our services.
                </p>
              </div>

              <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                <Info className="h-6 w-6 text-pharmaceutical-600 mr-2" />
                1. General Disclaimer
              </h2>
              <div className="text-gray-700 leading-relaxed mb-6">
                <p className="mb-4">
                  The information contained on this website is for general
                  information purposes only. The Indian Pharmaceutical Congress
                  Association (IPCA) and its organizing partners assume no
                  responsibility for errors or omissions in the contents of this
                  service.
                </p>
                <p className="mb-4">
                  In no event shall IPCA be liable for any special, direct,
                  indirect, consequential, or incidental damages or any damages
                  whatsoever, whether in an action of contract, negligence or
                  other tort, arising out of or in connection with the use of
                  the service or the contents of the service.
                </p>
                <p>
                  IPCA reserves the right to make additions, deletions, or
                  modifications to the contents on the service at any time
                  without prior notice.
                </p>
              </div>

              <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                <Shield className="h-6 w-6 text-pharmaceutical-600 mr-2" />
                2. Website Content and Accuracy
              </h2>
              <div className="text-gray-700 leading-relaxed mb-6">
                <h3 className="text-xl font-semibold mb-3">
                  2.1 Information Accuracy
                </h3>
                <ul className="list-disc list-inside space-y-2 mb-4">
                  <li>
                    We strive to provide accurate and up-to-date information
                  </li>
                  <li>
                    Information may change without notice due to program updates
                  </li>
                  <li>
                    Participants should verify critical details before making
                    travel arrangements
                  </li>
                  <li>
                    We are not responsible for decisions made based on website
                    information
                  </li>
                </ul>

                <h3 className="text-xl font-semibold mb-3">
                  2.2 Technical Information
                </h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>Technical specifications and requirements may change</li>
                  <li>
                    Software compatibility is not guaranteed for all devices
                  </li>
                  <li>
                    We recommend testing technical setups before presentations
                  </li>
                  <li>
                    Backup options should be prepared for technical failures
                  </li>
                </ul>
              </div>

              <h2 className="text-2xl font-bold text-gray-800 mb-6">
                3. Third-Party Services and Links
              </h2>
              <div className="text-gray-700 leading-relaxed mb-6">
                <h3 className="text-xl font-semibold mb-3">
                  3.1 External Links
                </h3>
                <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 mb-4">
                  <p className="text-yellow-800">
                    <strong>Important:</strong> This website may contain links
                    to third-party websites. We have no control over and assume
                    no responsibility for the content, privacy policies, or
                    practices of any third-party sites or services.
                  </p>
                </div>
                <ul className="list-disc list-inside space-y-2 mb-4">
                  <li>Hotel booking platforms and accommodation providers</li>
                  <li>Travel booking services and airlines</li>
                  <li>Payment processing services</li>
                  <li>Social media platforms and networking sites</li>
                  <li>Research databases and publication platforms</li>
                </ul>

                <h3 className="text-xl font-semibold mb-3">
                  3.2 Third-Party Services
                </h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>
                    We are not responsible for service interruptions by third
                    parties
                  </li>
                  <li>
                    Terms and conditions of third-party services apply
                    separately
                  </li>
                  <li>
                    Pricing and availability through third parties may vary
                  </li>
                  <li>
                    Customer support for third-party services must be sought
                    directly
                  </li>
                </ul>
              </div>

              <h2 className="text-2xl font-bold text-gray-800 mb-6">
                4. Medical and Professional Advice
              </h2>
              <div className="text-gray-700 leading-relaxed mb-6">
                <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-4">
                  <p className="text-red-800">
                    <strong>Medical Disclaimer:</strong> The content presented
                    at the congress is for educational purposes only and should
                    not be considered as medical advice, diagnosis, or treatment
                    recommendations.
                  </p>
                </div>
                <ul className="list-disc list-inside space-y-2">
                  <li>
                    All medical information is for educational and research
                    purposes only
                  </li>
                  <li>
                    Consult qualified healthcare professionals for medical
                    decisions
                  </li>
                  <li>
                    Drug information presented may not be applicable in all
                    jurisdictions
                  </li>
                  <li>Regulatory requirements vary by country and region</li>
                  <li>
                    Professional practice guidelines should be followed per
                    local regulations
                  </li>
                </ul>
              </div>

              <h2 className="text-2xl font-bold text-gray-800 mb-6">
                5. Event-Related Disclaimers
              </h2>
              <div className="text-gray-700 leading-relaxed mb-6">
                <h3 className="text-xl font-semibold mb-3">
                  5.1 Program Changes
                </h3>
                <ul className="list-disc list-inside space-y-2 mb-4">
                  <li>
                    Scientific program is subject to change without notice
                  </li>
                  <li>
                    Speaker availability may change due to unforeseen
                    circumstances
                  </li>
                  <li>Session timings and venues may be modified</li>
                  <li>Cancellation of specific sessions may occur</li>
                </ul>

                <h3 className="text-xl font-semibold mb-3">
                  5.2 Force Majeure
                </h3>
                <ul className="list-disc list-inside space-y-2 mb-4">
                  <li>
                    Natural disasters, pandemics, or government restrictions
                  </li>
                  <li>Venue unavailability or technical failures</li>
                  <li>Transportation strikes or service disruptions</li>
                  <li>Other circumstances beyond our reasonable control</li>
                </ul>

                <h3 className="text-xl font-semibold mb-3">
                  5.3 Personal Safety and Security
                </h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>Participants attend the congress at their own risk</li>
                  <li>
                    We are not liable for personal injury, theft, or property
                    damage
                  </li>
                  <li>
                    Participants should take reasonable precautions for personal
                    safety
                  </li>
                  <li>
                    Emergency procedures will be communicated during the event
                  </li>
                </ul>
              </div>

              <h2 className="text-2xl font-bold text-gray-800 mb-6">
                6. Intellectual Property Disclaimer
              </h2>
              <div className="text-gray-700 leading-relaxed mb-6">
                <ul className="list-disc list-inside space-y-2">
                  <li>
                    All content is protected by applicable copyright and
                    intellectual property laws
                  </li>
                  <li>
                    Unauthorized use, reproduction, or distribution is
                    prohibited
                  </li>
                  <li>
                    Trademarks and logos belong to their respective owners
                  </li>
                  <li>
                    Scientific content remains the property of original authors
                  </li>
                  <li>
                    Photography and recording restrictions apply during sessions
                  </li>
                </ul>
              </div>

              <h2 className="text-2xl font-bold text-gray-800 mb-6">
                7. Financial Disclaimers
              </h2>
              <div className="text-gray-700 leading-relaxed mb-6">
                <h3 className="text-xl font-semibold mb-3">
                  7.1 Registration Fees
                </h3>
                <ul className="list-disc list-inside space-y-2 mb-4">
                  <li>
                    All fees are quoted in Indian Rupees (INR) unless otherwise
                    stated
                  </li>
                  <li>Additional charges may apply for optional services</li>
                  <li>
                    Currency fluctuations may affect international participants
                  </li>
                  <li>
                    Payment processing fees are separate from registration costs
                  </li>
                </ul>

                <h3 className="text-xl font-semibold mb-3">
                  7.2 Sponsorship and Advertising
                </h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>
                    Sponsor content does not constitute endorsement by IPCA
                  </li>
                  <li>
                    Commercial relationships are disclosed where applicable
                  </li>
                  <li>
                    Advertising content is responsibility of respective
                    advertisers
                  </li>
                  <li>Product information should be verified independently</li>
                </ul>
              </div>

              <h2 className="text-2xl font-bold text-gray-800 mb-6">
                8. Data and Privacy Disclaimers
              </h2>
              <div className="text-gray-700 leading-relaxed mb-6">
                <p className="mb-4">
                  Data collection and processing are governed by our Privacy
                  Policy. However, please note:
                </p>
                <ul className="list-disc list-inside space-y-2">
                  <li>Internet transmission is never completely secure</li>
                  <li>
                    We cannot guarantee absolute security of transmitted data
                  </li>
                  <li>Participants share information at their own risk</li>
                  <li>
                    Third-party data processors have their own privacy policies
                  </li>
                  <li>
                    Data retention periods may vary based on legal requirements
                  </li>
                </ul>
              </div>

              <h2 className="text-2xl font-bold text-gray-800 mb-6">
                9. Limitation of Liability
              </h2>
              <div className="bg-gray-50 p-6 rounded-lg mb-6">
                <p className="text-gray-700 leading-relaxed mb-4">
                  <strong>Maximum Liability:</strong> In no event shall the
                  total liability of IPCA, its organizers, sponsors, or partners
                  exceed the amount paid by the participant for registration.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  <strong>Excluded Damages:</strong> We shall not be liable for
                  any indirect, incidental, special, consequential, or punitive
                  damages, including but not limited to loss of profits, data,
                  use, goodwill, or other intangible losses.
                </p>
              </div>

              <h2 className="text-2xl font-bold text-gray-800 mb-6">
                10. Governing Law and Jurisdiction
              </h2>
              <div className="text-gray-700 leading-relaxed mb-6">
                <p className="mb-4">
                  This disclaimer and all related matters shall be governed by
                  and construed in accordance with the laws of India. Any
                  disputes arising shall be subject to the exclusive
                  jurisdiction of the courts in Bangalore, Karnataka, India.
                </p>
              </div>

              <h2 className="text-2xl font-bold text-gray-800 mb-6">
                11. Contact Information
              </h2>
              <div className="bg-pharmaceutical-50 p-6 rounded-lg">
                <p className="text-gray-700 leading-relaxed mb-4">
                  If you have questions about this disclaimer or need
                  clarification on any matter:
                </p>
                <div className="space-y-2">
                  <p className="font-semibold text-gray-800">
                    Legal Department - 74th Indian Pharmaceutical Congress
                  </p>
                  <p className="text-gray-700">Email: legal@74ipc2025.org</p>
                  <p className="text-gray-700">
                    Phone: +91-80-2234-5678 (Ext. 301)
                  </p>
                  <p className="text-gray-700">
                    Address: Department of Pharmaceutics, JSS College of
                    Pharmacy, Ooty Road, Bengaluru
                  </p>
                </div>
              </div>

              <div className="mt-8 p-4 bg-blue-50 border-l-4 border-blue-500 rounded">
                <p className="text-blue-800 text-sm">
                  <strong>Note:</strong> By using this website and participating
                  in the congress, you acknowledge that you have read,
                  understood, and agree to be bound by this disclaimer. If you
                  do not agree with any part of this disclaimer, please do not
                  use our services.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
