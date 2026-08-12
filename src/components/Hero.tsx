import React from 'react';
import { Leaf, ChevronDown } from 'lucide-react';

interface HeroProps {
  onOpenScanner: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenScanner }) => {
  const scrollToExplore = () => {
    const el = document.getElementById('how-it-works');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen pt-28 pb-12 flex flex-col justify-between overflow-hidden bg-[#F8FAF5] select-none"
    >
      {/* 1. ATMOSPHERIC PALE-GREEN AMBIENT GLOW */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-[#d8f3dc]/30 rounded-full blur-[120px]" />
      </div>

      {/* 2. RECYCLING ICON WATERMARK (UPPER-RIGHT BACKGROUND) */}
      <div className="absolute top-12 right-4 sm:right-12 pointer-events-none z-1 opacity-80 max-w-[450px] sm:max-w-[550px] lg:max-w-[650px] animate-pulse-glow">
        <img
          src="/assets/recycle_icon_transparent.png"
          alt="Recycling Symbol Watermark"
          className="w-full h-auto object-contain"
        />
      </div>

      {/* 3. SPIRAL / WAVE ELEMENT (DIAGONAL BACKGROUND) */}
      <div className="absolute bottom-10 left-1/4 right-0 pointer-events-none z-2 opacity-80 max-w-[900px] w-full">
        <img
          src="/assets/spiral_wave_transparent.png"
          alt="Translucent Green Wave Element"
          className="w-full h-auto object-contain transform -rotate-3 scale-105"
        />
      </div>

      {/* 4. MAIN HERO COMPOSITION CONTAINER */}
      <div className="max-w-[1440px] mx-auto px-6 sm:px-12 lg:px-16 w-full relative z-10 my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center min-h-[520px]">

          {/* LEFT CONTENT (approx 5-8% margin, 5 cols on lg) */}
          <div className="lg:col-span-5 flex flex-col justify-center space-y-6 text-left relative z-20">

            {/* EYEBROW TEXT */}
            <div className="text-xs sm:text-sm font-mono font-bold text-[#193829] uppercase tracking-widest">
              01 — HERO
            </div>

            {/* MAIN EDITORIAL HEADING */}
            <h1 className="text-6xl sm:text-7xl md:text-8xl font-extrabold tracking-tight text-[#111111] leading-[0.98] font-sans">
              Every Part<br />
              <span className="text-[#2d6a4f]">Counts.</span>
            </h1>

            {/* 3 VISUAL LINES SUBTEXT */}
            <p className="text-lg sm:text-xl text-[#2b2b2b] font-medium leading-relaxed tracking-tight max-w-sm">
              We identify. We value.<br />
              You recycle. We make<br />
              a difference.
            </p>

            {/* SUSTAINABILITY STATEMENT */}
            <div className="pt-2">
              <div className="inline-flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center text-[#193829] shrink-0">
                  <Leaf className="w-4.5 h-4.5 fill-[#193829]" />
                </div>
                <div className="text-sm sm:text-base leading-snug">
                  <span className="font-bold text-[#193829] block">Sustainable Today,</span>
                  <span className="font-bold text-[#2d6a4f] block">Better Tomorrow.</span>
                </div>
              </div>
            </div>

          </div>

          {/* RIGHT VISUAL: EXPLODED SMARTPHONE ASSET (7 COLS on lg) */}
          <div className="lg:col-span-7 relative z-20 w-full flex items-center justify-center lg:justify-end">
            <div className="relative w-full max-w-[850px] transform hover:scale-[1.01] transition-transform duration-500 ease-out">
              <img
                src="/assets/exploded_phone_transparent.png"
                alt="Exploded Dismantled Smartphone Components"
                className="w-full h-auto object-contain drop-shadow-xl animate-float-slow"
              />
            </div>
          </div>

        </div>
      </div>

      {/* 5. BOTTOM CENTER GET STARTED CTA & SCROLL INDICATOR */}
      <div className="relative z-30 flex flex-col items-center justify-center space-y-3 pt-6 pb-2">

        {/* SCAN YOUR DEVICE NOW BUTTON */}
        <button
          onClick={onOpenScanner}
          className="group relative inline-flex items-center justify-center gap-3.5 bg-[#193829] hover:bg-[#11281c] text-white text-lg font-bold px-8 h-[60px] rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-0.5 hover:scale-[1.02] transition-all duration-300 border border-emerald-700/30"
        >
          <div className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center text-white shrink-0 group-hover:rotate-12 transition-transform">
            <Leaf className="w-4 h-4 fill-white" />
          </div>
          <span className="tracking-wide">Scan Your Device Now</span>
        </button>

        {/* SCROLL INDICATOR */}
        <button
          onClick={scrollToExplore}
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#193829] hover:text-[#2d6a4f] transition-colors py-1 group"
        >
          <ChevronDown className="w-4 h-4 text-[#193829] animate-bounce" />
          <span>Scroll to explore</span>
        </button>

      </div>

    </section>
  );
};
