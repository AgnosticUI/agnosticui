Have two separate files: MyComponent.vue:
<template>
<VueMyComponent>
</VueMyComponent>
</template>

<script lang="ts" setup>
import { computed } from "vue";
import "agnosticui-core/MyComponent";
import VueButton from "agnosticui-core/MyComponent/vue";
const props = withDefaults(defineProps<{}>(), {});
</script>

And the MyComponent.stories.ts use the following pattern:

```ts
import type { Meta, StoryObj } from "@storybook/vue3-vite";
import { fn } from "storybook/test";
import MyComponent from "./MyComponent.vue";

const meta = {
  title: "Example/MyComponent",
  component: MyComponent,
  tags: ["autodocs"],
  argTypes: {},
  args: {},
} satisfies Meta<typeof MyComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: "MyComponent",
  },
};
```
