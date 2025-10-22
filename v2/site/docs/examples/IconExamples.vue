
<template>
  <section>
    <div class="mbe4">
      <h3>Default</h3>
    </div>
    <div class="stacked-mobile">
      <VueIcon>
        Icon example
      </VueIcon>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { VueIcon } from 'agnosticui-core/icon/vue';

export default defineComponent({
  name: 'IconExamples',
  components: {
    VueIcon,
  },
});
</script>
