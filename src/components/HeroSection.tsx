import React from 'react';
import heroVideo from '../assets/hero_video.mp4';

const HeroSection: React.FC = () => {
  return (
    <section className="bg-black text-white min-h-screen px-4 sm:px-6 md:px-8 lg:px-12 xl:px-24 py-8 sm:py-12 relative">
      <div className="max-w-7xl mx-auto">
        {/* Main Brand Title */}
        <div className="mb-8 sm:mb-12">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl xl:text-9xl font-light tracking-wide">
            Eclypse<span className="text-xs sm:text-sm align-top">®</span>
          </h1>
        </div>

        {/* Copyright positioned above video */}
        <div className="flex justify-end mb-3 sm:mb-4">
          <p className="text-xs sm:text-sm text-gray-400">© 2025</p>
        </div>

        {/* Hero Video Container */}
        <div className="relative mb-12 sm:mb-16">
          <div className="relative w-full h-64 sm:h-80 md:h-96 lg:h-[500px] xl:h-[600px] rounded-xl sm:rounded-2xl overflow-hidden">
            {/* Hero Video */}
            <video 
              className="w-full h-full object-cover"
              autoPlay 
              muted 
              loop 
              playsInline
            >
              <source src={heroVideo} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            
            {/* Text Overlay */}
            <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 md:bottom-8 md:right-8">
              <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-light leading-tight">
                A silhouette worth remembering
              </h2>
            </div>
          </div>
        </div>

        {/* Description Text */}
        <div className="max-w-full sm:max-w-2xl mb-8 sm:mb-12">
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-light leading-relaxed">
            Rooted in a philosophy of quiet luxury, our garments are designed to speak softly in cut, in movement, in presence.
          </p>
        </div>

        {/* Learn More Link */}
        <div className="mb-6 sm:mb-8">
          <a 
            href="#learn-more" 
            className="inline-flex items-center text-base sm:text-lg font-medium hover:text-gray-300 transition-colors duration-200 border-b border-white hover:border-gray-300 pb-1"
          >
            Learn more about Eclypse
            <svg 
              className="ml-2 w-4 h-4 sm:w-5 sm:h-5" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M17 8l4 4m0 0l-4 4m4-4H3" 
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection; 