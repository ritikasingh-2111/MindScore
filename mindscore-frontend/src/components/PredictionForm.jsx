import { useRef, useState } from 'react';
import PersonalInfo from './PersonalInfo.jsx';
import DigitalHabits from './DigitalHabits.jsx';
import LifestyleSection from './LifestyleSection.jsx';
import StressSection from './StressSection.jsx';
import LoadingState from './LoadingState.jsx';
import ResultCard from './ResultCard.jsx';
import Icon from './Icon.jsx';
import { INITIAL_VALUES } from '../utils/constants.js';
import { validate } from '../utils/validation.js';
import { buildPayload, predictScore } from '../utils/api.js';
import { useReveal } from '../utils/hooks.js';
import '../styles/Form.css';

const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export default function PredictionForm() {
  const [values, setValues] = useState(INITIAL_VALUES);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('form'); // 'form' | 'loading' | 'result'
  const [apiError, setApiError] = useState('');
  const [score, setScore] = useState(null);
  const revealRef = useReveal();
  const cardRef = useRef(null);

  const scrollToCard = () => cardRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });

  const handleChange = (name, value) => {
    setValues((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setApiError('');

    const found = validate(values);
    setErrors(found);
    if (Object.keys(found).length > 0) {
      setTimeout(() => document.querySelector('#prediction [aria-invalid="true"]')?.focus(), 0);
      return;
    }

    setStatus('loading');
    scrollToCard();
    try {
      // The short delay keeps the loading animation from flashing on fast responses.
      const [result] = await Promise.all([predictScore(buildPayload(values)), wait(1200)]);
      setScore(result);
      setStatus('result');
    } catch (err) {
      setApiError(err.message);
      setStatus('form');
    }
  };

  const handleModify = () => { setStatus('form'); scrollToCard(); };
  const handleReset = () => {
    setValues(INITIAL_VALUES);
    setErrors({});
    setApiError('');
    setScore(null);
    setStatus('form');
    scrollToCard();
  };

  const errorCount = Object.keys(errors).length;

  return (
    <section id="prediction" className="section prediction reveal" ref={revealRef}>
      <div className="section-inner">
        <div className="section-head">
          <h2>Get Your MindScore</h2>
          <p>Answer a few questions about your lifestyle and digital habits.</p>
        </div>

        <div className="form-card" ref={cardRef}>
          {status === 'loading' && <LoadingState />}

          {status === 'result' && (
            <ResultCard score={score} onModify={handleModify} onReset={handleReset} />
          )}

          {status === 'form' && (
            <form onSubmit={handleSubmit} noValidate>
              <PersonalInfo values={values} errors={errors} onChange={handleChange} />
              <DigitalHabits values={values} errors={errors} onChange={handleChange} />
              <LifestyleSection values={values} errors={errors} onChange={handleChange} />
              <StressSection values={values} errors={errors} onChange={handleChange} />

              {errorCount > 0 && (
                <div className="banner banner-error" role="alert">
                  <Icon name="alert" size={20} />
                  <span>Please fix {errorCount} highlighted {errorCount === 1 ? 'field' : 'fields'} and try again.</span>
                </div>
              )}
              {apiError && (
                <div className="banner banner-error" role="alert">
                  <Icon name="alert" size={20} />
                  <span>{apiError}</span>
                </div>
              )}

              <div className="submit-row">
                <button type="submit" className="btn btn-primary btn-lg" disabled={status === 'loading'}>
                  Predict My MindScore
                </button>
                <p>AI-generated prediction for informational purposes. Not a medical diagnosis.</p>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
