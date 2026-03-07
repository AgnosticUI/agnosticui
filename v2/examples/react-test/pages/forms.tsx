import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ReactInput } from '../src/components/ag/Input/react/ReactInput';
import { ReactCheckbox } from '../src/components/ag/Checkbox/react/ReactCheckbox';
import { ReactRadio } from '../src/components/ag/Radio/react/ReactRadio';
import { ReactSelect } from '../src/components/ag/Select/react/ReactSelect';
import { ReactToggle } from '../src/components/ag/Toggle/react/ReactToggle';
import { ReactSlider } from '../src/components/ag/Slider/react/ReactSlider';
import { ReactCombobox } from '../src/components/ag/Combobox/react/ReactCombobox';
import { ReactRating } from '../src/components/ag/Rating/react/ReactRating';

function FormsPage() {
  return (
    <main style={{ padding: '20px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <h1>Forms</h1>
      <ReactInput label="Name" placeholder="Enter name" />
      <ReactCheckbox labelText="Accept terms" />
      <ReactRadio labelText="Option A" name="demo" value="a" />
      <ReactSelect label="Choose">
        <option value="1">One</option>
        <option value="2">Two</option>
      </ReactSelect>
      <ReactToggle label="Enable" />
      <ReactSlider label="Volume" min={0} max={100} value={50} />
      <ReactCombobox
        label="Pick one"
        options={[{ value: 'a', label: 'Alpha' }, { value: 'b', label: 'Beta' }]}
      />
      <ReactRating label="Rating" value={3} />
    </main>
  );
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <FormsPage />
  </StrictMode>
);
