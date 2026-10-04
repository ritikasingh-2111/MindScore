import { FormSection, SliderField } from './FormControls.jsx';

export default function LifestyleSection({ values, errors, onChange }) {
  return (
    <FormSection icon="leaf" title="Lifestyle & academics" description="Your typical day, study, movement, and rest.">
      <SliderField id="Study_Hours" label="Study hours per day" min={0} max={24} step={0.5} unit="hrs"
        value={values.Study_Hours} error={errors.Study_Hours} onChange={onChange} />
      <SliderField id="Physical_Activity_Hours" label="Physical activity per day" min={0} max={4} step={0.25} unit="hrs"
        value={values.Physical_Activity_Hours} error={errors.Physical_Activity_Hours} onChange={onChange} />
      <SliderField id="Sleep_Hours_Per_Night" label="Sleep per night" min={0} max={24} step={0.5} unit="hrs"
        className="span-2"
        value={values.Sleep_Hours_Per_Night} error={errors.Sleep_Hours_Per_Night} onChange={onChange} />
    </FormSection>
  );
}
