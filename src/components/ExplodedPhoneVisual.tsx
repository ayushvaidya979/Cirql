import React, { useState } from 'react';

export const ExplodedPhoneVisual: React.FC = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setMousePos({ x, y });
  };

  const handleMouseLeave = () => {
    setMousePos({ x: 0, y: 0 });
  };

  return (
    <div 
      className="relative w-full h-[450px] sm:h-[540px] md:h-[600px] flex items-center justify-center select-none"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* 1. GIANT BACKGROUND RECYCLING SYMBOL (TOP-RIGHT) matching Image 1 */}
      <div 
        className="absolute -top-6 right-0 sm:right-6 pointer-events-none transition-transform duration-700 ease-out z-0 opacity-40"
        style={{
          transform: `translate(${mousePos.x * -15}px, ${mousePos.y * -15}px)`
        }}
      >
        <svg className="w-[300px] h-[300px] sm:w-[420px] sm:h-[420px] md:w-[500px] md:h-[500px] text-[#2d6a4f]/25" viewBox="0 0 500 500" fill="none">
          <g stroke="currentColor" strokeWidth="48" strokeLinecap="round" strokeLinejoin="round">
            {/* Top Loop */}
            <path d="M 250 50 L 330 180 H 420 A 180 180 0 0 0 250 50 Z" fill="#d8f3dc" fillOpacity="0.4" stroke="#74c69d" strokeWidth="16" />
            <path d="M 250 60 L 290 130" stroke="#40916c" strokeWidth="20" strokeLinecap="round" />
            
            {/* Bottom Right Loop */}
            <path d="M 370 240 L 260 410 L 210 330 A 180 180 0 0 0 440 240 Z" fill="#d8f3dc" fillOpacity="0.4" stroke="#74c69d" strokeWidth="16" />
            
            {/* Bottom Left Loop */}
            <path d="M 130 240 L 240 410 L 190 410 A 180 180 0 0 1 60 240 Z" fill="#d8f3dc" fillOpacity="0.4" stroke="#74c69d" strokeWidth="16" />
          </g>
          {/* Arrow heads */}
          <path d="M 230 40 L 270 80 L 210 90 Z" fill="#40916c" />
          <path d="M 440 220 L 410 270 L 380 220 Z" fill="#40916c" />
          <path d="M 80 260 L 120 210 L 130 270 Z" fill="#40916c" />
        </svg>
      </div>

      {/* 2. LAYERED TRANSLUCENT GREEN FANNING WAVE TILES (BOTTOM-LEFT TO RIGHT) matching Image 1 */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute bottom-0 left-0 right-0 h-full flex items-center justify-start opacity-70">
          <svg className="w-full h-full" viewBox="0 0 1200 500" fill="none">
            {Array.from({ length: 42 }).map((_, i) => {
              // Create vertical rounded rectangular tiles fanning out along an S-curve wave
              const progress = i / 42;
              const x = -80 + i * 26;
              const y = 340 - Math.sin(progress * Math.PI * 1.2) * 160 + (i * 1.5);
              const height = 180 + Math.sin(progress * Math.PI) * 140;
              const rotation = -15 + Math.sin(progress * Math.PI * 1.5) * 20;
              const opacity = 0.08 + (i > 10 && i < 35 ? (i / 40) * 0.35 : 0.1);

              return (
                <rect
                  key={i}
                  x={x}
                  y={y - height / 2}
                  width="18"
                  height={height}
                  rx="9"
                  fill="#74c69d"
                  fillOpacity={opacity}
                  stroke="#40916c"
                  strokeOpacity={opacity * 1.4}
                  strokeWidth="1.2"
                  transform={`rotate(${rotation}, ${x + 9}, ${y})`}
                />
              );
            })}
          </svg>
        </div>
      </div>

      {/* 3. MAIN EXPLODED SMARTPHONE COMPONENT STACK (3D PERSPECTIVE) */}
      <div 
        className="relative z-10 w-full max-w-5xl h-full flex items-center justify-between px-2 sm:px-6 transition-transform duration-300 ease-out"
        style={{
          transform: `perspective(1200px) rotateY(${mousePos.x * 8}deg) rotateX(${mousePos.y * -6}deg)`
        }}
      >
        <div className="relative flex items-center justify-between w-full h-full max-h-[460px]">
          
          {/* COMPONENT 1: Fully Assembled Anodized Green iPhone (Left Side, 3/4 Back View) */}
          <div 
            className="relative z-30 transition-transform duration-500 hover:scale-105 shrink-0"
            style={{ transform: `translateX(${mousePos.x * -12}px)` }}
          >
            <div className="w-28 sm:w-36 md:w-44 h-64 sm:h-80 md:h-96 rounded-[2.2rem] bg-gradient-to-b from-[#406853] via-[#2d523f] to-[#1c3829] p-2 shadow-2xl border-2 border-[#52876b] relative">
              {/* Back Plate & Triple Camera Bump */}
              <div className="w-full h-full rounded-[1.8rem] bg-[#294837] relative p-3 border border-[#3e6b52] flex flex-col justify-between overflow-hidden shadow-inner">
                
                {/* Triple Camera Island Top Left */}
                <div className="w-14 sm:w-16 h-14 sm:h-16 rounded-2xl bg-[#1d3527] border border-[#487a5e] p-1.5 grid grid-cols-2 gap-1 shadow-lg">
                  <div className="w-5 h-5 rounded-full bg-slate-950 border-2 border-[#52876b] flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-[#34d399]/60"></div>
                  </div>
                  <div className="w-5 h-5 rounded-full bg-slate-950 border-2 border-[#52876b] flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-[#34d399]/60"></div>
                  </div>
                  <div className="w-5 h-5 rounded-full bg-slate-950 border-2 border-[#52876b] flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-[#34d399]/60"></div>
                  </div>
                  <div className="w-3.5 h-3.5 rounded-full bg-amber-200 border border-amber-400 self-center justify-self-center"></div>
                </div>

                {/* Subtle Metallic Gloss Reflection */}
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent pointer-events-none"></div>

                {/* Antenna Bands */}
                <div className="w-full h-px bg-[#487a5e] my-auto"></div>

                {/* Bottom Frame Details */}
                <div className="flex justify-between items-center text-[8px] font-mono text-[#74c69d]/60 px-1">
                  <span>CIRQL-PRO</span>
                  <span>5G</span>
                </div>

              </div>
            </div>
          </div>

          {/* COMPONENT 2: Floating Micro Parts & Camera Sensors (Top & Bottom Columns) */}
          <div className="relative z-20 flex flex-col justify-between h-72 sm:h-84 md:h-[400px] px-1 sm:px-2">
            
            {/* Top Triple Camera Sensors & Lenses Floating */}
            <div 
              className="flex flex-col gap-2 items-center animate-float"
              style={{ transform: `translateY(${mousePos.y * -15}px)` }}
            >
              <div className="flex gap-2">
                {[1, 2, 3].map((id) => (
                  <div key={id} className="w-7 h-7 sm:w-9 sm:h-9 rounded-lg bg-slate-900 border border-[#74c69d]/60 p-0.5 shadow-md flex items-center justify-center">
                    <div className="w-4 h-4 rounded-full bg-emerald-950 border border-emerald-400 flex items-center justify-center">
                      <div className="w-1.5 h-1.5 rounded-full bg-emerald-400"></div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="w-8 h-4 bg-slate-800 rounded border border-slate-600 flex items-center justify-center text-[7px] font-mono text-emerald-300">
                SENSOR
              </div>
            </div>

            {/* Middle Micro Screws & Connector Ribbon Cables */}
            <div className="flex flex-col items-center gap-1.5 my-auto">
              <div className="w-3 h-3 bg-amber-400 rounded-xs border border-amber-600 shadow-sm text-[6px] font-mono font-bold text-amber-950 flex items-center justify-center">
                Au
              </div>
              <div className="w-6 h-2 bg-slate-400 rounded-xs"></div>
              <div className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></div>
              <div className="w-5 h-2 bg-[#2d6a4f] rounded-xs border border-emerald-400"></div>
            </div>

            {/* Bottom Sensors & Haptic Engine */}
            <div 
              className="flex flex-col gap-2 items-center animate-float-slow"
              style={{ transform: `translateY(${mousePos.y * 15}px)` }}
            >
              <div className="flex gap-2">
                <div className="w-8 sm:w-10 h-6 bg-slate-900 rounded border border-slate-700 p-0.5 flex flex-col justify-center items-center">
                  <span className="text-[6px] font-mono text-emerald-400 font-bold">MIC</span>
                </div>
                <div className="w-8 sm:w-10 h-6 bg-slate-900 rounded border border-slate-700 p-0.5 flex flex-col justify-center items-center">
                  <span className="text-[6px] font-mono text-emerald-400 font-bold">TAPTIC</span>
                </div>
              </div>
            </div>

          </div>

          {/* COMPONENT 3: Logic Board & Heat Sink Graphite Shield */}
          <div 
            className="relative z-22 transition-transform duration-500 shrink-0"
            style={{ transform: `translate(${mousePos.x * 4}px, ${mousePos.y * 8}px)` }}
          >
            <div className="w-16 sm:w-22 md:w-28 h-60 sm:h-76 md:h-88 rounded-xl bg-[#17251d] border-2 border-[#40916c] shadow-2xl p-1.5 flex flex-col justify-between relative overflow-hidden">
              {/* Heat Shield Black Shielding Plate */}
              <div className="w-full h-full rounded-lg bg-[#111c16] border border-[#2d6a4f] p-1 flex flex-col justify-between relative">
                
                {/* Main Chip IC */}
                <div className="w-full h-14 sm:h-18 bg-slate-950 rounded-md border border-[#52b788] p-1 flex flex-col items-center justify-center shadow-md">
                  <div className="w-6 h-6 rounded bg-[#2d6a4f] border border-[#74c69d] flex items-center justify-center text-[9px] font-mono font-bold text-white mb-0.5">
                    A17
                  </div>
                  <span className="text-[7px] font-mono text-[#74c69d] font-bold">BIONIC</span>
                </div>

                {/* Circuit Traces */}
                <div className="w-full h-16 border-t border-b border-[#2d6a4f]/40 my-1 grid grid-cols-2 gap-1 p-0.5">
                  <div className="bg-slate-900 rounded border border-slate-800 p-0.5 text-[6px] font-mono text-slate-400">RAM</div>
                  <div className="bg-slate-900 rounded border border-slate-800 p-0.5 text-[6px] font-mono text-slate-400">NAND</div>
                </div>

                {/* Baseband Modems */}
                <div className="w-full h-10 bg-slate-950 rounded-md border border-[#40916c]/60 p-1 text-[6px] font-mono text-emerald-400 text-center flex items-center justify-center">
                  5G RF CHIP
                </div>

              </div>
            </div>
          </div>

          {/* COMPONENT 4: Logic PCB Board (Main Component Stack) */}
          <div 
            className="relative z-25 transition-transform duration-500 shrink-0"
            style={{ transform: `translate(${mousePos.x * 8}px, ${mousePos.y * 4}px)` }}
          >
            <div className="w-18 sm:w-24 md:w-30 h-60 sm:h-76 md:h-88 rounded-xl bg-[#0b1d14] border-2 border-[#52b788] shadow-2xl p-1.5 flex flex-col justify-between relative">
              {/* Gold Contacts & Component Populated PCB */}
              <div className="w-full h-full rounded-lg bg-[#0e271a] border border-[#40916c] p-1.5 flex flex-col justify-between">
                <div className="w-full h-12 bg-[#173a27] rounded border border-[#74c69d]/60 p-1 text-center">
                  <span className="text-[7px] font-mono text-amber-300 font-bold block">Au PLATED</span>
                  <span className="text-[6px] font-mono text-emerald-200">CONNECTOR</span>
                </div>

                <div className="space-y-1 my-1">
                  <div className="w-full h-4 bg-slate-900 rounded text-[6px] font-mono text-emerald-400 flex items-center px-1">IC-CTRL</div>
                  <div className="w-full h-4 bg-slate-900 rounded text-[6px] font-mono text-emerald-400 flex items-center px-1">PMIC-V2</div>
                  <div className="w-full h-4 bg-slate-900 rounded text-[6px] font-mono text-emerald-400 flex items-center px-1">AUDIO-CODEC</div>
                </div>

                <div className="w-full h-10 bg-[#173a27] rounded border border-[#74c69d]/60 flex items-center justify-center text-[7px] font-mono text-white">
                  SUB-PCB
                </div>
              </div>
            </div>
          </div>

          {/* COMPONENT 5: Li-ion Battery Block (Matching Image 1 exact print details) */}
          <div 
            className="relative z-28 transition-transform duration-500 hover:scale-105 shrink-0"
            style={{ transform: `translate(${mousePos.x * 12}px, ${mousePos.y * -4}px)` }}
          >
            <div className="w-20 sm:w-28 md:w-34 h-60 sm:h-76 md:h-88 rounded-xl bg-slate-950 border-2 border-slate-700 shadow-2xl p-2 flex flex-col justify-between relative">
              {/* Battery Flex Ribbon */}
              <div className="w-6 h-3 bg-emerald-600 rounded-t-sm mx-auto -mt-3.5 border-t border-emerald-400"></div>

              {/* Printed Text Details (exact to Image 1) */}
              <div className="text-center pt-2">
                <div className="w-6 h-6 mx-auto mb-1 border border-slate-500 rounded-full flex items-center justify-center">
                  <span className="text-[10px] text-amber-400 font-bold">⚠️</span>
                </div>
                <p className="text-[8px] font-mono font-bold text-slate-200 uppercase tracking-tight">
                  WARNING
                </p>
                <p className="text-[6.5px] font-mono text-slate-400 leading-tight mt-0.5 px-0.5">
                  Authorized Service Provider Only. Potential for fire or burning. Do not disassemble, puncture, crush, heat, or burn.
                </p>
              </div>

              {/* Large Recycling Symbol + Li-ion Print (Matching Image 1) */}
              <div className="text-center my-auto py-2 border-t border-b border-slate-800">
                <div className="w-8 h-8 mx-auto text-slate-100 mb-1">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <path d="M7 19H4.815a1.83 1.83 0 0 1-1.57-.91 1.78 1.78 0 0 1 .068-1.809l1.455-2.28 1.455-2.28a1.78 1.78 0 0 1 1.502-.821H12.5" />
                    <path d="M17 19h2.185a1.83 1.83 0 0 0 1.57-.91 1.78 1.78 0 0 0-.068-1.809l-1.455-2.28-1.455-2.28a1.78 1.78 0 0 0-1.502-.821H11.5" />
                    <path d="M12 5V2.815a1.83 1.83 0 0 0-.91-1.57 1.78 1.78 0 0 0-1.809.068L7 2.768l-2.28 1.455a1.78 1.78 0 0 0-.821 1.502V10.5" />
                  </svg>
                </div>
                <span className="text-xs font-mono font-bold text-slate-100 tracking-wider">
                  Li-ion
                </span>
              </div>

              <div className="text-[6.5px] font-mono text-slate-500 text-center">
                4352mAh • 3.86V
              </div>
            </div>
          </div>

          {/* COMPONENT 6: Secondary Small Board */}
          <div 
            className="relative z-24 transition-transform duration-500 shrink-0 hidden sm:block"
            style={{ transform: `translate(${mousePos.x * 14}px, ${mousePos.y * 6}px)` }}
          >
            <div className="w-10 md:w-14 h-52 sm:h-64 md:h-76 rounded-lg bg-[#143022] border border-[#52b788] shadow-xl p-1 flex flex-col justify-between">
              <div className="w-full h-8 bg-[#1e4632] rounded border border-emerald-400 text-[6px] font-mono text-emerald-200 text-center leading-8">
                SUB-1
              </div>
              <div className="w-full h-8 bg-[#1e4632] rounded border border-emerald-400 text-[6px] font-mono text-emerald-200 text-center leading-8">
                USB-C
              </div>
            </div>
          </div>

          {/* COMPONENT 7: Anodized Green Smartphone Rear Casing Frame (Far Right) */}
          <div 
            className="relative z-30 transition-transform duration-500 hover:scale-105 shrink-0"
            style={{ transform: `translateX(${mousePos.x * 18}px)` }}
          >
            <div className="w-28 sm:w-36 md:w-44 h-64 sm:h-80 md:h-96 rounded-[2.2rem] bg-gradient-to-br from-[#406853] via-[#2d523f] to-[#1c3829] p-2 shadow-2xl border-2 border-[#52876b] relative">
              {/* Inside Metallic Chassis Frame Layout */}
              <div className="w-full h-full rounded-[1.8rem] bg-[#1a3325] border border-[#3e6b52] p-2.5 flex flex-col justify-between relative overflow-hidden shadow-inner">
                
                {/* Camera Square Cutout from Inside */}
                <div className="w-12 sm:w-14 h-12 sm:h-14 rounded-xl bg-slate-950 border border-[#52876b] p-1 grid grid-cols-2 gap-1">
                  <div className="w-4 h-4 rounded-full bg-transparent border border-slate-700"></div>
                  <div className="w-4 h-4 rounded-full bg-transparent border border-slate-700"></div>
                  <div className="w-4 h-4 rounded-full bg-transparent border border-slate-700"></div>
                </div>

                {/* Internal Structural Ribs & Antenna Ring */}
                <div className="w-20 h-20 mx-auto rounded-full border border-[#40916c]/40 flex items-center justify-center opacity-40">
                  <div className="w-12 h-12 rounded-full border border-dashed border-[#52b788]"></div>
                </div>

                <div className="w-full text-center text-[7px] font-mono text-[#74c69d]/60 border-t border-[#3e6b52] pt-1">
                  ALUMINUM FRAME
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
