import React, { useState, useEffect, useRef } from 'react';
import { ArrowLeft, FileText, Wind, Droplets, Zap, Sun, Shield, Download, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function SampleReport() {
  const [isVisible, setIsVisible] = useState(false);
  const [animatedScore, setAnimatedScore] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const targetScore = 78;
  const navigate = useNavigate();

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
    <div className="min-h-screen bg-[#F9F8F4]">
      {/* Hero Section */}
      <section id="sample" className="pt-32 pb-20 px-6 relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          {/* Back Button */}
          <button
            onClick={() => navigate('/')}
            className="mb-12 flex items-center gap-2 text-gray-500 hover:text-emerald-600 transition-colors font-mono-tech text-xs tracking-widest uppercase"
          >
            <ArrowLeft size={16} />
            Back to Home
          </button>

          <div className="max-w-4xl">
            <div className="font-mono-tech text-emerald-600 text-xs tracking-widest mb-6 flex items-center gap-2">
              <span className="inline-block w-8 h-[1px] bg-emerald-600"></span>
              SAMPLE DIAGNOSTIC REPORT
            </div>
            <h1 className="font-serif-display text-5xl lg:text-7xl mb-8 text-[#1c1c1c]">
              See what you're <br/>
              <span className="italic text-gray-400">really buying.</span>
            </h1>
            <p className="text-lg text-gray-600 font-light leading-relaxed max-w-2xl mb-10">
              Before you commit to a property purchase, get the complete environmental picture.
              Our diagnostic report translates complex data into actionable insights.
            </p>
            <a
              href="/sample-report.pdf"
              download="Sanctum-Sample-Report.pdf"
              className="px-8 py-4 bg-[#1c1c1c] text-white font-mono-tech text-sm rounded hover:bg-gray-800 transition-all hover:translate-y-[-2px] shadow-xl shadow-gray-200/50 flex items-center gap-2 w-fit"
            >
              <Download size={16} />
              DOWNLOAD SAMPLE PDF
            </a>
          </div>
        </div>
      </section>

      {/* Score Widget Section */}
      <section ref={sectionRef} className="py-24 bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="font-mono-tech text-emerald-600 text-xs tracking-widest mb-6">
              [ AGGREGATE HEALTH INDEX ]
            </div>
            <h2 className="font-serif-display text-4xl lg:text-5xl mb-6 leading-tight">
              Your property's <br/><span className="text-emerald-600">biological safety score.</span>
            </h2>
            <p className="text-gray-600 text-lg font-light leading-relaxed mb-8">
              Over 200 environmental data points distilled into one actionable number.
              The Sanctum Score tells you exactly what you're walking into before you sign.
            </p>

            <div className="space-y-3">
              <div className="flex justify-between items-center p-4 border border-gray-200 rounded hover:border-emerald-200 transition-colors">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center">
                    <Wind size={16} className="text-emerald-600" />
                  </div>
                  <span className="font-mono-tech text-sm text-gray-700">Atmospheric Purity</span>
                </div>
                <span className="font-mono-tech text-lg font-bold text-emerald-600">92</span>
              </div>

              <div className="flex justify-between items-center p-4 border border-gray-200 rounded hover:border-blue-200 transition-colors">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                    <Droplets size={16} className="text-blue-600" />
                  </div>
                  <span className="font-mono-tech text-sm text-gray-700">Hydration Integrity</span>
                </div>
                <span className="font-mono-tech text-lg font-bold text-blue-600">85</span>
              </div>

              <div className="flex justify-between items-center p-4 border border-gray-200 rounded hover:border-purple-200 transition-colors">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                    <Zap size={16} className="text-purple-600" />
                  </div>
                  <span className="font-mono-tech text-sm text-gray-700">EMF Hygiene</span>
                </div>
                <span className="font-mono-tech text-lg font-bold text-amber-600">64</span>
              </div>

              <div className="flex justify-between items-center p-4 border border-gray-200 rounded hover:border-amber-200 transition-colors">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center">
                    <Sun size={16} className="text-amber-600" />
                  </div>
                  <span className="font-mono-tech text-sm text-gray-700">Circadian Alignment</span>
                </div>
                <span className="font-mono-tech text-lg font-bold text-amber-600">88</span>
              </div>
            </div>
          </div>

          {/* Score Display */}
          <div className="relative flex justify-center py-10">
            <div className="relative w-80 h-80">
              {/* Rotating Rings */}
              <div className="absolute inset-0 border border-gray-200 rounded-full"></div>
              <div className="absolute inset-8 border-2 border-dashed border-gray-300 rounded-full animate-[spin_30s_linear_infinite]"></div>
              <div className="absolute inset-0 rounded-full border-t-2 border-emerald-500 rotate-45"></div>

              {/* Center Score */}
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="font-mono-tech text-emerald-600 text-xs tracking-widest mb-4">SANCTUM SCORE</span>
                <span className="font-mono-tech text-9xl font-bold text-[#1c1c1c] tracking-tighter">
                  {animatedScore}
                </span>
                <div className="mt-4 px-4 py-1 bg-emerald-50 text-emerald-600 text-xs rounded-full border border-emerald-200 flex items-center gap-2 font-mono-tech">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
                  GOOD CONDITION
                </div>
              </div>

              {/* Property Label */}
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-white border border-gray-200 px-4 py-2 rounded font-mono-tech text-xs text-gray-600 whitespace-nowrap">
                3-BED TERRACED • MANCHESTER
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Report Sections Preview */}
      <section className="py-24 bg-[#F9F8F4]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-serif-display text-4xl lg:text-5xl mb-4 text-[#1c1c1c]">
              What's Inside the Report
            </h2>
            <p className="text-gray-600 font-light text-lg">
              Every section backed by lab-grade measurements and expert analysis.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Section 1 */}
            <div className="border border-gray-200 bg-white p-8 rounded-sm hover:shadow-xl transition-all duration-300 group">
              <div className="flex justify-between items-start mb-6">
                <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center group-hover:bg-emerald-600 transition-colors">
                  <Wind size={24} className="text-emerald-600 group-hover:text-white transition-colors" />
                </div>
                <span className="font-mono-tech text-xs text-gray-400">SECTION 1</span>
              </div>
              <h3 className="font-serif-display text-2xl mb-4">Atmospheric Purity</h3>
              <p className="text-gray-600 font-light mb-6 leading-relaxed">
                PM2.5 particle counts, VOC off-gassing from paint and adhesives, formaldehyde levels,
                and hidden mold spore density mapped room-by-room.
              </p>
              <div className="p-4 bg-emerald-50 border-l-4 border-emerald-500 rounded">
                <p className="text-xs font-mono-tech text-emerald-900">
                  <strong>FINDING:</strong> Elevated formaldehyde in master bedroom.
                  Budget £800-£1,200 for remediation.
                </p>
              </div>
            </div>

            {/* Section 2 */}
            <div className="border border-gray-200 bg-white p-8 rounded-sm hover:shadow-xl transition-all duration-300 group">
              <div className="flex justify-between items-start mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center group-hover:bg-blue-600 transition-colors">
                  <Droplets size={24} className="text-blue-600 group-hover:text-white transition-colors" />
                </div>
                <span className="font-mono-tech text-xs text-gray-400">SECTION 2</span>
              </div>
              <h3 className="font-serif-display text-2xl mb-4">Hydration Integrity</h3>
              <p className="text-gray-600 font-light mb-6 leading-relaxed">
                Heavy metal screening (lead, copper, cadmium), microplastic analysis,
                hardness testing, and bacterial contamination risk at all water outlets.
              </p>
              <div className="p-4 bg-blue-50 border-l-4 border-blue-500 rounded">
                <p className="text-xs font-mono-tech text-blue-900">
                  <strong>FINDING:</strong> Copper levels slightly elevated.
                  Install point-of-use filter (£200).
                </p>
              </div>
            </div>

            {/* Section 3 */}
            <div className="border border-gray-200 bg-white p-8 rounded-sm hover:shadow-xl transition-all duration-300 group">
              <div className="flex justify-between items-start mb-6">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center group-hover:bg-purple-600 transition-colors">
                  <Zap size={24} className="text-purple-600 group-hover:text-white transition-colors" />
                </div>
                <span className="font-mono-tech text-xs text-gray-400">SECTION 3</span>
              </div>
              <h3 className="font-serif-display text-2xl mb-4">EMF Hygiene</h3>
              <p className="text-gray-600 font-light mb-6 leading-relaxed">
                Non-ionizing radiation mapping from smart meters, nearby substations,
                internal wiring faults, and wireless device proximity to sleeping areas.
              </p>
              <div className="p-4 bg-purple-50 border-l-4 border-purple-500 rounded">
                <p className="text-xs font-mono-tech text-purple-900">
                  <strong>FINDING:</strong> Smart meter in bedroom wall.
                  Relocate or shield (£150-£400).
                </p>
              </div>
            </div>

            {/* Section 4 */}
            <div className="border border-gray-200 bg-white p-8 rounded-sm hover:shadow-xl transition-all duration-300 group">
              <div className="flex justify-between items-start mb-6">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center group-hover:bg-amber-600 transition-colors">
                  <Sun size={24} className="text-amber-600 group-hover:text-white transition-colors" />
                </div>
                <span className="font-mono-tech text-xs text-gray-400">SECTION 4</span>
              </div>
              <h3 className="font-serif-display text-2xl mb-4">Circadian Alignment</h3>
              <p className="text-gray-600 font-light mb-6 leading-relaxed">
                Natural light lux measurements throughout the day, window orientation analysis,
                and recommendations for optimizing sleep-wake cycles.
              </p>
              <div className="p-4 bg-amber-50 border-l-4 border-amber-500 rounded">
                <p className="text-xs font-mono-tech text-amber-900">
                  <strong>FINDING:</strong> Excellent south-facing exposure.
                  No remediation needed.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <Shield size={48} className="mx-auto text-emerald-600 mb-8" />
          <h2 className="font-serif-display text-4xl lg:text-5xl mb-6">
            Get your property's report.
          </h2>
          <p className="text-gray-600 text-lg font-light mb-10 max-w-2xl mx-auto">
            Don't let hidden environmental hazards derail your property purchase.
            Schedule your Sanctum diagnostic before you commit.
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
