// eslint-disable-next-line import/no-extraneous-dependencies
import { Meta } from '@storybook/react';
import { Tooltip } from '../Tooltip';

export default {
  title: 'AG—React (Beta)/Tooltip',
  component: Tooltip,
} as Meta;

/*
  label: string;
  placement?: Placement;
  children: JSX.Element; */

export const Default = () => (
  <div
    style={{ width: '200px', margin: '0 auto' }}
    className="flex flex-column items-center text-center mbs64"
  >
    <Tooltip label="Tooltip hover text…">
      <span>I have a tooltip. Hover me!</span>
    </Tooltip>
    <div className="mbe24" />
    <Tooltip placement="bottom" label="Tooltip hover text…">
      <span>Tooltip content.</span>
    </Tooltip>
    <div className="mbe24" />
    <Tooltip placement="left" label="Tooltip hover text…">
      <span>I have a tooltip (left)</span>
    </Tooltip>
    <div className="mbe24" />
    <Tooltip placement="right" label="Tooltip hover text…">
      <span>I have a tooltip (right)</span>
    </Tooltip>
  </div>
);
