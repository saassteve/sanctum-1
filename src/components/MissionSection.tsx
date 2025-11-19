import React from 'react';
import { Scale, Activity, CheckCircle } from 'lucide-react';

export default function MissionSection() {
  return (
    <section id="about" className="py-24 bg-[#F9F8F4] border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-12 items-start">
        <div className="lg:col-span-4">
          <div className="font-mono-tech text-emerald-600 text-xs tracking-widest mb-6">
            OUR MISSION
          </div>
          <h2 className="font-serif-display text-4xl mb-6 text-[#1c1c1c]">
            Radical Transparency.
          </h2>
        </div>
        <div className="lg:col-span-8">
          <p className="text-xl font-light leading-relaxed text-gray-600 mb-8">
            Buying a home is the most significant financial decision of your life, yet the standard survey has remained unchanged for decades, obsessed with structural integrity but blind to environmental health.
          </p>
          <p className="text-gray-500 font-light leading-relaxed mb-12 text-lg">
            Sanctum was founded to close this gap. We don't manufacture the science; we aggregate it. By partnering with accredited UK laboratories and deploying industrial-grade diagnostic hardware, we translate complex biological data into clear, actionable insights for homebuyers.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8 border-t border-gray-300">
            <div className="group">
              <div className="mb-4 text-emerald-600 opacity-50 group-hover:opacity-100 transition-opacity">
                <Scale size={24} />
              </div>
              <h4 className="font-serif-display text-lg mb-2">Unbiased Data</h4>
              <p className="text-xs font-mono-tech text-gray-500 leading-relaxed">
                We do not offer remediation services. We have no conflict of interest. Our only product is the truth.
              </p>
            </div>
            <div className="group">
              <div className="mb-4 text-emerald-600 opacity-50 group-hover:opacity-100 transition-opacity">
                <Activity size={24} />
              </div>
              <h4 className="font-serif-display text-lg mb-2">Speed & Precision</h4>
              <p className="text-xs font-mono-tech text-gray-500 leading-relaxed">
                Results delivered within the standard conveyancing window, ensuring you never lose a deal to delay.
              </p>
            </div>
            <div className="group">
              <div className="mb-4 text-emerald-600 opacity-50 group-hover:opacity-100 transition-opacity">
                <CheckCircle size={24} />
              </div>
              <h4 className="font-serif-display text-lg mb-2">Human Context</h4>
              <p className="text-xs font-mono-tech text-gray-500 leading-relaxed">
                We explain what the numbers mean for <em>your</em> specific health needs, not just arbitrary safety limits.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
