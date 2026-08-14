import React, { useState } from 'react';
import { X, Calendar, Clock, MapPin, CheckCircle2, ShieldCheck, ArrowRight } from 'lucide-react';
import { Recycler } from '../types';

interface BookingModalProps {
  recycler: Recycler | null;
  onClose: () => void;
}

export const BookingModal: React.FC<BookingModalProps> = ({ recycler, onClose }) => {
  const [date, setDate] = useState('2026-08-14');
  const [timeSlot, setTimeSlot] = useState('10:00 AM - 12:00 PM');
  const [deviceType, setDeviceType] = useState('Smartphone');
  const [booked, setBooked] = useState(false);

  if (!recycler) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setBooked(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl max-w-lg w-full border border-slate-200 shadow-2xl overflow-hidden relative">
        
        {/* Header */}
        <div className="bg-[#2a5247] text-white p-6 relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-emerald-300 hover:text-white p-1 rounded-lg bg-emerald-900/50"
          >
            <X className="w-5 h-5" />
          </button>
          <span className="text-[10px] font-mono font-bold text-emerald-300 bg-emerald-950 px-2.5 py-0.5 rounded uppercase border border-emerald-700">
            {recycler.type}
          </span>
          <h3 className="text-xl font-bold text-white mt-1">{recycler.name}</h3>
          <p className="text-xs text-emerald-200/80">{recycler.address}</p>
        </div>

        {/* Body */}
        <div className="p-6 sm:p-8">
          {booked ? (
            <div className="py-8 text-center space-y-3">
              <div className="w-14 h-14 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-bold text-slate-900">Drop-off Slot Confirmed!</h4>
              <p className="text-xs text-slate-600 max-w-xs mx-auto">
                Your QR express pass for <span className="font-bold text-slate-800">{recycler.name}</span> on <span className="font-bold text-slate-800">{date} ({timeSlot})</span> has been generated and sent to your phone.
              </p>
              <button
                onClick={onClose}
                className="mt-4 bg-[#234d40] text-white font-bold text-xs py-2.5 px-6 rounded-xl"
              >
                Close &amp; View Pass
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase mb-1">E-Waste Item Category</label>
                <select
                  value={deviceType}
                  onChange={(e) => setDeviceType(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-700 font-semibold"
                >
                  <option value="Smartphone">Smartphone / Mobile Phone</option>
                  <option value="Laptop">Laptop / Desktop Computer</option>
                  <option value="Tablet">Tablet / iPad</option>
                  <option value="Circuit Board">PCB / Circuit Board Bulk</option>
                  <option value="Accessories">Batteries / Cables / Accessories</option>
                </select>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Select Date</label>
                  <input
                    type="date"
                    required
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-700 font-semibold"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Select Time Slot</label>
                  <select
                    value={timeSlot}
                    onChange={(e) => setTimeSlot(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-700 font-semibold"
                  >
                    <option value="10:00 AM - 12:00 PM">10:00 AM - 12:00 PM</option>
                    <option value="02:00 PM - 04:00 PM">02:00 PM - 04:00 PM</option>
                    <option value="05:00 PM - 07:00 PM">05:00 PM - 07:00 PM</option>
                  </select>
                </div>
              </div>

              <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-xl text-xs text-emerald-900 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-700 shrink-0" />
                <span>Instant QR check-in &amp; priority valuation upon arrival.</span>
              </div>

              <button
                type="submit"
                className="w-full bg-[#2d6457] hover:bg-[#234d40] text-white font-bold text-sm py-3.5 px-6 rounded-xl shadow-md transition-all flex items-center justify-center gap-2"
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
