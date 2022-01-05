import { Meta } from '@storybook/react';
import { Loader } from '../Loader';

export default {
  title: 'AG—React (Beta)/Loader',
  component: Loader,
} as Meta;

const style = { '--agnostic-loading-color': 'salmon' } as React.CSSProperties;

export const Default = () => <Loader />;
export const Small = () => <Loader size="small" />;
export const Large = () => <Loader size="large" />;
export const Custom = () => (
  <div style={style}>
    <p className="mbe24">
      Customize the loader color by defining the
      {' '}
      <code>--agnostic-loading-color: YOURCOLOR</code>
      {' '}
      css custom property on any ancester of the
      {' '}
      <code>&lt;Loader&gt;</code>
      {' '}
      element.
    </p>
    <Loader style={style} size="large" />
  </div>
);
