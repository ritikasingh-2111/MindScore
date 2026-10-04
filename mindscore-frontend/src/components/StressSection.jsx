import { FormSection } from './FormControls.jsx';
import { STRESS_LEVELS } from '../utils/constants.js';

export default function StressSection({ values, errors, onChange }) {
  const error = errors.Stress_Level;
  return (
    <FormSection icon="heart" title="Stress & wellbeing" description="How stressed you feel on a typical day.">
      <div className={`field span-2 ${error ? 'has-error' : ''}`}>
        <span className="field-label" id="stress-label">Stress level</span>
        <div className="segmented" role="radiogroup" aria-labelledby="stress-label">
          {STRESS_LEVELS.map((level) => (
            <button
              key={level}
              type="button"
              role="radio"
              aria-checked={values.Stress_Level === level}
              className={values.Stress_Level === level ? 'active' : ''}
              onClick={() => onChange('Stress_Level', level)}
            >
              {level}
            </button>
          ))}
        </div>
        {error && <p className="field-error" role="alert">{error}</p>}
      </div>
    </FormSection>
  );
}
