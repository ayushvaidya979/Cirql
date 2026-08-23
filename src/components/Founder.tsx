import React from 'react';

export const Founder: React.FC = () => {
  return (
    <section id="founder" className="py-20 bg-[#f8faf7] border-t border-slate-200/60 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Section Heading */}
        <div className="mb-8">
          <span className="text-xs font-bold tracking-widest uppercase text-emerald-800 bg-emerald-100/70 border border-emerald-300/60 px-3.5 py-1 rounded-full">
            Leadership
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-3 font-sans">
            Founder
          </h2>
        </div>

        {/* Founder Card */}
        <div className="inline-flex flex-col items-center bg-white p-6 sm:p-8 rounded-3xl border border-slate-200/80 shadow-md hover:shadow-lg transition-shadow duration-300">
          <div className="w-56 h-72 sm:w-64 sm:h-80 rounded-2xl overflow-hidden shadow-md border-2 border-emerald-600/20 mb-5 bg-slate-100">
            <img
              src="/assets/founder_ayush.jpg"
              alt="Ayush Vaidya - Founder"
              className="w-full h-full object-cover object-top"
            />
          </div>

          <h3 className="text-2xl font-bold text-slate-900 font-sans">
            Ayush Vaidya
          </h3>
          <p className="text-sm font-semibold text-emerald-700 mt-1">
            Founder, Cirql
          </p>
        </div>

      </div>
    </section>
  );
};
