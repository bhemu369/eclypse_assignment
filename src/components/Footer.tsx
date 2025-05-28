import React from 'react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-black text-white border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Left Section - Brand and Navigation */}
          <div className="space-y-8">
            {/* Brand */}
            <div>
              <h2 className="text-2xl font-light">
                Eclypse<span className="text-sm align-top">®</span>
              </h2>
            </div>

            {/* Navigation Links */}
            <nav className="space-y-3">
              <a 
                href="#home" 
                className="block text-gray-300 hover:text-white transition-colors duration-200"
              >
                Home
              </a>
              <a 
                href="#about" 
                className="block text-gray-300 hover:text-white transition-colors duration-200"
              >
                About
              </a>
              <a 
                href="#buy" 
                className="block text-gray-300 hover:text-white transition-colors duration-200"
              >
                Buy
              </a>
              <a 
                href="#customers" 
                className="block text-gray-300 hover:text-white transition-colors duration-200"
              >
                Our Customers
              </a>
              <a 
                href="#contacts" 
                className="block text-gray-300 hover:text-white transition-colors duration-200"
              >
                Contacts
              </a>
            </nav>
          </div>

          {/* Middle Section - Contact Information */}
          <div className="space-y-8">
            {/* Contact */}
            <div>
              <h3 className="text-sm text-gray-400 tracking-wider uppercase mb-4">
                CONTACT
              </h3>
              <a 
                href="tel:+91123-456-7890" 
                className="text-lg text-white hover:text-gray-300 transition-colors duration-200"
              >
                +91123-456-7890
              </a>
            </div>

            {/* Email */}
            <div>
              <h3 className="text-sm text-gray-400 tracking-wider uppercase mb-4">
                EMAIL
              </h3>
              <a 
                href="mailto:eclypse@gmail.com" 
                className="text-lg text-white hover:text-gray-300 transition-colors duration-200"
              >
                eclypse@gmail.com
              </a>
            </div>
          </div>

          {/* Right Section - Scroll to Top and Copyright */}
          <div className="flex flex-col justify-between items-end">
            {/* Scroll to Top Button */}
            <button
              onClick={scrollToTop}
              className="w-12 h-12 bg-white text-black rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors duration-200 mb-8"
              aria-label="Scroll to top"
            >
              <svg 
                className="w-6 h-6" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M5 10l7-7m0 0l7 7m-7-7v18" 
                />
              </svg>
            </button>

            {/* Copyright */}
            <div className="text-right">
              <p className="text-sm text-gray-400">
                © Eclypse 2025
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 