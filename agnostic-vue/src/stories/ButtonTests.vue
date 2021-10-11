<template>
  <div>
    <div>
      <Button @click="clickHandler">Go</Button>
      <Button :isBordered="true" @click="clickHandler">Go</Button>
      <Button isBlank @click="clickHandler">Go</Button>
      <Button isBlock @click="clickHandler">Go</Button>
      <Button isRounded @click="clickHandler">Go</Button>
      <Button isRaised isRounded @click="clickHandler">Go</Button>
      <Button isBordered isRounded @click="clickHandler">Go</Button>
      <Button isCircle isBordered @click="clickHandler">Go</Button>
    </div>
    <div>
      <Button mode="primary" @click="clickHandler">Go</Button>
      <Button mode="primary" :isBordered="true" @click="clickHandler">Go</Button>
      <Button mode="primary" isBlank @click="clickHandler">Go</Button>
      <Button mode="primary" isBlock @click="clickHandler">Go</Button>
      <Button mode="primary" isRounded @click="clickHandler">Go</Button>
      <Button mode="primary" isRaised isRounded @click="clickHandler">Go</Button>
      <Button mode="primary" isBordered isRounded @click="clickHandler">Go</Button>
      <Button mode="primary" isCircle isBordered @click="clickHandler">Go</Button>
    </div>
    <div>
      <Button mode="secondary" @click="clickHandler">Go</Button>
      <Button mode="secondary" :isBordered="true" @click="clickHandler">Go</Button>
      <Button mode="secondary" isBlank @click="clickHandler">Go</Button>
      <Button mode="secondary" isBlock @click="clickHandler">Go</Button>
      <Button mode="secondary" isRounded @click="clickHandler">Go</Button>
      <Button mode="secondary" isRaised isRounded @click="clickHandler">Go</Button>
      <Button mode="secondary" isBordered isRounded @click="clickHandler">Go</Button>
      <Button mode="secondary" isCircle isBordered @click="clickHandler">Go</Button>
    </div>

    <div>
      <Button :isDisabled="true" @click="clickHandler">Go</Button>
      <Button mode="primary" isDisabled>Go</Button>
      <Button mode="secondary" isDisabled>Go</Button>
    </div>
    <div>
      <Button size="small" @click="clickHandler">Go</Button>
      <Button size="large" @click="clickHandler">Go</Button>
      <Button :isSkinned="false">No Skin</Button>
    </div>
    <div>
      <Button css="foo bar baz">CSS (inspect to see 'foo bar baz')</Button>
    </div>
  </div>
</template>

<script>
import Button from "./Button.vue";
import { action } from '@storybook/addon-actions';

const actionsData = {
  clickHandler: action('click'),
};

export default {
  name: "buttons-tests",
  components: { Button },
  methods: actionsData
};
</script>
