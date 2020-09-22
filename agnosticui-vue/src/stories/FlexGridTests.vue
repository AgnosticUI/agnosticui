<template>
  <FlexGrid tagName="section" customClasses="custom-grid-klass">
    <!-- Purposely adding all row keys just check they get inserted on row element :) -->
    <FlexRow
      start="sm"
      center="md"
      end="lg"
      top="xl"
      middle="xs"
      bottom="xs"
      around="sm"
      between="lg"
      customClasses="custom-row-klass"
    >
      <span>FlexCol to come soon...</span>
    </FlexRow>
  </FlexGrid>
</template>

<script>
/*

    */
import FlexGrid from "./FlexGrid/FlexGrid.vue";
import FlexRow from "./FlexGrid/FlexRow.vue";
export default {
  name: "flex-grid-tests",
  components: { FlexGrid, FlexRow },
};
</script>