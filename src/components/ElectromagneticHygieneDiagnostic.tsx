import React from 'react';
import { ArrowLeft, Zap, Smartphone, Radio, Shield, Activity, Waves } from 'lucide-react';

export default function ElectromagneticHygieneDiagnostic() {
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
                <Zap className="w-10 h-10 text-[#002DFF]" strokeWidth={1.5} />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-light text-[#1A1A1A] mb-8">
              Electromagnetic Hygiene: Managing Invisible Exposure
            </h1>
            <p className="text-xl text-[#6B7280] font-light leading-relaxed max-w-3xl mx-auto">
              Electromagnetic fields (EMFs) from electrical systems and existing infrastructure create 
              an invisible layer of exposure in properties. Chronic EMF exposure can disrupt sleep patterns, affect 
              cellular function, and contribute to fatigue and cognitive issues. Our comprehensive electromagnetic 
              assessment maps the property's EMF landscape before you buy, revealing issues that could affect your 
              health and helping you negotiate on price or budget for remediation.
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
                Our comprehensive electromagnetic assessment covers all frequency ranges and sources that may impact your health and wellbeing.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Radiofrequency (RF) Radiation */}
              <div className="bg-white rounded-lg p-8 shadow-sm border border-gray-100 text-center">
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 bg-[#002DFF]/10 rounded-full flex items-center justify-center">
                    <Waves className="w-8 h-8 text-[#002DFF]" strokeWidth={1.5} />
                  </div>
                </div>
                <h3 className="text-lg font-medium text-[#1A1A1A] mb-3 uppercase tracking-wide">
                  Radiofrequency (RF) Radiation
                </h3>
                <p className="text-[#6B7280] font-light leading-relaxed">
                  High-frequency emissions from nearby mobile phone masts, neighbouring properties' wireless systems, and external communication infrastructure.
                </p>
              </div>

              {/* Extremely Low Frequency (ELF) */}
              <div className="bg-white rounded-lg p-8 shadow-sm border border-gray-100 text-center">
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 bg-[#002DFF]/10 rounded-full flex items-center justify-center">
                    <Zap className="w-8 h-8 text-[#002DFF]" strokeWidth={1.5} />
                  </div>
                </div>
                <h3 className="text-lg font-medium text-[#1A1A1A] mb-3 uppercase tracking-wide">
                  Extremely Low Frequency (ELF)
                </h3>
                <p className="text-[#6B7280] font-light leading-relaxed">
                  Low-frequency magnetic fields from electrical wiring, existing appliances, and power lines that can penetrate walls and bodies.
                </p>
              </div>

              {/* Dirty Electricity */}
              <div className="bg-white rounded-lg p-8 shadow-sm border border-gray-100 text-center">
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 bg-[#002DFF]/10 rounded-full flex items-center justify-center">
                    <Activity className="w-8 h-8 text-[#002DFF]" strokeWidth={1.5} />
                  </div>
                </div>
                <h3 className="text-lg font-medium text-[#1A1A1A] mb-3 uppercase tracking-wide">
                  Dirty Electricity
                </h3>
                <p className="text-[#6B7280] font-light leading-relaxed">
                  High-frequency voltage transients on electrical wiring caused by existing electronics and energy-efficient devices in the property.
                </p>
              </div>

              {/* Electric Field Strength */}
              <div className="bg-white rounded-lg p-8 shadow-sm border border-gray-100 text-center">
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 bg-[#002DFF]/10 rounded-full flex items-center justify-center">
                    <Shield className="w-8 h-8 text-[#002DFF]" strokeWidth={1.5} />
                  </div>
                </div>
                <h3 className="text-lg font-medium text-[#1A1A1A] mb-3 uppercase tracking-wide">
                  Electric Field Strength
                </h3>
                <p className="text-[#6B7280] font-light leading-relaxed">
                  Static electric fields from ungrounded electrical systems and synthetic materials that can affect sleep quality.
                </p>
              </div>

              {/* Microwave Radiation */}
              <div className="bg-white rounded-lg p-8 shadow-sm border border-gray-100 text-center">
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 bg-[#002DFF]/10 rounded-full flex items-center justify-center">
                    <Radio className="w-8 h-8 text-[#002DFF]" strokeWidth={1.5} />
                  </div>
                </div>
                <h3 className="text-lg font-medium text-[#1A1A1A] mb-3 uppercase tracking-wide">
                  Microwave Radiation
                </h3>
                <p className="text-[#6B7280] font-light leading-relaxed">
                  High-frequency emissions from smart metres, neighbouring wireless systems, and nearby communication infrastructure that can cause tissue heating.
                </p>
              </div>

              {/* Wiring & Infrastructure */}
              <div className="bg-white rounded-lg p-8 shadow-sm border border-gray-100 text-center">
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 bg-[#002DFF]/10 rounded-full flex items-center justify-center">
                    <Smartphone className="w-8 h-8 text-[#002DFF]" strokeWidth={1.5} />
                  </div>
                </div>
                <h3 className="text-lg font-medium text-[#1A1A1A] mb-3 uppercase tracking-wide">
                  Wiring & Infrastructure
                </h3>
                <p className="text-[#6B7280] font-light leading-relaxed">
                  Assessment of electrical wiring errors, grounding issues, and proximity to external EMF sources like substations and power lines.
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
                      Comprehensive EMF Mapping
                    </h3>
                    <p className="text-[#6B7280] font-light leading-relaxed">
                      Using professional-grade EMF metres and spectrum analysers, we create detailed maps of electromagnetic 
                      exposure throughout the property, identifying hotspots and measuring field strength in all living areas.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-[#002DFF] rounded-full flex items-center justify-center text-white text-sm font-medium">
                    2
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-[#1A1A1A] mb-2">
                      Source Identification & Analysis
                    </h3>
                    <p className="text-[#6B7280] font-light leading-relaxed">
                      Systematic evaluation of all EMF sources including electrical panels, wiring systems, existing appliances, 
                      and external sources like mobile phone masts and power lines affecting the property.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-[#002DFF] rounded-full flex items-center justify-center text-white text-sm font-medium">
                    3
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-[#1A1A1A] mb-2">
                      Temporal Pattern Assessment
                    </h3>
                    <p className="text-[#6B7280] font-light leading-relaxed">
                      24-hour monitoring in key areas like bedrooms to understand EMF fluctuations throughout day and night cycles, 
                      identifying peak exposure times and sleep environment quality.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-[#002DFF] rounded-full flex items-center justify-center text-white text-sm font-medium">
                    4
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-[#1A1A1A] mb-2">
                      Mitigation Strategy Development
                    </h3>
                    <p className="text-[#6B7280] font-light leading-relaxed">
                      Creation of a prioritised action plan including shielding solutions, wiring corrections, 
                      and electrical system modifications to reduce exposure—with clear cost estimates for negotiation leverage.
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
              Ready to Assess Your Property's EMF Exposure?
            </h2>
            <p className="text-xl text-[#6B7280] font-light mb-12 max-w-2xl mx-auto">
              Discover electromagnetic issues before you buy—get clear cost estimates for remediation and powerful negotiation leverage.
            </p>
            <button className="px-12 py-4 text-sm font-medium text-white bg-[#002DFF] hover:bg-[#0026CC] transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
              SCHEDULE YOUR PRE-PURCHASE ASSESSMENT
            </button>
          </div>
        </section>
      </main>
    </div>
  );
}