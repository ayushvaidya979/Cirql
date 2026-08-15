import React, { useState, useEffect } from 'react';
import {
  X, Calendar, Clock, MapPin, CheckCircle2, ShieldCheck, ArrowRight,
  QrCode, Sparkles, Building2, Phone, Mail, PackageCheck, Copy, Check
} from 'lucide-react';
import { Recycler } from '../types';

interface BookingModalProps {
  isOpen: boolean;
  recycler: Recycler | null;
  onClose: () => void;
}

export const BookingModal: React.FC<BookingModalProps> = ({ isOpen, recycler, onClose }) => {
  const [date, setDate] = useState('2026-08-15');
  const [timeSlot, setTimeSlot] = useState('10:00 AM - 12:00 PM');
  const [deviceType, setDeviceType] = useState('Smartphone');
  const [booked, setBooked] = useState(false);
  const [animIn, setAnimIn] = useState(false);
  const [copiedPass, setCopiedPass] = useState(false);

  // Reset booking state and animate in when modal opens
  useEffect(() => {
    if (isOpen && recycler) {
      setBooked(false);
      setAnimIn(true);
    } else {
      setAnimIn(false);
    }
  }, [isOpen, recycler]);

  // Handle ESC key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        handleClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  if (!isOpen || !recycler) return null;

  const handleClose = () => {
    setAnimIn(false);
    setTimeout(() => {
      setBooked(false);
      onClose();
    }, 150);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setBooked(true);
  };

  const passCode = `CQ-${recycler.id}-${Math.floor(1000 + Math.random() * 9000)}`;

  const handleCopyPass = () => {
    navigator.clipboard.writeText(passCode);
    setCopiedPass(true);
    setTimeout(() => setCopiedPass(false), 2000);
  };

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
      style={{
        background: 'rgba(9, 20, 16, 0.72)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        opacity: animIn ? 1 : 0,
        transition: 'opacity 0.2s ease-in-out',
      }}
      onClick={(e) => {
        if (e.target === e.currentTarget) handleClose();
      }}
    >
      {/* ── MODAL CONTAINER ── */}
      <div
        className="bg-white rounded-3xl max-w-lg w-full border border-slate-200/80 shadow-2xl overflow-hidden relative transform transition-all duration-300"
        style={{
          transform: animIn ? 'scale(1) translateY(0)' : 'scale(0.95) translateY(12px)',
        }}
      >

        {/* ── HEADER ── */}
        <div className="bg-gradient-to-r from-[#1b4332] via-[#2d6457] to-[#40916c] text-white p-6 relative">
          <button
            onClick={handleClose}
            aria-label="Close modal"
            className="absolute top-4 right-4 text-white/80 hover:text-white p-2 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md transition-all"
          >
            <X className="w-4 h-4" />
          </button>
          
          <div className="flex items-center gap-2 mb-2 flex-wrap">
            <span className="font-mono text-[10px] font-extrabold px-2 py-0.5 rounded bg-black/40 text-emerald-300 border border-emerald-400/30">
              ID: {recycler.id}
            </span>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-white/15 border border-white/25 text-[10px] font-mono font-bold text-emerald-100 uppercase backdrop-blur-sm">
              <Building2 className="w-3 h-3" />
              <span>{recycler.type}</span>
            </div>
            {recycler.capacity && (
              <span className="text-[10px] font-mono text-emerald-200 bg-white/10 px-2 py-0.5 rounded">
                Cap: {recycler.capacity}
              </span>
            )}
          </div>
          
          <h3 className="text-xl sm:text-2xl font-extrabold text-white leading-tight">{recycler.name}</h3>
          
          <p className="text-xs text-emerald-100/90 flex items-center gap-1 mt-1 font-medium">
            <MapPin className="w-3.5 h-3.5 shrink-0 text-emerald-300" />
            <span className="truncate">{recycler.address}</span>
          </p>

          {(recycler.phone || recycler.email) && (
            <div className="flex items-center gap-4 mt-2 text-[11px] text-emerald-200/90 font-medium">
              {recycler.phone && (
                <span className="flex items-center gap-1">
                  <Phone className="w-3 h-3 text-emerald-300" /> {recycler.phone}
                </span>
              )}
              {recycler.email && (
                <span className="flex items-center gap-1 truncate">
                  <Mail className="w-3 h-3 text-emerald-300" /> {recycler.email}
                </span>
              )}
            </div>
          )}
        </div>

        {/* ── BODY ── */}
        <div className="p-6 sm:p-8 bg-[#f8faf7]">
          {booked ? (
            /* ── CONFIRMATION PASSCARD STATE ── */
            <div className="py-4 text-center space-y-5 animate-in fade-in zoom-in-95 duration-300">
              <div className="relative inline-block">
                <div className="w-20 h-20 bg-emerald-100/80 text-[#2d6457] rounded-3xl flex items-center justify-center mx-auto shadow-inner border border-emerald-200">
                  <CheckCircle2 className="w-10 h-10 text-[#2d6457]" />
                </div>
                <div className="absolute -bottom-1 -right-1 bg-emerald-600 text-white rounded-full p-1 shadow-md">
                  <Sparkles className="w-4 h-4" />
                </div>
              </div>

              <div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-700 bg-emerald-100/80 px-3 py-1 rounded-full border border-emerald-200">
                  Drop-off Scheduled
                </span>
                <h4 className="text-2xl font-extrabold text-slate-900 mt-2">Facility Access Pass</h4>
                <p className="text-xs text-slate-600 max-w-xs mx-auto mt-1 font-medium leading-relaxed">
                  Present this digital QR pass at <span className="font-bold text-slate-800">{recycler.name}</span>.
                </p>
              </div>

              {/* QR Code Graphic Box */}
              <div className="bg-white p-4 rounded-2xl border border-slate-200/90 shadow-md inline-block max-w-[240px] mx-auto">
                <div className="w-44 h-44 bg-slate-900 rounded-xl p-3 flex flex-col items-center justify-center relative overflow-hidden group">
                  <QrCode className="w-full h-full text-white" />
                  <div className="absolute inset-0 bg-emerald-500/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[1px]">
                    <span className="text-[9px] font-mono text-white bg-slate-900/90 px-2 py-1 rounded border border-emerald-400">
                      SCAN AT FACILITY GATE
                    </span>
                  </div>
                </div>
                <div className="mt-2.5 flex items-center justify-center gap-1.5">
                  <span className="text-[11px] font-mono font-bold text-slate-700 tracking-wider">
                    {passCode}
                  </span>
                  <button
                    onClick={handleCopyPass}
                    className="p-1 text-slate-400 hover:text-emerald-700 transition-colors"
                    title="Copy Pass ID"
                  >
                    {copiedPass ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                </div>
              </div>

              {/* Summary Details */}
              <div className="bg-emerald-50/80 border border-emerald-200/80 rounded-2xl p-3.5 text-left text-xs space-y-1.5">
                <div className="flex items-center justify-between text-slate-700">
                  <span className="text-slate-500 font-medium">Facility:</span>
                  <span className="font-bold text-emerald-900 truncate max-w-[200px]">{recycler.name}</span>
                </div>
                <div className="flex items-center justify-between text-slate-700">
                  <span className="text-slate-500 font-medium">E-Waste Category:</span>
                  <span className="font-bold text-emerald-900">{deviceType}</span>
                </div>
                <div className="flex items-center justify-between text-slate-700">
                  <span className="text-slate-500 font-medium">Date &amp; Slot:</span>
                  <span className="font-bold text-emerald-900">{date} • {timeSlot}</span>
                </div>
                {recycler.phone && (
                  <div className="flex items-center justify-between text-slate-700 pt-1 border-t border-emerald-200/60">
                    <span className="text-slate-500 font-medium">Helpline Contact:</span>
                    <a href={`tel:${recycler.phone}`} className="font-bold text-emerald-800 hover:underline">{recycler.phone}</a>
                  </div>
                )}
              </div>

              <div className="pt-2 flex gap-3">
                <button
                  type="button"
                  onClick={handleClose}
                  className="w-full bg-[#1b4332] hover:bg-[#112a1f] text-white font-bold text-sm py-3.5 px-6 rounded-xl shadow-lg transition-all flex items-center justify-center gap-2"
                >
                  <PackageCheck className="w-4 h-4" />
                  <span>Done &amp; Close</span>
                </button>
              </div>
            </div>
          ) : (
            /* ── BOOKING FORM STATE ── */
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase mb-1.5 tracking-wider">
                  E-Waste Item Category
                </label>
                <select
                  value={deviceType}
                  onChange={(e) => setDeviceType(e.target.value)}
                  className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-700 font-semibold text-slate-800 shadow-2xs"
                >
                  <option value="Smartphones & Mobile Devices">Smartphones &amp; Mobile Devices</option>
                  <option value="Laptops & Computers">Laptops, Desktops &amp; Workstations</option>
                  <option value="PCBs & Motherboards">PCBs &amp; Electronic Circuit Boards</option>
                  <option value="Batteries & Power Units">Lithium-ion Batteries &amp; Power Units</option>
                  <option value="Servers & Telecom Gear">Servers &amp; Enterprise Telecom Gear</option>
                  <option value="Monitors & Displays">Monitors, TVs &amp; Display Panels</option>
                  <option value="Bulk Industrial Electronics">Bulk Industrial E-Waste</option>
                </select>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1.5 tracking-wider flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-emerald-700" />
                    <span>Select Date</span>
                  </label>
                  <input
                    type="date"
                    required
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full bg-white border border-slate-200 rounded-xl px-3.5 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-700 font-semibold text-slate-800 shadow-2xs"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1.5 tracking-wider flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-emerald-700" />
                    <span>Select Time Slot</span>
                  </label>
                  <select
                    value={timeSlot}
                    onChange={(e) => setTimeSlot(e.target.value)}
                    className="w-full bg-white border border-slate-200 rounded-xl px-3.5 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-700 font-semibold text-slate-800 shadow-2xs"
                  >
                    <option value="10:00 AM - 12:00 PM">10:00 AM - 12:00 PM</option>
                    <option value="02:00 PM - 04:00 PM">02:00 PM - 04:00 PM</option>
                    <option value="05:00 PM - 07:00 PM">05:00 PM - 07:00 PM</option>
                  </select>
                </div>
              </div>

              <div className="p-3.5 bg-emerald-50/90 border border-emerald-200/90 rounded-2xl text-xs text-emerald-900 flex items-center gap-2.5 shadow-2xs">
                <ShieldCheck className="w-5 h-5 text-emerald-700 shrink-0" />
                <span className="font-medium leading-snug">
                  Official SPCB/CPCB compliant processing with Green Certificate upon completion.
                </span>
              </div>

              <button
                type="submit"
                className="w-full bg-[#1b4332] hover:bg-[#112a1f] text-white font-bold text-sm py-3.5 px-6 rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 hover:scale-[1.01] active:scale-[0.99]"
              >
                <span>Confirm Drop-off Reservation</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          )}
        </div>

      </div>
    </div>
  );
};
