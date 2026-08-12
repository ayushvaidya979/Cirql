import React, { useState, useEffect } from 'react';
import { X, Camera, Scan, Sparkles, CheckCircle2, ShieldCheck, ArrowRight, Upload, RefreshCw } from 'lucide-react';
import confetti from 'canvas-confetti';

interface AIScannerModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialValue?: number;
  initialDevice?: string;
}

export const AIScannerModal: React.FC<AIScannerModalProps> = ({
  isOpen,
  onClose,
  initialValue = 3851,
  initialDevice = 'Apple Smartphone',
}) => {
  const [scanStep, setScanStep] = useState<'upload' | 'scanning' | 'results'>('upload');
  const [progress, setProgress] = useState(0);
  const [selectedDeviceType, setSelectedDeviceType] = useState(initialDevice);
  const [calculatedValue, setCalculatedValue] = useState(initialValue);
  const [locked, setLocked] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setScanStep('upload');
      setProgress(0);
      setLocked(false);
      setCalculatedValue(initialValue);
      setSelectedDeviceType(initialDevice);
    }
  }, [isOpen, initialValue, initialDevice]);

  if (!isOpen) return null;

  const startScanning = () => {
    setScanStep('scanning');
    setProgress(0);
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setScanStep('results');
          confetti({ particleCount: 60, spread: 60, origin: { y: 0.5 } });
          return 100;
        }
        return prev + 10;
      });
    }, 200);
  };

  const handleLockPrice = () => {
    setLocked(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl max-w-3xl w-full border border-emerald-500/30 shadow-2xl overflow-hidden relative">
        
        {/* Modal Header */}
        <div className="bg-[#113123] text-white p-6 flex items-center justify-between border-b border-emerald-800">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/20 border border-emerald-400/40 flex items-center justify-center text-emerald-300">
              <Scan className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono font-bold text-emerald-300 bg-emerald-950 px-2 py-0.5 rounded uppercase border border-emerald-700">
                  AI VISION RECOGNITION ACTIVE
                </span>
                <span className="text-[10px] font-mono text-emerald-400">ACCURACY 99.4%</span>
              </div>
              <h3 className="text-lg font-bold text-white mt-0.5">Cirql AI E-Waste Device Scanner</h3>
            </div>
          </div>

          <button
            onClick={onClose}
            className="text-emerald-300 hover:text-white p-2 rounded-lg bg-emerald-900/50 hover:bg-emerald-900 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8">
          
          {/* STEP 1: UPLOAD / CAMERA PREVIEW */}
          {scanStep === 'upload' && (
            <div className="text-center py-6">
              <div className="w-24 h-24 mx-auto rounded-3xl bg-emerald-50 border-2 border-dashed border-emerald-400 flex flex-col items-center justify-center text-emerald-700 mb-6 cursor-pointer hover:bg-emerald-100/50 transition-colors" onClick={startScanning}>
                <Camera className="w-10 h-10 mb-1" />
                <span className="text-[10px] font-bold">CLICK TO SCAN</span>
              </div>

              <h4 className="text-xl font-bold text-slate-900 mb-2">Scan Your Electronics</h4>
              <p className="text-sm text-slate-600 max-w-md mx-auto mb-6">
                Position your smartphone, laptop, or circuit board in front of the camera or click below to simulate instant AI component detection.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <button
                  onClick={startScanning}
                  className="bg-[#1b4332] hover:bg-[#113123] text-white px-8 py-3.5 rounded-full font-bold text-sm shadow-md hover:scale-105 transition-all flex items-center justify-center gap-2"
                >
                  <Sparkles className="w-4 h-4 text-emerald-300" />
                  <span>Start AI Live Detection</span>
                </button>
              </div>
            </div>
          )}

          {/* STEP 2: SCANNING IN PROGRESS */}
          {scanStep === 'scanning' && (
            <div className="py-10 text-center space-y-6">
              <div className="relative w-48 h-48 mx-auto rounded-2xl bg-slate-950 border-2 border-emerald-500 overflow-hidden shadow-glow">
                {/* Simulated Device Graphic inside scanner */}
                <div className="absolute inset-0 bg-emerald-950/80 flex items-center justify-center text-emerald-400 font-mono text-xs">
                  <div className="text-center">
                    <Scan className="w-12 h-12 mx-auto mb-2 text-emerald-400 animate-spin" style={{ animationDuration: '4s' }} />
                    <p>ANALYZING CHIPSET...</p>
                  </div>
                </div>

                {/* Laser Scan line moving down */}
                <div className="absolute left-0 right-0 h-1 bg-gradient-to-r from-transparent via-emerald-400 to-transparent shadow-glow animate-scanline"></div>
              </div>

              <div className="max-w-xs mx-auto">
                <div className="flex justify-between text-xs font-mono font-bold text-emerald-900 mb-1">
                  <span>ANALYZING COMPONENTS</span>
                  <span>{progress}%</span>
                </div>
                <div className="w-full h-3 bg-slate-100 rounded-full overflow-hidden border border-slate-200">
                  <div
                    className="h-full bg-emerald-600 transition-all duration-200"
                    style={{ width: `${progress}%` }}
                  ></div>
                </div>
              </div>
            </div>
          )}

          {/* STEP 3: SCAN RESULTS & VALUE BREAKDOWN */}
          {scanStep === 'results' && (
            <div className="space-y-6">
              <div className="bg-emerald-50 border border-emerald-200 p-4 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-emerald-700 text-white flex items-center justify-center">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono font-bold text-emerald-800 uppercase">IDENTIFIED DEVICE</span>
                    <h4 className="text-lg font-extrabold text-slate-900">{selectedDeviceType}</h4>
                    <span className="text-xs text-slate-600">Component Condition: Verified • Working Grade B</span>
                  </div>
                </div>

                <div className="text-right">
                  <span className="text-[10px] font-mono font-bold text-slate-500 uppercase block">ESTIMATED BUYBACK</span>
                  <span className="text-3xl font-extrabold text-emerald-900 font-sans">
                    ₹{calculatedValue.toLocaleString()} <span className="text-sm">INR</span>
                  </span>
                </div>
              </div>

              {/* Detected Component Breakdown Grid (Matching Image 5) */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
                <div className="bg-slate-50 p-3 rounded-xl border border-slate-200">
                  <span className="font-mono text-[9px] text-slate-400 block font-bold">1. DISPLAY ASSEMBLY</span>
                  <span className="font-bold text-slate-800">OLED 6.1"</span>
                  <span className="text-[10px] text-emerald-700 block mt-0.5">Recyclable Glass</span>
                </div>

                <div className="bg-slate-50 p-3 rounded-xl border border-slate-200">
                  <span className="font-mono text-[9px] text-slate-400 block font-bold">2. LOGIC BOARD</span>
                  <span className="font-bold text-slate-800">SoC + 8GB RAM</span>
                  <span className="text-[10px] text-amber-700 block mt-0.5">⚡ Gold: 0.034g (~₹280)</span>
                </div>

                <div className="bg-slate-50 p-3 rounded-xl border border-slate-200">
                  <span className="font-mono text-[9px] text-slate-400 block font-bold">3. BATTERY</span>
                  <span className="font-bold text-slate-800">4500mAh Li-Po</span>
                  <span className="text-[10px] text-emerald-700 block mt-0.5">Cobalt Recovery</span>
                </div>

                <div className="bg-slate-50 p-3 rounded-xl border border-slate-200">
                  <span className="font-mono text-[9px] text-slate-400 block font-bold">4. BACK FRAME</span>
                  <span className="font-bold text-slate-800">Alloy Casing</span>
                  <span className="text-[10px] text-emerald-700 block mt-0.5">100% Dismantled</span>
                </div>
              </div>

              {locked ? (
                <div className="bg-[#113123] text-white p-5 rounded-2xl text-center space-y-2 border border-emerald-500/40 animate-in fade-in">
                  <CheckCircle2 className="w-8 h-8 text-emerald-400 mx-auto" />
                  <h4 className="text-lg font-bold">Price Locked for 7 Days!</h4>
                  <p className="text-xs text-emerald-200 max-w-md mx-auto">
                    We've emailed your lock-in QR pass. Free insured courier pickup will arrive at your scheduled time.
                  </p>
                </div>
              ) : (
                <div className="flex flex-col sm:flex-row gap-3 pt-2">
                  <button
                    onClick={handleLockPrice}
                    className="flex-1 bg-[#1b4332] hover:bg-[#113123] text-white font-bold text-sm py-3.5 px-6 rounded-2xl shadow-md flex items-center justify-center gap-2"
                  >
                    <span>Lock In ₹{calculatedValue.toLocaleString()} &amp; Book Pickup</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  <button
                    onClick={startScanning}
                    className="bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold text-xs py-3.5 px-5 rounded-2xl flex items-center justify-center gap-1.5"
                  >
                    <RefreshCw className="w-4 h-4" />
                    <span>Scan Another Device</span>
                  </button>
                </div>
              )}
            </div>
          )}

        </div>

      </div>
    </div>
  );
};
