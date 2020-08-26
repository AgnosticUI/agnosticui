import Button from './Button.svelte';

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    label: { control: 'text' },
    mode: { control: 'text' },
    isBordered: { control: 'boolean' },
    isDisabled: { control: 'boolean' },
    isRaised: { control: 'boolean' },
    isRounded: { control: 'boolean' },
    size: {
      control: { type: 'select', options: ['small', 'medium', 'large'] },
    },
    onClick: { action: 'onClick' },
  },
};

const Template = ({ onClick, ...args }) => ({
  Component: Button,
  props: args,
  on: {
    click: onClick,
  },
});

export const Primary = Template.bind({});
Primary.args = {
  label: 'Button',
  mode: 'primary',
};

export const PrimaryBordered = Template.bind({});
PrimaryBordered.args = {
  label: 'Primary Bordered',
  mode: 'primary',
  isBordered: true,
};

export const PrimaryRounded = Template.bind({});
PrimaryRounded.args = {
  label: 'Primary Rounded',
  mode: 'primary',
  isRounded: true,
};

export const PrimaryBorderedRounded = Template.bind({});
PrimaryBorderedRounded.args = {
  label: 'Primary Borded Rounded',
  mode: 'primary',
  isBordered: true,
  isRounded: true,
};

export const Default = Template.bind({});
Default.args = {
  label: 'Default',
};


export const DefaultRaised = Template.bind({});
DefaultRaised.args = {
  label: 'Default Raised',
  isRaised: true,
};

export const DefaultBordered = Template.bind({});
DefaultBordered.args = {
  label: 'Default Bordered',
  isBordered: true,
};

export const DefaultRounded = Template.bind({});
DefaultRounded.args = {
  label: 'Default Rounded',
  isRounded: true,
};

export const DefaultBorderedRounded = Template.bind({});
DefaultBorderedRounded.args = {
  label: 'Default Bordered Rounded',
  isBordered: true,
  isRounded: true,
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: 'Disabled',
  isDisabled: true,
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  label: 'Large',
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  label: 'Small',
};


/*

TODO -- icon left / right

<svg class="icon-left" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true">
  <path fill="currentColor" fill-rule="evenodd"
    d="M9 12h2l-3 3-3-3h2V7h2v5zm3-8c0-.44-.91-3-4.5-3C5.08 1 3 2.92 3 5 1.02 5 0 6.52 0 8c0 1.53 1 3 3 3h3V9.7H3C1.38 9.7 1.3 8.28 1.3 8c0-.17.05-1.7 1.7-1.7h1.3V5c0-1.39 1.56-2.7 3.2-2.7 2.55 0 3.13 1.55 3.2 1.8v1.2H12c.81 0 2.7.22 2.7 2.2 0 2.09-2.25 2.2-2.7 2.2h-2V11h2c2.08 0 4-1.16 4-3.5C16 5.06 14.08 4 12 4z">
  </path>
</svg> Download</button>
*/
