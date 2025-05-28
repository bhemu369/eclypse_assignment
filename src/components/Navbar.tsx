import React, { useState } from 'react';
import brandLogo from '../assets/brand_logo.jpg';
import Checkout from './Checkout';

const Navbar: React.FC = () => {
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleBuyClick = () => {
    setIsCheckoutOpen(true);
  };

  const handleCloseCheckout = () => {
    setIsCheckoutOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav className="text-white px-4 sm:px-8 md:px-16 lg:px-24 py-4 flex items-center justify-between relative sticky top-0 z-50 backdrop-blur-md" style={{ backgroundColor: "#00000096" }}>
        {/* Logo */}
        <div className="flex items-center">
          <div className="w-10 h-10 sm:w-12 sm:h-12 bg-black rounded-lg flex items-center justify-center shadow-lg overflow-hidden">
            <img 
              src={brandLogo} 
              alt="Eclypse Logo" 
              className="w-6 h-6 sm:w-8 sm:h-8 object-contain"
            />
          </div>
        </div>

        {/* Desktop Navigation Items - Right Side */}
        <div className="hidden lg:flex items-center space-x-8 xl:space-x-16">
          <a 
            href="#about" 
            className="text-white hover:text-gray-300 transition-colors duration-200 font-normal text-xl xl:text-2xl"
          >
            About Us
          </a>
          <a 
            href="#waitlist" 
            className="text-white hover:text-gray-300 transition-colors duration-200 font-normal text-xl xl:text-2xl"
          >
            Waitlist
          </a>
          <a 
            href="#cart" 
            className="text-white hover:text-gray-300 transition-colors duration-200 font-normal text-xl xl:text-2xl"
          >
            Cart
          </a>
          
          {/* Desktop Buy Button */}
          <button 
            onClick={handleBuyClick}
            className="bg-white text-black px-6 py-2 xl:px-8 xl:py-3 rounded-xl font-semibold text-xl xl:text-2xl hover:bg-gray-100 transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            Buy
          </button>
        </div>

        {/* Mobile Buy Button (visible on tablet and mobile) */}
        <div className="lg:hidden flex items-center space-x-4">
          <button 
            onClick={handleBuyClick}
            className="bg-white text-black px-4 py-2 sm:px-6 sm:py-2 rounded-lg font-semibold text-sm sm:text-base hover:bg-gray-100 transition-all duration-200 shadow-lg"
          >
            Buy
          </button>
          
          {/* Mobile Menu Button */}
          <button 
            onClick={toggleMobileMenu}
            className="text-white hover:text-gray-300 p-2"
            aria-label="Toggle mobile menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-40 backdrop-blur-md bg-opacity-50" onClick={closeMobileMenu}>
          <div className="fixed top-0 right-0 h-full w-64 sm:w-80 bg-black bg-opacity-95 backdrop-blur-md shadow-xl">
            <div className="flex flex-col p-6 pt-20 space-y-6">
              <a 
                href="#about" 
                onClick={closeMobileMenu}
                className="text-white hover:text-gray-300 transition-colors duration-200 font-normal text-xl py-3 border-b border-gray-700"
              >
                About Us
              </a>
              <a 
                href="#waitlist" 
                onClick={closeMobileMenu}
                className="text-white hover:text-gray-300 transition-colors duration-200 font-normal text-xl py-3 border-b border-gray-700"
              >
                Waitlist
              </a>
              <a 
                href="#cart" 
                onClick={closeMobileMenu}
                className="text-white hover:text-gray-300 transition-colors duration-200 font-normal text-xl py-3 border-b border-gray-700"
              >
                Cart
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Checkout Modal */}
      <Checkout isOpen={isCheckoutOpen} onClose={handleCloseCheckout} />
    </>
  );
};

export default Navbar; 