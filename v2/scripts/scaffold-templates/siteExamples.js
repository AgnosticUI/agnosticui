export const getSiteExamplesTemplate = ({ pascalCaseName, kebabCaseName }) => `
<template>
  <section>
    <div class="mbe4">
      <h3>Default</h3>
    </div>
    <div class="stacked-mobile">
      <Vue${pascalCaseName}>
        ${pascalCaseName} example
      </Vue${pascalCaseName}>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { Vue${pascalCaseName} } from 'agnosticui-core/${kebabCaseName}/vue';

export default defineComponent({
  name: '${pascalCaseName}Examples',
  components: {
    Vue${pascalCaseName},
  },
});
</script>
`;
