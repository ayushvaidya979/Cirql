import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ArrowLeft, Send, CheckCircle2, HelpCircle, ShieldAlert, Sparkles, MessageSquare } from 'lucide-react';
import '../styles/help-tokens.css';
import './HelpCenter.css';

const FAQ_SECTIONS = [
  {
    title: 'Identification & Accuracy',
    icon: Sparkles,
    items: [
      {
        q: 'How does Cirql identify my device from a photo?',
        a: 'We run your photo through our trained AI vision models (including Google Gemini Vision AI) that recognize smartphones, laptops, motherboards, and electronic scrap by visual chassis markers, camera module layouts, and brand engravings. It returns its top prediction plus a confidence score.',
      },
      {
        q: 'Why did it guess the wrong model, or show low confidence?',
        a: 'This usually happens with very new models, heavily damaged/encased units, or photos that are dark, blurry, or cropped too tightly. A clear, well-lit photo of the back panel with visible brand markings yields the most accurate spectrometry prediction.',
      },
      {
        q: 'What should I do if the identification is wrong?',
        a: 'Use the "Report incorrect identification" button directly on the AI scan results screen. Tell us the correct model so we can log it for continuous model retraining.',
      },
      {
        q: 'Which devices does Cirql currently support in its metal database?',
        a: 'Our database currently tracks 29 smartphone brands (291 models) and 19 laptop brands (234 models) with precise lab-verified metallurgical yields (Gold Au, Silver Ag, Copper Cu, Palladium Pd, and Platinum Pt).',
      },
    ],
  },
  {
    title: 'Valuation & Metal Yields',
    icon: HelpCircle,
    items: [
      {
        q: 'How is the precious metal yield calculated?',
        a: 'Once your device is identified, Cirql looks up laboratory metallurgical assays of recoverable precious metals (Gold, Silver, Palladium, Platinum, Copper) scaled to that exact model and its factory weight. These are engineering estimates based on published CPCB and IEEE e-waste recovery standards.',
      },
      {
        q: 'Is the cash buyback offer guaranteed?',
        a: 'The on-screen quote is guaranteed for 7 days upon scheduling pickup or drop-off. Final payout is confirmed after physical inspection of working status, screen condition, and component authenticity.',
      },
      {
        q: 'How and when do I get paid?',
        a: 'Once your device is received and verified by an authorized recycling partner, payment is released directly to your chosen UPI / bank account, along with your Eco-Coins reward bonus.',
      },
    ],
  },
  {
    title: 'Privacy & Data Destruction',
    icon: ShieldAlert,
    items: [
      {
        q: 'What happens to the photos I upload?',
        a: 'Photos are analyzed strictly for device identification and condition scoring. They are never sold or shared with external third parties outside the circular recycling workflow.',
      },
      {
        q: 'Is my personal data wiped from the device before recycling?',
        a: 'Yes — certified military-grade data sanitization compliant with NIST 800-88 and DoD 5220.22-M standards is performed on all functional units. Storage IC chips in non-functional devices are physically shredded.',
      },
      {
        q: 'How is the e-waste processed sustainably?',
        a: 'Functional devices are refurbished to extend circular lifecycle; non-repairable units are routed to licensed CPCB/ISO 14001 smelters and recyclers for zero-landfill precious metal recovery.',
      },
    ],
  },
];

function slug(str: string) {
  return str.toLowerCase().replace(/[^a-z0-9]+/g, '-');
}

export const HelpCenter: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const el = document.getElementById(location.hash.replace('#', ''));
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [location]);

  return (
    <main className="cirql-hc">
      <header className="cirql-hc-hero">
        <Link to="/" className="cirql-hc-back-btn">
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Cirql Home</span>
        </Link>
        <p className="cirql-hc-eyebrow">Help &amp; Support Center</p>
        <h1 className="cirql-hc-headline">
          Answers, start to <span className="cirql-hc-headline-accent">finish</span>.
        </h1>
        <p className="cirql-hc-sub">
          From device identification accuracy and metallurgical valuations to drop-off scheduling and data wiping — find quick answers below, or get in touch with our green support team.
        </p>
      </header>

      <div className="cirql-hc-body">
        <nav className="cirql-hc-toc" aria-label="Help topics">
          <p className="cirql-hc-toc-title">Help Topics</p>
          {FAQ_SECTIONS.map((s) => (
            <a key={s.title} href={`#${slug(s.title)}`} className="cirql-hc-toc-link">
              {s.title}
            </a>
          ))}
          <a href="#contact" className="cirql-hc-toc-link cirql-hc-toc-link-accent">
            Contact Support Desk →
          </a>
        </nav>

        <div className="cirql-hc-content">
          {FAQ_SECTIONS.map((section) => {
            const IconComp = section.icon;
            return (
              <section key={section.title} id={slug(section.title)} className="cirql-hc-section">
                <div className="flex items-center gap-2 mb-4">
                  <IconComp className="w-5 h-5 text-emerald-600" />
                  <h2 className="cirql-hc-section-title mb-0">{section.title}</h2>
                </div>
                <div className="cirql-hc-section-arc" aria-hidden="true" />
                {section.items.map((item) => (
                  <FaqRow key={item.q} q={item.q} a={item.a} />
                ))}
              </section>
            );
          })}

          <ContactSection />
        </div>
      </div>
    </main>
  );
};

interface FaqRowProps {
  q: string;
  a: string;
}

const FaqRow: React.FC<FaqRowProps> = ({ q, a }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="cirql-hc-faq">
      <button
        type="button"
        className="cirql-hc-faq-q"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
      >
        <span>{q}</span>
        <span className="cirql-hc-faq-chevron" data-open={open}>
          ▾
        </span>
      </button>
      {open && <p className="cirql-hc-faq-a">{a}</p>}
    </div>
  );
};

const ContactSection: React.FC = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    topic: 'identification',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus('sending');
    try {
      const res = await fetch('/api/support', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error('Request failed');
      setStatus('sent');
      setForm({ name: '', email: '', topic: 'identification', message: '' });
    } catch {
      setStatus('error');
    }
  }

  return (
    <section id="contact" className="cirql-hc-section cirql-hc-contact">
      <div className="flex items-center gap-2 mb-2">
        <MessageSquare className="w-5 h-5 text-emerald-600" />
        <h2 className="cirql-hc-section-title mb-0">Still stuck? Contact us</h2>
      </div>
      <div className="cirql-hc-section-arc" aria-hidden="true" />
      <p className="cirql-hc-contact-lede">
        Tell us what's going on and our recycling support specialists will get back to you by email, usually within one business day.
      </p>

      {status === 'sent' ? (
        <div className="cirql-hc-success flex items-start gap-3">
          <CheckCircle2 className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5" />
          <div>
            <strong>Message received!</strong> Our support desk has logged your request and will reply shortly.
          </div>
        </div>
      ) : (
        <form className="cirql-hc-form" onSubmit={handleSubmit}>
          <div className="cirql-hc-form-row">
            <label className="cirql-hc-label">
              <span>Your Name *</span>
              <input
                required
                type="text"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                placeholder="e.g. Rahul Verma"
              />
            </label>
            <label className="cirql-hc-label">
              <span>Email Address *</span>
              <input
                required
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                placeholder="e.g. rahul@example.com"
              />
            </label>
          </div>

          <label className="cirql-hc-label">
            <span>Topic *</span>
            <select
              value={form.topic}
              onChange={(e) => setForm({ ...form, topic: e.target.value })}
            >
              <option value="identification">Device identification issue</option>
              <option value="valuation">Metal estimate / valuation question</option>
              <option value="payment">Payment / order status</option>
              <option value="privacy">Privacy / data sanitization question</option>
              <option value="other">Something else</option>
            </select>
          </label>

          <label className="cirql-hc-label">
            <span>Message *</span>
            <textarea
              required
              rows={5}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              placeholder="What happened, and what device or booking is this about?"
            />
          </label>

          <button type="submit" className="cirql-hc-submit flex items-center gap-2" disabled={status === 'sending'}>
            <Send className="w-4 h-4" />
            <span>{status === 'sending' ? 'Sending Message…' : 'Send Message'}</span>
          </button>

          {status === 'error' && (
            <p className="cirql-hc-error">
              Something went wrong sending that. Try again, or email us directly at{' '}
              <a href="mailto:support@cirql.app" className="underline font-bold">
                support@cirql.app
              </a>.
            </p>
          )}
        </form>
      )}
    </section>
  );
};

export default HelpCenter;
