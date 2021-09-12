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
  title: 'AG—React/Input',
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
    <Input
      uniqueId={`myid-${uuid()}`}
      hasLeftAddon={true}
      addOnLeft={
        <div>
          <span>L</span>
        </div>
      }
      hasRightAddon={true}
      addOnRight={
        <div>
          <span>R</span>
        </div>
      }
      label="Input with addons"
    />
  </>
);

export const Textareas = () => (
  <>
    <Input
      uniqueId={`myid-${uuid()}`}
      label="Textarea"
      type="textarea"
      onChange={action('change')}
      onFocus={action('focus')}
      onBlur={action('blur')}
    />
    <Input
      uniqueId={`myid-${uuid()}`}
      label="Textarea small"
      type="textarea"
      size="small"
      onChange={action('change')}
      onFocus={action('focus')}
      onBlur={action('blur')}
    />
    <Input
      uniqueId={`myid-${uuid()}`}
      label="Textarea large"
      type="textarea"
      size="large"
      onChange={action('change')}
      onFocus={action('focus')}
      onBlur={action('blur')}
    />
  </>
);

// export const TextareaSmall = Template.bind({});
// TextareaSmall.args = {
//   uniqueId: "myUniqueId",
//   label: "Textarea small",
//   type: "textarea",
//   size: "small",
//   rows: "10",
//   cols: "5",
// };

// export const TextareaLarge = Template.bind({});
// TextareaLarge.args = {
//   uniqueId: "myUniqueId",
//   label: "Textarea large",
//   type: "textarea",
//   size: "large",
//   rows: "10",
//   cols: "5",
// };

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
