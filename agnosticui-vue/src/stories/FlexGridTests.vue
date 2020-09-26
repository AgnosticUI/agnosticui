<template>
  <div>
    <section>
      <h1>FlexGrid</h1>
      <p>
        <i>xs</i> = Extra Small.
        <i>sm</i> = Small.
        <i>md</i> = Medium.
        <i>lg</i> = Large.
        <i>xl</i> = Extra Large.
      </p>
      <FlexGrid tagName="section" customClasses="custom-grid-klass">
        <FlexRow :class="styles.DemoCol">
          <FlexCol v-bind:xs="12" v-bind:sm="4" v-bind:lg="6" v-bind:xl="4">
            <div :class="styles.Field">xs=12 sm=4 lg=6 xl=4</div>
          </FlexCol>
          <FlexCol v-bind:xs="12" v-bind:sm="4" v-bind:lg="6" v-bind:xl="8">
            <div :class="styles.Field">xs=12 sm=4 lg=6 xl=8</div>
          </FlexCol>
        </FlexRow>
      </FlexGrid>
    </section>
    <section>
      <h1>Offsets</h1>
      <FlexGrid>
        <FlexRow :class="styles.DemoCol">
          <FlexCol v-bind:sm="2">
            <p v-bind:style="{ border: '1px solid #f7cac9', padding: '6px 8px' }">sm={2}</p>
          </FlexCol>
          <FlexCol v-bind:sm="2" v-bind:smOffset="1">
            <p
              v-bind:style="{ border: '1px solid #39cccc', padding: '6px 8px' }"
            >sm={2} smOffset={1}</p>
          </FlexCol>
          <FlexCol v-bind:sm="2" v-bind:smOffset="1">
            <p
              v-bind:style="{ border: '1px solid #7fdbff', padding: '6px 8px' }"
            >sm={2} smOffset={1}</p>
          </FlexCol>
          <FlexCol v-bind:sm="2" v-bind:smOffset="2">
            <p
              v-bind:style="{ border: '1px solid #ff6f61', padding: '6px 8px' }"
            >sm={2} smOffset={2}</p>
          </FlexCol>
        </FlexRow>
      </FlexGrid>
    </section>
    <section>
      <h1>Gutters opt-in</h1>
      <p>
        By default, we remove magic gutters. But,
        you can opt back in for them if you need them (cards or boxes
        are a good example use case). Do so by defining a
        <i>--agnosticui-gutter-width</i>
        CSS custom property value at the
        <i>:root</i> level in your stylesheet.
      </p>
      <p>Here we've used gutter-16 to do so. If you narrow the viewport you'll see the cards still stack:</p>
      <FlexGrid tagName="section">
        <!-- Purposely adding all row keys just check they get inserted on row element :) -->
        <FlexRow v-bind:gutter="16" :class="styles.DemoCol">
          <FlexCol v-bind:xs="12" v-bind:sm="3">
            <div :class="styles.Field">v-bind:xs="12" v-bind:sm="3"></div>
          </FlexCol>
          <FlexCol v-bind:xs="12" v-bind:sm="3">
            <div :class="styles.Field">v-bind:xs="12" v-bind:sm="3"></div>
          </FlexCol>
          <FlexCol v-bind:xs="12" v-bind:sm="3">
            <div :class="styles.Field">v-bind:xs="12" v-bind:sm="3"></div>
          </FlexCol>
          <FlexCol v-bind:xs="12" v-bind:sm="3">
            <div :class="styles.Field">v-bind:xs="12" v-bind:sm="3"></div>
          </FlexCol>
        </FlexRow>
      </FlexGrid>
    </section>
    <section>
      <h1>Row attributes test. Maybe ignore this ;)</h1>
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
          :class="styles.DemoCol"
        >
          <FlexCol v-bind:xs="12" v-bind:sm="6">
            <div :class="styles.Field">Test -- inspect to see if the row got ALL classes applied</div>
          </FlexCol>
          <FlexCol v-bind:xs="12" v-bind:sm="6">
            <div :class="styles.Field">Yo</div>
          </FlexCol>
        </FlexRow>
      </FlexGrid>
    </section>
  </div>
</template>

<script>
import FlexGrid from "./FlexGrid/FlexGrid.vue";
import FlexRow from "./FlexGrid/FlexRow.vue";
import FlexCol from "./FlexGrid/FlexCol.vue";
import styles from "./FlexGrid/FlexGridExample.module.css";
export default {
  name: "flex-grid-tests",
  components: { FlexGrid, FlexCol, FlexRow },
  computed: {
    styles() {
      return styles;
    },
  },
};
</script>
<style>
:root {
  --agnosticui-gutter-width: 24px;
}
</style>