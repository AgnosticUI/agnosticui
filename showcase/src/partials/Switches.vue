<template>
  <section :class="$style.component">
    <FlexGrid tagName="section">
      <FlexRow v-bind:gutter="12">
        <FlexCol v-bind:xs="12">
          <h2 id="switches">Switch</h2>
        </FlexCol>
      </FlexRow>
      <FlexRow v-bind:gutter="12">
        <FlexCol v-bind:xs="12">
          <h3>
            AgnosticUI offers a <i>Switch</i> components in the framework
            implementations. The CSS package simply offers class-based styling
            for inputs of type checkbox and what you'll see on this page.
          </h3>
        </FlexCol>
      </FlexRow>
      <FlexRow v-bind:gutter="12">
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
      <FlexRow v-bind:gutter="12">
        <FlexCol v-bind:xs="12">
          <h4>Switches</h4>
        </FlexCol>
      </FlexRow>
      <FlexRow :customClasses="$style.rowSwitches" v-bind:gutter="12">
        <FlexCol v-bind:xs="12">
          <p class="flex">
            <AgSwitch id="1" size="small" label="Switch small" />
          </p>
        </FlexCol>
      </FlexRow>
      <FlexRow v-bind:gutter="12">
        <FlexCol v-bind:xs="12">
          <pre v-highlightjs="small"><code class="html"></code></pre>
        </FlexCol>
      </FlexRow>
      <FlexRow :customClasses="$style.rowSwitches" v-bind:gutter="12">
        <FlexCol v-bind:xs="12">
          <p class="flex">
            <AgSwitch id="2" label="Switch default" />
          </p>
        </FlexCol>
      </FlexRow>
      <FlexRow v-bind:gutter="12">
        <FlexCol v-bind:xs="12">
          <pre v-highlightjs="regular"><code class="html"></code></pre>
        </FlexCol>
      </FlexRow>
      <FlexRow :customClasses="$style.rowSwitches" v-bind:gutter="12">
        <FlexCol v-bind:xs="12">
          <p class="flex">
            <AgSwitch id="3" size="large" label="Switch large" />
          </p>
        </FlexCol>
      </FlexRow>
      <FlexRow v-bind:gutter="12">
        <FlexCol v-bind:xs="12">
          <pre v-highlightjs="large"><code class="html"></code></pre>
        </FlexCol>
      </FlexRow>
      <FlexRow :customClasses="$style.rowSwitches" v-bind:gutter="12">
        <FlexCol v-bind:xs="12">
          <p class="flex">
            <AgSwitch id="4" isAction label="Switch action" />
          </p>
        </FlexCol>
      </FlexRow>
      <FlexRow v-bind:gutter="12">
        <FlexCol v-bind:xs="12">
          <pre v-highlightjs="action"><code class="html"></code></pre>
        </FlexCol>
      </FlexRow>
      <FlexRow :customClasses="$style.rowSwitches" v-bind:gutter="12">
        <FlexCol v-bind:xs="12">
          <p class="flex">
            <AgSwitch id="5" isAction isBordered label="Switch action bordered" />
          </p>
        </FlexCol>
      </FlexRow>
      <FlexRow v-bind:gutter="12">
        <FlexCol v-bind:xs="12">
          <pre v-highlightjs="actionBordered"><code class="html"></code></pre>
        </FlexCol>
      </FlexRow>
      <FlexRow :customClasses="$style.rowSwitches" v-bind:gutter="12">
        <FlexCol v-bind:xs="12">
          <p class="flex">
            Add the <pre class="inline-code"> disabled </pre> class to the label, and <pre class="inline-code"> disabled </pre> attribute to the checkbox input of any option you'd like disabled.
          </p>
          <p class="flex">
            <AgSwitch id="6" label="Switch disabled" disabled />
          </p>
        </FlexCol>
      </FlexRow>
      <FlexRow v-bind:gutter="12">
        <FlexCol v-bind:xs="12">
          <pre v-highlightjs="regularDisabled"><code class="html"></code></pre>
        </FlexCol>
      </FlexRow>
    </FlexGrid>
  </section>
</template>
<script>
import AgSwitch from "agnosticui/Switch.vue";
import FlexGrid from "agnosticui/FlexGrid/FlexGrid";
import FlexRow from "agnosticui/FlexGrid/FlexRow";
import FlexCol from "agnosticui/FlexGrid/FlexCol";

export default {
  name: "Switches",
  components: {
    AgSwitch,
    FlexCol,
    FlexGrid,
    FlexRow,
  },
  data() {
    return {
      small: `<label for="1" class="switch-container">
  <span class="switch-label">Switch small</span>
  <input type="checkbox" id="1" role="switch" aria-pressed="false" class="switch-input">
  <span aria-hidden="true" class="switch switch-small"></span>
</label>`,
      regular: `<label for="2" class="switch-container">
  <span class="switch-label">Switch default</span>
  <input type="checkbox" id="1" role="switch" aria-pressed="false" class="switch-input">
  <span aria-hidden="true" class="switch"></span>
</label>`,
      regularDisabled: `<label for="2" class="disabled switch-container">
  <span class="switch-label">Switch default</span>
  <input disabled type="checkbox" id="1" role="switch" aria-pressed="false" class="switch-input">
  <span aria-hidden="true" class="switch"></span>
</label>`,
      large: `<label for="1" class="switch-container">
  <span class="switch-label">Switch large</span>
  <input type="checkbox" id="1" role="switch" aria-pressed="false" class="switch-input">
  <span aria-hidden="true" class="switch switch-large"></span>
</label>`,
      action: `<label for="2" class="switch-container">
  <span class="switch-label">Switch action</span>
  <input type="checkbox" id="1" role="switch" aria-pressed="false" class="switch-input">
  <span aria-hidden="true" class="switch switch-action"></span>
</label>`,
      actionBordered: `<label for="2" class="switch-container">
  <span class="switch-label">Switch action bordered</span>
  <input type="checkbox" id="1" role="switch" aria-pressed="false" class="switch-input">
  <span aria-hidden="true" class="switch switch-border switch-action"></span>
</label>`,
    };
  },
};
</script>

<style module>
.component {
  composes: component from "./partials.module.css";
}
.rowSwitches {
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
