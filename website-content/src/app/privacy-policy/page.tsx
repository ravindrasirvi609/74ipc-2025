import { Metadata } from "next";
import { Shield, Eye, Lock, Database, UserCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy - 74th Indian Pharmaceutical Congress 2025",
  description:
    "Privacy Policy for the 74th Indian Pharmaceutical Congress, Bengaluru 2025.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-pharmaceutical-600 to-secondary-900 text-white py-24">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Shield className="h-16 w-16 text-pharmaceutical-200 mx-auto mb-6" />
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Privacy Policy
          </h1>
          <p className="text-xl md:text-2xl text-pharmaceutical-100">
            Your Privacy Matters to Us
          </p>
        </div>
      </section>

      {/* Privacy Policy Content */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="prose prose-lg max-w-none">
              <div className="mb-8">
                <p className="text-gray-600 text-lg">
                  Last updated: July 12, 2025
                </p>
                <p className="text-gray-700 mt-4">
                  The Indian Pharmaceutical Congress Association (IPCA) is
                  committed to protecting your privacy. This policy explains how
                  we collect, use, and safeguard your information when you use
                  our services for the 74th Indian Pharmaceutical Congress.
                </p>
              </div>

              <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                <Database className="h-6 w-6 text-pharmaceutical-600 mr-2" />
                1. Information We Collect
              </h2>
              <div className="text-gray-700 leading-relaxed mb-6">
                <h3 className="text-xl font-semibold mb-3">
                  1.1 Personal Information
                </h3>
                <ul className="list-disc list-inside space-y-2 mb-4">
                  <li>Name, designation, and professional affiliation</li>
                  <li>Contact information (email, phone, address)</li>
                  <li>
                    Educational qualifications and professional experience
                  </li>
                  <li>Registration category and payment information</li>
                  <li>Dietary restrictions and accessibility requirements</li>
                </ul>

                <h3 className="text-xl font-semibold mb-3">
                  1.2 Technical Information
                </h3>
                <ul className="list-disc list-inside space-y-2 mb-4">
                  <li>IP address and browser information</li>
                  <li>Website usage patterns and preferences</li>
                  <li>Cookies and tracking technologies</li>
                  <li>Device information and operating system</li>
                </ul>

                <h3 className="text-xl font-semibold mb-3">
                  1.3 Scientific Submissions
                </h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>Abstract content and research data</li>
                  <li>Author information and institutional affiliations</li>
                  <li>Presentation materials and supporting documents</li>
                  <li>Peer review feedback and correspondence</li>
                </ul>
              </div>

              <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                <Eye className="h-6 w-6 text-pharmaceutical-600 mr-2" />
                2. How We Use Your Information
              </h2>
              <div className="text-gray-700 leading-relaxed mb-6">
                <h3 className="text-xl font-semibold mb-3">
                  2.1 Congress Operations
                </h3>
                <ul className="list-disc list-inside space-y-2 mb-4">
                  <li>
                    Processing registrations and managing participant database
                  </li>
                  <li>Organizing scientific sessions and networking events</li>
                  <li>Providing congress materials and certificates</li>
                  <li>Managing accommodation and travel arrangements</li>
                  <li>Facilitating payment processing and invoicing</li>
                </ul>

                <h3 className="text-xl font-semibold mb-3">
                  2.2 Communication
                </h3>
                <ul className="list-disc list-inside space-y-2 mb-4">
                  <li>Sending congress updates and important announcements</li>
                  <li>Providing scientific program and schedule changes</li>
                  <li>Distributing educational materials and resources</li>
                  <li>Conducting post-event surveys and feedback collection</li>
                </ul>

                <h3 className="text-xl font-semibold mb-3">
                  2.3 Publication and Documentation
                </h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>Publishing abstracts in congress proceedings</li>
                  <li>Creating participant directories (with consent)</li>
                  <li>Documenting congress activities and achievements</li>
                  <li>Preparing reports for stakeholders and sponsors</li>
                </ul>
              </div>

              <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                <UserCheck className="h-6 w-6 text-pharmaceutical-600 mr-2" />
                3. Information Sharing and Disclosure
              </h2>
              <div className="text-gray-700 leading-relaxed mb-6">
                <h3 className="text-xl font-semibold mb-3">
                  3.1 Authorized Sharing
                </h3>
                <ul className="list-disc list-inside space-y-2 mb-4">
                  <li>
                    With congress sponsors and exhibitors (limited contact
                    information only)
                  </li>
                  <li>With scientific committee members for abstract review</li>
                  <li>
                    With venue partners for logistics and security purposes
                  </li>
                  <li>With payment processors for transaction completion</li>
                  <li>With regulatory authorities when legally required</li>
                </ul>

                <h3 className="text-xl font-semibold mb-3">
                  3.2 Consent-Based Sharing
                </h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>
                    Including participant information in congress directory
                  </li>
                  <li>Sharing contact details for networking purposes</li>
                  <li>
                    Using photographs and videos for promotional materials
                  </li>
                  <li>Distributing research findings and congress outcomes</li>
                </ul>
              </div>

              <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                <Lock className="h-6 w-6 text-pharmaceutical-600 mr-2" />
                4. Data Security and Protection
              </h2>
              <div className="text-gray-700 leading-relaxed mb-6">
                <ul className="list-disc list-inside space-y-2">
                  <li>SSL encryption for all data transmission</li>
                  <li>Secure servers with restricted access controls</li>
                  <li>Regular security audits and vulnerability assessments</li>
                  <li>
                    Staff training on data protection and privacy practices
                  </li>
                  <li>Incident response procedures for data breaches</li>
                  <li>
                    Compliance with applicable data protection regulations
                  </li>
                </ul>
              </div>

              <h2 className="text-2xl font-bold text-gray-800 mb-6">
                5. Your Rights and Choices
              </h2>
              <div className="text-gray-700 leading-relaxed mb-6">
                <h3 className="text-xl font-semibold mb-3">
                  5.1 Access and Control
                </h3>
                <ul className="list-disc list-inside space-y-2 mb-4">
                  <li>Request access to your personal information</li>
                  <li>Update or correct inaccurate data</li>
                  <li>Delete your account and associated data</li>
                  <li>Opt-out of non-essential communications</li>
                  <li>Withdraw consent for data processing</li>
                </ul>

                <h3 className="text-xl font-semibold mb-3">
                  5.2 Communication Preferences
                </h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>Choose types of emails and notifications you receive</li>
                  <li>Set frequency preferences for congress updates</li>
                  <li>Manage subscription to future congress communications</li>
                  <li>
                    Control sharing of contact information with third parties
                  </li>
                </ul>
              </div>

              <h2 className="text-2xl font-bold text-gray-800 mb-6">
                6. Cookies and Tracking Technologies
              </h2>
              <div className="text-gray-700 leading-relaxed mb-6">
                <p className="mb-4">
                  We use cookies and similar technologies to enhance your
                  website experience:
                </p>
                <ul className="list-disc list-inside space-y-2">
                  <li>
                    <strong>Essential Cookies:</strong> Required for basic
                    website functionality
                  </li>
                  <li>
                    <strong>Analytics Cookies:</strong> Help us understand
                    website usage patterns
                  </li>
                  <li>
                    <strong>Preference Cookies:</strong> Remember your settings
                    and preferences
                  </li>
                  <li>
                    <strong>Marketing Cookies:</strong> Deliver relevant content
                    and advertisements
                  </li>
                </ul>
                <p className="mt-4">
                  You can manage cookie preferences through your browser
                  settings or our cookie consent tool.
                </p>
              </div>

              <h2 className="text-2xl font-bold text-gray-800 mb-6">
                7. Data Retention
              </h2>
              <div className="text-gray-700 leading-relaxed mb-6">
                <ul className="list-disc list-inside space-y-2">
                  <li>
                    Registration data: Retained for 7 years for accounting and
                    legal purposes
                  </li>
                  <li>
                    Scientific submissions: Archived permanently as part of
                    congress proceedings
                  </li>
                  <li>
                    Marketing communications: Retained until unsubscribe or data
                    deletion request
                  </li>
                  <li>
                    Website analytics: Aggregated data retained for 24 months
                  </li>
                  <li>
                    Financial records: Retained as per applicable tax and audit
                    requirements
                  </li>
                </ul>
              </div>

              <h2 className="text-2xl font-bold text-gray-800 mb-6">
                8. International Data Transfers
              </h2>
              <div className="text-gray-700 leading-relaxed mb-6">
                <p>
                  Your information may be transferred to and processed in
                  countries outside India for congress operations. We ensure
                  appropriate safeguards are in place to protect your data
                  during such transfers, including contractual protections and
                  compliance with applicable data protection standards.
                </p>
              </div>

              <h2 className="text-2xl font-bold text-gray-800 mb-6">
                9. Updates to This Policy
              </h2>
              <div className="text-gray-700 leading-relaxed mb-6">
                <p>
                  We may update this privacy policy periodically to reflect
                  changes in our practices or legal requirements. We will notify
                  you of significant changes through email or website notices.
                  Your continued use of our services constitutes acceptance of
                  the updated policy.
                </p>
              </div>

              <h2 className="text-2xl font-bold text-gray-800 mb-6">
                10. Contact Us
              </h2>
              <div className="bg-pharmaceutical-50 p-6 rounded-lg">
                <p className="text-gray-700 leading-relaxed mb-4">
                  If you have questions about this privacy policy or want to
                  exercise your rights, please contact our Privacy Officer:
                </p>
                <div className="space-y-2">
                  <p className="font-semibold text-gray-800">
                    Privacy Officer - 74th Indian Pharmaceutical Congress
                  </p>
                  <p className="text-gray-700">Email: privacy@74ipc2025.org</p>
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
