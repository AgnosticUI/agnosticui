
<template>
  <section>
    <div class="mbe4">
      <h3>Default</h3>
    </div>
    <div class="stacked-mobile">
      <VueCollapsible>
        Collapsible example
      </VueCollapsible>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { VueCollapsible } from 'agnosticui-core/collapsible/vue';

export default defineComponent({
  name: 'CollapsibleExamples',
  components: {
    VueCollapsible,
  },
});
</script>
