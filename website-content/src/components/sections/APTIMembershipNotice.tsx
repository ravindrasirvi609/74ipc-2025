import React from "react";
import { Users, ExternalLink } from "lucide-react";

export default function APTIMembershipNotice() {
  return (
    <section className="py-16 bg-blue-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-xl shadow-lg p-8 border-l-4 border-blue-500">
          <div className="flex items-start space-x-4">
            <div className="bg-blue-100 rounded-full p-3 flex-shrink-0">
              <Users className="h-6 w-6 text-blue-600" />
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                Special Discounted Registration for APTI Members
              </h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                Please note that a discounted registration fee is offered for
                members of APTI and delegates from Individual & Institutional
                membership of APTI. If you are not a member of APTI you are
                encouraged to become a member by clicking on the link provided.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://www.aptindia.org/membership"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  Become APTI Member
                  <ExternalLink className="ml-2 h-5 w-5" />
                </a>
                <div className="bg-green-50 border border-green-200 rounded-lg p-3">
                  <div className="text-sm text-green-800">
                    <strong>APTI Member Benefits:</strong>
                    <br />
                    • 10% discount on registration fees
                    <br />
                    • Access to exclusive sessions
                    <br />• Networking opportunities
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
