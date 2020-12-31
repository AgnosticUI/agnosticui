<template>
  <section :class="$style.component">
    <FlexGrid tagName="section">
      <FlexRow v-bind:gutter="16">
        <FlexCol v-bind:xs="12">
          <h2 id="radios">Radios</h2>
        </FlexCol>
      </FlexRow>
      <FlexRow :customClasses="$style.rowRadios" v-bind:gutter="16">
        <FlexCol v-bind:xs="16">
          <p class="flex">
            <AgChoiceInput
              type="radio"
              :options="frequencyOptions"
              isInline
              legendLabel="Radio &amp; inline"
            />
          </p>
        </FlexCol>
      </FlexRow>
      <FlexRow v-bind:gutter="16">
        <FlexCol v-bind:xs="12">
          <pre v-highlightjs="regular"><code class="html"></code></pre>
        </FlexCol>
      </FlexRow>
      <FlexRow :customClasses="$style.rowRadios" v-bind:gutter="16">
        <FlexCol v-bind:xs="16">
          <p class="flex">
            <AgChoiceInput
              type="radio"
              :options="strengthOptions"
              size="small"
              legendLabel="Radio small"
            />
          </p>
        </FlexCol>
      </FlexRow>
      <FlexRow v-bind:gutter="16">
        <FlexCol v-bind:xs="12">
          <pre v-highlightjs="small"><code class="html"></code></pre>
        </FlexCol>
      </FlexRow>
      <FlexRow :customClasses="$style.rowRadios" v-bind:gutter="16">
        <FlexCol v-bind:xs="16">
          <p class="flex">
            <AgChoiceInput
              type="radio"
              size="large"
              :options="sizeOptions"
              legendLabel="Radio large"
            />
          </p>
        </FlexCol>
      </FlexRow>
      <FlexRow v-bind:gutter="16">
        <FlexCol v-bind:xs="12">
          <pre v-highlightjs="large"><code class="html"></code></pre>
        </FlexCol>
      </FlexRow>
      <FlexRow :customClasses="$style.rowRadios" v-bind:gutter="16">
        <FlexCol v-bind:xs="16">
          <p class="flex">
            Add the <pre class="inline-code"> disabled </pre> attribute to both the label wrap and radio input of any option you'd like disabled.
          </p>
          <p class="flex">
            <AgChoiceInput
              type="radio"
              :options="frequencyOptions"
              :disabledOptions="disabledFrequencyOptions"
              isInline
              legendLabel="Radio with disabled options"
            />
          </p>
        </FlexCol>
      </FlexRow>
      <FlexRow v-bind:gutter="16">
        <FlexCol v-bind:xs="12">
          <pre v-highlightjs="regularDisabled"><code class="html"></code></pre>
        </FlexCol>
      </FlexRow>
    </FlexGrid>
  </section>
</template>

<script>
import AgChoiceInput from "agnosticui/ChoiceInput.vue";
import FlexGrid from "agnosticui/FlexGrid/FlexGrid";
import FlexRow from "agnosticui/FlexGrid/FlexRow";
import FlexCol from "agnosticui/FlexGrid/FlexCol";
export default {
  name: "Radios",
  components: {
    AgChoiceInput,
    FlexCol,
    FlexGrid,
    FlexRow,
  },
  data() {
    return {
      strengthOptions: [
        {
          name: "strength",
          value: "weak",
          label: "Weak",
        },
        {
          name: "strength",
          value: "average",
          label: "Average",
        },
        {
          name: "strength",
          value: "strong",
          label: "Strong",
        },
      ],
      sizeOptions: [
        {
          name: "size",
          value: "small",
          label: "Small",
        },
        {
          name: "size",
          value: "medium",
          label: "Medium",
        },
        {
          name: "size",
          value: "large",
          label: "Large",
        },
      ],
      disabledFrequencyOptions: ["monthly", "weekly"],
      frequencyOptions: [
        {
          name: "frequency",
          value: "daily",
          label: "Daily",
        },
        {
          name: "frequency",
          value: "weekly",
          label: "Weekly",
        },
        {
          name: "frequency",
          value: "monthly",
          label: "Monthly",
        },
      ],
      regular: `<fieldset class="radio-group">
  <legend class="radio-legend">Radio &amp; inline</legend>
  <label class="radio-label-wrap radio-label-wrap-inline">
    <input id="choice-frequency-0" name="frequency" aria-hidden="true" type="radio" class="radio" value="daily">
    <span class="radio-label">Daily</span>
  </label>
  <label class="radio-label-wrap radio-label-wrap-inline">
    <input id="choice-frequency-1" name="frequency" aria-hidden="true" type="radio" class="radio" value="weekly">
    <span class="radio-label">Weekly</span>
  </label>
  <label class="radio-label-wrap radio-label-wrap-inline">
    <input id="choice-frequency-1" name="frequency" aria-hidden="true" type="radio" class="radio" value="monthly">
    <span class="radio-label">Monthly</span>
  </label>
</fieldset>`,
      regularDisabled: `<fieldset class="radio-group">
  <legend class="radio-legend">Radio &amp; inline</legend>
  <label class="radio-label-wrap radio-label-wrap-inline">
    <input id="choice-frequency-0" name="frequency" aria-hidden="true" type="radio" class="radio" value="daily">
    <span class="radio-label">Daily</span>
  </label>
  <label disabled class="radio-label-wrap radio-label-wrap-inline">
    <input disabled id="choice-frequency-1" name="frequency" aria-hidden="true" type="radio" class="radio" value="weekly">
    <span class="radio-label">Weekly</span>
  </label>
  <label disabled class="radio-label-wrap radio-label-wrap-inline">
    <input disabled id="choice-frequency-1" name="frequency" aria-hidden="true" type="radio" class="radio" value="monthly">
    <span class="radio-label">Monthly</span>
  </label>
</fieldset>`,
      small: `<fieldset class="radio-group">
  <legend class="radio-legend">Radio small</legend>
  <label class="radio-label-wrap">
    <input id="choice-strength-0" name="strength" aria-hidden="true" type="radio" class="radio radio-small" value="weak">
    <span class="radio-label radio-label-small">Weak</span>
  </label>
  <label class="radio-label-wrap">
    <input id="choice-strength-1" name="strength" aria-hidden="true" type="radio" class="radio radio-small" value="average">
    <span class="radio-label radio-label-small">Average</span>
  </label>
  <label class="radio-label-wrap">
    <input id="choice-strength-2" name="strength" aria-hidden="true" type="radio" class="radio radio-small" value="strong">
    <span class="radio-label radio-label-small">Strong</span>
  </label>
</fieldset>`,
      large: `<fieldset class="radio-group radio-group-large">
  <legend class="radio-legend">Radio large</legend>
  <label class="radio-label-wrap">
    <input id="choice-size-0" name="size" aria-hidden="true" type="radio" class="radio radio-large" value="small">
    <span class="radio-label radio-label-large">Small</span>
  </label>
  <label class="radio-label-wrap radio-label-wrap-inline">
    <input id="choice-size-1" name="size" aria-hidden="true" type="radio" class="radio radio-large" value="medium">
    <span class="radio-label radio-label-large">Medium</span>
  </label>
  <label class="radio-label-wrap radio-label-wrap-inline">
    <input id="choice-size-2" name="size" aria-hidden="true" type="radio" class="radio radio-large" value="large">
    <span class="radio-label radio-label-large">Large</span>
  </label>
</fieldset>`,
    };
  },
};
</script>


<style module>
.component {
  composes: component from "./partials.module.css";
}
.hotips {
  composes: hotips from "./partials.module.css";
}
.tipcontent {
  composes: tipcontent from "./partials.module.css";
}
.tip {
  composes: tip from "./partials.module.css";
}
.rowRadios {
  margin-block-end: var(--fluid-24);
}
</style>

<style scoped>
.flex {
  display: flex;
  flex-wrap: wrap;
}
.flex > div {
  margin-block-end: var(--fluid-16);
}
</style>
