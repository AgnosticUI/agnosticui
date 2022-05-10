<template>
  <div
    v-if="isFaux"
    :class="closeButtonClasses"
  >
    <svg
      :class="closeClasses"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path
        fill="currentColor"
        d="M.439 21.44a1.5 1.5 0 0 0 2.122 2.121l9.262-9.261a.25.25 0 0 1 .354 0l9.262 9.263a1.5 1.5 0 1 0 2.122-2.121L14.3 12.177a.25.25 0 0 1 0-.354l9.263-9.262A1.5 1.5 0 0 0 21.439.44L12.177 9.7a.25.25 0 0 1-.354 0L2.561.44A1.5 1.5 0 0 0 .439 2.561L9.7 11.823a.25.25 0 0 1 0 .354Z"
      />
    </svg>
  </div>
  <button
    v-else
    :class="closeButtonClasses"
    aria-label="Close"
    @click="$emit('click', $event)"
  >
    <svg
      :class="closeClasses"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path
        fill="currentColor"
        d="M.439 21.44a1.5 1.5 0 0 0 2.122 2.121l9.262-9.261a.25.25 0 0 1 .354 0l9.262 9.263a1.5 1.5 0 1 0 2.122-2.121L14.3 12.177a.25.25 0 0 1 0-.354l9.263-9.262A1.5 1.5 0 0 0 21.439.44L12.177 9.7a.25.25 0 0 1-.354 0L2.561.44A1.5 1.5 0 0 0 .439 2.561L9.7 11.823a.25.25 0 0 1 0 .354Z"
      />
    </svg>
  </button>
</template>

<script setup lang="ts">
import { computed, useCssModule } from "vue";
export interface CloseProps {
  size?: "small" | "large" | "xlarge" | "";
  isFaux?: boolean;
}

const styles = useCssModule();

const props = defineProps<CloseProps>();

const emit = defineEmits(["click"]);

const onClick = () => {
  emit("click");
};

const closeClasses = computed(() => {
  return {
    [styles["close"]]: true,
  };
});

const closeButtonClasses = computed(() => {
  return {
    [styles["close-button"]]: true,
    [styles[`close-button-${props.size}`]]: !!props.size,
  };
});
</script>

<style module>
.close-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  border: 0;
  border-radius: 0;
  box-shadow: none;
  width: var(--fluid-24);
  height: var(--fluid-24);
}

.close-button:hover,
.close-button:active,
.close-button:focus {
  background: none;

  /* Needed for High Contrast mode */
  outline:
    var(--agnostic-focus-ring-outline-width) var(--agnostic-focus-ring-outline-style)
    var(--agnostic-focus-ring-outline-color);
}

.close-button:focus {
  box-shadow: 0 0 0 3px var(--agnostic-focus-ring-color);
  transition: box-shadow var(--agnostic-timing-fast) ease-out;
}

.close {
  width: var(--fluid-12);
  height: var(--fluid-12);
  display: inline-block;
  vertical-align: middle;
  line-height: 1em;
  flex-shrink: 0;
  color: currentColor;
}

.close-button .close {
  opacity: 80%;
  transition: opacity var(--agnostic-timing-medium);
}

@media (prefers-reduced-motion), (update: slow) {
  .close-button:focus,
  .close-button .close {
    transition-duration: 0.001ms !important;
  }
}

.close-button-small {
  width: var(--fluid-18);
  height: var(--fluid-18);
}

.close-button-large {
  width: var(--fluid-32);
  height: var(--fluid-32);
}

.close-button-xlarge {
  width: var(--fluid-40);
  height: var(--fluid-40);
}

.close-button-small > .close {
  width: 0.5625rem;
  height: 0.5625rem;
}

.close-button-large > .close {
  width: var(--fluid-16);
  height: var(--fluid-16);
}

.close-button-xlarge > .close {
  width: var(--fluid-20);
  height: var(--fluid-20);
}

.close-button:hover .close {
  opacity: 100%;
}

</style>
