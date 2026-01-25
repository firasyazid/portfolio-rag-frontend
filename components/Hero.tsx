"use client";

import { useState } from "react";

export default function Hero() {
  const [showCVMenu, setShowCVMenu] = useState(false);

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
          <span className="text-blue-300 font-extrabold">
            AI Innovation
          </span>
        </h1>
        
        <div className="pt-4 relative inline-block">
          <button
            onClick={() => setShowCVMenu(!showCVMenu)}
            className="group px-10 py-5 bg-zinc-800/50 backdrop-blur-sm text-white rounded-full hover:bg-zinc-700/60 transition-all duration-300 text-base font-medium border border-zinc-700/50 hover:border-zinc-600 hover:shadow-2xl hover:shadow-indigo-500/20 hover:scale-105"
          >
            Download CV
          </button>

          {showCVMenu && (
            <div className="absolute left-1/2 -translate-x-1/2 mt-2 w-48 bg-zinc-900/95 backdrop-blur-md rounded-2xl border border-white/10 overflow-hidden shadow-xl">
              <a
                href="/FirasYazid-en.pdf"
                download
                className="block px-6 py-3 text-white hover:bg-white/10 transition-colors"
                onClick={() => setShowCVMenu(false)}
              >
                English
              </a>
              <a
                href="/FirasYazid-Fr.pdf"
                download
                className="block px-6 py-3 text-white hover:bg-white/10 transition-colors"
                onClick={() => setShowCVMenu(false)}
              >
                Français
              </a>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
