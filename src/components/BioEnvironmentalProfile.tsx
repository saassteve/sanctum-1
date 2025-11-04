import React from 'react';

export default function BioEnvironmentalProfile() {
  return (
    <section id="bio-environmental" className="py-24 bg-white relative overflow-hidden">
      {/* Very faint blueprint grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: 'url("/freepik__seamless-blueprint-grid-pattern-with-very-thin-whi__96152 copy.png")',
          backgroundSize: '400px 400px',
          backgroundRepeat: 'repeat',
          backgroundPosition: 'center'
        }}
      ></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-5 gap-16 relative z-10">
          {/* Left Column - Sticky (40% width) */}
          <div className="lg:col-span-2 lg:sticky lg:top-[150px] lg:self-start">
            <div className="mb-6">
              <span className="inline-block px-4 py-2 text-xs font-semibold text-sanctum-cyan-600 bg-sanctum-cyan-400/10 rounded-full uppercase tracking-wider">
                Complete Home Health Survey
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-sanctum-cyan-600">Bio-Environmental</span>{' '}
              <span className="text-[#1A1A1A]">Profile</span>
            </h2>
            <p className="text-xl text-[#6B7280] font-light leading-relaxed mb-8">
              Before you purchase a property in the UK, get a comprehensive diagnostic assessment
              of environmental factors that could impact your family's health. Our five-pillar
              evaluation provides measured data to support informed decisions.
            </p>
            
            {/* Benefits Callout */}
            <div className="bg-gradient-to-br from-[#F7F8FA] to-white border-l-4 border-sanctum-cyan-500 p-6 rounded-r-lg shadow-sm">
              <h3 className="text-sm font-bold text-[#1A1A1A] uppercase tracking-wide mb-3">Why Survey Before Buying?</h3>
              <ul className="space-y-2 text-sm text-[#6B7280]">
                <li className="flex items-start space-x-2">
                  <svg className="w-4 h-4 text-sanctum-cyan-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Identify hidden health hazards before purchase</span>
                </li>
                <li className="flex items-start space-x-2">
                  <svg className="w-4 h-4 text-sanctum-cyan-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Negotiate price based on objective data</span>
                </li>
                <li className="flex items-start space-x-2">
                  <svg className="w-4 h-4 text-sanctum-cyan-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Plan accurate renovation budgets upfront</span>
                </li>
                <li className="flex items-start space-x-2">
                  <svg className="w-4 h-4 text-sanctum-cyan-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Walk away from problematic properties with confidence</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Column - Scrolling Services (60% width) */}
          <div className="lg:col-span-3 space-y-6">
            {/* Atmospheric Purity */}
            <div className="bg-gradient-to-br from-white to-[#F7F8FA] rounded-xl p-8 shadow-md border-2 border-gray-100 hover:border-sanctum-cyan-400/30 hover:shadow-xl transition-all group">
              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 bg-gradient-to-br from-sanctum-cyan-400/10 to-sanctum-cyan-300/10 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                    <svg className="w-8 h-8 text-sanctum-cyan-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707" />
                      <circle cx="12" cy="12" r="4" strokeWidth={1.5} />
                    </svg>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-[#1A1A1A] mb-3 uppercase tracking-wide">
                    Atmospheric Purity
                  </h3>
                  <p className="text-[#6B7280] font-light leading-relaxed mb-4">
                    Professional air quality testing covering PM2.5, PM10, VOCs, CO₂, formaldehyde, radon,
                    mould spores, and common allergens. Measures respiratory irritants that standard
                    property surveys do not assess.
                  </p>
                  <a href="/atmospheric-purity-diagnostic" className="inline-flex items-center text-sm font-semibold text-sanctum-cyan-600 hover:text-[#1A1A1A] transition-colors">
                    Learn More About Testing
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Hydration Integrity */}
            <div className="bg-gradient-to-br from-white to-[#F7F8FA] rounded-xl p-8 shadow-md border-2 border-gray-100 hover:border-sanctum-cyan-400/30 hover:shadow-xl transition-all group">
              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 bg-gradient-to-br from-sanctum-cyan-400/10 to-sanctum-cyan-300/10 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                    <svg className="w-8 h-8 text-sanctum-cyan-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3l-1.5 4.5L12 12l1.5-4.5L12 3z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 12c-3 0-5.5 2.5-5.5 5.5S9 23 12 23s5.5-2.5 5.5-5.5S15 12 12 12z" />
                    </svg>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-[#1A1A1A] mb-3 uppercase tracking-wide">
                    Hydration Integrity
                  </h3>
                  <p className="text-[#6B7280] font-light leading-relaxed mb-4">
                    Laboratory-grade water quality analysis testing for lead, copper, nitrates, chlorine,
                    fluoride, heavy metals, microplastics, and microbial contamination. Relevant for UK
                    properties with older plumbing or well water.
                  </p>
                  <a href="/hydration-integrity-diagnostic" className="inline-flex items-center text-sm font-semibold text-sanctum-cyan-600 hover:text-[#1A1A1A] transition-colors">
                    Learn More About Testing
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Electromagnetic Hygiene */}
            <div className="bg-gradient-to-br from-white to-[#F7F8FA] rounded-xl p-8 shadow-md border-2 border-gray-100 hover:border-sanctum-cyan-400/30 hover:shadow-xl transition-all group">
              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 bg-gradient-to-br from-sanctum-cyan-400/10 to-sanctum-cyan-300/10 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                    <svg className="w-8 h-8 text-sanctum-cyan-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <circle cx="12" cy="12" r="3" strokeWidth={1.5} />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 1v6m0 6v6M21 12h-6m-6 0H3" />
                    </svg>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-[#1A1A1A] mb-3 uppercase tracking-wide">
                    Electromagnetic Hygiene
                  </h3>
                  <p className="text-[#6B7280] font-light leading-relaxed mb-4">
                    Comprehensive EMF mapping measuring RF radiation, magnetic fields, electric fields,
                    and dirty electricity. Evaluates proximity to power lines, substations, mobile towers,
                    and identifies high-exposure zones within the property.
                  </p>
                  <a href="/electromagnetic-hygiene-diagnostic" className="inline-flex items-center text-sm font-semibold text-sanctum-cyan-600 hover:text-[#1A1A1A] transition-colors">
                    Learn More About Testing
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Circadian Alignment */}
            <div className="bg-gradient-to-br from-white to-[#F7F8FA] rounded-xl p-8 shadow-md border-2 border-gray-100 hover:border-sanctum-cyan-400/30 hover:shadow-xl transition-all group">
              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 bg-gradient-to-br from-sanctum-cyan-400/10 to-sanctum-cyan-300/10 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                    <svg className="w-8 h-8 text-sanctum-cyan-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <circle cx="12" cy="12" r="5" strokeWidth={1.5} />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 1v2m0 18v2M4.22 4.22l1.42 1.42m12.72 12.72l1.42 1.42M1 12h2m18 0h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
                    </svg>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-[#1A1A1A] mb-3 uppercase tracking-wide">
                    Circadian Alignment
                  </h3>
                  <p className="text-[#6B7280] font-light leading-relaxed mb-4">
                    Light spectrum analysis measuring natural daylight exposure, blue light levels, and
                    artificial lighting quality. Evaluates window placement, orientation, and how the
                    property design relates to natural sleep-wake cycles.
                  </p>
                  <a href="/circadian-alignment-diagnostic" className="inline-flex items-center text-sm font-semibold text-sanctum-cyan-600 hover:text-[#1A1A1A] transition-colors">
                    Learn More About Testing
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Material Toxicity */}
            <div className="bg-gradient-to-br from-white to-[#F7F8FA] rounded-xl p-8 shadow-md border-2 border-gray-100 hover:border-sanctum-cyan-400/30 hover:shadow-xl transition-all group">
              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 bg-gradient-to-br from-sanctum-cyan-400/10 to-sanctum-cyan-300/10 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                    <svg className="w-8 h-8 text-sanctum-cyan-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <circle cx="12" cy="12" r="3" strokeWidth={1.5} />
                      <circle cx="6" cy="6" r="2" strokeWidth={1.5} />
                      <circle cx="18" cy="6" r="2" strokeWidth={1.5} />
                      <circle cx="6" cy="18" r="2" strokeWidth={1.5} />
                      <circle cx="18" cy="18" r="2" strokeWidth={1.5} />
                    </svg>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-[#1A1A1A] mb-3 uppercase tracking-wide">
                    Material Toxicity
                  </h3>
                  <p className="text-[#6B7280] font-light leading-relaxed mb-4">
                    Advanced chemical analysis of building materials, paints, carpets, insulation, and
                    furnishings for toxic compounds. Tests for asbestos, lead paint, flame retardants,
                    phthalates, and VOC off-gassing from synthetic materials.
                  </p>
                  <a href="/material-toxicity-diagnostic" className="inline-flex items-center text-sm font-semibold text-sanctum-cyan-600 hover:text-[#1A1A1A] transition-colors">
                    Learn More About Testing
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}