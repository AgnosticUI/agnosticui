// eslint-disable-next-line import/no-extraneous-dependencies
import { action } from '@storybook/addon-actions';
import { ChoiceInput } from '../ChoiceInput';

const actionsData = {
  change: action('change'),
};

export default {
  title: 'AG—React (Beta)/ChoiceInput',
  component: ChoiceInput,
  on: {
    ...actionsData,
  },
};

const opts = [
  {
    value: 'daily',
    label: 'Daily',
  },
  {
    value: 'weekly',
    label: 'Weekly',
  },
  {
    value: 'monthly',
    label: 'Monthly',
  },
];
const optionNames = [
  'frequency',
  'schedule',
  'howoften',
  'when',
  'letmeknow',
  'whenz',
  'often',
  'freq',
  'frekuency',
  'whattimes',
  'somewhenz',
  'letimes',
];
const options = [];
for (let i = 0; i < optionNames.length; i += 1) {
  const optionName = optionNames[i];
  const optionsWithNames = [];
  opts.forEach((o) => {
    const copy = { ...o, name: optionName };
    optionsWithNames.push(copy);
  });
  options.push(optionsWithNames);
}

const disabledOptions = ['weekly', 'monthly'];

export const All = () => (
  <>
    <ChoiceInput
      id="1"
      type="checkbox"
      options={options[0]}
      legendLabel="Checkbox legend"
      onChange={action('change')}
    />
    <ChoiceInput
      id="2"
      isDisabled
      type="checkbox"
      options={options[1]}
      legendLabel="Checkbox disabled"
      onChange={action('change')}
    />
    <ChoiceInput
      id="3"
      disabledOptions={disabledOptions}
      type="checkbox"
      options={options[2]}
      legendLabel="Checkbox specific options disabled"
      onChange={action('change')}
    />
    <ChoiceInput
      id="1abc"
      type="checkbox"
      options={options[3]}
      legendLabel="Checkbox invalid"
      isInvalid
      onChange={action('change')}
    />
    <ChoiceInput
      id="4"
      type="checkbox"
      isFieldset={false}
      options={options[4]}
      legendLabel="Checkbox fieldset hidden"
      onChange={action('change')}
    />
    <ChoiceInput
      id="5"
      type="checkbox"
      isInline
      options={options[5]}
      legendLabel="Checkbox inline"
      onChange={action('change')}
    />
    <ChoiceInput
      id="6"
      type="checkbox"
      isInline
      size="small"
      options={options[6]}
      legendLabel="Checkbox small"
      onChange={action('change')}
    />
    <ChoiceInput
      id="7"
      type="checkbox"
      isInline
      size="large"
      options={options[7]}
      legendLabel="Checkbox large"
      onChange={action('change')}
    />
    <ChoiceInput
      id="8"
      type="checkbox"
      isInline
      size="large"
      checkedOptions={['daily', 'weekly']}
      options={options[8]}
      legendLabel="Checkbox prechecked options"
      onChange={action('change')}
    />
    <ChoiceInput
      id="8b"
      isInline
      isSkinned={false}
      options={options[9]}
      legendLabel="Checkbox unskinned (fieldset and legend unstyled)"
      onChange={action('change')}
    />
    <ChoiceInput
      id="9"
      type="radio"
      options={options[10]}
      legendLabel="Radio legend"
      onChange={action('change')}
    />
    <ChoiceInput
      id="10"
      isDisabled
      type="radio"
      options={options[11]}
      legendLabel="Radio disabled"
      onChange={action('change')}
    />
    <ChoiceInput
      id="11"
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
      onChange={action('change')}
    />
    <ChoiceInput
      id="12"
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
      onChange={action('change')}
    />
    <ChoiceInput
      id="13"
      type="radio"
      isInline
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
      onChange={action('change')}
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
      onChange={action('change')}
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
      onChange={action('change')}
    />
    <ChoiceInput
      id="16"
      type="radio"
      isInline
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
      onChange={action('change')}
    />
    <ChoiceInput
      id="17"
      type="radio"
      isInline
      isSkinned={false}
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
      legendLabel="Radio unskinned (fieldset and legend unstyled)"
      onChange={action('change')}
    />
  </>
);
