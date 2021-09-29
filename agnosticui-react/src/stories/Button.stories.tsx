// eslint-disable-next-line import/no-extraneous-dependencies
import { action } from '@storybook/addon-actions';
import { Button } from '../Button';

const actionsData = {
  click: action('click'),
};

export default {
  title: 'AG—React/Button',
  component: Button,
  on: {
    ...actionsData,
  },
};

export const Primary = () => (
  <>
    <Button mode="primary" onClick={action('click')}>
      Go
    </Button>
    <Button mode="primary" onClick={action('click')} isBordered>
      Go
    </Button>
    <Button mode="primary" onClick={action('click')} isRounded>
      Go
    </Button>
    <Button mode="primary" onClick={action('click')} isRounded isBordered>
      Go
    </Button>
    <Button mode="primary" onClick={action('click')} isRounded isRaised>
      Go
    </Button>
    <Button mode="primary" onClick={action('click')} isCircle>
      Go
    </Button>
    <Button mode="primary" onClick={action('click')} isCircle isBordered>
      Go
    </Button>
    <Button mode="primary" onClick={action('click')} isBlock>
      Go
    </Button>
    <Button mode="primary" onClick={action('click')} isBordered isBlock>
      Go
    </Button>
  </>
);

export const Secondary = () => (
  <>
    <Button mode="secondary" onClick={action('click')}>
      Go
    </Button>
    <Button mode="secondary" isBordered onClick={action('click')}>
      Go
    </Button>
    <Button mode="secondary" isRounded onClick={action('click')}>
      Go
    </Button>
    <Button mode="secondary" isBordered isRounded onClick={action('click')}>
      Go
    </Button>
    <Button mode="secondary" isRaised isRounded onClick={action('click')}>
      Go
    </Button>
    <Button mode="secondary" isCircle onClick={action('click')}>
      Go
    </Button>
    <Button mode="secondary" isCircle isBordered onClick={action('click')}>
      Go
    </Button>
    <Button mode="secondary" isBlock onClick={action('click')}>
      Go
    </Button>
    <Button mode="secondary" isBordered isBlock onClick={action('click')}>
      Go
    </Button>
  </>
);

export const Default = () => (
  <>
    <Button onClick={action('click')}>Go</Button>
    <Button onClick={action('click')} isBordered>
      Go
    </Button>
    <Button onClick={action('click')} isRounded>
      Go
    </Button>
    <Button onClick={action('click')} isBordered isRounded>
      Go
    </Button>
    <Button onClick={action('click')} isRaised isRounded>
      Go
    </Button>
    <Button onClick={action('click')} isCircle>
      Go
    </Button>
    <Button onClick={action('click')} isCircle isBordered>
      Go
    </Button>
    <Button onClick={action('click')} isBlock>
      Go
    </Button>
    <Button onClick={action('click')} isBordered isBlock>
      Go
    </Button>
  </>
);

export const Sizes = () => (
  <>
    <Button onClick={action('click')} size="small">
      Go
    </Button>
    <Button onClick={action('click')} size="large">
      Go
    </Button>
  </>
);

export const DisabledAll = () => (
  <>
    <Button isDisabled>Go</Button>
    <Button onClick={action('click')} mode="primary" isDisabled>
      Go
    </Button>
    <Button onClick={action('click')} mode="secondary" isDisabled>
      Go
    </Button>
    <Button onClick={action('click')} mode="secondary" isDisabled isBordered>
      Go
    </Button>
  </>
);

export const Types = () => (
  <>
    <Button onClick={action('click')} type="reset">
      Go
    </Button>
    <Button onClick={action('click')} type="submit">
      Go
    </Button>
  </>
);

export const Customizations = () => (
  <>
    <Button onClick={action('click')} css="my-custom-css-klass">
      Inspect me to find custom classes
    </Button>
    <Button onClick={action('click')} isBlank>
      Blank button
    </Button>
    <Button onClick={action('click')} isSkinned={false}>
      Unskinned
    </Button>
  </>
);
