"use client";

import {
  Brain,
  Cpu,
  Database,
  Shield,
  Microscope,
  Zap,
  Users,
  Target,
  TrendingUp,
} from "lucide-react";
import Link from "next/link";

const AboutTheme = () => {
  const themeAspects = [
    {
      icon: Brain,
      title: "Artificial Intelligence",
      description:
        "Exploring AI applications in drug discovery, clinical trials, and personalized medicine",
      color: "from-pharmaceutical-400 to-pharmaceutical-600",
    },
    {
      icon: Cpu,
      title: "Digital Technologies",
      description:
        "Leveraging IoT, blockchain, and cloud computing for pharmaceutical excellence",
      color: "from-primary-400 to-primary-600",
    },
    {
      icon: Database,
      title: "Big Data Analytics",
      description:
        "Harnessing vast datasets for insights in drug development and patient care",
      color: "from-pharmaceutical-500 to-primary-500",
    },
    {
      icon: Shield,
      title: "Cybersecurity",
      description:
        "Ensuring data protection and security in digital pharmaceutical ecosystems",
      color: "from-primary-500 to-pharmaceutical-500",
    },
    {
      icon: Microscope,
      title: "Digital R&D",
      description:
        "Transforming research and development through digital tools and methodologies",
      color: "from-pharmaceutical-400 to-primary-400",
    },
    {
      icon: Zap,
      title: "Automation",
      description:
        "Streamlining manufacturing and quality control through intelligent automation",
      color: "from-primary-400 to-pharmaceutical-600",
    },
  ];

  const educateAspects = [
    "Advanced AI/ML training programs for pharmaceutical professionals",
    "Digital literacy workshops for traditional pharma practitioners",
    "Emerging technology awareness sessions",
    "Best practices in digital transformation",
  ];

  const innovateAspects = [
    "AI-powered drug discovery platforms",
    "Digital clinical trial methodologies",
    "Smart manufacturing solutions",
    "Personalized medicine technologies",
  ];

  const empowerAspects = [
    "Digital tools for small and medium pharmaceutical enterprises",
    "Technology adoption frameworks",
    "Career development in digital pharma",
    "Startup ecosystem support",
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-pharmaceutical-600 to-primary-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            About Our <span className="text-pharmaceutical-200">Theme</span>
          </h1>
          <div className="text-2xl md:text-4xl font-bold mb-8 bg-gradient-to-r from-pharmaceutical-200 to-primary-200 bg-clip-text text-transparent">
            AI & TECHNOLOGY IN PHARMA:
            <br />
            EDUCATE, INNOVATE, EMPOWER
          </div>
          <p className="text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed">
            Exploring the transformative power of artificial intelligence and
            technology in pharmaceutical sciences
          </p>
        </div>
      </section>

      {/* Theme Overview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Why This Theme Matters
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              The pharmaceutical industry stands at the cusp of a digital
              revolution. AI and advanced technologies are not just enhancing
              existing processes—they're fundamentally reshaping how we
              discover, develop, manufacture, and deliver medicines to patients
              worldwide.
            </p>
          </div>

          {/* Technology Areas */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {themeAspects.map((aspect, index) => (
              <div
                key={index}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className={`h-2 bg-gradient-to-r ${aspect.color}`}></div>
                <div className="p-6">
                  <aspect.icon className="w-12 h-12 text-pharmaceutical-600 mb-4" />
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {aspect.title}
                  </h3>
                  <p className="text-gray-600">{aspect.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Three Pillars */}
          <div className="mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
              Our Three Pillars
            </h2>
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Educate */}
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-pharmaceutical-500 to-pharmaceutical-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-pharmaceutical-600">
                    EDUCATE
                  </h3>
                </div>
                <p className="text-gray-600 mb-6 text-center">
                  Building digital literacy and AI competency across the
                  pharmaceutical workforce
                </p>
                <ul className="space-y-3">
                  {educateAspects.map((item, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-pharmaceutical-500 rounded-full mt-2"></div>
                      <span className="text-gray-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Innovate */}
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Target className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-primary-600">
                    INNOVATE
                  </h3>
                </div>
                <p className="text-gray-600 mb-6 text-center">
                  Pioneering breakthrough solutions through AI and advanced
                  technologies
                </p>
                <ul className="space-y-3">
                  {innovateAspects.map((item, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-primary-500 rounded-full mt-2"></div>
                      <span className="text-gray-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Empower */}
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-pharmaceutical-500 to-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <TrendingUp className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-pharmaceutical-600 to-primary-600 bg-clip-text text-transparent">
                    EMPOWER
                  </h3>
                </div>
                <p className="text-gray-600 mb-6 text-center">
                  Enabling organizations and individuals to thrive in the
                  digital pharmaceutical era
                </p>
                <ul className="space-y-3">
                  {empowerAspects.map((item, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-gradient-to-r from-pharmaceutical-500 to-primary-500 rounded-full mt-2"></div>
                      <span className="text-gray-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Impact Statement */}
          <div className="bg-gradient-to-r from-pharmaceutical-500 to-primary-600 rounded-2xl p-12 text-white text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Shaping Tomorrow's Pharmaceutical Landscape
            </h2>
            <p className="text-xl mb-8 max-w-4xl mx-auto leading-relaxed">
              Through our theme "AI & Technology in Pharma: Educate, Innovate,
              Empower," we aim to create a comprehensive ecosystem where
              knowledge, innovation, and empowerment converge to drive the
              pharmaceutical industry forward into a more efficient, effective,
              and patient-centric future.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Link
                href="/key-focus-areas"
                className="bg-white text-pharmaceutical-600 px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition-colors"
              >
                Explore Focus Areas
              </Link>
              <Link
                href="/expected-outcomes"
                className="border-2 border-white text-white px-8 py-3 rounded-full font-bold hover:bg-white hover:text-pharmaceutical-600 transition-colors"
              >
                Expected Outcomes
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutTheme;
