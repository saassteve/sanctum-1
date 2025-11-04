import React from 'react';
import { ArrowLeft, Microscope, Map, Shield } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header with Back Navigation */}
      <header className="bg-white border-b border-gray-100 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-4">
            <button 
              onClick={() => window.history.back()}
              className="flex items-center space-x-2 text-[#6B7280] hover:text-[#002DFF] transition-colors"
            >
              <ArrowLeft className="h-5 w-5" />
              <span className="text-sm font-medium">Back to Home</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="pt-16 pb-24">
        {/* Hero Section */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-light text-[#1A1A1A] mb-8">
              Our Mission: To Engineer Healthier Homes
            </h1>
            <p className="text-xl text-[#6B7280] font-light leading-relaxed max-w-3xl mx-auto">
              We believe that true well-being begins in the spaces where we live, sleep, and grow. 
              Sanctum is dedicated to applying rigorous scientific principles to transform your home 
              into your greatest health asset.
            </p>
          </div>
        </section>

        {/* Our Story Section */}
        <section className="py-16 bg-[#F7F8FA]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-light text-[#1A1A1A] mb-12">
              Our Journey to Clarity
            </h2>
            
            <div className="space-y-8 text-lg text-[#6B7280] font-light leading-relaxed">
              <p>
                Our story began not in a laboratory, but with a series of unexplained health challenges. 
                Like many, we pursued conventional answers without success, which led to a frustrating 
                cycle of questions and uncertainty.
              </p>
              
              <p>
                The turning point came with a crucial realisation: the one place we felt safest—our home—was 
                the primary source of the problem. This discovery launched us on a relentless mission to 
                understand the science of healthy homes. We immersed ourselves in building biology and 
                environmental health, consulting with leading specialists and investing in professional-grade 
                instrumentation to find objective answers.
              </p>
              
              <p>
                As we successfully transformed our own environment and experienced profound health improvements, 
                we knew our personal journey had forged a professional mission: to provide others with the 
                clear, data-driven, and empathetic guidance we once struggled to find.
              </p>
            </div>
          </div>
        </section>

        {/* Our Philosophy Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-light text-[#1A1A1A] mb-6">
                Our Philosophy
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-12">
              {/* Scientific Rigour */}
              <div className="text-center">
                <div className="flex items-center justify-center mb-6">
                  <div className="w-16 h-16 bg-[#002DFF]/10 rounded-full flex items-center justify-center">
                    <Microscope className="w-8 h-8 text-[#002DFF]" strokeWidth={1.5} />
                  </div>
                </div>
                <h3 className="text-xl font-medium text-[#1A1A1A] mb-4 uppercase tracking-wide">
                  Scientific Rigour
                </h3>
                <p className="text-[#6B7280] font-light leading-relaxed">
                  We don't guess. Every assessment is based on quantitative data from lab-grade 
                  instrumentation. Our recommendations are rooted in established environmental health science.
                </p>
              </div>

              {/* Pragmatic Guidance */}
              <div className="text-center">
                <div className="flex items-center justify-center mb-6">
                  <div className="w-16 h-16 bg-[#002DFF]/10 rounded-full flex items-center justify-center">
                    <Map className="w-8 h-8 text-[#002DFF]" strokeWidth={1.5} />
                  </div>
                </div>
                <h3 className="text-xl font-medium text-[#1A1A1A] mb-4 uppercase tracking-wide">
                  Pragmatic Guidance
                </h3>
                <p className="text-[#6B7280] font-light leading-relaxed">
                  We deliver clarity, not confusion. Our reports translate complex data into a simple, 
                  prioritised action plan that balances health impact with real-world practicality.
                </p>
              </div>

              {/* Client Empowerment */}
              <div className="text-center">
                <div className="flex items-center justify-center mb-6">
                  <div className="w-16 h-16 bg-[#002DFF]/10 rounded-full flex items-center justify-center">
                    <Shield className="w-8 h-8 text-[#002DFF]" strokeWidth={1.5} />
                  </div>
                </div>
                <h3 className="text-xl font-medium text-[#1A1A1A] mb-4 uppercase tracking-wide">
                  Client Empowerment
                </h3>
                <p className="text-[#6B7280] font-light leading-relaxed">
                  Our ultimate goal is to empower you. We provide the knowledge and tools to give you 
                  lasting control over your environment, ensuring your home is a safe foundation for your health.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-24 bg-[#F7F8FA]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl md:text-5xl font-light text-[#1A1A1A] mb-12">
              Begin Your Journey to a Healthier Home
            </h2>
            <button className="px-12 py-4 text-sm font-medium text-white bg-[#002DFF] hover:bg-[#0026CC] transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
              SCHEDULE A DISCOVERY CALL
            </button>
          </div>
        </section>
      </main>
    </div>
  );
}