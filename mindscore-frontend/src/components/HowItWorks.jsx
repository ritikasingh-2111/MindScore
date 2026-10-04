import Icon from './Icon.jsx';
import { useReveal } from '../utils/hooks.js';
import '../styles/HowItWorks.css';

const STEPS = [
  { icon: 'clipboard', title: 'Tell Us About You', text: 'Enter information about your lifestyle, academics, sleep, physical activity, and digital habits.' },
  { icon: 'cpu', title: 'AI Analyzes Your Data', text: 'Your information is processed by the machine-learning pipeline.' },
  { icon: 'target', title: 'Get Your MindScore', text: 'Receive your predicted mental health score instantly.' },
];

export default function HowItWorks() {
  const ref = useReveal();
  return (
    <section id="how-it-works" className="section how reveal" ref={ref}>
      <div className="section-inner">
        <div className="section-head">
          <h2>How It Works</h2>
          <p>Three simple steps from your habits to your score.</p>
        </div>
        <div className="how-grid">
          {STEPS.map((s, i) => (
            <article className="how-card" key={s.title}>
              <span className="how-step">{i + 1}</span>
              <span className="how-icon"><Icon name={s.icon} size={28} /></span>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
