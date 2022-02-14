// eslint-disable-next-line import/no-extraneous-dependencies
import { action } from '@storybook/addon-actions';
import { Meta } from '@storybook/react';
import { Close } from '../Close';

const actionsData = {
  click: action('click'),
};

export default {
  title: 'AG—React (Beta)/Close',
  component: Close,
  on: {
    ...actionsData,
  },
} as Meta;

export const Default = () => <Close onClick={action('click')} />;
export const Small = () => <Close size="small" onClick={action('click')} />;
export const Large = () => <Close size="large" onClick={action('click')} />;
export const XLarge = () => <Close size="xlarge" onClick={action('click')} />;
