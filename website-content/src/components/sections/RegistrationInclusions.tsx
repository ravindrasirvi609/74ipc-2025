import React from "react";
import {
  CheckCircle,
  Coffee,
  UtensilsCrossed,
  FileText,
  X,
  Home,
} from "lucide-react";

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
  {
    icon: <FileText className="h-5 w-5 text-green-600" />,
    text: "Complete proceedings, abstracts, and presentation materials",
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

export default function RegistrationInclusions() {
  return (
    <section className="py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            What Your Registration Includes
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-xl shadow-lg p-8 border-l-4 border-green-500">
            <h3 className="text-xl font-bold text-green-700 mb-6 flex items-center">
              <CheckCircle className="h-6 w-6 mr-2" />
              Registration Includes
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

          <div className="bg-white rounded-xl shadow-lg p-8 border-l-4 border-red-500">
            <h3 className="text-xl font-bold text-red-700 mb-6 flex items-center">
              <X className="h-6 w-6 mr-2" />
              Not Included
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
  );
}
