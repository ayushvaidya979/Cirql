import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/help-tokens.css';
import './HelpWidget.css';

/**
 * <HelpWidget />
 * -----------------------------------------------------------------
 * A floating "?" launcher button fixed to the bottom-right of the screen
 * that opens a quick-answer panel without leaving the current page.
 */

const QUICK_ANSWERS = [
  {
    q: "Why wasn't my device identified correctly?",
    a: "The AI vision model recognizes a fixed set of trained device models. If your device is brand new, rare, heavily encased, or the photo is blurry/poorly lit, it may show lower confidence. Try a clearer, well-lit photo of the back panel, or click \"Report incorrect identification\" so we can improve the model.",
  },
  {
    q: "What does the confidence score mean?",
    a: "It's the AI model's certainty in its top prediction (0–100%). Scores above 75% are highly accurate. Below that, check the other recommendations or verify your model manual selection.",
  },
  {
    q: "Are the metal content and cash estimates exact?",
    a: "They are modeled engineering estimates based on verified e-waste material breakdown data (Gold, Silver, Palladium, Platinum, Copper) scaled to that device's factory weight. Final payout is confirmed upon physical inspection.",
  },
  {
    q: "How does data wiping work?",
    a: "Every device processed by Cirql undergoes certified data destruction compliant with NIST 800-88 and DoD standards before any hardware refurbishment or metal extraction.",
  },
];

export const HelpWidget: React.FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        className="cirql-help-launcher"
        aria-label={open ? 'Close help panel' : 'Open help panel'}
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
      >
        <span className="cirql-help-launcher-ring" aria-hidden="true" />
        <span className="cirql-help-launcher-icon">{open ? '✕' : '?'}</span>
      </button>

      {open && (
        <div className="cirql-help-panel" role="dialog" aria-label="Help and support">
          <div className="cirql-help-panel-header">
            <p className="cirql-help-eyebrow">Quick Help</p>
            <h2 className="cirql-help-title">Common Questions</h2>
          </div>

          <div className="cirql-help-panel-body">
            {QUICK_ANSWERS.map((item, i) => (
              <QuickAnswer key={i} q={item.q} a={item.a} />
            ))}
          </div>

          <div className="cirql-help-panel-footer">
            <Link
              to="/help"
              className="cirql-help-link-primary"
              onClick={() => setOpen(false)}
            >
              Open Full Help Center →
            </Link>
            <Link
              to="/help#contact"
              className="cirql-help-link-secondary"
              onClick={() => setOpen(false)}
            >
              Still stuck? Contact Support Desk
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

interface QuickAnswerProps {
  q: string;
  a: string;
}

const QuickAnswer: React.FC<QuickAnswerProps> = ({ q, a }) => {
  const [expanded, setExpanded] = useState(false);
  return (
    <div className="cirql-help-qa">
      <button
        type="button"
        className="cirql-help-qa-question"
        onClick={() => setExpanded((v) => !v)}
        aria-expanded={expanded}
      >
        <span>{q}</span>
        <span className="cirql-help-qa-chevron" data-open={expanded}>
          ▾
        </span>
      </button>
      {expanded && <p className="cirql-help-qa-answer">{a}</p>}
    </div>
  );
};

export default HelpWidget;
