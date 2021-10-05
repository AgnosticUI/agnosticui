// eslint-disable-next-line import/no-extraneous-dependencies
import { action } from '@storybook/addon-actions';
import { v4 as uuidv4 } from 'uuid';
import { Input } from '../Input';

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
      id={`myid-${uuidv4()}`}
      label="Default input"
      onChange={action('change')}
      onFocus={action('focus')}
      onBlur={action('blur')}
    />
    <Input
      id={`myid-${uuidv4()}`}
      label="Inline input"
      isInline
      onChange={action('change')}
      onFocus={action('focus')}
      onBlur={action('blur')}
    />
    <Input
      id={`myid-${uuidv4()}`}
      label="Rounded input"
      isRounded
      onChange={action('change')}
      onFocus={action('focus')}
      onBlur={action('blur')}
    />
    <Input
      id={`myid-${uuidv4()}`}
      label="Underlined input"
      isUnderlined
      onChange={action('change')}
      onFocus={action('focus')}
      onBlur={action('blur')}
    />
    <Input
      id={`myid-${uuidv4()}`}
      label="Underlined with background input"
      isUnderlined
      isUnderlinedWithBackground
      onChange={action('change')}
      onFocus={action('focus')}
      onBlur={action('blur')}
    />
    <Input
      id={`myid-${uuidv4()}`}
      label="Large input"
      size="large"
      onChange={action('change')}
      onFocus={action('focus')}
      onBlur={action('blur')}
    />
    <Input
      id={`myid-${uuidv4()}`}
      label="Small input"
      size="small"
      onChange={action('change')}
      onFocus={action('focus')}
      onBlur={action('blur')}
    />
    <Input id={`myid-${uuidv4()}`} label="Disabled" isDisabled />
    <Input
      id={`myid-${uuidv4()}`}
      hasLeftAddon
      addOnLeft={
        <div>
          <span>L</span>
        </div>
      }
      hasRightAddon
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
      id={`myid-${uuidv4()}`}
      label="Textarea"
      type="textarea"
      onChange={action('change')}
      onFocus={action('focus')}
      onBlur={action('blur')}
    />
    <Input
      id={`myid-${uuidv4()}`}
      label="Textarea small"
      type="textarea"
      size="small"
      rows={10}
      cols={5}
      onChange={action('change')}
      onFocus={action('focus')}
      onBlur={action('blur')}
    />
    <Input
      id={`myid-${uuidv4()}`}
      label="Textarea large"
      type="textarea"
      size="large"
      onChange={action('change')}
      onFocus={action('focus')}
      onBlur={action('blur')}
      cols={5}
      rows={10}
    />
  </>
);

export const ErrorAndHelpText = () => (
  <>
    <Input
      id={`myid-${uuidv4()}`}
      label="Help text input"
      helpText="Some useful help text."
    />
    <Input
      id={`myid-${uuidv4()}`}
      label="Invalid input"
      invalidText="This field has errors."
      isInvalid
    />
    <Input
      size="small"
      id={`myid-${uuidv4()}`}
      label="Invalid small input"
      invalidText="This field has errors."
      isInvalid
    />
    <Input
      size="large"
      id={`myid-${uuidv4()}`}
      label="Invalid large input"
      invalidText="This field has errors."
      isInvalid
    />
  </>
);
