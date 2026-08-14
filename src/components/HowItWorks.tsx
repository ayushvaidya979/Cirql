import React, { useState } from 'react';
import { Scan, Cpu, Truck, Coins, ArrowRight, CheckCircle2 } from 'lucide-react';

interface HowItWorksProps {
  onOpenScanner: () => void;
}

export const HowItWorks: React.FC<HowItWorksProps> = ({ onOpenScanner }) => {
  const [activeStep, setActiveStep] = useState<number | null>(null);

  const steps = [
    {
      number: '01',
      title: 'Scan Your E-Waste',
      description: 'Use our camera tool or upload photos. Our computer vision AI identifies device components and specifications.',
      icon: Scan,
      details: 'Supported devices include smartphones, laptops, tablets, PCBs, smartwatches, and desktop monitors. AI accuracy >99.4%.',
    },
    {
      number: '02',
      title: 'Instant Fair Valuation',
      description: 'Receive a transparent estimate based on component value, precious metals, device condition and refurbishment demand.',
      icon: Cpu,
      details: 'Calculates exact real-time yields of Gold (Au), Silver (Ag), Copper (Cu), and Palladium (Pd) alongside resale market demand.',
    },
    {
      number: '03',
      title: 'Doorstep Pickup or Drop-Off',
      description: 'Schedule a pickup or locate trusted recycling centers near you.',
      icon: Truck,
      details: 'Free insured eco-courier doorstep pickup available in over 150 cities, or drop off at 500+ certified smart kiosks.',
    },
    {
      number: '04',
      title: 'Cash & Green Rewards',
      description: 'Receive your payout and earn Eco-Coins that can be redeemed for sustainable rewards.',
      icon: Coins,
      details: 'Instant payouts directly via UPI/Bank transfer within 24 hours plus bonus Eco-Coins to plant trees or redeem vouchers.',
    },
  ];

  return (
    <section id="how-it-works" className="py-24 section-tint-a relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* SECTION HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-emerald-50 border border-emerald-200/80 px-4 py-1.5 rounded-full mb-4 shadow-2xs">
            <span className="w-2 h-2 rounded-full bg-emerald-600 animate-ping"></span>
            <span className="text-xs font-bold text-emerald-900 tracking-wide uppercase">
              4-Step Simple Process
            </span>
          </div>

          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-4 font-sans text-gradient-glass">
            How Cirql Works
          </h2>

          <p className="text-lg text-slate-600 font-medium">
            Turn unused, broken, or outdated electronics into instant value and environmental impact.
          </p>
        </div>

        {/* 4 CARDS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {steps.map((step, idx) => {
            const IconComponent = step.icon;
            const isSelected = activeStep === idx;
            return (
              <div
                key={step.number}
                onClick={() => setActiveStep(isSelected ? null : idx)}
                className={`group card-glass rounded-3xl p-8 border-0 transition-all duration-300 relative flex flex-col justify-between cursor-pointer ${
                  isSelected
                    ? 'shadow-xl ring-2 ring-emerald-500/25 -translate-y-1'
                    : 'shadow-sm hover:shadow-lg hover:-translate-y-1'
                }`}
              >
                <div>
                  {/* Card Header: Step Number & Icon */}
                  <div className="flex items-start justify-between mb-8">
                    <span className="text-5xl font-extrabold font-sans text-slate-200 group-hover:text-emerald-200/80 transition-colors">
                      {step.number}
                    </span>
                    <div className="w-12 h-12 rounded-2xl bg-emerald-100/70 border border-emerald-200 flex items-center justify-center text-emerald-800 group-hover:bg-emerald-700 group-hover:text-white transition-all">
                      <IconComponent className="w-6 h-6" />
                    </div>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-emerald-950 transition-colors">
                    {step.title}
                  </h3>

                  <p className="text-slate-600 text-sm leading-relaxed mb-4">
                    {step.description}
                  </p>
                </div>

                {/* Expanded Info Drawer */}
                {isSelected && (
                  <div className="mt-4 pt-4 border-t border-emerald-100 text-xs text-emerald-900 bg-emerald-50/80 p-3 rounded-xl animate-in fade-in duration-200">
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <p>{step.details}</p>
                    </div>
                  </div>
                )}

                {/* Footer Action Link */}
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-slate-500 group-hover:text-emerald-800 transition-colors mt-4">
                  <span>{isSelected ? 'Hide Details' : 'Step Details'}</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            );
          })}
        </div>

        {/* BOTTOM DARK GREEN CTA BANNER (Matching Image 2) */}
        <div className="bg-[#2a5247] rounded-3xl p-8 sm:p-12 text-white shadow-2xl relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8 border border-emerald-600/30">
          
          {/* Subtle Background Glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"></div>

          <div className="relative z-10 max-w-2xl text-left">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-3 tracking-tight">
              Ready to turn your old gadgets into green rewards?
            </h3>
            <p className="text-emerald-200/90 text-sm sm:text-base font-normal">
              Join over 2.5 million users who have recycled responsibly and kept toxic heavy metals out of landfills.
            </p>
          </div>

          <div className="relative z-10 shrink-0">
            <button
              onClick={onOpenScanner}
              className="bg-white hover:bg-emerald-50 text-[#2a5247] px-8 py-4 rounded-full font-bold text-base shadow-lg transition-all duration-200 hover:scale-105 flex items-center gap-2 group"
            >
              <span>Scan E-Waste Now</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
