import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

export default function Footer() {
  const navigate = useNavigate();
  const location = useLocation();
  const [showCookieModal, setShowCookieModal] = useState(false);

  const handleNavigation = (path: string) => {
    if (path.startsWith('#')) {
      if (location.pathname !== '/') {
        navigate('/');
        setTimeout(() => {
          const element = document.getElementById(path.substring(1));
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      } else {
        const element = document.getElementById(path.substring(1));
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    } else {
      navigate(path);
      window.scrollTo(0, 0);
    }
  };

  return (
    <>
      <footer className="bg-[#111] border-t border-gray-800 py-16 px-6 text-[#F9F8F4]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-3 h-3 bg-emerald-600 rounded-full"></div>
              <span className="font-serif-display text-2xl tracking-tight font-semibold">Sanctum.</span>
            </div>
            <p className="text-gray-500 font-light text-sm max-w-xs">
              The world's first bio-environmental diagnostic service for residential property acquisitions.
            </p>
          </div>

          <div>
            <h4 className="font-mono-tech text-xs text-emerald-500 mb-6 tracking-widest uppercase">Company</h4>
            <ul className="space-y-4 text-sm text-gray-400 font-light">
              <li onClick={() => handleNavigation('/about')} className="hover:text-white cursor-pointer">About Sanctum</li>
              <li onClick={() => handleNavigation('#diagnostics')} className="hover:text-white cursor-pointer">The Science</li>
              <li onClick={() => handleNavigation('#about')} className="hover:text-white cursor-pointer">Our Mission</li>
              <li onClick={() => handleNavigation('/careers')} className="hover:text-white cursor-pointer">Careers</li>
            </ul>
          </div>

          <div>
            <h4 className="font-mono-tech text-xs text-emerald-500 mb-6 tracking-widest uppercase">Legal</h4>
            <ul className="space-y-4 text-sm text-gray-400 font-light">
              <li onClick={() => handleNavigation('/privacy-policy')} className="hover:text-white cursor-pointer">Privacy Policy</li>
              <li onClick={() => handleNavigation('/terms-of-service')} className="hover:text-white cursor-pointer">Terms of Service</li>
              <li onClick={() => setShowCookieModal(true)} className="hover:text-white cursor-pointer">Cookie Settings</li>
            </ul>
          </div>
        </div>

        <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center text-xs text-gray-600 font-mono-tech">
          <div>© 2025 SANCTUM DIAGNOSTICS. ALL RIGHTS RESERVED.</div>
          <div className="mt-4 md:mt-0 flex gap-4">
            <span>LONDON</span>
            <span>NEW YORK</span>
            <span>SINGAPORE</span>
          </div>
        </div>
      </footer>

      {showCookieModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-xl max-w-md w-full p-6">
            <h3 className="text-2xl font-serif-display mb-4 text-[#1c1c1c]">Cookie Settings</h3>
            <p className="text-gray-700 mb-6">
              We use cookies to enhance your browsing experience and analyze our traffic. Essential cookies are required for the site to function properly.
            </p>
            <div className="space-y-4 mb-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-semibold text-gray-900">Essential Cookies</p>
                  <p className="text-sm text-gray-600">Required for site functionality</p>
                </div>
                <div className="text-gray-400">Always Active</div>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-semibold text-gray-900">Analytics Cookies</p>
                  <p className="text-sm text-gray-600">Help us improve our services</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="sr-only peer" defaultChecked />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-emerald-600"></div>
                </label>
              </div>
            </div>
            <div className="flex gap-3">
              <button
                onClick={() => setShowCookieModal(false)}
                className="flex-1 px-6 py-3 bg-gray-900 text-white rounded-lg font-semibold hover:bg-gray-800 transition-colors"
              >
                Save Preferences
              </button>
              <button
                onClick={() => setShowCookieModal(false)}
                className="px-6 py-3 border border-gray-300 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
