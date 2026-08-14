import React, { useState, useEffect, useRef } from 'react';
import {
  X, Camera, Scan, Sparkles, CheckCircle2, ShieldCheck,
  ArrowRight, Upload, RefreshCw, Smartphone, Laptop, Tablet, Watch, Cpu, Zap, Lock, AlertCircle
} from 'lucide-react';
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
  const [scanMode, setScanMode] = useState<'camera' | 'upload'>('camera');
  const [progress, setProgress] = useState(0);
  const [aiStatus, setAiStatus] = useState('Initializing AI Vision...');
  const [selectedDeviceType, setSelectedDeviceType] = useState(initialDevice);
  const [calculatedValue, setCalculatedValue] = useState(initialValue);
  const [locked, setLocked] = useState(false);
  const [animIn, setAnimIn] = useState(false);

  // Live Camera state
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [isCameraActive, setIsCameraActive] = useState(false);
  const [cameraError, setCameraError] = useState<string | null>(null);
  const [previewImage, setPreviewImage] = useState<string | null>(null);
  const streamRef = useRef<MediaStream | null>(null);

  const deviceCategories = [
    { name: 'Apple Smartphone', icon: Smartphone, defaultVal: 3851 },
    { name: 'Pro Laptop / PC', icon: Laptop, defaultVal: 8420 },
    { name: 'Tablet / iPad', icon: Tablet, defaultVal: 4200 },
    { name: 'Smartwatch', icon: Watch, defaultVal: 1850 },
    { name: 'PCB / Motherboard', icon: Cpu, defaultVal: 2900 },
  ];

  // Stop active camera stream helper
  const stopCamera = () => {
    if (streamRef.current) {
      streamRef.current.getTracks().forEach((track) => track.stop());
      streamRef.current = null;
    }
    setIsCameraActive(false);
  };

  // Start live webcam camera stream
  const startCameraStream = async () => {
    setCameraError(null);
    setScanMode('camera');
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: 'environment', width: { ideal: 1280 }, height: { ideal: 720 } },
      });
      streamRef.current = stream;
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
      }
      setIsCameraActive(true);
    } catch (err: any) {
      console.warn('Camera access error:', err);
      setCameraError('Unable to access camera. Please allow camera permissions or upload an image.');
      setIsCameraActive(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      setScanStep('upload');
      setProgress(0);
      setLocked(false);
      setCalculatedValue(initialValue);
      setSelectedDeviceType(initialDevice);
      setPreviewImage(null);
      setCameraError(null);
      setAnimIn(false);
      requestAnimationFrame(() => setTimeout(() => setAnimIn(true), 10));
    } else {
      stopCamera();
      setAnimIn(false);
    }
  }, [isOpen, initialValue, initialDevice]);

  // Clean up camera on unmount or modal close
  useEffect(() => {
    return () => {
      stopCamera();
    };
  }, []);

  // Sync video element when isCameraActive changes
  useEffect(() => {
    if (isCameraActive && streamRef.current && videoRef.current) {
      videoRef.current.srcObject = streamRef.current;
    }
  }, [isCameraActive]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      stopCamera();
      const reader = new FileReader();
      reader.onload = (event) => {
        setPreviewImage(event.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const startScanning = () => {
    stopCamera();
    setScanStep('scanning');
    setProgress(0);
    setAiStatus('Initializing AI Computer Vision...');

    const statusSteps = [
      { pct: 20, text: 'Detecting device chassis & model...' },
      { pct: 45, text: 'Analyzing exterior wear & screen condition...' },
      { pct: 70, text: 'Calculating internal Gold, Silver & Copper yield...' },
      { pct: 90, text: 'Cross-referencing live market buyback rates...' },
      { pct: 100, text: 'Valuation complete!' },
    ];

    const interval = setInterval(() => {
      setProgress((prev) => {
        const next = prev + 5;
        const currentStatus = statusSteps.find(s => next >= s.pct && prev < s.pct);
        if (currentStatus) setAiStatus(currentStatus.text);

        if (next >= 100) {
          clearInterval(interval);
          setScanStep('results');
          confetti({ particleCount: 70, spread: 70, origin: { y: 0.5 } });
          return 100;
        }
        return next;
      });
    }, 120);
  };

  const handleSelectDevice = (devName: string, val: number) => {
    setSelectedDeviceType(devName);
    setCalculatedValue(val);
  };

  const handleLockPrice = () => {
    setLocked(true);
  };

  const handleCloseModal = () => {
    stopCamera();
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{
        background: 'rgba(15, 23, 42, 0.45)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
      }}
      onClick={(e) => { if (e.target === e.currentTarget) handleCloseModal(); }}
    >
      {/* ── LIGHT THEMED LIQUID GLASS MODAL PANEL ── */}
      <div
        className="relative w-full max-w-md flex flex-col overflow-hidden"
        style={{
          borderRadius: 28,
          background: 'rgba(255, 255, 255, 0.85)',
          backdropFilter: 'blur(30px) saturate(170%)',
          WebkitBackdropFilter: 'blur(30px) saturate(170%)',
          border: '1px solid rgba(255, 255, 255, 0.95)',
          boxShadow: '0 30px 90px rgba(15, 23, 42, 0.18), inset 0 1px 0 rgba(255, 255, 255, 1)',
          transform: animIn ? 'translateY(0) scale(1)' : 'translateY(24px) scale(0.95)',
          opacity: animIn ? 1 : 0,
          transition: 'transform 0.35s cubic-bezier(0.34, 1.46, 0.64, 1), opacity 0.25s ease',
        }}
      >
        {/* Top ambient highlight line */}
        <div
          aria-hidden
          className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1.5px]"
          style={{ background: 'linear-gradient(90deg, transparent, rgba(64, 145, 108, 0.5), transparent)' }}
        />

        {/* ── MODAL HEADER ── */}
        <div className="flex items-center justify-between px-6 pt-5 pb-4 border-b border-slate-200/70 shrink-0 bg-white/40">
          <div className="flex items-center gap-3">
            <div
              className="w-9 h-9 rounded-2xl flex items-center justify-center shrink-0"
              style={{
                background: 'rgba(64, 145, 108, 0.12)',
                border: '1px solid rgba(64, 145, 108, 0.25)',
                boxShadow: 'inset 0 1px 0 rgba(255, 255, 255, 0.8)',
              }}
            >
              <Scan className="w-4.5 h-4.5 text-[#2d6457]" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-[9px] font-extrabold uppercase tracking-[0.2em] text-[#2d6457]">
                  AI Computer Vision
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              </div>
              <h3 className="text-base font-extrabold text-slate-900 leading-tight">Cirql AI Valuation Scanner</h3>
            </div>
          </div>

          <button
            onClick={handleCloseModal}
            aria-label="Close modal"
            className="w-8 h-8 rounded-full flex items-center justify-center text-slate-400 hover:text-slate-700 transition-colors"
            style={{
              background: 'rgba(255, 255, 255, 0.7)',
              border: '1px solid rgba(255, 255, 255, 0.9)',
              boxShadow: '0 1px 4px rgba(0,0,0,0.05)',
            }}
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* ── MODAL BODY ── */}
        <div className="p-6 overflow-y-auto max-h-[80vh]">

          {/* Hidden File Input for Image Upload */}
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleFileUpload}
            accept="image/*"
            className="hidden"
          />

          {/* ════ STEP 1: SCANNER FRAME / CAMERA / UPLOAD VIEW ════ */}
          {scanStep === 'upload' && (
            <div className="space-y-5">
              
              {/* Scan Mode Toggle Pills */}
              <div className="grid grid-cols-2 gap-1.5 p-1 rounded-xl bg-slate-100/80 border border-slate-200/80">
                <button
                  type="button"
                  onClick={() => {
                    setScanMode('camera');
                    startCameraStream();
                  }}
                  className={`flex items-center justify-center gap-2 py-2 rounded-lg text-xs font-bold transition-all ${
                    scanMode === 'camera'
                      ? 'bg-[#2d6457] text-white shadow-sm'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-white/50'
                  }`}
                >
                  <Camera className="w-3.5 h-3.5" />
                  <span>AI Live Camera</span>
                </button>

                <button
                  type="button"
                  onClick={() => {
                    stopCamera();
                    setScanMode('upload');
                    fileInputRef.current?.click();
                  }}
                  className={`flex items-center justify-center gap-2 py-2 rounded-lg text-xs font-bold transition-all ${
                    scanMode === 'upload'
                      ? 'bg-[#2d6457] text-white shadow-sm'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-white/50'
                  }`}
                >
                  <Upload className="w-3.5 h-3.5" />
                  <span>Upload Image</span>
                </button>
              </div>

              {/* LIVE CAMERA / UPLOAD VIEWPORT */}
              <div
                className="group relative flex flex-col items-center justify-center h-56 rounded-2xl overflow-hidden transition-all duration-300 shadow-sm"
                style={{
                  background: 'rgba(240, 253, 244, 0.65)',
                  backdropFilter: 'blur(16px)',
                  WebkitBackdropFilter: 'blur(16px)',
                  border: '1.5px dashed rgba(64, 145, 108, 0.4)',
                  boxShadow: '0 4px 24px rgba(64, 145, 108, 0.08), inset 0 1px 0 rgba(255, 255, 255, 0.9)',
                }}
              >
                {/* ── CASE A: LIVE WEBCAM ACTIVE ── */}
                {isCameraActive ? (
                  <div className="relative w-full h-full flex items-center justify-center bg-black">
                    <video
                      ref={videoRef}
                      autoPlay
                      playsInline
                      muted
                      className="w-full h-full object-cover"
                    />

                    {/* Target Corner Frame Overlay */}
                    <div className="absolute top-4 left-4 w-6 h-6 border-t-2 border-l-2 border-emerald-400 rounded-tl-sm z-10" />
                    <div className="absolute top-4 right-4 w-6 h-6 border-t-2 border-r-2 border-emerald-400 rounded-tr-sm z-10" />
                    <div className="absolute bottom-4 left-4 w-6 h-6 border-b-2 border-l-2 border-emerald-400 rounded-bl-sm z-10" />
                    <div className="absolute bottom-4 right-4 w-6 h-6 border-b-2 border-r-2 border-emerald-400 rounded-br-sm z-10" />

                    {/* Live Scanner Beam Indicator */}
                    <div className="absolute inset-0 bg-emerald-500/10 pointer-events-none z-10 animate-pulse" />

                    <div className="absolute bottom-3 left-3 right-3 z-20 flex justify-between items-center bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-xl border border-white/20">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-400 flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                        Live Camera Active
                      </span>
                      <button
                        type="button"
                        onClick={startScanning}
                        className="bg-emerald-500 hover:bg-emerald-400 text-slate-950 px-3 py-1 rounded-lg text-xs font-bold shadow-sm"
                      >
                        Capture &amp; Scan
                      </button>
                    </div>
                  </div>

                ) : previewImage ? (
                  /* ── CASE B: UPLOADED PHOTO PREVIEW ── */
                  <div className="relative w-full h-full flex items-center justify-center bg-slate-900">
                    <img
                      src={previewImage}
                      alt="Device Preview"
                      className="w-full h-full object-contain"
                    />
                    <div className="absolute top-3 right-3 z-20">
                      <button
                        type="button"
                        onClick={() => fileInputRef.current?.click()}
                        className="bg-white/80 hover:bg-white text-slate-800 p-1.5 rounded-lg text-xs font-bold shadow-sm"
                      >
                        Change Photo
                      </button>
                    </div>
                  </div>

                ) : (
                  /* ── CASE C: CLICK TO OPEN CAMERA / UPLOAD PROMPT ── */
                  <div
                    onClick={() => {
                      if (scanMode === 'camera') startCameraStream();
                      else fileInputRef.current?.click();
                    }}
                    className="w-full h-full flex flex-col items-center justify-center cursor-pointer p-4 text-center group"
                  >
                    {/* Target Corners */}
                    <div className="absolute top-3 left-3 w-4 h-4 border-t-2 border-l-2 border-[#2d6457] rounded-tl-sm opacity-70" />
                    <div className="absolute top-3 right-3 w-4 h-4 border-t-2 border-r-2 border-[#2d6457] rounded-tr-sm opacity-70" />
                    <div className="absolute bottom-3 left-3 w-4 h-4 border-b-2 border-l-2 border-[#2d6457] rounded-bl-sm opacity-70" />
                    <div className="absolute bottom-3 right-3 w-4 h-4 border-b-2 border-r-2 border-[#2d6457] rounded-br-sm opacity-70" />

                    <div
                      className="w-14 h-14 rounded-2xl flex items-center justify-center mb-3 transition-transform group-hover:scale-110"
                      style={{
                        background: 'rgba(255, 255, 255, 0.9)',
                        border: '1px solid rgba(64, 145, 108, 0.25)',
                        boxShadow: '0 4px 16px rgba(45, 106, 79, 0.12)',
                      }}
                    >
                      {scanMode === 'camera' ? (
                        <Camera className="w-7 h-7 text-[#2d6457]" />
                      ) : (
                        <Upload className="w-7 h-7 text-[#2d6457]" />
                      )}
                    </div>

                    <p className="text-base font-extrabold text-slate-900 tracking-tight">
                      {scanMode === 'camera' ? 'Click to Open Camera Scan' : 'Click to Upload Device Photo'}
                    </p>
                    <p className="text-xs text-slate-500 mt-1 font-medium max-w-xs text-center px-4">
                      Place device inside camera frame for real-time component &amp; model recognition.
                    </p>
                  </div>
                )}
              </div>

              {/* CAMERA ERROR WARNING (IF ANY) */}
              {cameraError && (
                <div className="flex items-center gap-2 p-3 rounded-xl bg-amber-50 border border-amber-200 text-amber-800 text-xs font-semibold">
                  <AlertCircle className="w-4 h-4 shrink-0 text-amber-600" />
                  <span>{cameraError}</span>
                </div>
              )}

              {/* QUICK DEVICE PRESETS */}
              <div>
                <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-2">
                  Or select device preset
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {deviceCategories.map((cat) => {
                    const isSelected = selectedDeviceType === cat.name;
                    const IconComp = cat.icon;
                    return (
                      <button
                        key={cat.name}
                        type="button"
                        onClick={() => handleSelectDevice(cat.name, cat.defaultVal)}
                        className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                          isSelected
                            ? 'bg-emerald-100 text-[#2d6457] border border-emerald-300 shadow-xs'
                            : 'bg-white/80 text-slate-600 border border-slate-200/80 hover:bg-white hover:text-slate-900'
                        }`}
                      >
                        <IconComp className="w-3.5 h-3.5 text-[#2d6457]" />
                        <span>{cat.name}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* START SCAN BUTTON */}
              <button
                type="button"
                onClick={startScanning}
                className="w-full flex items-center justify-center gap-2 rounded-xl py-3.5 text-sm font-bold text-white transition-all duration-200 hover:scale-[1.01] active:scale-[0.99]"
                style={{
                  background: 'linear-gradient(135deg, #2d6457 0%, #40916c 60%, #52b788 100%)',
                  boxShadow: '0 4px 20px rgba(45, 106, 79, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.25)',
                }}
              >
                <Sparkles className="w-4 h-4 text-emerald-100" />
                <span>Start AI Device Scan</span>
                <ArrowRight className="w-4 h-4" />
              </button>

            </div>
          )}

          {/* ════ STEP 2: ANIMATED SCANNING HUD ════ */}
          {scanStep === 'scanning' && (
            <div className="py-4 space-y-6 text-center">
              {/* SCANNER VIEWPORT */}
              <div
                className="relative mx-auto w-full h-44 rounded-2xl overflow-hidden flex items-center justify-center bg-slate-900"
                style={{
                  border: '1px solid rgba(64, 145, 108, 0.3)',
                  boxShadow: 'inset 0 0 20px rgba(64, 145, 108, 0.2)',
                }}
              >
                {previewImage ? (
                  <img src={previewImage} alt="Device Photo" className="w-full h-full object-contain opacity-70" />
                ) : (
                  <div className="relative z-0 flex flex-col items-center">
                    <div className="w-16 h-24 rounded-2xl border-2 border-emerald-400/40 bg-emerald-950/60 flex items-center justify-center p-2 relative shadow-md">
                      <Smartphone className="w-8 h-8 text-emerald-400 animate-pulse" />
                    </div>
                  </div>
                )}

                {/* Laser scan line */}
                <div
                  className="absolute left-0 right-0 h-1 transition-all duration-100 ease-linear z-10"
                  style={{
                    top: `${progress}%`,
                    background: 'linear-gradient(90deg, transparent, #2d6457, #52b788, transparent)',
                    boxShadow: '0 0 12px #40916c, 0 0 24px #52b788',
                  }}
                />
              </div>

              {/* PROGRESS READOUT */}
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs font-bold text-slate-700">
                  <span className="flex items-center gap-1.5 text-[#2d6457] font-mono">
                    <Zap className="w-3.5 h-3.5 animate-spin" />
                    {aiStatus}
                  </span>
                  <span className="font-mono text-slate-900 font-extrabold">{progress}%</span>
                </div>

                <div className="h-2.5 w-full rounded-full bg-slate-200/80 overflow-hidden">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-[#2d6457] via-[#40916c] to-[#52b788] transition-all duration-150 ease-out"
                    style={{ width: `${progress}%` }}
                  />
                </div>
              </div>
            </div>
          )}

          {/* ════ STEP 3: VALUATION RESULTS VIEW ════ */}
          {scanStep === 'results' && (
            <div className="space-y-5">
              {/* DETECTED DEVICE CARD */}
              <div
                className="rounded-2xl p-4 flex items-center justify-between"
                style={{
                  background: 'rgba(240, 253, 244, 0.85)',
                  border: '1px solid rgba(82, 183, 136, 0.35)',
                  backdropFilter: 'blur(12px)',
                }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-100 border border-emerald-300 flex items-center justify-center text-[#2d6457]">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[9px] font-extrabold uppercase tracking-widest text-[#2d6457]">
                      99.4% AI Match • Grade A
                    </span>
                    <h4 className="text-base font-extrabold text-slate-900 leading-tight">{selectedDeviceType}</h4>
                  </div>
                </div>
                <span className="text-[10px] font-extrabold text-[#2d6457] bg-white border border-emerald-300 px-2.5 py-1 rounded-full shadow-2xs">
                  Verified
                </span>
              </div>

              {/* ESTIMATED VALUE DISPLAY */}
              <div className="text-center py-2">
                <p className="text-xs font-bold uppercase tracking-widest text-slate-400">
                  Instant Buyback Valuation
                </p>
                <p className="mt-1 text-4xl font-extrabold text-slate-900 tracking-tight font-sans">
                  ₹{calculatedValue.toLocaleString()}
                </p>
                <p className="text-[11px] text-[#2d6457] font-semibold mt-1">
                  Includes Gold (Au), Silver (Ag) &amp; Component Reuse Value
                </p>
              </div>

              {/* PRICE LOCK BANNER */}
              {locked ? (
                <div
                  className="rounded-2xl p-4 text-center space-y-1"
                  style={{
                    background: 'rgba(240, 253, 244, 0.9)',
                    border: '1px solid rgba(82, 183, 136, 0.4)',
                  }}
                >
                  <p className="text-sm font-extrabold text-[#2d6457] flex items-center justify-center gap-1.5">
                    <Lock className="w-4 h-4 text-[#2d6457]" />
                    Price Locked for 7 Days!
                  </p>
                  <p className="text-xs text-slate-600 font-medium">
                    Free doorstep pickup scheduled. Confirmation details sent to your registered email.
                  </p>
                </div>
              ) : (
                <div className="flex gap-3">
                  <button
                    type="button"
                    onClick={handleLockPrice}
                    className="flex-1 flex items-center justify-center gap-2 rounded-xl py-3.5 text-sm font-bold text-white transition-all hover:scale-[1.01]"
                    style={{
                      background: 'linear-gradient(135deg, #2d6457 0%, #40916c 60%, #52b788 100%)',
                      boxShadow: '0 4px 20px rgba(45, 106, 79, 0.25)',
                    }}
                  >
                    <Lock className="w-4 h-4 text-emerald-100" />
                    <span>Lock Price &amp; Book</span>
                  </button>

                  <button
                    type="button"
                    onClick={startScanning}
                    className="flex items-center justify-center gap-1.5 rounded-xl px-4 py-3.5 text-xs font-bold text-slate-700 transition-all hover:bg-slate-100"
                    style={{
                      background: 'rgba(255, 255, 255, 0.9)',
                      border: '1px solid rgba(0, 0, 0, 0.1)',
                    }}
                  >
                    <RefreshCw className="w-3.5 h-3.5 text-slate-500" />
                    <span>Rescan</span>
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
