import React from 'react';
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
      uniqueId="myUniqueId"
      label="Default input"
      onChange={action('change')}
      onFocus={action('focus')}
      onBlur={action('blur')}
    />
    <Input
      uniqueId="myUniqueId"
      label="Inline input"
      isInline={true}
      onChange={action('change')}
      onFocus={action('focus')}
      onBlur={action('blur')}
    />
    <Input
      uniqueId="myUniqueId2"
      label="Rounded input"
      isRounded={true}
      onChange={action('change')}
      onFocus={action('focus')}
      onBlur={action('blur')}
    />
    <Input
      uniqueId="myUniqueId3"
      label="Underlined input"
      isUnderlined={true}
      onChange={action('change')}
      onFocus={action('focus')}
      onBlur={action('blur')}
    />
    <Input
      uniqueId="myUniqueId4"
      label="Underlined with background input"
      isUnderlined={true}
      isUnderlinedWithBackground={true}
      onChange={action('change')}
      onFocus={action('focus')}
      onBlur={action('blur')}
    />
    <Input
      uniqueId="myUniqueId5"
      label="Large input"
      size="large"
      onChange={action('change')}
      onFocus={action('focus')}
      onBlur={action('blur')}
    />
    <Input
      uniqueId="myUniqueId6"
      label="Small input"
      size="small"
      onChange={action('change')}
      onFocus={action('focus')}
      onBlur={action('blur')}
    />
    <Input uniqueId="myUniqueId7" label="Disabled" isDisabled />
  </>
);

export const ErrorAndHelpText = () => (
  <>
    <Input uniqueId="myUniqueId" label="Help text input" helpText="Some useful help text." />
    <Input
      uniqueId="myUniqueId2"
      label="Invalid input"
      invalidText="This field has errors."
      isInvalid={true}
    />
    <Input
      size="small"
      uniqueId="myUniqueId3"
      label="Invalid small input"
      invalidText="This field has errors."
      isInvalid={true}
    />
    <Input
      size="large"
      uniqueId="myUniqueId4"
      label="Invalid large input"
      invalidText="This field has errors."
      isInvalid={true}
    />
  </>
);
