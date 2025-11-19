import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-[#111] border-t border-gray-800 py-16 px-6 text-[#F9F8F4]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="col-span-1 md:col-span-2">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-3 h-3 bg-emerald-600 rounded-full"></div>
            <span className="font-serif-display text-2xl tracking-tight font-semibold">Sanctum.</span>
          </div>
          <p className="text-gray-500 font-light text-sm max-w-xs mb-8">
            The world's first bio-environmental diagnostic service for residential property acquisitions.
          </p>
          <div className="flex gap-4 text-gray-400">
            <div className="w-8 h-8 border border-gray-700 rounded flex items-center justify-center hover:border-emerald-500 transition-colors cursor-pointer text-xs">IG</div>
            <div className="w-8 h-8 border border-gray-700 rounded flex items-center justify-center hover:border-emerald-500 transition-colors cursor-pointer text-xs">LI</div>
            <div className="w-8 h-8 border border-gray-700 rounded flex items-center justify-center hover:border-emerald-500 transition-colors cursor-pointer text-xs">TW</div>
          </div>
        </div>

        <div>
          <h4 className="font-mono-tech text-xs text-emerald-500 mb-6 tracking-widest uppercase">Company</h4>
          <ul className="space-y-4 text-sm text-gray-400 font-light">
            <li className="hover:text-white cursor-pointer">About Sanctum</li>
            <li className="hover:text-white cursor-pointer">The Science</li>
            <li className="hover:text-white cursor-pointer">Laboratory Partners</li>
            <li className="hover:text-white cursor-pointer">Careers</li>
          </ul>
        </div>

        <div>
          <h4 className="font-mono-tech text-xs text-emerald-500 mb-6 tracking-widest uppercase">Legal</h4>
          <ul className="space-y-4 text-sm text-gray-400 font-light">
            <li className="hover:text-white cursor-pointer">Privacy Policy</li>
            <li className="hover:text-white cursor-pointer">Terms of Service</li>
            <li className="hover:text-white cursor-pointer">Cookie Settings</li>
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
  );
}
