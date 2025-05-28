import React, { useState, useEffect } from 'react';
import brandLogo from '../assets/brand_logo.jpg';

interface CheckoutProps {
  isOpen: boolean;
  onClose: () => void;
}

const Checkout: React.FC<CheckoutProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    streetAddress: '',
    aptNumber: '',
    state: '',
    zip: ''
  });

  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    // Cleanup function to restore scrolling when component unmounts
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSaveAddress = () => {
    // Handle save address logic
    console.log('Address saved:', formData);
  };

  const handlePlaceOrder = () => {
    // Handle place order logic
    console.log('Order placed');
    onClose();
  };

  const handleGoHome = () => {
    // Navigate to home page
    onClose();
    window.location.href = '/';
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-opacity-20 backdrop-blur-md z-50 flex items-center justify-center p-0 sm:p-4">
      <div className="bg-white/95 backdrop-blur-xl rounded-none sm:rounded-xl md:rounded-2xl max-w-7xl w-full h-full sm:min-h-[85vh] sm:max-h-[98vh] sm:h-auto overflow-y-auto shadow-2xl border-0 sm:border border-white/20">
        
        {/* Mobile Header */}
        <div className="md:hidden">
          {/* Top Navigation Bar with Logo and Menu */}
          <div className="flex items-center justify-between p-6 border-b border-gray-200">
            {/* Left: Brand Logo */}
            <div className="flex items-center">
              <button 
                onClick={handleGoHome}
                className="w-12 h-12 bg-black rounded-lg flex items-center justify-center shadow-lg overflow-hidden hover:bg-gray-800 transition-colors duration-200"
              >
                <img 
                  src={brandLogo} 
                  alt="Eclypse Logo" 
                  className="w-7 h-7 object-contain"
                />
              </button>
            </div>

            {/* Right: Navigation Items */}
            <div className="flex items-center space-x-6">
              <span className="text-gray-400 text-base">About Us</span>
              <span className="text-gray-400 text-base">Waitlist</span>
              <span className="text-black text-base font-medium border-b-2 border-black pb-1">Cart</span>
            </div>
          </div>

          {/* Shipping Address Header */}
          <div className="flex items-center space-x-3 p-6 border-b border-gray-200">
            <button 
              onClick={onClose}
              className="text-gray-600 hover:text-gray-800 p-1"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <h1 className="text-xl font-medium text-black">Shipping Address</h1>
          </div>
        </div>

        {/* Desktop Header */}
        <div className="hidden md:flex items-center justify-between p-6 border-b border-gray-200">
          <div className="flex items-center space-x-4">
            <button 
              onClick={onClose}
              className="text-gray-600 hover:text-gray-800 p-1"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <h1 className="text-2xl font-medium text-black">Shipping Address</h1>
          </div>
          
          {/* Desktop Navigation */}
          <div className="flex items-center space-x-8">
            <span className="text-gray-400 text-lg">About Us</span>
            <span className="text-gray-400 text-lg">Waitlist</span>
            <span className="text-black text-lg font-medium border-b-2 border-black">Cart</span>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="md:hidden p-4 sm:p-6 space-y-6">
          {/* Add New Address Section */}
          <div className="border border-gray-300 rounded-lg sm:rounded-xl p-4 sm:p-6">
            <div className="flex items-center space-x-3 mb-4 sm:mb-6">
              <div className="w-4 h-4 border-2 border-red-500 rounded-full flex items-center justify-center">
                <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              </div>
              <h2 className="text-lg sm:text-xl font-medium">Add New Address</h2>
            </div>

            <div className="space-y-4">
              {/* First Name & Last Name */}
              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className="w-full px-3 py-3 sm:px-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent text-sm sm:text-base"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className="w-full px-3 py-3 sm:px-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent text-sm sm:text-base"
                  />
                </div>
              </div>

              {/* Street Address */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Street Address
                </label>
                <input
                  type="text"
                  name="streetAddress"
                  value={formData.streetAddress}
                  onChange={handleInputChange}
                  className="w-full px-3 py-3 sm:px-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent text-sm sm:text-base"
                />
              </div>

              {/* Apt Number, State, Zip */}
              <div className="grid grid-cols-3 gap-2 sm:gap-3">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Apt Number
                  </label>
                  <input
                    type="text"
                    name="aptNumber"
                    value={formData.aptNumber}
                    onChange={handleInputChange}
                    className="w-full px-2 py-3 sm:px-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent text-sm"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    State
                  </label>
                  <input
                    type="text"
                    name="state"
                    value={formData.state}
                    onChange={handleInputChange}
                    className="w-full px-2 py-3 sm:px-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent text-sm"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Zip
                  </label>
                  <input
                    type="text"
                    name="zip"
                    value={formData.zip}
                    onChange={handleInputChange}
                    className="w-full px-2 py-3 sm:px-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent text-sm"
                  />
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-3 mt-6">
              <button
                onClick={handleSaveAddress}
                className="w-full bg-black text-white py-3 sm:py-4 rounded-lg text-base sm:text-lg font-medium hover:bg-gray-800 transition-colors duration-200"
              >
                Save This Address
              </button>
              <button
                onClick={onClose}
                className="w-full bg-gray-100 text-black py-3 sm:py-4 rounded-lg text-base sm:text-lg font-medium hover:bg-gray-200 transition-colors duration-200"
              >
                Cancel
              </button>
            </div>
          </div>

          {/* Privacy Notice */}
          <div className="text-sm sm:text-base text-gray-600 leading-relaxed p-4 bg-gray-50 rounded-lg">
            By placing your order, you agree to our company{' '}
            <span className="text-black font-semibold">Privacy policy</span> and{' '}
            <span className="text-black font-semibold">Conditions of use</span>.
          </div>

          {/* Order Summary */}
          <div className="space-y-4 sm:space-y-6">
            <h3 className="text-xl sm:text-2xl font-semibold text-black">Order Summary</h3>
            
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-gray-600 text-sm sm:text-base">Items - Silhouette No. 1 – Vermilion</span>
                <span className="font-medium text-sm sm:text-base text-black">7,999</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600 text-sm sm:text-base">Shipping and handling:</span>
                <span className="font-medium text-sm sm:text-base text-black">200</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600 text-sm sm:text-base">Before tax:</span>
                <span className="font-medium text-sm sm:text-base text-black">6,599</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600 text-sm sm:text-base">Tax Collected:</span>
                <span className="font-medium text-sm sm:text-base text-black">1,400</span>
              </div>
              
              <hr className="border-gray-400 my-4 sm:my-6" />
              
              <div className="flex justify-between items-center">
                <span className="text-black text-lg sm:text-xl font-semibold">Order Total:</span>
                <span className="text-black text-lg sm:text-xl font-semibold">8,199</span>
              </div>
            </div>
          </div>

          {/* Place Order Button */}
          <button
            onClick={handlePlaceOrder}
            className="w-full bg-black text-white py-4 sm:py-5 rounded-lg sm:rounded-xl text-lg sm:text-xl font-medium hover:bg-gray-800 transition-colors duration-200"
          >
            Place Order
          </button>
        </div>

        {/* Desktop Layout */}
        <div className="hidden md:grid md:grid-cols-2 gap-6 lg:gap-8 p-6">
          {/* Left Side - Shipping Form */}
          <div className="space-y-6">
            {/* Add New Address Section */}
            <div className="border border-gray-300 rounded-xl p-6">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-4 h-4 border-2 border-red-500 rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                </div>
                <h2 className="text-xl font-medium">Add New Address</h2>
              </div>

              <div className="space-y-4">
                {/* First Name & Last Name */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                    />
                  </div>
                </div>

                {/* Street Address */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Street Address
                  </label>
                  <input
                    type="text"
                    name="streetAddress"
                    value={formData.streetAddress}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                  />
                </div>

                {/* Apt Number, State, Zip */}
                <div className="grid grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Apt Number
                    </label>
                    <input
                      type="text"
                      name="aptNumber"
                      value={formData.aptNumber}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      State
                    </label>
                    <input
                      type="text"
                      name="state"
                      value={formData.state}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Zip
                    </label>
                    <input
                      type="text"
                      name="zip"
                      value={formData.zip}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                    />
                  </div>
                  </div>
                </div>

              {/* Save Address Button */}
                  <button
                    onClick={handleSaveAddress}
                className="w-full bg-black text-white py-4 rounded-xl text-lg font-medium hover:bg-gray-800 transition-colors duration-200 mt-6"
                  >
                    Save This Address
                  </button>
            </div>
          </div>

          {/* Right Side - Order Summary */}
          <div className="bg-gray-100 rounded-xl p-6 lg:p-8 space-y-6 lg:space-y-8">
            {/* Privacy Notice */}
            <div className="text-base text-gray-600 leading-relaxed pb-6 border-b border-gray-300">
              By placing your order, you agree to our company{' '}
              <span className="text-black font-semibold">Privacy policy</span> and{' '}
              <span className="text-black font-semibold">Conditions of use</span>.
            </div>

            {/* Order Summary */}
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-black mb-8">Order Summary</h3>
              
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600 text-lg">Items - Silhouette No. 1 – Vermilion</span>
                  <span className="font-medium text-lg text-black">7,999</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600 text-lg">Shipping and handling:</span>
                  <span className="font-medium text-lg text-black">200</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600 text-lg">Before tax:</span>
                  <span className="font-medium text-lg text-black">6,599</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600 text-lg">Tax Collected:</span>
                  <span className="font-medium text-lg text-black">1,400</span>
                </div>
                
                <hr className="border-gray-400 my-8" />
                
                <div className="flex justify-between items-center">
                  <span className="text-black text-2xl font-semibold">Order Total:</span>
                  <span className="text-black text-2xl font-semibold">8,199</span>
                </div>
              </div>
            </div>

            {/* Place Order Button */}
            <button
              onClick={handlePlaceOrder}
              className="w-full bg-black text-white py-5 rounded-2xl text-xl font-medium hover:bg-gray-800 transition-colors duration-200 mt-8"
            >
              Place Order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout; 