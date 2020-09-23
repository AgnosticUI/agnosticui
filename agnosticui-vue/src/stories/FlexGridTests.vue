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
      <p>
        The following breakpoints can be overriden by redefining in your stylesheet and omitting the
        <i>-default</i> part:
      </p>
      <pre>
          --agnosticui-default-sm-min: 576px;
          --agnosticui-default-md-min: 768px;
          --agnosticui-default-lg-min: 992px;
          --agnosticui-default-xl-min: 1200px;
        </pre>
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
          <FlexCol v-bind:sm="2" v-bind:style="{ border: '1px solid #f7cac9' }">
            <p>sm={2}</p>
          </FlexCol>
          <FlexCol v-bind:sm="2" v-bind:smOffset="1" v-bind:style="{ border: '1px solid #39cccc' }">
            <p>sm={2} smOffset={1}</p>
          </FlexCol>
          <FlexCol v-bind:sm="2" v-bind:smOffset="1" v-bind:style="{ border: '1px solid #7fdbff' }">
            <p>sm={2} smOffset={1}</p>
          </FlexCol>
          <FlexCol v-bind:sm="2" v-bind:smOffset="2" v-bind:style="{ border: '1px solid #ff6f61' }">
            <p>sm={2} smOffset={2}</p>
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