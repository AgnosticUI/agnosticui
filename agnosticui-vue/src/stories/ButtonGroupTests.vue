<template>
  <div>
    <ButtonGroup>
      <Button>One</Button>
      <Button>Two</Button>
      <Button>Three</Button>
    </ButtonGroup>
    <ButtonGroup>
      <Button isBordered>One</Button>
      <Button isBordered>Two</Button>
      <Button isBordered>Three</Button>
    </ButtonGroup>
    <ButtonGroup>
      <Button isRaised>One</Button>
      <Button isRaised>Two</Button>
      <Button isRaised>Three</Button>
    </ButtonGroup>
    <ButtonGroup>
      <Button mode="primary">One</Button>
      <Button mode="primary">Two</Button>
      <Button mode="primary">Three</Button>
    </ButtonGroup>
    <ButtonGroup>
      <Button mode="primary" :isBordered="true">One</Button>
      <Button mode="primary" isBordered>Two</Button>
      <Button mode="primary" isBordered>Three</Button>
    </ButtonGroup>
    <ButtonGroup>
      <Button mode="primary" :isRaised="true">One</Button>
      <Button mode="primary" :isRaised="true">Two</Button>
      <Button mode="primary" isRaised>Three</Button>
    </ButtonGroup>
    <ButtonGroup>
      <Button mode="secondary">One</Button>
      <Button mode="secondary">Two</Button>
      <Button mode="secondary">Three</Button>
    </ButtonGroup>
    <ButtonGroup>
      <Button mode="secondary" :isBordered="true">One</Button>
      <Button mode="secondary" isBordered>Two</Button>
      <Button mode="secondary" isBordered>Three</Button>
    </ButtonGroup>
    <ButtonGroup>
      <Button mode="secondary" :isRaised="true">One</Button>
      <Button mode="secondary" :isRaised="true">Two</Button>
      <Button mode="secondary" isRaised>Three</Button>
    </ButtonGroup>
  </div>
</template>

<script>
import Button from "./Button.vue";
import ButtonGroup from "./ButtonGroup.vue";
export default {
  name: "button-group-tests",
  components: { ButtonGroup, Button },
};
</script>
