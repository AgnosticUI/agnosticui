<template>
  <div :class="emptyClasses">
    <slot name="header" />
    <slot name="body" />
    <div :class="emptyActionsClasses">
      <slot name="footer" />
    </div>
  </div>
</template>
<script setup lang="ts">
import { computed, useCssModule } from "vue";
export interface EmptyStateProps {
  isBordered?: boolean;
  isRounded?: boolean;
}

const styles = useCssModule();

const props = defineProps<EmptyStateProps>();

const emptyActionsClasses = computed(() => ({
  [styles["empty-actions"]]: true,
}));

const emptyClasses = computed(() => ({
  [styles["empty"]]: true,
  [styles["empty-rounded"]]: !!props.isRounded,
  [styles["empty-bordered"]]: !!props.isBordered,
}));
</script>
<style module>
.empty-base,
.empty {
  display: flex;
  flex-flow: column wrap;
  align-items: center;
  text-align: center;
  width: 100%;
}

.empty {
  padding: calc(2 * var(--agnostic-side-padding));
  background: var(--agnostic-gray-extra-light);
}

.empty-bordered {
  background: transparent;
  border: 1px solid var(--agnostic-gray-light);
}

.empty-rounded {
  border-radius: var(--agnostic-radius);
}

.empty-actions {
  margin-block-start: var(--spacing-24);
}

</style>
