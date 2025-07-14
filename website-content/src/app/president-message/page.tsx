import { Metadata } from "next";
import Image from "next/image";
import { Quote } from "lucide-react";

export const metadata: Metadata = {
  title: "President's Message - 74th Indian Pharmaceutical Congress 2025",
  description:
    "Message from Dr. Milind Janrao Umekar, President of the 74th Indian Pharmaceutical Congress, Bengaluru 2025.",
};

export default function PresidentMessagePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-pharmaceutical-600 to-secondary-900 text-white py-24">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            President's Message
          </h1>
          <p className="text-xl md:text-2xl text-pharmaceutical-100">
            74th Indian Pharmaceutical Congress, Bengaluru 2025
          </p>
        </div>
      </section>

      {/* President's Message */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12 items-start">
            {/* President's Photo */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                <div className="relative w-64 h-80 mx-auto mb-6 rounded-lg overflow-hidden">
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
                <p className="text-pharmaceutical-600 font-semibold">
                  President
                </p>
                <p className="text-gray-600 text-sm">
                  74th Indian Pharmaceutical Congress, Bengaluru
                </p>
              </div>
            </div>

            {/* Message Content */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg shadow-lg p-8">
                <Quote className="h-12 w-12 text-pharmaceutical-400 mb-6" />

                <div className="prose prose-lg max-w-none">
                  <p className="text-gray-700 leading-relaxed mb-6">
                    The Indian Pharmaceutical Congress (IPC) stands as the most
                    significant annual event for the pharmacy profession in
                    India. Over the years, it has evolved into a prominent
                    platform showcasing the advancements in the field. One of
                    its defining characteristics is its nationwide reach,
                    rotating locations to connect with professionals across the
                    country. The Congress draws stakeholders from all key
                    sectors—academia, regulation, and industry—and serves as an
                    inspiring window into the profession for countless students,
                    leaving a lasting impact on their aspirations.
                  </p>

                  <p className="text-gray-700 leading-relaxed mb-6">
                    74th Indian Pharmaceutical Congress will be held in
                    Bengaluru in December 2025. The theme this year is{" "}
                    <strong className="text-pharmaceutical-600">
                      "AI & TECHNOLOGY IN PHARMA: EDUCATE, INNOVATE, EMPOWER"
                    </strong>
                    . Our team of strong dedicated LOC has already started
                    working on various aspects of the congress. The four
                    important pillars of any successful Congress is scientific
                    programme, the venue, the exhibition and the
                    arrangement/execution of the event. This year, the venue is
                    BIEC, which is rate as the best venue IPC ever had till
                    date. The scientific committee will work with Scientific
                    convener of IPCA to put forth a relevant programme
                    meaningful to all participants.
                  </p>

                  <p className="text-gray-700 leading-relaxed mb-6">
                    In recent years, industry participation has seen a decline.
                    This year, we are determined to reverse that trend by
                    designing an agenda that is both engaging and relevant to
                    industry stakeholders, addressing current challenges they
                    face. As India aspires to become a global pharmaceutical
                    powerhouse, it is crucial to simultaneously elevate
                    education and pharmacy practice. We anticipate productive,
                    interactive sessions that will culminate in actionable
                    outcomes aimed at achieving this vision—with a strong
                    emphasis on quality over quantity.
                  </p>

                  <p className="text-gray-700 leading-relaxed mb-6">
                    We warmly invite you to support the 74th Indian
                    Pharmaceutical Congress by sponsoring events and advertising
                    in the Congress materials. Our team is committed to
                    delivering the highest level of value and satisfaction to
                    all participants. Please join us to make the Congress a
                    successful event.
                  </p>

                  <p className="text-gray-700 leading-relaxed mb-8">
                    Please join us to make the Congress a successful event.
                  </p>

                  <div className="border-t border-gray-200 pt-6">
                    <p className="font-bold text-gray-800 mb-1">
                      Dr. Milind Janrao Umekar
                    </p>
                    <p className="text-pharmaceutical-600 font-semibold">
                      President,
                    </p>
                    <p className="text-gray-600">
                      74th Indian Pharmaceutical Congress, Bengaluru
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-pharmaceutical-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Join Us in Making History
          </h2>
          <p className="text-xl mb-8 text-pharmaceutical-100">
            Be part of the 74th Indian Pharmaceutical Congress and contribute to
            the future of pharmacy in India.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/registration"
              className="bg-white text-pharmaceutical-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Register Now
            </a>
            <a
              href="/sponsorship"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-pharmaceutical-600 transition-colors"
            >
              Become a Sponsor
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
