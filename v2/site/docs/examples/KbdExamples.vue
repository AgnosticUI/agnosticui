
<template>
  <section>
    <div class="mbe4">
      <h3>Default</h3>
    </div>
    <div class="stacked-mobile">
      <VueKbd>
        Kbd example
      </VueKbd>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { VueKbd } from 'agnosticui-core/kbd/vue';

export default defineComponent({
  name: 'KbdExamples',
  components: {
    VueKbd,
  },
});
</script>
