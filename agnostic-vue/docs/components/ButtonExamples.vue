<template>
  <div class="mbs16 mbe16">
    <div class="flex-inline mbe16">
      <Button @click="() => log('Default button clicked...')">Go</Button>
      <div class="mis6 mie6">
        <Button
          @click="() => log('Rounded button clicked...')"
          isRounded
        >Go</Button>
      </div>
      <div class="mie6">
        <Button
          @click="() => log('Bordered button clicked...')"
          isBordered
        >Go</Button>
      </div>
      <div class="mie6">
        <Button
          isBordered
          isRounded
          @click="() => log('Bordered and rounded button clicked...')"
        >Go</Button>
      </div>
      <div class="mie6">
        <Button
          mode="primary"
          @click="() => log('Primary button clicked...')"
        >Go</Button>
      </div>
      <div class="mie6">
        <Button
          mode="primary"
          isRounded
          @click="() => log('Primary rounded button clicked...')"
        >Go</Button>
      </div>
      <div class="mie6">
        <Button
          mode="secondary"
          @click="() => log('Secondary button clicked...')"
        >Go</Button>
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
      <ButtonIconTests />
    </div>
    <div class="mbe16">
      <Button isBlock>Go</Button>
    </div>
    <div class="mbe16">
      <Button
        css="mie6"
        isCapsule
      >Capsule Buttons</Button>
      <Button
        css="mie6"
        isCapsule
        isBordered
      >Capsule Buttons</Button>
      <Button
        css="mie6"
        isCapsule
        size="small"
        mode="primary"
      >Capsule Buttons</Button>
      <Button
        css="mie6"
        isCapsule
        size="large"
        mode="primary"
        isPrimary
      >Capsule Buttons</Button>
    </div>
    <h3>Groups</h3>
    <div class="mbe16">
      <ButtonGroup ariaLabel="Button group">
        <Button
          @click="() => log('First in button group clicked...')"
          isGrouped
          isBordered
        >One</Button>
        <Button
          @click="() => log('Second in button group clicked...')"
          isGrouped
          isBordered
        >Two</Button>
        <Button
          @click="() => log('Third in button group clicked...')"
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
<script setup lang="ts">
import Button from "../../src/components/Button.vue";
import ButtonGroup from "../../src/components/ButtonGroup.vue";
import ButtonIconTests from "../../src/components/ButtonIconTests.vue";
const log = (msg) => console.log(msg);
</script>
