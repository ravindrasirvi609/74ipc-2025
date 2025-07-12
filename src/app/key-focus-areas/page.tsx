"use client";

import {
  Microscope,
  Brain,
  Shield,
  Cog,
  Users,
  Database,
  Smartphone,
  Factory,
  Heart,
  ChevronRight,
  Target,
  Lightbulb,
  TrendingUp,
} from "lucide-react";
import Link from "next/link";

const KeyFocusAreas = () => {
  const focusAreas = [
    {
      id: 1,
      icon: Brain,
      title: "AI in Drug Discovery & Development",
      description:
        "Revolutionizing pharmaceutical R&D through artificial intelligence",
      color: "from-pharmaceutical-500 to-pharmaceutical-600",
      details: [
        "Machine learning for target identification",
        "AI-powered molecular design",
        "Predictive toxicology models",
        "Clinical trial optimization",
        "Drug repurposing strategies",
      ],
    },
    {
      id: 2,
      icon: Database,
      title: "Big Data & Analytics in Pharma",
      description: "Harnessing the power of data for informed decision-making",
      color: "from-primary-500 to-primary-600",
      details: [
        "Real-world evidence generation",
        "Patient data analytics",
        "Supply chain optimization",
        "Pharmacovigilance enhancement",
        "Market intelligence insights",
      ],
    },
    {
      id: 3,
      title: "Digital Clinical Trials",
      icon: Smartphone,
      description:
        "Transforming clinical research through digital technologies",
      color: "from-pharmaceutical-400 to-primary-500",
      details: [
        "Remote patient monitoring",
        "Digital biomarkers",
        "Decentralized trial models",
        "Electronic data capture",
        "Virtual patient engagement",
      ],
    },
    {
      id: 4,
      icon: Factory,
      title: "Smart Manufacturing & Industry 4.0",
      description: "Intelligent manufacturing for pharmaceutical excellence",
      color: "from-primary-400 to-pharmaceutical-500",
      details: [
        "Automated production lines",
        "Quality control systems",
        "Predictive maintenance",
        "Digital twins",
        "Continuous manufacturing",
      ],
    },
    {
      id: 5,
      icon: Heart,
      title: "Personalized Medicine & Precision Healthcare",
      description: "Tailoring treatments to individual patient needs",
      color: "from-pharmaceutical-500 to-primary-500",
      details: [
        "Genomic data analysis",
        "Biomarker identification",
        "Companion diagnostics",
        "Therapeutic drug monitoring",
        "Patient stratification",
      ],
    },
    {
      id: 6,
      icon: Shield,
      title: "Regulatory Technology (RegTech)",
      description: "Streamlining regulatory compliance through technology",
      color: "from-primary-500 to-pharmaceutical-600",
      details: [
        "Automated regulatory submissions",
        "Compliance monitoring systems",
        "Risk assessment tools",
        "Audit trail management",
        "Global regulatory harmonization",
      ],
    },
    {
      id: 7,
      icon: Cog,
      title: "Digital Supply Chain & Logistics",
      description:
        "Optimizing pharmaceutical supply chains with digital solutions",
      color: "from-pharmaceutical-400 to-primary-400",
      details: [
        "Blockchain for traceability",
        "IoT-enabled cold chain monitoring",
        "Demand forecasting algorithms",
        "Inventory optimization",
        "Anti-counterfeiting measures",
      ],
    },
    {
      id: 8,
      icon: Users,
      title: "Digital Health & Patient Engagement",
      description:
        "Enhancing patient outcomes through digital health solutions",
      color: "from-primary-400 to-pharmaceutical-600",
      details: [
        "Mobile health applications",
        "Telemedicine platforms",
        "Patient adherence solutions",
        "Digital therapeutics",
        "Health data integration",
      ],
    },
  ];

  const sessionTypes = [
    {
      icon: Lightbulb,
      title: "Keynote Presentations",
      description: "Industry leaders sharing breakthrough insights",
      count: "12+",
    },
    {
      icon: Target,
      title: "Technical Sessions",
      description: "Deep-dive into specific technologies and applications",
      count: "30+",
    },
    {
      icon: Users,
      title: "Panel Discussions",
      description: "Expert panels on emerging trends and challenges",
      count: "15+",
    },
    {
      icon: TrendingUp,
      title: "Case Studies",
      description: "Real-world implementation stories and lessons learned",
      count: "25+",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-pharmaceutical-600 to-primary-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Key <span className="text-pharmaceutical-200">Focus Areas</span>
          </h1>
          <p className="text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed">
            Comprehensive exploration of AI and technology applications across
            the pharmaceutical ecosystem
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Eight Strategic Focus Areas
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Our congress will delve deep into eight critical areas where AI
              and technology are making the most significant impact in
              pharmaceutical sciences and healthcare delivery.
            </p>
          </div>

          {/* Focus Areas Grid */}
          <div className="grid lg:grid-cols-2 gap-8 mb-20">
            {focusAreas.map((area, index) => (
              <div
                key={area.id}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className={`h-2 bg-gradient-to-r ${area.color}`}></div>
                <div className="p-8">
                  <div className="flex items-start space-x-4 mb-6">
                    <div
                      className={`w-16 h-16 bg-gradient-to-br ${area.color} rounded-lg flex items-center justify-center flex-shrink-0`}
                    >
                      <area.icon className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">
                        {area.title}
                      </h3>
                      <p className="text-gray-600">{area.description}</p>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <h4 className="font-semibold text-gray-900 mb-3">
                      Key Topics:
                    </h4>
                    {area.details.map((detail, detailIndex) => (
                      <div
                        key={detailIndex}
                        className="flex items-center space-x-3"
                      >
                        <ChevronRight className="w-4 h-4 text-pharmaceutical-500" />
                        <span className="text-gray-600">{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Session Types */}
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
              How We'll Explore These Areas
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {sessionTypes.map((session, index) => (
                <div
                  key={index}
                  className="text-center bg-white rounded-xl p-6 shadow-lg"
                >
                  <session.icon className="w-12 h-12 text-pharmaceutical-600 mx-auto mb-4" />
                  <div className="text-2xl font-bold text-pharmaceutical-600 mb-2">
                    {session.count}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {session.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{session.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center bg-gradient-to-r from-pharmaceutical-500 to-primary-600 rounded-2xl p-12 text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Dive Deep?
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Join industry experts, researchers, and innovators as we explore
              these critical focus areas and their transformative impact on
              pharmaceutical sciences.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Link
                href="/speakers"
                className="bg-white text-pharmaceutical-600 px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition-colors"
              >
                Meet Our Speakers
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

export default KeyFocusAreas;
