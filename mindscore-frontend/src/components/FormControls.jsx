import Icon from './Icon.jsx';

export function FormSection({ icon, title, description, children }) {
  return (
    <fieldset className="form-section">
      <legend className="visually-hidden">{title}</legend>
      <div className="form-section-head">
        <span className="form-section-icon"><Icon name={icon} size={22} /></span>
        <div>
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
      </div>
      <div className="form-grid">{children}</div>
    </fieldset>
  );
}

export function Field({ id, label, error, hint, className = '', children }) {
  return (
    <div className={`field ${error ? 'has-error' : ''} ${className}`}>
      <label htmlFor={id}>{label}</label>
      {children}
      {error ? <p className="field-error" id={`${id}-error`} role="alert">{error}</p>
        : hint ? <p className="field-hint">{hint}</p> : null}
    </div>
  );
}

export function SelectField({ id, label, value, options, onChange, error, placeholder = 'Select an option' }) {
  return (
    <Field id={id} label={label} error={error}>
      <div className="select-wrap">
        <select
          id={id}
          value={value}
          onChange={(e) => onChange(id, e.target.value)}
          aria-invalid={Boolean(error)}
          aria-describedby={error ? `${id}-error` : undefined}
          className={value ? '' : 'is-placeholder'}
        >
          <option value="" disabled>{placeholder}</option>
          {options.map((o) => <option key={o} value={o}>{o}</option>)}
        </select>
      </div>
    </Field>
  );
}

export function TextField({ id, label, value, onChange, error, placeholder, listId, options = [] }) {
  return (
    <Field id={id} label={label} error={error}>
      <input
        id={id}
        type="text"
        value={value}
        placeholder={placeholder}
        list={listId}
        autoComplete="off"
        onChange={(e) => onChange(id, e.target.value)}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${id}-error` : undefined}
      />
      {listId && (
        <datalist id={listId}>
          {options.map((o) => <option key={o} value={o} />)}
        </datalist>
      )}
    </Field>
  );
}

// Slider with a number box beside it. `unbounded` lets the number box exceed the slider's max.
export function SliderField({
  id, label, value, onChange, error, min, max, step = 1, unit = '', hint, unbounded = false,
}) {
  const n = Number(value);
  const pct = Number.isNaN(n) || value === '' ? 0 : Math.min(100, Math.max(0, ((n - min) / (max - min)) * 100));
  return (
    <Field id={id} label={label} error={error} hint={hint}>
      <div className="slider-row">
        <input
          type="range"
          className="slider"
          min={min}
          max={max}
          step={step}
          value={value === '' ? min : Math.min(Math.max(n, min), max)}
          style={{ '--pct': `${pct}%` }}
          onChange={(e) => onChange(id, e.target.value)}
          aria-label={`${label} slider`}
        />
        <div className="number-box">
          <input
            id={id}
            type="number"
            inputMode="decimal"
            min={min}
            max={unbounded ? undefined : max}
            step={step}
            value={value}
            onChange={(e) => onChange(id, e.target.value)}
            aria-invalid={Boolean(error)}
            aria-describedby={error ? `${id}-error` : undefined}
          />
          {unit && <span>{unit}</span>}
        </div>
      </div>
    </Field>
  );
}
