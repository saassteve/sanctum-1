import React from 'react';
import { ArrowLeft, Sun, Moon, Eye, Clock, Lightbulb, Activity } from 'lucide-react';

export default function CircadianAlignmentDiagnostic() {
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
            <div className="flex justify-center mb-8">
              <div className="w-20 h-20 bg-[#002DFF]/10 rounded-full flex items-center justify-center">
                <Sun className="w-10 h-10 text-[#002DFF]" strokeWidth={1.5} />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-light text-[#1A1A1A] mb-8">
              Circadian Alignment: Optimising Your Natural Rhythms
            </h1>
            <p className="text-xl text-[#6B7280] font-light leading-relaxed max-w-3xl mx-auto">
              Your circadian rhythm governs sleep quality, hormone production, metabolism, and cognitive performance. 
              Disrupted light exposure from artificial lighting and screens can lead to poor sleep, mood disorders, 
              reduced immune function, and metabolic dysfunction. Our comprehensive circadian assessment analyses 
              your home's light environment and provides targeted solutions to restore your natural biological rhythms 
              for optimal health and wellbeing.
            </p>
          </div>
        </section>

        {/* What We Measure Section */}
        <section className="py-16 bg-[#F7F8FA]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-light text-[#1A1A1A] mb-6">
                What We Measure
              </h2>
              <p className="text-lg text-[#6B7280] font-light max-w-2xl mx-auto">
                Our comprehensive circadian assessment covers all aspects of light exposure that influence your biological clock and sleep-wake cycles.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Light Spectrum Analysis */}
              <div className="bg-white rounded-lg p-8 shadow-sm border border-gray-100 text-center">
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 bg-[#002DFF]/10 rounded-full flex items-center justify-center">
                    <Lightbulb className="w-8 h-8 text-[#002DFF]" strokeWidth={1.5} />
                  </div>
                </div>
                <h3 className="text-lg font-medium text-[#1A1A1A] mb-3 uppercase tracking-wide">
                  Light Spectrum Analysis
                </h3>
                <p className="text-[#6B7280] font-light leading-relaxed">
                  Detailed measurement of blue, red, and full-spectrum light wavelengths throughout your home during different times of day.
                </p>
              </div>

              {/* Illuminance Levels */}
              <div className="bg-white rounded-lg p-8 shadow-sm border border-gray-100 text-center">
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 bg-[#002DFF]/10 rounded-full flex items-center justify-center">
                    <Sun className="w-8 h-8 text-[#002DFF]" strokeWidth={1.5} />
                  </div>
                </div>
                <h3 className="text-lg font-medium text-[#1A1A1A] mb-3 uppercase tracking-wide">
                  Illuminance Levels
                </h3>
                <p className="text-[#6B7280] font-light leading-relaxed">
                  Measurement of light intensity in lux across all living spaces to ensure adequate daytime brightness and appropriate evening dimness.
                </p>
              </div>

              {/* Blue Light Exposure */}
              <div className="bg-white rounded-lg p-8 shadow-sm border border-gray-100 text-center">
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 bg-[#002DFF]/10 rounded-full flex items-center justify-center">
                    <Eye className="w-8 h-8 text-[#002DFF]" strokeWidth={1.5} />
                  </div>
                </div>
                <h3 className="text-lg font-medium text-[#1A1A1A] mb-3 uppercase tracking-wide">
                  Blue Light Exposure
                </h3>
                <p className="text-[#6B7280] font-light leading-relaxed">
                  Specific analysis of blue light wavelengths (400-490nm) from screens, LEDs, and artificial lighting that can suppress melatonin production.
                </p>
              </div>

              {/* Colour Temperature Mapping */}
              <div className="bg-white rounded-lg p-8 shadow-sm border border-gray-100 text-center">
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 bg-[#002DFF]/10 rounded-full flex items-center justify-center">
                    <Activity className="w-8 h-8 text-[#002DFF]" strokeWidth={1.5} />
                  </div>
                </div>
                <h3 className="text-lg font-medium text-[#1A1A1A] mb-3 uppercase tracking-wide">
                  Colour Temperature Mapping
                </h3>
                <p className="text-[#6B7280] font-light leading-relaxed">
                  Assessment of warm vs cool light temperatures throughout the day to support natural circadian rhythm progression.
                </p>
              </div>

              {/* Natural Light Access */}
              <div className="bg-white rounded-lg p-8 shadow-sm border border-gray-100 text-center">
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 bg-[#002DFF]/10 rounded-full flex items-center justify-center">
                    <Moon className="w-8 h-8 text-[#002DFF]" strokeWidth={1.5} />
                  </div>
                </div>
                <h3 className="text-lg font-medium text-[#1A1A1A] mb-3 uppercase tracking-wide">
                  Natural Light Access
                </h3>
                <p className="text-[#6B7280] font-light leading-relaxed">
                  Evaluation of daylight penetration, window positioning, and seasonal light variation to optimise natural circadian cues.
                </p>
              </div>

              {/* Evening Light Pollution */}
              <div className="bg-white rounded-lg p-8 shadow-sm border border-gray-100 text-center">
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 bg-[#002DFF]/10 rounded-full flex items-center justify-center">
                    <Clock className="w-8 h-8 text-[#002DFF]" strokeWidth={1.5} />
                  </div>
                </div>
                <h3 className="text-lg font-medium text-[#1A1A1A] mb-3 uppercase tracking-wide">
                  Evening Light Pollution
                </h3>
                <p className="text-[#6B7280] font-light leading-relaxed">
                  Assessment of artificial light exposure during evening hours that can disrupt melatonin production and sleep preparation.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Process Section */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-light text-[#1A1A1A] mb-6">
                Our Process
              </h2>
            </div>

            <div className="bg-[#F7F8FA] rounded-lg p-8 md:p-12">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-[#002DFF] rounded-full flex items-center justify-center text-white text-sm font-medium">
                    1
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-[#1A1A1A] mb-2">
                      24-Hour Light Monitoring
                    </h3>
                    <p className="text-[#6B7280] font-light leading-relaxed">
                      Professional spectroradiometers and lux metres are deployed throughout your home to capture detailed 
                      light measurements across the full 24-hour cycle, documenting natural and artificial light patterns.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-[#002DFF] rounded-full flex items-center justify-center text-white text-sm font-medium">
                    2
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-[#1A1A1A] mb-2">
                      Spectral Analysis & Documentation
                    </h3>
                    <p className="text-[#6B7280] font-light leading-relaxed">
                      Advanced spectral analysis identifies specific wavelengths and their timing, whilst our specialists document 
                      lighting sources, window orientations, and daily light exposure patterns in each room.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-[#002DFF] rounded-full flex items-center justify-center text-white text-sm font-medium">
                    3
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-[#1A1A1A] mb-2">
                      Circadian Impact Assessment
                    </h3>
                    <p className="text-[#6B7280] font-light leading-relaxed">
                      Data is analysed against optimal circadian light exposure patterns, identifying disruptions to natural 
                      rhythms and quantifying the impact on sleep quality and hormonal balance.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-[#002DFF] rounded-full flex items-center justify-center text-white text-sm font-medium">
                    4
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-[#1A1A1A] mb-2">
                      Personalised Lighting Strategy
                    </h3>
                    <p className="text-[#6B7280] font-light leading-relaxed">
                      A comprehensive lighting optimisation plan is developed, including recommendations for circadian lighting systems, 
                      blue light management, and natural light maximisation strategies tailored to your lifestyle and space.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-24 bg-[#F7F8FA]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl md:text-5xl font-light text-[#1A1A1A] mb-8">
              Ready to Restore Your Natural Rhythms?
            </h2>
            <p className="text-xl text-[#6B7280] font-light mb-12 max-w-2xl mx-auto">
              Take the first step towards optimising your circadian health with our comprehensive light environment assessment.
            </p>
            <button className="px-12 py-4 text-sm font-medium text-white bg-[#002DFF] hover:bg-[#0026CC] transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
              SCHEDULE A COMPREHENSIVE HOME ASSESSMENT
            </button>
          </div>
        </section>
      </main>
    </div>
  );
}