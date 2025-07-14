import { Metadata } from "next";
import {
  Crown,
  Star,
  Award,
  Users,
  Building,
  Handshake,
  CheckCircle,
  Gift,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Sponsorship",
  description:
    "Partner with the 74th Indian Pharmaceutical Congress 2025 and showcase your brand to leading pharmaceutical professionals and researchers worldwide.",
};

const sponsorshipTiers = [
  {
    tier: "Platinum",
    price: "₹25,00,000",
    icon: Crown,
    color: "from-purple-500 to-indigo-600",
    features: [
      "Prime exhibition space (6m x 6m)",
      "Logo on all conference materials",
      "4 complimentary registrations",
      "Sponsored keynote session (30 mins)",
      "Company profile in conference app",
      "Premium branding in main auditorium",
      "VIP networking dinner access",
      "Dedicated product showcase time",
      "Press release distribution",
      "Post-event attendee database",
    ],
    benefits: [
      "Maximum brand visibility",
      "Direct access to decision makers",
      "Thought leadership platform",
      "Premium networking opportunities",
    ],
  },
  {
    tier: "Gold",
    price: "₹15,00,000",
    icon: Star,
    color: "from-yellow-500 to-orange-600",
    features: [
      "Premium exhibition space (4m x 4m)",
      "Logo on registration materials",
      "3 complimentary registrations",
      "Sponsored workshop session (60 mins)",
      "Company listing in conference app",
      "Branding in exhibition hall",
      "Welcome reception access",
      "Product demonstration slot",
      "Social media mentions",
      "Conference proceedings inclusion",
    ],
    benefits: [
      "Significant brand exposure",
      "Industry networking",
      "Educational platform",
      "Lead generation opportunities",
    ],
  },
  {
    tier: "Silver",
    price: "₹8,00,000",
    icon: Award,
    color: "from-gray-400 to-gray-600",
    features: [
      "Standard exhibition space (3m x 3m)",
      "Logo on conference website",
      "2 complimentary registrations",
      "Sponsored coffee break",
      "Company mention in app",
      "Exhibition hall branding",
      "Networking session access",
      "Literature distribution",
      "Email signature inclusion",
      "Certificate of participation",
    ],
    benefits: [
      "Targeted brand awareness",
      "Professional networking",
      "Cost-effective presence",
      "Industry recognition",
    ],
  },
];

const sponsorshipOpportunities = [
  {
    opportunity: "Session Sponsorship",
    price: "₹3,00,000",
    description: "Sponsor a scientific session and gain speaking opportunity",
    icon: Users,
    benefits: [
      "Company representative as session chair",
      "10-minute presentation slot",
      "Session branding",
      "1 complimentary registration",
    ],
  },
  {
    opportunity: "Workshop Sponsorship",
    price: "₹5,00,000",
    description: "Host a hands-on workshop for conference attendees",
    icon: Building,
    benefits: [
      "Full workshop branding",
      "Content development support",
      "Expert speaker provision",
      "2 complimentary registrations",
    ],
  },
  {
    opportunity: "Networking Event",
    price: "₹4,00,000",
    description: "Sponsor welcome reception or gala dinner",
    icon: Handshake,
    benefits: [
      "Event naming rights",
      "Welcome speech opportunity",
      "Premium branding",
      "Exclusive networking access",
    ],
  },
  {
    opportunity: "Conference Materials",
    price: "₹2,00,000",
    description: "Sponsor conference bags, notebooks, or USB drives",
    icon: Gift,
    benefits: [
      "Logo on all materials",
      "Brand recall value",
      "Practical utility",
      "Sustainable brand presence",
    ],
  },
];

const previousSponsors = [
  { name: "Biocon", category: "Platinum", year: "2023" },
  { name: "Dr. Reddy's Laboratories", category: "Gold", year: "2023" },
  { name: "Cipla", category: "Gold", year: "2023" },
  { name: "Lupin", category: "Silver", year: "2023" },
  { name: "Aurobindo Pharma", category: "Silver", year: "2023" },
  { name: "Sun Pharma", category: "Platinum", year: "2022" },
  { name: "Cadila Healthcare", category: "Gold", year: "2022" },
  { name: "Glenmark", category: "Silver", year: "2022" },
];

const whySponsor = [
  {
    title: "Industry Leadership",
    description:
      "Connect with 2000+ pharmaceutical professionals, researchers, and decision-makers",
    icon: Users,
  },
  {
    title: "Brand Visibility",
    description:
      "Showcase your products and services to a highly targeted audience",
    icon: Star,
  },
  {
    title: "Thought Leadership",
    description:
      "Position your company as an innovation leader in the pharmaceutical industry",
    icon: Award,
  },
  {
    title: "Global Reach",
    description:
      "Access international delegates and expand your global network",
    icon: Building,
  },
];

export default function SponsorshipPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pharmaceutical-50 to-primary-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-pharmaceutical-600 to-primary-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Partner with Excellence
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-pharmaceutical-100">
              Sponsor the 74th Indian Pharmaceutical Congress 2025
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm md:text-base">
              <div className="flex items-center gap-2">
                <Users className="h-5 w-5" />
                <span>2000+ Industry Professionals</span>
              </div>
              <div className="flex items-center gap-2">
                <Building className="h-5 w-5" />
                <span>50+ Countries Represented</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="h-5 w-5" />
                <span>Premium Brand Exposure</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Sponsor */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-6">
              Why Sponsor IPC 2025?
            </h2>
            <p className="text-lg text-secondary-600 max-w-3xl mx-auto">
              Position your brand at the forefront of pharmaceutical innovation
              and connect with industry leaders, researchers, and
              decision-makers from around the world.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whySponsor.map((reason, index) => {
              const IconComponent = reason.icon;
              return (
                <div
                  key={index}
                  className="text-center p-6 bg-white rounded-xl shadow-lg border border-pharmaceutical-100"
                >
                  <IconComponent className="h-12 w-12 text-pharmaceutical-600 mx-auto mb-4" />
                  <h3 className="text-lg font-bold text-secondary-900 mb-3">
                    {reason.title}
                  </h3>
                  <p className="text-secondary-600 text-sm">
                    {reason.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Sponsorship Tiers */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-6">
              Sponsorship Packages
            </h2>
            <p className="text-lg text-secondary-600">
              Choose the sponsorship level that best fits your marketing
              objectives
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {sponsorshipTiers.map((tier, index) => {
              const IconComponent = tier.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl shadow-xl border border-pharmaceutical-100 overflow-hidden"
                >
                  <div
                    className={`bg-gradient-to-r ${tier.color} text-white p-8 text-center`}
                  >
                    <IconComponent className="h-16 w-16 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold mb-2">{tier.tier}</h3>
                    <div className="text-3xl font-bold">{tier.price}</div>
                  </div>

                  <div className="p-8">
                    <h4 className="font-bold text-secondary-900 mb-4">
                      Package Includes:
                    </h4>
                    <ul className="space-y-3 mb-8">
                      {tier.features.map((feature, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-3 text-sm"
                        >
                          <CheckCircle className="h-4 w-4 text-primary-600 flex-shrink-0 mt-0.5" />
                          <span className="text-secondary-600">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <h4 className="font-bold text-secondary-900 mb-4">
                      Key Benefits:
                    </h4>
                    <ul className="space-y-2 mb-8">
                      {tier.benefits.map((benefit, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-3 text-sm"
                        >
                          <Star className="h-4 w-4 text-pharmaceutical-600 flex-shrink-0 mt-0.5" />
                          <span className="text-secondary-600">{benefit}</span>
                        </li>
                      ))}
                    </ul>

                    <button className="w-full bg-pharmaceutical-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-pharmaceutical-700 transition-colors">
                      Select {tier.tier}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Additional Opportunities */}
      <section className="py-20 bg-gradient-to-r from-pharmaceutical-50 to-primary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-6">
              Additional Sponsorship Opportunities
            </h2>
            <p className="text-lg text-secondary-600">
              Customize your sponsorship with targeted opportunities
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {sponsorshipOpportunities.map((opportunity, index) => {
              const IconComponent = opportunity.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow-lg p-8 border border-pharmaceutical-100"
                >
                  <div className="flex items-start gap-4 mb-6">
                    <IconComponent className="h-12 w-12 text-pharmaceutical-600 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-bold text-secondary-900 mb-2">
                        {opportunity.opportunity}
                      </h3>
                      <p className="text-secondary-600 mb-3">
                        {opportunity.description}
                      </p>
                      <div className="text-2xl font-bold text-pharmaceutical-600">
                        {opportunity.price}
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-secondary-900 mb-3">
                      Benefits Include:
                    </h4>
                    <ul className="space-y-2">
                      {opportunity.benefits.map((benefit, idx) => (
                        <li
                          key={idx}
                          className="flex items-center gap-2 text-sm text-secondary-600"
                        >
                          <CheckCircle className="h-4 w-4 text-primary-600 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <button className="w-full mt-6 bg-primary-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-primary-700 transition-colors">
                    Learn More
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Previous Sponsors */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-6">
              Our Valued Partners
            </h2>
            <p className="text-lg text-secondary-600">
              Join the prestigious list of companies that have partnered with
              IPC
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {previousSponsors.map((sponsor, index) => (
              <div
                key={index}
                className="bg-pharmaceutical-50 rounded-lg p-6 text-center border border-pharmaceutical-100"
              >
                <h3 className="font-bold text-secondary-900 mb-2">
                  {sponsor.name}
                </h3>
                <div className="text-sm text-secondary-600 mb-1">
                  {sponsor.category} Sponsor
                </div>
                <div className="text-xs text-pharmaceutical-600">
                  {sponsor.year}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sponsorship Process */}
      <section className="py-20 bg-secondary-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              How to Become a Sponsor
            </h2>
            <p className="text-xl text-secondary-300">
              Simple steps to partner with IPC 2025
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-pharmaceutical-600 text-white rounded-full flex items-center justify-center font-bold text-lg mb-4 mx-auto">
                1
              </div>
              <h3 className="font-bold text-lg mb-2">Choose Package</h3>
              <p className="text-secondary-300 text-sm">
                Select the sponsorship tier that aligns with your goals
              </p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-pharmaceutical-600 text-white rounded-full flex items-center justify-center font-bold text-lg mb-4 mx-auto">
                2
              </div>
              <h3 className="font-bold text-lg mb-2">Submit Application</h3>
              <p className="text-secondary-300 text-sm">
                Complete the sponsorship application form
              </p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-pharmaceutical-600 text-white rounded-full flex items-center justify-center font-bold text-lg mb-4 mx-auto">
                3
              </div>
              <h3 className="font-bold text-lg mb-2">Confirm Agreement</h3>
              <p className="text-secondary-300 text-sm">
                Review and sign the sponsorship agreement
              </p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-pharmaceutical-600 text-white rounded-full flex items-center justify-center font-bold text-lg mb-4 mx-auto">
                4
              </div>
              <h3 className="font-bold text-lg mb-2">Activate Benefits</h3>
              <p className="text-secondary-300 text-sm">
                Begin enjoying your sponsorship benefits immediately
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <button className="bg-pharmaceutical-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-pharmaceutical-700 transition-colors">
              Download Sponsorship Brochure
            </button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gradient-to-r from-pharmaceutical-600 to-primary-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Partner with Us?
          </h2>
          <p className="text-xl text-pharmaceutical-100 mb-8">
            Contact our sponsorship team to discuss custom packages
          </p>
          <div className="grid md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div>
              <h3 className="font-semibold mb-2">Sponsorship Director</h3>
              <p className="text-pharmaceutical-100">Dr. Priya Sharma</p>
              <p className="text-pharmaceutical-200 text-sm">
                sponsorship@74ipc2025.org
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Phone</h3>
              <p className="text-pharmaceutical-100">+91-80-2345-6789</p>
              <p className="text-pharmaceutical-200 text-sm">
                Mon-Fri, 9 AM - 6 PM IST
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Partnership Team</h3>
              <p className="text-pharmaceutical-100">
                partnerships@74ipc2025.org
              </p>
              <p className="text-pharmaceutical-200 text-sm">
                Custom solutions available
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
