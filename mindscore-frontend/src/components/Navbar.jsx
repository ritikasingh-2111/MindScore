import { useState } from 'react';
import Icon from './Icon.jsx';
import '../styles/Navbar.css';

const LINKS = [
  { href: '#home', label: 'Home' },
  { href: '#prediction', label: 'Prediction' },
  { href: '#how-it-works', label: 'How It Works' },
  { href: '#about', label: 'About' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <header className="navbar">
      <div className="navbar-inner">
        <a href="#home" className="brand" onClick={close}>
          <span className="brand-mark" aria-hidden="true" />
          <span className="brand-text">
            <span className="brand-name">MindScore</span>
            <span className="brand-tag">AI-Powered Mental Health Score Prediction</span>
          </span>
        </a>

        <nav className={`nav-links ${open ? 'open' : ''}`} aria-label="Main">
          {LINKS.map((l) => (
            <a key={l.href} href={l.href} onClick={close}>{l.label}</a>
          ))}
          <a href="#prediction" className="btn btn-primary nav-cta" onClick={close}>
            Check Your Score
          </a>
        </nav>

        <button
          className="menu-toggle"
          onClick={() => setOpen((o) => !o)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          <Icon name={open ? 'close' : 'menu'} size={24} />
        </button>
      </div>
    </header>
  );
}
