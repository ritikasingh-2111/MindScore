import '../styles/Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-top">
          <div>
            <p className="footer-brand">MindScore</p>
            <p className="footer-tag">AI-Powered Mental Health Score Prediction</p>
          </div>
          <nav aria-label="Footer">
            <a href="#about">About</a>
            <a href="#prediction">Prediction</a>
            <a href="#how-it-works">How It Works</a>
          </nav>
        </div>
        <p className="footer-disclaimer">
          MindScore provides an AI-generated prediction for informational purposes only and is not a
          substitute for professional medical or mental-health advice.
        </p>
        <p className="footer-copy">© {new Date().getFullYear()} MindScore</p>
      </div>
    </footer>
  );
}
