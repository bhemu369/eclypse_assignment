import React from 'react';
import imgShow1 from '../assets/img_show_1.jpg';
import imgShow2 from '../assets/img_show_2.jpg';
import imgShow3 from '../assets/img_show_3.jpg';
import brandLogo from '../assets/brand_logo.jpg';
import videoShow from '../assets/video_show.mp4';

const MediaGrid: React.FC = () => {
  return (
    <section className="bg-black text-white px-4 sm:px-6 md:px-8 lg:px-12 xl:px-24 py-8 sm:py-12 md:py-16">
      <div className="max-w-7xl mx-auto">
        {/* Media Grid */}
        <div className="mb-8 sm:mb-12">
          {/* Mobile Layout (< md) */}
          <div className="md:hidden space-y-4">
            {/* Large Video - Full Width */}
            <div className="w-full">
              <div className="relative w-full h-64 sm:h-80 rounded-xl overflow-hidden">
                <video 
                  className="w-full h-full object-cover"
                  autoPlay 
                  muted 
                  loop 
                  playsInline
                >
                  <source src={videoShow} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>

            {/* Grid of Images - 3 columns on mobile */}
            <div className="grid grid-cols-3 gap-3 sm:gap-4">
              {/* Hand Detail */}
              <div className="relative w-full aspect-square rounded-lg overflow-hidden group cursor-pointer">
                <img 
                  src={imgShow1} 
                  alt="Hand detail with red fabric" 
                  className="w-full h-full object-cover transition-all duration-300 group-hover:scale-105 group-hover:brightness-50"
                />
                <div className="absolute inset-0 flex items-end justify-start opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  <p className="text-white text-xs sm:text-sm font-bold p-2 sm:p-3 leading-tight">
                    Premium wool blend
                  </p>
                </div>
              </div>

              {/* Fashion Model */}
              <div className="relative w-full aspect-square rounded-lg overflow-hidden group cursor-pointer">
                <img 
                  src={imgShow2} 
                  alt="Fashion model in red outfit" 
                  className="w-full h-full object-cover transition-all duration-300 group-hover:scale-105 group-hover:brightness-50"
                />
                <div className="absolute inset-0 flex items-end justify-start opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  <p className="text-white text-xs sm:text-sm font-bold p-2 sm:p-3 leading-tight">
                    Discreet side pockets
                  </p>
                </div>
              </div>

              {/* Fabric Detail */}
              <div className="relative w-full aspect-square rounded-lg overflow-hidden group cursor-pointer">
                <img 
                  src={imgShow3} 
                  alt="Red fabric detail" 
                  className="w-full h-full object-cover transition-all duration-300 group-hover:scale-105 group-hover:brightness-50"
                />
                <div className="absolute inset-0 flex items-end justify-start opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  <p className="text-white text-xs sm:text-sm font-bold p-2 sm:p-3 leading-tight">
                    Hand-cut assembly
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Desktop Layout (md and up) */}
          <div className="hidden md:grid md:grid-cols-3 md:grid-rows-2 gap-4 lg:gap-6 h-[600px] lg:h-[800px]">
            {/* Top Left - Large Video (spans 2 columns) */}
            <div className="col-span-2 row-start-1">
              <div className="relative w-full h-full rounded-xl lg:rounded-2xl overflow-hidden">
                <video 
                  className="w-full h-full object-cover"
                  autoPlay 
                  muted 
                  loop 
                  playsInline
                >
                  <source src={videoShow} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>

            {/* Top Right - Hand Detail */}
            <div className="col-start-3 row-start-1">
              <div className="relative w-full h-full rounded-xl lg:rounded-2xl overflow-hidden group cursor-pointer">
                <img 
                  src={imgShow1} 
                  alt="Hand detail with red fabric" 
                  className="w-full h-full object-cover transition-all duration-300 group-hover:scale-105 group-hover:brightness-50"
                />
                <div className="absolute inset-0 flex items-end justify-start opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  <p className="text-white text-lg lg:text-2xl font-bold p-4 lg:p-6 leading-tight">
                    Premium wool blend in signature vermilion
                  </p>
                </div>
              </div>
            </div>

            {/* Bottom Left - Fashion Model */}
            <div className="col-start-1 row-start-2">
              <div className="relative w-full h-full rounded-xl lg:rounded-2xl overflow-hidden group cursor-pointer">
                <img 
                  src={imgShow2} 
                  alt="Fashion model in red outfit" 
                  className="w-full h-full object-cover transition-all duration-300 group-hover:scale-105 group-hover:brightness-50"
                />
                <div className="absolute inset-0 flex items-end justify-start opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  <p className="text-white text-lg lg:text-2xl font-bold p-4 lg:p-6 leading-tight">
                    Discreet side pockets with clean finish
                  </p>
                </div>
              </div>
            </div>

            {/* Bottom Center - Fabric Detail */}
            <div className="col-start-2 row-start-2">
              <div className="relative w-full h-full rounded-xl lg:rounded-2xl overflow-hidden group cursor-pointer">
                <img 
                  src={imgShow3} 
                  alt="Red fabric detail" 
                  className="w-full h-full object-cover transition-all duration-300 group-hover:scale-105 group-hover:brightness-50"
                />
                <div className="absolute inset-0 flex items-end justify-start opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  <p className="text-white text-lg lg:text-2xl font-bold p-4 lg:p-6 leading-tight">
                    Hand-cut and assembled in small batches
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column - Brand Logo */}
            <div className="col-start-3 row-start-2">
              <div className="relative w-full h-full rounded-xl lg:rounded-2xl overflow-hidden bg-black flex items-center justify-center group cursor-pointer">
                <img 
                  src={brandLogo} 
                  alt="Eclypse brand logo" 
                  className="object-contain filter transition-all duration-300 group-hover:scale-110 group-hover:brightness-50"
                />
                <div className="absolute inset-0 flex items-end justify-start opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  <p className="text-white text-lg lg:text-2xl font-bold p-4 lg:p-6 leading-tight">
                    Eclypse
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Title */}
        <div className="my-15 sm:mt-22 md:mt-40">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light">
            Silhouette No. 1 – Vermilion
          </h2>
        </div>
      </div>
    </section>
  );
};

export default MediaGrid; 