import React, { useState } from 'react';
import { Sun, Activity, Scan, Wind, Droplets, Zap } from 'lucide-react';

export default function Hero() {
  const [scanMode, setScanMode] = useState(false);

  return (
    <header className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 px-6 overflow-hidden bg-[#F9F8F4]">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-12 items-center">

        {/* Text Content */}
        <div className="lg:col-span-5 relative z-10 order-2 lg:order-1">
          <div className="font-mono-tech text-emerald-600 text-xs tracking-widest mb-6 flex items-center gap-2">
            <span className="inline-block w-8 h-[1px] bg-emerald-600"></span>
            ENVIRONMENTAL INTELLIGENCE
          </div>
          <h1 className="font-serif-display text-5xl lg:text-7xl leading-[1.1] mb-8 text-[#1c1c1c]">
            See the <br/>
            <span className="italic text-gray-400">Invisible.</span>
          </h1>
          <p className="font-light text-lg leading-relaxed text-gray-600 mb-10 max-w-md">
            Hidden environmental dangers lurk in properties that look perfect on the surface. Get your <span className="font-semibold">Sanctum Score™</span> before you buy.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <button className="px-8 py-4 bg-[#1c1c1c] text-white font-mono-tech text-sm rounded hover:bg-gray-800 transition-all hover:translate-y-[-2px] shadow-xl shadow-gray-200/50">
              // CHECK AVAILABILITY
            </button>
            <button
              onClick={() => setScanMode(!scanMode)}
              className={`px-8 py-4 border font-mono-tech text-sm rounded transition-all flex items-center justify-center gap-2 ${scanMode ? 'border-emerald-500 text-emerald-700 bg-emerald-50 shadow-[0_0_20px_rgba(16,185,129,0.2)]' : 'border-gray-300 hover:border-gray-800 bg-white'}`}
            >
              <Scan size={16} />
              {scanMode ? 'DEACTIVATE SENSOR' : 'ACTIVATE SENSOR'}
            </button>
          </div>
        </div>

        {/* Visual Content (The Scanner) */}
        <div className="lg:col-span-7 relative h-[400px] lg:h-[600px] rounded-2xl overflow-hidden group shadow-2xl order-1 lg:order-2">
          {/* Background Image */}
          <img
            src="/londonapartment.png"
            alt="Modern Interior"
            className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ${scanMode ? 'grayscale scale-105 opacity-40' : 'scale-100'}`}
          />

          {/* The "Scan" Overlay Layer */}
          <div className={`absolute inset-0 transition-opacity duration-500 ${scanMode ? 'opacity-100' : 'opacity-0'}`}>
            {/* Grid Lines */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(16,185,129,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(16,185,129,0.1)_1px,transparent_1px)] bg-[size:40px_40px]"></div>

            {/* Data Points */}
            <div className="absolute top-1/4 left-1/3">
              <div className="relative">
                  <div className="w-3 h-3 bg-emerald-500 rounded-full shadow-[0_0_15px_rgba(16,185,129,0.8)] animate-ping absolute opacity-75"></div>
                  <div className="w-3 h-3 bg-emerald-500 rounded-full relative z-10"></div>
                  <div className="absolute top-6 left-4 bg-black/80 text-emerald-400 font-mono-tech text-[10px] p-3 rounded backdrop-blur-md border border-emerald-500/30 w-40">
                  <strong>VOC LEVELS: ELEVATED</strong><br/>
                  SOURCE: CARPET ADHESIVE<br/>
                  PPM: 450 (HIGH)
                  </div>
              </div>
            </div>

            <div className="absolute bottom-1/3 right-1/4 delay-300">
              <div className="relative">
                  <div className="w-3 h-3 bg-blue-500 rounded-full shadow-[0_0_15px_rgba(59,130,246,0.8)] animate-ping absolute opacity-75"></div>
                  <div className="w-3 h-3 bg-blue-500 rounded-full relative z-10"></div>
                  <div className="absolute bottom-6 right-4 bg-black/80 text-blue-400 font-mono-tech text-[10px] p-3 rounded backdrop-blur-md border border-blue-500/30 w-40">
                  <strong>HUMIDITY: 62%</strong><br/>
                  RISK: MOLD GROWTH<br/>
                  AREA: WINDOW SEAL
                  </div>
              </div>
            </div>

            <div className="absolute top-1/2 right-1/2 delay-500">
              <div className="relative">
                  <div className="w-3 h-3 bg-amber-500 rounded-full shadow-[0_0_15px_rgba(245,158,11,0.8)] animate-ping absolute opacity-75"></div>
                  <div className="w-3 h-3 bg-amber-500 rounded-full relative z-10"></div>
                  <div className="absolute top-6 left-4 bg-black/80 text-amber-400 font-mono-tech text-[10px] p-3 rounded backdrop-blur-md border border-amber-500/30 w-40">
                  <strong>EMF: 12mG</strong><br/>
                  SOURCE: UNKNOWN<br/>
                  STATUS: INVESTIGATE
                  </div>
              </div>
            </div>

            {/* Scanning Line */}
            <div className="absolute top-0 left-0 w-full h-1 bg-emerald-400 shadow-[0_0_30px_rgba(16,185,129,1)] animate-scan"></div>
          </div>

          {/* Default View Label */}
          <div className={`absolute bottom-6 left-6 transition-opacity duration-300 ${scanMode ? 'opacity-0' : 'opacity-100'}`}>
            <div className="bg-white/80 backdrop-blur px-4 py-2 rounded font-mono-tech text-xs border border-white/50 flex items-center gap-2">
              <Sun size={12} /> VIEW: NAKED EYE
            </div>
          </div>

          {/* Scan View Label */}
           <div className={`absolute bottom-6 left-6 transition-opacity duration-300 ${!scanMode ? 'opacity-0' : 'opacity-100'}`}>
            <div className="bg-black/80 text-emerald-400 backdrop-blur px-4 py-2 rounded font-mono-tech text-xs border border-emerald-500/30 flex items-center gap-2">
              <Activity size={12} /> VIEW: SANCTUM LAYER
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
