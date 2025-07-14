import { Metadata } from "next";
import { FileText, Shield, CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Terms of Service - 74th Indian Pharmaceutical Congress 2025",
  description:
    "Terms of Service for the 74th Indian Pharmaceutical Congress, Bengaluru 2025.",
};

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-pharmaceutical-600 to-secondary-900 text-white py-24">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FileText className="h-16 w-16 text-pharmaceutical-200 mx-auto mb-6" />
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Terms of Service
          </h1>
          <p className="text-xl md:text-2xl text-pharmaceutical-100">
            74th Indian Pharmaceutical Congress, Bengaluru 2025
          </p>
        </div>
      </section>

      {/* Terms Content */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="prose prose-lg max-w-none">
              <div className="mb-8">
                <p className="text-gray-600 text-lg">
                  Last updated: July 12, 2025
                </p>
              </div>

              <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                <CheckCircle className="h-6 w-6 text-pharmaceutical-600 mr-2" />
                1. Acceptance of Terms
              </h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                By accessing and using the 74th Indian Pharmaceutical Congress
                website and services, you accept and agree to be bound by the
                terms and provision of this agreement. These terms apply to all
                visitors, users, and others who access or use the service.
              </p>

              <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                <CheckCircle className="h-6 w-6 text-pharmaceutical-600 mr-2" />
                2. Registration and Participation
              </h2>
              <div className="text-gray-700 leading-relaxed mb-6">
                <h3 className="text-xl font-semibold mb-3">
                  2.1 Registration Requirements
                </h3>
                <ul className="list-disc list-inside space-y-2 mb-4">
                  <li>
                    All participants must complete the registration process and
                    pay applicable fees
                  </li>
                  <li>
                    Registration information must be accurate and complete
                  </li>
                  <li>
                    Participants must provide valid identification documents
                    when requested
                  </li>
                  <li>
                    Only registered participants will be allowed entry to
                    congress venues
                  </li>
                </ul>

                <h3 className="text-xl font-semibold mb-3">
                  2.2 Categories and Fees
                </h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>
                    Different registration categories have specific eligibility
                    criteria
                  </li>
                  <li>
                    Student registrations require valid student ID and
                    institutional verification
                  </li>
                  <li>
                    International participants must comply with visa
                    requirements
                  </li>
                  <li>
                    Group registrations are subject to minimum participant
                    requirements
                  </li>
                </ul>
              </div>

              <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                <CheckCircle className="h-6 w-6 text-pharmaceutical-600 mr-2" />
                3. Payment Terms
              </h2>
              <div className="text-gray-700 leading-relaxed mb-6">
                <ul className="list-disc list-inside space-y-2">
                  <li>All payments must be made in Indian Rupees (INR)</li>
                  <li>
                    Registration fees are non-transferable between categories
                  </li>
                  <li>
                    Payment confirmation is required for registration completion
                  </li>
                  <li>
                    Additional charges may apply for optional services and
                    amenities
                  </li>
                  <li>
                    GST will be added as applicable per Indian tax regulations
                  </li>
                </ul>
              </div>

              <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                <CheckCircle className="h-6 w-6 text-pharmaceutical-600 mr-2" />
                4. Scientific Submissions
              </h2>
              <div className="text-gray-700 leading-relaxed mb-6">
                <h3 className="text-xl font-semibold mb-3">
                  4.1 Abstract Submission
                </h3>
                <ul className="list-disc list-inside space-y-2 mb-4">
                  <li>
                    All abstracts must be original work and not published
                    elsewhere
                  </li>
                  <li>
                    Submissions must follow specified guidelines and deadlines
                  </li>
                  <li>
                    Authors retain copyright but grant IPCA presentation rights
                  </li>
                  <li>
                    Acceptance is subject to scientific review and space
                    availability
                  </li>
                </ul>

                <h3 className="text-xl font-semibold mb-3">
                  4.2 Presentation Requirements
                </h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>
                    Presenting authors must be registered for the congress
                  </li>
                  <li>
                    Non-attendance may result in withdrawal of abstract from
                    proceedings
                  </li>
                  <li>
                    Audio-visual equipment will be provided as per
                    specifications
                  </li>
                  <li>Presentation time limits must be strictly observed</li>
                </ul>
              </div>

              <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                <CheckCircle className="h-6 w-6 text-pharmaceutical-600 mr-2" />
                5. Code of Conduct
              </h2>
              <div className="text-gray-700 leading-relaxed mb-6">
                <ul className="list-disc list-inside space-y-2">
                  <li>
                    All participants must maintain professional behavior at all
                    times
                  </li>
                  <li>
                    Discrimination, harassment, or inappropriate conduct will
                    not be tolerated
                  </li>
                  <li>
                    Participants must respect intellectual property rights
                  </li>
                  <li>
                    Photography and recording are subject to organizer
                    permissions
                  </li>
                  <li>
                    Violation of conduct rules may result in immediate expulsion
                  </li>
                </ul>
              </div>

              <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                <CheckCircle className="h-6 w-6 text-pharmaceutical-600 mr-2" />
                6. Liability and Insurance
              </h2>
              <div className="text-gray-700 leading-relaxed mb-6">
                <ul className="list-disc list-inside space-y-2">
                  <li>
                    IPCA and organizers are not liable for personal injury or
                    property loss
                  </li>
                  <li>
                    Participants are advised to obtain comprehensive travel
                    insurance
                  </li>
                  <li>
                    Medical emergencies will be handled as per available
                    facilities
                  </li>
                  <li>
                    Force majeure events may result in program modifications
                  </li>
                  <li>
                    Participants attend at their own risk and responsibility
                  </li>
                </ul>
              </div>

              <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                <CheckCircle className="h-6 w-6 text-pharmaceutical-600 mr-2" />
                7. Intellectual Property
              </h2>
              <div className="text-gray-700 leading-relaxed mb-6">
                <ul className="list-disc list-inside space-y-2">
                  <li>All congress materials are protected by copyright</li>
                  <li>
                    Unauthorized reproduction or distribution is prohibited
                  </li>
                  <li>
                    IPCA retains rights to congress proceedings and publications
                  </li>
                  <li>
                    Participants grant permission for photography and
                    videography during sessions
                  </li>
                </ul>
              </div>

              <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                <CheckCircle className="h-6 w-6 text-pharmaceutical-600 mr-2" />
                8. Modifications and Updates
              </h2>
              <div className="text-gray-700 leading-relaxed mb-6">
                <p>
                  IPCA reserves the right to modify these terms at any time.
                  Participants will be notified of significant changes through
                  official channels. Continued participation constitutes
                  acceptance of updated terms.
                </p>
              </div>

              <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                <CheckCircle className="h-6 w-6 text-pharmaceutical-600 mr-2" />
                9. Contact Information
              </h2>
              <div className="bg-pharmaceutical-50 p-6 rounded-lg">
                <p className="text-gray-700 leading-relaxed">
                  For questions regarding these terms of service, please
                  contact:
                </p>
                <div className="mt-4 space-y-2">
                  <p className="font-semibold text-gray-800">
                    74th Indian Pharmaceutical Congress
                  </p>
                  <p className="text-gray-700">Email: info@74ipc2025.org</p>
                  <p className="text-gray-700">Phone: +91-80-2234-5678</p>
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
