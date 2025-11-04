import React from 'react';
import { Activity, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <Activity className="h-8 w-8 text-[#002DFF]" strokeWidth={1.5} />
              <span className="text-2xl font-light text-[#1A1A1A] tracking-tight">SANCTUM</span>
            </div>
            <p className="text-[#6B7280] font-light leading-relaxed max-w-md mb-6">
              Advancing personalized medicine through data-driven home health diagnostics and AI-powered biomarker analysis.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-3 text-[#6B7280]">
                <Mail className="h-4 w-4" />
                <span className="text-sm">contact@sanctum.health</span>
              </div>
              <div className="flex items-center space-x-3 text-[#6B7280]">
                <Phone className="h-4 w-4" />
                <span className="text-sm">1-800-SANCTUM</span>
              </div>
              <div className="flex items-center space-x-3 text-[#6B7280]">
                <MapPin className="h-4 w-4" />
                <span className="text-sm">London, UK</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-medium text-[#1A1A1A] uppercase tracking-wide mb-4">
              Services
            </h3>
            <div className="space-y-2">
              <a href="#" className="block text-sm text-[#6B7280] hover:text-[#002DFF] transition-colors">
                Biomarker Analysis
              </a>
              <a href="#" className="block text-sm text-[#6B7280] hover:text-[#002DFF] transition-colors">
                Risk Assessment
              </a>
              <a href="#" className="block text-sm text-[#6B7280] hover:text-[#002DFF] transition-colors">
                Genetic Testing
              </a>
              <a href="#" className="block text-sm text-[#6B7280] hover:text-[#002DFF] transition-colors">
                Health Monitoring
              </a>
            </div>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-medium text-[#1A1A1A] uppercase tracking-wide mb-4">
              Company
            </h3>
            <div className="space-y-2">
              <a href="/about" className="block text-sm text-[#6B7280] hover:text-[#002DFF] transition-colors">
                About Us
              </a>
              <a href="#" className="block text-sm text-[#6B7280] hover:text-[#002DFF] transition-colors">
                Research
              </a>
              <a href="#" className="block text-sm text-[#6B7280] hover:text-[#002DFF] transition-colors">
                Careers
              </a>
              <a href="#" className="block text-sm text-[#6B7280] hover:text-[#002DFF] transition-colors">
                Privacy Policy
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-100 mt-12 pt-8">
          <p className="text-sm text-[#6B7280] text-center">
            Sanctum is an environmental diagnostics company dedicated to transforming homes into sanctuaries of health. We use scientific data to empower you to build the foundation for your family's well-being.
          </p>
        </div>
      </div>
    </footer>
  );
}