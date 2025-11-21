
<template>
  <section>
    <div class="mbe4">
      <h3>Default</h3>
    </div>
    <div class="stacked-mobile">
      <VueMark>
        Mark example
      </VueMark>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { VueMark } from 'agnosticui-core/mark/vue';

export default defineComponent({
  name: 'MarkExamples',
  components: {
    VueMark,
  },
});
</script>
