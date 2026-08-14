import React, { useState } from 'react';
import { Building2, ShieldCheck, FileCheck, BarChart3, ArrowRight, CheckCircle2 } from 'lucide-react';

export const Corporate: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    companyName: '',
    email: '',
    quantity: '50-200 devices',
    phone: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.companyName || !formData.email) return;
    setSubmitted(true);
  };

  return (
    <section id="corporate" className="py-24 bg-[#1d433a] text-white relative overflow-hidden">
      {/* Subtle Background Glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* LEFT COLUMN: INFORMATION & FEATURE CARDS (7 COLS) */}
          <div className="lg:col-span-7 space-y-8">
            <div>
              <div className="inline-flex items-center gap-2 bg-emerald-950 border border-emerald-500/40 px-4 py-1.5 rounded-full mb-4 shadow-2xs">
                <Building2 className="w-3.5 h-3.5 text-emerald-400" />
                <span className="text-xs font-bold text-emerald-300 tracking-wider uppercase font-mono">
                  ENTERPRISE IT ASSET DISPOSAL
                </span>
              </div>

              <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-4 font-sans leading-tight bg-gradient-to-r from-white via-emerald-100 to-emerald-300 bg-clip-text text-transparent">
                Corporate E-Waste &amp; ESG Compliance Solutions
              </h2>

              <p className="text-lg text-emerald-200/80 font-medium max-w-2xl leading-relaxed">
                Decommission corporate laptops, servers, and network equipment with secure data sanitization and responsible recycling.
              </p>
            </div>

            {/* FEATURE CARDS */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
              <div className="bg-emerald-950/60 p-5 rounded-2xl border border-emerald-500/20">
                <ShieldCheck className="w-7 h-7 text-emerald-400 mb-3" />
                <h4 className="font-bold text-base text-white mb-1">Secure Data Wiping</h4>
                <p className="text-xs text-emerald-200/70">NIST 800-88 &amp; DoD 5220.22-M certified data destruction certificates.</p>
              </div>

              <div className="bg-emerald-950/60 p-5 rounded-2xl border border-emerald-500/20">
                <FileCheck className="w-7 h-7 text-emerald-400 mb-3" />
                <h4 className="font-bold text-base text-white mb-1">ISO 14001 &amp; R2</h4>
                <p className="text-xs text-emerald-200/70">Certified zero-landfill processing and hazardous waste compliance.</p>
              </div>

              <div className="bg-emerald-950/60 p-5 rounded-2xl border border-emerald-500/20">
                <BarChart3 className="w-7 h-7 text-emerald-400 mb-3" />
                <h4 className="font-bold text-base text-white mb-1">Scope 3 Carbon Audits</h4>
                <p className="text-xs text-emerald-200/70">Audit-ready ESG carbon footprint reduction reports for board disclosure.</p>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: CORPORATE QUOTE FORM (5 COLS) */}
          <div className="lg:col-span-5 bg-white text-slate-900 rounded-3xl p-6 sm:p-8 shadow-2xl border border-emerald-100 relative">
            <h3 className="text-2xl font-extrabold text-slate-900 mb-2">
              Request Corporate Bulk Pickup Quote
            </h3>
            <p className="text-xs text-slate-500 mb-6">
              Connect with our Enterprise ITAD team for customized SLA quotes and secure logistics.
            </p>

            {submitted ? (
              <div className="py-8 text-center bg-emerald-50 rounded-2xl p-6 border border-emerald-200 animate-in fade-in">
                <div className="w-14 h-14 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto mb-3">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-2">Consultation Requested!</h4>
                <p className="text-xs text-slate-600">
                  Our enterprise sustainability officer will reach out to <span className="font-bold text-slate-800">{formData.email}</span> within 2 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Company Name</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Acme Corporation"
                    value={formData.companyName}
                    onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-700"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Corporate Email</label>
                  <input
                    type="email"
                    required
                    placeholder="name@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-700"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Est. Device Volume</label>
                    <select
                      value={formData.quantity}
                      onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-700"
                    >
                      <option value="10-50 devices">10 - 50 units</option>
                      <option value="50-200 devices">50 - 200 units</option>
                      <option value="200+ devices">200+ units</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Phone Number</label>
                    <input
                      type="tel"
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-700"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#2d6457] hover:bg-[#234d40] text-white font-bold text-sm py-4 px-6 rounded-xl shadow-md hover:scale-[1.01] transition-all flex items-center justify-center gap-2 group mt-2"
                >
                  <span>Schedule Enterprise Consultation</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};
