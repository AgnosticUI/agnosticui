import { Meta } from '@storybook/react';
import { Spinner } from '../Spinner';

export default {
  title: 'AG—React (Beta)/Spinner',
  component: Spinner,
} as Meta;

const style = { '--agnostic-spinner-color': 'salmon' } as React.CSSProperties;

export const Default = () => <Spinner />;
export const Small = () => <Spinner size="small" />;
export const Large = () => <Spinner size="large" />;
export const XLarge = () => <Spinner size="xlarge" />;
export const Custom = () => (
  <div style={style}>
    <p className="mbe24">
      Customize the spinner color by defining the
      {' '}
      <code>--agnostic-spinner-color: YOURCOLOR</code>
      {' '}
      css custom property on any ancester of the
      {' '}
      <code>&lt;Spinner&gt;</code>
      {' '}
      element.
    </p>
    <Spinner style={style} size="xlarge" />
  </div>
);
