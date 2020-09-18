<template>
  <div>
    <div>
      <Button>Go</Button>
      <Button :isBordered="true">Go</Button>
      <Button isBlank>Go</Button>
      <Button isBlock>Go</Button>
      <Button isRounded>Go</Button>
      <Button isRaised isRounded>Go</Button>
      <Button isBordered isRounded>Go</Button>
    </div>
    <div>
      <Button mode="primary">Go</Button>
      <Button mode="primary" :isBordered="true">Go</Button>
      <Button mode="primary" isBlank>Go</Button>
      <Button mode="primary" isBlock>Go</Button>
      <Button mode="primary" isRounded>Go</Button>
      <Button mode="primary" isRaised isRounded>Go</Button>
      <Button mode="primary" isBordered isRounded>Go</Button>
    </div>
    <div>
      <Button mode="secondary">Go</Button>
      <Button mode="secondary" :isBordered="true">Go</Button>
      <Button mode="secondary" isBlank>Go</Button>
      <Button mode="secondary" isBlock>Go</Button>
      <Button mode="secondary" isRounded>Go</Button>
      <Button mode="secondary" isRaised isRounded>Go</Button>
      <Button mode="secondary" isBordered isRounded>Go</Button>
    </div>

    <div>
      <Button :isDisabled="true">Go</Button>
      <Button mode="primary" isDisabled>Go</Button>
      <Button mode="secondary" isDisabled>Go</Button>
    </div>
    <div>
      <Button size="small">Go</Button>
      <Button size="large">Go</Button>
      <Button :isSkinned="false">No Skin</Button>
    </div>
  </div>
</template>

<script>
import Button from "./Button.vue";
export default {
  name: "buttons-disabled",
  components: { Button },
};
</script>
