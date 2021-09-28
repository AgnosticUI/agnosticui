// eslint-disable-next-line import/no-extraneous-dependencies
import { action } from '@storybook/addon-actions';
import { Button, ButtonGroup } from '../Button';

const actionsData = {
  click: action('click'),
};
export default {
  title: 'AG—React/ButtonGroups',
  component: ButtonGroup,
  on: {
    ...actionsData,
  },
};

export const All = () => (
  <>
    <ButtonGroup ariaLabel="Appropriate label for your button group">
      <Button onClick={action('click')}>One</Button>
      <Button onClick={action('click')}>Two</Button>
      <Button onClick={action('click')}>Three</Button>
    </ButtonGroup>
    <ButtonGroup ariaLabel="Appropriate label for your button group">
      <Button isRaised onClick={action('click')}>
        One
      </Button>
      <Button isRaised onClick={action('click')}>
        Two
      </Button>
      <Button isRaised onClick={action('click')}>
        Three
      </Button>
    </ButtonGroup>
    <ButtonGroup ariaLabel="Appropriate label for your button group">
      <Button isBordered onClick={action('click')}>
        One
      </Button>
      <Button isBordered onClick={action('click')}>
        Two
      </Button>
      <Button isBordered onClick={action('click')}>
        Three
      </Button>
    </ButtonGroup>
    <ButtonGroup ariaLabel="Appropriate label for your button group">
      <Button mode="secondary" onClick={action('click')}>
        One
      </Button>
      <Button mode="secondary" onClick={action('click')}>
        Two
      </Button>
      <Button mode="secondary" onClick={action('click')}>
        Three
      </Button>
    </ButtonGroup>
    <ButtonGroup ariaLabel="Appropriate label for your button group">
      <Button mode="secondary" isRaised onClick={action('click')}>
        One
      </Button>
      <Button mode="secondary" isRaised onClick={action('click')}>
        Two
      </Button>
      <Button mode="secondary" isRaised onClick={action('click')}>
        Three
      </Button>
    </ButtonGroup>
    <ButtonGroup ariaLabel="Appropriate label for your button group">
      <Button mode="secondary" isBordered onClick={action('click')}>
        One
      </Button>
      <Button mode="secondary" isBordered onClick={action('click')}>
        Two
      </Button>
      <Button mode="secondary" isBordered onClick={action('click')}>
        Three
      </Button>
    </ButtonGroup>
    <ButtonGroup ariaLabel="Appropriate label for your button group">
      <Button mode="primary" onClick={action('click')}>
        One
      </Button>
      <Button mode="primary" onClick={action('click')}>
        Two
      </Button>
      <Button mode="primary" onClick={action('click')}>
        Three
      </Button>
    </ButtonGroup>
    <ButtonGroup ariaLabel="Appropriate label for your button group">
      <Button mode="primary" isRaised onClick={action('click')}>
        One
      </Button>
      <Button mode="primary" isRaised onClick={action('click')}>
        Two
      </Button>
      <Button mode="primary" isRaised onClick={action('click')}>
        Three
      </Button>
    </ButtonGroup>
    <ButtonGroup ariaLabel="Appropriate label for your button group">
      <Button mode="primary" isBordered onClick={action('click')}>
        One
      </Button>
      <Button mode="primary" isBordered onClick={action('click')}>
        Two
      </Button>
      <Button mode="primary" isBordered onClick={action('click')}>
        Three
      </Button>
    </ButtonGroup>
    <ButtonGroup ariaLabel="Appropriate label for your button group">
      <Button mode="primary" isDisabled>
        One
      </Button>
      <Button mode="primary" onClick={action('click')}>
        Two
      </Button>
      <Button mode="primary" onClick={action('click')}>
        Three
      </Button>
    </ButtonGroup>
    <ButtonGroup ariaLabel="Appropriate label for your button group">
      <Button mode="primary" isDisabled>
        One
      </Button>
      <Button mode="primary" onClick={action('click')}>
        Two
      </Button>
      <Button mode="primary" isDisabled>
        Three
      </Button>
    </ButtonGroup>
    <ButtonGroup ariaLabel="Appropriate label for your button group">
      <Button mode="primary" isDisabled>
        One
      </Button>
      <Button mode="primary" isDisabled>
        Two
      </Button>
      <Button mode="primary" isDisabled>
        Three
      </Button>
    </ButtonGroup>
  </>
);
