import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, MessageSquare } from 'lucide-react';

export const Contact: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'General Inquiry',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 bg-[#f8faf7] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* LEFT SIDE DETAILS (5 COLS) */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <div className="inline-flex items-center gap-2 bg-emerald-100/70 border border-emerald-300/60 px-4 py-1.5 rounded-full mb-4 shadow-2xs">
                <MessageSquare className="w-3.5 h-3.5 text-emerald-800" />
                <span className="text-xs font-bold text-emerald-900 tracking-wide uppercase">
                  GET IN TOUCH
                </span>
              </div>

              <h2 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight mb-4 font-sans leading-tight">
                We're Here to Help You Recycle Safely
              </h2>

              <p className="text-lg text-slate-600 font-medium">
                Have questions about e-waste pickup, recycling, or corporate partnerships? Reach out to our team.
              </p>
            </div>

            {/* CONTACT DETAILS CARDS */}
            <div className="space-y-4 pt-2">
              <div className="flex items-center gap-4 bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs">
                <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[10px] font-mono font-bold text-slate-400 uppercase">EMAIL ADDRESS</span>
                  <h4 className="text-base font-bold text-slate-900">support@cirql.eco</h4>
                </div>
              </div>

              <div className="flex items-center gap-4 bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs">
                <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[10px] font-mono font-bold text-slate-400 uppercase">TOLL FREE SUPPORT</span>
                  <h4 className="text-base font-bold text-slate-900">+91 1800-419-CIRQL</h4>
                </div>
              </div>

              <div className="flex items-center gap-4 bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs">
                <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[10px] font-mono font-bold text-slate-400 uppercase">HEADQUARTERS</span>
                  <h4 className="text-base font-bold text-slate-900">Cirql Eco Hub, BKC, Mumbai 400051</h4>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE CONTACT FORM (7 COLS) */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-8 border border-slate-200/90 shadow-card">
            <h3 className="text-2xl font-bold text-slate-900 mb-6">Send Us a Message</h3>

            {submitted ? (
              <div className="py-12 text-center bg-emerald-50 rounded-2xl p-6 border border-emerald-200 animate-in fade-in">
                <div className="w-16 h-16 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h4 className="text-2xl font-bold text-slate-900 mb-2">Message Sent!</h4>
                <p className="text-sm text-slate-600 max-w-md mx-auto">
                  Thank you, <span className="font-bold text-slate-800">{formData.name}</span>. Our team will review your inquiry and respond to <span className="font-bold text-slate-800">{formData.email}</span> shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase mb-2">Your Name</label>
                    <input
                      type="text"
                      required
                      placeholder="Jane Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-emerald-700"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase mb-2">Email Address</label>
                    <input
                      type="email"
                      required
                      placeholder="jane@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-emerald-700"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-2">Subject</label>
                  <select
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-emerald-700"
                  >
                    <option value="General Inquiry">General Recycling Inquiry</option>
                    <option value="Pickup Status">Doorstep Pickup Status</option>
                    <option value="Partnership">Recycling Partner Inquiry</option>
                    <option value="Rewards">Eco-Coin Reward Redemption</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-2">Message</label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Tell us about the devices you wish to recycle or your inquiry..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl p-4 text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-emerald-700"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#1b4332] hover:bg-[#113123] text-white font-bold text-base py-4 px-8 rounded-2xl shadow-md hover:scale-[1.01] transition-all flex items-center justify-center gap-2 group"
                >
                  <span>Send Inquiry</span>
                  <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};
