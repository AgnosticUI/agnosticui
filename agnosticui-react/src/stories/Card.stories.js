
import React from 'react';
import Card from './Card.js';

export default {
  title: 'Card',
  component: Card,
  argTypes: {
    css: { control: 'text' },
    isSkinned: { control: 'boolean' },
    isStacked: { control: 'boolean' },
  },
};

const Template = (args) => <Card {...args}>
  <>
    <div style={{ padding: 24 }}>Hello</div>
    <div style={{ padding: 24 }}>World</div>
  </>
</Card>;

export const CardDefault = Template.bind({});
CardDefault.args = {};

export const CardStacked = Template.bind({});
CardStacked.args = {
  isStacked: true,
};

export const CardUnskinned = Template.bind({});
CardUnskinned.args = {
  isSkinned: false,
};

export const CardCustomCSS = Template.bind({});
CardCustomCSS.args = {
  css: 'foo-bar'
};
