import React from 'react';
import { ArrowLeft, FileText, TrendingUp, Shield, Zap, Wind } from 'lucide-react';

export default function SampleReport() {
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
              Your Pre-Purchase Property Health Report
            </h1>
            <p className="text-xl text-[#6B7280] font-light leading-relaxed max-w-3xl mx-auto">
              Before you commit to a UK property purchase, get the complete health picture. Our comprehensive
              assessment translates complex environmental data into your Sanctum Score™ and a clear,
              actionable plan. See exactly what you are buying and what it might cost to remedy.
            </p>
          </div>
        </section>

        {/* Report Summary Section */}
        <section className="py-16 bg-[#F7F8FA]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-light text-[#1A1A1A] mb-6">
                Your Sanctum Score™: One Number, Complete Clarity
              </h2>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Report Cover Image Placeholder */}
              <div className="order-2 lg:order-1">
                <div className="bg-white rounded-lg shadow-xl border border-gray-200 p-8 text-center">
                  <div className="flex justify-center mb-6">
                    <FileText className="w-16 h-16 text-[#002DFF]" strokeWidth={1} />
                  </div>
                  <h3 className="text-2xl font-light text-[#1A1A1A] mb-2">Sample Property Report</h3>
                  <p className="text-sm text-[#6B7280] mb-6">3-Bed Terraced House, Manchester</p>
                  <div className="text-center mb-6">
                    <div className="text-6xl font-light text-[#002DFF] mb-2">78</div>
                    <div className="text-sm font-medium text-[#6B7280] uppercase tracking-wider">
                      Sanctum Score™
                    </div>
                  </div>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-[#6B7280]">Atmospheric Purity</span>
                      <span className="font-medium text-[#002DFF]">92</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#6B7280]">Hydration Integrity</span>
                      <span className="font-medium text-[#4D7FFF]">85</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#6B7280]">EMF Hygiene</span>
                      <span className="font-medium text-[#B3D9FF]">64</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#6B7280]">Circadian Alignment</span>
                      <span className="font-medium text-[#4D7FFF]">88</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#6B7280]">Material Toxicity</span>
                      <span className="font-medium text-[#B3D9FF]">61</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Explanatory Text */}
              <div className="order-1 lg:order-2">
                <p className="text-lg text-[#6B7280] font-light leading-relaxed">
                  Every property receives a single, easy-to-understand Sanctum Score™ that provides an
                  immediate snapshot of its overall environmental health. This proprietary rating distils
                  over 200 data points from our comprehensive pre-purchase survey into one clear number.
                  Use it to negotiate price, budget for improvements, or make informed decisions,
                  all before you sign.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Deep Dive 1: Atmospheric Purity */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Report Screenshot Placeholder */}
              <div>
                <div className="bg-[#F7F8FA] rounded-lg border border-gray-200 p-8">
                  <div className="flex items-center space-x-3 mb-6">
                    <Wind className="w-6 h-6 text-[#002DFF]" />
                    <h3 className="text-lg font-medium text-[#1A1A1A]">Atmospheric Purity Analysis</h3>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex justify-between items-center p-3 bg-white rounded border">
                      <span className="text-sm text-[#6B7280]">PM2.5 Particles</span>
                      <div className="flex items-center space-x-2">
                        <div className="w-16 h-2 bg-gray-200 rounded-full">
                          <div className="w-3/4 h-full bg-green-500 rounded-full"></div>
                        </div>
                        <span className="text-sm font-medium text-green-600">8.2 μg/m³</span>
                      </div>
                    </div>
                    
                    <div className="flex justify-between items-center p-3 bg-white rounded border">
                      <span className="text-sm text-[#6B7280]">VOCs Total</span>
                      <div className="flex items-center space-x-2">
                        <div className="w-16 h-2 bg-gray-200 rounded-full">
                          <div className="w-1/2 h-full bg-yellow-500 rounded-full"></div>
                        </div>
                        <span className="text-sm font-medium text-yellow-600">245 ppb</span>
                      </div>
                    </div>
                    
                    <div className="flex justify-between items-center p-3 bg-white rounded border">
                      <span className="text-sm text-[#6B7280]">Formaldehyde</span>
                      <div className="flex items-center space-x-2">
                        <div className="w-16 h-2 bg-gray-200 rounded-full">
                          <div className="w-1/4 h-full bg-red-500 rounded-full"></div>
                        </div>
                        <span className="text-sm font-medium text-red-600">18 ppb</span>
                      </div>
                    </div>
                    
                    <div className="flex justify-between items-center p-3 bg-white rounded border">
                      <span className="text-sm text-[#6B7280]">CO₂ Levels</span>
                      <div className="flex items-center space-x-2">
                        <div className="w-16 h-2 bg-gray-200 rounded-full">
                          <div className="w-4/5 h-full bg-green-500 rounded-full"></div>
                        </div>
                        <span className="text-sm font-medium text-green-600">420 ppm</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-6 p-3 bg-blue-50 rounded border border-blue-200">
                    <p className="text-xs text-blue-800">
                      <strong>Pre-Purchase Finding:</strong> Elevated formaldehyde detected in master bedroom. 
                      Budget £800-£1,200 for air purification or negotiate £2k off purchase price.
                    </p>
                  </div>
                </div>
              </div>

              {/* Explanatory Text */}
              <div>
                <h3 className="text-2xl font-medium text-[#1A1A1A] mb-4">
                  What's Really in the Air You'll Breathe
                </h3>
                <p className="text-[#6B7280] font-light leading-relaxed">
                  Before you buy, know exactly what you are breathing. We measure specific airborne contaminants
                  like Volatile Organic Compounds (VOCs) from furniture, building materials, and particulate
                  matter (PM₂.₅) that can impact respiratory health. Every measurement is compared to established
                  safety guidelines and translated into clear cost estimates, giving you information to support
                  price negotiations.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Deep Dive 2: Electromagnetic Hygiene */}
        <section className="py-16 bg-[#F7F8FA]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Explanatory Text */}
              <div>
                <h3 className="text-2xl font-medium text-[#1A1A1A] mb-4">
                  Hidden EMF Issues Revealed
                </h3>
                <p className="text-[#6B7280] font-light leading-relaxed">
                  Wiring errors and electromagnetic fields are invisible but measurable. Before you purchase,
                  we map the AC electric and magnetic fields throughout the property, particularly in sleeping
                  areas. Our report identifies measured exposure levels and provides clear remediation costs.
                  Discover if that property requires additional work before you commit.
                </p>
              </div>

              {/* Report Screenshot Placeholder */}
              <div>
                <div className="bg-white rounded-lg border border-gray-200 p-8 shadow-sm">
                  <div className="flex items-center space-x-3 mb-6">
                    <Zap className="w-6 h-6 text-[#002DFF]" />
                    <h3 className="text-lg font-medium text-[#1A1A1A]">EMF Field Mapping</h3>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="grid grid-cols-3 gap-2 text-xs text-center">
                      <div className="p-2 bg-green-100 rounded">
                        <div className="font-medium text-green-800">Master Bedroom</div>
                        <div className="text-green-600">0.8 mG</div>
                        <div className="text-green-500">Low Risk</div>
                      </div>
                      <div className="p-2 bg-yellow-100 rounded">
                        <div className="font-medium text-yellow-800">Living Room</div>
                        <div className="text-yellow-600">2.3 mG</div>
                        <div className="text-yellow-500">Moderate</div>
                      </div>
                      <div className="p-2 bg-red-100 rounded">
                        <div className="font-medium text-red-800">Home Office</div>
                        <div className="text-red-600">4.7 mG</div>
                        <div className="text-red-500">High Risk</div>
                      </div>
                    </div>
                    
                    <div className="border-t pt-4">
                      <h4 className="text-sm font-medium text-[#1A1A1A] mb-2">RF Radiation Sources</h4>
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className="text-[#6B7280]">Neighbouring Wireless</span>
                          <span className="text-yellow-600">-42 dBm</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-[#6B7280]">Smart Metre</span>
                          <span className="text-red-600">-38 dBm</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-[#6B7280]">External Sources</span>
                          <span className="text-green-600">-55 dBm</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-6 p-3 bg-orange-50 rounded border border-orange-200">
                    <p className="text-xs text-orange-800">
                      <strong>Cost Impact:</strong> Wiring remediation estimated at £3,500. Use this in 
                      negotiations or plan post-purchase budget accordingly.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Action Plan Section */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-light text-[#1A1A1A] mb-6">
                Your Negotiation Roadmap
              </h2>
              <p className="text-lg text-[#6B7280] font-light leading-relaxed max-w-2xl mx-auto">
                Every report includes a prioritised action plan with cost estimates. Use this information
                to negotiate the purchase price, budget for improvements, or make informed decisions.
                Knowledge supports better outcomes.
              </p>
            </div>

            {/* Priority Recommendations Screenshot */}
            <div className="bg-[#F7F8FA] rounded-lg border border-gray-200 p-8">
              <div className="flex items-center space-x-3 mb-6">
                <TrendingUp className="w-6 h-6 text-[#002DFF]" />
                <h3 className="text-lg font-medium text-[#1A1A1A]">Priority Findings & Cost Estimates</h3>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-4 p-4 bg-white rounded-lg border border-red-200">
                  <div className="flex-shrink-0 w-8 h-8 bg-red-500 rounded-full flex items-center justify-center text-white text-sm font-medium">
                    1
                  </div>
                  <div className="flex-1">
                    <h4 className="text-sm font-medium text-[#1A1A1A] mb-1">
                      High Priority: Formaldehyde Mitigation
                    </h4>
                    <p className="text-sm text-[#6B7280] mb-2">
                      Master bedroom requires immediate ventilation improvements and air purification system.
                    </p>
                    <div className="flex items-center space-x-4 text-xs text-[#6B7280]">
                      <span>Health Impact: High</span>
                      <span>Remediation Cost: £800-£1,200</span>
                      <span className="text-red-600 font-semibold">Negotiation Leverage: £2,000</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-4 bg-white rounded-lg border border-orange-200">
                  <div className="flex-shrink-0 w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white text-sm font-medium">
                    2
                  </div>
                  <div className="flex-1">
                    <h4 className="text-sm font-medium text-[#1A1A1A] mb-1">
                      Medium Priority: EMF Wiring Issues
                    </h4>
                    <p className="text-sm text-[#6B7280] mb-2">
                      Home office area shows elevated EMF readings requiring electrical work.
                    </p>
                    <div className="flex items-center space-x-4 text-xs text-[#6B7280]">
                      <span>Health Impact: Medium</span>
                      <span>Remediation Cost: £3,000-£4,500</span>
                      <span className="text-orange-600 font-semibold">Negotiation Leverage: £5,000</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-4 bg-white rounded-lg border border-blue-200">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm font-medium">
                    3
                  </div>
                  <div className="flex-1">
                    <h4 className="text-sm font-medium text-[#1A1A1A] mb-1">
                      Low Priority: Lighting Optimisation
                    </h4>
                    <p className="text-sm text-[#6B7280] mb-2">
                      Install circadian-friendly lighting throughout property for better sleep quality.
                    </p>
                    <div className="flex items-center space-x-4 text-xs text-[#6B7280]">
                      <span>Health Impact: Low-Medium</span>
                      <span>Remediation Cost: £200-£400</span>
                      <span className="text-blue-600 font-semibold">Optional Upgrade</span>
                    </div>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-green-50 rounded-lg border-2 border-green-200">
                  <p className="text-sm font-semibold text-green-800 mb-1">
                    💡 Negotiation Strategy
                  </p>
                  <p className="text-xs text-green-700">
                    <strong>Total Remediation Cost: £4,000-£6,100</strong><br/>
                    Recommended negotiation: Reduce purchase price by £7,000 to cover remediation and compensate 
                    for property condition. Alternatively, request seller remediation before completion.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-24 bg-[#F7F8FA]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl md:text-5xl font-light text-[#1A1A1A] mb-8">
              Get Your Property's Sanctum Score Before You Sign
            </h2>
            <p className="text-xl text-[#6B7280] font-light mb-12 max-w-2xl mx-auto">
              Make informed property decisions. Book your pre-purchase home health
              survey today and negotiate from a position of knowledge.
            </p>
            <button className="px-12 py-4 text-sm font-medium text-white bg-[#002DFF] hover:bg-[#0026CC] transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
              BOOK YOUR PRE-PURCHASE SURVEY
            </button>
          </div>
        </section>
      </main>
    </div>
  );
}