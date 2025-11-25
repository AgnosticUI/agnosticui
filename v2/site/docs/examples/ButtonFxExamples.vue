
<template>
  <section>
    <div class="mbe4">
      <h3>Default</h3>
    </div>
    <div class="stacked-mobile">
      <VueButtonFx>
        ButtonFx example
      </VueButtonFx>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { VueButtonFx } from 'agnosticui-core/button-fx/vue';

export default defineComponent({
  name: 'ButtonFxExamples',
  components: {
    VueButtonFx,
  },
});
</script>
