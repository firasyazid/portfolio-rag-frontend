"use client";

import { useState } from "react";
export default function Hero() {
  const [showCVDialog, setShowCVDialog] = useState(false);

  const handleDownload = (language: string) => {
    const filename = language === 'en' ? '/FirasYazid-en.pdf' : '/FirasYazid-Fr.pdf';
    const link = document.createElement('a');
    link.href = filename;
    link.download = filename.split('/').pop() || '';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setShowCVDialog(false);
  };

  return (
    <section className="flex flex-col items-center justify-start pt-40 px-6 relative z-10">
      <div className="max-w-5xl text-center space-y-8">
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight text-white">
          Where{" "}
          <span className="text-cyan-300 font-extrabold">
            Software Engineering
          </span>
          <br />
          Meets{" "}
          <span className="text-cyan-300 font-extrabold">
            AI Innovation
          </span>
        </h1>
        
        <div className="pt-4">
          <button
            onClick={() => setShowCVDialog(true)}
            className="px-10 py-5 bg-zinc-800/50 backdrop-blur-sm text-white rounded-full hover:bg-zinc-700/60 transition-all duration-300 text-base font-medium border border-zinc-700/50 hover:border-zinc-600 hover:shadow-2xl hover:shadow-indigo-500/20 hover:scale-105"
          >
            Download CV
          </button>
        </div>
      </div>

      {/* Dialog Overlay */}
      {showCVDialog && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-start justify-center px-4 pt-32">
          {/* Dialog Box */}
          <div className="bg-gradient-to-br from-zinc-900/95 to-zinc-950/95 backdrop-blur-md rounded-xl border border-white/10 shadow-2xl shadow-indigo-500/10 p-6 max-w-xs w-full">
            
            <p className="text-white/50 text-sm text-center mb-6">
              Choose your preferred language
            </p>
            <div className="flex flex-col gap-2">
              <button
                onClick={() => handleDownload('en')}
                className="w-full px-5 py-2.5 bg-cyan-500/15 border border-cyan-500/40 text-white text-sm hover:bg-cyan-500/25 hover:border-cyan-500/60 transition-all duration-300 rounded-lg font-medium"
              >
                English
              </button>
              <button
                onClick={() => handleDownload('fr')}
                className="w-full px-5 py-2.5 bg-blue-500/15 border border-blue-500/40 text-white text-sm hover:bg-blue-500/25 hover:border-blue-500/60 transition-all duration-300 rounded-lg font-medium"
              >
                Français
              </button>
            </div>
            <button
              onClick={() => setShowCVDialog(false)}
              className="w-full mt-3 px-5 py-2 bg-zinc-800/30 border border-zinc-700/50 text-white/50 text-sm hover:text-white/70 hover:border-zinc-600 transition-colors rounded-lg"
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
