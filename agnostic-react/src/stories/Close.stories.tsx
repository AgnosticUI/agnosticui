import { Meta } from '@storybook/react';
import { Close } from '../Close';

export default {
  title: 'AG—React (Beta)/Close',
  component: Close,
} as Meta;

export const Default = () => <Close />;
export const Small = () => <Close size="small" />;
export const Large = () => <Close size="large" />;
export const XLarge = () => <Close size="xlarge" />;
