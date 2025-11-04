import React from 'react';
import { ArrowLeft, Wind, AlertCircle, Microscope, Thermometer, Droplets, Activity } from 'lucide-react';

export default function AtmosphericPurityDiagnostic() {
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
                <Wind className="w-10 h-10 text-[#002DFF]" strokeWidth={1.5} />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-light text-[#1A1A1A] mb-8">
              Atmospheric Purity: Analysing the Air You Breathe
            </h1>
            <p className="text-xl text-[#6B7280] font-light leading-relaxed max-w-3xl mx-auto">
              Indoor air quality directly impacts your energy levels, cognitive function, and long-term health. 
              Poor air quality can cause fatigue, trigger allergies, reduce mental clarity, and contribute to 
              respiratory issues. Our comprehensive atmospheric analysis identifies hidden pollutants and provides 
              actionable solutions to optimise the air in your living space.
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
                Our comprehensive air quality assessment covers all critical parameters that affect your health and wellbeing.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Particulate Matter */}
              <div className="bg-white rounded-lg p-8 shadow-sm border border-gray-100 text-center">
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 bg-[#002DFF]/10 rounded-full flex items-center justify-center">
                    <Microscope className="w-8 h-8 text-[#002DFF]" strokeWidth={1.5} />
                  </div>
                </div>
                <h3 className="text-lg font-medium text-[#1A1A1A] mb-3 uppercase tracking-wide">
                  Particulate Matter (PM2.5)
                </h3>
                <p className="text-[#6B7280] font-light leading-relaxed">
                  Ultra-fine particles that penetrate deep into lungs and bloodstream, measuring particles smaller than 2.5 micrometers.
                </p>
              </div>

              {/* VOCs */}
              <div className="bg-white rounded-lg p-8 shadow-sm border border-gray-100 text-center">
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 bg-[#002DFF]/10 rounded-full flex items-center justify-center">
                    <AlertCircle className="w-8 h-8 text-[#002DFF]" strokeWidth={1.5} />
                  </div>
                </div>
                <h3 className="text-lg font-medium text-[#1A1A1A] mb-3 uppercase tracking-wide">
                  Volatile Organic Compounds (VOCs)
                </h3>
                <p className="text-[#6B7280] font-light leading-relaxed">
                  Chemical emissions from furniture, cleaning products, and building materials that can cause headaches and respiratory irritation.
                </p>
              </div>

              {/* Formaldehyde */}
              <div className="bg-white rounded-lg p-8 shadow-sm border border-gray-100 text-center">
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 bg-[#002DFF]/10 rounded-full flex items-center justify-center">
                    <Activity className="w-8 h-8 text-[#002DFF]" strokeWidth={1.5} />
                  </div>
                </div>
                <h3 className="text-lg font-medium text-[#1A1A1A] mb-3 uppercase tracking-wide">
                  Formaldehyde
                </h3>
                <p className="text-[#6B7280] font-light leading-relaxed">
                  A common indoor pollutant from pressed wood products, fabrics, and adhesives that can cause eye and throat irritation.
                </p>
              </div>

              {/* Carbon Dioxide */}
              <div className="bg-white rounded-lg p-8 shadow-sm border border-gray-100 text-center">
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 bg-[#002DFF]/10 rounded-full flex items-center justify-center">
                    <Thermometer className="w-8 h-8 text-[#002DFF]" strokeWidth={1.5} />
                  </div>
                </div>
                <h3 className="text-lg font-medium text-[#1A1A1A] mb-3 uppercase tracking-wide">
                  Carbon Dioxide (CO₂)
                </h3>
                <p className="text-[#6B7280] font-light leading-relaxed">
                  Elevated CO₂ levels indicate poor ventilation and can cause drowsiness, reduced cognitive function, and fatigue.
                </p>
              </div>

              {/* Mould Spores */}
              <div className="bg-white rounded-lg p-8 shadow-sm border border-gray-100 text-center">
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 bg-[#002DFF]/10 rounded-full flex items-center justify-center">
                    <Droplets className="w-8 h-8 text-[#002DFF]" strokeWidth={1.5} />
                  </div>
                </div>
                <h3 className="text-lg font-medium text-[#1A1A1A] mb-3 uppercase tracking-wide">
                  Mould Spores
                </h3>
                <p className="text-[#6B7280] font-light leading-relaxed">
                  Airborne fungal spores that can trigger allergies, asthma, and other respiratory conditions, particularly in damp environments.
                </p>
              </div>

              {/* Additional Pollutants */}
              <div className="bg-white rounded-lg p-8 shadow-sm border border-gray-100 text-center">
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 bg-[#002DFF]/10 rounded-full flex items-center justify-center">
                    <Wind className="w-8 h-8 text-[#002DFF]" strokeWidth={1.5} />
                  </div>
                </div>
                <h3 className="text-lg font-medium text-[#1A1A1A] mb-3 uppercase tracking-wide">
                  Additional Pollutants
                </h3>
                <p className="text-[#6B7280] font-light leading-relaxed">
                  Comprehensive analysis of allergens, dust mites, pet dander, and other airborne contaminants specific to your environment.
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
                      Professional-Grade Equipment Deployment
                    </h3>
                    <p className="text-[#6B7280] font-light leading-relaxed">
                      Our certified specialists arrive with laboratory-standard air monitoring equipment, including laser particle counters, 
                      VOC analysers, and multi-gas detectors calibrated to scientific standards.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-[#002DFF] rounded-full flex items-center justify-center text-white text-sm font-medium">
                    2
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-[#1A1A1A] mb-2">
                      Comprehensive Room-by-Room Analysis
                    </h3>
                    <p className="text-[#6B7280] font-light leading-relaxed">
                      We conduct systematic measurements in every living space, including bedrooms, living areas, kitchens, and basements, 
                      capturing data during different times of day to understand air quality patterns.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-[#002DFF] rounded-full flex items-center justify-center text-white text-sm font-medium">
                    3
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-[#1A1A1A] mb-2">
                      Real-Time Monitoring & Documentation
                    </h3>
                    <p className="text-[#6B7280] font-light leading-relaxed">
                      Continuous monitoring over several hours captures air quality fluctuations, while our specialists document potential 
                      pollution sources, ventilation patterns, and environmental factors affecting your indoor atmosphere.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-[#002DFF] rounded-full flex items-center justify-center text-white text-sm font-medium">
                    4
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-[#1A1A1A] mb-2">
                      Laboratory Analysis & Reporting
                    </h3>
                    <p className="text-[#6B7280] font-light leading-relaxed">
                      Air samples are analysed in certified laboratories for detailed pollutant identification. Results are compiled into 
                      your comprehensive atmospheric purity report with specific recommendations for improvement.
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
              Ready to Breathe Easier?
            </h2>
            <p className="text-xl text-[#6B7280] font-light mb-12 max-w-2xl mx-auto">
              Take the first step towards optimising your indoor air quality with our comprehensive atmospheric purity diagnostic.
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