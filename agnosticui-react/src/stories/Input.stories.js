import React from 'react';
import uuid from 'react-uuid';
import { action } from '@storybook/addon-actions';
import Input from './Input';

const actionsData = {
  blur: action('blur'),
  change: action('change'),
  focus: action('focus'),
};

export default {
  title: 'Input',
  component: Input,
  on: {
    ...actionsData,
  },
};

export const AllInputs = () => (
  <>
    <Input
      uniqueId={`myid-${uuid()}`}
      label="Default input"
      onChange={action('change')}
      onFocus={action('focus')}
      onBlur={action('blur')}
    />
    <Input
      uniqueId={`myid-${uuid()}`}
      label="Inline input"
      isInline={true}
      onChange={action('change')}
      onFocus={action('focus')}
      onBlur={action('blur')}
    />
    <Input
      uniqueId={`myid-${uuid()}`}
      label="Rounded input"
      isRounded={true}
      onChange={action('change')}
      onFocus={action('focus')}
      onBlur={action('blur')}
    />
    <Input
      uniqueId={`myid-${uuid()}`}
      label="Underlined input"
      isUnderlined={true}
      onChange={action('change')}
      onFocus={action('focus')}
      onBlur={action('blur')}
    />
    <Input
      uniqueId={`myid-${uuid()}`}
      label="Underlined with background input"
      isUnderlined={true}
      isUnderlinedWithBackground={true}
      onChange={action('change')}
      onFocus={action('focus')}
      onBlur={action('blur')}
    />
    <Input
      uniqueId={`myid-${uuid()}`}
      label="Large input"
      size="large"
      onChange={action('change')}
      onFocus={action('focus')}
      onBlur={action('blur')}
    />
    <Input
      uniqueId={`myid-${uuid()}`}
      label="Small input"
      size="small"
      onChange={action('change')}
      onFocus={action('focus')}
      onBlur={action('blur')}
    />
    <Input uniqueId={`myid-${uuid()}`} label="Disabled" isDisabled />
  </>
);

export const ErrorAndHelpText = () => (
  <>
    <Input uniqueId={`myid-${uuid()}`} label="Help text input" helpText="Some useful help text." />
    <Input
      uniqueId={`myid-${uuid()}`}
      label="Invalid input"
      invalidText="This field has errors."
      isInvalid={true}
    />
    <Input
      size="small"
      uniqueId={`myid-${uuid()}`}
      label="Invalid small input"
      invalidText="This field has errors."
      isInvalid={true}
    />
    <Input
      size="large"
      uniqueId={`myid-${uuid()}`}
      label="Invalid large input"
      invalidText="This field has errors."
      isInvalid={true}
    />
  </>
);
