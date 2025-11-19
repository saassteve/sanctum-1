import React from 'react';
import { Check, ArrowLeft, Shield, Clock, FileText, Zap, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function PricingPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#F9F8F4]">
      <section className="pt-32 pb-20 px-6 relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <button
            onClick={() => navigate('/')}
            className="mb-12 flex items-center gap-2 text-gray-500 hover:text-emerald-600 transition-colors font-mono-tech text-xs tracking-widest uppercase"
          >
            <ArrowLeft size={16} />
            Back to Home
          </button>

          <div className="max-w-4xl mx-auto text-center">
            <div className="font-mono-tech text-emerald-600 text-xs tracking-widest mb-6 flex items-center justify-center gap-2">
              <span className="inline-block w-8 h-[1px] bg-emerald-600"></span>
              TRANSPARENT PRICING
              <span className="inline-block w-8 h-[1px] bg-emerald-600"></span>
            </div>
            <h1 className="font-serif-display text-5xl lg:text-7xl mb-8 text-[#1c1c1c]">
              Know what you're <br/>
              <span className="italic text-gray-400">paying for.</span>
            </h1>
            <p className="text-lg text-gray-600 font-light leading-relaxed max-w-2xl mx-auto">
              One comprehensive assessment. No hidden fees. Complete environmental intelligence
              delivered within 48 hours.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="border border-gray-200 bg-white p-8 rounded-sm hover:shadow-xl transition-all duration-300">
              <div className="mb-6">
                <span className="font-mono-tech text-xs text-gray-500 tracking-widest uppercase">Light, Water and Air</span>
                <div className="mt-4 flex items-baseline gap-2">
                  <span className="font-mono-tech text-5xl font-bold text-[#1c1c1c]">£750</span>
                  <span className="font-mono-tech text-sm text-gray-500">per property</span>
                </div>
              </div>

              <p className="text-gray-600 font-light mb-6 leading-relaxed">
                Core environmental diagnostics for light quality, water purity and air quality assessment.
              </p>

              <button
                onClick={() => navigate('/checkout?package=light_water_air')}
                className="w-full px-6 py-4 bg-[#1c1c1c] text-white font-mono-tech text-sm rounded hover:bg-gray-800 transition-all mb-8"
              >
                SELECT PACKAGE
              </button>

              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <Check size={18} className="text-emerald-600 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-gray-700">Air quality testing (PM2.5, VOCs)</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check size={18} className="text-emerald-600 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-gray-700">Water quality analysis (heavy metals)</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check size={18} className="text-emerald-600 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-gray-700">Circadian light analysis</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check size={18} className="text-emerald-600 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-gray-700">Sanctum Score™ report</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check size={18} className="text-emerald-600 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-gray-700">48-hour turnaround</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check size={18} className="text-emerald-600 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-gray-700">Digital report delivery</span>
                </div>
              </div>
            </div>

            <div className="border-2 border-emerald-500 bg-white p-8 rounded-sm shadow-xl relative">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-emerald-600 text-white font-mono-tech text-xs rounded-full">
                MOST POPULAR
              </div>

              <div className="mb-6">
                <span className="font-mono-tech text-xs text-emerald-600 tracking-widest uppercase">Full Screen</span>
                <div className="mt-4 flex items-baseline gap-2">
                  <span className="font-mono-tech text-5xl font-bold text-[#1c1c1c]">£1,500</span>
                  <span className="font-mono-tech text-sm text-gray-500">per property</span>
                </div>
              </div>

              <p className="text-gray-600 font-light mb-6 leading-relaxed">
                Complete diagnostic suite including EMF mapping and material toxicity screening for comprehensive property analysis.
              </p>

              <button
                onClick={() => navigate('/checkout?package=full_screen')}
                className="w-full px-6 py-4 bg-emerald-600 text-white font-mono-tech text-sm rounded hover:bg-emerald-700 transition-all mb-8"
              >
                SELECT PACKAGE
              </button>

              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <Check size={18} className="text-emerald-600 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-gray-700 font-medium">Everything in Light, Water and Air, plus:</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check size={18} className="text-emerald-600 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-gray-700">EMF radiation mapping</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check size={18} className="text-emerald-600 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-gray-700">Material toxicity screening</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check size={18} className="text-emerald-600 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-gray-700">Extended water analysis (microplastics)</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check size={18} className="text-emerald-600 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-gray-700">Mould and bacteria sampling</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check size={18} className="text-emerald-600 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-gray-700">Detailed report</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check size={18} className="text-emerald-600 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-gray-700">30-min consultation call</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check size={18} className="text-emerald-600 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-gray-700">Priority scheduling</span>
                </div>
              </div>
            </div>

            <div className="border border-gray-200 bg-white p-8 rounded-sm hover:shadow-xl transition-all duration-300">
              <div className="mb-6">
                <span className="font-mono-tech text-xs text-gray-500 tracking-widest uppercase">Full Screen + Lab</span>
                <div className="mt-4 flex items-baseline gap-2">
                  <span className="font-mono-tech text-5xl font-bold text-[#1c1c1c]">£3,000</span>
                  <span className="font-mono-tech text-sm text-gray-500">per property</span>
                </div>
              </div>

              <p className="text-gray-600 font-light mb-6 leading-relaxed">
                White-glove service with comprehensive laboratory testing for high-value properties requiring exhaustive analysis.
              </p>

              <button
                onClick={() => navigate('/checkout?package=full_screen_lab')}
                className="w-full px-6 py-4 bg-[#1c1c1c] text-white font-mono-tech text-sm rounded hover:bg-gray-800 transition-all mb-8"
              >
                SELECT PACKAGE
              </button>

              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <Check size={18} className="text-emerald-600 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-gray-700 font-medium">Everything in Full Screen, plus:</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check size={18} className="text-emerald-600 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-gray-700">Comprehensive laboratory testing</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check size={18} className="text-emerald-600 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-gray-700">Soil and garden contamination testing</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check size={18} className="text-emerald-600 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-gray-700">Radon gas monitoring (7-day)</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check size={18} className="text-emerald-600 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-gray-700">Acoustic environment assessment</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check size={18} className="text-emerald-600 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-gray-700">Custom remediation roadmap</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check size={18} className="text-emerald-600 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-gray-700">Executive report</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check size={18} className="text-emerald-600 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-gray-700">1-hour strategy consultation</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check size={18} className="text-emerald-600 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-gray-700">Extended turnaround (5-7 days for lab analysis)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-serif-display text-4xl lg:text-5xl mb-4 text-[#1c1c1c]">
              What Every Package Includes
            </h2>
            <p className="text-gray-600 font-light text-lg">
              No hidden fees. No surprises. Just comprehensive environmental intelligence.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield size={28} className="text-emerald-600" />
              </div>
              <h3 className="font-serif-display text-xl mb-2">ISO Certified</h3>
              <p className="text-sm text-gray-600 font-light">
                All testing performed by ISO 17025 accredited laboratories
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock size={28} className="text-blue-600" />
              </div>
              <h3 className="font-serif-display text-xl mb-2">Fast Turnaround</h3>
              <p className="text-sm text-gray-600 font-light">
                Standard 48-hour delivery from on-site assessment to report (lab packages 5-7 days)
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FileText size={28} className="text-purple-600" />
              </div>
              <h3 className="font-serif-display text-xl mb-2">Digital Report</h3>
              <p className="text-sm text-gray-600 font-light">
                Comprehensive PDF with executive summary and detailed findings
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap size={28} className="text-amber-600" />
              </div>
              <h3 className="font-serif-display text-xl mb-2">Actionable Data</h3>
              <p className="text-sm text-gray-600 font-light">
                Clear recommendations with estimated remediation costs
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-[#F9F8F4]">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-serif-display text-4xl lg:text-5xl mb-4 text-[#1c1c1c]">
              Common Questions
            </h2>
          </div>

          <div className="space-y-6">
            <div className="bg-white border border-gray-200 p-6 rounded-sm">
              <h3 className="font-serif-display text-xl mb-2">How long does the assessment take?</h3>
              <p className="text-gray-600 font-light">
                Our specialists need 90 minutes on-site to deploy sensors and collect samples.
                You'll receive your complete report within 48 hours for standard packages. Lab-based testing requires 5-7 days.
              </p>
            </div>

            <div className="bg-white border border-gray-200 p-6 rounded-sm">
              <h3 className="font-serif-display text-xl mb-2">Can I use this for price negotiation?</h3>
              <p className="text-gray-600 font-light">
                Absolutely. The report includes estimated remediation costs for any issues found,
                giving you concrete data to negotiate with sellers.
              </p>
            </div>

            <div className="bg-white border border-gray-200 p-6 rounded-sm">
              <h3 className="font-serif-display text-xl mb-2">What's the difference between standard and lab testing?</h3>
              <p className="text-gray-600 font-light">
                Standard packages use professional-grade portable equipment for immediate analysis. Lab packages include samples sent to ISO-certified laboratories for more comprehensive testing, requiring additional processing time.
              </p>
            </div>

            <div className="bg-white border border-gray-200 p-6 rounded-sm">
              <h3 className="font-serif-display text-xl mb-2">Do you cover all UK regions?</h3>
              <p className="text-gray-600 font-light">
                Yes, we serve properties across England, Scotland, and Wales.
                Travel costs are included in all package prices.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-serif-display text-4xl lg:text-5xl mb-6">
            Ready to get started?
          </h2>
          <p className="text-gray-600 text-lg font-light mb-10 max-w-2xl mx-auto">
            Schedule your property assessment today and gain the environmental intelligence
            you need to make an informed purchase decision.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-[#1c1c1c] text-white font-mono-tech text-sm rounded hover:bg-emerald-600 transition-all flex items-center justify-center gap-2">
              SCHEDULE ASSESSMENT <ChevronRight size={16} />
            </button>
            <button
              onClick={() => navigate('/')}
              className="px-8 py-4 border border-gray-300 text-gray-700 font-mono-tech text-sm rounded hover:border-gray-800 transition-all"
            >
              BACK TO HOME
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
