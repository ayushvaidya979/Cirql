import React, { useEffect, useRef, useState } from 'react';
import {
  ComposedChart, Bar, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  AreaChart, Area, ReferenceLine, Legend, Cell
} from 'recharts';
import { BarChart3, AlertTriangle, CheckCircle2, TrendingUp, ShieldCheck } from 'lucide-react';

/* ────────────────────────────────────────────────────────────────
   OFFICIAL CPCB REGISTERED E-WASTE TIMELINE DATA (2016-17 to 2024-25)
──────────────────────────────────────────────────────────────── */
const cpcbTimelineData = [
  {
    year: '2016-17',
    generatedTonnes: null,
    recycledTonnes: 22700,
    generatedLakh: null,
    recycledLakh: 0.23,
    rate: null,
    note: 'Initial CPCB tracking',
  },
  {
    year: '2017-18',
    generatedTonnes: 708000,
    recycledTonnes: null,
    generatedLakh: 7.08,
    recycledLakh: null,
    rate: null,
    note: 'First official generation report',
  },
  {
    year: '2019-20',
    generatedTonnes: 1014961,
    recycledTonnes: 164663,
    generatedLakh: 10.15,
    recycledLakh: 1.65,
    rate: 16.2,
    note: '16.2% recycled',
  },
  {
    year: '2020-21',
    generatedTonnes: 1346496,
    recycledTonnes: 222436,
    generatedLakh: 13.46,
    recycledLakh: 2.22,
    rate: 16.5,
    note: '16.5% recycled',
  },
  {
    year: '2021-22',
    generatedTonnes: 1601155,
    recycledTonnes: 527131,
    generatedLakh: 16.01,
    recycledLakh: 5.27,
    rate: 32.9,
    note: '32.9% recycled',
  },
  {
    year: '2023-24',
    generatedTonnes: 1254287,
    recycledTonnes: 778000,
    generatedLakh: 12.54,
    recycledLakh: 7.78,
    rate: 61.94,
    note: '61.94% recycled',
  },
  {
    year: '2024-25',
    generatedTonnes: 1397956,
    recycledTonnes: 1159000,
    generatedLakh: 13.98,
    recycledLakh: 11.59,
    rate: 70.71,
    note: '70.71% recycled (Record)',
  },
];

/* ────────────────────────────────────────────────────────────────
   E-WASTE MARKET SIZE PROJECTION DATA (2025-2034)
──────────────────────────────────────────────────────────────── */
const marketData = [
  { year: '2025', value: 3.32 },
  { year: '2026', value: 3.91 },
  { year: '2027', value: 4.58 },
  { year: '2028', value: 5.31 },
  { year: '2029', value: 6.10 },
  { year: '2030', value: 6.94 },
  { year: '2031', value: 7.65 },
  { year: '2032', value: 8.31 },
  { year: '2033', value: 9.05 },
  { year: '2034', value: 9.92 },
];

/* ────────────────────────────────────────────────────────────────
   CUSTOM TOOLTIP – CPCB TIMELINE CHART
──────────────────────────────────────────────────────────────── */
const CpcbTimelineTooltip = ({ active, payload, label }: any) => {
  if (!active || !payload?.length) return null;
  const data = payload[0]?.payload;
  return (
    <div
      style={{
        background: 'rgba(255, 255, 255, 0.88)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        border: '1px solid rgba(255, 255, 255, 0.95)',
        borderRadius: 16,
        padding: '12px 18px',
        boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
      }}
    >
      <div className="flex items-center justify-between gap-4 mb-2 pb-1 border-b border-slate-200/60">
        <span className="font-extrabold text-slate-900 text-sm">{label}</span>
        <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-800 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-full">
          Official CPCB
        </span>
      </div>

      <div className="space-y-1.5 text-xs">
        {data.generatedTonnes !== null ? (
          <div className="flex items-center justify-between gap-4">
            <span className="text-slate-500 font-medium">Generated:</span>
            <span className="font-bold text-slate-800">
              {data.generatedTonnes.toLocaleString('en-IN')} tonnes ({data.generatedLakh} L t)
            </span>
          </div>
        ) : (
          <div className="text-slate-400 text-[11px] font-medium">Generation figure not reported</div>
        )}

        {data.recycledTonnes !== null ? (
          <div className="flex items-center justify-between gap-4">
            <span className="text-slate-500 font-medium">Recycled:</span>
            <span className="font-bold text-emerald-700">
              {data.recycledTonnes.toLocaleString('en-IN')} tonnes ({data.recycledLakh} L t)
            </span>
          </div>
        ) : (
          <div className="text-slate-400 text-[11px] font-medium">Recycled figure not reported</div>
        )}

        {data.rate !== null && (
          <div className="pt-1.5 mt-1 border-t border-slate-200/60 flex items-center justify-between">
            <span className="text-emerald-800 font-bold">Recycling Rate:</span>
            <span className="font-extrabold text-emerald-700 bg-emerald-100/90 px-2 py-0.5 rounded-md">
              {data.rate}%
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

/* ────────────────────────────────────────────────────────────────
   CUSTOM TOOLTIP – MARKET AREA
──────────────────────────────────────────────────────────────── */
const MarketTooltip = ({ active, payload, label }: any) => {
  if (!active || !payload?.length) return null;
  return (
    <div
      style={{
        background: 'rgba(255,255,255,0.85)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        border: '1px solid rgba(255,255,255,0.9)',
        borderRadius: 14,
        padding: '10px 16px',
        boxShadow: '0 4px 24px rgba(0,0,0,0.08)',
      }}
    >
      <p style={{ fontWeight: 800, fontSize: 15, color: '#1e293b', margin: 0 }}>
        USD {payload[0].value.toFixed(2)}B
      </p>
      <p style={{ fontSize: 11, color: '#64748b', marginTop: 3, fontWeight: 500 }}>
        {label} · {parseInt(label) > 2025 ? 'Projected' : 'Current'}
      </p>
    </div>
  );
};

/* ────────────────────────────────────────────────────────────────
   GLASS CARD WRAPPER
──────────────────────────────────────────────────────────────── */
const GlassCard: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = '' }) => (
  <div
    className={`rounded-3xl overflow-hidden ${className}`}
    style={{
      background: 'rgba(255,255,255,0.65)',
      backdropFilter: 'blur(20px)',
      WebkitBackdropFilter: 'blur(20px)',
      border: '1px solid rgba(255,255,255,0.8)',
      boxShadow: '0 2px 32px rgba(0,0,0,0.05), inset 0 1px 0 rgba(255,255,255,0.92)',
    }}
  >
    {children}
  </div>
);

/* ────────────────────────────────────────────────────────────────
   MAIN COMPONENT
──────────────────────────────────────────────────────────────── */
export const RecentNumbers: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="recent-numbers"
      className="py-28 relative overflow-hidden"
      style={{
        background: 'linear-gradient(160deg, #f4f7f4 0%, #eef2ee 40%, #f3f6f3 100%)',
      }}
    >
      {/* soft ambient blobs */}
      <div
        aria-hidden
        className="pointer-events-none absolute top-0 right-[-120px] w-[500px] h-[500px] rounded-full"
        style={{ background: 'radial-gradient(circle, rgba(106,171,138,0.10) 0%, transparent 68%)' }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-[-60px] left-[-60px] w-[380px] h-[380px] rounded-full"
        style={{ background: 'radial-gradient(circle, rgba(45,106,79,0.07) 0%, transparent 68%)' }}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">

        {/* ── SECTION HEADER ── */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 bg-white/70 border border-white/90 backdrop-blur-md px-4 py-1.5 rounded-full mb-4 shadow-xs">
            <BarChart3 className="w-3.5 h-3.5 text-emerald-800" />
            <span className="text-[10px] font-bold text-slate-600 tracking-widest uppercase">
              Official Data Trends
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-3 font-sans text-gradient-glass">
            India's E-Waste at a Glance
          </h2>
          <p className="text-base text-slate-500 font-medium leading-relaxed">
            Official CPCB statistics on registered e-waste generation, recycling growth, and market valuation projections.
          </p>
        </div>

        {/* ══════════════════════════════════════════════════════════
            CARD 1 — REGISTERED CPCB E-WASTE TIMELINE GRAPH (2016-17 to 2024-25)
        ══════════════════════════════════════════════════════════ */}
        <GlassCard className="mb-8">
          {/* Card Header */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 px-7 pt-7 pb-5 border-b border-white/60">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <ShieldCheck className="w-4 h-4 text-emerald-700" />
                <span className="text-[10px] font-extrabold tracking-widest uppercase text-emerald-800 bg-emerald-100/80 border border-emerald-300/80 px-2.5 py-0.5 rounded-full">
                  Official CPCB Data • Registered E-Waste
                </span>
              </div>
              <h3 className="text-xl font-extrabold text-slate-900">
                E-Waste Generation &amp; Recycling Growth Timeline
                <span className="text-slate-400 font-medium ml-2 text-sm">(2016-17 to 2024-25)</span>
              </h3>
            </div>

            {/* Stat Summary Pills */}
            <div className="flex items-center gap-4 shrink-0 bg-white/70 backdrop-blur-md border border-white/90 p-2.5 rounded-2xl shadow-xs">
              <div className="text-center px-3">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block">2024-25 Generated</span>
                <span className="text-lg font-extrabold text-slate-800">13.98 Lakh Tonnes</span>
              </div>
              <div className="w-px h-8 bg-slate-200" />
              <div className="text-center px-3">
                <span className="text-xs font-bold text-emerald-700 uppercase tracking-widest block">2024-25 Recycled</span>
                <span className="text-lg font-extrabold text-emerald-700">11.59 Lakh Tonnes</span>
              </div>
              <div className="w-px h-8 bg-slate-200" />
              <div className="text-center px-3">
                <span className="text-xs font-bold text-emerald-800 uppercase tracking-widest block">Recycling Efficiency</span>
                <span className="text-lg font-black text-emerald-700 bg-emerald-100/90 px-2 py-0.5 rounded-md">70.71%</span>
              </div>
            </div>
          </div>

          {/* Chart Viewport */}
          <div className={`px-4 sm:px-7 pt-6 pb-6 transition-opacity duration-700 ${visible ? 'opacity-100' : 'opacity-0'}`}>
            <ResponsiveContainer width="100%" height={320}>
              <ComposedChart data={cpcbTimelineData} margin={{ top: 16, right: 16, left: -10, bottom: 4 }}>
                <defs>
                  <linearGradient id="genGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#94a3b8" stopOpacity={0.85} />
                    <stop offset="100%" stopColor="#64748b" stopOpacity={0.4} />
                  </linearGradient>
                  <linearGradient id="recGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#52b788" stopOpacity={1} />
                    <stop offset="100%" stopColor="#2d6457" stopOpacity={0.85} />
                  </linearGradient>
                  <linearGradient id="rateAreaGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#2d6457" stopOpacity={0.15} />
                    <stop offset="100%" stopColor="#2d6457" stopOpacity={0.0} />
                  </linearGradient>
                </defs>

                <CartesianGrid strokeDasharray="2 4" stroke="rgba(0,0,0,0.06)" vertical={false} />
                
                <XAxis
                  dataKey="year"
                  tick={{ fontSize: 11, fontWeight: 700, fill: '#475569', fontFamily: 'inherit' }}
                  tickLine={false}
                  axisLine={{ stroke: '#cbd5e1' }}
                />

                {/* LEFT Y-AXIS: Volume in Lakh Tonnes */}
                <YAxis
                  yAxisId="left"
                  orientation="left"
                  tickFormatter={(v) => `${v}L t`}
                  tick={{ fontSize: 10, fill: '#64748b', fontFamily: 'inherit', fontWeight: 600 }}
                  tickLine={false}
                  axisLine={false}
                  domain={[0, 20]}
                  ticks={[0, 4, 8, 12, 16, 20]}
                  width={42}
                />

                {/* RIGHT Y-AXIS: Recycling Efficiency % */}
                <YAxis
                  yAxisId="right"
                  orientation="right"
                  tickFormatter={(v) => `${v}%`}
                  tick={{ fontSize: 10, fill: '#2d6457', fontFamily: 'inherit', fontWeight: 700 }}
                  tickLine={false}
                  axisLine={false}
                  domain={[0, 100]}
                  ticks={[0, 25, 50, 75, 100]}
                  width={42}
                />

                <Tooltip content={<CpcbTimelineTooltip />} cursor={{ fill: 'rgba(0,0,0,0.025)', radius: 6 }} />

                {/* Bars bound to Left Y-Axis */}
                <Bar
                  yAxisId="left"
                  dataKey="generatedLakh"
                  name="Generated (Lakh Tonnes)"
                  fill="url(#genGrad)"
                  radius={[6, 6, 0, 0]}
                  barSize={28}
                />
                <Bar
                  yAxisId="left"
                  dataKey="recycledLakh"
                  name="Recycled (Lakh Tonnes)"
                  fill="url(#recGrad)"
                  radius={[6, 6, 0, 0]}
                  barSize={28}
                />

                {/* Recycling Rate Line & Area Overlay bound to Right Y-Axis */}
                <Line
                  yAxisId="right"
                  type="monotone"
                  dataKey="rate"
                  name="Recycling Rate (%)"
                  stroke="#1b4332"
                  strokeWidth={3}
                  dot={{ r: 5, fill: '#52b788', stroke: '#1b4332', strokeWidth: 2.5 }}
                  activeDot={{ r: 7, fill: '#1b4332', stroke: '#ffffff', strokeWidth: 2 }}
                />
              </ComposedChart>
            </ResponsiveContainer>

            {/* Custom Chart Legend & Data Highlights */}
            <div className="mt-4 pt-4 border-t border-slate-200/60 flex flex-wrap items-center justify-between gap-4 text-xs font-semibold">
              <div className="flex items-center gap-6">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-sm bg-slate-400 inline-block" />
                  <span className="text-slate-600">Generated E-Waste (Lakh Tonnes)</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-sm bg-[#40916c] inline-block" />
                  <span className="text-slate-600">Recycled / Processed (Lakh Tonnes)</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-[#1b4332] border-2 border-[#52b788] inline-block" />
                  <span className="text-[#1b4332] font-bold">Recycling Rate % Line</span>
                </div>
              </div>

              <div className="text-[11px] text-slate-400 font-medium">
                * Data Source: Central Pollution Control Board (CPCB) Official Reports
              </div>
            </div>

            {/* Year-by-Year Recycling Rate Badges Row */}
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2 mt-4">
              {cpcbTimelineData.map((d) => (
                <div
                  key={d.year}
                  className={`p-2.5 rounded-xl text-center border transition-all ${
                    d.year === '2024-25'
                      ? 'bg-emerald-100/80 border-emerald-300 text-emerald-900 shadow-xs'
                      : 'bg-white/60 border-slate-200/80 text-slate-700'
                  }`}
                >
                  <span className="text-[10px] font-extrabold text-slate-500 uppercase block">{d.year}</span>
                  <span className="text-xs font-black block mt-0.5">
                    {d.rate !== null ? `${d.rate}%` : d.recycledLakh ? `${d.recycledLakh}L t` : `${d.generatedLakh}L t`}
                  </span>
                  <span className="text-[9px] font-semibold text-slate-400 block truncate mt-0.5">{d.note}</span>
                </div>
              ))}
            </div>
          </div>
        </GlassCard>

        {/* ══════════════════════════════════════════════════════════
            CARD 2 — MARKET SIZE PROJECTION (FULL WIDTH)
        ══════════════════════════════════════════════════════════ */}
        <div className="w-full">
          <GlassCard>
            {/* Card Header */}
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-5 px-7 pt-7 pb-5 border-b border-white/50">
                <div className="flex items-start gap-3">
                  <div
                    className="w-8 h-8 rounded-xl flex items-center justify-center shrink-0 mt-0.5"
                    style={{
                      background: 'rgba(106,171,138,0.12)',
                      border: '1px solid rgba(106,171,138,0.22)',
                    }}
                  >
                    <TrendingUp className="w-3.5 h-3.5 text-emerald-700" />
                  </div>
                  <div>
                    <p className="text-[9px] font-bold tracking-widest uppercase text-slate-400 mb-1">
                      Market Projection · 2025 – 2034
                    </p>
                    <h3 className="text-lg font-bold text-slate-800">
                      India E-Waste Recycling Market
                      <span className="text-slate-400 font-medium ml-2 text-base">— USD Billion</span>
                    </h3>
                  </div>
                </div>

                <div className="flex items-center gap-3 shrink-0">
                  <div className="text-center">
                    <p className="text-xl font-black text-slate-700 tracking-tight">$3.32B</p>
                    <p className="text-[9px] font-bold uppercase text-slate-400 tracking-widest">2025 · Current</p>
                  </div>
                  <span className="text-slate-300 text-lg font-thin">→</span>
                  <div className="text-center">
                    <p className="text-xl font-black text-emerald-700 tracking-tight">$9.92B</p>
                    <p className="text-[9px] font-bold uppercase text-emerald-600 tracking-widest">2034 · Est.</p>
                  </div>
                </div>
              </div>

              {/* Chart */}
              <div className={`px-4 sm:px-7 pt-6 pb-5 transition-opacity duration-700 delay-150 ${visible ? 'opacity-100' : 'opacity-0'}`}>
                <ResponsiveContainer width="100%" height={220}>
                  <AreaChart data={marketData} margin={{ top: 16, right: 16, left: -10, bottom: 4 }}>
                    <defs>
                      <linearGradient id="mktFill" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#6aab8a" stopOpacity={0.22} />
                        <stop offset="85%" stopColor="#6aab8a" stopOpacity={0.02} />
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="2 4" stroke="rgba(0,0,0,0.06)" vertical={false} />
                    <XAxis
                      dataKey="year"
                      tick={{ fontSize: 10, fontWeight: 600, fill: '#94a3b8', fontFamily: 'inherit' }}
                      tickLine={false}
                      axisLine={false}
                    />
                    <YAxis
                      tickFormatter={v => `$${v}B`}
                      tick={{ fontSize: 10, fill: '#cbd5e1', fontFamily: 'inherit' }}
                      tickLine={false}
                      axisLine={false}
                      domain={[0, 11]}
                      ticks={[0, 2, 4, 6, 8, 10]}
                      width={38}
                    />
                    <Tooltip content={<MarketTooltip />} cursor={{ stroke: 'rgba(106,171,138,0.3)', strokeWidth: 1.5, strokeDasharray: '4 3' }} />
                    <ReferenceLine
                      x="2025"
                      stroke="rgba(0,0,0,0.10)"
                      strokeDasharray="4 3"
                      strokeWidth={1}
                      label={{ value: '$3.32B', position: 'top', fontSize: 9, fill: '#94a3b8', fontFamily: 'inherit' }}
                    />
                    <ReferenceLine
                      x="2034"
                      stroke="rgba(106,171,138,0.40)"
                      strokeDasharray="4 3"
                      strokeWidth={1}
                      label={{ value: '$9.92B (Est.)', position: 'top', fontSize: 9, fill: '#6aab8a', fontFamily: 'inherit' }}
                    />
                    <Area
                      type="monotone"
                      dataKey="value"
                      stroke="#40916c"
                      strokeWidth={2}
                      fill="url(#mktFill)"
                      dot={false}
                      activeDot={{ r: 5, fill: '#40916c', stroke: '#fff', strokeWidth: 2 }}
                      isAnimationActive={visible}
                      animationDuration={1400}
                      animationEasing="ease-out"
                    />
                  </AreaChart>
                </ResponsiveContainer>

                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 mt-3 pt-3 border-t border-white/50">
                  <p className="text-[10px] text-slate-400">
                    Source: Industry research &amp; market projections
                  </p>
                  <span className="text-[9px] font-extrabold uppercase tracking-widest px-3 py-1 rounded-full text-emerald-800 bg-emerald-50 border border-emerald-200">
                    ~199% Projected Sector Growth
                  </span>
                </div>
              </div>
            </GlassCard>
          </div>

      </div>
    </section>
  );
};
