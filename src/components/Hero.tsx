import React from 'react';

export default function Hero() {
  return (
    <section 
      className="min-h-screen flex items-center relative overflow-hidden pt-24 pb-16 sm:pt-28 sm:pb-20 md:pt-32 md:pb-24"
      style={{
        backgroundImage: 'url("/sanctumbedroom.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Enhanced Gradient Overlay with subtle vignette */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse at left center, rgba(0, 10, 30, 0.88) 0%, rgba(0, 10, 30, 0.92) 40%, rgba(0, 10, 30, 0.7) 70%, rgba(0, 10, 30, 0.3) 100%)'
        }}
      ></div>

      {/* Subtle animated glow effect */}
      <div 
        className="absolute left-0 top-1/2 -translate-y-1/2 w-96 h-96 bg-[#002DFF]/10 rounded-full blur-3xl animate-pulse"
        style={{ animationDuration: '4s' }}
      ></div>

      {/* Content Container - Left Aligned with proper spacing */}
      <div className="relative z-10 max-w-[90%] sm:max-w-[65%] lg:max-w-[55%] px-6 sm:px-8 md:px-12 lg:px-16 xl:px-24">
        {/* Small Label with enhanced styling */}
        <div className="mb-6">
          <span className="inline-block px-5 py-2.5 text-xs font-semibold text-white/95 bg-white/10 backdrop-blur-md border border-white/30 rounded-full uppercase tracking-wider shadow-lg">
            UK Pre-Purchase Property Health Diagnostics
          </span>
        </div>

        {/* Main Headline with improved typography */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-[1.15] mb-6 sm:mb-8">
          Don't Buy Blind.{' '}
          <span 
            className="block mt-2 bg-gradient-to-r from-[#002DFF] via-[#4D7FFF] to-[#80B3FF] bg-clip-text text-transparent"
          >
            Know Your Home's True Health
          </span>
        </h1>

        {/* Subheading with better contrast */}
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/95 font-light leading-relaxed mb-8 sm:mb-10 max-w-2xl drop-shadow-sm">
          The UK's first comprehensive home health survey for property buyers. 
          Get your proprietary <span className="font-semibold text-white">Sanctum Score™</span> and 
          negotiate with confidence—backed by scientific data, delivered in 48 hours.
        </p>

        {/* Key Benefits with improved styling */}
        <div className="flex flex-wrap gap-3 sm:gap-4 mb-10 sm:mb-12">
          <div className="flex items-center space-x-2.5 px-4 py-2 bg-white/5 backdrop-blur-sm rounded-full border border-white/20">
            <svg className="w-5 h-5 text-[#4D7FFF]" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="text-sm sm:text-base font-light text-white/95">Pre-Purchase Assessment</span>
          </div>
          <div className="flex items-center space-x-2.5 px-4 py-2 bg-white/5 backdrop-blur-sm rounded-full border border-white/20">
            <svg className="w-5 h-5 text-[#4D7FFF]" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="text-sm sm:text-base font-light text-white/95">48-Hour Report</span>
          </div>
          <div className="flex items-center space-x-2.5 px-4 py-2 bg-white/5 backdrop-blur-sm rounded-full border border-white/20">
            <svg className="w-5 h-5 text-[#4D7FFF]" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="text-sm sm:text-base font-light text-white/95">Negotiation Leverage</span>
          </div>
        </div>

        {/* CTA Buttons with improved styling */}
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
          <button className="group relative px-8 sm:px-10 md:px-12 py-5 sm:py-6 text-sm sm:text-base font-semibold text-white bg-gradient-to-r from-[#002DFF] to-[#0040FF] hover:from-[#0026CC] hover:to-[#0033DD] transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-xl rounded-sm overflow-hidden">
            <span className="relative z-10 flex items-center justify-center space-x-2">
              <span>BOOK YOUR HOME SURVEY</span>
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
          </button>
          <button className="px-8 sm:px-10 md:px-12 py-5 sm:py-6 text-sm sm:text-base font-semibold text-white border-2 border-white/90 hover:bg-white hover:text-[#002DFF] transition-all duration-300 rounded-sm backdrop-blur-sm hover:shadow-lg">
            VIEW SAMPLE REPORT
          </button>
        </div>

        {/* Trust indicator */}
        <div className="mt-10 sm:mt-12 flex items-center space-x-2 text-white/80 text-sm">
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
          <span className="font-light">Trusted by property buyers across England, Scotland, and Wales</span>
        </div>
      </div>
    </section>
  );
}