import Icon from './Icon.jsx';
import '../styles/Hero.css';

const CHIPS = [
  { icon: 'sparkles', title: 'AI-Powered', text: 'Machine-learning model', cls: 'chip-a' },
  { icon: 'zap', title: 'Fast Prediction', text: 'Results in seconds', cls: 'chip-b' },
  { icon: 'shield', title: 'Privacy Focused', text: 'No account needed', cls: 'chip-c' },
];

function Illustration() {
  return (
    <svg className="hero-art" viewBox="0 0 440 440" role="img" aria-label="Abstract illustration of connected wellbeing signals">
      <defs>
        <linearGradient id="orbA" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#c9bcf5" />
          <stop offset="1" stopColor="#a8e6cf" />
        </linearGradient>
        <linearGradient id="orbB" x1="1" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#ffffff" stopOpacity="0.9" />
          <stop offset="1" stopColor="#dbe8fb" stopOpacity="0.6" />
        </linearGradient>
        <radialGradient id="glow" cx="50%" cy="50%" r="50%">
          <stop offset="0" stopColor="#ece6ff" />
          <stop offset="1" stopColor="#ece6ff" stopOpacity="0" />
        </radialGradient>
      </defs>
      <circle cx="220" cy="220" r="210" fill="url(#glow)" />
      <circle cx="220" cy="220" r="170" fill="none" stroke="#c9bcf5" strokeOpacity="0.45" strokeDasharray="2 8" strokeLinecap="round" />
      <circle cx="220" cy="220" r="125" fill="none" stroke="#a8e6cf" strokeOpacity="0.7" />
      <g className="art-spin">
        <circle cx="220" cy="50" r="9" fill="#8f7bdc" />
        <circle cx="390" cy="220" r="6" fill="#7aa7e8" />
        <circle cx="95" cy="345" r="7" fill="#4fbf9a" />
      </g>
      <circle cx="220" cy="220" r="82" fill="url(#orbA)" />
      <path d="M150 232c24-30 44 22 70-6s46 18 70-10" fill="none" stroke="#fff" strokeWidth="5" strokeLinecap="round" opacity="0.9" />
      <circle cx="200" cy="190" r="26" fill="url(#orbB)" />
    </svg>
  );
}

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-inner">
        <div className="hero-copy">
          <h1>
            Understand Your Digital Habits.
            <br />
            Understand Your Wellbeing.
          </h1>
          <p className="hero-sub">
            MindScore uses machine learning to analyze lifestyle, academic, and digital-behavior
            patterns and provide an AI-generated mental health score.
          </p>
          <div className="hero-actions">
            <a href="#prediction" className="btn btn-primary btn-lg">Check My Score</a>
            <a href="#how-it-works" className="btn btn-ghost btn-lg">How It Works</a>
          </div>
          <p className="hero-note">An informational prediction, not a medical diagnosis.</p>
        </div>

        <div className="hero-visual">
          <Illustration />
          {CHIPS.map((c) => (
            <div key={c.title} className={`chip ${c.cls}`}>
              <span className="chip-icon"><Icon name={c.icon} size={18} /></span>
              <span>
                <strong>{c.title}</strong>
                <small>{c.text}</small>
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
