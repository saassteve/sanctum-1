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
              The Sanctum Report: Clarity in Every Detail
            </h1>
            <p className="text-xl text-[#6B7280] font-light leading-relaxed max-w-3xl mx-auto">
              Your home's health data is complex. We translate it into a clear, actionable blueprint for optimal well-being. 
              Explore our sample report below to see how we turn comprehensive diagnostics into a simple, step-by-step plan.
            </p>
          </div>
        </section>

        {/* Report Summary Section */}
        <section className="py-16 bg-[#F7F8FA]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-light text-[#1A1A1A] mb-6">
                Your Personalised Health Dashboard
              </h2>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Report Cover Image Placeholder */}
              <div className="order-2 lg:order-1">
                <div className="bg-white rounded-lg shadow-xl border border-gray-200 p-8 text-center">
                  <div className="flex justify-center mb-6">
                    <FileText className="w-16 h-16 text-[#002DFF]" strokeWidth={1} />
                  </div>
                  <h3 className="text-2xl font-light text-[#1A1A1A] mb-4">The Williams Family</h3>
                  <div className="text-center mb-6">
                    <div className="text-6xl font-light text-[#002DFF] mb-2">78</div>
                    <div className="text-sm font-medium text-[#6B7280] uppercase tracking-wider">
                      Sanctum Score
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
                  Every client receives a single, easy-to-understand score that gives them an immediate snapshot 
                  of their home's overall environmental health. This comprehensive rating distills over 200 data 
                  points into one clear number, whilst breaking down performance across each critical category. 
                  Your Sanctum Score becomes the foundation for understanding your home's current state and 
                  tracking improvements over time.
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
                      <strong>Key Finding:</strong> Elevated formaldehyde levels detected in master bedroom, 
                      likely from new furniture. Immediate ventilation recommended.
                    </p>
                  </div>
                </div>
              </div>

              {/* Explanatory Text */}
              <div>
                <h3 className="text-2xl font-medium text-[#1A1A1A] mb-4">
                  Making the Invisible Visible
                </h3>
                <p className="text-[#6B7280] font-light leading-relaxed">
                  We go beyond basic air filters, measuring specific airborne contaminants like Volatile Organic 
                  Compounds (VOCs) from furniture and particulate matter (PM₂.₅) that can impact respiratory and 
                  cognitive health. Our report shows you exactly what's in your air and compares it to scientific 
                  safety guidelines. Each measurement is contextualised with clear explanations of health impacts 
                  and specific recommendations for improvement.
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
                  Bringing Clarity to EMFs
                </h3>
                <p className="text-[#6B7280] font-light leading-relaxed">
                  Electromagnetic Fields are a source of confusion and concern. We use precise instrumentation 
                  to map the AC electric and magnetic fields in your home, particularly in sleeping areas. 
                  Our report identifies legitimate exposure risks from wiring errors or device placement and 
                  provides clear, evidence-based mitigation strategies. Every measurement is presented with 
                  context, helping you understand what matters and what doesn't.
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
                          <span className="text-[#6B7280]">WiFi Router</span>
                          <span className="text-yellow-600">-42 dBm</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-[#6B7280]">Smart Metre</span>
                          <span className="text-red-600">-38 dBm</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-[#6B7280]">Mobile Devices</span>
                          <span className="text-green-600">-55 dBm</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-6 p-3 bg-orange-50 rounded border border-orange-200">
                    <p className="text-xs text-orange-800">
                      <strong>Priority Action:</strong> Relocate WiFi router 3 metres from desk area. 
                      Consider ethernet connection for home office.
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
                Your Prioritised Action Plan
              </h2>
              <p className="text-lg text-[#6B7280] font-light leading-relaxed max-w-2xl mx-auto">
                Data is useless without a clear plan. The most important part of our report is the prioritised roadmap. 
                We tell you exactly what to fix first, based on the biggest potential impact to your health and the ease of implementation.
              </p>
            </div>

            {/* Priority Recommendations Screenshot */}
            <div className="bg-[#F7F8FA] rounded-lg border border-gray-200 p-8">
              <div className="flex items-center space-x-3 mb-6">
                <TrendingUp className="w-6 h-6 text-[#002DFF]" />
                <h3 className="text-lg font-medium text-[#1A1A1A]">Priority Recommendations</h3>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-4 p-4 bg-white rounded-lg border border-red-200">
                  <div className="flex-shrink-0 w-8 h-8 bg-red-500 rounded-full flex items-center justify-center text-white text-sm font-medium">
                    1
                  </div>
                  <div className="flex-1">
                    <h4 className="text-sm font-medium text-[#1A1A1A] mb-1">
                      High Priority: Reduce Formaldehyde Exposure
                    </h4>
                    <p className="text-sm text-[#6B7280] mb-2">
                      Increase ventilation in master bedroom and consider air purifier with activated carbon filter.
                    </p>
                    <div className="flex items-center space-x-4 text-xs text-[#6B7280]">
                      <span>Impact: High</span>
                      <span>Effort: Low</span>
                      <span>Cost: £200-500</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-4 bg-white rounded-lg border border-orange-200">
                  <div className="flex-shrink-0 w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white text-sm font-medium">
                    2
                  </div>
                  <div className="flex-1">
                    <h4 className="text-sm font-medium text-[#1A1A1A] mb-1">
                      Medium Priority: Relocate WiFi Router
                    </h4>
                    <p className="text-sm text-[#6B7280] mb-2">
                      Move router away from frequently occupied areas, particularly the home office desk.
                    </p>
                    <div className="flex items-center space-x-4 text-xs text-[#6B7280]">
                      <span>Impact: Medium</span>
                      <span>Effort: Low</span>
                      <span>Cost: £0-50</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-4 bg-white rounded-lg border border-blue-200">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm font-medium">
                    3
                  </div>
                  <div className="flex-1">
                    <h4 className="text-sm font-medium text-[#1A1A1A] mb-1">
                      Low Priority: Optimise Evening Lighting
                    </h4>
                    <p className="text-sm text-[#6B7280] mb-2">
                      Install warm-light bulbs (2700K) in bedrooms and consider blue light filtering after sunset.
                    </p>
                    <div className="flex items-center space-x-4 text-xs text-[#6B7280]">
                      <span>Impact: Medium</span>
                      <span>Effort: Medium</span>
                      <span>Cost: £100-300</span>
                    </div>
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
              Ready for Your Own Blueprint?
            </h2>
            <p className="text-xl text-[#6B7280] font-light mb-12 max-w-2xl mx-auto">
              Take the first step toward a healthier home. Schedule your no-obligation discovery call today.
            </p>
            <button className="px-12 py-4 text-sm font-medium text-white bg-[#002DFF] hover:bg-[#0026CC] transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
              SCHEDULE AN ASSESSMENT
            </button>
          </div>
        </section>
      </main>
    </div>
  );
}