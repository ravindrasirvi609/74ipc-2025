import Link from "next/link";
import {
  Mail,
  Phone,
  MapPin,
  Twitter,
  Linkedin,
  Facebook,
  Instagram,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
          {/* About Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-pharmaceutical-500 to-primary-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">74</span>
              </div>
              <div>
                <h3 className="font-bold text-lg">74th IPC 2025</h3>
                <p className="text-gray-400 text-sm">
                  Indian Pharmaceutical Congress
                </p>
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              The premier pharmaceutical conference bringing together industry
              leaders, researchers, and innovators. Hosted by Association of
              Pharmaceutical Teachers of India (APTI) and organized by Indian
              Pharmaceutical Congress Association (IPCA).
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { name: "About IPCA", href: "/about-ipca" },
                { name: "President's Message", href: "/president-message" },
                { name: "Speakers", href: "/speakers" },
                { name: "Schedule", href: "/schedule" },
                { name: "Registration", href: "/registration" },
                { name: "Scientific", href: "/scientific" },
                { name: "Contact", href: "/contact" },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-pharmaceutical-400 transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Conference Details */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Conference Details</h4>
            <div className="space-y-3 text-sm text-gray-300">
              <div>
                <p className="font-medium text-white">Theme</p>
                <p className="italic">
                  "AI & Technology in Pharma: Educate, Innovate, Empower"
                </p>
              </div>
              <div>
                <p className="font-medium text-white">Expected Delegates</p>
                <p>12,000+ Professionals</p>
              </div>
              <div>
                <p className="font-medium text-white">Duration</p>
                <p>3 Full Days (Friday-Sunday)</p>
              </div>
              <div>
                <p className="font-medium text-white">Organized By</p>
                <p>IPCA & APTI</p>
              </div>
            </div>
          </div>

          {/* Contact & Venue Info */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Contact & Venue</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-pharmaceutical-400 mt-0.5 flex-shrink-0" />
                <div className="text-sm text-gray-300">
                  <p>Bangalore International Exhibition Centre (BIEC)</p>
                  <p>Bengaluru, Karnataka</p>
                  <p>India</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-pharmaceutical-400 flex-shrink-0" />
                <a
                  href="mailto:info@74ipc.com"
                  className="text-sm text-gray-300 hover:text-pharmaceutical-400 transition-colors"
                >
                  info@74ipc.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-pharmaceutical-400 flex-shrink-0" />
                <a
                  href="tel:+911234567890"
                  className="text-sm text-gray-300 hover:text-pharmaceutical-400 transition-colors"
                >
                  +91 123 456 7890
                </a>
              </div>
            </div>
          </div>

          {/* Important Dates */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Important Dates</h4>
            <div className="space-y-3 text-sm text-gray-300">
              <div>
                <p className="font-medium text-white">Abstract Submissions</p>
                <p>Until August 31, 2025</p>
              </div>
              <div>
                <p className="font-medium text-white">
                  Acceptance Communication
                </p>
                <p>September 15, 2025</p>
              </div>
              <div>
                <p className="font-medium text-white">
                  Super Saver Registration
                </p>
                <p>May 15 - July 14, 2025</p>
              </div>
              <div>
                <p className="font-medium text-white">Main Conference</p>
                <p>December 19-21, 2025</p>
              </div>
            </div>
          </div>
        </div>

        {/* Social Links & Bottom Section */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex space-x-6">
              {[
                {
                  icon: Twitter,
                  href: "https://x.com/aptiind",
                  label: "Twitter",
                },
                {
                  icon: Linkedin,
                  href: "https://www.linkedin.com/company/association-of-pharmaceutical-teachers-of-india/",
                  label: "LinkedIn",
                },
                {
                  icon: Facebook,
                  href: "https://www.facebook.com/share/16MCFCtkuZ/?mibextid=wwXIfr",
                  label: "Facebook",
                },
                {
                  icon: Instagram,
                  href: "https://www.instagram.com/aptiind?igsh=MWd5bXZkaGV3bW1mbw==",
                  label: "Instagram",
                },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="text-gray-400 hover:text-pharmaceutical-400 transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-6 h-6" />
                </a>
              ))}
            </div>
            <div className="text-center md:text-right">
              <p className="text-gray-400 text-sm">
                © 2025 74th Indian Pharmaceutical Congress. All rights reserved.
              </p>
              <div className="flex flex-wrap gap-x-4 gap-y-2 mt-2 text-xs text-gray-500">
                <Link
                  href="/privacy-policy"
                  className="hover:text-pharmaceutical-400 transition-colors"
                >
                  Privacy Policy
                </Link>
                <Link
                  href="/terms-of-service"
                  className="hover:text-pharmaceutical-400 transition-colors"
                >
                  Terms of Service
                </Link>
                <Link
                  href="/disclaimer"
                  className="hover:text-pharmaceutical-400 transition-colors"
                >
                  Disclaimer
                </Link>
                {/* <Link
                  href="/refund-cancellation"
                  className="hover:text-pharmaceutical-400 transition-colors"
                >
                  Refund & Cancellation
                </Link> */}
                <Link
                  href="/no-refund-policy"
                  className="hover:text-pharmaceutical-400 transition-colors"
                >
                  Refund & Cancellation
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
