import React from 'react';
import { ArrowLeft, AlertTriangle, Home, Microscope, Thermometer, Shield, Activity } from 'lucide-react';

export default function MaterialToxicityDiagnostic() {
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
                <AlertTriangle className="w-10 h-10 text-[#002DFF]" strokeWidth={1.5} />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-light text-[#1A1A1A] mb-8">
              Material Toxicity: Identifying Hidden Chemical Hazards
            </h1>
            <p className="text-xl text-[#6B7280] font-light leading-relaxed max-w-3xl mx-auto">
              Modern building materials, furnishings, and household products can release toxic chemicals into your 
              living environment through off-gassing and degradation. These hidden contaminants can cause headaches, 
              respiratory issues, hormonal disruption, and long-term health problems. Our comprehensive material 
              toxicity assessment identifies harmful substances in your home and provides targeted solutions to 
              create a safer, healthier living environment for you and your family.
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
                Our comprehensive material toxicity assessment identifies harmful chemicals and compounds throughout your living environment.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Volatile Organic Compounds */}
              <div className="bg-white rounded-lg p-8 shadow-sm border border-gray-100 text-center">
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 bg-[#002DFF]/10 rounded-full flex items-center justify-center">
                    <Activity className="w-8 h-8 text-[#002DFF]" strokeWidth={1.5} />
                  </div>
                </div>
                <h3 className="text-lg font-medium text-[#1A1A1A] mb-3 uppercase tracking-wide">
                  Volatile Organic Compounds
                </h3>
                <p className="text-[#6B7280] font-light leading-relaxed">
                  Chemical emissions from paints, adhesives, carpets, and furniture that can cause headaches and respiratory irritation.
                </p>
              </div>

              {/* Formaldehyde & Aldehydes */}
              <div className="bg-white rounded-lg p-8 shadow-sm border border-gray-100 text-center">
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 bg-[#002DFF]/10 rounded-full flex items-center justify-center">
                    <AlertTriangle className="w-8 h-8 text-[#002DFF]" strokeWidth={1.5} />
                  </div>
                </div>
                <h3 className="text-lg font-medium text-[#1A1A1A] mb-3 uppercase tracking-wide">
                  Formaldehyde & Aldehydes
                </h3>
                <p className="text-[#6B7280] font-light leading-relaxed">
                  Carcinogenic compounds from pressed wood products, insulation, and textiles that can cause eye and throat irritation.
                </p>
              </div>

              {/* Flame Retardants */}
              <div className="bg-white rounded-lg p-8 shadow-sm border border-gray-100 text-center">
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 bg-[#002DFF]/10 rounded-full flex items-center justify-center">
                    <Shield className="w-8 h-8 text-[#002DFF]" strokeWidth={1.5} />
                  </div>
                </div>
                <h3 className="text-lg font-medium text-[#1A1A1A] mb-3 uppercase tracking-wide">
                  Flame Retardants
                </h3>
                <p className="text-[#6B7280] font-light leading-relaxed">
                  Persistent chemicals in furniture, electronics, and textiles that can disrupt hormones and accumulate in body tissues.
                </p>
              </div>

              {/* Heavy Metals */}
              <div className="bg-white rounded-lg p-8 shadow-sm border border-gray-100 text-center">
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 bg-[#002DFF]/10 rounded-full flex items-center justify-center">
                    <Microscope className="w-8 h-8 text-[#002DFF]" strokeWidth={1.5} />
                  </div>
                </div>
                <h3 className="text-lg font-medium text-[#1A1A1A] mb-3 uppercase tracking-wide">
                  Heavy Metals
                </h3>
                <p className="text-[#6B7280] font-light leading-relaxed">
                  Lead, mercury, and cadmium in paints, pipes, and imported products that can cause neurological damage and developmental issues.
                </p>
              </div>

              {/* Phthalates & Plasticisers */}
              <div className="bg-white rounded-lg p-8 shadow-sm border border-gray-100 text-center">
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 bg-[#002DFF]/10 rounded-full flex items-center justify-center">
                    <Home className="w-8 h-8 text-[#002DFF]" strokeWidth={1.5} />
                  </div>
                </div>
                <h3 className="text-lg font-medium text-[#1A1A1A] mb-3 uppercase tracking-wide">
                  Phthalates & Plasticisers
                </h3>
                <p className="text-[#6B7280] font-light leading-relaxed">
                  Endocrine-disrupting chemicals in vinyl flooring, shower curtains, and plastic products that can affect reproductive health.
                </p>
              </div>

              {/* Pesticide Residues */}
              <div className="bg-white rounded-lg p-8 shadow-sm border border-gray-100 text-center">
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 bg-[#002DFF]/10 rounded-full flex items-center justify-center">
                    <Thermometer className="w-8 h-8 text-[#002DFF]" strokeWidth={1.5} />
                  </div>
                </div>
                <h3 className="text-lg font-medium text-[#1A1A1A] mb-3 uppercase tracking-wide">
                  Pesticide Residues
                </h3>
                <p className="text-[#6B7280] font-light leading-relaxed">
                  Chemical residues from pest control treatments and contaminated materials that can affect nervous system function.
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
                      Comprehensive Material Survey
                    </h3>
                    <p className="text-[#6B7280] font-light leading-relaxed">
                      Systematic documentation and sampling of all building materials, furnishings, and household products 
                      throughout your home, with particular focus on high-risk items and areas with poor ventilation.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-[#002DFF] rounded-full flex items-center justify-center text-white text-sm font-medium">
                    2
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-[#1A1A1A] mb-2">
                      Advanced Chemical Analysis
                    </h3>
                    <p className="text-[#6B7280] font-light leading-relaxed">
                      Material samples undergo sophisticated laboratory analysis using gas chromatography-mass spectrometry 
                      and other advanced techniques to identify specific toxic compounds and their concentrations.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-[#002DFF] rounded-full flex items-center justify-center text-white text-sm font-medium">
                    3
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-[#1A1A1A] mb-2">
                      Off-Gassing Assessment
                    </h3>
                    <p className="text-[#6B7280] font-light leading-relaxed">
                      Real-time monitoring of chemical emissions from materials and products using portable spectrometers 
                      to understand ongoing exposure levels and identify the most problematic sources.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-[#002DFF] rounded-full flex items-center justify-center text-white text-sm font-medium">
                    4
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-[#1A1A1A] mb-2">
                      Remediation Strategy Development
                    </h3>
                    <p className="text-[#6B7280] font-light leading-relaxed">
                      Creation of a prioritised action plan for removing or replacing toxic materials, improving ventilation, 
                      and selecting safer alternatives to reduce chemical exposure and create a healthier home environment.
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
              Ready to Eliminate Hidden Toxins?
            </h2>
            <p className="text-xl text-[#6B7280] font-light mb-12 max-w-2xl mx-auto">
              Take control of your home's chemical environment with our comprehensive material toxicity assessment.
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