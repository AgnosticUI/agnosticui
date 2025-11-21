<template>
  <ag-message-bubble
    ref="agComponent"
    :from="from"
    :message="message"
    :time="time"
    :author="author"
    :avatar-url="avatarUrl"
    :footer="footer"
    v-bind="$attrs"
  >
    <slot />
    <span
      v-if="$slots.header"
      slot="header"
    >
      <slot name="header" />
    </span>
    <span
      v-if="$slots.footer"
      slot="footer"
    >
      <slot name="footer" />
    </span>
    <span
      v-if="$slots.avatar"
      slot="avatar"
    >
      <slot name="avatar" />
    </span>
  </ag-message-bubble>
</template>

<script setup lang="ts">
import { ref } from "vue";
import type { MessageBubble } from "../core/MessageBubble";
import "../core/MessageBubble"; // Registers <ag-message-bubble> on wrapper load

const props = withDefaults(
  defineProps<{
    from?: "me" | "them";
    message?: string;
    time?: string;
    author?: string;
    avatarUrl?: string;
    footer?: string;
  }>(),
  {
    from: "them",
    message: "",
    time: "",
    author: "",
    avatarUrl: "",
    footer: "",
  }
);

const agComponent = ref<InstanceType<typeof MessageBubble> | null>(null);
</script>
