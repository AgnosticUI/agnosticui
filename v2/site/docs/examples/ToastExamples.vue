
<template>
  <section>
    <div class="mbe4">
      <h3>Default</h3>
    </div>
    <div class="stacked-mobile">
      <VueToast>
        Toast example
      </VueToast>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { VueToast } from 'agnosticui-core/toast/vue';

export default defineComponent({
  name: 'ToastExamples',
  components: {
    VueToast,
  },
});
</script>
