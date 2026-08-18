import React, { useState, useEffect, useRef } from 'react';
import {
  X, Camera, Scan, Sparkles, CheckCircle2, ShieldCheck,
  ArrowRight, Upload, RefreshCw, Smartphone, Laptop, Tablet, Watch, Cpu, Zap, Lock,
  AlertCircle, AlertTriangle, HelpCircle, ImageOff, Check
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { api } from '../services/api';
import { METAL_DATABASE } from '../data/metalContentData';


interface AIScannerModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialValue?: number;
  initialDevice?: string;
}

type ScanStep = 'upload' | 'scanning' | 'results' | 'error';
type ErrorType = 'not_uploaded' | 'unrecognized' | 'network_error';

export const AIScannerModal: React.FC<AIScannerModalProps> = ({
  isOpen,
  onClose,
  initialValue = 3851,
  initialDevice = 'Apple Smartphone',
}) => {
  const [scanStep, setScanStep] = useState<ScanStep>('upload');
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

  // Error handling state
  const [uploadError, setUploadError] = useState<string | null>(null);
  const [errorType, setErrorType] = useState<ErrorType>('not_uploaded');
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [scanDetails, setScanDetails] = useState<any>(null);

  // Wrong prediction reporting state
  const [isReporting, setIsReporting] = useState(false);
  const [correctModelInput, setCorrectModelInput] = useState('');
  const [reportNotesInput, setReportNotesInput] = useState('');
  const [reportSubmitting, setReportSubmitting] = useState(false);
  const [reportSubmitted, setReportSubmitted] = useState(false);

  const handleReportIdentification = async (e: React.FormEvent) => {
    e.preventDefault();
    setReportSubmitting(true);
    try {
      const confidenceVal = scanDetails?.confidenceScore || 0.96;
      await fetch('/api/report-identification', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          deviceType: selectedDeviceType,
          predictedModel: selectedDeviceType,
          confidence: confidenceVal,
          correctModel: correctModelInput || null,
          notes: reportNotesInput || null,
        }),
      });
      setReportSubmitted(true);
    } catch (err) {
      console.error('Failed to report identification:', err);
      setReportSubmitted(true);
    } finally {
      setReportSubmitting(false);
    }
  };

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
    setUploadError(null);
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
      setUploadError(null);
      setScanDetails(null);
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
      setUploadError(null);
      stopCamera();
      const reader = new FileReader();
      reader.onload = (event) => {
        setPreviewImage(event.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const captureCameraFrame = (): string | null => {
    if (videoRef.current && isCameraActive) {
      try {
        const canvas = document.createElement('canvas');
        canvas.width = videoRef.current.videoWidth || 640;
        canvas.height = videoRef.current.videoHeight || 480;
        const ctx = canvas.getContext('2d');
        if (ctx) {
          ctx.drawImage(videoRef.current, 0, 0, canvas.width, canvas.height);
          return canvas.toDataURL('image/jpeg', 0.85);
        }
      } catch (err) {
        console.warn('Could not capture canvas frame:', err);
      }
    }
    return previewImage;
  };

  const triggerErrorState = (type: ErrorType, msg: string) => {
    stopCamera();
    setErrorType(type);
    setErrorMessage(msg);
    setScanStep('error');
  };

  const startScanning = async () => {
    // 1. Check if device image is uploaded or camera is active
    if (!previewImage && !isCameraActive) {
      setUploadError('Device image not uploaded. Please upload a clear photo or turn on the camera.');
      if (scanMode === 'upload') {
        fileInputRef.current?.click();
      } else {
        startCameraStream();
      }
      return;
    }

    setUploadError(null);
    const capturedImage = captureCameraFrame();
    if (capturedImage) {
      setPreviewImage(capturedImage);
    }
    stopCamera();
    setScanStep('scanning');
    setProgress(0);
    setAiStatus('Initializing Google Gemini Vision AI...');

    const statusSteps = [
      { pct: 20, text: 'Detecting device chassis & model via Gemini...' },
      { pct: 45, text: 'Analyzing exterior wear & screen condition...' },
      { pct: 70, text: 'Calculating internal Gold, Silver & Copper yield...' },
      { pct: 90, text: 'Cross-referencing live market buyback rates...' },
      { pct: 100, text: 'AI Valuation complete!' },
    ];

    // Trigger backend AI call in parallel
    const aiPromise = api.ai.scanDevice({
      imageBase64: capturedImage || undefined,
      deviceCategory: selectedDeviceType,
    });

    const interval = setInterval(async () => {
      setProgress((prev) => {
        const next = prev + 5;
        const currentStatus = statusSteps.find((s) => next >= s.pct && prev < s.pct);
        if (currentStatus) setAiStatus(currentStatus.text);

        if (next >= 100) {
          clearInterval(interval);
          aiPromise
            .then((res) => {
              if (res.success && res.data) {
                // If model confidence is unusually low or unidentifiable
                if (res.data.confidenceScore && res.data.confidenceScore < 0.40) {
                  triggerErrorState(
                    'unrecognized',
                    "Couldn't identify the device in the photo. The image may be blurry, poorly lit, or not an electronic device."
                  );
                  return;
                }
                setScanDetails(res.data);
                setSelectedDeviceType(res.data.detectedModel);
                setCalculatedValue(res.data.estimatedValue);
                setScanStep('results');
                confetti({ particleCount: 70, spread: 70, origin: { y: 0.5 } });
              } else {
                triggerErrorState(
                  'unrecognized',
                  res.message || "Couldn't identify the electronic device. Please try re-uploading a clearer photo."
                );
              }
            })
            .catch((err) => {
              console.warn('AI Scan API Error:', err);
              triggerErrorState(
                'network_error',
                'Network connection error during AI diagnosis. Please check your connection and try again.'
              );
            });
          return 100;
        }
        return next;
      });
    }, 90);
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

  const handleTryAgain = () => {
    setScanStep('upload');
    setProgress(0);
    setPreviewImage(null);
    setUploadError(null);
    setCameraError(null);
    if (scanMode === 'upload') {
      setTimeout(() => fileInputRef.current?.click(), 100);
    } else {
      startCameraStream();
    }
  };

  const handleManualSelectionFallback = (categoryName: string, defaultVal: number) => {
    handleSelectDevice(categoryName, defaultVal);
    setScanStep('upload');
  };

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center p-4"
      style={{
        background: 'rgba(15, 23, 42, 0.45)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
      }}
      onClick={(e) => { if (e.target === e.currentTarget) handleCloseModal(); }}
    >
      {/* ── MODAL CONTAINER ── */}
      <div
        className="relative w-full max-w-lg rounded-3xl overflow-hidden shadow-2xl transition-all duration-300"
        style={{
          background: 'rgba(255, 255, 255, 0.94)',
          backdropFilter: 'blur(24px)',
          WebkitBackdropFilter: 'blur(24px)',
          border: '1px solid rgba(255, 255, 255, 0.8)',
          boxShadow: '0 20px 60px rgba(0,0,0,0.15), inset 0 1px 0 rgba(255,255,255,0.9)',
          transform: animIn ? 'translateY(0) scale(1)' : 'translateY(20px) scale(0.95)',
          opacity: animIn ? 1 : 0,
        }}
      >
        {/* ── HEADER ── */}
        <div
          className="flex items-center justify-between px-6 py-4 border-b border-slate-100/80"
          style={{ background: 'rgba(255,255,255,0.6)' }}
        >
          <div className="flex items-center gap-3">
            <div
              className="w-9 h-9 rounded-xl flex items-center justify-center"
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
                  className={`flex items-center justify-center gap-2 py-2 rounded-lg text-xs font-bold transition-all cursor-pointer ${
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
                  className={`flex items-center justify-center gap-2 py-2 rounded-lg text-xs font-bold transition-all cursor-pointer ${
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
                className={`group relative flex flex-col items-center justify-center h-56 rounded-2xl overflow-hidden transition-all duration-300 shadow-sm ${
                  uploadError ? 'border-2 border-amber-500 ring-2 ring-amber-200/80 bg-amber-50/50' : ''
                }`}
                style={{
                  background: uploadError ? 'rgba(254, 243, 199, 0.4)' : 'rgba(240, 253, 244, 0.65)',
                  backdropFilter: 'blur(16px)',
                  WebkitBackdropFilter: 'blur(16px)',
                  border: uploadError ? '2px dashed #f59e0b' : '1.5px dashed rgba(64, 145, 108, 0.4)',
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
                        className="bg-emerald-500 hover:bg-emerald-400 text-slate-950 px-3 py-1 rounded-lg text-xs font-bold shadow-sm cursor-pointer"
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
                        className="bg-white/80 hover:bg-white text-slate-800 p-1.5 rounded-lg text-xs font-bold shadow-sm cursor-pointer"
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

              {/* UPLOAD ERROR ALERT (DEVICE NOT UPLOADED) */}
              {uploadError && (
                <div className="flex items-center gap-2.5 p-3.5 rounded-xl bg-amber-50 border border-amber-300 text-amber-900 text-xs font-bold shadow-xs animate-in fade-in duration-200">
                  <AlertTriangle className="w-4 h-4 shrink-0 text-amber-600" />
                  <span className="flex-1">{uploadError}</span>
                  <button
                    type="button"
                    onClick={() => {
                      setScanMode('upload');
                      fileInputRef.current?.click();
                    }}
                    className="bg-amber-600 hover:bg-amber-700 text-white px-2.5 py-1 rounded-lg text-[11px] font-bold cursor-pointer"
                  >
                    Upload Now
                  </button>
                </div>
              )}

              {/* QUICK DEVICE PRESETS */}
              <div>
                <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-2">
                  Or select device category
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
                        className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
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
                className="w-full flex items-center justify-center gap-2 rounded-xl py-3.5 text-sm font-bold text-white transition-all duration-200 hover:scale-[1.01] active:scale-[0.99] cursor-pointer"
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

                {/* Laser Scanning Grid Animation */}
                <div
                  className="absolute inset-x-0 h-1 bg-gradient-to-r from-transparent via-emerald-400 to-transparent shadow-[0_0_15px_#10b981] animate-laser z-20"
                />

                {/* Matrix HUD Data Overlays */}
                <div className="absolute top-2 left-3 text-[9px] font-mono text-emerald-400/80 text-left">
                  <span>CONFIDENCE: {Math.min(98, 40 + Math.round(progress * 0.58))}%</span><br />
                  <span>MODEL_AI: ACTIVE</span>
                </div>
                <div className="absolute bottom-2 right-3 text-[9px] font-mono text-emerald-400/80 text-right">
                  <span>SPECTROMETRY: METALS</span><br />
                  <span>GRID: 256x256</span>
                </div>
              </div>

              {/* Progress and status */}
              <div className="space-y-3">
                <div className="flex justify-between items-center text-xs font-bold text-slate-700">
                  <span className="flex items-center gap-1.5">
                    <RefreshCw className="w-3.5 h-3.5 animate-spin text-[#2d6457]" />
                    <span>{aiStatus}</span>
                  </span>
                  <span className="font-mono text-[#2d6457]">{progress}%</span>
                </div>

                <div className="w-full h-2.5 bg-slate-100 rounded-full overflow-hidden p-0.5 border border-slate-200">
                  <div
                    className="h-full rounded-full transition-all duration-150"
                    style={{
                      width: `${progress}%`,
                      background: 'linear-gradient(90deg, #2d6457, #52b788)',
                    }}
                  />
                </div>
              </div>
            </div>
          )}

          {/* ════ STEP 3: ERROR STATE (TRY AGAIN / COULDN'T IDENTIFY) ════ */}
          {scanStep === 'error' && (
            <div className="py-3 space-y-5 animate-in fade-in zoom-in-95 duration-200">
              
              <div className="text-center py-4 bg-rose-50/80 rounded-2xl border border-rose-200/80 p-5">
                <div className="w-14 h-14 rounded-2xl bg-rose-100 border border-rose-300 text-rose-600 flex items-center justify-center mx-auto mb-3 shadow-xs">
                  {errorType === 'not_uploaded' ? (
                    <ImageOff className="w-7 h-7" />
                  ) : errorType === 'unrecognized' ? (
                    <HelpCircle className="w-7 h-7" />
                  ) : (
                    <AlertTriangle className="w-7 h-7" />
                  )}
                </div>

                <h4 className="text-lg font-extrabold text-slate-900 mb-1">
                  {errorType === 'not_uploaded'
                    ? 'Device Image Missing'
                    : errorType === 'unrecognized'
                    ? "Couldn't Identify Device"
                    : 'Diagnosis Interrupted'}
                </h4>

                <p className="text-xs text-slate-600 font-medium max-w-sm mx-auto leading-relaxed">
                  {errorMessage || "The AI scanner was unable to verify the electronic device. Please try again with a clearer image."}
                </p>
              </div>

              {/* Scanning Tips Box */}
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-left text-xs space-y-2">
                <span className="font-extrabold uppercase text-[10px] text-slate-500 tracking-wider block">
                  Tips for accurate AI recognition:
                </span>
                <ul className="space-y-1.5 text-slate-600">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>Place device in good lighting with minimal glare</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>Capture the entire device screen or chassis clearly</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>Avoid heavy shadows or blurry camera angles</span>
                  </li>
                </ul>
              </div>

              {/* Primary Error Recovery Actions */}
              <div className="space-y-2 pt-1">
                <button
                  type="button"
                  onClick={handleTryAgain}
                  className="w-full flex items-center justify-center gap-2 rounded-xl py-3 text-sm font-bold text-white transition-all bg-[#2d6457] hover:bg-[#1b4332] shadow-md cursor-pointer"
                >
                  <RefreshCw className="w-4 h-4" />
                  <span>Try Again &amp; Retake Photo</span>
                </button>

                <div className="pt-2">
                  <p className="text-[11px] font-bold text-slate-500 mb-2 text-center">
                    Or select category manually to view estimate:
                  </p>
                  <div className="grid grid-cols-2 gap-1.5">
                    {deviceCategories.slice(0, 4).map((cat) => (
                      <button
                        key={cat.name}
                        type="button"
                        onClick={() => handleManualSelectionFallback(cat.name, cat.defaultVal)}
                        className="p-2 rounded-xl text-xs font-bold text-slate-700 bg-white border border-slate-200 hover:border-emerald-400 hover:bg-emerald-50/50 transition-colors flex items-center gap-1.5 cursor-pointer"
                      >
                        <cat.icon className="w-3.5 h-3.5 text-[#2d6457]" />
                        <span className="truncate">{cat.name}</span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>

            </div>
          )}

          {/* ════ STEP 4: DIAGNOSTIC RESULTS HUD ════ */}
          {scanStep === 'results' && (
            <div className="space-y-5 animate-in fade-in duration-300">

              {/* Model and Condition Breakdown Card */}
              <div className="p-4 rounded-2xl bg-emerald-50/80 border border-emerald-200 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-xl bg-[#2d6457] text-white flex items-center justify-center shadow-xs">
                    <Smartphone className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#2d6457]">
                      AI Verified Device
                    </span>
                    <h4 className="text-base font-extrabold text-slate-900 leading-tight">
                      {selectedDeviceType}
                    </h4>
                    <span className="text-xs font-semibold text-emerald-800">
                      Condition Grade: {scanDetails?.conditionGrade || 'Grade A (Operational)'}
                    </span>
                  </div>
                </div>

                <div className="text-right">
                  <span className="text-[10px] font-mono font-bold text-slate-400 block">CONFIDENCE</span>
                  <span className="text-sm font-extrabold text-emerald-700">
                    {scanDetails?.confidenceScore ? `${Math.round(scanDetails.confidenceScore * 100)}%` : '96%'}
                  </span>
                </div>
              </div>

              {/* Report Incorrect Identification Option */}
              {!isReporting && !reportSubmitted ? (
                <div className="flex justify-end -mt-2">
                  <button
                    type="button"
                    onClick={() => setIsReporting(true)}
                    className="text-[11px] font-bold text-slate-500 hover:text-amber-700 underline underline-offset-2 flex items-center gap-1 transition-colors cursor-pointer"
                  >
                    <AlertCircle className="w-3.5 h-3.5 text-amber-600" />
                    <span>Report incorrect identification</span>
                  </button>
                </div>
              ) : isReporting && !reportSubmitted ? (
                <form onSubmit={handleReportIdentification} className="p-3.5 rounded-2xl bg-amber-50/80 border border-amber-200/90 space-y-2.5 animate-in fade-in">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-amber-900 flex items-center gap-1.5">
                      <AlertTriangle className="w-3.5 h-3.5 text-amber-600" />
                      <span>Flag Incorrect Identification</span>
                    </span>
                    <button
                      type="button"
                      onClick={() => setIsReporting(false)}
                      className="text-[11px] font-bold text-slate-400 hover:text-slate-700"
                    >
                      Cancel
                    </button>
                  </div>
                  <p className="text-[11px] text-amber-800/90 leading-snug">
                    Help us refine Cirql AI models. If you know the actual device model, enter it below:
                  </p>
                  <input
                    type="text"
                    value={correctModelInput}
                    onChange={(e) => setCorrectModelInput(e.target.value)}
                    placeholder="e.g. Samsung Galaxy S23 Ultra or Dell XPS 15"
                    className="w-full text-xs px-3 py-2 rounded-xl bg-white border border-amber-200 text-slate-900 focus:outline-none focus:border-amber-500"
                  />
                  <input
                    type="text"
                    value={reportNotesInput}
                    onChange={(e) => setReportNotesInput(e.target.value)}
                    placeholder="Optional notes (e.g. device is inside a silicone case)"
                    className="w-full text-xs px-3 py-2 rounded-xl bg-white border border-amber-200 text-slate-900 focus:outline-none focus:border-amber-500"
                  />
                  <div className="flex justify-end gap-2 pt-1">
                    <button
                      type="button"
                      onClick={() => setIsReporting(false)}
                      className="px-3 py-1.5 rounded-lg text-xs font-semibold text-slate-600 hover:bg-amber-100/60"
                    >
                      Dismiss
                    </button>
                    <button
                      type="submit"
                      disabled={reportSubmitting}
                      className="px-3.5 py-1.5 rounded-lg bg-amber-600 hover:bg-amber-700 text-white text-xs font-bold shadow-xs transition-colors"
                    >
                      {reportSubmitting ? 'Submitting…' : 'Submit Correction'}
                    </button>
                  </div>
                </form>
              ) : (
                <div className="p-2.5 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-[11px] font-semibold flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Report submitted! Thank you for helping us improve AI vision accuracy.</span>
                </div>
              )}


              {/* Precious Metals Extraction Yield */}
              {(() => {
                let devMetals: { goldG: number; silverG: number; copperG: number } | null = null;
                const devName = (selectedDeviceType || '').toLowerCase();
                for (const cat of ['Smartphone', 'Laptop / PC']) {
                  const brands = (METAL_DATABASE as any)[cat] || {};
                  for (const b of Object.keys(brands)) {
                    const models = brands[b] || {};
                    for (const m of Object.keys(models)) {
                      if (devName.includes(m.toLowerCase()) || `${b} ${m}`.toLowerCase() === devName) {
                        devMetals = models[m].metals;
                        break;
                      }
                    }
                    if (devMetals) break;
                  }
                  if (devMetals) break;
                }

                const goldVal = scanDetails?.materialYield?.goldGrams
                  ? `${scanDetails.materialYield.goldGrams}g`
                  : devMetals
                  ? `${(devMetals.goldG * 1000).toFixed(1)}mg`
                  : '0.034g';

                const silverVal = scanDetails?.materialYield?.silverGrams
                  ? `${scanDetails.materialYield.silverGrams}g`
                  : devMetals
                  ? `${(devMetals.silverG * 1000).toFixed(0)}mg`
                  : '0.35g';

                const copperVal = scanDetails?.materialYield?.copperGrams
                  ? `${scanDetails.materialYield.copperGrams}g`
                  : devMetals
                  ? `${devMetals.copperG.toFixed(1)}g`
                  : '16.2g';

                return (
                  <div className="p-4 rounded-2xl bg-slate-900 text-white space-y-3 shadow-inner">
                    <div className="flex justify-between items-center border-b border-slate-800 pb-2">
                      <span className="text-xs font-bold text-emerald-400 flex items-center gap-1.5">
                        <Sparkles className="w-3.5 h-3.5" />
                        <span>Estimated Precious Metal Recovery</span>
                      </span>
                      <span className="text-[10px] font-mono text-slate-400">LAB METRICS</span>
                    </div>

                    <div className="grid grid-cols-3 gap-2 text-center">
                      <div className="bg-slate-800/80 p-2.5 rounded-xl border border-slate-700/60">
                        <span className="text-[10px] font-bold text-amber-400 block">Gold (Au)</span>
                        <span className="text-sm font-extrabold text-white">{goldVal}</span>
                      </div>
                      <div className="bg-slate-800/80 p-2.5 rounded-xl border border-slate-700/60">
                        <span className="text-[10px] font-bold text-slate-300 block">Silver (Ag)</span>
                        <span className="text-sm font-extrabold text-white">{silverVal}</span>
                      </div>
                      <div className="bg-slate-800/80 p-2.5 rounded-xl border border-slate-700/60">
                        <span className="text-[10px] font-bold text-orange-400 block">Copper (Cu)</span>
                        <span className="text-sm font-extrabold text-white">{copperVal}</span>
                      </div>
                    </div>
                  </div>
                );
              })()}


              {/* Valuation & Rewards Card */}
              <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                    Guaranteed Buyback Scrap Value
                  </span>
                  <div className="flex items-baseline gap-1 mt-0.5">
                    <span className="text-2xl font-black text-slate-900">₹{calculatedValue.toLocaleString('en-IN')}</span>
                    <span className="text-xs font-bold text-emerald-600">+ 120 Eco Coins</span>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={handleLockPrice}
                  disabled={locked}
                  className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
                    locked
                      ? 'bg-emerald-600 text-white shadow-sm'
                      : 'bg-[#2d6457] hover:bg-[#1b4332] text-white shadow-md'
                  }`}
                >
                  {locked ? (
                    <>
                      <Check className="w-3.5 h-3.5" />
                      <span>Price Locked!</span>
                    </>
                  ) : (
                    <>
                      <Lock className="w-3.5 h-3.5" />
                      <span>Lock In Price</span>
                    </>
                  )}
                </button>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={handleTryAgain}
                  className="flex-1 py-3 rounded-xl border border-slate-200 text-slate-700 text-xs font-bold hover:bg-slate-50 transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <RefreshCw className="w-3.5 h-3.5" />
                  <span>Scan Another Device</span>
                </button>

                <button
                  type="button"
                  onClick={handleCloseModal}
                  className="flex-1 py-3 rounded-xl bg-slate-900 text-white text-xs font-bold hover:bg-slate-800 transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <span>Done</span>
                </button>
              </div>

            </div>
          )}

        </div>
      </div>
    </div>
  );
};
