import { Metadata } from "next";
import {
  Microscope,
  BookOpen,
  Award,
  Users,
  FileText,
  Clock,
  Calendar,
  ChevronRight,
  AlertTriangle,
  CheckCircle,
  Mail,
  Phone,
  Globe,
  X,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Scientific Program",
  description:
    "Explore the comprehensive scientific program of the 74th Indian Pharmaceutical Congress 2025 featuring cutting-edge research presentations, workshops, and symposiums.",
};

const scientificTracks = [
  {
    title: "AI in Drug Discovery",
    description:
      "Machine learning applications in pharmaceutical research and development",
    sessions: 8,
    speakers: 12,
    topics: [
      "Machine Learning in QSAR",
      "AI-driven Target Identification",
      "Virtual Screening",
      "Drug-Drug Interaction Prediction",
    ],
  },
  {
    title: "Digital Health & Telemedicine",
    description:
      "Technology-enabled healthcare delivery and patient management systems",
    sessions: 6,
    speakers: 10,
    topics: [
      "Remote Patient Monitoring",
      "Digital Therapeutics",
      "mHealth Applications",
      "Healthcare Analytics",
    ],
  },
  {
    title: "Pharmaceutical Manufacturing 4.0",
    description:
      "Smart manufacturing, automation, and quality control in pharmaceutical production",
    sessions: 7,
    speakers: 11,
    topics: [
      "Process Analytical Technology",
      "Continuous Manufacturing",
      "IoT in Pharma",
      "Quality by Design",
    ],
  },
  {
    title: "Regulatory Technology",
    description:
      "Digital solutions for regulatory compliance and submission processes",
    sessions: 5,
    speakers: 8,
    topics: [
      "Electronic Submissions",
      "Regulatory AI",
      "Compliance Analytics",
      "Digital Auditing",
    ],
  },
  {
    title: "Precision Medicine",
    description:
      "Personalized treatment approaches using genomics and biomarkers",
    sessions: 6,
    speakers: 9,
    topics: [
      "Pharmacogenomics",
      "Biomarker Discovery",
      "Companion Diagnostics",
      "Personalized Dosing",
    ],
  },
  {
    title: "Blockchain in Pharma",
    description:
      "Distributed ledger technology for supply chain and data integrity",
    sessions: 4,
    speakers: 6,
    topics: [
      "Supply Chain Transparency",
      "Clinical Trial Data",
      "Drug Authenticity",
      "Smart Contracts",
    ],
  },
];

const sessionTypes = [
  {
    type: "Plenary Lectures",
    count: 4,
    duration: "45 minutes",
    description: "Keynote presentations by world-renowned experts",
    icon: Award,
  },
  {
    type: "Symposiums",
    count: 12,
    duration: "90 minutes",
    description: "Focused discussions on specific therapeutic areas",
    icon: Users,
  },
  {
    type: "Oral Presentations",
    count: 150,
    duration: "15 minutes",
    description: "Research presentations by scientists and industry experts",
    icon: Microscope,
  },
  {
    type: "Poster Sessions",
    count: 300,
    duration: "2 hours",
    description: "Interactive poster presentations and discussions",
    icon: FileText,
  },
  {
    type: "Workshops",
    count: 8,
    duration: "3 hours",
    description: "Hands-on training sessions on latest technologies",
    icon: BookOpen,
  },
  {
    type: "Panel Discussions",
    count: 6,
    duration: "60 minutes",
    description: "Expert panels on industry trends and challenges",
    icon: Users,
  },
];

const abstractGuidelines = [
  {
    category: "Original Research",
    description: "Novel findings from experimental or clinical studies",
    wordLimit: "300 words",
    sections: ["Background", "Methods", "Results", "Conclusion"],
  },
  {
    category: "Case Studies",
    description: "Clinical cases demonstrating innovative treatment approaches",
    wordLimit: "250 words",
    sections: ["Background", "Case Presentation", "Discussion", "Conclusion"],
  },
  {
    category: "Review Articles",
    description: "Comprehensive reviews of current literature and practices",
    wordLimit: "400 words",
    sections: [
      "Background",
      "Methodology",
      "Key Findings",
      "Future Directions",
    ],
  },
  {
    category: "Technology Innovation",
    description: "New technologies, methods, or digital solutions in pharma",
    wordLimit: "300 words",
    sections: [
      "Innovation Description",
      "Applications",
      "Benefits",
      "Implementation",
    ],
  },
];

const specializationAreas = [
  "Pharmaceutical Technology",
  "Medicinal Chemistry",
  "Pharmacognosy, Indigenous Drugs, Herbal formulations and Phytochemistry",
  "Pharmacology and Toxicology, Clinical Research & Pharmacovigilance",
  "Pharmaceutical Analysis and Quality Assurance",
  "Biopharmaceutics, Pharmacokinetics & Drug Metabolism",
  "Biotechnology and Biotherapeutics",
  "Hospital, Community and Clinical Pharmacy",
  "Pharmaceutical Education and Professional Pharmacy",
  "Drug Regulatory Affairs & Pharmaceutical Management",
  "Pharmacoeconomics and Pharmacoepidemiology",
  "Artificial Intelligence / Bioinformatics / Data Analytics",
];

const abstractDates = [
  {
    date: "23rd June 2025",
    event: "Call for Abstract Submission",
    status: "Open",
  },
  {
    date: "31st August 2025",
    event: "Last Date for Abstract Submission",
    status: "Deadline",
  },
  {
    date: "15th September 2025",
    event: "Acceptance of Abstracts for Poster / Oral",
    status: "Notification",
  },
  {
    date: "30th September 2025",
    event: "Registration without Late Fee",
    status: "Registration",
  },
];

const rejectionCriteria = [
  "Review articles",
  "Papers without methodology and results",
  "Papers describing simple laboratory experiments",
  "Papers describing Patho-physiology of a disease",
  "Papers describing treatment in a single patient",
];

const sscContacts = [
  {
    name: "Prof. Vandana B. Patravale",
    role: "Convener SSC, IPCA",
    email: "ssc74ipc@gmail.com",
    phone: "9820029314",
  },
  {
    name: "Dr. G. Sumalatha",
    role: "Member, SSC- IPCA",
    email: "ssc74ipc@gmail.com",
    phone: "9885098047",
  },
];

const membershipRequirements = [
  "Indian Pharmaceutical Association (IPA)",
  "Indian Hospital Pharmacists Association (IHPA)",
  "Association of Pharmaceutical Teachers of India (APTI)",
  "Indian Pharmaceutical Graduates Association (IPGA)",
  "All India Drug Control Officers Confederation (AIDCOC)",
];

export default function ScientificPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pharmaceutical-50 to-primary-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-pharmaceutical-600 to-primary-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Scientific Program
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-pharmaceutical-100">
              Advancing Pharmaceutical Science Through Innovation
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm md:text-base">
              <div className="flex items-center gap-2">
                <Microscope className="h-5 w-5" />
                <span>500+ Scientific Presentations</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="h-5 w-5" />
                <span>150+ Expert Speakers</span>
              </div>
              <div className="flex items-center gap-2">
                <BookOpen className="h-5 w-5" />
                <span>6 Specialized Tracks</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Scientific Tracks */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-6">
              Scientific Tracks
            </h2>
            <p className="text-lg text-secondary-600 max-w-3xl mx-auto">
              Explore cutting-edge research across six specialized tracks
              designed to showcase the latest developments in pharmaceutical
              science and technology.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {scientificTracks.map((track, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg p-8 border border-pharmaceutical-100 hover:shadow-xl transition-shadow"
              >
                <h3 className="text-xl font-bold text-secondary-900 mb-4">
                  {track.title}
                </h3>
                <p className="text-secondary-600 mb-6">{track.description}</p>

                <div className="flex justify-between items-center mb-6 text-sm">
                  <div className="text-center">
                    <div className="font-bold text-pharmaceutical-600 text-lg">
                      {track.sessions}
                    </div>
                    <div className="text-secondary-500">Sessions</div>
                  </div>
                  <div className="text-center">
                    <div className="font-bold text-primary-600 text-lg">
                      {track.speakers}
                    </div>
                    <div className="text-secondary-500">Speakers</div>
                  </div>
                </div>

                <div className="border-t pt-6">
                  <h4 className="font-semibold text-secondary-900 mb-3">
                    Key Topics:
                  </h4>
                  <ul className="space-y-2">
                    {track.topics.map((topic, idx) => (
                      <li
                        key={idx}
                        className="flex items-center gap-2 text-sm text-secondary-600"
                      >
                        <ChevronRight className="h-3 w-3 text-pharmaceutical-600 flex-shrink-0" />
                        {topic}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Session Types */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-6">
              Session Types
            </h2>
            <p className="text-lg text-secondary-600">
              Diverse formats to maximize learning and networking opportunities
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sessionTypes.map((session, index) => {
              const IconComponent = session.icon;
              return (
                <div
                  key={index}
                  className="text-center p-8 bg-pharmaceutical-50 rounded-xl border border-pharmaceutical-100"
                >
                  <IconComponent className="h-12 w-12 text-pharmaceutical-600 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-secondary-900 mb-2">
                    {session.type}
                  </h3>
                  <div className="text-3xl font-bold text-pharmaceutical-600 mb-2">
                    {session.count}
                  </div>
                  <div className="text-sm text-secondary-600 mb-3">
                    Duration: {session.duration}
                  </div>
                  <p className="text-secondary-600 text-sm">
                    {session.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Call for Presentation of Scientific Paper */}
      <section className="py-20 bg-gradient-to-r from-pharmaceutical-50 to-primary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-6">
              Call for Presentation of Scientific Paper
            </h2>
            <p className="text-lg text-secondary-600 mb-8">
              The IPCA Scientific Services Committee (SSC) invites delegates to
              submit findings of their original scientific work
            </p>
          </div>

          {/* Main Introduction */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-12 border border-pharmaceutical-100">
            <div className="text-center mb-8">
              <Globe className="h-16 w-16 text-pharmaceutical-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-secondary-900 mb-4">
                Online Submission Process
              </h3>
              <p className="text-secondary-700 mb-6">
                The process of paper submission and correspondence regarding
                acceptance of papers is through online only.
              </p>
              <div className="inline-flex items-center gap-2 bg-pharmaceutical-100 text-pharmaceutical-800 px-6 py-3 rounded-full font-semibold">
                <Globe className="h-5 w-5" />
                <span>Visit: www.scientificipca.org</span>
              </div>
            </div>

            <div className="prose max-w-none text-secondary-700">
              <p className="mb-6">
                The IPCA Scientific Services Committee (SSC) has great pleasure
                in inviting the delegates to submit the findings of their
                original scientific work as abstracts for presentation during
                the Congress as <strong>Poster and/or Oral presentation</strong>
                . The SSC will screen the abstract submitted and will select the
                abstract for Poster presentation. The SSC of 74th IPC will
                select best papers amongst the papers accepted for Oral
                presentation.
              </p>
              <p className="mb-6">
                The best Poster and/or Best Oral presentation from selected
                category will be announced by the SSC during the valedictory
                function of IPC. The best Poster and/Best Oral presentation will
                be rewarded with certificate, memento and cash prize of{" "}
                <strong>Rs. 2000/- (For Best Poster)</strong> and{" "}
                <strong>Rs. 5000/- (For Best Oral)</strong>.
              </p>
            </div>
          </div>

          {/* Specialization Areas */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-secondary-900 text-center mb-8">
              12 Areas of Specialization
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {specializationAreas.map((area, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg p-4 shadow-md border border-pharmaceutical-100 hover:shadow-lg transition-shadow"
                >
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-pharmaceutical-600 text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0 mt-0.5">
                      {index + 1}
                    </div>
                    <p className="text-secondary-700 text-sm font-medium">
                      {area}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Abstract Content Guidelines */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-12 border border-pharmaceutical-100">
            <h3 className="text-2xl font-bold text-secondary-900 mb-6 text-center">
              Abstract Content Guidelines
            </h3>
            <div className="prose max-w-none text-secondary-700">
              <p className="mb-6">
                The abstract of the work proposed to be presented should be
                prepared and properly pasted in the space provided in SSC
                website as per the instructions given and should be submitted in
                the prescribed format and online only on or before{" "}
                <strong>31st August 2025</strong>. The Model Abstract is
                available in SSC website -
                <strong> www.scientificipca.org</strong>
              </p>
            </div>
          </div>

          {/* Important Dates Timeline */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-secondary-900 text-center mb-8">
              Important Dates
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {abstractDates.map((item, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow-lg p-6 border border-pharmaceutical-100 text-center"
                >
                  <Calendar className="h-12 w-12 text-pharmaceutical-600 mx-auto mb-4" />
                  <h4 className="font-bold text-secondary-900 mb-2">
                    {item.event}
                  </h4>
                  <p className="text-pharmaceutical-600 font-semibold text-lg mb-2">
                    {item.date}
                  </p>
                  <span
                    className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${
                      item.status === "Deadline"
                        ? "bg-red-100 text-red-800"
                        : item.status === "Open"
                        ? "bg-green-100 text-green-800"
                        : "bg-blue-100 text-blue-800"
                    }`}
                  >
                    {item.status}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Submission Guidelines and Requirements */}
          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {/* Important Notes */}
            <div className="bg-white rounded-xl shadow-lg p-8 border border-pharmaceutical-100">
              <h4 className="text-xl font-bold text-secondary-900 mb-6 flex items-center gap-3">
                <AlertTriangle className="h-6 w-6 text-yellow-600" />
                Important Notes
              </h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-secondary-700 text-sm">
                    The presenting author must be a member of any of the
                    federating associations of IPCA
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-secondary-700 text-sm">
                    Abstracts must be submitted online only through
                    www.scientificipca.org
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-secondary-700 text-sm">
                    Only registered delegates will be allowed to present the
                    abstracts during IPC
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-secondary-700 text-sm">
                    All queries should be done through e-mail: ssc@74ipc.com
                  </span>
                </li>
              </ul>
            </div>

            {/* Membership Requirements */}
            <div className="bg-white rounded-xl shadow-lg p-8 border border-pharmaceutical-100">
              <h4 className="text-xl font-bold text-secondary-900 mb-6">
                Required Membership (Any of the following)
              </h4>
              <ul className="space-y-3">
                {membershipRequirements.map((org, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-pharmaceutical-600 rounded-full"></div>
                    <span className="text-secondary-700 text-sm">{org}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Rejection Criteria */}
          <div className="bg-red-50 border border-red-200 rounded-xl p-8 mb-12">
            <h4 className="text-xl font-bold text-red-800 mb-6 flex items-center gap-3">
              <X className="h-6 w-6" />
              Papers That Will Be Rejected
            </h4>
            <div className="grid md:grid-cols-2 gap-4">
              {rejectionCriteria.map((criterion, index) => (
                <div key={index} className="flex items-center gap-3">
                  <X className="h-4 w-4 text-red-600 flex-shrink-0" />
                  <span className="text-red-700 text-sm">{criterion}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Information */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {sscContacts.map((contact, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg p-8 border border-pharmaceutical-100"
              >
                <h4 className="text-lg font-bold text-secondary-900 mb-2">
                  {contact.name}
                </h4>
                <p className="text-pharmaceutical-600 font-semibold mb-4">
                  {contact.role}
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-pharmaceutical-600" />
                    <a
                      href={`mailto:${contact.email}`}
                      className="text-pharmaceutical-600 hover:text-pharmaceutical-700 font-medium"
                    >
                      {contact.email}
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="h-5 w-5 text-pharmaceutical-600" />
                    <a
                      href={`tel:+91${contact.phone}`}
                      className="text-pharmaceutical-600 hover:text-pharmaceutical-700 font-medium"
                    >
                      +91 {contact.phone}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Continuing Education */}
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-8 mb-12">
            <h4 className="text-xl font-bold text-blue-800 mb-6">
              Accreditation For Continuing Education
            </h4>
            <div className="prose max-w-none text-blue-700">
              <p className="mb-4">
                Continuing Education is mandatory for all Pharmacists and
                faculty for the purposes of continuing their professional
                responsibilities and registration with State Pharmacy Councils
                as per various regulations of Pharmacy Council of India, New
                Delhi.
              </p>
              <p className="mb-4">
                <strong>
                  "Pharmacy Council of India has accorded recognition to the
                  Scientific Sessions of the IPC as a refresher
                  course/continuing pharmacy education programme under
                  regulations 4.2 (IV) of the Pharmacy Practice Regulations
                  2015".
                </strong>
              </p>
              <p>
                Participants who attend the scientific sessions in full are
                eligible to receive CEP Certificate. The Certificate will be
                issued at the registration counter between{" "}
                <strong>1 pm - 3 pm on the last day of IPC</strong>.
              </p>
            </div>
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <a
              href="https://www.scientificipca.org"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-pharmaceutical-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-pharmaceutical-700 transition-colors"
            >
              <Globe className="h-6 w-6" />
              Submit Your Abstract
            </a>
          </div>
        </div>
      </section>

      {/* Awards and Recognition */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-6">
              Awards & Recognition
            </h2>
            <p className="text-lg text-secondary-600">
              Excellence in pharmaceutical research will be recognized and
              rewarded
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-gradient-to-br from-yellow-50 to-orange-50 rounded-xl border border-yellow-200">
              <Award className="h-16 w-16 text-yellow-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-secondary-900 mb-2">
                Best Oral Presentation
              </h3>
              <p className="text-secondary-600 mb-4">
                ₹5,000 cash prize + certificate + memento
              </p>
              <p className="text-sm text-secondary-500">
                Awarded for outstanding research presentation
              </p>
            </div>

            <div className="text-center p-8 bg-gradient-to-br from-gray-50 to-blue-50 rounded-xl border border-gray-200">
              <Award className="h-16 w-16 text-gray-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-secondary-900 mb-2">
                Best Poster Award
              </h3>
              <p className="text-secondary-600 mb-4">
                ₹2,000 cash prize + certificate + memento
              </p>
              <p className="text-sm text-secondary-500">
                Recognizing innovative research posters
              </p>
            </div>

            <div className="text-center p-8 bg-gradient-to-br from-orange-50 to-red-50 rounded-xl border border-orange-200">
              <Award className="h-16 w-16 text-orange-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-secondary-900 mb-2">
                Young Scientist Award
              </h3>
              <p className="text-secondary-600 mb-4">
                ₹30,000 cash prize + certificate
              </p>
              <p className="text-sm text-secondary-500">
                For researchers under 35 years
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Important Dates */}
      <section className="py-20 bg-secondary-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Important Scientific Dates
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <Calendar className="h-12 w-12 text-pharmaceutical-400 mx-auto mb-4" />
              <h3 className="font-bold text-lg mb-2">Call for Abstract</h3>
              <p className="text-secondary-300">June 23, 2025</p>
            </div>
            <div className="text-center">
              <Calendar className="h-12 w-12 text-pharmaceutical-400 mx-auto mb-4" />
              <h3 className="font-bold text-lg mb-2">
                Abstract Submission Deadline
              </h3>
              <p className="text-secondary-300">August 31, 2025</p>
            </div>
            <div className="text-center">
              <Calendar className="h-12 w-12 text-pharmaceutical-400 mx-auto mb-4" />
              <h3 className="font-bold text-lg mb-2">
                Acceptance Notification
              </h3>
              <p className="text-secondary-300">September 15, 2025</p>
            </div>
            <div className="text-center">
              <Calendar className="h-12 w-12 text-pharmaceutical-400 mx-auto mb-4" />
              <h3 className="font-bold text-lg mb-2">Registration Deadline</h3>
              <p className="text-secondary-300">September 30, 2025</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
