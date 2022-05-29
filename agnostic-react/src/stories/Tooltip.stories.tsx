// eslint-disable-next-line import/no-extraneous-dependencies
import { Meta } from '@storybook/react';
import { Tooltip } from '../Tooltip';

export default {
  title: 'AG—React (Beta)/Tooltip',
  component: Tooltip,
} as Meta;

export const Default = () => (
  <div
    style={{ width: '200px', margin: '0 auto' }}
    className="flex flex-column items-center text-center mbs64"
  >
    <Tooltip contentChildren={<span>Tooltip content.</span>}>I have a tooltip (top)</Tooltip>
    <div className="mbe24" />
    <Tooltip position="bottom" contentChildren={<span>Tooltip content.</span>}>
      I have a tooltip (bottom)
    </Tooltip>
    <div className="mbe24" />
    <Tooltip position="left" contentChildren={<span>Tooltip content.</span>}>
      I have a tooltip (left)
    </Tooltip>
    <div className="mbe24" />
    <Tooltip position="right" contentChildren={<span>Tooltip content.</span>}>
      I have a tooltip (right)
    </Tooltip>
  </div>
);
