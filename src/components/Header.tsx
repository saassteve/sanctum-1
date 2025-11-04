import React from 'react';
import { Menu, X } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';

interface HeaderProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (isOpen: boolean) => void;
}

export default function Header({ isMenuOpen, setIsMenuOpen }: HeaderProps) {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavigation = (sectionId: string) => {
    if (location.pathname !== '/') {
      // If not on homepage, navigate to homepage first, then scroll
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      // If on homepage, just scroll to section
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center cursor-pointer" onClick={() => navigate('/')}>
            <img
              src="/SANCTUM_LOGO.png"
              alt="Sanctum"
              className="h-8 w-auto"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-10">
            <button onClick={() => handleNavigation('bio-environmental')} className="text-sm font-medium text-[#1A1A1A] hover:text-sanctum-cyan-500 transition-colors">
              DIAGNOSTICS
            </button>
            <button onClick={() => handleNavigation('sanctum-score')} className="text-sm font-medium text-[#1A1A1A] hover:text-sanctum-cyan-500 transition-colors">
              SCORING
            </button>
            <button onClick={() => handleNavigation('blueprint')} className="text-sm font-medium text-[#1A1A1A] hover:text-sanctum-cyan-500 transition-colors">
              PROCESS
            </button>
            <button onClick={() => { navigate('/about'); window.scrollTo(0, 0); setIsMenuOpen(false); }} className="text-sm font-medium text-[#1A1A1A] hover:text-sanctum-cyan-500 transition-colors">
              ABOUT
            </button>
          </nav>

          {/* Desktop CTA Button */}
          <div className="hidden md:flex items-center">
            <button className="px-6 py-2.5 text-sm font-semibold text-white bg-sanctum-cyan-500 hover:bg-sanctum-cyan-600 transition-all duration-300 shadow-md hover:shadow-lg">
              SCHEDULE ASSESSMENT
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-[#1A1A1A]" />
            ) : (
              <Menu className="h-6 w-6 text-[#1A1A1A]" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-b border-gray-100">
          <div className="px-4 py-4 space-y-4">
            <button onClick={() => handleNavigation('bio-environmental')} className="block text-sm font-medium text-[#1A1A1A] text-left w-full">
              DIAGNOSTICS
            </button>
            <button onClick={() => handleNavigation('sanctum-score')} className="block text-sm font-medium text-[#1A1A1A] text-left w-full">
              SCORING
            </button>
            <button onClick={() => handleNavigation('blueprint')} className="block text-sm font-medium text-[#1A1A1A] text-left w-full">
              PROCESS
            </button>
            <button onClick={() => { navigate('/about'); window.scrollTo(0, 0); setIsMenuOpen(false); }} className="block text-sm font-medium text-[#1A1A1A] text-left w-full">
              ABOUT
            </button>
            <div className="pt-4">
              <button className="w-full px-4 py-2.5 text-sm font-semibold text-white bg-sanctum-cyan-500">
                SCHEDULE ASSESSMENT
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}