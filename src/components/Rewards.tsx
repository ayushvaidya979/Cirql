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

          <h2 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight mb-4 font-sans">
            Turn Eco-Coins into Real-World Rewards
          </h2>

          <p className="text-lg text-slate-600 font-medium">
            Every e-waste item you recycle earns Eco-Coins that can be converted into useful and sustainable rewards.
          </p>
        </div>

        {/* DARK GREEN BALANCE BANNER */}
        <div className="bg-[#113123] rounded-3xl p-8 sm:p-10 text-white shadow-2xl mb-16 border border-emerald-500/30 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8">
          
          <div className="relative z-10 flex flex-col sm:flex-row items-center sm:items-start gap-6 text-center sm:text-left">
            <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-emerald-400 to-emerald-600 flex items-center justify-center text-slate-950 shadow-glow shrink-0">
              <Coins className="w-10 h-10" />
            </div>

            <div>
              <p className="text-xs font-mono font-bold text-emerald-300 uppercase tracking-widest mb-1">
                YOUR GREEN BALANCE
              </p>
              <div className="flex items-baseline gap-3 justify-center sm:justify-start">
                <span className="text-4xl sm:text-5xl font-extrabold font-sans text-white tracking-tight">
                  {balance.toLocaleString()}
                </span>
                <span className="text-xl font-bold text-emerald-300">Eco-Coins</span>
              </div>
              <p className="text-xs text-emerald-200/80 mt-1 font-medium">
                Approx Cash Value: <span className="font-bold text-white">₹{Math.round(balance * 1.25).toLocaleString()} INR</span>
              </p>
            </div>
          </div>

          <div className="relative z-10 flex flex-col sm:flex-row items-center gap-6 border-t md:border-t-0 md:border-l border-emerald-800/80 pt-6 md:pt-0 md:pl-8">
            <div className="text-center sm:text-right">
              <span className="text-3xl font-extrabold text-amber-300 block">{co2Saved} kg</span>
              <span className="text-xs text-emerald-200 font-semibold">CO₂ Emissions Saved</span>
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
                        ? 'bg-[#1b4332] hover:bg-[#113123] text-white shadow-sm hover:scale-[1.02]'
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
