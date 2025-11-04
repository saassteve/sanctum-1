import React from 'react';
import { ArrowLeft, Microscope, Map, Shield } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header with Back Navigation */}
      <header className="bg-white border-b border-gray-100 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-4">
            <button 
              onClick={() => window.history.back()}
              className="flex items-center space-x-2 text-[#6B7280] hover:text-[#002DFF] transition-colors"
            >
              <ArrowLeft className="h-5 w-5" />
              <span className="text-sm font-medium">Back to Home</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="pt-16 pb-24">
        {/* Hero Section */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-light text-[#1A1A1A] mb-8">
              Don't Buy Blind: Know Your Property's Health Before You Commit
            </h1>
            <p className="text-xl text-[#6B7280] font-light leading-relaxed max-w-3xl mx-auto">
              We believe every UK property buyer deserves to know the full health picture before making
              a significant property investment. Sanctum provides comprehensive pre-purchase home
              health surveys, delivering clarity through our proprietary Sanctum Score™ so you can
              negotiate confidently, budget accurately, or make informed decisions with confidence.
            </p>
          </div>
        </section>

        {/* Our Story Section */}
        <section className="py-16 bg-[#F7F8FA]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-light text-[#1A1A1A] mb-12">
              Why We Created This Service
            </h2>
            
            <div className="space-y-8 text-lg text-[#6B7280] font-light leading-relaxed">
              <p>
                Our story began with a property purchase. After purchasing what appeared to be an ideal
                property, we discovered that environmental factors not assessed by standard surveys were
                causing health issues. This experience highlighted the need for comprehensive environmental
                assessments.
              </p>
              
              <p>
                That experience drove us to create a comprehensive pre-purchase home health assessment
                for UK property buyers. We invested in professional-grade instrumentation, studied building
                biology and environmental health, and developed our proprietary Sanctum Score™ algorithm
                to distil complex data into clear, actionable insights.
              </p>
              
              <p>
                Today, we help UK property buyers assess environmental factors before purchase. Our mission
                is to provide comprehensive health data before you sign, so you can make informed decisions,
                negotiate from a position of knowledge, and choose properties that support your well-being.
              </p>
            </div>
          </div>
        </section>

        {/* Our Philosophy Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-light text-[#1A1A1A] mb-6">
                Our Philosophy
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-12">
              {/* Scientific Rigour */}
              <div className="text-center">
                <div className="flex items-center justify-center mb-6">
                  <div className="w-16 h-16 bg-[#002DFF]/10 rounded-full flex items-center justify-center">
                    <Microscope className="w-8 h-8 text-[#002DFF]" strokeWidth={1.5} />
                  </div>
                </div>
                <h3 className="text-xl font-medium text-[#1A1A1A] mb-4 uppercase tracking-wide">
                  Scientific Rigour
                </h3>
                <p className="text-[#6B7280] font-light leading-relaxed">
                  Every pre-purchase assessment uses lab-grade instrumentation to measure over 200
                  environmental factors. Our Sanctum Score™ is calculated from quantitative data,
                  giving you objective evidence for property decisions.
                </p>
              </div>

              {/* Pragmatic Guidance */}
              <div className="text-center">
                <div className="flex items-center justify-center mb-6">
                  <div className="w-16 h-16 bg-[#002DFF]/10 rounded-full flex items-center justify-center">
                    <Map className="w-8 h-8 text-[#002DFF]" strokeWidth={1.5} />
                  </div>
                </div>
                <h3 className="text-xl font-medium text-[#1A1A1A] mb-4 uppercase tracking-wide">
                  Pragmatic Guidance
                </h3>
                <p className="text-[#6B7280] font-light leading-relaxed">
                  We deliver clarity through our reports. Complex environmental data is translated into
                  a simple, prioritised action plan. Use it to negotiate purchase price, plan your renovation
                  budget, or make informed decisions.
                </p>
              </div>

              {/* Buyer Empowerment */}
              <div className="text-center">
                <div className="flex items-center justify-center mb-6">
                  <div className="w-16 h-16 bg-[#002DFF]/10 rounded-full flex items-center justify-center">
                    <Shield className="w-8 h-8 text-[#002DFF]" strokeWidth={1.5} />
                  </div>
                </div>
                <h3 className="text-xl font-medium text-[#1A1A1A] mb-4 uppercase tracking-wide">
                  Buyer Empowerment
                </h3>
                <p className="text-[#6B7280] font-light leading-relaxed">
                  Knowledge supports better property negotiations. We provide comprehensive data that
                  standard surveys do not assess, helping you make significant property investments with
                  greater confidence and full transparency.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-24 bg-[#F7F8FA]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl md:text-5xl font-light text-[#1A1A1A] mb-12">
              Get Your Property's Sanctum Score Before You Buy
            </h2>
            <button className="px-12 py-4 text-sm font-medium text-white bg-[#002DFF] hover:bg-[#0026CC] transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
              SCHEDULE A DISCOVERY CALL
            </button>
          </div>
        </section>
      </main>
    </div>
  );
}