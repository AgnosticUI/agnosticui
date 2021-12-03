import { Meta } from '@storybook/react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { action } from '@storybook/addon-actions';
import { Select } from '../Select';

const actionsData = {
  change: (event: React.FormEvent<HTMLSelectElement>) => {
    action('change');
    const element = event.target as HTMLSelectElement;
    /* eslint-disable-next-line no-console */
    console.log('onChange -- element.value: ', element.value);
  },
};

export default {
  title: 'AG-React (Beta)/Select',
  component: Select,
  on: {
    ...actionsData,
  },
} as Meta;

export const Default = () => (
  <Select
    uniqueId="sel1"
    name="select1"
    labelCopy="Select the best tennis player of all time"
    onChange={actionsData.change}
    options={[
      { value: 'andre', label: 'Andre Agassi' },
      { value: 'serena', label: 'Serena Williams' },
      { value: 'mac', label: 'John McEnroe' },
      { value: 'borg', label: 'Bjorn Borg' },
      { value: 'althea', label: 'Althea Gibson' },
      { value: 'roger', label: 'Roger Federer' },
    ]}
  />
);

export const FirstOptionLabel = () => (
  <>
    <p className="mbe24">
      You can pass in
      {' '}
      <code>defaultOptionLabel</code>
      {' '}
      to specify the text copy for the first option
      (e.g. as we have done here with: &ldquo;Select your favorite tennis player&rdquo;)
    </p>
    <Select
      defaultOptionLabel="Select your favorite tennis player of all-time"
      uniqueId="sel1b"
      name="select1b"
      labelCopy="Select the best tennis player of all time"
      options={[
        { value: 'andre', label: 'Andre Agassi' },
        { value: 'serena', label: 'Serena Williams' },
        { value: 'mac', label: 'John McEnroe' },
        { value: 'borg', label: 'Bjorn Borg' },
        { value: 'althea', label: 'Althea Gibson' },
        { value: 'roger', label: 'Roger Federer' },
      ]}
    />
  </>
);

export const Disabled = () => (
  <Select
    uniqueId="sel2"
    name="select2"
    isDisabled
    labelCopy="Select the best tennis player of all time"
    options={[
      { value: 'andre', label: 'Andre Agassi' },
      { value: 'serena', label: 'Serena Williams' },
      { value: 'mac', label: 'John McEnroe' },
      { value: 'borg', label: 'Bjorn Borg' },
      { value: 'althea', label: 'Althea Gibson' },
      { value: 'roger', label: 'Roger Federer' },
    ]}
  />
);

export const Small = () => (
  <Select
    uniqueId="sel3"
    name="select3"
    size="small"
    labelCopy="Select the best tennis player of all time"
    options={[
      { value: 'andre', label: 'Andre Agassi' },
      { value: 'serena', label: 'Serena Williams' },
      { value: 'mac', label: 'John McEnroe' },
      { value: 'borg', label: 'Bjorn Borg' },
      { value: 'althea', label: 'Althea Gibson' },
      { value: 'roger', label: 'Roger Federer' },
    ]}
  />
);

export const Large = () => (
  <Select
    uniqueId="sel4"
    name="select4"
    size="large"
    labelCopy="Select the best tennis player of all time"
    options={[
      { value: 'andre', label: 'Andre Agassi' },
      { value: 'serena', label: 'Serena Williams' },
      { value: 'mac', label: 'John McEnroe' },
      { value: 'borg', label: 'Bjorn Borg' },
      { value: 'althea', label: 'Althea Gibson' },
      { value: 'roger', label: 'Roger Federer' },
    ]}
  />
);

export const Multiple = () => (
  <Select
    uniqueId="sel5"
    name="select5"
    isMultiple
    multipleSize={5}
    labelCopy="Select the best tennis player of all time"
    options={[
      { value: 'andre', label: 'Andre Agassi' },
      { value: 'serena', label: 'Serena Williams' },
      { value: 'mac', label: 'John McEnroe' },
      { value: 'borg', label: 'Bjorn Borg' },
      { value: 'althea', label: 'Althea Gibson' },
      { value: 'roger', label: 'Roger Federer' },
    ]}
  />
);
