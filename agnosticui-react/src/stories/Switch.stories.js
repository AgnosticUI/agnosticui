import React from 'react';
import { action } from '@storybook/addon-actions';
import Switch from './Switch.js';

const actionsData = {
  change: action('change'),
};

export default {
  title: 'AG—React/Switch',
  component: Switch,
  on: {
    ...actionsData,
  },
};

export const All = () => (
  <>
    <Switch id="1" label="Switch small" size="small" onChange={action('change')} />
    <Switch id="2" label="Switch default" onChange={action('change')} />
    <Switch id="3" label="Switch large" size="large" onChange={action('change')} />
    <Switch
      id="4"
      label="Switch prechecked"
      size="large"
      isChecked={true}
      onChange={action('change')}
    />
    <Switch id="5" label="Switch disabled" size="large" isChecked={true} disabled={true} />
    <Switch id="6" label="Switch action" size="large" isAction={true} onChange={action('change')} />
    <Switch
      id="7"
      label="Switch bordered"
      size="large"
      isBordered={true}
      onChange={action('change')}
    />
    <Switch
      id="8"
      label="Switch bordered action"
      size="large"
      isAction={true}
      isBordered={true}
      onChange={action('change')}
    />
    <Switch
      id="9"
      label="Switch label on right"
      labelPosition="right"
      onChange={action('change')}
    />
    <Switch
      id="10"
      label="Switch right bordered"
      labelPosition="right"
      isBordered={true}
      onChange={action('change')}
    />
    <Switch
      id="11"
      label="Switch right action"
      labelPosition="right"
      isAction={true}
      onChange={action('change')}
    />
    <Switch
      id="12"
      label="Switch right action bordered"
      labelPosition="right"
      isAction={true}
      isBordered={true}
      onChange={action('change')}
    />
    <Switch
      id="13"
      label="Switch right action bordered disabled"
      disabled={true}
      labelPosition="right"
      isAction={true}
      isBordered={true}
    />
  </>
);
