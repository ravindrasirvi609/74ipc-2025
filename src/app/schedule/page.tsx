"use client";

import { useState } from "react";
import {
  Calendar,
  Clock,
  MapPin,
  Users,
  Award,
  Coffee,
  Utensils,
} from "lucide-react";

interface ScheduleItem {
  time: string;
  type: string;
  title: string;
  location?: string;
  description: string;
  speaker?: string;
  designation?: string;
  panelists?: string[];
  capacity?: string;
}

const SchedulePage = () => {
  const [selectedDay, setSelectedDay] = useState(1);

  const days = [
    {
      id: 1,
      date: "December 19",
      day: "Thursday",
      theme: "AI Foundations & Keynotes",
    },
    {
      id: 2,
      date: "December 20",
      day: "Friday",
      theme: "Technology Applications & Innovation",
    },
    {
      id: 3,
      date: "December 21",
      day: "Saturday",
      theme: "Future Outlook & Collaboration",
    },
  ];

  const scheduleData: Record<number, ScheduleItem[]> = {
    1: [
      {
        time: "08:00 - 09:00",
        type: "registration",
        title: "Registration & Welcome Coffee",
        location: "Main Lobby",
        description:
          "Network with fellow attendees and collect conference materials",
      },
      {
        time: "09:00 - 09:30",
        type: "keynote",
        title: "Opening Ceremony & Welcome Address",
        speaker: "Dr. Amitabh Bachchan",
        designation: "IPCA President",
        location: "Main Auditorium",
        description: "Official opening and overview of congress theme",
      },
      {
        time: "09:30 - 10:30",
        type: "keynote",
        title: "The Future of AI-Driven Drug Discovery",
        speaker: "Dr. Priya Sharma",
        designation: "Chief AI Officer, GlobalPharma Innovations",
        location: "Main Auditorium",
        description:
          "Comprehensive overview of AI applications in pharmaceutical R&D",
      },
      {
        time: "10:30 - 11:00",
        type: "break",
        title: "Networking Coffee Break",
        location: "Exhibition Hall",
        description: "Connect with sponsors and exhibitors",
      },
      {
        time: "11:00 - 12:00",
        type: "panel",
        title: "AI Ethics in Pharmaceutical Research",
        location: "Hall A",
        description:
          "Panel discussion on ethical considerations in AI-driven drug development",
        panelists: [
          "Dr. Sarah Ethics",
          "Prof. John Moral",
          "Dr. Lisa Standards",
        ],
      },
      {
        time: "11:00 - 12:00",
        type: "session",
        title: "Machine Learning for Molecule Design",
        speaker: "Dr. Computational Chen",
        location: "Hall B",
        description: "Technical deep-dive into ML applications for drug design",
      },
      {
        time: "12:00 - 13:00",
        type: "lunch",
        title: "Networking Lunch",
        location: "Grand Ballroom",
        description: "Continue conversations over lunch",
      },
      {
        time: "13:00 - 14:00",
        type: "keynote",
        title: "Precision Medicine in the Digital Age",
        speaker: "Prof. Michael Chen",
        designation: "Director of Digital Health, Stanford University",
        location: "Main Auditorium",
        description: "How digital technologies enable personalized healthcare",
      },
      {
        time: "14:00 - 15:00",
        type: "workshop",
        title: "Hands-on: AI Tools for Drug Discovery",
        location: "Workshop Room 1",
        description: "Interactive workshop with leading AI platforms",
        capacity: "Limited to 50 participants",
      },
      {
        time: "15:00 - 15:30",
        type: "break",
        title: "Afternoon Tea Break",
        location: "Exhibition Hall",
        description: "Refreshments and networking",
      },
      {
        time: "15:30 - 16:30",
        type: "session",
        title: "Digital Biomarkers in Clinical Trials",
        speaker: "Dr. Clinical Data",
        location: "Hall A",
        description: "Revolutionary approaches to clinical data collection",
      },
      {
        time: "16:30 - 17:30",
        type: "session",
        title: "Blockchain in Pharmaceutical Supply Chain",
        speaker: "Mr. Chain Block",
        location: "Hall B",
        description: "Ensuring drug authenticity through blockchain technology",
      },
      {
        time: "18:00 - 20:00",
        type: "social",
        title: "Welcome Reception & Networking Dinner",
        location: "Rooftop Terrace",
        description: "Cultural program and networking dinner",
      },
    ],
    2: [
      {
        time: "08:30 - 09:00",
        type: "registration",
        title: "Day 2 Registration",
        location: "Main Lobby",
        description: "Check-in for day 2 activities",
      },
      {
        time: "09:00 - 10:00",
        type: "keynote",
        title: "Industry 4.0 in Pharmaceutical Manufacturing",
        speaker: "Dr. Emily Watson",
        designation: "Head of Digital Innovation, Novartis AG",
        location: "Main Auditorium",
        description: "Digital transformation of pharmaceutical manufacturing",
      },
      {
        time: "10:00 - 10:30",
        type: "break",
        title: "Morning Coffee Break",
        location: "Exhibition Hall",
        description: "Visit technology demonstrations",
      },
      {
        time: "10:30 - 11:30",
        type: "keynote",
        title: "Regulatory Pathways for AI in Pharma",
        speaker: "Dr. Sarah Johnson",
        designation: "VP Regulatory Affairs, FDA",
        location: "Main Auditorium",
        description:
          "Navigating regulatory approval for AI-enabled therapeutics",
      },
      {
        time: "11:30 - 12:30",
        type: "panel",
        title: "Startup Innovations in Pharma Tech",
        location: "Hall A",
        description: "Emerging startups presenting breakthrough technologies",
        panelists: ["CEO StartupA", "Founder TechB", "CTO InnovateC"],
      },
      {
        time: "11:30 - 12:30",
        type: "workshop",
        title: "Digital Clinical Trial Design",
        location: "Workshop Room 2",
        description: "Practical workshop on DCT implementation",
      },
      {
        time: "12:30 - 13:30",
        type: "lunch",
        title: "Innovation Showcase Lunch",
        location: "Grand Ballroom",
        description: "Lunch with startup pitch sessions",
      },
      {
        time: "13:30 - 14:30",
        type: "session",
        title: "AI in Pharmacovigilance",
        speaker: "Dr. Safety First",
        location: "Hall A",
        description: "Enhancing drug safety through AI monitoring",
      },
      {
        time: "14:30 - 15:30",
        type: "session",
        title: "Quantum Computing Applications in Drug Discovery",
        speaker: "Prof. Quantum Physics",
        location: "Hall B",
        description: "Next-generation computing for molecular simulation",
      },
      {
        time: "15:30 - 16:00",
        type: "break",
        title: "Afternoon Refreshments",
        location: "Exhibition Hall",
        description: "Technology demonstrations continue",
      },
      {
        time: "16:00 - 17:00",
        type: "panel",
        title: "Global Perspectives on Pharma Innovation",
        location: "Main Auditorium",
        description: "International experts discuss regional innovations",
      },
      {
        time: "17:00 - 18:00",
        type: "awards",
        title: "IPCA Innovation Awards Ceremony",
        location: "Main Auditorium",
        description:
          "Recognizing outstanding contributions to pharmaceutical innovation",
      },
      {
        time: "19:00 - 22:00",
        type: "social",
        title: "Gala Dinner & Cultural Evening",
        location: "Grand Ballroom",
        description: "Formal dinner with cultural performances",
      },
    ],
    3: [
      {
        time: "09:00 - 10:00",
        type: "keynote",
        title: "Next-Gen Therapeutics Through Gene Editing",
        speaker: "Prof. David Liu",
        designation: "Professor, MIT & Harvard University",
        location: "Main Auditorium",
        description:
          "Revolutionary gene editing technologies for therapeutic development",
      },
      {
        time: "10:00 - 10:30",
        type: "break",
        title: "Morning Coffee Break",
        location: "Exhibition Hall",
        description: "Final networking opportunities",
      },
      {
        time: "10:30 - 11:30",
        type: "session",
        title: "Digital Twins in Pharmaceutical Development",
        speaker: "Dr. Virtual Model",
        location: "Hall A",
        description:
          "Creating virtual representations for better drug development",
      },
      {
        time: "10:30 - 11:30",
        type: "workshop",
        title: "Career Development in Digital Pharma",
        location: "Workshop Room 1",
        description: "Building careers in the digital pharmaceutical landscape",
      },
      {
        time: "11:30 - 12:30",
        type: "panel",
        title: "Future of Pharmaceutical Education",
        location: "Main Auditorium",
        description: "Preparing the next generation for digital pharma careers",
      },
      {
        time: "12:30 - 13:30",
        type: "lunch",
        title: "Farewell Lunch",
        location: "Grand Ballroom",
        description: "Final networking and collaboration discussions",
      },
      {
        time: "13:30 - 14:30",
        type: "session",
        title: "Collaborative Research Networks",
        speaker: "Dr. Network Builder",
        location: "Hall A",
        description: "Building global research partnerships",
      },
      {
        time: "14:30 - 15:30",
        type: "panel",
        title: "Action Plan for Digital Transformation",
        location: "Main Auditorium",
        description: "Concrete steps for implementing digital strategies",
      },
      {
        time: "15:30 - 16:00",
        type: "break",
        title: "Final Coffee Break",
        location: "Exhibition Hall",
        description: "Last chance to connect with exhibitors",
      },
      {
        time: "16:00 - 17:00",
        type: "keynote",
        title: "Closing Ceremony & Call to Action",
        speaker: "Dr. Future Vision",
        designation: "IPCA Secretary General",
        location: "Main Auditorium",
        description: "Congress summary and future roadmap",
      },
      {
        time: "17:00 - 17:30",
        type: "closing",
        title: "Vote of Thanks & Farewell",
        location: "Main Auditorium",
        description: "Official closing and acknowledgments",
      },
    ],
  };

  const getTypeColor = (type: string) => {
    const colors = {
      keynote:
        "bg-pharmaceutical-100 text-pharmaceutical-800 border-pharmaceutical-200",
      panel: "bg-primary-100 text-primary-800 border-primary-200",
      session: "bg-blue-100 text-blue-800 border-blue-200",
      workshop: "bg-purple-100 text-purple-800 border-purple-200",
      break: "bg-gray-100 text-gray-800 border-gray-200",
      social: "bg-green-100 text-green-800 border-green-200",
      lunch: "bg-orange-100 text-orange-800 border-orange-200",
      registration: "bg-yellow-100 text-yellow-800 border-yellow-200",
      awards: "bg-pink-100 text-pink-800 border-pink-200",
      closing: "bg-indigo-100 text-indigo-800 border-indigo-200",
    };
    return (
      colors[type as keyof typeof colors] ||
      "bg-gray-100 text-gray-800 border-gray-200"
    );
  };

  const getTypeIcon = (type: string) => {
    const icons = {
      keynote: Award,
      panel: Users,
      session: Calendar,
      workshop: Calendar,
      break: Coffee,
      social: Users,
      lunch: Utensils,
      registration: Calendar,
      awards: Award,
      closing: Calendar,
    };
    const Icon = icons[type as keyof typeof icons] || Calendar;
    return <Icon className="w-4 h-4" />;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-pharmaceutical-600 to-primary-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Congress <span className="text-pharmaceutical-200">Schedule</span>
          </h1>
          <p className="text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed">
            Three days of intensive learning, networking, and innovation in
            pharmaceutical AI and technology
          </p>
        </div>
      </section>

      {/* Schedule Navigation */}
      <section className="py-8 bg-white shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8">
            {days.map((day) => (
              <button
                key={day.id}
                onClick={() => setSelectedDay(day.id)}
                className={`w-full md:w-auto px-6 py-4 rounded-lg text-center transition-all ${
                  selectedDay === day.id
                    ? "bg-pharmaceutical-600 text-white shadow-lg"
                    : "bg-gray-100 text-gray-700 hover:bg-pharmaceutical-50"
                }`}
              >
                <div className="font-bold text-lg">{day.day}</div>
                <div className="text-sm opacity-90">{day.date}, 2025</div>
                <div className="text-xs mt-1 opacity-75">{day.theme}</div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Schedule Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
              {days.find((d) => d.id === selectedDay)?.theme}
            </h2>

            <div className="space-y-6">
              {scheduleData[selectedDay as keyof typeof scheduleData].map(
                (item, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden"
                  >
                    <div className="flex flex-col md:flex-row">
                      <div className="md:w-32 bg-gray-50 p-4 flex items-center justify-center">
                        <div className="text-center">
                          <Clock className="w-5 h-5 text-gray-600 mx-auto mb-1" />
                          <div className="text-sm font-medium text-gray-900">
                            {item.time}
                          </div>
                        </div>
                      </div>

                      <div className="flex-1 p-6">
                        <div className="flex items-start justify-between mb-3">
                          <div className="flex-1">
                            <div className="flex items-center space-x-3 mb-2">
                              <span
                                className={`inline-flex items-center space-x-1 px-3 py-1 rounded-full text-xs font-medium border ${getTypeColor(
                                  item.type
                                )}`}
                              >
                                {getTypeIcon(item.type)}
                                <span className="capitalize">{item.type}</span>
                              </span>
                              {item.location && (
                                <div className="flex items-center space-x-1 text-gray-600">
                                  <MapPin className="w-4 h-4" />
                                  <span className="text-sm">
                                    {item.location}
                                  </span>
                                </div>
                              )}
                            </div>

                            <h3 className="text-xl font-bold text-gray-900 mb-2">
                              {item.title}
                            </h3>

                            {item.speaker && (
                              <div className="text-pharmaceutical-600 font-semibold mb-1">
                                {item.speaker}
                                {item.designation && (
                                  <span className="text-gray-600 font-normal text-sm block">
                                    {item.designation}
                                  </span>
                                )}
                              </div>
                            )}

                            {item.panelists && (
                              <div className="text-sm text-gray-600 mb-2">
                                <strong>Panelists:</strong>{" "}
                                {item.panelists.join(", ")}
                              </div>
                            )}

                            <p className="text-gray-600">{item.description}</p>

                            {item.capacity && (
                              <div className="mt-2 text-sm text-orange-600 font-medium">
                                {item.capacity}
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center bg-gradient-to-r from-pharmaceutical-500 to-primary-600 rounded-2xl p-12 text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Join Us?
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Don't miss this comprehensive program featuring the latest
              innovations in pharmaceutical AI and technology.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <a
                href="#registration"
                className="bg-white text-pharmaceutical-600 px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition-colors"
              >
                Register Now
              </a>
              <a
                href="/speakers"
                className="border-2 border-white text-white px-8 py-3 rounded-full font-bold hover:bg-white hover:text-pharmaceutical-600 transition-colors"
              >
                Meet Our Speakers
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SchedulePage;
