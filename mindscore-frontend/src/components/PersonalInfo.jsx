import { FormSection, SelectField, SliderField, TextField } from './FormControls.jsx';
import { GENDERS, ACADEMIC_LEVELS, COUNTRIES } from '../utils/constants.js';

export default function PersonalInfo({ values, errors, onChange }) {
  return (
    <FormSection icon="user" title="Personal information" description="A little context about you.">
      <SliderField id="Age" label="Age" min={10} max={100} unit="yrs"
        value={values.Age} error={errors.Age} onChange={onChange} />
      <SelectField id="Gender" label="Gender" options={GENDERS}
        value={values.Gender} error={errors.Gender} onChange={onChange} />
      <TextField id="Country" label="Country" placeholder="Start typing, e.g. India"
        listId="country-list" options={COUNTRIES}
        value={values.Country} error={errors.Country} onChange={onChange} />
      <SelectField id="Academic_Level" label="Academic level" options={ACADEMIC_LEVELS}
        value={values.Academic_Level} error={errors.Academic_Level} onChange={onChange} />
    </FormSection>
  );
}
