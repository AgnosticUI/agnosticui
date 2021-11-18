<template>
  <div>
    <ButtonGroup ariaLabel="Appropriate label for your button group">
      <Button @click="clickHandler">One</Button>
      <Button @click="clickHandler">Two</Button>
      <Button @click="clickHandler">Three</Button>
    </ButtonGroup>
    <ButtonGroup ariaLabel="Appropriate label for your button group">
      <Button isBordered @click="clickHandler">One</Button>
      <Button isBordered @click="clickHandler">Two</Button>
      <Button isBordered @click="clickHandler">Three</Button>
    </ButtonGroup>
    <ButtonGroup ariaLabel="Appropriate label for your button group">
      <Button isRaised @click="clickHandler">One</Button>
      <Button isRaised @click="clickHandler">Two</Button>
      <Button isRaised @click="clickHandler">Three</Button>
    </ButtonGroup>
    <ButtonGroup ariaLabel="Appropriate label for your button group">
      <Button mode="primary" @click="clickHandler">One</Button>
      <Button mode="primary" @click="clickHandler">Two</Button>
      <Button mode="primary" @click="clickHandler">Three</Button>
    </ButtonGroup>
    <ButtonGroup ariaLabel="Appropriate label for your button group">
      <Button mode="primary" :isBordered="true" @click="clickHandler">One</Button>
      <Button mode="primary" isBordered @click="clickHandler">Two</Button>
      <Button mode="primary" isBordered @click="clickHandler">Three</Button>
    </ButtonGroup>
    <ButtonGroup ariaLabel="Appropriate label for your button group">
      <Button mode="primary" :isRaised="true" @click="clickHandler">One</Button>
      <Button mode="primary" :isRaised="true" @click="clickHandler">Two</Button>
      <Button mode="primary" isRaised @click="clickHandler">Three</Button>
    </ButtonGroup>
    <ButtonGroup ariaLabel="Appropriate label for your button group">
      <Button mode="secondary" @click="clickHandler">One</Button>
      <Button mode="secondary" @click="clickHandler">Two</Button>
      <Button mode="secondary" @click="clickHandler">Three</Button>
    </ButtonGroup>
    <ButtonGroup ariaLabel="Appropriate label for your button group">
      <Button mode="secondary" :isBordered="true" @click="clickHandler">One</Button>
      <Button mode="secondary" isBordered @click="clickHandler">Two</Button>
      <Button mode="secondary" isBordered @click="clickHandler">Three</Button>
    </ButtonGroup>
    <ButtonGroup ariaLabel="Appropriate label for your button group">
      <Button mode="secondary" :isRaised="true" @click="clickHandler">One</Button>
      <Button mode="secondary" :isRaised="true" @click="clickHandler">Two</Button>
      <Button mode="secondary" isRaised @click="clickHandler">Three</Button>
    </ButtonGroup>
  </div>
</template>

<script>
import Button from "./Button.vue";
import ButtonGroup from "./ButtonGroup.vue";
import { action } from '@storybook/addon-actions';

const actionsData = {
  clickHandler: action('click'),
};

export default {
  name: "button-group-tests",
  components: { ButtonGroup, Button },
  methods: actionsData
};
</script>
