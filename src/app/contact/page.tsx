import { Metadata } from "next";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Users,
  Building,
  MessageSquare,
  Send,
  Globe,
  Calendar,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with the 74th Indian Pharmaceutical Congress 2025 organizing committee. Find contact information, venue details, and support services.",
};

const organizingCommittee = [
  {
    role: "Conference Chairman",
    name: "Dr. Rajesh Kumar",
    designation: "Professor & Head, Department of Pharmaceutics",
    organization: "Indian Institute of Technology, Mumbai",
    email: "chairman@74ipc2025.org",
    phone: "+91-80-1234-5601",
  },
  {
    role: "Organizing Secretary",
    name: "Dr. Priya Sharma",
    designation: "Director, Pharmaceutical Research",
    organization: "Biocon Limited",
    email: "secretary@74ipc2025.org",
    phone: "+91-80-1234-5602",
  },
  {
    role: "Scientific Committee Head",
    name: "Dr. Anil Patel",
    designation: "Chief Scientific Officer",
    organization: "Dr. Reddy's Laboratories",
    email: "scientific@74ipc2025.org",
    phone: "+91-80-1234-5603",
  },
  {
    role: "Registration Coordinator",
    name: "Ms. Kavya Reddy",
    designation: "Event Management Director",
    organization: "IPCA Organizing Committee",
    email: "registration@74ipc2025.org",
    phone: "+91-80-1234-5604",
  },
];

const contactDepartments = [
  {
    department: "General Inquiries",
    icon: MessageSquare,
    email: "info@74ipc2025.org",
    phone: "+91-80-1234-5600",
    description: "For general conference information and queries",
    hours: "9:00 AM - 6:00 PM IST (Mon-Fri)",
  },
  {
    department: "Registration Support",
    icon: Users,
    email: "registration@74ipc2025.org",
    phone: "+91-80-1234-5604",
    description: "Registration assistance and payment queries",
    hours: "9:00 AM - 7:00 PM IST (Mon-Sat)",
  },
  {
    department: "Scientific Program",
    icon: Building,
    email: "scientific@74ipc2025.org",
    phone: "+91-80-1234-5603",
    description: "Abstract submission and scientific program queries",
    hours: "10:00 AM - 5:00 PM IST (Mon-Fri)",
  },
  {
    department: "Sponsorship & Exhibition",
    icon: Globe,
    email: "sponsorship@74ipc2025.org",
    phone: "+91-80-1234-5605",
    description: "Partnership opportunities and exhibition queries",
    hours: "9:00 AM - 6:00 PM IST (Mon-Fri)",
  },
  {
    department: "Accommodation",
    icon: Building,
    email: "accommodation@74ipc2025.org",
    phone: "+91-80-1234-5606",
    description: "Hotel bookings and accommodation assistance",
    hours: "9:00 AM - 8:00 PM IST (Mon-Sun)",
  },
  {
    department: "Media & Press",
    icon: MessageSquare,
    email: "media@74ipc2025.org",
    phone: "+91-80-1234-5607",
    description: "Press releases and media partnerships",
    hours: "10:00 AM - 6:00 PM IST (Mon-Fri)",
  },
];

const venueInfo = {
  name: "Bangalore International Exhibition Centre (BIEC)",
  address:
    "10th Mile, Tumkur Road, Madavara Post, Bangalore - 562123, Karnataka, India",
  coordinates: "13.1986° N, 77.4456° E",
  facilities: [
    "State-of-the-art exhibition halls",
    "Multiple conference rooms",
    "Advanced audio-visual equipment",
    "High-speed WiFi throughout",
    "Ample parking space",
    "Food courts and restaurants",
    "Accessibility features",
    "24/7 security",
  ],
};

const socialMedia = [
  {
    platform: "LinkedIn",
    handle: "@74ipc2025",
    url: "https://linkedin.com/company/74ipc2025",
  },
  {
    platform: "Twitter",
    handle: "@74IPC2025",
    url: "https://twitter.com/74IPC2025",
  },
  {
    platform: "Facebook",
    handle: "74IPC2025",
    url: "https://facebook.com/74IPC2025",
  },
  {
    platform: "Instagram",
    handle: "@74ipc2025",
    url: "https://instagram.com/74ipc2025",
  },
  {
    platform: "YouTube",
    handle: "74IPC2025",
    url: "https://youtube.com/@74IPC2025",
  },
];

const emergencyContacts = [
  {
    service: "Medical Emergency",
    contact: "108 (Ambulance)",
    description: "24/7 emergency medical services",
  },
  {
    service: "Police Emergency",
    contact: "100",
    description: "Local police emergency hotline",
  },
  {
    service: "Conference Emergency Helpline",
    contact: "+91-98765-43210",
    description: "24/7 conference emergency support",
  },
  {
    service: "Venue Security",
    contact: "+91-80-2345-6789",
    description: "BIEC security control room",
  },
];

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pharmaceutical-50 to-primary-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-pharmaceutical-600 to-primary-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl md:text-2xl mb-8 text-pharmaceutical-100">
              We're Here to Help You with IPC 2025
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm md:text-base">
              <div className="flex items-center gap-2">
                <Phone className="h-5 w-5" />
                <span>Multiple Support Channels</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-5 w-5" />
                <span>Quick Response Team</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5" />
                <span>Extended Support Hours</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Contact Cards */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-6">
              Get in Touch
            </h2>
            <p className="text-lg text-secondary-600 max-w-3xl mx-auto">
              Choose the right contact method for your specific needs. Our
              dedicated teams are ready to assist you.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {contactDepartments.map((dept, index) => {
              const IconComponent = dept.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl shadow-lg p-8 border border-pharmaceutical-100 hover:shadow-xl transition-shadow"
                >
                  <div className="text-center mb-6">
                    <IconComponent className="h-12 w-12 text-pharmaceutical-600 mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-secondary-900 mb-2">
                      {dept.department}
                    </h3>
                    <p className="text-secondary-600 text-sm">
                      {dept.description}
                    </p>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <Mail className="h-5 w-5 text-pharmaceutical-600 flex-shrink-0" />
                      <a
                        href={`mailto:${dept.email}`}
                        className="text-pharmaceutical-600 hover:text-pharmaceutical-700 font-medium"
                      >
                        {dept.email}
                      </a>
                    </div>
                    <div className="flex items-center gap-3">
                      <Phone className="h-5 w-5 text-pharmaceutical-600 flex-shrink-0" />
                      <a
                        href={`tel:${dept.phone}`}
                        className="text-pharmaceutical-600 hover:text-pharmaceutical-700 font-medium"
                      >
                        {dept.phone}
                      </a>
                    </div>
                    <div className="flex items-center gap-3">
                      <Clock className="h-5 w-5 text-secondary-500 flex-shrink-0" />
                      <span className="text-secondary-600 text-sm">
                        {dept.hours}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Organizing Committee */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-6">
              Organizing Committee
            </h2>
            <p className="text-lg text-secondary-600">
              Meet the distinguished professionals leading IPC 2025
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {organizingCommittee.map((member, index) => (
              <div
                key={index}
                className="bg-pharmaceutical-50 rounded-xl p-8 border border-pharmaceutical-100"
              >
                <div className="mb-4">
                  <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-pharmaceutical-100 text-pharmaceutical-800 mb-3">
                    {member.role}
                  </div>
                  <h3 className="text-xl font-bold text-secondary-900 mb-2">
                    {member.name}
                  </h3>
                  <p className="text-secondary-700 font-medium mb-1">
                    {member.designation}
                  </p>
                  <p className="text-secondary-600 text-sm mb-4">
                    {member.organization}
                  </p>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Mail className="h-4 w-4 text-pharmaceutical-600 flex-shrink-0" />
                    <a
                      href={`mailto:${member.email}`}
                      className="text-pharmaceutical-600 hover:text-pharmaceutical-700 text-sm font-medium"
                    >
                      {member.email}
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="h-4 w-4 text-pharmaceutical-600 flex-shrink-0" />
                    <a
                      href={`tel:${member.phone}`}
                      className="text-pharmaceutical-600 hover:text-pharmaceutical-700 text-sm font-medium"
                    >
                      {member.phone}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Venue Information */}
      <section className="py-20 bg-gradient-to-r from-pharmaceutical-50 to-primary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-6">
              Conference Venue
            </h2>
            <p className="text-lg text-secondary-600">
              World-class facilities for an exceptional conference experience
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-secondary-900 mb-4">
                {venueInfo.name}
              </h3>
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-pharmaceutical-600 flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-secondary-700">{venueInfo.address}</p>
                    <p className="text-secondary-500 text-sm mt-1">
                      {venueInfo.coordinates}
                    </p>
                  </div>
                </div>
              </div>

              <div className="mb-8">
                <h4 className="font-bold text-secondary-900 mb-4">
                  Venue Facilities:
                </h4>
                <div className="grid grid-cols-2 gap-3">
                  {venueInfo.facilities.map((facility, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-2 text-sm text-secondary-600"
                    >
                      <div className="w-2 h-2 bg-pharmaceutical-600 rounded-full flex-shrink-0"></div>
                      {facility}
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex gap-4">
                <button className="bg-pharmaceutical-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-pharmaceutical-700 transition-colors">
                  Get Directions
                </button>
                <button className="border border-pharmaceutical-600 text-pharmaceutical-600 px-6 py-3 rounded-lg font-semibold hover:bg-pharmaceutical-50 transition-colors">
                  View Virtual Tour
                </button>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 border border-pharmaceutical-100">
              <h4 className="font-bold text-secondary-900 mb-6">
                Conference Dates & Times
              </h4>
              <div className="space-y-4">
                <div className="flex items-center gap-3 p-4 bg-pharmaceutical-50 rounded-lg">
                  <Calendar className="h-6 w-6 text-pharmaceutical-600" />
                  <div>
                    <div className="font-semibold text-secondary-900">
                      December 19-21, 2025
                    </div>
                    <div className="text-secondary-600 text-sm">
                      3-Day Conference
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-4 bg-primary-50 rounded-lg">
                  <Clock className="h-6 w-6 text-primary-600" />
                  <div>
                    <div className="font-semibold text-secondary-900">
                      8:00 AM - 6:00 PM
                    </div>
                    <div className="text-secondary-600 text-sm">
                      Daily Schedule
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                <h5 className="font-semibold text-yellow-800 mb-2">
                  Transportation
                </h5>
                <ul className="text-yellow-700 text-sm space-y-1">
                  <li>• Free shuttle from partner hotels</li>
                  <li>• Metro connectivity available</li>
                  <li>• Ample parking facilities</li>
                  <li>• Airport transfer services</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-6">
              Send Us a Message
            </h2>
            <p className="text-lg text-secondary-600">
              Have a specific query? Fill out the form below and we'll get back
              to you within 24 hours.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg border border-pharmaceutical-100 p-8">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="firstName"
                    className="block text-sm font-medium text-secondary-700 mb-2"
                  >
                    First Name *
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    className="w-full px-4 py-3 border border-pharmaceutical-200 rounded-lg focus:ring-2 focus:ring-pharmaceutical-500 focus:border-pharmaceutical-500 transition-colors"
                    placeholder="Enter your first name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="lastName"
                    className="block text-sm font-medium text-secondary-700 mb-2"
                  >
                    Last Name *
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    className="w-full px-4 py-3 border border-pharmaceutical-200 rounded-lg focus:ring-2 focus:ring-pharmaceutical-500 focus:border-pharmaceutical-500 transition-colors"
                    placeholder="Enter your last name"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-secondary-700 mb-2"
                  >
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 border border-pharmaceutical-200 rounded-lg focus:ring-2 focus:ring-pharmaceutical-500 focus:border-pharmaceutical-500 transition-colors"
                    placeholder="Enter your email address"
                  />
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-secondary-700 mb-2"
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full px-4 py-3 border border-pharmaceutical-200 rounded-lg focus:ring-2 focus:ring-pharmaceutical-500 focus:border-pharmaceutical-500 transition-colors"
                    placeholder="Enter your phone number"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="organization"
                    className="block text-sm font-medium text-secondary-700 mb-2"
                  >
                    Organization
                  </label>
                  <input
                    type="text"
                    id="organization"
                    className="w-full px-4 py-3 border border-pharmaceutical-200 rounded-lg focus:ring-2 focus:ring-pharmaceutical-500 focus:border-pharmaceutical-500 transition-colors"
                    placeholder="Enter your organization"
                  />
                </div>
                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-secondary-700 mb-2"
                  >
                    Subject Category *
                  </label>
                  <select
                    id="subject"
                    className="w-full px-4 py-3 border border-pharmaceutical-200 rounded-lg focus:ring-2 focus:ring-pharmaceutical-500 focus:border-pharmaceutical-500 transition-colors"
                  >
                    <option value="">Select a category</option>
                    <option value="registration">Registration Query</option>
                    <option value="scientific">Scientific Program</option>
                    <option value="sponsorship">Sponsorship</option>
                    <option value="accommodation">Accommodation</option>
                    <option value="exhibition">Exhibition</option>
                    <option value="media">Media Partnership</option>
                    <option value="general">General Inquiry</option>
                  </select>
                </div>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-secondary-700 mb-2"
                >
                  Message *
                </label>
                <textarea
                  id="message"
                  rows={6}
                  className="w-full px-4 py-3 border border-pharmaceutical-200 rounded-lg focus:ring-2 focus:ring-pharmaceutical-500 focus:border-pharmaceutical-500 transition-colors"
                  placeholder="Please describe your query in detail..."
                ></textarea>
              </div>

              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  id="newsletter"
                  className="h-4 w-4 text-pharmaceutical-600 focus:ring-pharmaceutical-500 border-pharmaceutical-300 rounded"
                />
                <label
                  htmlFor="newsletter"
                  className="text-sm text-secondary-600"
                >
                  Subscribe to conference updates and newsletters
                </label>
              </div>

              <button
                type="submit"
                className="w-full md:w-auto bg-pharmaceutical-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-pharmaceutical-700 transition-colors flex items-center justify-center gap-2"
              >
                <Send className="h-5 w-5" />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Social Media & Emergency Contacts */}
      <section className="py-20 bg-gradient-to-r from-pharmaceutical-50 to-primary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Social Media */}
            <div>
              <h2 className="text-3xl font-bold text-secondary-900 mb-8">
                Follow Us
              </h2>
              <p className="text-secondary-600 mb-8">
                Stay updated with the latest conference news and announcements
                on our social media channels.
              </p>

              <div className="space-y-4">
                {socialMedia.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 bg-white rounded-lg shadow-md border border-pharmaceutical-100 hover:shadow-lg transition-shadow"
                  >
                    <div className="w-12 h-12 bg-pharmaceutical-600 text-white rounded-lg flex items-center justify-center">
                      <Globe className="h-6 w-6" />
                    </div>
                    <div>
                      <div className="font-semibold text-secondary-900">
                        {social.platform}
                      </div>
                      <div className="text-pharmaceutical-600 text-sm">
                        {social.handle}
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Emergency Contacts */}
            <div>
              <h2 className="text-3xl font-bold text-secondary-900 mb-8">
                Emergency Contacts
              </h2>
              <p className="text-secondary-600 mb-8">
                Important contact numbers for emergencies during the conference
                period.
              </p>

              <div className="space-y-4">
                {emergencyContacts.map((contact, index) => (
                  <div
                    key={index}
                    className="p-4 bg-white rounded-lg shadow-md border border-red-200"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-red-600 text-white rounded-lg flex items-center justify-center">
                        <Phone className="h-6 w-6" />
                      </div>
                      <div className="flex-1">
                        <div className="font-semibold text-secondary-900">
                          {contact.service}
                        </div>
                        <div className="text-red-600 font-bold text-lg">
                          {contact.contact}
                        </div>
                        <div className="text-secondary-600 text-sm">
                          {contact.description}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-20 bg-secondary-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Still Have Questions?
          </h2>
          <p className="text-xl text-secondary-300 mb-8">
            Our support team is available to help you with any
            conference-related queries
          </p>

          <div className="grid md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div>
              <h3 className="font-semibold mb-2">Call Us</h3>
              <p className="text-pharmaceutical-300">+91-80-1234-5600</p>
              <p className="text-secondary-400 text-sm">
                Mon-Fri, 9 AM - 6 PM IST
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Email Us</h3>
              <p className="text-pharmaceutical-300">info@74ipc2025.org</p>
              <p className="text-secondary-400 text-sm">
                Response within 24 hours
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">WhatsApp</h3>
              <p className="text-pharmaceutical-300">+91-98765-43210</p>
              <p className="text-secondary-400 text-sm">
                Quick support available
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
