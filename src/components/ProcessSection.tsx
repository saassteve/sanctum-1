import React, { useState } from 'react';
import { Calendar, Home, FileText, TrendingUp, ArrowRight, Box, Microscope, Activity } from 'lucide-react';

const PROCESS_STEPS = [
  {
    id: 1,
    title: "Book Your Survey",
    desc: "Select a time slot online. Our specialists require only 90 minutes access to the property.",
    icon: <Box className="w-6 h-6" />
  },
  {
    id: 2,
    title: "On-Site Assessment",
    desc: "We deploy industrial-grade sensors to map VOCs, EMF radiation, and water quality in real-time.",
    icon: <Microscope className="w-6 h-6" />
  },
  {
    id: 3,
    title: "Lab Analysis",
    desc: "Physical samples are rush-couriered to our London partner laboratory for 24-hour culturing.",
    icon: <Activity className="w-6 h-6" />
  },
  {
    id: 4,
    title: "The Sanctum Report",
    desc: "Receive a comprehensive 40-page digital dossier with your property's health score.",
    icon: <FileText className="w-6 h-6" />
  }
];

export default function ProcessSection() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section id="process" className="py-24 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left: Sticky Content */}
          <div className="lg:sticky lg:top-32 h-fit">
            <div className="font-mono-tech text-emerald-600 text-xs tracking-widest mb-6">
              WORKFLOW
            </div>
            <h2 className="font-serif-display text-4xl lg:text-5xl mb-8">
              From property viewing to <br/> Sanctum Score.
            </h2>
            <p className="text-gray-500 text-lg font-light mb-8">
              We move fast because the property market does too. Our entire process is designed to deliver lab-grade data within your 48-hour decision window.
            </p>
            <button className="hidden lg:flex items-center gap-2 text-sm font-mono-tech underline decoration-emerald-400 underline-offset-4 hover:text-emerald-600">
              DOWNLOAD SAMPLE REPORT <ArrowRight size={14} />
            </button>
          </div>

          {/* Right: Steps */}
          <div className="flex flex-col gap-8">
            {PROCESS_STEPS.map((step, idx) => (
              <div
                key={step.id}
                onMouseEnter={() => setActiveStep(idx)}
                className={`p-8 border transition-all duration-500 cursor-default ${activeStep === idx ? 'border-emerald-500 bg-emerald-50/30 shadow-lg translate-x-2' : 'border-gray-200 hover:border-gray-300'}`}
              >
                <div className="flex items-start gap-4">
                  <div className={`mt-1 p-2 rounded-full transition-colors ${activeStep === idx ? 'bg-emerald-100 text-emerald-600' : 'bg-gray-100 text-gray-400'}`}>
                    {step.icon}
                  </div>
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <span className={`font-mono-tech text-xs ${activeStep === idx ? 'text-emerald-600' : 'text-gray-400'}`}>0{step.id}</span>
                      <h3 className="font-serif-display text-xl">{step.title}</h3>
                    </div>
                    <p className="text-gray-500 font-light text-sm leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
