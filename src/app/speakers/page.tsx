"use client";

import { useState } from "react";
import { MapPin, Building, Award, ExternalLink, Filter } from "lucide-react";
import Link from "next/link";

const SpeakersPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = [
    "All",
    "Keynote",
    "Industry Leaders",
    "Researchers",
    "Tech Innovators",
    "Regulators",
  ];

  const speakers = [
    {
      id: 1,
      name: "Dr. Priya Sharma",
      title: "Chief AI Officer",
      company: "GlobalPharma Innovations",
      location: "Mumbai, India",
      category: "Keynote",
      expertise: [
        "AI in Drug Discovery",
        "Machine Learning",
        "Digital Transformation",
      ],
      bio: "Leading AI transformation in pharmaceutical industry with 15+ years of experience in drug discovery and development.",
      achievements: [
        "AI Pharma Leader Award 2024",
        "50+ AI Patents",
        "TEDx Speaker",
      ],
      image: "/api/placeholder/300/300",
      sessionTitle: "The Future of AI-Driven Drug Discovery",
      sessionTime: "Day 1, 9:00 AM",
    },
    {
      id: 2,
      name: "Prof. Michael Chen",
      title: "Director of Digital Health",
      company: "Stanford University Medical Center",
      location: "California, USA",
      category: "Keynote",
      expertise: [
        "Digital Therapeutics",
        "Precision Medicine",
        "Healthcare Analytics",
      ],
      bio: "Renowned researcher in digital health technologies and precision medicine applications.",
      achievements: [
        "Nature Medicine Editor",
        "Digital Health Innovation Award",
        "200+ Publications",
      ],
      image: "/api/placeholder/300/300",
      sessionTitle: "Precision Medicine in the Digital Age",
      sessionTime: "Day 1, 2:00 PM",
    },
    {
      id: 3,
      name: "Dr. Sarah Johnson",
      title: "VP of Regulatory Affairs",
      company: "FDA Center for Drug Evaluation",
      location: "Maryland, USA",
      category: "Regulators",
      expertise: ["Regulatory Science", "AI Validation", "Digital Biomarkers"],
      bio: "Expert in regulatory frameworks for AI and digital technologies in pharmaceutical development.",
      achievements: [
        "FDA Excellence Award",
        "Regulatory Science Expert",
        "50+ Guidances",
      ],
      image: "/api/placeholder/300/300",
      sessionTitle: "Regulatory Pathways for AI in Pharma",
      sessionTime: "Day 2, 10:00 AM",
    },
    {
      id: 4,
      name: "Dr. Rajesh Kumar",
      title: "CEO & Founder",
      company: "AI Therapeutics",
      location: "Bangalore, India",
      category: "Tech Innovators",
      expertise: ["Startup Innovation", "AI Platforms", "Drug Repurposing"],
      bio: "Serial entrepreneur building AI-first pharmaceutical companies with successful exits.",
      achievements: [
        "Forbes 30 Under 30",
        "Pharma Startup of the Year",
        "$50M+ Raised",
      ],
      image: "/api/placeholder/300/300",
      sessionTitle: "Building AI-Native Pharma Companies",
      sessionTime: "Day 2, 3:00 PM",
    },
    {
      id: 5,
      name: "Dr. Emily Watson",
      title: "Head of Digital Innovation",
      company: "Novartis AG",
      location: "Basel, Switzerland",
      category: "Industry Leaders",
      expertise: [
        "Digital Transformation",
        "Industry 4.0",
        "Smart Manufacturing",
      ],
      bio: "Leading digital transformation initiatives across global pharmaceutical operations.",
      achievements: [
        "Digital Leader Award",
        "Industry 4.0 Pioneer",
        "Innovation Excellence",
      ],
      image: "/api/placeholder/300/300",
      sessionTitle: "Digital Manufacturing Revolution",
      sessionTime: "Day 3, 11:00 AM",
    },
    {
      id: 6,
      name: "Prof. David Liu",
      title: "Professor of Chemistry",
      company: "MIT & Harvard University",
      location: "Massachusetts, USA",
      category: "Researchers",
      expertise: [
        "Chemical Biology",
        "Gene Editing",
        "Therapeutic Development",
      ],
      bio: "Pioneer in chemical biology and gene editing technologies for therapeutic applications.",
      achievements: ["MacArthur Fellow", "Breakthrough Prize", "300+ Patents"],
      image: "/api/placeholder/300/300",
      sessionTitle: "Next-Gen Therapeutics Through Gene Editing",
      sessionTime: "Day 3, 2:00 PM",
    },
  ];

  const filteredSpeakers =
    selectedCategory === "All"
      ? speakers
      : speakers.filter((speaker) => speaker.category === selectedCategory);

  const speakerStats = [
    {
      number: "200+",
      label: "Expert Speakers",
      description: "From 50+ countries worldwide",
    },
    {
      number: "15+",
      label: "Keynote Sessions",
      description: "Industry-defining presentations",
    },
    { number: "50+", label: "Countries", description: "Global representation" },
    {
      number: "85%",
      label: "C-Level Speakers",
      description: "Senior industry leaders",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-pharmaceutical-600 to-primary-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            World-Class{" "}
            <span className="text-pharmaceutical-200">Speakers</span>
          </h1>
          <p className="text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed">
            Learn from global leaders, innovators, and pioneers shaping the
            future of pharmaceutical sciences
          </p>
        </div>
      </section>

      {/* Speaker Stats */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {speakerStats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-pharmaceutical-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-lg font-semibold text-gray-900 mb-2">
                  {stat.label}
                </div>
                <p className="text-gray-600 text-sm">{stat.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center items-center space-x-4">
            <Filter className="w-5 h-5 text-gray-600" />
            <span className="text-gray-700 font-medium mr-4">
              Filter by Category:
            </span>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full font-medium transition-colors ${
                  selectedCategory === category
                    ? "bg-pharmaceutical-600 text-white"
                    : "bg-white text-gray-700 hover:bg-pharmaceutical-50"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Speakers Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8">
            {filteredSpeakers.map((speaker) => (
              <div
                key={speaker.id}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="p-8">
                  <div className="flex items-start space-x-6 mb-6">
                    <div className="w-24 h-24 bg-gradient-to-br from-pharmaceutical-400 to-primary-500 rounded-xl flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold text-2xl">
                        {speaker.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </span>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-900 mb-1">
                        {speaker.name}
                      </h3>
                      <p className="text-pharmaceutical-600 font-semibold mb-1">
                        {speaker.title}
                      </p>
                      <div className="flex items-center space-x-2 text-gray-600 mb-2">
                        <Building className="w-4 h-4" />
                        <span className="text-sm">{speaker.company}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-gray-600">
                        <MapPin className="w-4 h-4" />
                        <span className="text-sm">{speaker.location}</span>
                      </div>
                    </div>
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium ${
                        speaker.category === "Keynote"
                          ? "bg-pharmaceutical-100 text-pharmaceutical-700"
                          : speaker.category === "Industry Leaders"
                          ? "bg-primary-100 text-primary-700"
                          : speaker.category === "Researchers"
                          ? "bg-blue-100 text-blue-700"
                          : speaker.category === "Tech Innovators"
                          ? "bg-purple-100 text-purple-700"
                          : "bg-gray-100 text-gray-700"
                      }`}
                    >
                      {speaker.category}
                    </span>
                  </div>

                  <p className="text-gray-600 mb-6">{speaker.bio}</p>

                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-2">
                      Expertise Areas:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {speaker.expertise.map((skill, index) => (
                        <span
                          key={index}
                          className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-2">
                      Key Achievements:
                    </h4>
                    <div className="space-y-1">
                      {speaker.achievements.map((achievement, index) => (
                        <div
                          key={index}
                          className="flex items-center space-x-2"
                        >
                          <Award className="w-4 h-4 text-pharmaceutical-500" />
                          <span className="text-gray-600 text-sm">
                            {achievement}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="bg-pharmaceutical-50 rounded-lg p-4">
                    <h4 className="font-semibold text-pharmaceutical-800 mb-1">
                      Featured Session:
                    </h4>
                    <p className="text-pharmaceutical-700 font-medium">
                      {speaker.sessionTitle}
                    </p>
                    <p className="text-pharmaceutical-600 text-sm">
                      {speaker.sessionTime}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center bg-gradient-to-r from-pharmaceutical-500 to-primary-600 rounded-2xl p-12 text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Don't Miss These Exceptional Speakers
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Register now to gain exclusive access to insights from the world's
              leading pharmaceutical innovators and thought leaders.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Link
                href="/registration"
                className="bg-white text-pharmaceutical-600 px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition-colors"
              >
                Register Now
              </Link>
              <Link
                href="/schedule"
                className="border-2 border-white text-white px-8 py-3 rounded-full font-bold hover:bg-white hover:text-pharmaceutical-600 transition-colors"
              >
                View Full Schedule
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SpeakersPage;
