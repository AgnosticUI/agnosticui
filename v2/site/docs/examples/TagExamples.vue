
<template>
  <section>
    <div class="mbe4">
      <h3>Default</h3>
    </div>
    <div class="stacked-mobile">
      <VueTag>
        Tag example
      </VueTag>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { VueTag } from 'agnosticui-core/tag/vue';

export default defineComponent({
  name: 'TagExamples',
  components: {
    VueTag,
  },
});
</script>
