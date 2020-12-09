import ChoiceInput from './ChoiceInput.svelte';
import { action } from '@storybook/addon-actions';

const actionsData = {
  'click': action('click'),
  'blur': action('blur'),
  'change': action('change'),
  'input': action('input'),
  'focus': action('focus'),
}

const reusableOptions = [{
  name: "frequency",
  value: "daily",
  label: "Daily",
}, {
  name: "frequency",
  value: "weekly",
  label: "Weekly",
}, {
  name: "frequency",
  value: "monthly",
  label: "Monthly",
}];

export default {
  title: 'ChoiceInput',
  component: ChoiceInput,
};

const Template = ({ ...args }) => ({
  Component: ChoiceInput,
  props: args,
  on: {
    ...actionsData,
  }
});

export const Default = Template.bind({});
Default.args = {
  uniqueId: "myUniqueId",
  label: "Default input",
  type: "checkbox",
  size: "large",
  options: reusableOptions,
  legendLabel: "Checkbox legend",
};
