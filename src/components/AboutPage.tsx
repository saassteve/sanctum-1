import React from 'react';
import { ArrowLeft, Microscope, Map, Shield, Award } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header with Back Navigation */}
      <header className="bg-white border-b border-gray-100 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-4">
            <button
              onClick={() => window.history.back()}
              className="flex items-center space-x-2 text-[#6B7280] hover:text-sanctum-cyan-400 transition-colors"
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
        <section className="py-20 bg-gradient-to-b from-white to-[#F7F8FA] relative overflow-hidden">
          {/* Decorative Background Elements */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-sanctum-cyan-400/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-sanctum-cyan-300/5 rounded-full blur-3xl"></div>

          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            {/* Badge */}
            <div className="mb-6">
              <span className="inline-flex items-center space-x-2 px-5 py-2.5 text-xs font-semibold text-sanctum-cyan-500 bg-sanctum-cyan-400/10 backdrop-blur-md border border-sanctum-cyan-500/20 rounded-full uppercase tracking-wider shadow-sm">
                <Award className="w-4 h-4" />
                <span>About Sanctum</span>
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1A1A1A] mb-8 leading-tight">
              Don't Buy Blind:{' '}
              <span className="text-sanctum-cyan-500">Know Your Property's Health Before You Commit</span>
            </h1>
            <p className="text-xl md:text-2xl text-[#6B7280] font-light leading-relaxed max-w-3xl mx-auto">
              We believe every UK property buyer deserves to know the full health picture before making
              a significant property investment. Sanctum provides comprehensive pre-purchase home
              health surveys, delivering clarity through our proprietary <span className="font-semibold text-sanctum-cyan-500">Sanctum Score™</span> so you can
              negotiate confidently, budget accurately, or make informed decisions with confidence.
            </p>
          </div>
        </section>

        {/* Our Story Section */}
        <section className="py-20 bg-gradient-to-br from-[#F7F8FA] to-white relative overflow-hidden">
          {/* Decorative glow effect */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-sanctum-cyan-400/5 rounded-full blur-3xl"></div>

          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1A1A1A] mb-12">
              Why We Created This Service
            </h2>

            <div className="space-y-8 text-lg md:text-xl text-[#6B7280] font-light leading-relaxed">
              <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100">
                <p>
                  Our story began with a property purchase. After purchasing what appeared to be an ideal
                  property, we discovered that environmental factors not assessed by standard surveys were
                  causing health issues. This experience highlighted the need for comprehensive environmental
                  assessments.
                </p>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100">
                <p>
                  That experience drove us to create a comprehensive pre-purchase home health assessment
                  for UK property buyers. We invested in professional-grade instrumentation, studied building
                  biology and environmental health, and developed our proprietary <span className="font-semibold text-sanctum-cyan-500">Sanctum Score™</span> algorithm
                  to distil complex data into clear, actionable insights.
                </p>
              </div>

              <div className="bg-gradient-to-r from-sanctum-cyan-400/10 to-sanctum-cyan-300/5 rounded-xl p-8 shadow-lg border-l-4 border-sanctum-cyan-500">
                <p className="text-[#1A1A1A] font-medium">
                  Today, we help UK property buyers assess environmental factors before purchase. Our mission
                  is to provide comprehensive health data before you sign, so you can make informed decisions,
                  negotiate from a position of knowledge, and choose properties that support your well-being.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Philosophy Section */}
        <section className="py-20 bg-white relative overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-0 left-0 w-96 h-96 bg-sanctum-cyan-400/5 rounded-full blur-3xl"></div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1A1A1A] mb-6">
                Our Philosophy
              </h2>
              <p className="text-xl text-[#6B7280] font-light max-w-3xl mx-auto">
                Three core principles guide everything we do
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Scientific Rigour */}
              <div className="bg-gradient-to-br from-white to-sanctum-cyan-50/30 rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:scale-105">
                <div className="flex items-center justify-center mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-sanctum-cyan-400 to-sanctum-cyan-500 rounded-full flex items-center justify-center shadow-lg">
                    <Microscope className="w-10 h-10 text-white" strokeWidth={1.5} />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-[#1A1A1A] mb-4 uppercase tracking-wide text-center">
                  Scientific Rigour
                </h3>
                <p className="text-[#6B7280] font-light leading-relaxed text-center">
                  Every pre-purchase assessment uses lab-grade instrumentation to measure over 200
                  environmental factors. Our <span className="font-semibold text-sanctum-cyan-500">Sanctum Score™</span> is calculated from quantitative data,
                  giving you objective evidence for property decisions.
                </p>
              </div>

              {/* Pragmatic Guidance */}
              <div className="bg-gradient-to-br from-white to-sanctum-cyan-50/30 rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:scale-105">
                <div className="flex items-center justify-center mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-sanctum-cyan-500 to-sanctum-cyan-600 rounded-full flex items-center justify-center shadow-lg">
                    <Map className="w-10 h-10 text-white" strokeWidth={1.5} />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-[#1A1A1A] mb-4 uppercase tracking-wide text-center">
                  Pragmatic Guidance
                </h3>
                <p className="text-[#6B7280] font-light leading-relaxed text-center">
                  We deliver clarity through our reports. Complex environmental data is translated into
                  a simple, prioritised action plan. Use it to negotiate purchase price, plan your renovation
                  budget, or make informed decisions.
                </p>
              </div>

              {/* Buyer Empowerment */}
              <div className="bg-gradient-to-br from-white to-sanctum-cyan-50/30 rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:scale-105">
                <div className="flex items-center justify-center mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-sanctum-cyan-600 to-sanctum-cyan-700 rounded-full flex items-center justify-center shadow-lg">
                    <Shield className="w-10 h-10 text-white" strokeWidth={1.5} />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-[#1A1A1A] mb-4 uppercase tracking-wide text-center">
                  Buyer Empowerment
                </h3>
                <p className="text-[#6B7280] font-light leading-relaxed text-center">
                  Knowledge supports better property negotiations. We provide comprehensive data that
                  standard surveys do not assess, helping you make significant property investments with
                  greater confidence and full transparency.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-24 bg-gradient-to-br from-sanctum-cyan-600 via-sanctum-cyan-500 to-sanctum-cyan-400 relative overflow-hidden">
          {/* Decorative Elements */}
          <div className="absolute top-0 left-0 w-full h-full opacity-10">
            <div className="absolute top-10 left-10 w-64 h-64 bg-white rounded-full blur-3xl"></div>
            <div className="absolute bottom-10 right-10 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          </div>

          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            {/* Badge */}
            <div className="mb-6">
              <span className="inline-block px-4 py-2 text-xs font-semibold text-white bg-white/20 backdrop-blur-sm border border-white/30 rounded-full uppercase tracking-wider">
                Ready to Make an Informed Decision?
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight">
              Get Your Property's <span className="text-sanctum-cyan-200">Sanctum Score</span> Before You Buy
            </h2>
            <p className="text-xl text-white/90 font-light mb-12 max-w-2xl mx-auto leading-relaxed">
              Join UK property buyers who use measured environmental data to make confident purchase decisions.
            </p>
            <button className="group px-12 py-5 text-base font-bold text-sanctum-cyan-600 bg-white hover:bg-gray-50 transition-all duration-300 transform hover:scale-105 shadow-2xl rounded-lg inline-flex items-center">
              <span>SCHEDULE A DISCOVERY CALL</span>
              <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </section>
      </main>
    </div>
  );
}