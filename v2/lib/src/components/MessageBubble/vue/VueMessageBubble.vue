<template>
  <ag-message-bubble
    ref="agComponent"
    :from="from"
    :message="message"
    :time="time"
    :author="author"
  >
    <slot />
  </ag-message-bubble>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref, watchEffect, nextTick, type PropType } from 'vue';
import { MessageBubble, type MessageBubbleProps } from '../core/_MessageBubble';
import '../core/MessageBubble'; // Registers the ag-message-bubble web component

export default defineComponent({
  name: 'VueMessageBubble',
  props: {
    from: {
      type: String as PropType<MessageBubbleProps['from']>,
      default: 'them',
    },
    message: {
      type: String,
      default: '',
    },
    time: {
      type: String,
      default: '',
    },
    author: {
      type: String,
      default: '',
    },
  },
  setup(props) {
    const agComponent = ref<HTMLElement & MessageBubbleProps | null>(null);

    const syncProps = () => {
      const webComponent = agComponent.value;
      if (!webComponent) return;

      webComponent.from = props.from;
      webComponent.message = props.message;
      webComponent.time = props.time;
      webComponent.author = props.author;
    };

    onMounted(async () => {
      await customElements.whenDefined('ag-message-bubble');
      await nextTick();
      syncProps();
    });

    watchEffect(() => {
      if (agComponent.value) {
        syncProps();
      }
    });

    return {
      agComponent,
    };
  },
});
</script>