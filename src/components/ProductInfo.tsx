import React, { useState } from 'react';
import customer1 from '../assets/customer_1.jpg';
import customer2 from '../assets/customer_2.jpg';
import customer3 from '../assets/customer_3.jpg';

const ProductInfo: React.FC = () => {
  const [expandedSection, setExpandedSection] = useState<string | null>(null);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  const testimonials = [
    {
      quote: "Understated, but unforgettable. It feels like it was made for me",
      author: "Random Woman",
      location: "NY, USA",
      image: customer1
    },
    {
      quote: "The quality is exceptional and the fit is perfect. Worth every penny.",
      author: "Sarah Johnson",
      location: "CA, USA",
      image: customer2
    },
    {
      quote: "Elegant design that works for both professional and casual settings.",
      author: "Emma Davis",
      location: "London, UK",
      image: customer3
    }
  ];

  const sections = [
    {
      title: "Size & Fit",
      content: "Our garments are designed with a tailored fit. The blazer features a structured shoulder with a slightly relaxed silhouette. For the best fit, we recommend consulting our size chart. All measurements are taken flat and may vary slightly."
    },
    {
      title: "Delivery & Returns",
      content: "Free shipping on orders over ₹5,000. Standard delivery takes 3-5 business days. We offer hassle-free returns within 30 days of purchase. Items must be in original condition with tags attached."
    },
    {
      title: "How This Was Made",
      content: "Crafted from premium wool blend fabric sourced from Italian mills. Each piece is cut and assembled by skilled artisans in small batches. The structured shoulder is achieved through traditional tailoring techniques, while the softened hem adds modern comfort."
    }
  ];

  return (
    <section className="bg-black text-white py-16">
      <div className="max-w-6xl mx-auto px-6">
        {/* Expandable Sections */}
        <div className="space-y-0">
          {sections.map((section, index) => (
            <div key={section.title} className="border-b border-gray-800">
              <button
                onClick={() => toggleSection(section.title)}
                className="w-full flex items-center justify-between py-8 text-left hover:text-gray-300 transition-colors duration-200"
              >
                <h3 className="text-2xl font-light">{section.title}</h3>
                <svg
                  className={`w-6 h-6 transform transition-transform duration-200 ${
                    expandedSection === section.title ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              
              {expandedSection === section.title && (
                <div className="pb-8 pr-8">
                  <p className="text-gray-300 leading-relaxed text-lg">
                    {section.content}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Customer Testimonials */}
        <div className="mt-16 sm:mt-20 md:mt-24">
          <div className="mb-6 sm:mb-8">
            <p className="text-xs sm:text-sm text-gray-400 tracking-wider uppercase">
              OUR CUSTOMERS
            </p>
          </div>

          <div className="relative">
            {/* Mobile Layout */}
            <div className="lg:hidden">
              {/* Main Testimonial */}
              <div className="mb-8">
                <div className="mb-6 sm:mb-8">
                  <svg className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-gray-600 mb-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
                  </svg>
                  <blockquote className="text-xl sm:text-2xl md:text-3xl font-light leading-relaxed">
                    {testimonials[currentTestimonial].quote}
                  </blockquote>
                </div>
                
                <div className="space-y-1 mb-8">
                  <p className="text-lg sm:text-xl font-medium">
                    {testimonials[currentTestimonial].author}
                  </p>
                  <p className="text-sm sm:text-base text-gray-400">
                    {testimonials[currentTestimonial].location}
                  </p>
                </div>
              </div>

              {/* Profile Images - Horizontal on Mobile */}
              <div className="flex justify-center space-x-4">
                {testimonials.map((testimonial, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`rounded-full overflow-hidden border-2 transition-all duration-200 ${
                      index === currentTestimonial 
                        ? 'w-16 h-16 sm:w-20 sm:h-20 border-white scale-110' 
                        : 'w-12 h-12 sm:w-14 sm:h-14 border-gray-600 opacity-60 hover:opacity-80'
                    }`}
                  >
                    <img
                      src={testimonial.image}
                      alt={testimonial.author}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Desktop Layout */}
            <div className="hidden lg:flex items-start justify-between w-full">
              {/* Quote Section */}
              <div className="flex-1 max-w-4xl pr-16">
                <div className="mb-8">
                  <svg className="w-12 h-12 text-gray-600 mb-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
                  </svg>
                  <blockquote className="text-3xl md:text-4xl lg:text-5xl font-light leading-relaxed">
                    {testimonials[currentTestimonial].quote}
                  </blockquote>
                </div>
                
                <div className="space-y-1">
                  <p className="text-xl font-medium">
                    {testimonials[currentTestimonial].author}
                  </p>
                  <p className="text-gray-400">
                    {testimonials[currentTestimonial].location}
                  </p>
                </div>
              </div>

              {/* Right Side - Profile Images */}
              <div className="flex flex-col items-center space-y-6">
                {/* Profile Images - Vertical Stack */}
                <div className="flex flex-col space-y-4 items-center">
                  {testimonials.map((testimonial, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentTestimonial(index)}
                      className={`rounded-full overflow-hidden border-2 transition-all duration-200 ${
                        index === currentTestimonial 
                          ? 'w-20 h-20 border-white scale-110' 
                          : 'w-14 h-14 border-gray-600 opacity-60 hover:opacity-80'
                      }`}
                    >
                      <img
                        src={testimonial.image}
                        alt={testimonial.author}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductInfo; 