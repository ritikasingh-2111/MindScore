import '../styles/Loading.css';

export default function LoadingState() {
  return (
    <div className="loading" role="status" aria-live="polite">
      <div className="loader" aria-hidden="true">
        <span className="ring r1" />
        <span className="ring r2" />
        <span className="core" />
      </div>
      <h3>Analyzing your responses...</h3>
      <p>Your MindScore is being calculated using our machine-learning model.</p>
    </div>
  );
}
