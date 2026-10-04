import {
  GENDERS, ACADEMIC_LEVELS, PLATFORMS, PURPOSES, STRESS_LEVELS,
} from './constants.js';

// Mirrors the Pydantic rules in main.py.
export function validate(v) {
  const errors = {};

  const choice = (key, label, options) => {
    if (!v[key]) errors[key] = `Please choose your ${label}.`;
    else if (!options.includes(v[key])) errors[key] = 'Choose one of the listed options.';
  };

  const number = (key, label, min, max, whole = false) => {
    const raw = v[key];
    if (raw === '' || raw === null || raw === undefined || Number.isNaN(Number(raw))) {
      errors[key] = `${label} is required.`;
      return;
    }
    const n = Number(raw);
    if (whole && !Number.isInteger(n)) errors[key] = `${label} must be a whole number.`;
    else if (n < min) errors[key] = `${label} must be at least ${min}.`;
    else if (max !== undefined && n > max) errors[key] = `${label} can be at most ${max}.`;
  };

  number('Age', 'Age', 10, 100, true);
  choice('Gender', 'gender', GENDERS);
  if (!String(v.Country).trim()) errors.Country = 'Country is required.';
  choice('Academic_Level', 'academic level', ACADEMIC_LEVELS);
  choice('Most_Used_Platform', 'most used platform', PLATFORMS);
  choice('Purpose_Of_Use', 'purpose of use', PURPOSES);
  number('Avg_Daily_Usage_Hours', 'Daily usage', 0, 24);
  number('Daily_Unlocks', 'Daily unlocks', 0, undefined, true);
  number('Study_Hours', 'Study hours', 0, 24);
  number('Physical_Activity_Hours', 'Physical activity', 0, 4);
  number('Sleep_Hours_Per_Night', 'Sleep hours', 0, 24);
  choice('Stress_Level', 'stress level', STRESS_LEVELS);

  return errors;
}
