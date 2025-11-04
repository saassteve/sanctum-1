import React from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';

export default function FinalCTA() {
  return (
    <section className="py-24 bg-gradient-to-br from-sanctum-cyan-600 via-sanctum-cyan-500 to-sanctum-cyan-400 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute top-10 left-10 w-64 h-64 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-white rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        {/* Badge */}
        <div className="mb-6">
          <span className="inline-block px-4 py-2 text-xs font-semibold text-white bg-white/20 backdrop-blur-sm border border-white/30 rounded-full uppercase tracking-wider">
            Pre-Purchase Property Assessment
          </span>
        </div>

        {/* Headline */}
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight">
          <span className="text-white">Don't Buy Blind.</span>{' '}
          <span className="text-sanctum-cyan-200">Get Your Property's Sanctum Score.</span>
        </h2>
        
        {/* Subheading */}
        <p className="text-xl md:text-2xl text-white/90 font-light mb-12 max-w-3xl mx-auto leading-relaxed">
          Join UK property buyers who use measured environmental data to make
          informed decisions about property purchases.
        </p>

        {/* Key Benefits */}
        <div className="grid md:grid-cols-3 gap-6 mb-12 max-w-3xl mx-auto">
          <div className="flex items-center space-x-3 text-left bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
            <CheckCircle className="w-6 h-6 text-white flex-shrink-0" />
            <span className="text-sm font-medium text-white">Negotiate with confidence</span>
          </div>
          <div className="flex items-center space-x-3 text-left bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
            <CheckCircle className="w-6 h-6 text-white flex-shrink-0" />
            <span className="text-sm font-medium text-white">Plan accurate budgets</span>
          </div>
          <div className="flex items-center space-x-3 text-left bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
            <CheckCircle className="w-6 h-6 text-white flex-shrink-0" />
            <span className="text-sm font-medium text-white">Protect your family</span>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button className="group px-10 py-5 text-base font-bold text-sanctum-cyan-600 bg-white hover:bg-gray-50 transition-all duration-300 transform hover:scale-105 shadow-2xl rounded-md inline-flex items-center">
            <span>BOOK YOUR HOME SURVEY NOW</span>
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </button>
          <button className="px-10 py-5 text-base font-semibold text-white border-2 border-white hover:bg-white hover:text-sanctum-cyan-600 transition-all duration-300 rounded-md">
            VIEW SAMPLE REPORT
          </button>
        </div>

        {/* Trust Elements */}
        <div className="mt-12 pt-8 border-t border-white/20">
          <p className="text-sm text-white/80 mb-4">
            Used by property buyers across the UK
          </p>
          <div className="flex flex-wrap justify-center gap-8 text-white/70 text-xs">
            <div className="flex items-center space-x-2">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Lab-Grade Equipment</span>
            </div>
            <div className="flex items-center space-x-2">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>48-Hour Turnaround</span>
            </div>
            <div className="flex items-center space-x-2">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Proprietary Sanctum Score</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}