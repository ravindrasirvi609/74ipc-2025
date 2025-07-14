import { MapPin, Award, Linkedin, Twitter } from 'lucide-react'

const Speakers = () => {
  const keynoteSpeekers = [
    {
      name: 'Dr. Rajesh Kumar',
      title: 'Director General, ICMR',
      image: '/api/placeholder/300/300',
      bio: 'Leading expert in pharmaceutical research and drug development with over 25 years of experience.',
      location: 'New Delhi, India',
      expertise: 'Drug Discovery & Development',
      linkedin: '#',
      twitter: '#'
    },
    {
      name: 'Prof. Sarah Chen',
      title: 'CEO, Global Pharma Solutions',
      image: '/api/placeholder/300/300',
      bio: 'Internationally recognized pharmaceutical executive and researcher specializing in personalized medicine.',
      location: 'Boston, USA',
      expertise: 'Personalized Medicine',
      linkedin: '#',
      twitter: '#'
    },
    {
      name: 'Dr. Priya Sharma',
      title: 'Head of Innovation, BioPharma India',
      image: '/api/placeholder/300/300',
      bio: 'Pioneer in biotechnology and pharmaceutical innovation with focus on emerging markets.',
      location: 'Mumbai, India',
      expertise: 'Biotechnology Innovation',
      linkedin: '#',
      twitter: '#'
    }
  ]

  const featuredSpeakers = [
    {
      name: 'Dr. Michael Thompson',
      title: 'Regulatory Affairs Director',
      company: 'FDA, USA',
      expertise: 'Regulatory Science'
    },
    {
      name: 'Dr. Anita Patel',
      title: 'Chief Scientific Officer',
      company: 'Cipla Limited',
      expertise: 'Generic Drug Development'
    },
    {
      name: 'Prof. James Wilson',
      title: 'Professor of Pharmacology',
      company: 'Oxford University',
      expertise: 'Clinical Pharmacology'
    },
    {
      name: 'Dr. Ravi Menon',
      title: 'VP, Research & Development',
      company: 'Sun Pharmaceutical',
      expertise: 'Formulation Science'
    },
    {
      name: 'Dr. Lisa Anderson',
      title: 'Director, Medical Affairs',
      company: 'Novartis',
      expertise: 'Medical Communications'
    },
    {
      name: 'Dr. Suresh Reddy',
      title: 'Head of Quality Assurance',
      company: "Dr. Reddy's Laboratories",
      expertise: 'Quality Management'
    }
  ]

  return (
    <section id="speakers" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Distinguished
            <span className="block text-pharmaceutical-600">Speakers</span>
          </h2>
          <p className="text-xl text-gray-600">
            Learn from world-renowned experts, industry leaders, and visionary researchers who are shaping the future of pharmaceutical sciences.
          </p>
        </div>

        {/* Keynote Speakers */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Keynote Speakers
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {keynoteSpeekers.map((speaker, index) => (
              <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 hover-lift">
                <div className="relative">
                  <div className="w-full h-64 bg-gradient-to-br from-pharmaceutical-100 to-primary-100 flex items-center justify-center">
                    <div className="w-32 h-32 bg-pharmaceutical-200 rounded-full flex items-center justify-center">
                      <span className="text-pharmaceutical-600 font-bold text-2xl">
                        {speaker.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                  </div>
                  <div className="absolute top-4 right-4 bg-yellow-400 text-yellow-900 px-3 py-1 rounded-full text-sm font-bold">
                    Keynote
                  </div>
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-bold text-gray-900 mb-2">{speaker.name}</h4>
                  <p className="text-pharmaceutical-600 font-medium mb-3">{speaker.title}</p>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">{speaker.bio}</p>
                  
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center text-gray-500">
                      <MapPin className="w-4 h-4 mr-2" />
                      {speaker.location}
                    </div>
                    <div className="flex items-center text-gray-500">
                      <Award className="w-4 h-4 mr-2" />
                      {speaker.expertise}
                    </div>
                  </div>

                  <div className="flex space-x-3 mt-4">
                    <a href={speaker.linkedin} className="text-pharmaceutical-600 hover:text-pharmaceutical-700">
                      <Linkedin className="w-5 h-5" />
                    </a>
                    <a href={speaker.twitter} className="text-pharmaceutical-600 hover:text-pharmaceutical-700">
                      <Twitter className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Featured Speakers */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Featured Speakers
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredSpeakers.map((speaker, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-start space-x-4">
                  <div className="w-16 h-16 bg-pharmaceutical-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-pharmaceutical-600 font-bold">
                      {speaker.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-lg font-bold text-gray-900 mb-1">{speaker.name}</h4>
                    <p className="text-pharmaceutical-600 font-medium text-sm mb-2">{speaker.title}</p>
                    <p className="text-gray-500 text-sm mb-2">{speaker.company}</p>
                    <span className="inline-block bg-pharmaceutical-100 text-pharmaceutical-700 px-2 py-1 rounded text-xs font-medium">
                      {speaker.expertise}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Speaker Stats */}
        <div className="bg-gradient-to-br from-pharmaceutical-500 to-primary-600 rounded-3xl p-8 md:p-12 text-white">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold mb-4">Speaker Diversity & Expertise</h3>
            <p className="text-white/90 text-lg">
              Our speakers represent the global pharmaceutical community
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: '200+', label: 'Total Speakers' },
              { number: '25+', label: 'Countries' },
              { number: '15+', label: 'Expertise Areas' },
              { number: '50+', label: 'Industry Leaders' }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-yellow-300 mb-2">{stat.number}</div>
                <div className="text-white/90">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Call for Speakers */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl p-8 shadow-lg inline-block">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Interested in Speaking?
            </h3>
            <p className="text-gray-600 mb-6">
              Submit your abstract and join our prestigious speaker lineup.
            </p>
            <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 justify-center">
              <button className="bg-pharmaceutical-600 hover:bg-pharmaceutical-700 text-white px-6 py-3 rounded-full font-medium transition-colors">
                Submit Abstract
              </button>
              <button className="border-2 border-pharmaceutical-600 text-pharmaceutical-600 hover:bg-pharmaceutical-600 hover:text-white px-6 py-3 rounded-full font-medium transition-colors">
                Speaker Guidelines
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Speakers