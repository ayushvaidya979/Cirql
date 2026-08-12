import React from 'react';
import { Star, Quote, Award } from 'lucide-react';

export const Testimonials: React.FC = () => {
  const testimonials = [
    {
      name: 'Priya Sharma',
      role: 'Software Engineer, Mumbai',
      badge: 'Recycled 5 Devices',
      rating: 5,
      comment: 'Scanned 3 old iPhones sitting in my drawer for years. Got ₹9,200 transferred directly to my UPI account within 24 hours of doorstep pickup! Unbelievably smooth experience.',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80',
    },
    {
      name: 'Arjun Mehta',
      role: 'IT Director, TechCorp Global',
      badge: 'Enterprise Partner',
      rating: 5,
      comment: 'Cirql helped our IT department decommission 120 desktop PCs and servers with full NIST-800 data wipe certification and audit-ready ESG carbon credit reports.',
      avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&auto=format&fit=crop&q=80',
    },
    {
      name: 'Sneha Patel',
      role: 'Sustainability Advocate',
      badge: 'Level 4 Eco-Warrior',
      rating: 5,
      comment: 'The Eco-Coin reward system is addictive! Redeemed my accumulated coins for planting 20 native trees and received a gorgeous bamboo wireless charger.',
      avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&auto=format&fit=crop&q=80',
    },
  ];

  return (
    <section className="py-24 bg-[#f8faf7] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-emerald-100/70 border border-emerald-300/60 px-4 py-1.5 rounded-full mb-4 shadow-2xs">
            <Award className="w-3.5 h-3.5 text-emerald-800" />
            <span className="text-xs font-bold text-emerald-900 tracking-wide uppercase">
              TRUSTED BY MILLIONS
            </span>
          </div>

          <h2 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight mb-4 font-sans">
            Real Stories, Real Impact
          </h2>

          <p className="text-lg text-slate-600 font-medium">
            See how individuals and organizations are turning e-waste into value.
          </p>
        </div>

        {/* 3 TESTIMONIAL CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-white rounded-3xl p-8 border border-slate-200/90 shadow-card hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Rating Stars */}
                <div className="flex items-center gap-1 text-amber-400 mb-4">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>

                <Quote className="w-8 h-8 text-emerald-200 mb-3" />

                <p className="text-slate-700 text-sm leading-relaxed mb-6 font-medium">
                  "{t.comment}"
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className="w-11 h-11 rounded-full object-cover border-2 border-emerald-500/40"
                  />
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">{t.name}</h4>
                    <p className="text-[11px] text-slate-500">{t.role}</p>
                  </div>
                </div>

                <span className="text-[9px] font-mono font-bold text-emerald-800 bg-emerald-50 border border-emerald-200 px-2 py-1 rounded-md shrink-0">
                  {t.badge}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
