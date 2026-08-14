import React, { useState } from 'react';
import { Gift, TreePine, Zap, Award, Coins, CheckCircle2, Sparkles, ArrowRight } from 'lucide-react';
import confetti from 'canvas-confetti';

export const Rewards: React.FC = () => {
  const [balance, setBalance] = useState<number>(1420);
  const [co2Saved, setCo2Saved] = useState<number>(42.5);
  const [redeemedItems, setRedeemedItems] = useState<string[]>([]);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const rewards = [
    {
      id: 'reward-1',
      title: 'Shopping Voucher',
      desc: '₹500 Amazon / Flipkart Gift Voucher',
      cost: 500,
      icon: Gift,
      badge: 'POPULAR VOUCHER',
    },
    {
      id: 'reward-2',
      title: 'Climate Action',
      desc: 'Plant 5 Native Trees via Eden Reforestation',
      cost: 350,
      icon: TreePine,
      badge: 'ECO IMPACT',
    },
    {
      id: 'reward-3',
      title: 'Sustainable Tech',
      desc: 'Eco-Friendly Bamboo Fast Wireless Charger',
      cost: 800,
      icon: Zap,
      badge: 'HARDWARE REWARD',
    },
    {
      id: 'reward-4',
      title: 'Verified Offset',
      desc: '1 Year Personal Carbon Offset Certificate',
      cost: 650,
      icon: Award,
      badge: 'ESG CERTIFIED',
    },
  ];

  const handleRedeem = (id: string, cost: number, title: string) => {
    if (balance < cost) {
      setToastMessage('Insufficient Eco-Coins balance! Recycle more devices to earn coins.');
      setTimeout(() => setToastMessage(null), 3500);
      return;
    }

    setBalance((prev) => prev - cost);
    setRedeemedItems((prev) => [...prev, id]);
    
    // Trigger celebratory confetti
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 }
    });

    setToastMessage(`🎉 Successfully redeemed "${title}"! Check your email for details.`);
    setTimeout(() => setToastMessage(null), 4000);
  };

  return (
    <section id="rewards" className="py-24 bg-[#f8faf7] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* SECTION HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-emerald-100/70 border border-emerald-300/60 px-4 py-1.5 rounded-full mb-4 shadow-2xs">
            <Coins className="w-3.5 h-3.5 text-emerald-800" />
            <span className="text-xs font-bold text-emerald-900 tracking-wide uppercase">
              Green Rewards &amp; Climate Impact
            </span>
          </div>

          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-4 font-sans text-gradient-glass">
            Turn Eco-Coins into Real-World Rewards
          </h2>

          <p className="text-lg text-slate-600 font-medium">
            Every e-waste item you recycle earns Eco-Coins that can be converted into useful and sustainable rewards.
          </p>
        </div>

        {/* ── PREMIUM GREEN BALANCE BANNER ── */}
        <div className="green-banner rounded-[28px] px-6 sm:px-10 py-6 sm:py-7 text-white mb-16 flex flex-col sm:flex-row items-center justify-between gap-5 sm:gap-0">
          
          {/* Leaf watermark SVG */}
          <svg className="green-banner-leaf" viewBox="0 0 120 140" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path d="M60 130 C60 130 10 90 10 50 C10 22 33 5 60 5 C87 5 110 22 110 50 C110 90 60 130 60 130Z" fill="white"/>
            <path d="M60 130 L60 30" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
            <path d="M60 75 C60 75 35 55 35 35" stroke="white" strokeWidth="2" strokeLinecap="round"/>
            <path d="M60 90 C60 90 85 70 85 48" stroke="white" strokeWidth="2" strokeLinecap="round"/>
          </svg>

          {/* LEFT: Eco-Coins balance */}
          <div className="flex items-center gap-4 sm:gap-5 relative z-10">
            <div className="green-banner-icon w-14 h-14 sm:w-16 sm:h-16 shrink-0">
              <Coins className="w-7 h-7 sm:w-8 sm:h-8 text-emerald-300" />
            </div>
            <div>
              <p className="text-[10px] font-mono font-bold uppercase tracking-[0.2em] text-emerald-400/90 mb-0.5">
                YOUR GREEN BALANCE
              </p>
              <div className="flex items-baseline gap-2.5">
                <span className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-sans">
                  {balance.toLocaleString()}
                </span>
                <span className="text-base sm:text-lg font-bold text-emerald-300">Eco-Coins</span>
              </div>
              <p className="text-[11px] text-emerald-300/70 mt-0.5 font-semibold">
                Approx Cash Value: <span className="text-white font-bold">₹{Math.round(balance * 1.25).toLocaleString()} INR</span>
              </p>
            </div>
          </div>

          {/* RIGHT: CO₂ stat */}
          <div className="green-banner-divider flex items-center gap-4 relative z-10 pl-0 sm:pl-8 pt-4 sm:pt-0 border-t sm:border-t-0 border-emerald-700/40 w-full sm:w-auto justify-center sm:justify-start">
            <div className="green-banner-icon w-10 h-10 shrink-0">
              <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 text-emerald-300" stroke="currentColor" strokeWidth="1.8">
                <path d="M12 2C8 2 4 5.5 4 10c0 5.2 6.4 11.1 7.3 11.9.4.3.9.3 1.3 0C13.6 21.1 20 15.2 20 10c0-4.5-4-8-8-8z"/>
                <path d="M12 13V7M9.5 9.5L12 7l2.5 2.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div>
              <span className="text-2xl sm:text-3xl font-extrabold text-white block leading-tight">
                {co2Saved} kg
              </span>
              <span className="text-[11px] text-emerald-300/80 font-semibold">CO₂ Emissions Saved</span>
            </div>
          </div>

        </div>

        {/* TOAST MESSAGE */}
        {toastMessage && (
          <div className="max-w-xl mx-auto mb-8 bg-emerald-900 text-emerald-100 p-4 rounded-2xl border border-emerald-400 shadow-xl flex items-center gap-3 animate-in fade-in slide-in-from-top-4">
            <Sparkles className="w-5 h-5 text-amber-300 shrink-0" />
            <p className="text-sm font-semibold">{toastMessage}</p>
          </div>
        )}

        {/* 4 REWARD CARDS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {rewards.map((r) => {
            const IconComp = r.icon;
            const isRedeemed = redeemedItems.includes(r.id);
            const canAfford = balance >= r.cost;

            return (
              <div
                key={r.id}
                className="bg-white rounded-3xl p-6 border border-slate-200/90 shadow-card hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] font-mono font-bold text-emerald-800 bg-emerald-50 border border-emerald-200 px-2.5 py-1 rounded-md">
                      {r.badge}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center">
                      <IconComp className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 mb-1">{r.title}</h3>
                  <p className="text-xs text-slate-600 mb-6 leading-relaxed">{r.desc}</p>
                </div>

                <div>
                  <div className="flex items-center justify-between mb-4 pt-4 border-t border-slate-100">
                    <span className="text-xs font-mono font-semibold text-slate-400">COST</span>
                    <div className="flex items-center gap-1 font-bold text-slate-900 text-sm">
                      <Coins className="w-4 h-4 text-emerald-600" />
                      <span>{r.cost} Coins</span>
                    </div>
                  </div>

                  <button
                    onClick={() => handleRedeem(r.id, r.cost, r.title)}
                    disabled={isRedeemed}
                    className={`w-full py-3 px-4 rounded-xl font-bold text-xs transition-all flex items-center justify-center gap-1.5 ${
                      isRedeemed
                        ? 'bg-slate-100 text-slate-400 cursor-not-allowed border border-slate-200'
                        : canAfford
                        ? 'bg-[#2d6457] hover:bg-[#234d40] text-white shadow-sm hover:scale-[1.02]'
                        : 'bg-emerald-50 text-emerald-800 border border-emerald-200 hover:bg-emerald-100'
                    }`}
                  >
                    {isRedeemed ? (
                      <>
                        <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                        <span>Redeemed</span>
                      </>
                    ) : (
                      <span>Redeem Now</span>
                    )}
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
