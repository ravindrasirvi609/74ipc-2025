import React from "react";
import { Calendar, Clock, Users } from "lucide-react";

export default function RegistrationHero() {
  return (
    <section className="bg-gradient-to-r from-pharmaceutical-600 to-primary-600 text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Registration <span className="text-pharmaceutical-200">Open</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-pharmaceutical-100 max-w-3xl mx-auto">
            Join the 74th Indian Pharmaceutical Congress 2025 - India's premier
            pharmaceutical event bringing together industry leaders,
            researchers, and innovators
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-sm md:text-base">
            <div className="flex items-center gap-2 bg-white/10 rounded-full px-4 py-2">
              <Calendar className="h-5 w-5" />
              <span>December 19-21, 2025</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 rounded-full px-4 py-2">
              <Clock className="h-5 w-5" />
              <span>3 Days of Innovation</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 rounded-full px-4 py-2">
              <Users className="h-5 w-5" />
              <span>12,000+ Participants Expected</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
