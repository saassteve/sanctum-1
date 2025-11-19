import React from 'react';

export default function ScoreSection() {
  return (
    <section className="mesh-gradient text-[#F9F8F4] py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        <div className="order-2 lg:order-1">
          <div className="font-mono-tech text-emerald-500 text-xs tracking-widest mb-6">
            [ FIG 2.0: QUANTIFIED HEALTH ]
          </div>
          <h2 className="font-serif-display text-4xl lg:text-5xl mb-6 leading-tight">
            A credit score for your <br/><span className="text-emerald-400">biological safety.</span>
          </h2>
          <p className="text-gray-400 text-lg font-light leading-relaxed mb-8">
            We distil over 200 environmental factors into a single, actionable metric. Don't just guess if a home is healthy. Know the number.
          </p>

          <div className="grid grid-cols-2 gap-4">
            <div className="border border-white/10 p-6 rounded hover:bg-white/5 transition-colors">
              <div className="text-3xl font-mono-tech mb-2 text-emerald-400">48h</div>
              <div className="text-gray-500 text-xs uppercase tracking-widest">Turnaround Time</div>
            </div>
            <div className="border border-white/10 p-6 rounded hover:bg-white/5 transition-colors">
              <div className="text-3xl font-mono-tech mb-2 text-blue-400">ISO</div>
              <div className="text-gray-500 text-xs uppercase tracking-widest">Lab Certified</div>
            </div>
          </div>
        </div>

        {/* The Score Widget */}
        <div className="relative flex justify-center order-1 lg:order-2 py-10 lg:py-0">
          <div className="relative w-72 h-72 md:w-96 md:h-96">
            {/* Rotating Rings */}
            <div className="absolute inset-0 border border-white/10 rounded-full"></div>
            <div className="absolute inset-8 border-2 border-dashed border-white/20 rounded-full animate-[spin_20s_linear_infinite]"></div>
            <div className="absolute inset-0 rounded-full border-t border-emerald-500/50 rotate-45"></div>

            {/* Center Score */}
            <div className="absolute inset-0 flex flex-col items-center justify-center backdrop-blur-sm rounded-full">
              <span className="font-mono-tech text-emerald-500 text-xs tracking-widest mb-4">AGGREGATE SCORE</span>
              <span className="font-mono-tech text-8xl md:text-9xl font-bold text-white tracking-tighter drop-shadow-[0_0_15px_rgba(16,185,129,0.5)]">82</span>
              <div className="mt-4 px-4 py-1 bg-emerald-500/10 text-emerald-400 text-xs rounded-full border border-emerald-500/30 flex items-center gap-2">
                <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
                STATUS: OPTIMAL
              </div>
            </div>

            {/* Floating Data Labels */}
            <div className="absolute -right-4 top-1/4 bg-[#111] border border-gray-700 p-3 rounded shadow-lg text-[10px] font-mono-tech text-gray-300 hidden md:block">
              AIR QUALITY: <span className="text-emerald-400">92/100</span>
            </div>
            <div className="absolute -left-8 bottom-1/3 bg-[#111] border border-gray-700 p-3 rounded shadow-lg text-[10px] font-mono-tech text-gray-300 hidden md:block">
              EMF HYGIENE: <span className="text-amber-400">64/100</span>
            </div>
            <div className="absolute right-10 bottom-0 bg-[#111] border border-gray-700 p-3 rounded shadow-lg text-[10px] font-mono-tech text-gray-300 hidden md:block">
              WATER: <span className="text-blue-400">88/100</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
