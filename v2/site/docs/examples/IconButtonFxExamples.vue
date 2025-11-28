
<template>
  <section>
    <div class="mbe4">
      <h3>Default</h3>
    </div>
    <div class="stacked-mobile">
      <VueIconButtonFx>
        IconButtonFx example
      </VueIconButtonFx>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { VueIconButtonFx } from 'agnosticui-core/icon-button-fx/vue';

export default defineComponent({
  name: 'IconButtonFxExamples',
  components: {
    VueIconButtonFx,
  },
});
</script>
