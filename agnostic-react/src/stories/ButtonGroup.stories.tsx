// eslint-disable-next-line import/no-extraneous-dependencies
import { action } from '@storybook/addon-actions';
import { Button, ButtonGroup } from '../Button';

const actionsData = {
  click: action('click'),
};
export default {
  title: 'AG—React (Beta)/ButtonGroups',
  component: ButtonGroup,
  on: {
    ...actionsData,
  },
};

export const All = () => (
  <>
    <ButtonGroup ariaLabel="Appropriate label for your button group">
      <Button isGrouped onClick={action('click')}>
        One
      </Button>
      <Button isGrouped onClick={action('click')}>
        Two
      </Button>
      <Button isGrouped onClick={action('click')}>
        Three
      </Button>
    </ButtonGroup>
    <ButtonGroup ariaLabel="Appropriate label for your button group">
      <Button isGrouped isBordered onClick={action('click')}>
        One
      </Button>
      <Button isGrouped isBordered onClick={action('click')}>
        Two
      </Button>
      <Button isGrouped isBordered onClick={action('click')}>
        Three
      </Button>
    </ButtonGroup>
    <ButtonGroup ariaLabel="Appropriate label for your button group">
      <Button isGrouped mode="secondary" onClick={action('click')}>
        One
      </Button>
      <Button isGrouped mode="secondary" onClick={action('click')}>
        Two
      </Button>
      <Button isGrouped mode="secondary" onClick={action('click')}>
        Three
      </Button>
    </ButtonGroup>
    <ButtonGroup ariaLabel="Appropriate label for your button group">
      <Button isGrouped mode="secondary" isBordered onClick={action('click')}>
        One
      </Button>
      <Button isGrouped mode="secondary" isBordered onClick={action('click')}>
        Two
      </Button>
      <Button isGrouped mode="secondary" isBordered onClick={action('click')}>
        Three
      </Button>
    </ButtonGroup>
    <ButtonGroup ariaLabel="Appropriate label for your button group">
      <Button isGrouped mode="primary" onClick={action('click')}>
        One
      </Button>
      <Button isGrouped mode="primary" onClick={action('click')}>
        Two
      </Button>
      <Button isGrouped mode="primary" onClick={action('click')}>
        Three
      </Button>
    </ButtonGroup>
    <ButtonGroup ariaLabel="Appropriate label for your button group">
      <Button isGrouped mode="primary" isBordered onClick={action('click')}>
        One
      </Button>
      <Button isGrouped mode="primary" isBordered onClick={action('click')}>
        Two
      </Button>
      <Button isGrouped mode="primary" isBordered onClick={action('click')}>
        Three
      </Button>
    </ButtonGroup>
    <ButtonGroup ariaLabel="Appropriate label for your button group">
      <Button isGrouped mode="primary" isDisabled>
        One
      </Button>
      <Button isGrouped mode="primary" onClick={action('click')}>
        Two
      </Button>
      <Button isGrouped mode="primary" onClick={action('click')}>
        Three
      </Button>
    </ButtonGroup>
    <ButtonGroup ariaLabel="Appropriate label for your button group">
      <Button isGrouped mode="primary" isDisabled>
        One
      </Button>
      <Button isGrouped mode="primary" onClick={action('click')}>
        Two
      </Button>
      <Button isGrouped mode="primary" isDisabled>
        Three
      </Button>
    </ButtonGroup>
    <ButtonGroup ariaLabel="Appropriate label for your button group">
      <Button isGrouped mode="primary" isDisabled>
        One
      </Button>
      <Button isGrouped mode="primary" isDisabled>
        Two
      </Button>
      <Button isGrouped mode="primary" isDisabled>
        Three
      </Button>
    </ButtonGroup>
  </>
);
