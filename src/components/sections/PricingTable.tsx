import React from "react";
import { Users } from "lucide-react";

interface PricingCategory {
  id: number;
  category: string;
  subcategory?: string;
  superSaver: string;
  superSaverBase: string;
  regular: string;
  regularBase: string;
  lateFee: string;
  lateFeeBase: string;
  spot: string;
  spotBase: string;
  usd: boolean;
  description: string;
}

const registrationCategories: PricingCategory[] = [
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

interface PricingTableProps {
  onRegisterClick?: (categoryId: number) => void;
}

export default function PricingTable({ onRegisterClick }: PricingTableProps) {
  return (
    <>
      {/* Registration Periods */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Registration Periods
            </h2>
            <p className="text-lg text-gray-600">
              Different pricing tiers based on registration timing
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {registrationPeriods.map((period, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-lg transition-shadow"
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

      {/* Pricing Cards */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Registration Categories & Pricing
            </h2>
            <p className="text-lg text-gray-600">
              Choose the appropriate category based on your eligibility. All
              prices exclude GST (18%).
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {registrationCategories.map((category) => (
              <div
                key={category.id}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 border-t-4 border-pharmaceutical-600"
              >
                <div className="mb-6">
                  <div className="flex items-center mb-2">
                    <Users className="w-6 h-6 text-pharmaceutical-600 mr-2" />
                    <h3 className="text-xl font-bold text-gray-900">
                      {category.category}
                    </h3>
                  </div>
                  {category.subcategory && (
                    <div className="text-xs text-gray-500 mb-2">
                      {category.subcategory}
                    </div>
                  )}
                  <p className="text-sm text-gray-600">
                    {category.description}
                  </p>
                </div>

                <div className="space-y-4 mb-8">
                  <div className="bg-green-50 rounded-lg p-3">
                    <div className="flex items-center justify-between">
                      <span className="font-semibold text-green-700">
                        Super Saver
                      </span>
                      <span className="font-bold text-green-700 text-lg">
                        {category.superSaver}
                      </span>
                    </div>
                    <div className="text-xs text-gray-500 mt-1">
                      ({category.superSaverBase} + 18% GST)
                    </div>
                  </div>

                  <div className="bg-blue-50 rounded-lg p-3">
                    <div className="flex items-center justify-between">
                      <span className="font-semibold text-blue-700">
                        Regular
                      </span>
                      <span className="font-bold text-blue-700 text-lg">
                        {category.regular}
                      </span>
                    </div>
                    <div className="text-xs text-gray-500 mt-1">
                      ({category.regularBase} + 18% GST)
                    </div>
                  </div>

                  <div className="bg-orange-50 rounded-lg p-3">
                    <div className="flex items-center justify-between">
                      <span className="font-semibold text-orange-700">
                        Late Fee
                      </span>
                      <span className="font-bold text-orange-700 text-lg">
                        {category.lateFee}
                      </span>
                    </div>
                    <div className="text-xs text-gray-500 mt-1">
                      ({category.lateFeeBase} + 18% GST)
                    </div>
                  </div>

                  <div className="bg-red-50 rounded-lg p-3">
                    <div className="flex items-center justify-between">
                      <span className="font-semibold text-red-700">Spot</span>
                      <span className="font-bold text-red-700 text-lg">
                        {category.spot}
                      </span>
                    </div>
                    {category.spot !== "N.A." && (
                      <div className="text-xs text-gray-500 mt-1">
                        ({category.spotBase} + 18% GST)
                      </div>
                    )}
                  </div>
                </div>

                <button
                  onClick={() => onRegisterClick?.(category.id)}
                  className="w-full bg-pharmaceutical-600 hover:bg-pharmaceutical-700 text-white font-bold py-3 rounded-xl transition-colors"
                >
                  Select Category
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
