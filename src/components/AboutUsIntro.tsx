import React from 'react';
import { Shield } from 'lucide-react';

export default function AboutUsIntro() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Brand Mark */}
        <div className="flex justify-center mb-8">
          <div className="w-16 h-16 bg-gradient-to-br from-[#002DFF]/10 to-[#4D7FFF]/10 rounded-full flex items-center justify-center">
            <Shield className="w-8 h-8 text-[#002DFF]" strokeWidth={1.5} />
          </div>
        </div>

        {/* Section Title */}
        <h2 className="text-4xl md:text-5xl font-bold text-[#1A1A1A] mb-8">
          Why We Built This Service
        </h2>

        {/* Paragraph */}
        <p className="text-xl text-[#6B7280] font-light leading-relaxed mb-8 max-w-3xl mx-auto">
          Sanctum was born from a costly mistake. After purchasing a property that looked perfect 
          on the surface, we discovered—too late—that hidden environmental issues were causing 
          unexplained health problems. Standard property surveys completely missed these critical 
          factors. We created the pre-purchase home health survey we desperately needed but couldn't 
          find—one that gives UK property buyers the complete picture, backed by our proprietary 
          Sanctum Score™, before they commit to the biggest investment of their life.
        </p>

        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-8 mb-12 max-w-2xl mx-auto">
          <div>
            <div className="text-3xl font-bold text-[#002DFF] mb-2">60%</div>
            <p className="text-sm text-[#6B7280]">of UK properties have hidden environmental issues</p>
          </div>
          <div>
            <div className="text-3xl font-bold text-[#002DFF] mb-2">£15k+</div>
            <p className="text-sm text-[#6B7280]">average cost of post-purchase remediation</p>
          </div>
          <div>
            <div className="text-3xl font-bold text-[#002DFF] mb-2">100%</div>
            <p className="text-sm text-[#6B7280]">preventable with pre-purchase assessment</p>
          </div>
        </div>

        {/* CTA Button */}
        <a 
          href="/about"
          className="inline-block px-8 py-4 text-sm font-semibold text-white bg-gradient-to-r from-[#002DFF] to-[#0040FF] hover:from-[#0026CC] hover:to-[#0033DD] rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
        >
          Read Our Full Story
        </a>
      </div>
    </section>
  );
}