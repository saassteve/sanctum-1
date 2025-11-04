import React from 'react';
import { ArrowLeft, Droplets, AlertCircle, Microscope, Thermometer, Shield, Activity } from 'lucide-react';

export default function HydrationIntegrityDiagnostic() {
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
                <Droplets className="w-10 h-10 text-[#002DFF]" strokeWidth={1.5} />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-light text-[#1A1A1A] mb-8">
              Hydration Integrity: Ensuring Pure, Safe Water
            </h1>
            <p className="text-xl text-[#6B7280] font-light leading-relaxed max-w-3xl mx-auto">
              Water quality directly impacts every aspect of your health, from cellular function to detoxification. 
              Contaminated water can introduce harmful chemicals, heavy metals, and pathogens into your system, 
              whilst poor mineral balance affects hydration efficiency. Our comprehensive water analysis identifies 
              hidden contaminants and optimises your home's hydration systems for maximum health benefits.
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
                Our comprehensive water quality assessment covers all critical parameters that affect your health and hydration efficiency.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Heavy Metals */}
              <div className="bg-white rounded-lg p-8 shadow-sm border border-gray-100 text-center">
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 bg-[#002DFF]/10 rounded-full flex items-center justify-center">
                    <AlertCircle className="w-8 h-8 text-[#002DFF]" strokeWidth={1.5} />
                  </div>
                </div>
                <h3 className="text-lg font-medium text-[#1A1A1A] mb-3 uppercase tracking-wide">
                  Heavy Metals
                </h3>
                <p className="text-[#6B7280] font-light leading-relaxed">
                  Lead, mercury, arsenic, and other toxic metals that can accumulate in the body and cause neurological damage.
                </p>
              </div>

              {/* Chemical Contaminants */}
              <div className="bg-white rounded-lg p-8 shadow-sm border border-gray-100 text-center">
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 bg-[#002DFF]/10 rounded-full flex items-center justify-center">
                    <Microscope className="w-8 h-8 text-[#002DFF]" strokeWidth={1.5} />
                  </div>
                </div>
                <h3 className="text-lg font-medium text-[#1A1A1A] mb-3 uppercase tracking-wide">
                  Chemical Contaminants
                </h3>
                <p className="text-[#6B7280] font-light leading-relaxed">
                  Chlorine, fluoride, pesticides, and pharmaceutical residues that can disrupt hormonal balance and cellular function.
                </p>
              </div>

              {/* Microbial Safety */}
              <div className="bg-white rounded-lg p-8 shadow-sm border border-gray-100 text-center">
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 bg-[#002DFF]/10 rounded-full flex items-center justify-center">
                    <Shield className="w-8 h-8 text-[#002DFF]" strokeWidth={1.5} />
                  </div>
                </div>
                <h3 className="text-lg font-medium text-[#1A1A1A] mb-3 uppercase tracking-wide">
                  Microbial Safety
                </h3>
                <p className="text-[#6B7280] font-light leading-relaxed">
                  Bacteria, viruses, parasites, and other pathogens that can cause gastrointestinal illness and immune system stress.
                </p>
              </div>

              {/* pH & Mineral Balance */}
              <div className="bg-white rounded-lg p-8 shadow-sm border border-gray-100 text-center">
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 bg-[#002DFF]/10 rounded-full flex items-center justify-center">
                    <Thermometer className="w-8 h-8 text-[#002DFF]" strokeWidth={1.5} />
                  </div>
                </div>
                <h3 className="text-lg font-medium text-[#1A1A1A] mb-3 uppercase tracking-wide">
                  pH & Mineral Balance
                </h3>
                <p className="text-[#6B7280] font-light leading-relaxed">
                  Acidity levels and essential mineral content that affect hydration efficiency and cellular absorption.
                </p>
              </div>

              {/* Chlorination Byproducts */}
              <div className="bg-white rounded-lg p-8 shadow-sm border border-gray-100 text-center">
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 bg-[#002DFF]/10 rounded-full flex items-center justify-center">
                    <Activity className="w-8 h-8 text-[#002DFF]" strokeWidth={1.5} />
                  </div>
                </div>
                <h3 className="text-lg font-medium text-[#1A1A1A] mb-3 uppercase tracking-wide">
                  Chlorination Byproducts
                </h3>
                <p className="text-[#6B7280] font-light leading-relaxed">
                  Trihalomethanes and other disinfection byproducts that form when chlorine reacts with organic matter.
                </p>
              </div>

              {/* Total Dissolved Solids */}
              <div className="bg-white rounded-lg p-8 shadow-sm border border-gray-100 text-center">
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 bg-[#002DFF]/10 rounded-full flex items-center justify-center">
                    <Droplets className="w-8 h-8 text-[#002DFF]" strokeWidth={1.5} />
                  </div>
                </div>
                <h3 className="text-lg font-medium text-[#1A1A1A] mb-3 uppercase tracking-wide">
                  Total Dissolved Solids
                </h3>
                <p className="text-[#6B7280] font-light leading-relaxed">
                  Overall mineral content and dissolved substances that indicate water purity and filtration effectiveness.
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
                      Multi-Point Water Sampling
                    </h3>
                    <p className="text-[#6B7280] font-light leading-relaxed">
                      Our specialists collect water samples from multiple sources throughout your home, including kitchen taps, 
                      bathroom fixtures, and main water supply lines to identify variations in quality.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-[#002DFF] rounded-full flex items-center justify-center text-white text-sm font-medium">
                    2
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-[#1A1A1A] mb-2">
                      On-Site Testing & Analysis
                    </h3>
                    <p className="text-[#6B7280] font-light leading-relaxed">
                      Immediate testing using portable laboratory equipment provides instant results for pH, chlorine, 
                      dissolved solids, and basic contaminants, whilst samples are prepared for comprehensive laboratory analysis.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-[#002DFF] rounded-full flex items-center justify-center text-white text-sm font-medium">
                    3
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-[#1A1A1A] mb-2">
                      Advanced Laboratory Testing
                    </h3>
                    <p className="text-[#6B7280] font-light leading-relaxed">
                      Samples undergo comprehensive analysis using mass spectrometry and atomic absorption techniques 
                      to detect trace contaminants, heavy metals, and chemical residues at parts-per-billion levels.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-[#002DFF] rounded-full flex items-center justify-center text-white text-sm font-medium">
                    4
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-[#1A1A1A] mb-2">
                      Filtration System Assessment
                    </h3>
                    <p className="text-[#6B7280] font-light leading-relaxed">
                      Evaluation of existing filtration systems, plumbing infrastructure, and water storage to identify 
                      optimisation opportunities and recommend targeted solutions for your specific water quality challenges.
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
              Ready to Optimise Your Water Quality?
            </h2>
            <p className="text-xl text-[#6B7280] font-light mb-12 max-w-2xl mx-auto">
              Take the first step towards ensuring pure, safe hydration with our comprehensive water quality diagnostic.
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