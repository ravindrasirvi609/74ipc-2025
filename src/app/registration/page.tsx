"use client";

import React from "react";
import RegistrationForm from "@/components/RegistrationForm";
import RegistrationHero from "@/components/sections/RegistrationHero";
import APTIMembershipNotice from "@/components/sections/APTIMembershipNotice";
import RegistrationInclusions from "@/components/sections/RegistrationInclusions";
import PricingTable from "@/components/sections/PricingTable";
import PaymentAndInstructions from "@/components/sections/PaymentAndInstructions";

export default function RegistrationPage() {
  const handleRegisterClick = (categoryId: number) => {
    // Scroll to registration form
    const formElement = document.getElementById("registration-form");
    if (formElement) {
      formElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <RegistrationHero />

      {/* APTI Membership Notice */}
      <APTIMembershipNotice />

      {/* What Registration Includes */}
      <RegistrationInclusions />

      {/* Pricing Table and Registration Periods */}
      <PricingTable onRegisterClick={handleRegisterClick} />

      {/* Registration Form Section */}
      <section className="py-20 bg-white" id="registration-form">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Complete Your Registration
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Fill out the form below to register for the 74th Indian
              Pharmaceutical Congress 2025. Your registration will be confirmed
              after successful payment.
            </p>
          </div>
          <RegistrationForm />
        </div>
      </section>

      {/* Payment Methods and Instructions */}
      <PaymentAndInstructions />

      {/* Contact Information */}
      <section className="py-16 bg-pharmaceutical-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Registration Support
          </h2>
          <p className="text-xl mb-8 text-pharmaceutical-100">
            For any queries related to registration, please contact us:
          </p>
          <div className="bg-white/10 rounded-xl p-6">
            <a
              href="mailto:registration@74ipc2025.com"
              className="text-2xl font-bold text-white hover:text-pharmaceutical-200 transition-colors"
            >
              registration@74ipc2025.com
            </a>
            <div className="mt-4 text-pharmaceutical-100">
              <p>Phone: +91-XXX-XXX-XXXX</p>
              <p>Monday - Friday, 9:00 AM - 6:00 PM</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
