<template>
  <div class="mbs16 mbe16">
    <div class="flex-inline mbe16">
      <Button>Go</Button>
      <div class="mis6 mie6">
        <Button isRounded>Go</Button>
      </div>
      <div class="mie6">
        <Button isBordered>Go</Button>
      </div>
      <div class="mie6">
        <Button
          isBordered
          isRounded
        >Go</Button>
      </div>
      <div class="mie6">
        <Button mode="primary">Go</Button>
      </div>
      <div class="mie6">
        <Button
          mode="primary"
          isRounded
        >Go</Button>
      </div>
      <div class="mie6">
        <Button mode="secondary">Go</Button>
      </div>
    </div>
    <div class="mbe16">
      <div class="flex-inline mbe16">
        <div class="mie6">
          <Button size="small">Smaller</Button>
        </div>
        <div class="mie6">
          <Button size="large">Larger</Button>
        </div>
        <div class="mie6">
          <Button isDisabled>Disabled</Button>
        </div>
      </div>
    </div>
    <div class="mbe16">
      <Button isBlock>Go</Button>
    </div>
    <div class="mbe16">
      <Button
        css="mie6"
        isCapsule
      >Capsule Pill Buttons</Button>
      <Button
        css="mie6"
        isCapsule
        isBordered
      >Capsule Pill Buttons</Button>
      <Button
        css="mie6"
        isCapsule
        mode="primary"
      >Capsule Pill Buttons</Button>
      <Button
        css="mie6"
        isCapsule
        mode="primary"
        isPrimary
      >Capsule Pill Buttons</Button>
    </div>
    <h3>Groups</h3>
    <div class="mbe16">
      <ButtonGroup ariaLabel="Button group">
        <Button
          isGrouped
          isBordered
        >One</Button>
        <Button
          isGrouped
          isBordered
        >Two</Button>
        <Button
          isGrouped
          isBordered
        >Three</Button>
      </ButtonGroup>
    </div>
    <div class="mbe16">
      <ButtonGroup ariaLabel="Button group">
        <Button
          isGrouped
          mode="primary"
        >One</Button>
        <Button
          isGrouped
          mode="primary"
        >Two</Button>
        <Button
          isGrouped
          mode="primary"
        >Three</Button>
      </ButtonGroup>
    </div>
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
