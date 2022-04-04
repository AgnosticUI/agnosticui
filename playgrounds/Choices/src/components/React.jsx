import "agnostic-react/dist/esm/index.css";
import { useState } from "react";
import { Button, ChoiceInput } from "agnostic-react";

const testOptions = [
  {
    name: "frequency",
    value: "daily",
    label: "Daily",
  },
  {
    name: "frequency",
    value: "weekly",
    label: "Weekly",
  },
  {
    name: "frequency",
    value: "monthly",
    label: "Monthly",
  },
];

const disabledOptions = ['weekly', 'monthly'];


export default function React() {
  const [agreedToTos, setAgreedToTos] = useState(false);
  const toggleTosAgreedTo = () => {
    setAgreedToTos(!agreedToTos);
  };

  const handleChange = checkedItems => console.log(checkedItems)

  return (
    <section className="mbe40">
      <div className="h4 mbe32 flex items-center">
        <img width="24" height="24" src="/assets/React-icon.svg" alt="React logo" className="mie12" />React  Choice Inputs
      </div>
      <ChoiceInput
        id="1"
        type="checkbox"
        options={testOptions}
        legendLabel="Checkbox legend"
        onChange={ handleChange }
      />
      <ChoiceInput
        id="2"
        isDisabled
        type="checkbox"
        options={testOptions}
        legendLabel="Checkbox disabled"
        onChange={ handleChange }
      />
      <ChoiceInput
        id="3"
        disabledOptions={disabledOptions}
        type="checkbox"
        options={testOptions}
        legendLabel="Checkbox specific options disabled"
        onChange={ handleChange }
      />
      <ChoiceInput
        id="4"
        type="checkbox"
        isFieldset={false}
        options={testOptions}
        legendLabel="Checkbox fieldset hidden"
        onChange={ handleChange }
      />
      <ChoiceInput
        id="5"
        type="checkbox"
        isInline
        options={testOptions}
        legendLabel="Checkbox inline"
        onChange={ handleChange }
      />
      <ChoiceInput
        id="6"
        type="checkbox"
        isInline
        size="small"
        options={testOptions}
        legendLabel="Checkbox small"
        onChange={ handleChange }
      />
      <ChoiceInput
        id="7"
        type="checkbox"
        isInline
        size="large"
        options={testOptions}
        legendLabel="Checkbox large"
        onChange={ handleChange }
      />
      <ChoiceInput
        id="8"
        type="checkbox"
        isInline
        size="large"
        checkedOptions={["daily", "weekly"]}
        options={testOptions}
        legendLabel="Checkbox prechecked options"
        onChange={ handleChange }
      />
      <ChoiceInput
        id="10"
        type="radio"
        options={testOptions}
        legendLabel="Radio legend"
        onChange={ handleChange }
      />
      <ChoiceInput
        id="11"
        isDisabled
        type="radio"
        options={testOptions}
        legendLabel="Radio disabled"
        onChange={ handleChange }
      />
      <ChoiceInput
        id="12"
        disabledOptions={['two']}
        type="radio"
        options={[
          {
            name: 'numbers',
            value: 'one',
            label: 'one',
          },
          {
            name: 'numbers',
            value: 'two',
            label: 'two',
          },
          {
            name: 'numbers',
            value: 'three',
            label: 'three',
          },
        ]}
        legendLabel="Radio specific options disabled"
        onChange={ handleChange }
      />
      <ChoiceInput
        id="14"
        type="radio"
        isInline
        size="small"
        options={[
          {
            name: 'shape',
            value: 'square',
            label: 'Square',
          },
          {
            name: 'shape',
            value: 'circle',
            label: 'Circle',
          },
        ]}
        legendLabel="Radio small"
        onChange={ handleChange }
      />
      <ChoiceInput
        id="15"
        type="radio"
        isInline
        size="large"
        options={[
          {
            name: 'bands',
            value: 'bonjovi',
            label: 'Bon Jovi',
          },
          {
            name: 'bands',
            value: 'stones',
            label: 'Rolling Stones',
          },
          {
            name: 'bands',
            value: 'isleybros',
            label: 'Isley Brothers',
          },
        ]}
        legendLabel="Radio large"
        onChange={ handleChange }
      />
      <div className="mbs24 mbe24">
        <p className="mbe16">Pass <code>false</code> to <code>:is-fieldset</code> (Vue) or
          <code>isFieldset</code> (React, Svelte) to hide the fieldset from sighted
          users. Also, we can use a reactive boolean ref to toggle button's <code>isDisabled</code>:
        </p>
        <ChoiceInput
          type="checkbox"
          options={
            [
              { name: 'tos', value: 'agrees', label: 'I have read and agree to the Terms of Service'}
            ]
          }
          legend-label="Large"
          size="large"
          isFieldset={false}
          onChange={toggleTosAgreedTo}
        />
      </div>
      <Button
        mode="primary"
        isDisabled={!agreedToTos}
      >Submit</Button>
    </section>
  );
}
