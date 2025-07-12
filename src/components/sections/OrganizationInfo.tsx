import { Building2, Users, Award, ExternalLink } from "lucide-react";
import Link from "next/link";

export default function OrganizationInfo() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Hosted By */}
          <div className="text-center">
            <div className="bg-pharmaceutical-50 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
              <Building2 className="h-10 w-10 text-pharmaceutical-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Hosted by</h3>
            <p className="text-xl text-pharmaceutical-600 font-semibold">
              Association of Pharmaceutical Teachers of India
            </p>
            <p className="text-gray-600 mt-2">
              Leading the advancement of pharmaceutical education in India
            </p>
          </div>

          {/* Organized By */}
          <div className="text-center">
            <div className="bg-secondary-50 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
              <Award className="h-10 w-10 text-secondary-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Organized by
            </h3>
            <p className="text-xl text-secondary-600 font-semibold">
              Indian Pharmaceutical Congress Association
            </p>
            <p className="text-gray-600 mt-2">
              Promoting excellence in pharmaceutical sciences and practice
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
