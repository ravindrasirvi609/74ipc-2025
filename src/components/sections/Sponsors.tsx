import { Award, Users, Handshake, Globe } from "lucide-react";

const Sponsors = () => {
  const sponsorTiers = [
    {
      tier: "Platinum Partners",
      description: "Our premier partners driving pharmaceutical innovation",
      sponsors: [
        {
          name: "Sun Pharmaceutical",
          logo: "/api/placeholder/200/100",
          website: "https://sunpharma.com",
        },
        {
          name: "Dr. Reddy's Laboratories",
          logo: "/api/placeholder/200/100",
          website: "https://drreddys.com",
        },
        {
          name: "Cipla Limited",
          logo: "/api/placeholder/200/100",
          website: "https://cipla.com",
        },
      ],
    },
    {
      tier: "Gold Sponsors",
      description: "Strategic partners supporting pharmaceutical excellence",
      sponsors: [
        {
          name: "Lupin Limited",
          logo: "/api/placeholder/180/90",
          website: "https://lupin.com",
        },
        {
          name: "Torrent Pharmaceuticals",
          logo: "/api/placeholder/180/90",
          website: "https://torrentpharma.com",
        },
        {
          name: "Glenmark Pharmaceuticals",
          logo: "/api/placeholder/180/90",
          website: "https://glenmarkpharma.com",
        },
        {
          name: "Biocon Limited",
          logo: "/api/placeholder/180/90",
          website: "https://biocon.com",
        },
        {
          name: "Aurobindo Pharma",
          logo: "/api/placeholder/180/90",
          website: "https://aurobindo.com",
        },
      ],
    },
    {
      tier: "Silver Supporters",
      description: "Valued partners contributing to our success",
      sponsors: [
        {
          name: "Cadila Healthcare",
          logo: "/api/placeholder/160/80",
          website: "https://zyduslife.com",
        },
        {
          name: "Divi's Laboratories",
          logo: "/api/placeholder/160/80",
          website: "https://divislabs.com",
        },
        {
          name: "Hetero Labs",
          logo: "/api/placeholder/160/80",
          website: "https://heterolabs.com",
        },
        {
          name: "Mankind Pharma",
          logo: "/api/placeholder/160/80",
          website: "https://mankindpharma.com",
        },
        {
          name: "Granules India",
          logo: "/api/placeholder/160/80",
          website: "https://granulesindia.com",
        },
        {
          name: "Natco Pharma",
          logo: "/api/placeholder/160/80",
          website: "https://natcopharma.com",
        },
        {
          name: "Strides Pharma",
          logo: "/api/placeholder/160/80",
          website: "https://strides.com",
        },
        {
          name: "Sanofi India",
          logo: "/api/placeholder/160/80",
          website: "https://sanofi.in",
        },
      ],
    },
    {
      tier: "Bronze Partners",
      description: "Supporting partners fostering industry growth",
      sponsors: [
        {
          name: "Novartis India",
          logo: "/api/placeholder/140/70",
          website: "https://novartis.in",
        },
        {
          name: "GSK India",
          logo: "/api/placeholder/140/70",
          website: "https://in.gsk.com",
        },
        {
          name: "Abbott India",
          logo: "/api/placeholder/140/70",
          website: "https://abbott.co.in",
        },
        {
          name: "Pfizer India",
          logo: "/api/placeholder/140/70",
          website: "https://pfizer.co.in",
        },
        {
          name: "Johnson & Johnson",
          logo: "/api/placeholder/140/70",
          website: "https://jnj.co.in",
        },
        {
          name: "Roche India",
          logo: "/api/placeholder/140/70",
          website: "https://roche.in",
        },
        {
          name: "AstraZeneca India",
          logo: "/api/placeholder/140/70",
          website: "https://astrazeneca.co.in",
        },
        {
          name: "Merck India",
          logo: "/api/placeholder/140/70",
          website: "https://merck.co.in",
        },
        {
          name: "Bayer India",
          logo: "/api/placeholder/140/70",
          website: "https://bayer.in",
        },
        {
          name: "Boehringer Ingelheim",
          logo: "/api/placeholder/140/70",
          website: "https://boehringer-ingelheim.in",
        },
      ],
    },
  ];

  const sponsorshipBenefits = [
    {
      icon: Users,
      title: "Global Exposure",
      description:
        "Reach 5000+ pharmaceutical professionals from 50+ countries",
    },
    {
      icon: Handshake,
      title: "Strategic Networking",
      description:
        "Connect with industry leaders, researchers, and decision makers",
    },
    {
      icon: Globe,
      title: "Brand Visibility",
      description: "Enhance brand presence through multiple marketing channels",
    },
    {
      icon: Award,
      title: "Thought Leadership",
      description: "Position your company as an industry thought leader",
    },
  ];

  const sponsorshipPackages = [
    {
      name: "Platinum Partnership",
      price: "₹50,00,000",
      benefits: [
        "Title sponsorship opportunity",
        "Prime exhibition space (100 sqm)",
        "Speaking slots in main sessions",
        "Logo on all conference materials",
        "VIP hospitality for 20 delegates",
        "Pre and post-event marketing support",
        "Exclusive networking reception hosting",
        "Year-round digital presence",
      ],
      color: "from-pharmaceutical-400 to-pharmaceutical-600",
    },
    {
      name: "Gold Sponsorship",
      price: "₹25,00,000",
      benefits: [
        "Session sponsorship opportunity",
        "Premium exhibition space (60 sqm)",
        "Workshop hosting opportunity",
        "Logo on conference app & website",
        "VIP hospitality for 12 delegates",
        "Marketing material distribution",
        "Social media promotions",
        "Post-event delegate contacts",
      ],
      color: "from-primary-300 to-primary-500",
    },
    {
      name: "Silver Support",
      price: "₹15,00,000",
      benefits: [
        "Coffee break sponsorship",
        "Standard exhibition space (36 sqm)",
        "Logo on conference materials",
        "VIP hospitality for 8 delegates",
        "Marketing brochure inclusion",
        "Website listing with link",
        "Conference bag insert",
        "Networking event invitation",
      ],
      color: "from-gray-300 to-gray-500",
    },
  ];

  return (
    <section id="sponsors" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our
            <span className="block text-pharmaceutical-600">
              Partners & Sponsors
            </span>
          </h2>
          <p className="text-xl text-gray-600">
            We are grateful to our sponsors and partners who make the 74th
            Indian Pharmaceutical Congress possible through their generous
            support.
          </p>
        </div>

        {/* Sponsor Tiers */}
        {sponsorTiers.map((tier, tierIndex) => (
          <div key={tierIndex} className="mb-16">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold text-gray-900 mb-3">
                {tier.tier}
              </h3>
              <p className="text-gray-600">{tier.description}</p>
            </div>

            <div
              className={`grid gap-8 ${
                tier.tier === "Platinum Partners"
                  ? "md:grid-cols-3"
                  : tier.tier === "Gold Sponsors"
                  ? "md:grid-cols-5"
                  : tier.tier === "Silver Supporters"
                  ? "md:grid-cols-4"
                  : "md:grid-cols-5"
              }`}
            >
              {tier.sponsors.map((sponsor, index) => (
                <div
                  key={index}
                  className="bg-gray-50 rounded-xl p-6 hover:bg-white hover:shadow-lg transition-all duration-300 hover-lift"
                >
                  <div
                    className={`h-20 bg-gray-200 rounded-lg mb-4 flex items-center justify-center ${
                      tier.tier === "Platinum Partners" ? "h-24" : "h-20"
                    }`}
                  >
                    {/* Placeholder for sponsor logo */}
                    <span className="text-gray-500 font-semibold text-center px-2">
                      {sponsor.name}
                    </span>
                  </div>
                  <a
                    href={sponsor.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-pharmaceutical-600 hover:text-pharmaceutical-700 text-sm font-medium"
                  >
                    Visit Website →
                  </a>
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* Sponsorship Benefits */}
        <div className="bg-gray-50 rounded-3xl p-8 md:p-12 mb-16">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Why Sponsor 74th IPC 2025?
          </h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {sponsorshipBenefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-pharmaceutical-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-8 h-8 text-pharmaceutical-600" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">
                  {benefit.title}
                </h4>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { number: "5000+", label: "Attendees" },
                { number: "50+", label: "Countries" },
                { number: "100M+", label: "Media Reach" },
                { number: "200+", label: "Media Coverage" },
              ].map((stat, index) => (
                <div key={index}>
                  <div className="text-3xl font-bold text-pharmaceutical-600 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Sponsorship Packages */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Sponsorship Opportunities
          </h3>

          <div className="grid md:grid-cols-3 gap-8">
            {sponsorshipPackages.map((pkg, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className={`h-4 bg-gradient-to-r ${pkg.color}`}></div>
                <div className="p-8">
                  <h4 className="text-2xl font-bold text-gray-900 mb-2">
                    {pkg.name}
                  </h4>
                  <div className="text-3xl font-bold text-pharmaceutical-600 mb-6">
                    {pkg.price}
                  </div>

                  <ul className="space-y-3">
                    {pkg.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-start">
                        <div className="w-2 h-2 bg-pharmaceutical-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-gray-600">{benefit}</span>
                      </li>
                    ))}
                  </ul>

                  <button className="w-full mt-8 bg-pharmaceutical-600 hover:bg-pharmaceutical-700 text-white py-3 rounded-full font-bold transition-colors">
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Become a Sponsor CTA */}
        <div className="bg-gradient-to-br from-pharmaceutical-500 to-primary-600 rounded-3xl p-8 md:p-12 text-white text-center">
          <Handshake className="w-16 h-16 mx-auto mb-6" />
          <h3 className="text-3xl font-bold mb-4">Partner With Us</h3>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join leading pharmaceutical companies in supporting the advancement
            of pharmaceutical sciences and connect with the industry's most
            influential professionals.
          </p>

          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 justify-center">
            <button className="bg-white text-pharmaceutical-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-colors">
              Download Sponsorship Brochure
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-pharmaceutical-600 transition-colors">
              Contact Partnership Team
            </button>
          </div>

          <div className="mt-8 text-white/80">
            <p>
              For partnership inquiries:{" "}
              <span className="font-semibold">partnerships@74ipc2025.org</span>
            </p>
            <p>
              Call us: <span className="font-semibold">+91 123 456 7890</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sponsors;
