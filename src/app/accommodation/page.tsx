import { Metadata } from "next";
import {
  MapPin,
  Star,
  Wifi,
  Car,
  Coffee,
  Utensils,
  Dumbbell,
  Waves,
  Phone,
  Clock,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Accommodation",
  description:
    "Find comfortable accommodation for the 74th Indian Pharmaceutical Congress 2025 in Bangalore. Book from our selection of partner hotels with special conference rates.",
};

const partnerHotels = [
  {
    name: "Grand Mercure Bangalore",
    category: "5-Star Luxury",
    rating: 5,
    distance: "2.5 km from venue",
    price: "₹8,500",
    originalPrice: "₹12,000",
    image: "/api/placeholder/400/250",
    amenities: [
      "Free WiFi",
      "Pool",
      "Spa",
      "Gym",
      "Restaurant",
      "Room Service",
    ],
    description:
      "Luxury accommodation with world-class amenities and excellent service.",
    features: [
      "Spacious rooms with city views",
      "Multiple dining options",
      "Business center facilities",
      "Airport shuttle service",
      "24/7 concierge service",
    ],
    contact: {
      phone: "+91-80-4014-4444",
      email: "reservations@grandmercurebangalore.com",
    },
  },
  {
    name: "Novotel Bangalore Outer Ring Road",
    category: "4-Star Premium",
    rating: 4,
    distance: "3.2 km from venue",
    price: "₹6,500",
    originalPrice: "₹9,000",
    image: "/api/placeholder/400/250",
    amenities: ["Free WiFi", "Pool", "Gym", "Restaurant", "Bar", "Parking"],
    description:
      "Modern hotel with contemporary design and excellent conference facilities.",
    features: [
      "Contemporary rooms",
      "Outdoor swimming pool",
      "Multi-cuisine restaurant",
      "Executive lounge",
      "Free parking facility",
    ],
    contact: {
      phone: "+91-80-4937-9999",
      email: "reservations@novotelbanglore.com",
    },
  },
  {
    name: "Courtyard by Marriott Bangalore Hebbal",
    category: "4-Star Business",
    rating: 4,
    distance: "4.1 km from venue",
    price: "₹5,800",
    originalPrice: "₹8,200",
    image: "/api/placeholder/400/250",
    amenities: [
      "Free WiFi",
      "Gym",
      "Restaurant",
      "Business Center",
      "Parking",
      "Laundry",
    ],
    description:
      "Business-friendly hotel with modern amenities and excellent connectivity.",
    features: [
      "Business center facilities",
      "24-hour fitness center",
      "Multi-purpose meeting rooms",
      "Express laundry service",
      "Complimentary parking",
    ],
    contact: {
      phone: "+91-80-4719-1234",
      email: "reservations@courtyardbangalore.com",
    },
  },
  {
    name: "Holiday Inn Express Bangalore Whitefield",
    category: "3-Star Express",
    rating: 3,
    distance: "5.8 km from venue",
    price: "₹4,200",
    originalPrice: "₹6,000",
    image: "/api/placeholder/400/250",
    amenities: [
      "Free WiFi",
      "Breakfast",
      "Gym",
      "Business Center",
      "Parking",
      "24/7 Front Desk",
    ],
    description:
      "Comfortable and affordable accommodation with essential amenities.",
    features: [
      "Complimentary breakfast",
      "Express check-in/out",
      "24-hour business center",
      "Fitness facility",
      "Smart TVs in all rooms",
    ],
    contact: {
      phone: "+91-80-4043-9999",
      email: "reservations@hiexbangalore.com",
    },
  },
  {
    name: "Lemon Tree Hotel Whitefield",
    category: "3-Star Economy",
    rating: 3,
    distance: "6.5 km from venue",
    price: "₹3,500",
    originalPrice: "₹5,000",
    image: "/api/placeholder/400/250",
    amenities: [
      "Free WiFi",
      "Restaurant",
      "Gym",
      "Business Center",
      "Parking",
      "Room Service",
    ],
    description:
      "Budget-friendly option with good connectivity and modern facilities.",
    features: [
      "Vibrant and colorful interiors",
      "24-hour coffee shop",
      "Complimentary WiFi",
      "Ample parking space",
      "Proximity to tech parks",
    ],
    contact: {
      phone: "+91-80-4717-2222",
      email: "reservations@lemontreehotels.com",
    },
  },
  {
    name: "Ginger Bangalore Whitefield",
    category: "Budget Smart",
    rating: 3,
    distance: "7.2 km from venue",
    price: "₹2,800",
    originalPrice: "₹4,000",
    image: "/api/placeholder/400/250",
    amenities: [
      "Free WiFi",
      "Restaurant",
      "Gym",
      "Laundry",
      "Parking",
      "24/7 Security",
    ],
    description:
      "Smart budget hotel with essential amenities and good value for money.",
    features: [
      "Smart, efficient room design",
      "24-hour cafe",
      "Self-service laundry",
      "Fitness center",
      "Round-the-clock security",
    ],
    contact: {
      phone: "+91-80-4004-3333",
      email: "bangalore.whitefield@gingerhotels.com",
    },
  },
];

const transportationOptions = [
  {
    mode: "Conference Shuttle",
    description: "Complimentary shuttle service from partner hotels",
    timing: "Every 30 minutes during conference hours",
    cost: "Free for registered delegates",
    icon: Car,
  },
  {
    mode: "Taxi/Uber/Ola",
    description: "Convenient ride-hailing services available 24/7",
    timing: "On-demand availability",
    cost: "₹150-400 depending on distance",
    icon: Car,
  },
  {
    mode: "Airport Transfer",
    description: "Direct transfer from Kempegowda International Airport",
    timing: "45-60 minutes to venue area",
    cost: "₹800-1200 per trip",
    icon: Car,
  },
  {
    mode: "Metro Rail",
    description: "Purple Line connects to Whitefield area",
    timing: "Every 10-15 minutes",
    cost: "₹15-35 per trip",
    icon: Car,
  },
];

const bookingProcess = [
  {
    step: 1,
    title: "Select Hotel",
    description:
      "Choose from our list of partner hotels based on your preference and budget",
  },
  {
    step: 2,
    title: "Check Availability",
    description:
      "Verify room availability for your conference dates (Dec 19-21, 2025)",
  },
  {
    step: 3,
    title: "Apply Conference Code",
    description:
      "Use code 'IPC2025' to get special conference rates and benefits",
  },
  {
    step: 4,
    title: "Confirm Booking",
    description:
      "Complete your reservation with advance payment and receive confirmation",
  },
];

const accommodationTips = [
  "Book early to secure the best rates and room availability",
  "Mention 'IPC 2025' when booking to get conference discounts",
  "Consider proximity to the venue and transportation options",
  "Check hotel amenities that matter most to you (WiFi, gym, pool)",
  "Keep contact details of the hotel readily available",
  "Verify check-in/check-out times with your conference schedule",
];

export default function AccommodationPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pharmaceutical-50 to-primary-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-pharmaceutical-600 to-primary-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Accommodation
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-pharmaceutical-100">
              Comfortable Stay for IPC 2025 Delegates
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm md:text-base">
              <div className="flex items-center gap-2">
                <MapPin className="h-5 w-5" />
                <span>Prime Bangalore Locations</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="h-5 w-5" />
                <span>Partner Hotel Benefits</span>
              </div>
              <div className="flex items-center gap-2">
                <Car className="h-5 w-5" />
                <span>Free Shuttle Service</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Conference Rates Banner */}
      <section className="py-8 bg-yellow-50 border-b border-yellow-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-yellow-800 mb-2">
              Special Conference Rates Available!
            </h2>
            <p className="text-yellow-700">
              Use code{" "}
              <span className="font-bold bg-yellow-200 px-2 py-1 rounded">
                IPC2025
              </span>{" "}
              when booking to get up to 30% discount at partner hotels
            </p>
          </div>
        </div>
      </section>

      {/* Partner Hotels */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-6">
              Partner Hotels
            </h2>
            <p className="text-lg text-secondary-600 max-w-3xl mx-auto">
              We've partnered with top hotels in Bangalore to offer you
              comfortable accommodation with special conference rates and
              convenient shuttle services.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {partnerHotels.map((hotel, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg overflow-hidden border border-pharmaceutical-100 hover:shadow-xl transition-shadow"
              >
                <div className="h-48 bg-gray-200 relative">
                  <div className="absolute top-4 left-4 bg-pharmaceutical-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {hotel.category}
                  </div>
                  <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full flex items-center gap-1">
                    {[...Array(hotel.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-secondary-900 mb-2">
                        {hotel.name}
                      </h3>
                      <div className="flex items-center gap-2 text-secondary-600 text-sm">
                        <MapPin className="h-4 w-4" />
                        <span>{hotel.distance}</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-secondary-500 line-through">
                        {hotel.originalPrice}
                      </div>
                      <div className="text-2xl font-bold text-pharmaceutical-600">
                        {hotel.price}
                      </div>
                      <div className="text-xs text-secondary-600">
                        per night
                      </div>
                    </div>
                  </div>

                  <p className="text-secondary-600 text-sm mb-4">
                    {hotel.description}
                  </p>

                  <div className="mb-4">
                    <h4 className="font-semibold text-secondary-900 mb-2">
                      Amenities:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {hotel.amenities.map((amenity, idx) => (
                        <span
                          key={idx}
                          className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-pharmaceutical-100 text-pharmaceutical-800"
                        >
                          {amenity}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold text-secondary-900 mb-2">
                      Features:
                    </h4>
                    <ul className="space-y-1">
                      {hotel.features.slice(0, 3).map((feature, idx) => (
                        <li
                          key={idx}
                          className="text-sm text-secondary-600 flex items-center gap-2"
                        >
                          <div className="w-1.5 h-1.5 bg-pharmaceutical-600 rounded-full"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex gap-3">
                    <button className="flex-1 bg-pharmaceutical-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-pharmaceutical-700 transition-colors">
                      Book Now
                    </button>
                    <button className="flex items-center gap-2 px-4 py-3 border border-pharmaceutical-600 text-pharmaceutical-600 rounded-lg font-semibold hover:bg-pharmaceutical-50 transition-colors">
                      <Phone className="h-4 w-4" />
                      Call
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Transportation */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-6">
              Transportation Options
            </h2>
            <p className="text-lg text-secondary-600">
              Multiple convenient ways to reach the conference venue from your
              hotel
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {transportationOptions.map((option, index) => {
              const IconComponent = option.icon;
              return (
                <div
                  key={index}
                  className="text-center p-6 bg-pharmaceutical-50 rounded-xl border border-pharmaceutical-100"
                >
                  <IconComponent className="h-12 w-12 text-pharmaceutical-600 mx-auto mb-4" />
                  <h3 className="text-lg font-bold text-secondary-900 mb-3">
                    {option.mode}
                  </h3>
                  <p className="text-secondary-600 text-sm mb-3">
                    {option.description}
                  </p>
                  <div className="space-y-2 text-xs text-secondary-500">
                    <div className="flex items-center gap-2 justify-center">
                      <Clock className="h-3 w-3" />
                      <span>{option.timing}</span>
                    </div>
                    <div className="font-semibold text-pharmaceutical-600">
                      {option.cost}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Booking Process */}
      <section className="py-20 bg-gradient-to-r from-pharmaceutical-50 to-primary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-6">
              How to Book
            </h2>
            <p className="text-lg text-secondary-600">
              Simple steps to secure your accommodation
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {bookingProcess.map((process, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-pharmaceutical-600 text-white rounded-full flex items-center justify-center font-bold text-xl mb-4 mx-auto">
                    {process.step}
                  </div>
                  <h3 className="text-lg font-bold text-secondary-900 mb-3">
                    {process.title}
                  </h3>
                  <p className="text-secondary-600 text-sm">
                    {process.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Booking Tips */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-6">
              Booking Tips
            </h2>
            <p className="text-lg text-secondary-600">
              Make the most of your accommodation booking
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6">
              {accommodationTips.map((tip, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 p-6 bg-pharmaceutical-50 rounded-lg border border-pharmaceutical-100"
                >
                  <div className="w-6 h-6 bg-pharmaceutical-600 text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0 mt-0.5">
                    {index + 1}
                  </div>
                  <p className="text-secondary-700">{tip}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact and Support */}
      <section className="py-20 bg-secondary-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Need Accommodation Assistance?
          </h2>
          <p className="text-xl text-secondary-300 mb-8">
            Our accommodation team is here to help you find the perfect stay
          </p>

          <div className="grid md:grid-cols-3 gap-8 max-w-3xl mx-auto mb-8">
            <div>
              <h3 className="font-semibold mb-2">Accommodation Desk</h3>
              <p className="text-secondary-300">accommodation@74ipc2025.org</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Phone Support</h3>
              <p className="text-secondary-300">+91-80-3456-7890</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">WhatsApp Support</h3>
              <p className="text-secondary-300">+91-98765-43210</p>
            </div>
          </div>

          <div className="bg-pharmaceutical-600 text-white p-6 rounded-lg max-w-2xl mx-auto">
            <h3 className="font-bold text-lg mb-2">Special Group Booking</h3>
            <p className="text-pharmaceutical-100">
              Planning to book for a group of 10+ delegates? Contact us for
              special group rates and additional benefits.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
