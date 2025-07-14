import { Quote, ChevronRight, User } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function PresidentAppeal() {
  return (
    <section className="py-20 bg-gradient-to-br from-pharmaceutical-50 to-secondary-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
            Appeal from the President
          </h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 items-center">
          {/* President Info */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <div className="relative w-48 h-60 mx-auto mb-6 rounded-lg overflow-hidden">
                <Image
                  src="/dr_milind.jpeg"
                  alt="Dr. Milind Janrao Umekar"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                Dr. Milind Janrao Umekar
              </h3>
              <p className="text-pharmaceutical-600 font-semibold mb-1">
                President
              </p>
              <p className="text-gray-600 text-sm">
                74th Indian Pharmaceutical Congress Bengaluru
              </p>
            </div>
          </div>

          {/* Appeal Content */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <Quote className="h-12 w-12 text-pharmaceutical-400 mb-6" />

              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                74th Indian Pharmaceutical Congress will be held in Bengaluru in
                December 2025. The theme this year is{" "}
                <span className="font-semibold text-pharmaceutical-600">
                  "AI & TECHNOLOGY IN PHARMA: EDUCATE, INNOVATE, EMPOWER"
                </span>
                . I warmly invite you to support the 74th Indian Pharmaceutical
                Congress by sponsoring events and advertising in the Congress
                materials.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <Link
                  href="/president-message"
                  className="inline-flex items-center justify-center bg-pharmaceutical-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-pharmaceutical-700 transition-colors"
                >
                  Read More
                  <ChevronRight className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  href="/sponsorship"
                  className="inline-flex items-center justify-center border-2 border-pharmaceutical-600 text-pharmaceutical-600 px-6 py-3 rounded-lg font-semibold hover:bg-pharmaceutical-600 hover:text-white transition-colors"
                >
                  Become a Sponsor
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
