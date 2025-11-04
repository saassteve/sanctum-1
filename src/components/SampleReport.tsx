import React, { useState, useEffect, useRef } from 'react';
import { ArrowLeft, FileText, TrendingUp, Shield, Zap, Wind, Award, CheckCircle } from 'lucide-react';

export default function SampleReport() {
  const [isVisible, setIsVisible] = useState(false);
  const [animatedScore, setAnimatedScore] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const targetScore = 78;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  useEffect(() => {
    if (isVisible) {
      const duration = 2000;
      const startTime = Date.now();

      const animate = () => {
        const now = Date.now();
        const elapsed = now - startTime;
        const progress = Math.min(elapsed / duration, 1);

        const easeProgress = 1 - Math.pow(1 - progress, 3);
        const current = Math.floor(easeProgress * targetScore);

        setAnimatedScore(current);

        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };

      requestAnimationFrame(animate);
    }
  }, [isVisible, targetScore]);

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
                <FileText className="w-4 h-4" />
                <span>Sample Report</span>
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1A1A1A] mb-8 leading-tight">
              Your Pre-Purchase{' '}
              <span className="text-sanctum-cyan-500">Property Health Report</span>
            </h1>
            <p className="text-xl md:text-2xl text-[#6B7280] font-light leading-relaxed max-w-3xl mx-auto">
              Before you commit to a UK property purchase, get the complete health picture. Our comprehensive
              assessment translates complex environmental data into your <span className="font-semibold text-sanctum-cyan-500">Sanctum Score™</span> and a clear,
              actionable plan. See exactly what you are buying and what it might cost to remedy.
            </p>
          </div>
        </section>

        {/* Report Summary Section */}
        <section ref={sectionRef} className="py-20 bg-gradient-to-br from-[#F7F8FA] to-white relative overflow-hidden">
          {/* Decorative glow effect */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-sanctum-cyan-400/5 rounded-full blur-3xl"></div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-12">
              <div className="inline-flex items-center space-x-2 mb-4">
                <Award className="w-8 h-8 text-sanctum-cyan-400" />
                <span className="text-sm font-semibold text-sanctum-cyan-500 uppercase tracking-wider">Proprietary Algorithm</span>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1A1A1A] mb-6">
                Your <span className="text-sanctum-cyan-500">Sanctum Score™</span>: One Number, Complete Clarity
              </h2>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Report Cover with Animated Score */}
              <div className="order-2 lg:order-1">
                <div className="bg-white rounded-2xl shadow-2xl border-2 border-gray-100 p-10 text-center relative overflow-hidden">
                  {/* Subtle gradient background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-sanctum-cyan-400/5 to-transparent"></div>

                  <div className="relative z-10">
                    <div className="flex justify-center mb-6">
                      <div className="w-20 h-20 bg-gradient-to-br from-sanctum-cyan-400 to-sanctum-cyan-500 rounded-full flex items-center justify-center shadow-lg">
                        <FileText className="w-10 h-10 text-white" strokeWidth={1.5} />
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-[#1A1A1A] mb-2">Sample Property Report</h3>
                    <p className="text-sm text-[#6B7280] mb-8">3-Bed Terraced House, Manchester</p>
                    <div className="text-center mb-8">
                      <div className="text-7xl font-bold text-sanctum-cyan-400 mb-2" style={{ textShadow: '0 2px 8px rgba(74, 144, 164, 0.3)' }}>
                        {animatedScore}
                      </div>
                      <div className="text-sm font-semibold text-[#6B7280] uppercase tracking-wider">
                        Sanctum Score™
                      </div>
                    </div>
                    <div className="space-y-3 text-sm">
                      <div className="flex justify-between items-center p-3 bg-gradient-to-r from-green-50 to-transparent rounded-lg">
                        <span className="text-[#6B7280] font-medium">Atmospheric Purity</span>
                        <span className="font-bold text-green-600">92</span>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-gradient-to-r from-blue-50 to-transparent rounded-lg">
                        <span className="text-[#6B7280] font-medium">Hydration Integrity</span>
                        <span className="font-bold text-blue-600">85</span>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-gradient-to-r from-amber-50 to-transparent rounded-lg">
                        <span className="text-[#6B7280] font-medium">EMF Hygiene</span>
                        <span className="font-bold text-amber-600">64</span>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-gradient-to-r from-blue-50 to-transparent rounded-lg">
                        <span className="text-[#6B7280] font-medium">Circadian Alignment</span>
                        <span className="font-bold text-blue-600">88</span>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-gradient-to-r from-red-50 to-transparent rounded-lg">
                        <span className="text-[#6B7280] font-medium">Material Toxicity</span>
                        <span className="font-bold text-red-600">61</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Explanatory Text */}
              <div className="order-1 lg:order-2">
                <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100">
                  <p className="text-lg md:text-xl text-[#6B7280] font-light leading-relaxed">
                    Every property receives a single, easy-to-understand <span className="font-semibold text-sanctum-cyan-500">Sanctum Score™</span> that provides an
                    immediate snapshot of its overall environmental health. This proprietary rating distils
                    over 200 data points from our comprehensive pre-purchase survey into one clear number.
                    Use it to negotiate price, budget for improvements, or make informed decisions,
                    all before you sign.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Deep Dive 1: Atmospheric Purity */}
        <section className="py-20 bg-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-sanctum-cyan-400/5 rounded-full blur-3xl"></div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Report Screenshot Placeholder */}
              <div>
                <div className="bg-gradient-to-br from-white to-sanctum-cyan-50/30 rounded-xl border border-gray-200 p-8 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-sanctum-cyan-400 to-sanctum-cyan-500 rounded-full flex items-center justify-center shadow-md">
                      <Wind className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-[#1A1A1A]">Atmospheric Purity Analysis</h3>
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
                  
                  <div className="mt-6 p-4 bg-gradient-to-r from-sanctum-cyan-50 to-sanctum-cyan-100/50 rounded-lg border-l-4 border-sanctum-cyan-500">
                    <p className="text-xs text-sanctum-cyan-900 font-medium">
                      <strong className="text-sanctum-cyan-600">Pre-Purchase Finding:</strong> Elevated formaldehyde detected in master bedroom.
                      Budget £800-£1,200 for air purification or negotiate £2k off purchase price.
                    </p>
                  </div>
                </div>
              </div>

              {/* Explanatory Text */}
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-[#1A1A1A] mb-6">
                  What's Really in the Air You'll Breathe
                </h3>
                <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                  <p className="text-lg text-[#6B7280] font-light leading-relaxed">
                    Before you buy, know exactly what you are breathing. We measure specific airborne contaminants
                    like Volatile Organic Compounds (VOCs) from furniture, building materials, and particulate
                    matter (PM₂.₅) that can impact respiratory health. Every measurement is compared to established
                    safety guidelines and translated into clear cost estimates, giving you information to support
                    price negotiations.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Deep Dive 2: Electromagnetic Hygiene */}
        <section className="py-20 bg-gradient-to-br from-[#F7F8FA] to-white relative overflow-hidden">
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-sanctum-cyan-300/5 rounded-full blur-3xl"></div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Explanatory Text */}
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-[#1A1A1A] mb-6">
                  Hidden EMF Issues Revealed
                </h3>
                <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                  <p className="text-lg text-[#6B7280] font-light leading-relaxed">
                    Wiring errors and electromagnetic fields are invisible but measurable. Before you purchase,
                    we map the AC electric and magnetic fields throughout the property, particularly in sleeping
                    areas. Our report identifies measured exposure levels and provides clear remediation costs.
                    Discover if that property requires additional work before you commit.
                  </p>
                </div>
              </div>

              {/* Report Screenshot Placeholder */}
              <div>
                <div className="bg-gradient-to-br from-white to-sanctum-cyan-50/30 rounded-xl border border-gray-200 p-8 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-sanctum-cyan-500 to-sanctum-cyan-600 rounded-full flex items-center justify-center shadow-md">
                      <Zap className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-[#1A1A1A]">EMF Field Mapping</h3>
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
                  
                  <div className="mt-6 p-4 bg-gradient-to-r from-orange-50 to-orange-100/50 rounded-lg border-l-4 border-orange-500">
                    <p className="text-xs text-orange-900 font-medium">
                      <strong className="text-orange-600">Cost Impact:</strong> Wiring remediation estimated at £3,500. Use this in
                      negotiations or plan post-purchase budget accordingly.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Action Plan Section */}
        <section className="py-20 bg-white relative overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-sanctum-cyan-400/5 rounded-full blur-3xl"></div>

          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-12">
              <div className="inline-flex items-center space-x-2 mb-4">
                <TrendingUp className="w-8 h-8 text-sanctum-cyan-400" />
                <span className="text-sm font-semibold text-sanctum-cyan-500 uppercase tracking-wider">Actionable Insights</span>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1A1A1A] mb-6">
                Your <span className="text-sanctum-cyan-500">Negotiation Roadmap</span>
              </h2>
              <p className="text-lg md:text-xl text-[#6B7280] font-light leading-relaxed max-w-2xl mx-auto">
                Every report includes a prioritised action plan with cost estimates. Use this information
                to negotiate the purchase price, budget for improvements, or make informed decisions.
                Knowledge supports better outcomes.
              </p>
            </div>

            {/* Priority Recommendations Screenshot */}
            <div className="bg-gradient-to-br from-white to-sanctum-cyan-50/30 rounded-xl border border-gray-200 p-8 shadow-lg">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-sanctum-cyan-400 to-sanctum-cyan-500 rounded-full flex items-center justify-center shadow-md">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-[#1A1A1A]">Priority Findings & Cost Estimates</h3>
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

                <div className="mt-6 p-6 bg-gradient-to-r from-sanctum-cyan-50 to-sanctum-cyan-100/50 rounded-xl border-l-4 border-sanctum-cyan-500 shadow-md">
                  <div className="flex items-center space-x-2 mb-3">
                    <div className="w-8 h-8 bg-sanctum-cyan-400 rounded-full flex items-center justify-center">
                      <CheckCircle className="w-5 h-5 text-white" />
                    </div>
                    <p className="text-base font-bold text-sanctum-cyan-600">
                      Negotiation Strategy
                    </p>
                  </div>
                  <p className="text-sm text-sanctum-cyan-900">
                    <strong className="text-sanctum-cyan-700">Total Remediation Cost: £4,000-£6,100</strong><br/>
                    Recommended negotiation: Reduce purchase price by £7,000 to cover remediation and compensate
                    for property condition. Alternatively, request seller remediation before completion.
                  </p>
                </div>
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
              Get Your Property's <span className="text-sanctum-cyan-200">Sanctum Score</span> Before You Sign
            </h2>
            <p className="text-xl md:text-2xl text-white/95 font-light mb-12 max-w-2xl mx-auto leading-relaxed">
              Make informed property decisions. Book your pre-purchase home health
              survey today and negotiate from a position of knowledge.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="group px-12 py-5 text-base font-bold text-sanctum-cyan-600 bg-white hover:bg-gray-50 transition-all duration-300 transform hover:scale-105 shadow-2xl rounded-lg inline-flex items-center">
                <span>BOOK YOUR PRE-PURCHASE SURVEY</span>
                <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>

            {/* Trust indicators */}
            <div className="mt-12 pt-8 border-t border-white/20">
              <div className="flex flex-wrap justify-center gap-8 text-white/80 text-sm">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4" />
                  <span>48-Hour Report</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4" />
                  <span>200+ Data Points</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4" />
                  <span>Negotiation Support</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}