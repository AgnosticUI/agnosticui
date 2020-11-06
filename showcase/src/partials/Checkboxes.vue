<template>
  <section :class="$style.component">
    <FlexGrid tagName="section">
      <FlexRow v-bind:gutter="16">
        <FlexCol v-bind:xs="12">
          <h2 id="checkboxes">Checkboxes</h2>
        </FlexCol>
      </FlexRow>
      <FlexRow v-bind:gutter="16">
        <FlexCol v-bind:xs="12">
          <h3>
            AgnosticUI offers <i>ChoicesInput</i> components in the framework
            implementations. The CSS package simply offers class-based styling
            for inputs of type checkbox and what you'll see on this page.
          </h3>
        </FlexCol>
      </FlexRow>
      <FlexRow v-bind:gutter="16">
        <FlexCol v-bind:xs="12">
          <p>
            AgnosticUI does its best to preserve a11y leveraging research from
            several resources:
            <a href="https://www.smashingmagazine.com/author/heydon-pickering/"
              >Heydon Pickering's articles</a
            >
            and his
            <a href="http://book.inclusive-components.design/"
              >Inclusive Components book</a
            >,
            <a
              href="https://www.sarasoueidan.com/blog/inclusively-hiding-and-styling-checkboxes-and-radio-buttons/"
              >Sara Soueidan</a
            >,
            <a
              href="https://scottaohara.github.io/a11y_styled_form_controls/src/checkbox/index.html"
              >Scott O'Hara</a
            >, <a href="https://github.com/mdo/wtf-forms/">MDO</a>,
            <a
              href="https://adrianroselli.com/2017/05/under-engineered-custom-radio-buttons-and-checkboxen.html"
              >Adrian Roselli</a
            >, and the list goes on. Our checkbox is an amalgamation of the
            above-mentioned research.
          </p>
        </FlexCol>
      </FlexRow>
      <FlexRow v-bind:gutter="16">
        <FlexCol v-bind:xs="12">
          <h4>Checkboxes</h4>
        </FlexCol>
      </FlexRow>
      <FlexRow :customClasses="$style.rowCheckboxes" v-bind:gutter="16">
        <FlexCol v-bind:xs="16">
          <p class="flex">
            <AgChoiceInput
              type="checkbox"
              size="small"
              isInline
              :options="reusableOptions"
              legendLabel="Checkbox small &amp; inline"
            />
          </p>
        </FlexCol>
      </FlexRow>
      <FlexRow v-bind:gutter="16">
        <FlexCol v-bind:xs="12">
          <pre v-highlightjs="small"><code class="html"></code></pre>
        </FlexCol>
      </FlexRow>
      <FlexRow :customClasses="$style.rowCheckboxes" v-bind:gutter="16">
        <FlexCol v-bind:xs="16">
          <p class="flex">
            <AgChoiceInput
              type="checkbox"
              :options="reusableOptions"
              legendLabel="Checkbox"
            />
          </p>
        </FlexCol>
      </FlexRow>
      <FlexRow v-bind:gutter="16">
        <FlexCol v-bind:xs="12">
          <pre v-highlightjs="regular"><code class="html"></code></pre>
        </FlexCol>
      </FlexRow>
      <FlexRow :customClasses="$style.rowCheckboxes" v-bind:gutter="16">
        <FlexCol v-bind:xs="12">
          <p class="flex">
            <AgChoiceInput
              type="checkbox"
              size="large"
              :options="reusableOptions"
              legendLabel="Checkbox large"
            />
          </p>
        </FlexCol>
      </FlexRow>
      <FlexRow v-bind:gutter="16">
        <FlexCol v-bind:xs="12">
          <pre v-highlightjs="large"><code class="html"></code></pre>
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
  name: "Inputs",
  components: {
    AgChoiceInput,
    FlexCol,
    FlexGrid,
    FlexRow,
  },
  data() {
    return {
      reusableOptions: [
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
      small: `<fieldset class="checkbox-group checkbox-group-small">
  <legend class="checkbox-legend">Checkbox small &amp; inline</legend>
  <label class="checkbox-label-wrap checkbox-label-wrap-inline">
    <input id="choice-frequency-2" name="frequency"
      aria-hidden="true" type="checkbox" class="checkbox checkbox-small" value="daily">
    <span class="checkbox-label checkbox-label-small">Daily</span>
  </label>
  <label class="checkbox-label-wrap checkbox-label-wrap-inline">
    <input id="choice-frequency-2" name="frequency"
      aria-hidden="true" type="checkbox" class="checkbox checkbox-small" value="weekly">
    <span class="checkbox-label checkbox-label-small">Weekly</span>
  </label>
  <label class="checkbox-label-wrap checkbox-label-wrap-inline">
    <input id="choice-frequency-2" name="frequency"
      aria-hidden="true" type="checkbox" class="checkbox checkbox-small" value="monthly">
    <span class="checkbox-label checkbox-label-small">Monthly</span>
  </label>
</fieldset>`,
      regular: `<fieldset class="checkbox-group">
  <legend class="checkbox-legend">Checkbox</legend>
  <label class="checkbox-label-wrap">
    <input id="choice-frequency-0" name="frequency"
      aria-hidden="true" type="checkbox" class="checkbox" value="daily">
    <span class="checkbox-label">Daily</span>
  </label>
  <label class="checkbox-label-wrap">
    <input id="choice-frequency-1" name="frequency"
      aria-hidden="true" type="checkbox" class="checkbox" value="weekly">
    <span class="checkbox-label">Weekly</span>
  </label>
  <label class="checkbox-label-wrap">
    <input id="choice-frequency-2" name="frequency"
      aria-hidden="true" type="checkbox" class="checkbox" value="monthly">
    <span class="checkbox-label">Monthly</span>
  </label>
</fieldset>`,
      large: `<fieldset class="checkbox-group checkbox-group-large">
  <legend class="checkbox-legend">Checkbox legend</legend>
  <label class="checkbox-label-wrap">
    <input id="choice-frequency-0" name="frequency"
      aria-hidden="true" type="checkbox" class="checkbox checkbox-large" value="daily">
    <span class="checkbox-label checkbox-label-large">Daily</span>
  </label>
  <label class="checkbox-label-wrap">
    <input id="choice-frequency-1" name="frequency"
      aria-hidden="true" type="checkbox" class="checkbox checkbox-large" value="weekly">
    <span class="checkbox-label checkbox-label-large">Weekly</span>
  </label>
  <label class="checkbox-label-wrap">
    <input id="choice-frequency-2" name="frequency"
      aria-hidden="true" type="checkbox" class="checkbox checkbox-large" value="monthly">
    <span class="checkbox-label checkbox-label-large">Monthly</span>
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
.rowCheckboxes {
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
