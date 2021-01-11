import React from 'react';
import ChoiceInput from './ChoiceInput.js';

export default {
  title: 'ChoiceInput',
  component: ChoiceInput,
};

const reusableOptions = [
  {
    name: 'frequency',
    value: 'daily',
    label: 'Daily',
  },
  {
    name: 'frequency',
    value: 'weekly',
    label: 'Weekly',
  },
  {
    name: 'frequency',
    value: 'monthly',
    label: 'Monthly',
  },
];

const disabledOptions = ['weekly', 'monthly'];
export const All = () => (
  <>
    <ChoiceInput type="checkbox" options={reusableOptions} legendLabel="Checkbox legend" />
    <ChoiceInput
      isDisabled={true}
      type="checkbox"
      options={reusableOptions}
      legendLabel="Checkbox disabled"
    />
    <ChoiceInput
      disabledOptions={disabledOptions}
      type="checkbox"
      options={reusableOptions}
      legendLabel="Checkbox specific options disabled"
    />
    <ChoiceInput
      type="checkbox"
      isFieldset={false}
      options={reusableOptions}
      legendLabel="Checkbox fieldset hidden"
    />
    <ChoiceInput
      type="checkbox"
      isInline={true}
      options={reusableOptions}
      legendLabel="Checkbox inline"
    />
    <ChoiceInput
      type="checkbox"
      isInline={true}
      size="small"
      options={reusableOptions}
      legendLabel="Checkbox small"
    />
    <ChoiceInput
      type="checkbox"
      isInline={true}
      size="large"
      options={reusableOptions}
      legendLabel="Checkbox large"
    />
    <ChoiceInput
      type="checkbox"
      isInline={true}
      size="large"
      checkedOptions={['daily', 'weekly']}
      options={reusableOptions}
      legendLabel="Checkbox prechecked options"
    />
    <ChoiceInput type="radio" options={reusableOptions} legendLabel="Radio legend" />
    <ChoiceInput
      isDisabled={true}
      type="radio"
      options={reusableOptions}
      legendLabel="Radio disabled"
    />
    <ChoiceInput
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
    />
    <ChoiceInput
      type="radio"
      isFieldset={false}
      options={[
        {
          name: 'es',
          value: 'uno',
          label: 'uno',
        },
        {
          name: 'es',
          value: 'dos',
          label: 'dos',
        },
        {
          name: 'es',
          value: 'tres',
          label: 'tres',
        },
      ]}
      legendLabel="Radio fieldset hidden"
    />
    <ChoiceInput
      type="radio"
      isInline={true}
      options={[
        {
          name: 'colors',
          value: 'blue',
          label: 'Blue',
        },
        {
          name: 'colors',
          value: 'red',
          label: 'Red',
        },
        {
          name: 'colors',
          value: 'silver',
          label: 'Silver',
        },
      ]}
      legendLabel="Radio inline"
    />
    <ChoiceInput
      type="radio"
      isInline={true}
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
    />
    <ChoiceInput
      type="radio"
      isInline={true}
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
    />
    <ChoiceInput
      type="radio"
      isInline={true}
      size="large"
      checkedOptions={['charlie']}
      options={[
        {
          name: 'solo',
          value: 'stevie',
          label: 'Stevie Wonder',
        },
        {
          name: 'solo',
          value: 'charlie',
          label: 'Charlie Wilson',
        },
        {
          name: 'solo',
          value: 'whitney',
          label: 'Whitney Houston',
        },
      ]}
      legendLabel="Radio prechecked option"
    />
  </>
);
