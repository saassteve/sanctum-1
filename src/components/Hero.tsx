import React from 'react';

export default function Hero() {
  return (
    <section 
      className="h-screen flex items-center relative overflow-hidden pt-20 sm:pt-16"
      style={{
        backgroundImage: 'url("/sanctumbedroom.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Enhanced Gradient Overlay */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(to right, rgba(0, 10, 30, 0.92) 0%, rgba(0, 10, 30, 0.5) 60%, rgba(0, 10, 30, 0.1) 100%)'
        }}
      ></div>

      {/* Content Container - Left Aligned */}
      <div className="relative z-10 max-w-[90%] sm:max-w-[60%] pl-4 sm:pl-8 md:pl-12 lg:pl-16 xl:pl-24">
        {/* Small Label */}
        <div className="mb-4">
          <span className="inline-block px-4 py-2 text-xs font-semibold text-white/90 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full uppercase tracking-wider">
            UK Property Health Diagnostics
          </span>
        </div>

        {/* Main Headline */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight mb-6 sm:mb-8">
          Know Your Home's Health{' '}
          <span 
            className="bg-gradient-to-r from-[#002DFF] via-[#4D7FFF] to-[#80B3FF] bg-clip-text text-transparent"
          >
            Before You Buy
          </span>
        </h1>

        {/* Subheading */}
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 font-light leading-relaxed mb-8 sm:mb-10 max-w-2xl">
          The UK's first comprehensive home health survey service for property buyers. 
          Get your proprietary <span className="font-medium text-white">Sanctum Score</span> and 
          make informed decisions backed by scientific data.
        </p>

        {/* Key Benefits */}
        <div className="flex flex-wrap gap-4 mb-8 sm:mb-10">
          <div className="flex items-center space-x-2 text-white/90">
            <svg className="w-5 h-5 text-[#002DFF]" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="text-sm sm:text-base font-light">Pre-Purchase Survey</span>
          </div>
          <div className="flex items-center space-x-2 text-white/90">
            <svg className="w-5 h-5 text-[#002DFF]" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="text-sm sm:text-base font-light">48-Hour Results</span>
          </div>
          <div className="flex items-center space-x-2 text-white/90">
            <svg className="w-5 h-5 text-[#002DFF]" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="text-sm sm:text-base font-light">Proprietary Scoring</span>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
          <button className="group px-6 sm:px-8 md:px-10 py-4 sm:py-5 text-sm sm:text-base font-semibold text-white bg-gradient-to-r from-[#002DFF] to-[#0040FF] hover:from-[#0026CC] hover:to-[#0033DD] transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-xl rounded-sm relative overflow-hidden">
            <span className="relative z-10">BOOK YOUR HOME SURVEY</span>
            <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
          </button>
          <button className="px-6 sm:px-8 md:px-10 py-4 sm:py-5 text-sm sm:text-base font-semibold text-white border-2 border-white/80 hover:bg-white hover:text-[#002DFF] transition-all duration-300 rounded-sm backdrop-blur-sm">
            VIEW SAMPLE REPORT
          </button>
        </div>
      </div>
    </section>
  );
}