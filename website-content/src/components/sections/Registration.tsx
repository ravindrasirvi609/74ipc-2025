"use client";

import { useState } from "react";
import { Check, Star, Users, Calendar, CreditCard, MapPin } from "lucide-react";

const Registration = () => {
  const [selectedPackage, setSelectedPackage] = useState("professional");
  const [registrationStep, setRegistrationStep] = useState(1);

  const packages = [
    {
      id: "student",
      name: "Student Package",
      price: "₹5,000",
      originalPrice: "₹8,000",
      description: "Perfect for students and young researchers",
      features: [
        "Access to all scientific sessions",
        "Conference materials & bag",
        "Lunch & refreshments (3 days)",
        "Certificate of participation",
        "Access to exhibition",
        "Young researcher networking sessions",
      ],
      color: "from-primary-400 to-primary-600",
      popular: false,
    },
    {
      id: "professional",
      name: "Professional Package",
      price: "₹15,000",
      originalPrice: "₹20,000",
      description: "Comprehensive package for industry professionals",
      features: [
        "Access to all scientific sessions",
        "Conference materials & premium bag",
        "All meals & refreshments (3 days)",
        "Certificate of participation",
        "Access to exhibition & poster sessions",
        "Professional networking events",
        "Welcome reception & gala dinner",
        "Workshop participation",
        "Digital access to presentations",
      ],
      color: "from-pharmaceutical-400 to-pharmaceutical-600",
      popular: true,
    },
    {
      id: "corporate",
      name: "Corporate Package",
      price: "₹25,000",
      originalPrice: "₹30,000",
      description: "Premium package with exclusive benefits",
      features: [
        "All Professional Package benefits",
        "Priority seating in all sessions",
        "Exclusive corporate networking lounge",
        "One-on-one meetings with speakers",
        "VIP hospitality services",
        "Dedicated concierge support",
        "Post-conference digital resources",
        "Industry leadership roundtables",
        "Executive dinner invitation",
      ],
      color: "from-primary-400 to-primary-600",
      popular: false,
    },
  ];

  const earlyBirdBenefits = [
    "Save up to 25% on registration fees",
    "Guaranteed accommodation assistance",
    "Priority workshop selection",
    "Exclusive welcome kit",
    "Early access to mobile app",
  ];

  const registrationSteps = [
    {
      step: 1,
      title: "Select Package",
      description: "Choose your registration package",
    },
    {
      step: 2,
      title: "Personal Details",
      description: "Provide your information",
    },
    { step: 3, title: "Payment", description: "Complete payment process" },
    {
      step: 4,
      title: "Confirmation",
      description: "Receive confirmation & details",
    },
  ];

  return (
    <section id="registration" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Register for
            <span className="block text-pharmaceutical-600">74th IPC 2025</span>
          </h2>
          <p className="text-xl text-gray-600">
            Secure your spot at India's premier pharmaceutical congress. Early
            bird registration ends January 15, 2025.
          </p>
        </div>

        {/* Early Bird Banner */}
        <div className="bg-gradient-to-r from-pharmaceutical-400 to-pharmaceutical-600 rounded-2xl p-6 mb-12 text-center">
          <div className="flex items-center justify-center mb-4">
            <Star className="w-8 h-8 text-white mr-3" />
            <h3 className="text-2xl font-bold text-white">
              Early Bird Offer - Save up to 25%!
            </h3>
          </div>
          <p className="text-white mb-4 text-lg">
            Register before January 15, 2025, and enjoy exclusive benefits
          </p>
          <div className="grid md:grid-cols-5 gap-4 max-w-4xl mx-auto">
            {earlyBirdBenefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-white/20 backdrop-blur-sm rounded-lg p-3"
              >
                <Check className="w-5 h-5 text-white mx-auto mb-2" />
                <p className="text-white text-sm font-medium">{benefit}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Registration Packages */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {packages.map((pkg) => (
            <div
              key={pkg.id}
              className={`relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover-lift ${
                selectedPackage === pkg.id
                  ? "ring-4 ring-pharmaceutical-500"
                  : ""
              }`}
            >
              {pkg.popular && (
                <div className="absolute top-0 right-0 bg-gradient-to-r from-primary-400 to-primary-600 text-white px-4 py-2 rounded-bl-2xl font-bold text-sm">
                  Most Popular
                </div>
              )}

              <div className={`h-4 bg-gradient-to-r ${pkg.color}`}></div>

              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {pkg.name}
                </h3>
                <p className="text-gray-600 mb-6">{pkg.description}</p>

                <div className="mb-6">
                  <div className="flex items-baseline mb-2">
                    <span className="text-4xl font-bold text-pharmaceutical-600">
                      {pkg.price}
                    </span>
                    <span className="text-gray-400 line-through ml-3 text-lg">
                      {pkg.originalPrice}
                    </span>
                  </div>
                  <p className="text-green-600 font-medium text-sm">
                    Early Bird Price (Save 25%)
                  </p>
                </div>

                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => setSelectedPackage(pkg.id)}
                  className={`w-full py-3 rounded-full font-bold transition-colors ${
                    selectedPackage === pkg.id
                      ? "bg-pharmaceutical-600 text-white"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  {selectedPackage === pkg.id ? "Selected" : "Select Package"}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Registration Process */}
        <div className="bg-white rounded-2xl p-8 mb-12">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-8">
            Simple Registration Process
          </h3>

          <div className="flex flex-col md:flex-row justify-between items-center md:items-start space-y-8 md:space-y-0">
            {registrationSteps.map((step, index) => (
              <div
                key={step.step}
                className="flex flex-col items-center text-center max-w-xs"
              >
                <div
                  className={`w-16 h-16 rounded-full flex items-center justify-center font-bold text-xl mb-4 ${
                    registrationStep >= step.step
                      ? "bg-pharmaceutical-600 text-white"
                      : "bg-gray-200 text-gray-600"
                  }`}
                >
                  {step.step}
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">
                  {step.title}
                </h4>
                <p className="text-gray-600">{step.description}</p>
                {index < registrationSteps.length - 1 && (
                  <div
                    className="hidden md:block absolute w-24 h-1 bg-gray-200 mt-8"
                    style={{ left: "50%", transform: "translateX(50%)" }}
                  ></div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Group Registration */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-gradient-to-br from-pharmaceutical-500 to-primary-600 rounded-2xl p-8 text-white">
            <Users className="w-12 h-12 mb-4" />
            <h3 className="text-2xl font-bold mb-4">
              Group Registration Discounts
            </h3>
            <p className="mb-6">Register as a group and save more!</p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-center">
                <Check className="w-5 h-5 mr-3" />
                <span>5-9 delegates: Additional 10% off</span>
              </li>
              <li className="flex items-center">
                <Check className="w-5 h-5 mr-3" />
                <span>10-19 delegates: Additional 15% off</span>
              </li>
              <li className="flex items-center">
                <Check className="w-5 h-5 mr-3" />
                <span>20+ delegates: Additional 20% off</span>
              </li>
            </ul>
            <button className="bg-white text-pharmaceutical-600 px-6 py-3 rounded-full font-bold hover:bg-gray-100 transition-colors">
              Group Registration
            </button>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <CreditCard className="w-12 h-12 text-pharmaceutical-600 mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Payment Options
            </h3>
            <p className="text-gray-600 mb-6">
              Multiple secure payment methods available
            </p>
            <ul className="space-y-3">
              <li className="flex items-center text-gray-600">
                <Check className="w-5 h-5 text-green-500 mr-3" />
                <span>Credit & Debit Cards</span>
              </li>
              <li className="flex items-center text-gray-600">
                <Check className="w-5 h-5 text-green-500 mr-3" />
                <span>Net Banking</span>
              </li>
              <li className="flex items-center text-gray-600">
                <Check className="w-5 h-5 text-green-500 mr-3" />
                <span>UPI & Digital Wallets</span>
              </li>
              <li className="flex items-center text-gray-600">
                <Check className="w-5 h-5 text-green-500 mr-3" />
                <span>Bank Transfer</span>
              </li>
              <li className="flex items-center text-gray-600">
                <Check className="w-5 h-5 text-green-500 mr-3" />
                <span>Installment Options Available</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Registration CTA */}
        <div className="text-center">
          <div className="bg-white rounded-2xl p-8 shadow-lg inline-block">
            <Calendar className="w-16 h-16 text-pharmaceutical-600 mx-auto mb-6" />
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Ready to Register?
            </h3>
            <p className="text-gray-600 mb-6 max-w-md">
              Join 5000+ professionals at the most prestigious pharmaceutical
              event in India.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center">
              <button className="bg-pharmaceutical-600 hover:bg-pharmaceutical-700 text-white px-8 py-4 rounded-full font-bold text-lg transition-colors">
                Register Now -{" "}
                {packages.find((p) => p.id === selectedPackage)?.price}
              </button>
              <button className="border-2 border-pharmaceutical-600 text-pharmaceutical-600 hover:bg-pharmaceutical-600 hover:text-white px-8 py-4 rounded-full font-bold text-lg transition-colors">
                Download Brochure
              </button>
            </div>

            <div className="mt-6 text-sm text-gray-500">
              <p className="flex items-center justify-center">
                <MapPin className="w-4 h-4 mr-2" />
                India Expo Centre, Greater Noida • February 15-17, 2025
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Registration;
