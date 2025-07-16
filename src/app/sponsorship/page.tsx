"use client";

import { useState } from "react";
import { Metadata } from "next";
import {
  Crown,
  Star,
  Award,
  Users,
  Building,
  CheckCircle,
  Gift,
  Utensils,
  MapPin,
  Briefcase,
  GraduationCap,
  FileText,
  Mic,
} from "lucide-react";
import SponsorshipFormDialog from "@/components/SponsorshipFormDialog";

// Metadata moved to layout or parent component
// export const metadata: Metadata = {
//   title: "Sponsorship",
//   description:
//     "Partner with the 74th Indian Pharmaceutical Congress 2025 and showcase your brand to 12000+ pharmaceutical professionals and researchers worldwide. Multiple sponsorship categories available from ₹40,000 to ₹50,00,000.",
// };

const majorEventSponsorship = [
  {
    tier: "Main Event Sponsor",
    price: "₹50,00,000",
    icon: Crown,
    color: "from-purple-600 to-indigo-700",
    features: [
      "10 Complementary Registrations",
      "03 Executive Accommodations",
      "Branding with IPC Logo",
      "Branding at Venue",
      "Display at Main Inaugural Hall",
      "Branding at all display and advertisement boards",
      "One-page colour advertisement in Souvenir",
    ],
    benefits: [
      "Maximum brand visibility",
      "Premier positioning",
      "Thought leadership platform",
      "Premium networking opportunities",
    ],
  },
  {
    tier: "Platinum Sponsor",
    price: "₹35,00,000",
    icon: Star,
    color: "from-pink-400 to-pink-600",
    features: [
      "10 Complementary Registrations",
      "02 Executive Accommodations",
      "Branding at the Venue",
      "Branding at Main Entrance",
      "Display at Main Inaugural Hall",
      "One-page colour advertisement in Souvenir",
    ],
    benefits: [
      "Significant brand exposure",
      "Prime positioning",
      "Industry networking",
      "Lead generation opportunities",
    ],
  },
  {
    tier: "Gold Sponsor",
    price: "₹25,00,000",
    icon: Award,
    color: "from-yellow-500 to-orange-600",
    features: [
      "07 Complementary Registrations",
      "02 Executive Accommodations",
      "Branding at the Venue",
      "One-page colour advertisement in Souvenir",
    ],
    benefits: [
      "Strong brand presence",
      "Professional networking",
      "Industry recognition",
      "Marketing value",
    ],
  },
  {
    tier: "Silver Sponsor",
    price: "₹15,00,000",
    icon: Building,
    color: "from-gray-400 to-gray-600",
    features: [
      "05 Complementary Registrations",
      "02 Executive Accommodations",
      "Branding at the Venue",
      "One-page colour advertisement in Souvenir",
    ],
    benefits: [
      "Targeted brand awareness",
      "Cost-effective presence",
      "Industry participation",
      "Marketing opportunity",
    ],
  },
];

const materialSponsorship = [
  {
    name: "Kit Bag (For 12000 Delegates)",
    price: "₹25,00,000 Each (4 Sponsors)",
    description: "3000 kits per sponsor",
    features: [
      "05 Complementary Registrations",
      "02 Executive Accommodations",
      "Branding with IPC Logo",
      "Branding at Venue",
      "Display at Main Inaugural Hall",
      "Branding at Main Entrance",
      "One-page colour advertisement in Souvenir",
    ],
  },
  {
    name: "Executive Kit Bags (1000 Nos)",
    price: "₹20,00,000",
    description: "For all Guests and Executives",
    features: [
      "05 Complementary Registrations",
      "01 Executive Accommodations",
      "Branding at the Venue",
      "Branding at Executive Kit Bag",
      "Display at Main Inaugural Hall",
      "One-page colour advertisement in Souvenir",
    ],
  },
  {
    name: "Delegates ID-Cards (12000 Nos)",
    price: "₹5,00,000",
    description: "Branded ID cards for all delegates",
    features: [
      "03 Complementary Registrations",
      "01 Executive Accommodations",
      "Branding at the Venue",
      "Branding at Registration Counter",
      "One-page colour advertisement in Souvenir",
    ],
  },
  {
    name: "Writing Pads (12000 Nos)",
    price: "₹4,00,000",
    description: "Branded writing pads",
    features: [
      "02 Complementary Registrations",
      "Branding on every writing pad along with IPC Logo",
      "Branding at the Venue",
      "One-page colour advertisement in Souvenir",
    ],
  },
  {
    name: "Ball Pen with Logo (12000 Nos)",
    price: "₹5,00,000",
    description: "Branded pens for all delegates",
    features: [
      "02 Complementary Registrations",
      "Branding on every pen along with IPC Logo",
      "Branding at the Venue",
      "One-page colour advertisement in Souvenir",
    ],
  },
  {
    name: "Gift Samples and Kit Bag Inserts (10000 Nos)",
    price: "₹3,00,000",
    description: "Product samples and inserts",
    features: [
      "02 Complementary Registrations",
      "Branding at the Venue",
      "Display at Main Inaugural Hall",
    ],
  },
  {
    name: "Volunteers Uniform (500 Nos)",
    price: "₹5,00,000",
    description: "T-Shirts & Caps for volunteers",
    features: [
      "02 Complementary Registrations",
      "Branding on every T-Shirt & Cap",
      "Branding at the Venue",
      "Display at Main Inaugural Hall",
      "Half Page Colour Advertisement in Souvenir",
    ],
  },
];

const venueSponsorship = [
  {
    name: "VVIP Lounge",
    price: "₹7,00,000",
    features: [
      "03 Complementary Registrations",
      "01 Executive Accommodations",
      "Dedicated space in VVIP Lounge at the Venue",
      "Branding at VVIP Lounge with IPC Logo",
      "Display at Main Inaugural Hall",
      "Half-page colour advertisement in Souvenir",
    ],
  },
  {
    name: "Registration Counters (5 Counters)",
    price: "₹10,00,000",
    features: [
      "03 Complementary Registrations",
      "01 Executive Accommodations",
      "Dedicated Branding at all IPC Registration subcounters",
      "Branding at Venue",
      "Display at Main Inaugural Hall",
      "Half-page colour advertisement in Souvenir",
    ],
  },
  {
    name: "IPC Selfie Points",
    price: "₹3,00,000",
    features: [
      "02 Complementary Registrations",
      "Dedicated Branding at individual IPC Selfie Point",
      "Branding at the Venue",
      "Display at Main Inaugural Hall",
    ],
  },
  {
    name: "Front Office",
    price: "₹7,00,000",
    features: [
      "03 Complementary Registrations",
      "01 Executive Accommodation",
      "Dedicated branding at Front Office",
      "Dedicated space at Front Office",
      "Display at Main Inaugural Hall",
      "Half-page colour advertisement in Souvenir",
    ],
  },
  {
    name: "Help Desk",
    price: "₹4,00,000",
    features: [
      "02 Complementary Registrations",
      "Dedicated branding at Help Desk",
      "Dedicated space at Help Desk",
      "Display at Main Inaugural Hall",
    ],
  },
  {
    name: "Gift Samples Layout and Directions Display",
    price: "₹3,00,000",
    features: [
      "01 Complementary Registrations",
      "Dedicated branding at Layout & Direction Display",
      "Display at Main Inaugural Hall",
    ],
  },
];

const foodCourtSponsorship = [
  {
    name: "Breakfast (12000 Nos)",
    price: "₹15,00,000",
    features: [
      "03 Complementary Registrations",
      "01 Executive Accommodations",
      "Dedicated Branding with IPC Logo at Food Court",
      "Branding at Venue",
      "Display at Main Inaugural Hall",
      "Full-page colour advertisement in Souvenir",
    ],
  },
  {
    name: "Lunch (12000 Nos)",
    price: "₹40,00,000",
    features: [
      "07 Complementary Registrations",
      "03 Executive Accommodations",
      "Dedicated Branding with IPC Logo at Food Court",
      "Branding at Venue",
      "Display at Main Inaugural Hall",
      "Full-page colour advertisement in Souvenir",
    ],
  },
  {
    name: "Dinner (12000 Nos)",
    price: "₹40,00,000",
    features: [
      "07 Complementary Registrations",
      "03 Executive Accommodations",
      "Dedicated Branding with IPC Logo at Food Court",
      "Branding at the Venue",
      "Display at Main Inaugural Hall",
      "Full-page colour advertisement in Souvenir",
    ],
  },
  {
    name: "Fellowship Dinner (500 Nos)",
    price: "₹10,00,000 Each (2 Dinners)",
    features: [
      "04 Complementary Registrations",
      "01 Executive Accommodations",
      "Dedicated Branding with IPC Logo at Food Court",
      "Branding at Venue",
      "Display at Main Inaugural Hall",
      "Full-page colour advertisement in Souvenir",
    ],
  },
  {
    name: "Refreshments (12000 Nos)",
    price: "₹10,00,000",
    features: [
      "04 Complementary Registrations",
      "01 Executive Accommodations",
      "Dedicated Branding with IPC Logo at Food Court",
      "Branding at Venue",
      "Display at Main Inaugural Hall",
      "Full-page colour advertisement in Souvenir",
    ],
  },
];

const otherSponsorship = [
  {
    name: "Entertainment (First Day)",
    price: "₹25,00,000",
    features: [
      "05 Complementary Registrations",
      "01 Executive Accommodations",
      "Branding with IPC Logo",
      "Branding at Venue",
      "Display at Main Inaugural Hall",
      "One-page colour advertisement in Souvenir",
    ],
  },
  {
    name: "Entertainment (Second Day)",
    price: "₹15,00,000",
    features: [
      "04 Complementary Registrations",
      "01 Executive Accommodations",
      "Branding at the Venue",
      "Display at Main Inaugural Hall",
      "One-page colour advertisement in Souvenir",
    ],
  },
  {
    name: "Entertainment (Live Entertainment)",
    price: "₹5,00,000",
    features: [
      "02 Complementary Registrations",
      "01 Executive Accommodations",
      "Branding at the Venue",
      "Display at Main Inaugural Hall",
      "One-page colour advertisement in Souvenir",
    ],
  },
  {
    name: "Mementoes (Various Categories)",
    price: "₹8,00,000",
    description:
      "Special: 10, Guest: 50, Sponsors: 100, Institutes: 100, LOC: 200, Speaker/Panelist: 80, Chairman: 50, Co-Chairman: 50, Poster Evaluator: 250, Others: 100",
    features: [
      "03 Complementary Registrations",
      "01 Executive Accommodations",
      "Branding with IPC Logo during Entertainment",
      "Branding at the Venue",
      "Branding at Main Inaugural Hall",
      "One-page colour advertisement in Souvenir",
    ],
  },
  {
    name: "Delegates Certificates (12000 Nos)",
    price: "₹8,00,000",
    features: [
      "03 Complementary Registrations",
      "01 Executive Accommodations",
      "Branding with IPC Logo during Entertainment",
      "Branding at Venue",
      "Branding at Main Inaugural Hall",
      "One-page colour advertisement in Souvenir",
    ],
  },
  {
    name: "Scientific & Committees Certificates (4000 Nos)",
    price: "₹5,00,000",
    features: [
      "02 Complementary Registrations",
      "Dedicated Branding at the back of every Certificate",
      "Branding at Venue",
      "Half-page colour advertisement in Souvenir",
    ],
  },
];

const scientificSponsorship = [
  {
    name: "Presidential Session",
    price: "₹5,00,000 Each",
    features: [
      "02 Complementary Registrations",
      "01 Executive Accommodations",
      "Branding with IPC Logo during the session",
      "Display at Main Inaugural Hall",
      "One-page colour advertisement in Souvenir",
    ],
  },
  {
    name: "Plenary Session",
    price: "₹3,00,000 Each",
    features: [
      "02 Complementary Registrations",
      "Branding with IPC Logo during the session",
      "Branding at the Venue",
      "Display at Main Inaugural Hall",
    ],
  },
  {
    name: "Scientific Sessions",
    price: "₹2,00,000 Each",
    features: [
      "02 Complementary Registrations",
      "Branding with IPC Logo during the session",
      "Branding at the Venue",
      "Display at Main Inaugural Hall",
    ],
  },
  {
    name: "Poster Presentation Area",
    price: "₹5,00,000",
    features: [
      "02 Complementary Registrations",
      "Branding with IPC Logo during the session",
      "Branding at the Venue",
      "Display at Main Inaugural Hall",
    ],
  },
];

const academicSponsorship = [
  {
    tier: "Main Academic Partner",
    price: "₹25,00,000",
    features: [
      "Entry for Pharma Academic Excellence Award Function",
      "Pharma Academic Leadership Excellence Award by Chief Guest",
      "One Premium Stall at Pharma Education Expo 2025",
      "One 20mins session at Education Expo",
      "02 Complementary Registrations",
      "Branding at Pharma Education Expo",
      "Display at Pharma Education Exhibition Hall",
      "One Page Colour advertisement in Souvenir",
      "Data of all registered delegates",
    ],
  },
  {
    tier: "Platinum Academic Partner",
    price: "₹15,00,000",
    features: [
      "Entry for Pharma Academic Excellence Award function",
      "Pharma Academic Excellence Award by Chief Guest",
      "One Corner Stall at Pharma Education Expo 2025",
      "One 15 min Session at Education Expo",
      "02 Complementary Registrations",
      "Branding at Pharma Education Expo",
      "Display at Pharma Education Exhibition Hall",
      "One-page colour advertisement in Souvenir",
      "Data of all registered delegates",
    ],
  },
  {
    tier: "Gold Academic Partner",
    price: "₹10,00,000",
    features: [
      "Entry for Pharma Academic Excellence Award function",
      "Pharma Academic Excellence Award by Chief Guest",
      "One Exhibition Stall at Pharma Education Expo 2025",
      "One 10 min Session at Education Expo",
      "02 Complementary Registrations",
      "Display at Pharma Education Exhibition Hall",
      "One-page colour advertisement in Souvenir",
      "Data of all registered delegates",
    ],
  },
  {
    tier: "Standard Academic Partner",
    price: "₹5,00,000",
    features: [
      "Entry for Pharma Academic Excellence Award function",
      "One Exhibition Stall at Pharma Education Expo 2025",
      "02 Complementary Registrations",
      "Display at Pharma Education Exhibition Hall",
      "Data of all registered delegates",
    ],
  },
];

const souvenirSponsorship = [
  { category: "Back Cover Page Colour", quantity: 1, price: "₹5,00,000" },
  { category: "Front Inner Cover Page", quantity: 1, price: "₹3,50,000" },
  { category: "Back Page Inner Side", quantity: 1, price: "₹3,00,000" },
  { category: "Full Page Colour", quantity: 20, price: "₹2,00,000" },
  { category: "Half Page Colour", quantity: 40, price: "₹1,00,000" },
  { category: "Quarter Page Colour", quantity: 40, price: "₹50,000" },
  { category: "Full Page B/W", quantity: 40, price: "₹70,000" },
  { category: "Half Page B/W", quantity: 80, price: "₹40,000" },
];

const sponsorshipOpportunities = [
  {
    opportunity: "Material Sponsorship",
    price: "₹3,00,000 - ₹25,00,000",
    description:
      "Sponsor conference materials like kit bags, ID cards, writing pads",
    icon: Gift,
    benefits: [
      "Brand visibility on all materials",
      "Complementary registrations",
      "Venue branding",
      "Advertisement in souvenir",
    ],
  },
  {
    opportunity: "Venue Sponsorship",
    price: "₹3,00,000 - ₹10,00,000",
    description:
      "Sponsor key venue areas like VVIP lounge, registration counters",
    icon: MapPin,
    benefits: [
      "Dedicated space branding",
      "High visibility positioning",
      "Executive accommodations",
      "Advertisement opportunities",
    ],
  },
  {
    opportunity: "Food Court Sponsorship",
    price: "₹10,00,000 - ₹40,00,000",
    description:
      "Sponsor meals including breakfast, lunch, dinner for 12000 delegates",
    icon: Utensils,
    benefits: [
      "Full food court branding",
      "Multiple registrations included",
      "Premium advertisement space",
      "High delegate interaction",
    ],
  },
  {
    opportunity: "Scientific Sessions",
    price: "₹2,00,000 - ₹5,00,000",
    description: "Sponsor presidential, plenary, or scientific sessions",
    icon: Mic,
    benefits: [
      "Session branding with IPC logo",
      "Venue branding",
      "Main hall display",
      "Advertisement in souvenir",
    ],
  },
  {
    opportunity: "Academic Partnership",
    price: "₹5,00,000 - ₹25,00,000",
    description: "Partner with Pharma Education Expo for academic institutions",
    icon: GraduationCap,
    benefits: [
      "Dedicated exhibition stall",
      "Academic excellence awards",
      "Educational sessions",
      "Delegate database access",
    ],
  },
  {
    opportunity: "Souvenir Advertising",
    price: "₹40,000 - ₹5,00,000",
    description: "Advertise in the conference souvenir (11000 copies)",
    icon: FileText,
    benefits: [
      "Various page size options",
      "Colour and B/W options",
      "Premium positioning available",
      "Lasting brand recall",
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
      "Connect with 12000+ pharmaceutical professionals, researchers, and decision-makers",
    icon: Users,
  },
  {
    title: "Brand Visibility",
    description:
      "Showcase your products and services to a highly targeted audience at multiple touchpoints",
    icon: Star,
  },
  {
    title: "Thought Leadership",
    description:
      "Position your company as an innovation leader through sponsored sessions and exhibitions",
    icon: Award,
  },
  {
    title: "Global Reach",
    description:
      "Access international delegates and expand your pharmaceutical network worldwide",
    icon: Building,
  },
];

export default function SponsorshipPage() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [selectedSponsorship, setSelectedSponsorship] = useState({
    type: "",
    price: "",
    category: "",
  });

  const openDialog = (type: string, price: string, category: string) => {
    setSelectedSponsorship({ type, price, category });
    setIsDialogOpen(true);
  };

  const closeDialog = () => {
    setIsDialogOpen(false);
    setSelectedSponsorship({ type: "", price: "", category: "" });
  };
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
                <span>12000+ Delegates Expected</span>
              </div>
              <div className="flex items-center gap-2">
                <Building className="h-5 w-5" />
                <span>Global Pharmaceutical Community</span>
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
              and connect with 12000+ industry professionals, researchers, and
              decision-makers from the global pharmaceutical community.
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

      {/* Major Event Sponsorship Tiers */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-6">
              Major Event Sponsorship
            </h2>
            <p className="text-lg text-secondary-600">
              All rates inclusive of GST - Choose the sponsorship level that
              best fits your marketing objectives
            </p>
          </div>

          <div className="grid lg:grid-cols-2 xl:grid-cols-4 gap-8">
            {majorEventSponsorship.map((tier, index) => {
              const IconComponent = tier.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl shadow-xl border border-pharmaceutical-100 overflow-hidden"
                >
                  <div
                    className={`bg-gradient-to-r ${tier.color} text-white p-6 text-center`}
                  >
                    <IconComponent className="h-12 w-12 mx-auto mb-3" />
                    <h3 className="text-lg font-bold mb-2">{tier.tier}</h3>
                    <div className="text-2xl font-bold">{tier.price}</div>
                  </div>

                  <div className="p-6">
                    <h4 className="font-bold text-secondary-900 mb-4">
                      Package Includes:
                    </h4>
                    <ul className="space-y-2 mb-6">
                      {tier.features.map((feature, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-2 text-sm"
                        >
                          <CheckCircle className="h-3 w-3 text-primary-600 flex-shrink-0 mt-1" />
                          <span className="text-secondary-600">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <h4 className="font-bold text-secondary-900 mb-3">
                      Key Benefits:
                    </h4>
                    <ul className="space-y-1 mb-6">
                      {tier.benefits.map((benefit, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-2 text-sm"
                        >
                          <Star className="h-3 w-3 text-pharmaceutical-600 flex-shrink-0 mt-1" />
                          <span className="text-secondary-600">{benefit}</span>
                        </li>
                      ))}
                    </ul>

                    <button
                      onClick={() =>
                        openDialog(
                          tier.tier,
                          tier.price,
                          "Major Event Sponsorship"
                        )
                      }
                      className="w-full bg-pharmaceutical-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-pharmaceutical-700 transition-colors text-sm"
                    >
                      Book {tier.tier}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Material Sponsorship */}
      <section className="py-20 bg-gradient-to-r from-pharmaceutical-50 to-primary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-6">
              Material Sponsorship
            </h2>
            <p className="text-lg text-secondary-600">
              All rates inclusive of GST - Sponsor essential conference
              materials
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {materialSponsorship.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg p-6 border border-pharmaceutical-100"
              >
                <div className="flex items-start gap-4 mb-4">
                  <Gift className="h-10 w-10 text-pharmaceutical-600 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-bold text-secondary-900 mb-1">
                      {item.name}
                    </h3>
                    <p className="text-secondary-600 text-sm mb-2">
                      {item.description}
                    </p>
                    <div className="text-xl font-bold text-pharmaceutical-600">
                      {item.price}
                    </div>
                  </div>
                </div>

                <ul className="space-y-2">
                  {item.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-2 text-sm text-secondary-600"
                    >
                      <CheckCircle className="h-3 w-3 text-primary-600 flex-shrink-0 mt-1" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() =>
                    openDialog(item.name, item.price, "Material Sponsorship")
                  }
                  className="w-full mt-4 bg-primary-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-primary-700 transition-colors text-sm"
                >
                  Book Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Venue Sponsorship */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-6">
              Major Venue Sponsorship
            </h2>
            <p className="text-lg text-secondary-600">
              All rates inclusive of GST - Sponsor key venue locations
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {venueSponsorship.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg p-6 border border-pharmaceutical-100"
              >
                <div className="flex items-start gap-4 mb-4">
                  <MapPin className="h-10 w-10 text-pharmaceutical-600 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-bold text-secondary-900 mb-2">
                      {item.name}
                    </h3>
                    <div className="text-xl font-bold text-pharmaceutical-600">
                      {item.price}
                    </div>
                  </div>
                </div>

                <ul className="space-y-2">
                  {item.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-2 text-sm text-secondary-600"
                    >
                      <CheckCircle className="h-3 w-3 text-primary-600 flex-shrink-0 mt-1" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() =>
                    openDialog(item.name, item.price, "Venue Sponsorship")
                  }
                  className="w-full mt-4 bg-primary-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-primary-700 transition-colors text-sm"
                >
                  Book Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Food Court Sponsorship */}
      <section className="py-20 bg-gradient-to-r from-pharmaceutical-50 to-primary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-6">
              Food Court Sponsorship
            </h2>
            <p className="text-lg text-secondary-600">
              All rates inclusive of GST - Sponsor meals for 12000 delegates
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {foodCourtSponsorship.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg p-6 border border-pharmaceutical-100"
              >
                <div className="flex items-start gap-4 mb-4">
                  <Utensils className="h-10 w-10 text-pharmaceutical-600 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-bold text-secondary-900 mb-2">
                      {item.name}
                    </h3>
                    <div className="text-xl font-bold text-pharmaceutical-600">
                      {item.price}
                    </div>
                  </div>
                </div>

                <ul className="space-y-2">
                  {item.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-2 text-sm text-secondary-600"
                    >
                      <CheckCircle className="h-3 w-3 text-primary-600 flex-shrink-0 mt-1" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() =>
                    openDialog(item.name, item.price, "Food Court Sponsorship")
                  }
                  className="w-full mt-4 bg-primary-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-primary-700 transition-colors text-sm"
                >
                  Book Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Scientific Sponsorship */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-6">
              Scientific Sponsorship
            </h2>
            <p className="text-lg text-secondary-600">
              All rates inclusive of GST - Sponsor scientific sessions
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {scientificSponsorship.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg p-6 border border-pharmaceutical-100"
              >
                <div className="text-center mb-4">
                  <Mic className="h-10 w-10 text-pharmaceutical-600 mx-auto mb-3" />
                  <h3 className="text-lg font-bold text-secondary-900 mb-2">
                    {item.name}
                  </h3>
                  <div className="text-xl font-bold text-pharmaceutical-600">
                    {item.price}
                  </div>
                </div>

                <ul className="space-y-2">
                  {item.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-2 text-sm text-secondary-600"
                    >
                      <CheckCircle className="h-3 w-3 text-primary-600 flex-shrink-0 mt-1" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() =>
                    openDialog(item.name, item.price, "Scientific Sponsorship")
                  }
                  className="w-full mt-4 bg-primary-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-primary-700 transition-colors text-sm"
                >
                  Book Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Academic Sponsorship */}
      <section className="py-20 bg-gradient-to-r from-pharmaceutical-50 to-primary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-6">
              Pharma Education Expo - Academic Sponsorship
            </h2>
            <p className="text-lg text-secondary-600">
              For the first time at IPC - Exclusively for Universities,
              Institutes and Academic Consultancies
            </p>
          </div>

          <div className="grid lg:grid-cols-2 xl:grid-cols-4 gap-6">
            {academicSponsorship.map((tier, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-xl border border-pharmaceutical-100 overflow-hidden"
              >
                <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-6 text-center">
                  <GraduationCap className="h-12 w-12 mx-auto mb-3" />
                  <h3 className="text-lg font-bold mb-2">{tier.tier}</h3>
                  <div className="text-2xl font-bold">{tier.price}</div>
                </div>

                <div className="p-6">
                  <ul className="space-y-2">
                    {tier.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm">
                        <CheckCircle className="h-3 w-3 text-primary-600 flex-shrink-0 mt-1" />
                        <span className="text-secondary-600">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <button
                    onClick={() =>
                      openDialog(tier.tier, tier.price, "Academic Sponsorship")
                    }
                    className="w-full mt-6 bg-pharmaceutical-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-pharmaceutical-700 transition-colors text-sm"
                  >
                    Book {tier.tier}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Other Sponsorship */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-6">
              Other Sponsorship Opportunities
            </h2>
            <p className="text-lg text-secondary-600">
              All rates inclusive of GST - Additional sponsorship categories
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherSponsorship.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg p-6 border border-pharmaceutical-100"
              >
                <div className="flex items-start gap-4 mb-4">
                  <Briefcase className="h-10 w-10 text-pharmaceutical-600 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-bold text-secondary-900 mb-1">
                      {item.name}
                    </h3>
                    {item.description && (
                      <p className="text-secondary-600 text-xs mb-2">
                        {item.description}
                      </p>
                    )}
                    <div className="text-xl font-bold text-pharmaceutical-600">
                      {item.price}
                    </div>
                  </div>
                </div>

                <ul className="space-y-2">
                  {item.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-2 text-sm text-secondary-600"
                    >
                      <CheckCircle className="h-3 w-3 text-primary-600 flex-shrink-0 mt-1" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() =>
                    openDialog(item.name, item.price, "Other Sponsorship")
                  }
                  className="w-full mt-4 bg-primary-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-primary-700 transition-colors text-sm"
                >
                  Book Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Souvenir Sponsorship */}
      <section className="py-20 bg-gradient-to-r from-pharmaceutical-50 to-primary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-6">
              Souvenir Sponsorship
            </h2>
            <p className="text-lg text-secondary-600">
              All rates inclusive of GST - 11,000 quantity souvenir advertising
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-xl shadow-lg border border-pharmaceutical-100">
              <thead className="bg-pharmaceutical-600 text-white">
                <tr>
                  <th className="px-6 py-4 text-left font-semibold">
                    Category
                  </th>
                  <th className="px-6 py-4 text-left font-semibold">
                    Quantity
                  </th>
                  <th className="px-6 py-4 text-left font-semibold">
                    Rate (INR)
                  </th>
                  <th className="px-6 py-4 text-left font-semibold">Action</th>
                </tr>
              </thead>
              <tbody>
                {souvenirSponsorship.map((item, index) => (
                  <tr
                    key={index}
                    className="border-t border-pharmaceutical-100"
                  >
                    <td className="px-6 py-4 text-secondary-900 font-medium">
                      {item.category}
                    </td>
                    <td className="px-6 py-4 text-secondary-600">
                      {item.quantity}
                    </td>
                    <td className="px-6 py-4 text-pharmaceutical-600 font-bold">
                      {item.price}
                    </td>
                    <td className="px-6 py-4">
                      <button
                        onClick={() =>
                          openDialog(
                            item.category,
                            item.price,
                            "Souvenir Advertisement"
                          )
                        }
                        className="bg-primary-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-primary-700 transition-colors text-sm"
                      >
                        Book Now
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
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

                  <button
                    onClick={() =>
                      openDialog(
                        opportunity.opportunity,
                        opportunity.price,
                        "Additional Opportunity"
                      )
                    }
                    className="w-full mt-6 bg-primary-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-primary-700 transition-colors"
                  >
                    Book Now
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
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-pharmaceutical-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-pharmaceutical-700 transition-colors">
                Download Sponsorship Brochure
              </button>
              <a
                href="https://74ipc.com/sponsorship"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-pharmaceutical-600 border-2 border-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-pharmaceutical-50 transition-colors"
              >
                Visit Official Sponsorship Page
              </a>
            </div>
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
              <p className="text-pharmaceutical-100">
                IPC Organizing Committee
              </p>
              <p className="text-pharmaceutical-200 text-sm">
                sponsorship@74ipc2025.org
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Website</h3>
              <p className="text-pharmaceutical-100">www.74ipc.com</p>
              <p className="text-pharmaceutical-200 text-sm">
                Complete sponsorship details
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

      {/* Sponsorship Form Dialog */}
      <SponsorshipFormDialog
        isOpen={isDialogOpen}
        onClose={closeDialog}
        sponsorshipType={selectedSponsorship.type}
        sponsorshipPrice={selectedSponsorship.price}
        sponsorshipCategory={selectedSponsorship.category}
      />
    </div>
  );
}
