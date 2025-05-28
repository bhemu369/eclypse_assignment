import React, { useState } from 'react';
import productImg1 from '../assets/product/product_img_1.jpg';
import productImg2 from '../assets/product/product_img_2.jpg';
import productImg3 from '../assets/product/product_img_3.jpg';
import productVid from '../assets/product/product_vid.mp4';
import Checkout from './Checkout';

const ProductDetail: React.FC = () => {
  const [selectedSize, setSelectedSize] = useState<string>('');
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);

  const sizes = ['XS', 'S', 'M', 'L', 'XL'];

  const handleBuyClick = () => {
    setIsCheckoutOpen(true);
  };

  const handleCloseCheckout = () => {
    setIsCheckoutOpen(false);
  };

  return (
    <>
      <section className="bg-white text-black min-h-screen">
        <div className="mx-auto">
          {/* Mobile Layout */}
          <div className="lg:hidden">
            {/* Product Video - Full Width */}
            <div className="relative w-full">
              <div className="aspect-[3/4] w-full overflow-hidden">
                <video 
                  className="w-full h-full object-cover"
                  autoPlay 
                  muted 
                  loop 
                  playsInline
                >
                  <source src={productVid} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>

            {/* Product Details - Mobile */}
            <div className="px-4 sm:px-6 py-6 sm:py-8 space-y-6">
              {/* Product Images Grid */}
              <div className="grid grid-cols-3 gap-3 sm:gap-4">
                <div className="aspect-square rounded-lg overflow-hidden bg-gray-100">
                  <img 
                    src={productImg1} 
                    alt="Front view" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="aspect-square rounded-lg overflow-hidden bg-gray-100">
                  <img 
                    src={productImg2} 
                    alt="Side view" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="aspect-square rounded-lg overflow-hidden bg-gray-100">
                  <img 
                    src={productImg3} 
                    alt="Detail view" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Price */}
              <div className="space-y-1">
                <div className="flex items-baseline space-x-2">
                  <span className="text-2xl sm:text-3xl font-light">₹7,999</span>
                  <span className="text-sm text-gray-500">MRP incl. of all taxes</span>
                </div>
              </div>

              {/* Size Selection */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-base sm:text-lg font-medium text-gray-600">Please select a size</h3>
                  <button className="text-sm text-gray-500 underline hover:text-gray-700">
                    Size chart
                  </button>
                </div>
                
                <div className="grid grid-cols-5 gap-2 sm:gap-3">
                  {sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`
                        py-3 px-3 sm:px-4 rounded-lg border text-center font-medium transition-colors duration-200 text-sm sm:text-base
                        ${selectedSize === size 
                          ? 'border-black bg-black text-white' 
                          : 'border-gray-300 bg-gray-100 text-gray-700 hover:border-gray-400'
                        }
                      `}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Action Buttons - Mobile */}
              <div className="space-y-3 pt-4">
                <button 
                  onClick={handleBuyClick}
                  className="w-full py-4 px-6 rounded-lg bg-black text-white font-medium hover:bg-gray-800 transition-colors duration-200 text-base sm:text-lg"
                >
                  Buy
                </button>
                <button className="w-full py-4 px-6 rounded-lg border border-gray-300 text-black font-medium hover:bg-gray-50 transition-colors duration-200 text-base sm:text-lg">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>

          {/* Desktop Layout */}
          <div className="hidden lg:grid lg:grid-cols-2 gap-16 pr-12">
            {/* Left Side - Product Video */}
            <div className="relative">
              <div className="aspect-[3/4] w-full max-h-screen overflow-hidden">
                <video 
                  className="w-full h-full object-cover"
                  autoPlay 
                  muted 
                  loop 
                  playsInline
                >
                  <source src={productVid} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>

            {/* Right Side - Product Details */}
            <div className="flex flex-col justify-start py-16 space-y-8">
              {/* Product Description */}
              <div className="space-y-6">
                <p className="text-lg leading-relaxed">
                  A tailored composition in motion. Cut from structured wool with a sculpted 
                  shoulder and softened hem, this piece captures presence without force. Worn 
                  here in the stillness of a city in motion.
                </p>
              </div>

              {/* Product Images Grid */}
              <div className="grid grid-cols-3 gap-4">
                <div className="aspect-square rounded-lg overflow-hidden bg-gray-100">
                  <img 
                    src={productImg1} 
                    alt="Front view" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="aspect-square rounded-lg overflow-hidden bg-gray-100">
                  <img 
                    src={productImg2} 
                    alt="Side view" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="aspect-square rounded-lg overflow-hidden bg-gray-100">
                  <img 
                    src={productImg3} 
                    alt="Detail view" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Price */}
              <div className="space-y-2">
                <div className="flex items-baseline space-x-2">
                  <span className="text-3xl font-light">₹7,999</span>
                  <span className="text-sm text-gray-500">MRP incl. of all taxes</span>
                </div>
              </div>

              {/* Size Selection */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-medium text-gray-600">Please select a size</h3>
                  <button className="text-sm text-gray-500 underline hover:text-gray-700">
                    Size chart
                  </button>
                </div>
                
                <div className="grid grid-cols-5 gap-3">
                  {sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`
                        py-3 px-4 rounded-lg border text-center font-medium transition-colors duration-200
                        ${selectedSize === size 
                          ? 'border-black bg-black text-white' 
                          : 'border-gray-300 bg-gray-100 text-gray-700 hover:border-gray-400'
                        }
                      `}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="grid grid-cols-2 gap-4 pt-8">
                <button className="py-4 px-6 rounded-lg border border-gray-300 text-black font-medium hover:bg-gray-50 transition-colors duration-200">
                  Add to Cart
                </button>
                <button 
                  onClick={handleBuyClick}
                  className="py-4 px-6 rounded-lg bg-black text-white font-medium hover:bg-gray-800 transition-colors duration-200"
                >
                  Buy
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Checkout Modal */}
      <Checkout isOpen={isCheckoutOpen} onClose={handleCloseCheckout} />
    </>
  );
};

export default ProductDetail; 