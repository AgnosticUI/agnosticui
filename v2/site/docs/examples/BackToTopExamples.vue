
<template>
  <section>
    <div class="mbe4">
      <h3>Default</h3>
    </div>
    <div class="stacked-mobile">
      <VueBackToTop>
        BackToTop example
      </VueBackToTop>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { VueBackToTop } from 'agnosticui-core/back-to-top/vue';

export default defineComponent({
  name: 'BackToTopExamples',
  components: {
    VueBackToTop,
  },
});
</script>
