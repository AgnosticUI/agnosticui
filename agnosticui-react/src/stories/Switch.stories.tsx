// eslint-disable-next-line import/no-extraneous-dependencies
import { action } from '@storybook/addon-actions';
import { Switch } from '../Switch';

const actionsData = {
  change: action('change'),
};

export default {
  title: 'AG—React (Beta)/Switch',
  component: Switch,
  on: {
    ...actionsData,
  },
};

export const All = () => (
  <>
    <Switch id="1" label="Switch small" size="small" onChange={action('change')} />
    <Switch id="3" label="Switch default" onChange={action('change')} />
    <Switch id="4" label="Switch large" size="large" onChange={action('change')} />
    <Switch id="5" label="Switch prechecked" size="large" isChecked onChange={action('change')} />
    <Switch id="6" label="Switch disabled" size="large" isChecked isDisabled />
    <Switch id="7" label="Switch action" size="large" isAction onChange={action('change')} />
    <Switch id="8" label="Switch bordered" size="large" isBordered onChange={action('change')} />
    <Switch
      id="9"
      label="Switch bordered action"
      size="large"
      isAction
      isBordered
      onChange={action('change')}
    />
    <Switch
      id="10"
      label="Switch label on right"
      labelPosition="right"
      onChange={action('change')}
    />
    <Switch
      id="11"
      label="Switch right bordered"
      labelPosition="right"
      isBordered
      onChange={action('change')}
    />
    <Switch
      id="12"
      label="Switch right action"
      labelPosition="right"
      isAction
      onChange={action('change')}
    />
    <Switch
      id="13"
      label="Switch right action bordered"
      labelPosition="right"
      isAction
      isBordered
      onChange={action('change')}
    />
    <Switch
      id="14"
      label="Switch right action bordered disabled"
      isDisabled
      labelPosition="right"
      isAction
      isBordered
    />
  </>
);
