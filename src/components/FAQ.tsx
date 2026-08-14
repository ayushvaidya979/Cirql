import React, { useState } from 'react';
import { HelpCircle, ChevronDown } from 'lucide-react';
import { FAQItem } from '../types';

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs: FAQItem[] = [
    {
      question: 'How does Cirql calculate the buyback value of my e-waste?',
      answer: 'Cirql utilizes computer vision AI combined with live global metal market pricing for gold, silver, copper, and palladium. We evaluate device age, working condition, functional component reuse potential, and current refurbish market demand to guarantee the highest fair market buyback valuation.',
    },
    {
      question: 'Is my personal data safe on old laptops and phones?',
      answer: 'Yes! Every device processed by Cirql undergoes certified military-grade data sanitization compliant with NIST 800-88 and DoD 5220.22-M standards. Non-functional devices have their storage IC chips physically destroyed prior to metal recovery, and you receive an official Data Destruction Certificate.',
    },
    {
      question: 'Is doorstep pickup free?',
      answer: 'Yes! Doorstep pickup is 100% free and fully insured across 150+ supported cities. Once you lock in your scan value, our eco-couriers collect the device at your preferred time slot directly from your home or workplace.',
    },
    {
      question: 'When and how do I receive my cash payout?',
      answer: 'Cash payouts are processed immediately upon courier pickup or drop-off verification. Payouts are transferred directly into your UPI account, bank account, or digital wallet within 24 hours of collection.',
    },
    {
      question: 'What are Eco-Coins and how can I spend them?',
      answer: 'Eco-Coins are bonus environmental rewards awarded alongside your cash buyback! You earn 1 Eco-Coin for every ₹12.5 of recycled value. You can redeem Eco-Coins for brand vouchers (Amazon, Flipkart), planting native trees, buying eco-friendly gadgets, or receiving certified carbon offset certificates.',
    },
  ];

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 section-tint-b relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* HEADER */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-emerald-50 border border-emerald-200 px-4 py-1.5 rounded-full mb-4 shadow-2xs">
            <HelpCircle className="w-3.5 h-3.5 text-emerald-800" />
            <span className="text-xs font-bold text-emerald-900 tracking-wide uppercase">
              Got Questions?
            </span>
          </div>

          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-4 font-sans text-gradient-glass">
            Frequently Asked Questions
          </h2>

          <p className="text-lg text-slate-600 font-medium">
            Everything you need to know about scanning, valuation, payouts, data safety, and recycling.
          </p>
        </div>

        {/* ACCORDION CONTAINER */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className={`rounded-2xl border-0 transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? 'glass-emerald shadow-md'
                    : 'card-glass hover:shadow-md'
                }`}
              >
                <button
                  onClick={() => toggleAccordion(idx)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 font-bold text-slate-900 text-lg sm:text-xl focus:outline-none"
                >
                  <span>{faq.question}</span>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${
                    isOpen ? 'bg-[#234d40] text-white rotate-180' : 'bg-slate-100 text-slate-600'
                  }`}>
                    <ChevronDown className="w-5 h-5" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 text-slate-600 text-sm leading-relaxed border-t border-emerald-100 pt-4 animate-in fade-in duration-200">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
