"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Calendar, MapPin, Users, ChevronDown } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<number | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navigation = [
    { name: "Home", href: "/" },
    {
      name: "About IPCA",
      href: "/about-ipca",
      submenu: [
        { name: "About IPCA", href: "/about-ipca" },
        { name: "About APTI", href: "/about-apti" },
        { name: "President's Message", href: "/president-message" },
        { name: "About Theme", href: "/about-theme" },
        { name: "Key Focus Areas", href: "/key-focus-areas" },
        { name: "Expected Outcomes", href: "/expected-outcomes" },
      ],
    },

    { name: "Speakers", href: "/speakers" },
    { name: "Schedule", href: "/schedule" },
    { name: "Scientific", href: "/scientific" },
    {
      name: "Services",
      href: "#",
      submenu: [
        { name: "Registration", href: "/registration" },
        { name: "Sponsorship", href: "/sponsorship" },
        { name: "Accommodation", href: "/accommodation" },
        { name: "Places to Visit", href: "/places-to-visit" },
      ],
    },
    { name: "Contact", href: "/contact" },
  ];

  const handleDropdownToggle = (index: number) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/95 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-to-br from-pharmaceutical-500 to-primary-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">74</span>
            </div>
            <div className="hidden md:block">
              <h1
                className={`font-bold text-lg ${
                  isScrolled ? "text-gray-900" : "text-white"
                }`}
              >
                74th IPC 2025
              </h1>
              <p
                className={`text-sm ${
                  isScrolled ? "text-gray-600" : "text-white/80"
                }`}
              >
                Indian Pharmaceutical Congress
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-8">
            {navigation.map((item, index) => (
              <div key={item.name} className="relative">
                {item.submenu ? (
                  <div
                    className="group"
                    onMouseEnter={() => setActiveDropdown(index)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <button
                      className={`flex items-center space-x-1 font-medium transition-colors hover:text-pharmaceutical-500 ${
                        isScrolled ? "text-gray-700" : "text-white"
                      }`}
                    >
                      <span>{item.name}</span>
                      <ChevronDown className="w-4 h-4" />
                    </button>
                    {activeDropdown === index && (
                      <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
                        {item.submenu.map((subItem) => (
                          <Link
                            key={subItem.name}
                            href={subItem.href}
                            className="block px-4 py-2 text-gray-700 hover:bg-pharmaceutical-50 hover:text-pharmaceutical-600 transition-colors"
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <a
                    href={item.href}
                    className={`font-medium transition-colors hover:text-pharmaceutical-500 ${
                      isScrolled ? "text-gray-700" : "text-white"
                    }`}
                  >
                    {item.name}
                  </a>
                )}
              </div>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
            <div
              className={`text-sm ${
                isScrolled ? "text-gray-600" : "text-white/80"
              }`}
            >
              <div className="flex items-center space-x-1">
                <Calendar className="w-4 h-4" />
                <span>Dec 19-21, 2025</span>
              </div>
            </div>
            <Link
              href="/registration"
              className="bg-pharmaceutical-600 hover:bg-pharmaceutical-700 text-white px-6 py-2 rounded-full font-medium transition-colors"
            >
              Register Now
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`lg:hidden p-2 rounded-lg ${
              isScrolled ? "text-gray-700" : "text-white"
            }`}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white/95 backdrop-blur-md rounded-lg mt-2 p-4 shadow-lg">
            <nav className="space-y-3">
              {navigation.map((item, index) => (
                <div key={item.name}>
                  {item.submenu ? (
                    <div>
                      <button
                        className="flex items-center justify-between w-full text-gray-700 font-medium hover:text-pharmaceutical-500 transition-colors"
                        onClick={() => handleDropdownToggle(index)}
                      >
                        <span>{item.name}</span>
                        <ChevronDown
                          className={`w-4 h-4 transition-transform ${
                            activeDropdown === index ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                      {activeDropdown === index && (
                        <div className="mt-2 ml-4 space-y-2">
                          {item.submenu.map((subItem) => (
                            <Link
                              key={subItem.name}
                              href={subItem.href}
                              className="block text-gray-600 hover:text-pharmaceutical-500 transition-colors"
                              onClick={() => setIsMenuOpen(false)}
                            >
                              {subItem.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <a
                      href={item.href}
                      className="block text-gray-700 font-medium hover:text-pharmaceutical-500 transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </a>
                  )}
                </div>
              ))}
            </nav>
            <div className="mt-4 pt-4 border-t border-gray-200">
              <div className="text-sm text-gray-600 mb-3">
                <div className="flex items-center space-x-1 mb-1">
                  <Calendar className="w-4 h-4" />
                  <span>Dec 19-21, 2025</span>
                </div>
                <div className="flex items-center space-x-1">
                  <MapPin className="w-4 h-4" />
                  <span>Bangalore, India</span>
                </div>
              </div>
              <Link
                href="/registration"
                className="block w-full text-center bg-pharmaceutical-600 hover:bg-pharmaceutical-700 text-white px-4 py-2 rounded-lg font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Register Now
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
