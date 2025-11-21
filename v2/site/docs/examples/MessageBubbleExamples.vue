
<template>
  <section>
    <div class="mbe4">
      <h3>Default</h3>
    </div>
    <div class="stacked-mobile">
      <VueMessageBubble>
        MessageBubble example
      </VueMessageBubble>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { VueMessageBubble } from 'agnosticui-core/message-bubble/vue';

export default defineComponent({
  name: 'MessageBubbleExamples',
  components: {
    VueMessageBubble,
  },
});
</script>
