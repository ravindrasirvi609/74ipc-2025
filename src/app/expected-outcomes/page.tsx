"use client";

import {
  Target,
  Users,
  Lightbulb,
  TrendingUp,
  Award,
  BookOpen,
  Network,
  Rocket,
  CheckCircle,
  ArrowRight,
  Globe,
  Building,
} from "lucide-react";
import Link from "next/link";

const ExpectedOutcomes = () => {
  const immediateOutcomes = [
    {
      icon: Users,
      title: "Enhanced Professional Networks",
      description:
        "5000+ pharmaceutical professionals connecting and collaborating",
      metrics: [
        "300+ new partnerships",
        "150+ mentor-mentee connections",
        "50+ startup collaborations",
      ],
    },
    {
      icon: BookOpen,
      title: "Knowledge Transfer",
      description:
        "Comprehensive learning across AI and technology applications",
      metrics: [
        "100+ technical presentations",
        "25+ workshop certifications",
        "15+ training modules",
      ],
    },
    {
      icon: Lightbulb,
      title: "Innovation Showcase",
      description: "Platform for breakthrough technologies and solutions",
      metrics: [
        "200+ innovation displays",
        "50+ startup pitches",
        "25+ technology demos",
      ],
    },
    {
      icon: Award,
      title: "Recognition & Awards",
      description: "Celebrating excellence in pharmaceutical innovation",
      metrics: [
        "20+ award categories",
        "100+ nominations",
        "Industry recognition",
      ],
    },
  ];

  const shortTermOutcomes = [
    {
      icon: Rocket,
      title: "Technology Adoption Acceleration",
      description:
        "Faster implementation of AI and digital technologies in participating organizations",
      timeline: "3-6 months",
      impact: "40% increase in technology adoption rate",
    },
    {
      icon: Network,
      title: "Collaborative Research Projects",
      description:
        "New research initiatives emerging from congress connections",
      timeline: "6-12 months",
      impact: "50+ new research collaborations",
    },
    {
      icon: Building,
      title: "Startup Ecosystem Growth",
      description:
        "Strengthened pharmaceutical startup and innovation ecosystem",
      timeline: "6-18 months",
      impact: "25+ new pharmaceutical startups launched",
    },
    {
      icon: Globe,
      title: "Policy & Regulatory Influence",
      description:
        "Informed policy recommendations for AI in pharmaceutical regulation",
      timeline: "12-18 months",
      impact: "3+ policy white papers published",
    },
  ];

  const longTermImpacts = [
    {
      title: "Industry Transformation",
      description:
        "Fundamental shift toward AI-driven pharmaceutical operations",
      metrics: [
        "30% reduction in drug development timelines",
        "50% improvement in clinical trial efficiency",
        "40% increase in personalized medicine adoption",
      ],
    },
    {
      title: "Workforce Evolution",
      description:
        "Skilled pharmaceutical workforce equipped for the digital age",
      metrics: [
        "10,000+ professionals trained in AI/ML",
        "200+ new digital pharma job roles created",
        "15+ specialized certification programs established",
      ],
    },
    {
      title: "Patient Impact",
      description:
        "Improved healthcare outcomes through technological advancement",
      metrics: [
        "25% improvement in treatment efficacy",
        "20% reduction in adverse drug reactions",
        "Enhanced access to personalized therapies",
      ],
    },
    {
      title: "Global Leadership",
      description:
        "India emerging as a leader in pharmaceutical technology innovation",
      metrics: [
        "Top 3 global ranking in pharma innovation",
        "50+ international technology partnerships",
        "100+ patents in pharmaceutical AI applications",
      ],
    },
  ];

  const keyDeliverables = [
    {
      title: "IPCA 2025 White Paper",
      description:
        "Comprehensive report on AI and technology trends in pharmaceutical industry",
      icon: BookOpen,
    },
    {
      title: "Technology Adoption Framework",
      description:
        "Practical guidelines for implementing AI solutions in pharmaceutical organizations",
      icon: Target,
    },
    {
      title: "Innovation Directory",
      description:
        "Curated database of pharmaceutical AI solutions and service providers",
      icon: Network,
    },
    {
      title: "Best Practices Playbook",
      description:
        "Collection of successful AI implementation case studies and lessons learned",
      icon: Award,
    },
    {
      title: "Professional Development Pathways",
      description:
        "Career advancement frameworks for pharmaceutical professionals in the digital age",
      icon: TrendingUp,
    },
    {
      title: "Research Collaboration Platform",
      description:
        "Digital platform to facilitate ongoing research partnerships and knowledge sharing",
      icon: Users,
    },
  ];

  const successMetrics = [
    {
      metric: "90%",
      label: "Participant Satisfaction",
      description: "Overall congress experience rating",
    },
    {
      metric: "85%",
      label: "Knowledge Application",
      description: "Participants applying learned concepts",
    },
    {
      metric: "75%",
      label: "Network Expansion",
      description: "New professional connections made",
    },
    {
      metric: "95%",
      label: "Recommendation Rate",
      description: "Would recommend to colleagues",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-pharmaceutical-600 to-primary-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Expected <span className="text-pharmaceutical-200">Outcomes</span>
          </h1>
          <p className="text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed">
            Transformative impact across immediate, short-term, and long-term
            horizons
          </p>
        </div>
      </section>

      {/* Success Metrics */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            Congress Success Metrics
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {successMetrics.map((item, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-pharmaceutical-600 mb-2">
                  {item.metric}
                </div>
                <div className="text-lg font-semibold text-gray-900 mb-2">
                  {item.label}
                </div>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Immediate Outcomes */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            Immediate Outcomes
            <span className="block text-lg font-normal text-gray-600 mt-2">
              December 19-21, 2025
            </span>
          </h2>
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {immediateOutcomes.map((outcome, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="flex items-start space-x-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-pharmaceutical-500 to-primary-600 rounded-lg flex items-center justify-center">
                    <outcome.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {outcome.title}
                    </h3>
                    <p className="text-gray-600">{outcome.description}</p>
                  </div>
                </div>
                <div className="space-y-2">
                  {outcome.metrics.map((metric, metricIndex) => (
                    <div
                      key={metricIndex}
                      className="flex items-center space-x-3"
                    >
                      <CheckCircle className="w-5 h-5 text-primary-500" />
                      <span className="text-gray-600">{metric}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Short-term Outcomes */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            Short-term Outcomes
            <span className="block text-lg font-normal text-gray-600 mt-2">
              3-18 months post-congress
            </span>
          </h2>
          <div className="grid lg:grid-cols-2 gap-8">
            {shortTermOutcomes.map((outcome, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 border border-gray-200"
              >
                <div className="flex items-start space-x-4 mb-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-pharmaceutical-400 to-primary-500 rounded-lg flex items-center justify-center">
                    <outcome.icon className="w-7 h-7 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {outcome.title}
                    </h3>
                    <p className="text-gray-600 mb-4">{outcome.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-semibold text-pharmaceutical-600 bg-pharmaceutical-50 px-3 py-1 rounded-full">
                        {outcome.timeline}
                      </span>
                      <span className="text-sm font-medium text-primary-600">
                        {outcome.impact}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Long-term Impact */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            Long-term Industry Impact
            <span className="block text-lg font-normal text-gray-600 mt-2">
              2-5 years and beyond
            </span>
          </h2>
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {longTermImpacts.map((impact, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg border-l-4 border-pharmaceutical-500"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {impact.title}
                </h3>
                <p className="text-gray-600 mb-6">{impact.description}</p>
                <div className="space-y-3">
                  {impact.metrics.map((metric, metricIndex) => (
                    <div
                      key={metricIndex}
                      className="flex items-center space-x-3"
                    >
                      <ArrowRight className="w-5 h-5 text-pharmaceutical-500" />
                      <span className="text-gray-700">{metric}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Deliverables */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            Key Deliverables
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {keyDeliverables.map((deliverable, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-pharmaceutical-50 to-primary-50 rounded-xl p-6 border border-pharmaceutical-100"
              >
                <deliverable.icon className="w-12 h-12 text-pharmaceutical-600 mb-4" />
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  {deliverable.title}
                </h3>
                <p className="text-gray-600">{deliverable.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center bg-gradient-to-r from-pharmaceutical-500 to-primary-600 rounded-2xl p-12 text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Be Part of This Transformation
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Join us in creating lasting impact for the pharmaceutical industry
              and healthcare at large. Your participation contributes to these
              transformative outcomes.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Link
                href="#registration"
                className="bg-white text-pharmaceutical-600 px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition-colors"
              >
                Register Today
              </Link>
              <Link
                href="/speakers"
                className="border-2 border-white text-white px-8 py-3 rounded-full font-bold hover:bg-white hover:text-pharmaceutical-600 transition-colors"
              >
                Meet the Contributors
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ExpectedOutcomes;
