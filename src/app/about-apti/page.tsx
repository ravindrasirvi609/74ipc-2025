"use client";

import {
  Users,
  Award,
  BookOpen,
  Lightbulb,
  Target,
  GraduationCap,
} from "lucide-react";
import Link from "next/link";

const AboutAPTI = () => {
  const milestones = [
    {
      year: "1966",
      title: "Foundation",
      description:
        "APTI was established to advance pharmaceutical education and support teachers across India.",
    },
    {
      year: "1980s",
      title: "National Expansion",
      description:
        "APTI chapters formed in multiple states, uniting pharmacy educators nationwide.",
    },
    {
      year: "2000s",
      title: "Academic Leadership",
      description:
        "APTI became a leading voice in curriculum development and academic standards for pharmacy education.",
    },
    {
      year: "2010s",
      title: "Global Collaboration",
      description:
        "APTI fostered international partnerships and knowledge exchange for faculty and students.",
    },
    {
      year: "2020s",
      title: "Digital Transformation",
      description:
        "Embracing technology and innovation in pharmaceutical teaching and research.",
    },
  ];

  const achievements = [
    {
      icon: Users,
      number: "10,000+",
      label: "Members",
      description: "Pharmacy educators and professionals across India.",
    },
    {
      icon: GraduationCap,
      number: "100+",
      label: "Institutions",
      description: "Academic institutions affiliated with APTI.",
    },
    {
      icon: BookOpen,
      number: "1,000+",
      label: "Workshops",
      description: "Faculty development and training programs conducted.",
    },
    {
      icon: Award,
      number: "50+",
      label: "Awards",
      description: "Recognitions for excellence in teaching and research.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-pharmaceutical-600 to-primary-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            About <span className="text-pharmaceutical-200">APTI</span>
          </h1>
          <p className="text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed">
            Association of Pharmaceutical Teachers of India - Advancing pharmacy
            education and empowering educators since 1966
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Shaping the Future of Pharmacy Education
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                The Association of Pharmaceutical Teachers of India (APTI) is
                the premier organization dedicated to the advancement of
                pharmacy education and the professional development of educators
                in India.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Since its inception in 1966, APTI has played a pivotal role in
                uniting pharmacy teachers, promoting academic excellence, and
                fostering innovation in pharmaceutical sciences. Through its
                network of chapters, conferences, and training programs, APTI
                empowers educators to shape the next generation of pharmacy
                professionals.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                As we embrace new technologies and global best practices, APTI
                remains committed to elevating the standards of pharmacy
                education and supporting the professional growth of its members.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Our Mission
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Target className="w-6 h-6 text-pharmaceutical-600 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      Advance Pharmacy Education
                    </h4>
                    <p className="text-gray-600">
                      Promote excellence in teaching, research, and curriculum
                      development.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Lightbulb className="w-6 h-6 text-pharmaceutical-600 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      Foster Innovation
                    </h4>
                    <p className="text-gray-600">
                      Encourage new ideas and methodologies in pharmaceutical
                      education.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Users className="w-6 h-6 text-pharmaceutical-600 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      Empower Educators
                    </h4>
                    <p className="text-gray-600">
                      Support the professional growth and collaboration of
                      pharmacy teachers.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Achievements */}
          <div className="mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
              Our Impact Across India
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {achievements.map((achievement, index) => (
                <div
                  key={index}
                  className="text-center bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
                >
                  <achievement.icon className="w-12 h-12 text-pharmaceutical-600 mx-auto mb-4" />
                  <div className="text-3xl font-bold text-gray-900 mb-2">
                    {achievement.number}
                  </div>
                  <div className="text-lg font-semibold text-pharmaceutical-600 mb-2">
                    {achievement.label}
                  </div>
                  <p className="text-gray-600 text-sm">
                    {achievement.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Timeline */}
          <div className="mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
              Milestones in Our Journey
            </h2>
            <div className="relative">
              <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-pharmaceutical-300 transform md:-translate-x-0.5"></div>
              {milestones.map((milestone, index) => (
                <div
                  key={index}
                  className={`relative flex items-center mb-12 ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  <div
                    className={`w-full md:w-1/2 ${
                      index % 2 === 0 ? "md:pr-8" : "md:pl-8"
                    }`}
                  >
                    <div className="bg-white rounded-xl p-6 shadow-lg ml-12 md:ml-0">
                      <div className="text-2xl font-bold text-pharmaceutical-600 mb-2">
                        {milestone.year}
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3">
                        {milestone.title}
                      </h3>
                      <p className="text-gray-600">{milestone.description}</p>
                    </div>
                  </div>
                  <div className="absolute left-4 md:left-1/2 w-8 h-8 bg-pharmaceutical-600 rounded-full transform md:-translate-x-1/2 border-4 border-white shadow-lg"></div>
                </div>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center bg-gradient-to-r from-pharmaceutical-500 to-primary-600 rounded-2xl p-12 text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Join the APTI Community
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Be part of India's leading network of pharmacy educators and help
              shape the future of pharmaceutical sciences.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Link
                href="#registration"
                className="bg-white text-pharmaceutical-600 px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition-colors"
              >
                Register Now
              </Link>
              <Link
                href="https://aptiindia.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-white text-white px-8 py-3 rounded-full font-bold hover:bg-white hover:text-pharmaceutical-600 transition-colors"
              >
                Visit APTI Website
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutAPTI;
