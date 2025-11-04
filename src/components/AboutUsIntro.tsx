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
        <h2 className="text-4xl md:text-5xl font-bold mb-8">
          <span className="text-sanctum-cyan-600">Why We Built</span>{' '}
          <span className="text-[#1A1A1A]">This Service</span>
        </h2>

        {/* Paragraph */}
        <p className="text-xl text-[#6B7280] font-light leading-relaxed mb-8 max-w-3xl mx-auto">
          Sanctum was created after purchasing a property that appeared ideal on the surface,
          but later revealed hidden environmental issues. Standard property surveys did not assess
          these factors. We created the pre-purchase home health survey to give UK property buyers
          comprehensive environmental data, backed by our Sanctum Score™, before they commit to
          a property purchase.
        </p>

        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-8 mb-12 max-w-2xl mx-auto">
          <div>
            <div className="text-3xl font-bold text-[#002DFF] mb-2">200+</div>
            <p className="text-sm text-[#6B7280]">environmental data points measured</p>
          </div>
          <div>
            <div className="text-3xl font-bold text-[#002DFF] mb-2">48 Hours</div>
            <p className="text-sm text-[#6B7280]">report delivery time</p>
          </div>
          <div>
            <div className="text-3xl font-bold text-[#002DFF] mb-2">5 Categories</div>
            <p className="text-sm text-[#6B7280]">comprehensive environmental assessment</p>
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