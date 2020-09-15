<template>
  <progress :class="classes" :value="value" :max="max" />
</template>

<style module>
 /* https://stackoverflow.com/questions/45507970/how-can-i-change-the-color-of-a-progress-bar-value-in-html */
/**
 * Most examples show styling directly to the <progress> element itself. However,
 * my tests (chrome, ff, safari on mac mini 2020), showed it's perfectly possibly
 * to use a class selector instead. The reason I'd prefer that here, is that I can
 * then use CSS Modules composes against .progress (e.g. for React/Vue components)
 */
.progress {
  --agnostic-default-progress-fill-color: #1087db;
  --agnostic-default-progress-background: #ededed;
  --agnostic-default-progress-radius: 10px;
  --agnostic-default-progress-height: 10px;

  -webkit-appearance: none;
  height: var(--agnostic-progress-height, var(--agnostic-default-progress-height));
  width: 100%;
  border: none;
  /* Next couple of rules are required to be here for FF (but not chrome) */
  background-color: var(--agnostic-progress-background, var(--agnostic-default-progress-background));
  border-radius: var(--agnostic-progress-radius, var(--agnostic-default-progress-radius));
}

.progress[value]::-webkit-progress-bar {
  /* In my tests chrome requires this whereas FF wants it on the progress {} rule */
  background-color: var(--agnostic-progress-background, var(--agnostic-default-progress-background));
  border-radius: var(--agnostic-progress-radius, var(--agnostic-default-progress-radius));
}

.progress[value]::-webkit-progress-value {
  background-color: var(--agnostic-progress-fill-color, var(--agnostic-default-progress-fill-color));
  border-radius: var(--agnostic-progress-radius, var(--agnostic-default-progress-radius));
}

.progress[value]::-moz-progress-bar {
  background-color: var(--agnostic-progress-fill-color, var(--agnostic-default-progress-fill-color));
  border-radius: var(--agnostic-progress-radius, var(--agnostic-default-progress-radius));
}

.progress[value]::-ms-fill {
  background-color: var(--agnostic-progress-fill-color, var(--agnostic-default-progress-fill-color));
  border-radius: var(--agnostic-progress-radius, var(--agnostic-default-progress-radius));
}
</style>

<script>
export default {
  name: 'agnostic-progress',
  props: {
    value: {
      type: Number,
      default: 0
    },
    max: {
      type: Number,
      required: true
    },
    css: {
      type: String,
      default: '' 
    }
  },
  computed: {
    classes() {
      return {
        [this.$style.progress]: true,
        [`${this.css}`]: !!this.css
      }
    }
  }
}
</script>