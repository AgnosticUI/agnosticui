import ButtonGroup from "./ButtonGroup.vue";
import ButtonGroupTests from "./ButtonGroupTests.vue";

export default {
  title: 'Button Groups',
  component: ButtonGroup,
};


export const All = () => ({
  title: 'Button Groups',
  components: { ButtonGroupTests },
  template: `<button-group-tests />`,
});
All.parameters = {
  docs: {
    source: {
      code: `
<ButtonGroup ariaLabel="Appropriate label for your button group">
  <Button>One</Button>
  <Button>Two</Button>
  <Button>Three</Button>
</ButtonGroup>
<ButtonGroup ariaLabel="Appropriate label for your button group">
  <Button isBordered>One</Button>
  <Button isBordered>Two</Button>
  <Button isBordered>Three</Button>
</ButtonGroup>
<ButtonGroup ariaLabel="Appropriate label for your button group">
  <Button isRaised>One</Button>
  <Button isRaised>Two</Button>
  <Button isRaised>Three</Button>
</ButtonGroup>
<ButtonGroup ariaLabel="Appropriate label for your button group">
  <Button mode="primary">One</Button>
  <Button mode="primary">Two</Button>
  <Button mode="primary">Three</Button>
</ButtonGroup>
<ButtonGroup ariaLabel="Appropriate label for your button group">
  <Button mode="primary" :isBordered="true">One</Button>
  <Button mode="primary" isBordered>Two</Button>
  <Button mode="primary" isBordered>Three</Button>
</ButtonGroup>
<ButtonGroup ariaLabel="Appropriate label for your button group">
  <Button mode="primary" :isRaised="true">One</Button>
  <Button mode="primary" :isRaised="true">Two</Button>
  <Button mode="primary" isRaised>Three</Button>
</ButtonGroup>
<ButtonGroup ariaLabel="Appropriate label for your button group">
  <Button mode="secondary">One</Button>
  <Button mode="secondary">Two</Button>
  <Button mode="secondary">Three</Button>
</ButtonGroup>
<ButtonGroup ariaLabel="Appropriate label for your button group">
  <Button mode="secondary" :isBordered="true">One</Button>
  <Button mode="secondary" isBordered>Two</Button>
  <Button mode="secondary" isBordered>Three</Button>
</ButtonGroup>
<ButtonGroup ariaLabel="Appropriate label for your button group">
  <Button mode="secondary" :isRaised="true">One</Button>
  <Button mode="secondary" :isRaised="true">Two</Button>
  <Button mode="secondary" isRaised>Three</Button>
</ButtonGroup
      `
    }
  },
}


/*
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
*/
