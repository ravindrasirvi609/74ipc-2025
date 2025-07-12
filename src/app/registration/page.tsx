import { Metadata } from "next";
import {
  Calendar,
  Clock,
  Users,
  CreditCard,
  CheckCircle,
  FileText,
  AlertCircle,
  ExternalLink,
  Coffee,
  UtensilsCrossed,
  Home,
  X,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Registration - 74th Indian Pharmaceutical Congress 2025",
  description:
    "Register for the 74th Indian Pharmaceutical Congress 2025. Special discounted rates for APTI members and federating association members.",
};

const registrationCategories = [
  {
    id: 1,
    category: "Students",
    superSaver: "₹4,720",
    superSaverBase: "₹4,000",
    regular: "₹5,310",
    regularBase: "₹4,500",
    lateFee: "₹5,900",
    lateFeeBase: "₹5,000",
    spot: "N.A.",
    spotBase: "N.A.",
    usd: false,
    description: "Valid student ID required",
  },
  {
    id: 2,
    category: "Teachers & Members",
    subcategory: "(APTI/IPA/IPGA/IHPA/AIDCOC)",
    superSaver: "₹6,490",
    superSaverBase: "₹5,500",
    regular: "₹7,670",
    regularBase: "₹6,500",
    lateFee: "₹8,850",
    lateFeeBase: "₹7,500",
    spot: "₹10,030",
    spotBase: "₹8,500",
    usd: false,
    description: "Membership verification required",
  },
  {
    id: 3,
    category: "Non Member",
    superSaver: "₹8,260",
    superSaverBase: "₹7,000",
    regular: "₹9,440",
    regularBase: "₹8,000",
    lateFee: "₹10,620",
    lateFeeBase: "₹9,000",
    spot: "₹11,800",
    spotBase: "₹10,000",
    usd: false,
    description: "Industry professionals and academics",
  },
  {
    id: 4,
    category: "Accompanying Person",
    superSaver: "₹4,720",
    superSaverBase: "₹4,000",
    regular: "₹5,310",
    regularBase: "₹4,500",
    lateFee: "₹5,900",
    lateFeeBase: "₹5,000",
    spot: "₹6,490",
    spotBase: "₹5,500",
    usd: false,
    description: "Family members and guests",
  },
  {
    id: 5,
    category: "Foreign Delegates",
    superSaver: "$150.00",
    superSaverBase: "$150.00",
    regular: "$200.00",
    regularBase: "$200.00",
    lateFee: "$250.00",
    lateFeeBase: "$250.00",
    spot: "$300.00",
    spotBase: "$300.00",
    usd: true,
    description: "International participants",
  },
];

const registrationPeriods = [
  {
    name: "Super Saver",
    period: "May 15 - July 14, 2025",
    icon: "⭐",
    color: "green",
  },
  {
    name: "Regular Registration",
    period: "July 15 - Sep 30, 2025",
    icon: "📅",
    color: "blue",
  },
  {
    name: "Registration with Late Fee",
    period: "Oct 1 - Nov 14, 2025",
    icon: "⏰",
    color: "orange",
  },
  {
    name: "Spot Registration",
    period: "Dec 19, 2025",
    icon: "🎯",
    color: "red",
  },
];

const inclusions = [
  {
    icon: <CheckCircle className="h-5 w-5 text-green-600" />,
    text: "Attend the conference proceedings from 19th to 21st December 2025",
  },
  {
    icon: <Coffee className="h-5 w-5 text-green-600" />,
    text: "Breakfast, lunch, tea and snacks at the conference venue",
  },
  {
    icon: <UtensilsCrossed className="h-5 w-5 text-green-600" />,
    text: "Entertainment event and banquet dinner on 19th December 2025",
  },
];

const exclusions = [
  {
    icon: <Home className="h-5 w-5 text-red-600" />,
    text: "Accommodation",
  },
  {
    icon: <X className="h-5 w-5 text-red-600" />,
    text: "Dinner except banquet dinner on 19th December 2025",
  },
];

export default function RegistrationPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-pharmaceutical-600 to-primary-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Registration Open
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-pharmaceutical-100">
              Join the 74th Indian Pharmaceutical Congress 2025
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm md:text-base">
              <div className="flex items-center gap-2">
                <Calendar className="h-5 w-5" />
                <span>December 19-21, 2025</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5" />
                <span>3 Days of Innovation</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="h-5 w-5" />
                <span>12,000+ Participants Expected</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* APTI Membership Notice */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-lg p-8 border-l-4 border-blue-500">
            <div className="flex items-start space-x-4">
              <div className="bg-blue-100 rounded-full p-3">
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
                  encouraged to become a member by clicking on the link
                  provided.
                </p>
                <a
                  href="#"
                  className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  Register | APTI (click here)
                  <ExternalLink className="ml-2 h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Registration Includes */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-6">
              What Your Registration Includes
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-xl font-bold text-green-700 mb-6 flex items-center">
                <CheckCircle className="h-6 w-6 mr-2" />
                The registration fee enables you to:
              </h3>
              <div className="space-y-4">
                {inclusions.map((item, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    {item.icon}
                    <p className="text-gray-700">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-xl font-bold text-red-700 mb-6 flex items-center">
                <X className="h-6 w-6 mr-2" />
                The registration fee does not cover:
              </h3>
              <div className="space-y-4">
                {exclusions.map((item, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    {item.icon}
                    <p className="text-gray-700">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Registration Periods */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-6">
              Registration Periods
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {registrationPeriods.map((period, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg p-6 text-center"
              >
                <div className="text-3xl mb-4">{period.icon}</div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">
                  {period.name}
                </h3>
                <p className="text-sm text-gray-600">{period.period}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Registration Fee Table (replaced with cards) */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-6">
              Registration Fee (Excluding GST)
            </h2>
            <p className="text-lg text-secondary-600">
              Please pay the appropriate registration fee based on the
              categories provided below.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {registrationCategories.map((category, index) => (
              <div
                key={category.id}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 flex flex-col justify-between border-t-4 border-pharmaceutical-600"
              >
                <div>
                  <div className="flex items-center mb-2">
                    <Users className="w-6 h-6 text-pharmaceutical-600 mr-2" />
                    <h3 className="text-xl font-bold text-gray-900">
                      {category.category}
                    </h3>
                  </div>
                  {category.subcategory && (
                    <div className="text-xs text-gray-500 mb-1">
                      {category.subcategory}
                    </div>
                  )}
                  <div className="text-sm text-gray-600 mb-4">
                    {category.description}
                  </div>
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center justify-between">
                      <span className="font-semibold text-green-700">
                        Super Saver
                      </span>
                      <span className="font-bold text-green-700">
                        {category.superSaver}
                      </span>
                    </div>
                    <div className="text-xs text-gray-500 mb-1 ml-2">
                      ({category.superSaverBase} + 18% GST)
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="font-semibold text-blue-700">
                        Regular
                      </span>
                      <span className="font-bold text-blue-700">
                        {category.regular}
                      </span>
                    </div>
                    <div className="text-xs text-gray-500 mb-1 ml-2">
                      ({category.regularBase} + 18% GST)
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="font-semibold text-orange-700">
                        Late Fee
                      </span>
                      <span className="font-bold text-orange-700">
                        {category.lateFee}
                      </span>
                    </div>
                    <div className="text-xs text-gray-500 mb-1 ml-2">
                      ({category.lateFeeBase} + 18% GST)
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="font-semibold text-red-700">Spot</span>
                      <span className="font-bold text-red-700">
                        {category.spot}
                      </span>
                    </div>
                    {category.spot !== "N.A." && (
                      <div className="text-xs text-gray-500 mb-1 ml-2">
                        ({category.spotBase} + 18% GST)
                      </div>
                    )}
                  </div>
                </div>
                <button
                  className="mt-4 w-full bg-pharmaceutical-600 hover:bg-pharmaceutical-700 text-white font-bold py-3 rounded-full transition-colors text-lg"
                  disabled
                >
                  Register
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Payment Methods */}
      <section className="py-20 bg-gradient-to-r from-pharmaceutical-50 to-primary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-6">
              Payment Methods
            </h2>
            <p className="text-lg text-secondary-600">
              We accept multiple payment methods for your convenience
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <CreditCard className="h-12 w-12 text-pharmaceutical-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-secondary-900 mb-2">
                Credit/Debit Cards
              </h3>
              <p className="text-secondary-600">
                Visa, MasterCard, RuPay accepted
              </p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <FileText className="h-12 w-12 text-pharmaceutical-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-secondary-900 mb-2">
                Bank Transfer
              </h3>
              <p className="text-secondary-600">NEFT/RTGS transfers accepted</p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <CheckCircle className="h-12 w-12 text-pharmaceutical-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-secondary-900 mb-2">
                UPI/Digital Wallets
              </h3>
              <p className="text-secondary-600">
                PhonePe, GPay, Paytm supported
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Registration Instructions */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-6">
              How to Register
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-8 h-8 bg-pharmaceutical-600 text-white rounded-full flex items-center justify-center font-bold">
                  1
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-secondary-900 mb-2">
                    Fill Registration Form
                  </h3>
                  <p className="text-secondary-600">
                    Complete the online registration form with accurate details
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0 w-8 h-8 bg-pharmaceutical-600 text-white rounded-full flex items-center justify-center font-bold">
                  2
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-secondary-900 mb-2">
                    Make Payment
                  </h3>
                  <p className="text-secondary-600">
                    Choose your preferred payment method and complete the
                    transaction
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0 w-8 h-8 bg-pharmaceutical-600 text-white rounded-full flex items-center justify-center font-bold">
                  3
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-secondary-900 mb-2">
                    Receive Confirmation
                  </h3>
                  <p className="text-secondary-600">
                    Get your registration confirmation via email with
                    registration ID
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0 w-8 h-8 bg-pharmaceutical-600 text-white rounded-full flex items-center justify-center font-bold">
                  4
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-secondary-900 mb-2">
                    Attend Conference
                  </h3>
                  <p className="text-secondary-600">
                    Present your confirmation at the venue to collect your
                    conference kit
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-12 p-6 bg-yellow-50 border border-yellow-200 rounded-lg">
              <div className="flex gap-3">
                <AlertCircle className="h-6 w-6 text-yellow-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-yellow-800 mb-2">
                    Important Note
                  </h3>
                  <p className="text-yellow-700 text-sm">
                    Registration fees are non-refundable. However, registrations
                    can be transferred to another person with prior notification
                    to the organizing committee. Student registrations require
                    valid ID proof.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-pharmaceutical-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Registration Support
          </h2>
          <p className="text-xl mb-8 text-pharmaceutical-100">
            For any doubts related to registration, please send an email to:
          </p>
          <div className="bg-white/10 rounded-lg p-6">
            <a
              href="mailto:registration@74ipc.com"
              className="text-2xl font-bold text-white hover:text-pharmaceutical-200 transition-colors"
            >
              registration@74ipc.com
            </a>
          </div>

          <div className="mt-12">
            <button className="bg-white text-pharmaceutical-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-pharmaceutical-50 transition-colors">
              Register Now
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
