import Icon from './Icon.jsx';
import { useReveal } from '../utils/hooks.js';
import '../styles/About.css';

const FACTS = [
  { icon: 'layers', title: 'Machine-learning model', text: 'Trained using machine-learning techniques on lifestyle and digital-behavior data.' },
  { icon: 'server', title: 'FastAPI backend', text: 'The backend is powered by FastAPI.' },
  { icon: 'code', title: 'React frontend', text: 'The frontend is built using React.' },
  { icon: 'zap', title: 'Served through an API', text: 'The model is served through an API, so predictions arrive in seconds.' },
];

export default function About() {
  const ref = useReveal();
  return (
    <section id="about" className="section about reveal" ref={ref}>
      <div className="section-inner about-grid">
        <div className="about-copy">
          <h2>About MindScore</h2>
          <p>
            MindScore is a machine-learning based application designed to explore how lifestyle,
            academic habits, stress levels, and digital behavior relate to a predicted mental health score.
          </p>
          <p className="about-note">
            It is a learning and exploration tool. It does not diagnose, treat, or screen for any condition.
          </p>
        </div>
        <ul className="facts">
          {FACTS.map((f) => (
            <li key={f.title}>
              <span className="fact-icon"><Icon name={f.icon} size={22} /></span>
              <div>
                <h3>{f.title}</h3>
                <p>{f.text}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
