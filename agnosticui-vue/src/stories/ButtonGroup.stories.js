import ButtonGroup from "./ButtonGroup.vue";
import Button from "./Button.vue";

export default {
  title: 'Button Groups',
  component: ButtonGroup,
};

export const ButtonGroupDefault = () => ({
  components: { ButtonGroup, Button },
  template: '<ButtonGroup><Button label="One" /><Button label="Two" /><Button label="Three" /></ButtonGroup>'
});

export const ButtonGroupPrimary = () => ({
  components: { ButtonGroup, Button },
  template: '<ButtonGroup><Button label="One" mode="primary" /><Button label="Two" mode="primary" /><Button label="Three" mode="primary" /></ButtonGroup>'
});

export const ButtonGroupPrimaryBordered = () => ({
  components: { ButtonGroup, Button },
  template: '<ButtonGroup><Button label="One" mode="primary" isBordered /><Button label="Two" mode="primary" isBordered /><Button label="Three" mode="primary" isBordered /></ButtonGroup>'
});


export const ButtonGroupSecondary = () => ({
  components: { ButtonGroup, Button },
  template: '<ButtonGroup><Button label="One" mode="secondary" /><Button label="Two" mode="secondary" /><Button label="Three" mode="secondary" /></ButtonGroup>'
});

export const ButtonGroupSecondaryBordered = () => ({
  components: { ButtonGroup, Button },
  template: '<ButtonGroup><Button label="One" mode="secondary" isBordered /><Button label="Two" mode="secondary" isBordered /><Button label="Three" mode="secondary" isBordered /></ButtonGroup>'
});

export const ButtonGroupSecondaryRaised = () => ({
  components: { ButtonGroup, Button },
  template: '<ButtonGroup><Button label="One" mode="secondary" isRaised /><Button label="Two" mode="secondary" isRaised /><Button label="Three" mode="secondary" isRaised /></ButtonGroup>'
});