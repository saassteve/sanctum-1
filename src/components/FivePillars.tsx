import React from 'react';
import { Wind, Droplets, Zap, Sun, Box } from 'lucide-react';

export default function FivePillars() {
  return (
    <section id="diagnostics" className="py-24 px-6 max-w-7xl mx-auto bg-[#F9F8F4]">
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
        <div>
          <h2 className="font-serif-display text-4xl md:text-5xl mb-4 text-[#1c1c1c]">The Five Pillars</h2>
          <p className="text-gray-500 font-mono-tech text-xs tracking-widest uppercase">Comprehensive Analysis Vectors</p>
        </div>
        <div className="max-w-md text-gray-600 font-light">
          Our proprietary methodology analyzes these five critical dimensions to build a complete picture of a property's health impact.
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-[300px]">
        {/* Card 1: Air */}
        <div className="group p-8 border border-gray-200 bg-white hover:shadow-xl hover:border-emerald-200 transition-all duration-300 flex flex-col justify-between rounded-sm lg:col-span-2 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
            <Wind size={120} />
          </div>
          <div className="flex justify-between items-start relative z-10">
            <div className="bg-emerald-50 p-3 rounded-full text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
              <Wind size={24} />
            </div>
            <span className="font-mono-tech text-xs text-gray-400 group-hover:text-emerald-600">FIG 1.0</span>
          </div>
          <div className="relative z-10">
            <h3 className="font-serif-display text-2xl mb-2">Atmospheric Purity</h3>
            <p className="text-gray-500 font-light leading-relaxed max-w-md">
              Laser-diffraction testing for PM2.5, VOC off-gassing from renovation materials, and hidden fungal spore density in HVAC systems.
            </p>
          </div>
        </div>

        {/* Card 2: Water */}
        <div className="group p-8 border border-gray-200 bg-white hover:shadow-xl hover:border-blue-200 transition-all duration-300 flex flex-col justify-between rounded-sm relative overflow-hidden">
          <div className="flex justify-between items-start relative z-10">
            <div className="bg-blue-50 p-3 rounded-full text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
              <Droplets size={24} />
            </div>
            <span className="font-mono-tech text-xs text-gray-400 group-hover:text-blue-600">FIG 2.0</span>
          </div>
          <div className="relative z-10">
            <h3 className="font-serif-display text-2xl mb-2">Hydration Integrity</h3>
            <p className="text-gray-500 font-light text-sm leading-relaxed">
              Heavy metals (Lead, Copper) and micro-plastic analysis in mains water supply points.
            </p>
          </div>
        </div>

        {/* Card 3: EMF */}
        <div className="group p-8 border border-gray-200 bg-white hover:shadow-xl hover:border-purple-200 transition-all duration-300 flex flex-col justify-between rounded-sm relative overflow-hidden">
          <div className="flex justify-between items-start relative z-10">
            <div className="bg-purple-50 p-3 rounded-full text-purple-600 group-hover:bg-purple-600 group-hover:text-white transition-colors">
              <Zap size={24} />
            </div>
            <span className="font-mono-tech text-xs text-gray-400 group-hover:text-purple-600">FIG 3.0</span>
          </div>
          <div className="relative z-10">
            <h3 className="font-serif-display text-2xl mb-2">EMF Hygiene</h3>
            <p className="text-gray-500 font-light text-sm leading-relaxed">
              Mapping non-ionizing radiation hotspots from nearby substations and internal wiring faults.
            </p>
          </div>
        </div>

        {/* Card 4: Light */}
        <div className="group p-8 border border-gray-200 bg-white hover:shadow-xl hover:border-amber-200 transition-all duration-300 flex flex-col justify-between rounded-sm lg:col-span-2 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
            <Sun size={120} />
          </div>
          <div className="flex justify-between items-start relative z-10">
            <div className="bg-amber-50 p-3 rounded-full text-amber-600 group-hover:bg-amber-600 group-hover:text-white transition-colors">
              <Sun size={24} />
            </div>
            <span className="font-mono-tech text-xs text-gray-400 group-hover:text-amber-600">FIG 4.0</span>
          </div>
          <div className="relative z-10">
            <h3 className="font-serif-display text-2xl mb-2">Circadian Alignment</h3>
            <p className="text-gray-500 font-light leading-relaxed max-w-md">
              Analysis of natural light lux levels throughout the day to ensure optimal sleep-wake cycles and reduce artificial light dependency.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
