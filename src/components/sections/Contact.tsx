'use client'

import { useState } from 'react'
import { Mail, Phone, MapPin, Clock, Send, User, MessageSquare, Calendar } from 'lucide-react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    phone: '',
    subject: '',
    message: '',
    inquiry_type: 'general'
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState('')

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    setTimeout(() => {
      setSubmitMessage('Thank you for your inquiry! We will get back to you within 24 hours.')
      setIsSubmitting(false)
      setFormData({
        name: '',
        email: '',
        organization: '',
        phone: '',
        subject: '',
        message: '',
        inquiry_type: 'general'
      })
    }, 2000)
  }

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Venue Address',
      details: [
        'India Expo Centre',
        'Plot No. 1, Knowledge Park II',
        'Greater Noida, Delhi NCR',
        'Uttar Pradesh - 201306, India'
      ]
    },
    {
      icon: Phone,
      title: 'Phone Numbers',
      details: [
        'Main: +91 123 456 7890',
        'Registration: +91 123 456 7891',
        'Sponsorship: +91 123 456 7892',
        'Media: +91 123 456 7893'
      ]
    },
    {
      icon: Mail,
      title: 'Email Addresses',
      details: [
        'General: info@74ipc2025.org',
        'Registration: register@74ipc2025.org',
        'Speakers: speakers@74ipc2025.org',
        'Press: media@74ipc2025.org'
      ]
    },
    {
      icon: Clock,
      title: 'Office Hours',
      details: [
        'Monday - Friday: 9:00 AM - 6:00 PM',
        'Saturday: 10:00 AM - 4:00 PM',
        'Sunday: Closed',
        'During Conference: 24/7 Support'
      ]
    }
  ]

  const inquiryTypes = [
    { value: 'general', label: 'General Information' },
    { value: 'registration', label: 'Registration' },
    { value: 'speakers', label: 'Speaking Opportunities' },
    { value: 'sponsorship', label: 'Sponsorship & Partnership' },
    { value: 'media', label: 'Media & Press' },
    { value: 'accommodation', label: 'Accommodation' },
    { value: 'technical', label: 'Technical Support' }
  ]

  const quickContacts = [
    {
      title: 'Conference Director',
      name: 'Dr. Suresh Kumar',
      email: 'director@74ipc2025.org',
      phone: '+91 123 456 7890'
    },
    {
      title: 'Registration Manager',
      name: 'Ms. Priya Sharma',
      email: 'registration@74ipc2025.org',
      phone: '+91 123 456 7891'
    },
    {
      title: 'Partnership Manager',
      name: 'Mr. Rajesh Gupta',
      email: 'partnerships@74ipc2025.org',
      phone: '+91 123 456 7892'
    }
  ]

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Get in
            <span className="block text-pharmaceutical-600">Touch</span>
          </h2>
          <p className="text-xl text-gray-600">
            Have questions about the conference? Need assistance with registration? Our team is here to help you make the most of your 74th IPC 2025 experience.
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Send us a Message
              </h3>
              
              {submitMessage && (
                <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-6">
                  {submitMessage}
                </div>
              )}
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pharmaceutical-500 focus:border-transparent"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pharmaceutical-500 focus:border-transparent"
                      required
                    />
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">Organization</label>
                    <input
                      type="text"
                      name="organization"
                      value={formData.organization}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pharmaceutical-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pharmaceutical-500 focus:border-transparent"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Inquiry Type</label>
                  <select
                    name="inquiry_type"
                    value={formData.inquiry_type}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pharmaceutical-500 focus:border-transparent"
                  >
                    {inquiryTypes.map((type) => (
                      <option key={type.value} value={type.value}>
                        {type.label}
                      </option>
                    ))}
                  </select>
                </div>
                
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Subject *</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pharmaceutical-500 focus:border-transparent"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Message *</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pharmaceutical-500 focus:border-transparent"
                    required
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-pharmaceutical-600 hover:bg-pharmaceutical-700 text-white px-8 py-4 rounded-lg font-bold text-lg transition-colors flex items-center justify-center space-x-2 disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
          
          {/* Contact Information */}
          <div className="space-y-6">
            {contactInfo.map((info, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-pharmaceutical-100 rounded-lg flex items-center justify-center mr-4">
                    <info.icon className="w-6 h-6 text-pharmaceutical-600" />
                  </div>
                  <h4 className="text-lg font-bold text-gray-900">{info.title}</h4>
                </div>
                <div className="space-y-2">
                  {info.details.map((detail, detailIndex) => (
                    <p key={detailIndex} className="text-gray-600">{detail}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Contacts */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-8">
            Quick Contacts
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {quickContacts.map((contact, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
                <div className="w-16 h-16 bg-pharmaceutical-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <User className="w-8 h-8 text-pharmaceutical-600" />
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">{contact.title}</h4>
                <p className="text-pharmaceutical-600 font-medium mb-3">{contact.name}</p>
                <div className="space-y-2 text-sm">
                  <a href={`mailto:${contact.email}`} className="block text-gray-600 hover:text-pharmaceutical-600">
                    {contact.email}
                  </a>
                  <a href={`tel:${contact.phone}`} className="block text-gray-600 hover:text-pharmaceutical-600">
                    {contact.phone}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Map and Directions */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="grid lg:grid-cols-2">
            <div className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Venue Location & Directions
              </h3>
              
              <div className="space-y-4 mb-6">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-pharmaceutical-600 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-gray-900">India Expo Centre</p>
                    <p className="text-gray-600">Plot No. 1, Knowledge Park II, Greater Noida, Delhi NCR</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Calendar className="w-5 h-5 text-pharmaceutical-600 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-gray-900">Conference Dates</p>
                    <p className="text-gray-600">February 15-17, 2025</p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-3">
                <h4 className="font-bold text-gray-900">Getting There:</h4>
                <ul className="space-y-2 text-gray-600">
                  <li>• Metro: Pari Chowk Station (Blue Line Extension)</li>
                  <li>• Airport: 45 km from Indira Gandhi International Airport</li>
                  <li>• Railway: 20 km from New Delhi Railway Station</li>
                  <li>• Road: Well connected via Yamuna Expressway</li>
                </ul>
              </div>
              
              <button className="mt-6 bg-pharmaceutical-600 hover:bg-pharmaceutical-700 text-white px-6 py-3 rounded-lg font-medium transition-colors">
                Get Detailed Directions
              </button>
            </div>
            
            <div className="h-96 lg:h-auto bg-gray-200 flex items-center justify-center">
              {/* Placeholder for map */}
              <div className="text-center text-gray-500">
                <MapPin className="w-16 h-16 mx-auto mb-4" />
                <p className="font-medium">Interactive Map</p>
                <p className="text-sm">India Expo Centre, Greater Noida</p>
              </div>
            </div>
          </div>
        </div>

        {/* Emergency Contact */}
        <div className="mt-16 bg-gradient-to-br from-pharmaceutical-500 to-primary-600 rounded-2xl p-8 text-white text-center">
          <MessageSquare className="w-12 h-12 mx-auto mb-4" />
          <h3 className="text-2xl font-bold mb-4">
            Need Immediate Assistance?
          </h3>
          <p className="text-white/90 mb-6">
            Our support team is available 24/7 during the conference period
          </p>
          <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-6 justify-center">
            <a
              href="tel:+911234567890"
              className="bg-white text-pharmaceutical-600 px-6 py-3 rounded-full font-bold hover:bg-gray-100 transition-colors"
            >
              Call Emergency Helpline
            </a>
            <a
              href="https://wa.me/911234567890"
              className="border-2 border-white text-white px-6 py-3 rounded-full font-bold hover:bg-white hover:text-pharmaceutical-600 transition-colors"
            >
              WhatsApp Support
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact