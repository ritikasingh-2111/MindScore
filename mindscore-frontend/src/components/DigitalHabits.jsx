import { FormSection, SelectField, SliderField } from './FormControls.jsx';
import { PLATFORMS, PURPOSES } from '../utils/constants.js';

export default function DigitalHabits({ values, errors, onChange }) {
  return (
    <FormSection icon="phone" title="Digital habits" description="How you use social media and your phone.">
      <SelectField id="Most_Used_Platform" label="Most used platform" options={PLATFORMS}
        value={values.Most_Used_Platform} error={errors.Most_Used_Platform} onChange={onChange} />
      <SelectField id="Purpose_Of_Use" label="Main purpose of use" options={PURPOSES}
        value={values.Purpose_Of_Use} error={errors.Purpose_Of_Use} onChange={onChange} />
      <SliderField id="Avg_Daily_Usage_Hours" label="Average daily usage" min={0} max={24} step={0.5} unit="hrs"
        value={values.Avg_Daily_Usage_Hours} error={errors.Avg_Daily_Usage_Hours} onChange={onChange} />
      <SliderField id="Daily_Unlocks" label="Daily phone unlocks" min={0} max={300} unit="times" unbounded
        hint="Slider goes to 300; type a higher number if needed."
        value={values.Daily_Unlocks} error={errors.Daily_Unlocks} onChange={onChange} />
    </FormSection>
  );
}
