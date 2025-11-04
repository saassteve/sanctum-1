import React from 'react';
import { useState, useEffect, useRef } from 'react';
import { TrendingUp, Shield, AlertTriangle, CheckCircle, Award } from 'lucide-react';

export default function SanctumScore() {
  const [isVisible, setIsVisible] = useState(false);
  const [animatedScore, setAnimatedScore] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const targetScore = 78;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  useEffect(() => {
    if (isVisible) {
      const duration = 2500;
      const startTime = Date.now();
      
      const animate = () => {
        const now = Date.now();
        const elapsed = now - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        // Easing function for smooth animation (easeOutCubic)
        const easeProgress = 1 - Math.pow(1 - progress, 3);
        const current = Math.floor(easeProgress * targetScore);
        
        setAnimatedScore(current);
        
        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };
      
      requestAnimationFrame(animate);
    }
  }, [isVisible, targetScore]);

  return (
    <section ref={sectionRef} id="sanctum-score" className="py-24 bg-gradient-to-b from-[#F7F8FA] to-white relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-sanctum-cyan-400/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-sanctum-cyan-300/5 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Headings */}
        <div className="text-center mb-6">
          <div className="inline-flex items-center space-x-2 mb-4">
            <Award className="w-8 h-8 text-sanctum-cyan-500" />
            <span className="text-sm font-semibold text-sanctum-cyan-600 uppercase tracking-wider">Proprietary Algorithm</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1A1A1A] mb-6">
            The Sanctum Score<sup className="text-2xl">™</sup>
          </h2>
          <p className="text-xl md:text-2xl text-[#6B7280] font-light max-w-4xl mx-auto leading-relaxed">
            A comprehensive health rating for any UK property, distilled into a single, 
            actionable score. Make confident property decisions backed by science.
          </p>
        </div>

        {/* Featured Badge */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-sanctum-cyan-400/10 to-sanctum-cyan-300/10 border border-sanctum-cyan-500/20 rounded-full">
            <svg className="w-5 h-5 text-sanctum-cyan-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="text-sm font-semibold text-sanctum-cyan-600">UK's First Standardised Home Health Metric</span>
          </div>
        </div>

        {/* Two-Column Grid for Desktop */}
        <div className="grid lg:grid-cols-5 gap-16 items-start mb-16">
          {/* Left Column - Score Gauge */}
          <div className="lg:col-span-2 flex justify-center lg:justify-start">
            <div className="bg-white rounded-2xl p-12 shadow-2xl border-2 border-gray-100 relative overflow-hidden">
              {/* Subtle gradient background */}
              <div className="absolute inset-0 bg-gradient-to-br from-sanctum-cyan-400/5 to-transparent"></div>
              
              {/* Score Display */}
              <div className="text-center mb-8 relative z-10">
                <div className="relative inline-block">
                  <svg className="w-64 h-64 transform -rotate-90" viewBox="0 0 200 200">
                    {/* Background circle */}
                    <circle
                      cx="100"
                      cy="100"
                      r="85"
                      stroke="#e5e7eb"
                      strokeWidth="12"
                      fill="none"
                    />
                    {/* Progress circle with smooth animation */}
                    <circle
                      cx="100"
                      cy="100"
                      r="85"
                      stroke="url(#scoreGradient)"
                      strokeWidth="12"
                      fill="none"
                      strokeLinecap="round"
                      strokeDasharray={`${2 * Math.PI * 85}`}
                      strokeDashoffset={`${2 * Math.PI * 85 * (1 - animatedScore / 100)}`}
                      style={{
                        transition: 'stroke-dashoffset 0.1s ease-out',
                        filter: 'drop-shadow(0 0 8px rgba(0, 45, 255, 0.3))'
                      }}
                    />
                    <defs>
                      <linearGradient id="scoreGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#4A90A4" />
                        <stop offset="50%" stopColor="#6DB4C7" />
                        <stop offset="100%" stopColor="#87CFE1" />
                      </linearGradient>
                    </defs>
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-6xl font-bold bg-gradient-to-br from-sanctum-cyan-500 to-sanctum-cyan-400 bg-clip-text text-transparent mb-2">
                        {animatedScore}
                      </div>
                      <div className="text-xs font-semibold text-[#6B7280] uppercase tracking-widest">
                        Sanctum Score
                      </div>
                      <div className="text-xs text-[#9CA3AF] mt-1">out of 100</div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Sample Property Label */}
              <div className="text-center relative z-10">
                <p className="text-xs text-[#6B7280] uppercase tracking-wider mb-1">Example Property</p>
                <p className="text-sm font-medium text-[#1A1A1A]">3-Bed Terraced House, Manchester</p>
              </div>
            </div>
          </div>

          {/* Right Column - Detailed Information */}
          <div className="lg:col-span-3 space-y-8">
            {/* Understanding Your Score */}
            <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100">
              <h3 className="text-2xl font-bold text-[#1A1A1A] mb-4">
                Understanding Your Property's Score
              </h3>
              <p className="text-[#6B7280] leading-relaxed mb-6">
                The Sanctum Score™ is calculated using proprietary algorithms that analyse over 200 
                environmental factors specific to UK properties. Each category is weighted based on 
                peer-reviewed research and clinical data to provide an objective health assessment 
                before you commit to a purchase.
              </p>
              
              {/* Key Benefit Callout */}
              <div className="bg-gradient-to-r from-sanctum-cyan-400/5 to-sanctum-cyan-300/5 border-l-4 border-sanctum-cyan-500 p-4 rounded-r-lg">
                <p className="text-sm font-medium text-[#1A1A1A]">
                  <span className="text-sanctum-cyan-600 font-semibold">For Property Buyers:</span> Use your Sanctum Score to negotiate purchase price, plan renovation budgets, or walk away from properties with hidden environmental issues.
                </p>
              </div>
            </div>

            {/* Score Ranges Grid */}
            <div>
              <h4 className="text-lg font-bold text-[#1A1A1A] mb-4">Score Classification</h4>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-6 bg-gradient-to-br from-green-50 to-green-100 rounded-xl border-2 border-green-200 shadow-sm">
                  <div className="text-3xl font-bold text-green-700 mb-2">90-100</div>
                  <div className="text-xs font-semibold text-green-800 uppercase tracking-wider">Optimal Health</div>
                  <p className="text-xs text-green-700 mt-2">Excellent property condition</p>
                </div>
                <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl border-2 border-blue-200 shadow-sm">
                  <div className="text-3xl font-bold text-blue-700 mb-2">80-89</div>
                  <div className="text-xs font-semibold text-blue-800 uppercase tracking-wider">Good Health</div>
                  <p className="text-xs text-blue-700 mt-2">Minor improvements needed</p>
                </div>
                <div className="text-center p-6 bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-xl border-2 border-yellow-200 shadow-sm">
                  <div className="text-3xl font-bold text-yellow-700 mb-2">70-79</div>
                  <div className="text-xs font-semibold text-yellow-800 uppercase tracking-wider">Fair Health</div>
                  <p className="text-xs text-yellow-700 mt-2">Moderate concerns present</p>
                </div>
                <div className="text-center p-6 bg-gradient-to-br from-red-50 to-red-100 rounded-xl border-2 border-red-200 shadow-sm">
                  <div className="text-3xl font-bold text-red-700 mb-2">Below 70</div>
                  <div className="text-xs font-semibold text-red-800 uppercase tracking-wider">Needs Attention</div>
                  <p className="text-xs text-red-700 mt-2">Significant issues found</p>
                </div>
              </div>
            </div>

            {/* Individual Category Scores */}
            <div className="space-y-4">
              <h4 className="text-lg font-bold text-[#1A1A1A] mb-4">
                Category Breakdown
              </h4>
              
              <div className="flex items-center justify-between p-5 bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all">
                <div className="flex items-center space-x-4">
                  <CheckCircle className="h-6 w-6 text-green-600" />
                  <span className="text-sm font-semibold text-[#1A1A1A]">Atmospheric Purity</span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-24 h-3 bg-gray-100 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-green-500 to-green-600 rounded-full"
                      style={{ 
                        width: isVisible ? '92%' : '0%',
                        transition: 'width 1.5s cubic-bezier(0.4, 0, 0.2, 1) 0.3s'
                      }}
                    ></div>
                  </div>
                  <span className="text-base font-bold text-green-600 w-8">92</span>
                </div>
              </div>

              <div className="flex items-center justify-between p-5 bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all">
                <div className="flex items-center space-x-4">
                  <Shield className="h-6 w-6 text-blue-600" />
                  <span className="text-sm font-semibold text-[#1A1A1A]">Hydration Integrity</span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-24 h-3 bg-gray-100 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-blue-500 to-blue-600 rounded-full"
                      style={{ 
                        width: isVisible ? '85%' : '0%',
                        transition: 'width 1.5s cubic-bezier(0.4, 0, 0.2, 1) 0.5s'
                      }}
                    ></div>
                  </div>
                  <span className="text-base font-bold text-blue-600 w-8">85</span>
                </div>
              </div>

              <div className="flex items-center justify-between p-5 bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all">
                <div className="flex items-center space-x-4">
                  <AlertTriangle className="h-6 w-6 text-amber-600" />
                  <span className="text-sm font-semibold text-[#1A1A1A]">Electromagnetic Hygiene</span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-24 h-3 bg-gray-100 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-amber-500 to-amber-600 rounded-full"
                      style={{ 
                        width: isVisible ? '64%' : '0%',
                        transition: 'width 1.5s cubic-bezier(0.4, 0, 0.2, 1) 0.7s'
                      }}
                    ></div>
                  </div>
                  <span className="text-base font-bold text-amber-600 w-8">64</span>
                </div>
              </div>

              <div className="flex items-center justify-between p-5 bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all">
                <div className="flex items-center space-x-4">
                  <TrendingUp className="h-6 w-6 text-blue-600" />
                  <span className="text-sm font-semibold text-[#1A1A1A]">Circadian Alignment</span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-24 h-3 bg-gray-100 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-blue-500 to-blue-600 rounded-full"
                      style={{ 
                        width: isVisible ? '88%' : '0%',
                        transition: 'width 1.5s cubic-bezier(0.4, 0, 0.2, 1) 0.9s'
                      }}
                    ></div>
                  </div>
                  <span className="text-base font-bold text-blue-600 w-8">88</span>
                </div>
              </div>

              <div className="flex items-center justify-between p-5 bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all">
                <div className="flex items-center space-x-4">
                  <AlertTriangle className="h-6 w-6 text-red-600" />
                  <span className="text-sm font-semibold text-[#1A1A1A]">Material Toxicity</span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-24 h-3 bg-gray-100 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-red-500 to-red-600 rounded-full"
                      style={{ 
                        width: isVisible ? '61%' : '0%',
                        transition: 'width 1.5s cubic-bezier(0.4, 0, 0.2, 1) 1.1s'
                      }}
                    ></div>
                  </div>
                  <span className="text-base font-bold text-red-600 w-8">61</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Priority Recommendations */}
        <div className="bg-gradient-to-r from-sanctum-cyan-400/10 to-sanctum-cyan-300/5 border-l-4 border-sanctum-cyan-500 rounded-r-xl p-8 mb-12">
          <h4 className="text-lg font-bold text-[#1A1A1A] mb-4 flex items-center">
            <AlertTriangle className="w-5 h-5 mr-2 text-sanctum-cyan-600" />
            Priority Recommendations for This Property
          </h4>
          <ul className="space-y-3 text-sm text-[#4B5563]">
            <li className="flex items-start space-x-3">
              <span className="text-red-600 font-bold mt-0.5">1.</span>
              <span><span className="font-semibold text-[#1A1A1A]">High Priority:</span> Replace synthetic carpet in bedrooms with natural flooring to reduce VOC exposure (Material Toxicity: 61/100)</span>
            </li>
            <li className="flex items-start space-x-3">
              <span className="text-amber-600 font-bold mt-0.5">2.</span>
              <span><span className="font-semibold text-[#1A1A1A]">Medium Priority:</span> Install EMF shielding or address wiring issues in bedrooms (Electromagnetic Hygiene: 64/100)</span>
            </li>
            <li className="flex items-start space-x-3">
              <span className="text-green-600 font-bold mt-0.5">3.</span>
              <span><span className="font-semibold text-[#1A1A1A]">Maintain:</span> Excellent air quality and water filtration systems already in place</span>
            </li>
          </ul>
        </div>

        {/* Call to Action Link */}
        <div className="text-center">
          <a
            href="/sample-report"
            className="inline-flex items-center px-8 py-4 text-base font-semibold text-white bg-gradient-to-r from-sanctum-cyan-500 to-sanctum-cyan-600 hover:from-sanctum-cyan-600 hover:to-sanctum-cyan-700 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <span>View Full Sample Report</span>
            <svg 
              className={`w-5 h-5 ml-2 transition-all duration-300 ${isHovered ? 'translate-x-1' : ''}`} 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}