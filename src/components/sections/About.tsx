import {
  Microscope,
  Users,
  Globe,
  Award,
  TrendingUp,
  Heart,
} from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: Microscope,
      title: "Cutting-edge Research",
      description:
        "Latest breakthroughs in pharmaceutical research and drug discovery",
    },
    {
      icon: Users,
      title: "Global Networking",
      description: "Connect with 5000+ professionals from 50+ countries",
    },
    {
      icon: Globe,
      title: "International Scope",
      description:
        "Insights into global pharmaceutical markets and regulations",
    },
    {
      icon: Award,
      title: "Excellence Awards",
      description:
        "Recognizing outstanding contributions to pharmaceutical sciences",
    },
    {
      icon: TrendingUp,
      title: "Market Insights",
      description: "Understanding emerging trends and future opportunities",
    },
    {
      icon: Heart,
      title: "Patient Focus",
      description: "Emphasizing patient-centric approaches in healthcare",
    },
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About the
            <span className="block text-pharmaceutical-600">
              74th Indian Pharmaceutical Congress
            </span>
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Join us for the 74th edition focusing on "AI & Technology in Pharma:
            Educate, Innovate, Empower" - exploring how artificial intelligence
            and cutting-edge technology are revolutionizing pharmaceutical
            sciences and healthcare delivery.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-gray-900">
              A Legacy of Excellence in Pharmaceutical Sciences
            </h3>
            <div className="space-y-4 text-gray-600">
              <p className="text-lg leading-relaxed">
                For over seven decades, the Indian Pharmaceutical Congress has
                been at the forefront of pharmaceutical advancement in India.
                The 74th edition continues this tradition of excellence,
                bringing together the brightest minds in pharmaceutical
                research, industry leadership, and healthcare innovation.
              </p>
              <p className="text-lg leading-relaxed">
                This year's theme,{" "}
                <strong className="text-pharmaceutical-600">
                  "AI & Technology in Pharma: Educate, Innovate, Empower,"
                </strong>{" "}
                reflects our commitment to exploring how artificial intelligence
                and emerging technologies are transforming pharmaceutical
                research, development, and patient care.
              </p>
              <p className="text-lg leading-relaxed">
                Join us as we explore cutting-edge research, discuss regulatory
                developments, and foster collaborations that will shape the
                pharmaceutical landscape for generations to come.
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-pharmaceutical-500 to-primary-600 rounded-2xl p-8 text-white">
              <h4 className="text-2xl font-bold mb-6">Conference Highlights</h4>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                    <span className="text-sm font-bold">3</span>
                  </div>
                  <span>Days of Intensive Learning</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                    <span className="text-sm font-bold">100+</span>
                  </div>
                  <span>Scientific Sessions</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                    <span className="text-sm font-bold">200+</span>
                  </div>
                  <span>Distinguished Speakers</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                    <span className="text-sm font-bold">15+</span>
                  </div>
                  <span>Specialized Workshops</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                    <span className="text-sm font-bold">500+</span>
                  </div>
                  <span>Poster Presentations</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Key Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {highlights.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 hover-lift"
            >
              <div className="w-12 h-12 bg-pharmaceutical-100 rounded-lg flex items-center justify-center mb-4">
                <item.icon className="w-6 h-6 text-pharmaceutical-600" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">
                {item.title}
              </h4>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl p-8 shadow-lg inline-block">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to be Part of This Historic Event?
            </h3>
            <p className="text-gray-600 mb-6">
              Secure your spot at the 74th IPC and join the conversation that's
              shaping the future of healthcare.
            </p>
            <a
              href="#registration"
              className="bg-pharmaceutical-600 hover:bg-pharmaceutical-700 text-white px-8 py-3 rounded-full font-bold transition-colors inline-block"
            >
              Register Today
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
