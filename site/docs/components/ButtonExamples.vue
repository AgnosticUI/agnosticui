<template>
  <div class="mbs16 mbe16">
    <Button>Go</Button>
    <Button isRounded>Go</Button>
    <Button
      isRaised
      isRounded
    >Go</Button>
    <Button isBordered>Go</Button>
    <Button
      isBordered
      isRounded
    >Go</Button>
    <Button mode="primary">Go</Button>
    <Button
      mode="primary"
      isRounded
    >Go</Button>
    <Button mode="secondary">Go</Button>
  </div>
  <div class="mbe16">
    <Button size="small">Smaller</Button>
    <Button size="large">Larger</Button>
    <Button isDisabled>Disabled</Button>
  </div>
  <div class="mbe16">
    <Button isBlock>Go</Button>
  </div>
  <div class="mbe16">
    <ButtonGroup ariaLabel="Button group">
      <Button isBordered>One</Button>
      <Button isBordered>Two</Button>
      <Button isBordered>Three</Button>
    </ButtonGroup>
  </div>
  <div class="mbe16">
    <ButtonGroup ariaLabel="Button group">
      <Button mode="primary">One</Button>
      <Button mode="primary">Two</Button>
      <Button mode="primary">Three</Button>
    </ButtonGroup>
  </div>
</template>
<script>
import "agnostic-vue/dist/index.css";
import { Button, ButtonGroup } from "agnostic-vue";
export default {
  name: "ButtonExamples",
  components: { Button, ButtonGroup },
};
</script>
