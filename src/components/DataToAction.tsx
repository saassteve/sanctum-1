import React from 'react';
import { Calendar, Home, FileText, TrendingUp } from 'lucide-react';

export default function DataToAction() {
  return (
    <section id="blueprint" className="py-24 bg-gradient-to-b from-white to-[#F7F8FA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 mb-4">
            <span className="text-sm font-semibold text-sanctum-cyan-600 uppercase tracking-wider">Our Process</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-sanctum-cyan-600">How It</span>{' '}
            <span className="text-[#1A1A1A]">Works</span>
          </h2>
          <p className="text-xl md:text-2xl text-[#6B7280] font-light max-w-4xl mx-auto">
            From property viewing to Sanctum Score delivery, we make it simple
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Connection Lines - Desktop Only */}
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-sanctum-cyan-400/20 to-transparent" style={{ width: '85%', left: '7.5%' }}></div>

          {/* Step 1: Book Survey */}
          <div className="text-center relative">
            <div className="flex items-center justify-center mb-6">
              <div className="w-20 h-20 bg-gradient-to-br from-sanctum-cyan-500 to-sanctum-cyan-600 rounded-full flex items-center justify-center shadow-lg relative z-10">
                <Calendar className="w-10 h-10 text-white" strokeWidth={1.5} />
              </div>
            </div>
            <div className="mb-4">
              <span className="inline-block px-3 py-1 text-xs font-bold text-white bg-sanctum-cyan-500 rounded-full">STEP 1</span>
            </div>
            <h3 className="text-xl font-bold text-[#1A1A1A] mb-4 uppercase tracking-wide">
              Book Your Survey
            </h3>
            <p className="text-[#6B7280] font-light leading-relaxed">
              Schedule your pre-purchase home health survey online. We will coordinate with your property viewing schedule and estate agent for convenient access.
            </p>
          </div>

          {/* Step 2: On-Site Assessment */}
          <div className="text-center relative">
            <div className="flex items-center justify-center mb-6">
              <div className="w-20 h-20 bg-gradient-to-br from-sanctum-cyan-500 to-sanctum-cyan-600 rounded-full flex items-center justify-center shadow-lg relative z-10">
                <Home className="w-10 h-10 text-white" strokeWidth={1.5} />
              </div>
            </div>
            <div className="mb-4">
              <span className="inline-block px-3 py-1 text-xs font-bold text-white bg-sanctum-cyan-500 rounded-full">STEP 2</span>
            </div>
            <h3 className="text-xl font-bold text-[#1A1A1A] mb-4 uppercase tracking-wide">
              On-Site Assessment
            </h3>
            <p className="text-[#6B7280] font-light leading-relaxed">
              Our specialists conduct a thorough 3-4 hour property assessment using professional-grade equipment. All five environmental categories are tested comprehensively.
            </p>
          </div>

          {/* Step 3: Analysis & Sanctum Score */}
          <div className="text-center relative">
            <div className="flex items-center justify-center mb-6">
              <div className="w-20 h-20 bg-gradient-to-br from-sanctum-cyan-500 to-sanctum-cyan-600 rounded-full flex items-center justify-center shadow-lg relative z-10">
                <TrendingUp className="w-10 h-10 text-white" strokeWidth={1.5} />
              </div>
            </div>
            <div className="mb-4">
              <span className="inline-block px-3 py-1 text-xs font-bold text-white bg-sanctum-cyan-500 rounded-full">STEP 3</span>
            </div>
            <h3 className="text-xl font-bold text-[#1A1A1A] mb-4 uppercase tracking-wide">
              48-Hour Analysis
            </h3>
            <p className="text-[#6B7280] font-light leading-relaxed">
              Our team analyses all data and calculates your property's Sanctum Score. Results are compiled into a comprehensive report.
            </p>
          </div>

          {/* Step 4: Make Your Decision */}
          <div className="text-center relative">
            <div className="flex items-center justify-center mb-6">
              <div className="w-20 h-20 bg-gradient-to-br from-sanctum-cyan-500 to-sanctum-cyan-600 rounded-full flex items-center justify-center shadow-lg relative z-10">
                <FileText className="w-10 h-10 text-white" strokeWidth={1.5} />
              </div>
            </div>
            <div className="mb-4">
              <span className="inline-block px-3 py-1 text-xs font-bold text-white bg-sanctum-cyan-500 rounded-full">STEP 4</span>
            </div>
            <h3 className="text-xl font-bold text-[#1A1A1A] mb-4 uppercase tracking-wide">
              Make Your Decision
            </h3>
            <p className="text-[#6B7280] font-light leading-relaxed">
              Use your Sanctum Score to negotiate price, budget for improvements, or walk away with confidence. Includes 30-minute consultation call to discuss findings.
            </p>
          </div>
        </div>

        {/* Additional Info Section */}
        <div className="mt-16 bg-white rounded-2xl p-8 md:p-12 shadow-xl border border-gray-100">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-sanctum-cyan-500 mb-2">3-4 Hours</div>
              <div className="text-sm font-semibold text-[#1A1A1A] uppercase tracking-wide mb-1">Survey Duration</div>
              <p className="text-xs text-[#6B7280]">Non-invasive testing</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-sanctum-cyan-500 mb-2">48 Hours</div>
              <div className="text-sm font-semibold text-[#1A1A1A] uppercase tracking-wide mb-1">Report Delivery</div>
              <p className="text-xs text-[#6B7280]">Fast turnaround time</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-sanctum-cyan-500 mb-2">5 Categories</div>
              <div className="text-sm font-semibold text-[#1A1A1A] uppercase tracking-wide mb-1">Environmental Factors</div>
              <p className="text-xs text-[#6B7280]">Comprehensive assessment</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}