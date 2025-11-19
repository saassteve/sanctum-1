import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';

interface HeaderProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (isOpen: boolean) => void;
}

export default function Header({ isMenuOpen, setIsMenuOpen }: HeaderProps) {
  const navigate = useNavigate();
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [scanMode, setScanMode] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigation = (sectionId: string) => {
    if (sectionId === 'sample') {
      navigate('/sample-report');
      setIsMenuOpen(false);
      return;
    }

    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled ? 'bg-[#F9F8F4]/95 backdrop-blur-md border-b border-gray-200 py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-2 z-50 relative cursor-pointer" onClick={() => { navigate('/'); window.scrollTo(0, 0); }}>
          <div className={`w-3 h-3 rounded-full animate-pulse ${scanMode ? 'bg-emerald-400 shadow-[0_0_10px_#34d399]' : 'bg-[#1c1c1c]'}`}></div>
          <span className="font-serif-display text-2xl tracking-tight font-semibold">Sanctum.</span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-8 font-mono-tech text-xs tracking-widest uppercase text-gray-500">
          <button onClick={() => handleNavigation('diagnostics')} className="hover:text-emerald-700 transition-colors">
            Diagnostics
          </button>
          <button onClick={() => handleNavigation('process')} className="hover:text-emerald-700 transition-colors">
            Process
          </button>
          <button onClick={() => handleNavigation('about')} className="hover:text-emerald-700 transition-colors">
            Mission
          </button>
          <button onClick={() => handleNavigation('sample')} className="hover:text-emerald-700 transition-colors">
            Sample Report
          </button>
        </div>

        <div className="hidden md:flex items-center gap-4">
          <button onClick={() => navigate('/login')} className="text-xs font-mono-tech hover:text-emerald-700 uppercase tracking-widest">Log In</button>
          <button
            onClick={() => navigate('/pricing')}
            className="flex items-center gap-2 px-5 py-2 bg-[#1c1c1c] text-[#F9F8F4] rounded-full hover:bg-emerald-700 transition-all duration-300 font-mono-tech text-xs group"
          >
            <span>Initiate Survey</span>
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-gray-800 z-50 relative"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-[#F9F8F4] z-40 flex flex-col justify-center items-center p-8">
          <div className="flex flex-col gap-8 text-center font-serif-display text-3xl">
            <button onClick={() => handleNavigation('diagnostics')}>Diagnostics</button>
            <button onClick={() => handleNavigation('process')}>Process</button>
            <button onClick={() => handleNavigation('about')}>Mission</button>
            <button onClick={() => handleNavigation('sample')}>Report</button>
            <button onClick={() => { navigate('/login'); setIsMenuOpen(false); }} className="text-xl font-mono-tech">Log In</button>
            <button
              onClick={() => { navigate('/pricing'); setIsMenuOpen(false); }}
              className="mt-8 px-8 py-4 bg-[#1c1c1c] text-white font-mono-tech text-sm rounded-full"
            >
              Initiate Survey
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
