import { Metadata } from "next";
import {
  MapPin,
  Clock,
  Camera,
  Star,
  Navigation,
  Coffee,
  TreePine,
  Building,
  Mountain,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Places to Visit",
  description:
    "Discover the best attractions and places to visit in Bangalore during your stay for the 74th Indian Pharmaceutical Congress 2025. Explore the Garden City's top destinations.",
};

const topAttractions = [
  {
    name: "Lalbagh Botanical Garden",
    category: "Nature & Gardens",
    description:
      "240-acre botanical garden with rare plants, beautiful landscapes, and the famous Glass House.",
    distance: "12 km from venue",
    timing: "6:00 AM - 7:00 PM",
    entryFee: "₹30 per person",
    highlights: [
      "Glass House",
      "Rare plant species",
      "Rock formations",
      "Flower shows",
    ],
    rating: 4.5,
    icon: TreePine,
    image: "/api/placeholder/400/250",
  },
  {
    name: "Bangalore Palace",
    category: "Historical",
    description:
      "Tudor-style palace inspired by Windsor Castle with beautiful architecture and royal artifacts.",
    distance: "15 km from venue",
    timing: "10:00 AM - 5:30 PM",
    entryFee: "₹230 per person",
    highlights: [
      "Tudor architecture",
      "Royal collections",
      "Audio guide",
      "Photography",
    ],
    rating: 4.3,
    icon: Building,
    image: "/api/placeholder/400/250",
  },
  {
    name: "Cubbon Park",
    category: "Nature & Recreation",
    description:
      "Large public park in the heart of the city, perfect for morning walks and leisure activities.",
    distance: "14 km from venue",
    timing: "5:00 AM - 8:00 PM",
    entryFee: "Free",
    highlights: [
      "Walking trails",
      "Statues & monuments",
      "Children's play area",
      "Jogging track",
    ],
    rating: 4.2,
    icon: TreePine,
    image: "/api/placeholder/400/250",
  },
  {
    name: "ISKCON Temple Bangalore",
    category: "Religious & Cultural",
    description:
      "Beautiful temple complex with stunning architecture and spiritual ambiance.",
    distance: "18 km from venue",
    timing: "4:15 AM - 1:00 PM, 4:00 PM - 8:20 PM",
    entryFee: "Free",
    highlights: [
      "Temple architecture",
      "Cultural programs",
      "Vegetarian restaurant",
      "Gift shop",
    ],
    rating: 4.4,
    icon: Building,
    image: "/api/placeholder/400/250",
  },
  {
    name: "Nandi Hills",
    category: "Hill Station",
    description:
      "Popular hill station perfect for sunrise views and nature photography.",
    distance: "65 km from venue",
    timing: "6:00 AM - 10:00 PM",
    entryFee: "₹15 per person",
    highlights: [
      "Sunrise viewpoint",
      "Trekking trails",
      "Historical significance",
      "Photography",
    ],
    rating: 4.6,
    icon: Mountain,
    image: "/api/placeholder/400/250",
  },
  {
    name: "UB City Mall",
    category: "Shopping & Dining",
    description:
      "Luxury shopping mall with premium brands, fine dining, and entertainment options.",
    distance: "16 km from venue",
    timing: "10:00 AM - 11:00 PM",
    entryFee: "Free entry",
    highlights: [
      "Luxury shopping",
      "Fine dining",
      "Art galleries",
      "Rooftop restaurants",
    ],
    rating: 4.1,
    icon: Building,
    image: "/api/placeholder/400/250",
  },
];

const culturalExperiences = [
  {
    name: "Vidhana Soudha",
    description: "Iconic government building showcasing Dravidian architecture",
    timingNote: "External viewing only",
    category: "Architecture",
  },
  {
    name: "Bull Temple",
    description:
      "Ancient temple dedicated to Nandi with impressive stone sculpture",
    timingNote: "6:00 AM - 8:00 PM",
    category: "Religious",
  },
  {
    name: "Bangalore Fort",
    description: "Historic fort built by Kempe Gowda with interesting museums",
    timingNote: "8:00 AM - 5:30 PM",
    category: "Historical",
  },
  {
    name: "National Gallery of Modern Art",
    description: "Contemporary art gallery showcasing Indian modern art",
    timingNote: "10:00 AM - 5:00 PM",
    category: "Art & Culture",
  },
];

const diningExperiences = [
  {
    name: "MTR (Mavalli Tiffin Room)",
    cuisine: "South Indian",
    specialty: "Traditional breakfast & filter coffee",
    location: "Lalbagh Road",
    priceRange: "₹100-300",
    highlights: [
      "Authentic South Indian",
      "Heritage restaurant",
      "Famous dosas",
      "Filter coffee",
    ],
  },
  {
    name: "Vidyarthi Bhavan",
    cuisine: "South Indian",
    specialty: "Crispy dosas and traditional snacks",
    location: "Gandhi Bazaar",
    priceRange: "₹80-200",
    highlights: [
      "Crispy masala dosa",
      "Traditional ambiance",
      "Local favorite",
      "Affordable dining",
    ],
  },
  {
    name: "Koshy's Restaurant",
    cuisine: "Continental & Indian",
    specialty: "Old-world charm with diverse menu",
    location: "St. Mark's Road",
    priceRange: "₹300-800",
    highlights: [
      "Heritage restaurant",
      "Continental cuisine",
      "Historic ambiance",
      "Book lovers' spot",
    ],
  },
  {
    name: "Toit Brewpub",
    cuisine: "European & Pub Food",
    specialty: "Craft beer and wood-fired pizzas",
    location: "Indiranagar",
    priceRange: "₹800-1500",
    highlights: [
      "Craft beer",
      "Wood-fired pizza",
      "Live music",
      "Rooftop seating",
    ],
  },
];

const shoppingDestinations = [
  {
    name: "Commercial Street",
    description:
      "Bustling shopping street with clothing, accessories, and local handicrafts",
    specialty: "Fashion & Accessories",
    tips: ["Great for bargaining", "Local fashion items", "Street food nearby"],
  },
  {
    name: "Brigade Road",
    description:
      "Popular shopping and entertainment hub with malls and street shops",
    specialty: "Shopping & Entertainment",
    tips: [
      "Multiple shopping options",
      "Good restaurants",
      "Evening entertainment",
    ],
  },
  {
    name: "Chickpet Market",
    description: "Traditional market for silk sarees, jewelry, and ethnic wear",
    specialty: "Traditional Clothing",
    tips: ["Best for silk sarees", "Traditional jewelry", "Wholesale prices"],
  },
  {
    name: "Phoenix MarketCity",
    description:
      "Large shopping mall with international brands and entertainment",
    specialty: "Mall Shopping",
    tips: [
      "International brands",
      "Food court",
      "Movie theater",
      "Gaming zone",
    ],
  },
];

const dayTrips = [
  {
    name: "Mysore Palace & City",
    distance: "150 km (3 hours)",
    description: "Royal palace, gardens, and the cultural heritage of Mysore",
    highlights: [
      "Mysore Palace",
      "Brindavan Gardens",
      "Chamundi Hills",
      "Silk weaving",
    ],
    bestTime: "Full day trip",
  },
  {
    name: "Coorg (Kodagu)",
    distance: "250 km (5 hours)",
    description: "Hill station famous for coffee plantations and scenic beauty",
    highlights: [
      "Coffee plantations",
      "Abbey Falls",
      "Raja's Seat",
      "Tibetan Monastery",
    ],
    bestTime: "2-day trip",
  },
  {
    name: "Shravanabelagola",
    distance: "140 km (3 hours)",
    description:
      "Important Jain pilgrimage site with massive monolithic statue",
    highlights: [
      "Gommateshwara statue",
      "Jain temples",
      "Hill climbing",
      "Spiritual experience",
    ],
    bestTime: "Day trip",
  },
];

const practicalTips = [
  {
    category: "Transportation",
    tips: [
      "Use Uber/Ola for convenient city travel",
      "Metro rail covers major destinations",
      "Auto-rickshaws for short distances",
      "Taxi services for day trips",
    ],
  },
  {
    category: "Best Time to Visit",
    tips: [
      "Early morning for gardens and temples",
      "Evening for shopping areas",
      "Weekdays less crowded than weekends",
      "Avoid monsoon season travel",
    ],
  },
  {
    category: "Local Etiquette",
    tips: [
      "Dress modestly for religious places",
      "Remove shoes before entering temples",
      "Bargaining is common in street markets",
      "Try local South Indian cuisine",
    ],
  },
  {
    category: "Safety & Comfort",
    tips: [
      "Keep valuables secure while shopping",
      "Stay hydrated in warm weather",
      "Use reputable transport services",
      "Have emergency contacts handy",
    ],
  },
];

export default function PlacesToVisitPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pharmaceutical-50 to-primary-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-pharmaceutical-600 to-primary-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Explore Bangalore
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-pharmaceutical-100">
              Discover the Garden City During Your Conference Stay
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm md:text-base">
              <div className="flex items-center gap-2">
                <TreePine className="h-5 w-5" />
                <span>Garden City Attractions</span>
              </div>
              <div className="flex items-center gap-2">
                <Building className="h-5 w-5" />
                <span>Rich Cultural Heritage</span>
              </div>
              <div className="flex items-center gap-2">
                <Coffee className="h-5 w-5" />
                <span>Food & Shopping Paradise</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Top Attractions */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-6">
              Must-Visit Attractions
            </h2>
            <p className="text-lg text-secondary-600 max-w-3xl mx-auto">
              Discover Bangalore's most popular destinations, from lush gardens
              and historic palaces to modern shopping complexes and scenic hill
              stations.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {topAttractions.map((attraction, index) => {
              const IconComponent = attraction.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden border border-pharmaceutical-100 hover:shadow-xl transition-shadow"
                >
                  <div className="h-48 bg-gray-200 relative">
                    <div className="absolute top-4 left-4 bg-pharmaceutical-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {attraction.category}
                    </div>
                    <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full flex items-center gap-1">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm font-semibold">
                        {attraction.rating}
                      </span>
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex items-start gap-4 mb-4">
                      <IconComponent className="h-8 w-8 text-pharmaceutical-600 flex-shrink-0 mt-1" />
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-secondary-900 mb-2">
                          {attraction.name}
                        </h3>
                        <p className="text-secondary-600 text-sm mb-3">
                          {attraction.description}
                        </p>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                      <div className="flex items-center gap-2 text-secondary-600">
                        <MapPin className="h-4 w-4" />
                        <span>{attraction.distance}</span>
                      </div>
                      <div className="flex items-center gap-2 text-secondary-600">
                        <Clock className="h-4 w-4" />
                        <span>{attraction.timing}</span>
                      </div>
                    </div>

                    <div className="mb-4">
                      <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary-100 text-primary-800">
                        Entry: {attraction.entryFee}
                      </div>
                    </div>

                    <div className="mb-6">
                      <h4 className="font-semibold text-secondary-900 mb-2">
                        Highlights:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {attraction.highlights.map((highlight, idx) => (
                          <span
                            key={idx}
                            className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-pharmaceutical-100 text-pharmaceutical-800"
                          >
                            {highlight}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex gap-3">
                      <button className="flex-1 bg-pharmaceutical-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-pharmaceutical-700 transition-colors">
                        Get Directions
                      </button>
                      <button className="flex items-center gap-2 px-4 py-2 border border-pharmaceutical-600 text-pharmaceutical-600 rounded-lg font-semibold hover:bg-pharmaceutical-50 transition-colors">
                        <Camera className="h-4 w-4" />
                        Photos
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Cultural Experiences */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-6">
              Cultural Experiences
            </h2>
            <p className="text-lg text-secondary-600">
              Immerse yourself in Bangalore's rich cultural heritage and history
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {culturalExperiences.map((experience, index) => (
              <div
                key={index}
                className="bg-pharmaceutical-50 rounded-xl p-6 border border-pharmaceutical-100"
              >
                <div className="text-center">
                  <h3 className="text-lg font-bold text-secondary-900 mb-3">
                    {experience.name}
                  </h3>
                  <p className="text-secondary-600 text-sm mb-4">
                    {experience.description}
                  </p>
                  <div className="text-xs text-pharmaceutical-600 font-semibold mb-2">
                    {experience.category}
                  </div>
                  <div className="text-xs text-secondary-500">
                    {experience.timingNote}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dining Experiences */}
      <section className="py-20 bg-gradient-to-r from-pharmaceutical-50 to-primary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-6">
              Culinary Delights
            </h2>
            <p className="text-lg text-secondary-600">
              Savor the flavors of Bangalore's diverse food scene
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {diningExperiences.map((restaurant, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg p-6 border border-pharmaceutical-100"
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-secondary-900 mb-2">
                      {restaurant.name}
                    </h3>
                    <div className="text-pharmaceutical-600 font-semibold text-sm">
                      {restaurant.cuisine}
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-primary-600 font-bold">
                      {restaurant.priceRange}
                    </div>
                    <div className="text-xs text-secondary-500">per person</div>
                  </div>
                </div>

                <p className="text-secondary-600 text-sm mb-4">
                  {restaurant.specialty}
                </p>

                <div className="mb-4">
                  <div className="flex items-center gap-2 text-sm text-secondary-600 mb-2">
                    <MapPin className="h-4 w-4" />
                    <span>{restaurant.location}</span>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-secondary-900 mb-2">
                    Highlights:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {restaurant.highlights.map((highlight, idx) => (
                      <span
                        key={idx}
                        className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-pharmaceutical-100 text-pharmaceutical-800"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Shopping Destinations */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-6">
              Shopping Destinations
            </h2>
            <p className="text-lg text-secondary-600">
              From traditional markets to modern malls - shop to your heart's
              content
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {shoppingDestinations.map((destination, index) => (
              <div
                key={index}
                className="bg-pharmaceutical-50 rounded-xl p-6 border border-pharmaceutical-100"
              >
                <h3 className="text-xl font-bold text-secondary-900 mb-3">
                  {destination.name}
                </h3>
                <p className="text-secondary-600 text-sm mb-4">
                  {destination.description}
                </p>

                <div className="mb-4">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-pharmaceutical-100 text-pharmaceutical-800">
                    {destination.specialty}
                  </span>
                </div>

                <div>
                  <h4 className="font-semibold text-secondary-900 mb-2">
                    Shopping Tips:
                  </h4>
                  <ul className="space-y-1">
                    {destination.tips.map((tip, idx) => (
                      <li
                        key={idx}
                        className="text-sm text-secondary-600 flex items-center gap-2"
                      >
                        <div className="w-1.5 h-1.5 bg-pharmaceutical-600 rounded-full"></div>
                        {tip}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Day Trips */}
      <section className="py-20 bg-gradient-to-r from-pharmaceutical-50 to-primary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-6">
              Day Trip Options
            </h2>
            <p className="text-lg text-secondary-600">
              Extend your stay to explore nearby destinations
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {dayTrips.map((trip, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg p-6 border border-pharmaceutical-100"
              >
                <h3 className="text-xl font-bold text-secondary-900 mb-3">
                  {trip.name}
                </h3>
                <div className="flex items-center gap-2 text-pharmaceutical-600 font-semibold text-sm mb-3">
                  <Navigation className="h-4 w-4" />
                  <span>{trip.distance}</span>
                </div>
                <p className="text-secondary-600 text-sm mb-4">
                  {trip.description}
                </p>

                <div className="mb-4">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary-100 text-primary-800">
                    {trip.bestTime}
                  </span>
                </div>

                <div>
                  <h4 className="font-semibold text-secondary-900 mb-2">
                    Must See:
                  </h4>
                  <ul className="space-y-1">
                    {trip.highlights.map((highlight, idx) => (
                      <li
                        key={idx}
                        className="text-sm text-secondary-600 flex items-center gap-2"
                      >
                        <div className="w-1.5 h-1.5 bg-pharmaceutical-600 rounded-full"></div>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Practical Tips */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-6">
              Travel Tips
            </h2>
            <p className="text-lg text-secondary-600">
              Make the most of your Bangalore exploration
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {practicalTips.map((tipCategory, index) => (
              <div
                key={index}
                className="bg-pharmaceutical-50 rounded-xl p-6 border border-pharmaceutical-100"
              >
                <h3 className="text-lg font-bold text-secondary-900 mb-4">
                  {tipCategory.category}
                </h3>
                <ul className="space-y-3">
                  {tipCategory.tips.map((tip, idx) => (
                    <li
                      key={idx}
                      className="text-sm text-secondary-600 flex items-start gap-2"
                    >
                      <div className="w-1.5 h-1.5 bg-pharmaceutical-600 rounded-full mt-2 flex-shrink-0"></div>
                      {tip}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact and Information */}
      <section className="py-20 bg-secondary-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Need Travel Assistance?
          </h2>
          <p className="text-xl text-secondary-300 mb-8">
            Our local tourism desk can help you plan your Bangalore exploration
          </p>

          <div className="grid md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div>
              <h3 className="font-semibold mb-2">Tourism Desk</h3>
              <p className="text-secondary-300">tourism@74ipc2025.org</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Local Guide Services</h3>
              <p className="text-secondary-300">+91-80-4567-8901</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Emergency Assistance</h3>
              <p className="text-secondary-300">+91-98123-45678</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
