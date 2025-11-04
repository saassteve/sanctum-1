import React from 'react';

export default function TrustBar() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-[#F7F8FA] border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Stat - Centered and Larger */}
        <div className="text-center mb-12">
          <div className="inline-block">
            <div className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-[#002DFF] to-[#4D7FFF] bg-clip-text text-transparent mb-3">
              200+
            </div>
            <div className="text-base font-semibold text-[#1A1A1A] uppercase tracking-wider mb-2">
              Environmental Data Points
            </div>
            <div className="text-sm text-[#6B7280] font-light max-w-md mx-auto">
              Every property receives a comprehensive bio-environmental assessment
            </div>
          </div>
        </div>

        {/* Secondary Stats Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Lab-Grade Equipment */}
          <div className="text-center p-6 bg-white rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-[#002DFF]/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-[#002DFF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <div className="text-2xl font-bold text-[#1A1A1A] mb-2">Lab-Grade</div>
            <div className="text-sm font-medium text-[#1A1A1A] uppercase tracking-wide mb-2">
              Testing Equipment
            </div>
            <div className="text-sm text-[#6B7280] font-light">
              Professional scientific instrumentation for building assessments
            </div>
          </div>

          {/* Turnaround Time */}
          <div className="text-center p-6 bg-white rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-[#002DFF]/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-[#002DFF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div className="text-2xl font-bold text-[#1A1A1A] mb-2">48 Hours</div>
            <div className="text-sm font-medium text-[#1A1A1A] uppercase tracking-wide mb-2">
              Results Delivery
            </div>
            <div className="text-sm text-[#6B7280] font-light">
              Fast turnaround to support your property purchase timeline
            </div>
          </div>

          {/* Sanctum Score */}
          <div className="text-center p-6 bg-white rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-[#002DFF]/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-[#002DFF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <div className="text-2xl font-bold text-[#1A1A1A] mb-2">Proprietary</div>
            <div className="text-sm font-medium text-[#1A1A1A] uppercase tracking-wide mb-2">
              Sanctum Score
            </div>
            <div className="text-sm text-[#6B7280] font-light">
              Single health rating backed by advanced algorithms
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}