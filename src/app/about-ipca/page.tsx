"use client";

import { Award, Users, Globe, BookOpen, Lightbulb, Target } from "lucide-react";
import Link from "next/link";

const AboutIPCA = () => {
  const milestones = [
    {
      year: "1950",
      title: "Foundation",
      description:
        "Indian Pharmaceutical Congress was established to advance pharmaceutical sciences in India",
    },
    {
      year: "1970s",
      title: "National Recognition",
      description:
        "Became the premier platform for pharmaceutical professionals across India",
    },
    {
      year: "1990s",
      title: "International Collaboration",
      description:
        "Expanded to include global partnerships and international speakers",
    },
    {
      year: "2000s",
      title: "Digital Transformation",
      description:
        "Embraced technology and digital innovations in pharmaceutical sciences",
    },
    {
      year: "2020s",
      title: "AI & Technology Focus",
      description:
        "Leading the integration of AI and advanced technologies in pharma",
    },
  ];

  const achievements = [
    {
      icon: Users,
      number: "200,000+",
      label: "Members Reached",
      description: "Pharmaceutical professionals impacted over 74 years",
    },
    {
      icon: Globe,
      number: "50+",
      label: "Countries",
      description: "International participation and collaboration",
    },
    {
      icon: BookOpen,
      number: "5,000+",
      label: "Research Papers",
      description: "Scientific contributions presented",
    },
    {
      icon: Award,
      number: "100+",
      label: "Awards",
      description: "Excellence recognitions and honors",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-pharmaceutical-600 to-primary-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            About <span className="text-pharmaceutical-200">IPCA</span>
          </h1>
          <p className="text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed">
            Indian Pharmaceutical Congress Association - Pioneering
            pharmaceutical excellence for over seven decades
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Legacy of Excellence
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                The Indian Pharmaceutical Congress Association (IPCA) stands as
                India's most prestigious organization dedicated to advancing
                pharmaceutical sciences, fostering innovation, and shaping the
                future of healthcare.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Since our inception in 1950, we have been at the forefront of
                pharmaceutical education, research, and industry development,
                bringing together the brightest minds in pharmaceutical sciences
                to address contemporary challenges and pioneer breakthrough
                solutions.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Today, as we embrace the 74th edition with the theme "AI &
                Technology in Pharma: Educate, Innovate, Empower," we continue
                our mission to lead the pharmaceutical industry into the digital
                age.
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
                      Advance Pharmaceutical Sciences
                    </h4>
                    <p className="text-gray-600">
                      Promote cutting-edge research and development in
                      pharmaceutical sciences
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
                      Encourage innovative approaches to healthcare challenges
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Users className="w-6 h-6 text-pharmaceutical-600 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      Build Community
                    </h4>
                    <p className="text-gray-600">
                      Create a collaborative platform for pharmaceutical
                      professionals
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Achievements */}
          <div className="mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
              Our Impact Over 74 Years
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
              Join Us in Shaping the Future
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Be part of the 74th Indian Pharmaceutical Congress and contribute
              to the advancement of pharmaceutical sciences through AI and
              technology.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Link
                href="/registration"
                className="bg-white text-pharmaceutical-600 px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition-colors"
              >
                Register Now
              </Link>
              <Link
                href="/about-theme"
                className="border-2 border-white text-white px-8 py-3 rounded-full font-bold hover:bg-white hover:text-pharmaceutical-600 transition-colors"
              >
                Learn About Our Theme
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutIPCA;
