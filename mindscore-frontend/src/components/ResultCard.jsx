import { useCountUp } from '../utils/hooks.js';
import { MAX_SCORE } from '../utils/constants.js';
import '../styles/Result.css';

const RADIUS = 96;
const CIRC = 2 * Math.PI * RADIUS;

function getBand(score) {
  const pct = (score / MAX_SCORE) * 100;
  if (pct < 40) return { label: 'Lower range', text: 'Your predicted score sits in the lower part of the scale.' };
  if (pct < 70) return { label: 'Middle range', text: 'Your predicted score sits in the middle part of the scale.' };
  return { label: 'Higher range', text: 'Your predicted score sits in the higher part of the scale.' };
}

export default function ResultCard({ score, onModify, onReset }) {
  const shown = useCountUp(score);
  const fraction = Math.min(1, Math.max(0, shown / MAX_SCORE));
  const marker = Math.min(100, Math.max(0, (score / MAX_SCORE) * 100));
  const band = getBand(score);

  return (
    <div className="result">
      <h3 className="result-title">Your MindScore</h3>

      <div className="gauge">
        <svg viewBox="0 0 240 240" aria-hidden="true">
          <defs>
            <linearGradient id="ringGrad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0" stopColor="#8f7bdc" />
              <stop offset="1" stopColor="#4fbf9a" />
            </linearGradient>
          </defs>
          <circle cx="120" cy="120" r={RADIUS} fill="none" stroke="#ece6ff" strokeWidth="16" />
          <circle
            cx="120" cy="120" r={RADIUS} fill="none" stroke="url(#ringGrad)" strokeWidth="16"
            strokeLinecap="round" strokeDasharray={CIRC} strokeDashoffset={CIRC * (1 - fraction)}
            transform="rotate(-90 120 120)"
          />
        </svg>
        <div className="gauge-center">
          <span className="gauge-score" aria-label={`Predicted score ${score}`}>{shown.toFixed(2)}</span>
          <span className="gauge-max">out of {MAX_SCORE}</span>
        </div>
      </div>

      <div className="band">
        <strong>{band.label}</strong>
        <p>{band.text}</p>
        <div className="band-track" aria-hidden="true">
          <span className="seg s1" /><span className="seg s2" /><span className="seg s3" />
          <span className="band-marker" style={{ left: `${marker}%` }} />
        </div>
      </div>

      <p className="result-note">Your predicted score is based on the information you provided.</p>
      <p className="result-disclaimer">AI-generated prediction — not a medical diagnosis.</p>

      <div className="result-actions">
        <button type="button" className="btn btn-primary" onClick={onReset}>Check Again</button>
        <button type="button" className="btn btn-ghost" onClick={onModify}>Modify Responses</button>
      </div>
    </div>
  );
}
