<template>
  <div :class="classes" role="group" :aria-label="ariaLabel">
    <slot />
  </div>
</template>

<style>

/**
 * Button Groups
 */
 .btn-group {
  display: inline-flex;
  flex-direction: row;
}
.btn-group > .btn {
  border-radius: var(
    --agnostic-btn-radius,
    var(--agnostic-default-btn-radius)
  );
}
.btn-group > .btn:not(:last-child) {
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  margin-right: -1px;
}
.btn-group > .btn:not(:first-child) {
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
}

</style>

<script>
export default {
  name: 'agnostic-button-group',
  props: {
    ariaLabel: {
      type: String,
      default: '',
    },
    css: {
      type: String,
      default: '',
    }
  },
  computed: {
    classes() {
      return {
        'btn-group': true,
        [`${this.css}`]: this.css,
      }
    },
  },
}
</script>
