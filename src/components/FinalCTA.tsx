import React from 'react';
import { ArrowRight, ShieldCheck } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function FinalCTA() {
  const navigate = useNavigate();

  return (
    <section className="bg-[#1c1c1c] text-[#F9F8F4] py-32 px-6 text-center relative overflow-hidden">
      {/* Background Abstract */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute top-10 left-10 w-64 h-64 rounded-full bg-emerald-500 blur-[100px]"></div>
        <div className="absolute bottom-10 right-10 w-64 h-64 rounded-full bg-blue-500 blur-[100px]"></div>
      </div>

      <div className="max-w-3xl mx-auto relative z-10">
        <ShieldCheck size={48} className="mx-auto text-emerald-500 mb-8" />
        <h2 className="font-serif-display text-4xl lg:text-6xl mb-8">
          Don't buy blind.
        </h2>
        <p className="text-gray-400 text-lg mb-12 font-light">
          The average home inspection checks for broken boilers. We check for what might break <em>you</em>.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => navigate('/pricing')}
            className="group relative inline-flex items-center justify-center px-8 py-4 font-mono-tech text-sm text-black bg-[#F9F8F4] overflow-hidden rounded transition-all hover:bg-emerald-500 hover:text-white hover:scale-105"
          >
            <span className="relative z-10 flex items-center gap-2">
              SCHEDULE ASSESSMENT <ArrowRight size={16} />
            </span>
          </button>
          <button
            onClick={() => navigate('/pricing')}
            className="px-8 py-4 border border-white/20 text-white font-mono-tech text-sm rounded hover:bg-white/10 transition-colors"
          >
            VIEW PRICING
          </button>
        </div>
      </div>
    </section>
  );
}
