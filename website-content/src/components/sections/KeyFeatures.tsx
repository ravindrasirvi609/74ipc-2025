import { Lightbulb, Users, Award, Wifi, Coffee, Car } from "lucide-react";

const KeyFeatures = () => {
  const features = [
    {
      icon: Lightbulb,
      title: "Innovation Hub",
      description:
        "Discover groundbreaking pharmaceutical innovations and emerging technologies",
      color: "from-pharmaceutical-400 to-pharmaceutical-600",
    },
    {
      icon: Users,
      title: "Expert Networking",
      description:
        "Connect with industry leaders, researchers, and fellow professionals",
      color: "from-primary-400 to-primary-600",
    },
    {
      icon: Award,
      title: "Excellence Recognition",
      description:
        "Celebrate outstanding achievements in pharmaceutical sciences",
      color: "from-primary-400 to-pharmaceutical-600",
    },
    {
      icon: Wifi,
      title: "Digital Experience",
      description:
        "High-speed connectivity and digital tools for enhanced learning",
      color: "from-primary-400 to-pharmaceutical-500",
    },
    {
      icon: Coffee,
      title: "Premium Hospitality",
      description: "World-class catering and comfortable networking spaces",
      color: "from-pharmaceutical-400 to-primary-500",
    },
    {
      icon: Car,
      title: "Easy Access",
      description:
        "Convenient location with excellent transportation connectivity",
      color: "from-primary-400 to-pharmaceutical-600",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Why Attend
            <span className="block text-pharmaceutical-600">
              74th IPC 2025?
            </span>
          </h2>
          <p className="text-xl text-gray-600">
            Experience unparalleled opportunities for learning, networking, and
            professional growth at India's premier pharmaceutical congress.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-gray-50 rounded-2xl p-8 hover:bg-white hover:shadow-xl transition-all duration-300 hover-lift"
            >
              <div
                className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
              >
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Statistics Section */}
        <div className="bg-gradient-to-br from-pharmaceutical-500 to-primary-600 rounded-3xl p-8 md:p-12 text-white">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Join the Largest Pharmaceutical Gathering in India
            </h3>
            <p className="text-xl text-white/90">
              Be part of a legacy that has shaped pharmaceutical science for
              over 70 years
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              {
                number: "5000+",
                label: "Attendees",
                sublabel: "From 50+ Countries",
              },
              {
                number: "200+",
                label: "Speakers",
                sublabel: "Industry Experts",
              },
              {
                number: "100+",
                label: "Sessions",
                sublabel: "Scientific Programs",
              },
              {
                number: "50+",
                label: "Exhibitors",
                sublabel: "Leading Companies",
              },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-yellow-300 mb-2">
                  {stat.number}
                </div>
                <div className="text-lg font-semibold mb-1">{stat.label}</div>
                <div className="text-sm text-white/70">{stat.sublabel}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Track Highlights */}
        <div className="mt-20">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Conference Tracks & Focus Areas
          </h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Drug Discovery & Development",
                topics: [
                  "Novel Drug Targets",
                  "AI in Drug Discovery",
                  "Personalized Medicine",
                ],
              },
              {
                title: "Regulatory Affairs",
                topics: [
                  "Regulatory Guidelines",
                  "Quality Assurance",
                  "Clinical Trials",
                ],
              },
              {
                title: "Manufacturing & Technology",
                topics: [
                  "Process Innovation",
                  "Digital Manufacturing",
                  "Sustainability",
                ],
              },
              {
                title: "Market Access & Policy",
                topics: [
                  "Healthcare Policy",
                  "Market Dynamics",
                  "Global Trade",
                ],
              },
            ].map((track, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-xl p-6 hover:bg-white hover:shadow-lg transition-all duration-300"
              >
                <h4 className="text-lg font-bold text-gray-900 mb-4">
                  {track.title}
                </h4>
                <ul className="space-y-2">
                  {track.topics.map((topic, topicIndex) => (
                    <li
                      key={topicIndex}
                      className="text-gray-600 text-sm flex items-center"
                    >
                      <div className="w-2 h-2 bg-pharmaceutical-500 rounded-full mr-3"></div>
                      {topic}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default KeyFeatures;
