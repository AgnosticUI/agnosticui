<template>
  <section :class="$style.component">
    <FlexGrid tagName="section">
      <FlexRow v-bind:gutter="12">
        <FlexCol v-bind:xs="12">
          <h2 id="buttons">Buttons</h2>
        </FlexCol>
      </FlexRow>
      <FlexRow v-bind:gutter="12">
        <FlexCol v-bind:xs="12">
          <h3>
            Everyone knows buttons are the life of the party &#128378; &#127867;
          </h3>
        </FlexCol>
      </FlexRow>
      <FlexRow v-bind:gutter="12">
        <FlexCol v-bind:xs="12">
          <p>
            Maybe you recognize some of these buttons—if so, it's because most
            of them originally appeared in
            <a href="https://github.com/alexwolfe/Buttons">Sass Buttons</a>, a
            project I coauthored with my good friend
            <a href="https://twitter.com/alexwolfe">Alex Wolfe</a>.
          </p>
        </FlexCol>
      </FlexRow>
      <FlexRow v-bind:gutter="12">
        <FlexCol v-bind:xs="12">
          <p>
            If you're using the CSS AgnosticUI package, you can simply apply the
            global CSS classes you see in the demo below. However, if you're
            using React, Svelte, or Vue, you should utilize that framework's
            version of the Button component as it will provide localized CSS via
            <a href="https://github.com/css-modules/css-modules">CSS Modules</a>
            (React, Vue) or
            <a href="https://vuejs.org/v2/guide/single-file-components.html"
              >SFC</a
            >
            styles (Svelte).
          </p>
        </FlexCol>
      </FlexRow>
      <FlexRow v-bind:gutter="12">
        <FlexCol v-bind:xs="12">
          <h4>Core Buttons</h4>
        </FlexCol>
      </FlexRow>
      <FlexRow v-bind:gutter="12">
        <FlexCol v-bind:xs="12">
          <p class="flex">
            <Button>Go</Button>
            <Button isRounded>Go</Button>
            <Button isRaised isRounded>Go</Button>
            <Button :isBordered="true">Go</Button>
            <Button isBordered isRounded>Go</Button>
          </p>
        </FlexCol>
      </FlexRow>
      <FlexRow v-bind:gutter="12">
        <FlexCol v-bind:xs="12">
          <pre v-highlightjs="basic"><code class="html"></code></pre>
        </FlexCol>
      </FlexRow>
      <FlexRow v-bind:gutter="12">
        <FlexCol v-bind:xs="12">
          <h4>Primary</h4>
        </FlexCol>
      </FlexRow>
      <FlexRow v-bind:gutter="12">
        <FlexCol v-bind:xs="12">
          <p class="flex">
            <Button mode="primary">Go</Button>
            <Button mode="primary" isRounded>Go</Button>
            <Button mode="primary" isRaised isRounded>Go</Button>
            <Button mode="primary" :isBordered="true">Go</Button>
            <Button mode="primary" isBordered isRounded>Go</Button>
          </p>
        </FlexCol>
      </FlexRow>
      <FlexRow v-bind:gutter="12">
        <FlexCol v-bind:xs="12">
          <pre v-highlightjs="primary"><code class="html"></code></pre>
        </FlexCol>
      </FlexRow>
      <FlexRow v-bind:gutter="12">
        <FlexCol v-bind:xs="12">
          <h4>Secondary</h4>
        </FlexCol>
      </FlexRow>
      <FlexRow v-bind:gutter="12">
        <FlexCol v-bind:xs="12">
          <p class="flex">
            <Button mode="secondary">Go</Button>
            <Button mode="secondary" isRounded>Go</Button>
            <Button mode="secondary" isRaised isRounded>Go</Button>
            <Button mode="secondary" :isBordered="true">Go</Button>
            <Button mode="secondary" isBordered isRounded>Go</Button>
          </p>
        </FlexCol>
      </FlexRow>
      <FlexRow v-bind:gutter="12">
        <FlexCol v-bind:xs="12">
          <pre v-highlightjs="secondary"><code class="html"></code></pre>
        </FlexCol>
      </FlexRow>
      <FlexRow v-bind:gutter="12">
        <FlexCol v-bind:xs="12">
          <h4>Disabled</h4>
        </FlexCol>
      </FlexRow>
      <FlexRow v-bind:gutter="12">
        <FlexCol v-bind:xs="12">
          <p>
            <Button :isDisabled="true">Go</Button>
          </p>
        </FlexCol>
      </FlexRow>
      <FlexRow v-bind:gutter="12">
        <FlexCol v-bind:xs="12">
          <pre v-highlightjs="disabled"><code class="html"></code></pre>
        </FlexCol>
      </FlexRow>
      <FlexRow v-bind:gutter="12">
        <FlexCol v-bind:xs="12">
          <h4>Sizes</h4>
        </FlexCol>
      </FlexRow>
      <FlexRow v-bind:gutter="12">
        <FlexCol v-bind:xs="12">
          <p style="display: initial">
            <Button size="small">Go</Button>
            <Button>Go</Button>
            <Button size="large">Go</Button>
          </p>
        </FlexCol>
      </FlexRow>
      <FlexRow v-bind:gutter="12">
        <FlexCol v-bind:xs="12">
          <pre v-highlightjs="sizes"><code class="html"></code></pre>
        </FlexCol>
      </FlexRow>
      <FlexRow v-bind:gutter="12">
        <FlexCol v-bind:xs="12">
          <h4>Block</h4>
        </FlexCol>
      </FlexRow>
      <FlexRow v-bind:gutter="12">
        <FlexCol v-bind:xs="12">
          <p>
            <Button isBlock>Go</Button>
            <Button mode="primary" isBlock>Go</Button>
            <Button mode="secondary" isBlock>Go</Button>
          </p>
        </FlexCol>
      </FlexRow>
      <FlexRow v-bind:gutter="12">
        <FlexCol v-bind:xs="12">
          <pre v-highlightjs="block"><code class="html"></code></pre>
        </FlexCol>
      </FlexRow>
      <FlexRow v-bind:gutter="12">
        <FlexCol v-bind:xs="12">
          <h4>Misc</h4>
        </FlexCol>
      </FlexRow>
      <FlexRow v-bind:gutter="12">
        <FlexCol v-bind:xs="12">
          <p>
            <Button :isSkinned="false">No skin button</Button>
            <Button isBlank>Blank button</Button>
          </p>
        </FlexCol>
      </FlexRow>
      <FlexRow v-bind:gutter="12">
        <FlexCol v-bind:xs="12">
          <pre v-highlightjs="misc"><code class="html"></code></pre>
        </FlexCol>
      </FlexRow>
      <FlexRow v-bind:gutter="12">
        <FlexCol v-bind:xs="12">
          <h4>Button Icons</h4>
        </FlexCol>
      </FlexRow>
      <FlexRow v-bind:gutter="12">
        <FlexCol v-bind:xs="12">
          <p style="display: flex">
            <Button mode="primary" v-bind:isRounded="true">
              Call
              <svg
                :class="this.$style.iconRight"
                role="img"
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 16 16"
                data-custom-icon="true"
                focusable="false"
                aria-hidden="true"
                height="14px"
                width="14px"
                xmlns="http://www.w3.org/2000/svg"
              >
                <desc>Phone icon graphic</desc>
                <path
                  d="M11 10c-1 1-1 2-2 2s-2-1-3-2-2-2-2-3 1-1 2-2-2-4-3-4-3 3-3 3c0 2 2.055 6.055 4 8s6 4 8 4c0 0 3-2 3-3s-3-4-4-3z"
                />
              </svg>
            </Button>
            <Button mode="primary" v-bind:isRounded="true">
              <svg
                :class="this.$style.iconLeft"
                role="img"
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 16 16"
                data-custom-icon="true"
                focusable="false"
                aria-hidden="true"
                height="14px"
                width="14px"
                xmlns="http://www.w3.org/2000/svg"
              >
                <desc>Download icon graphic</desc>
                <path
                  d="M14 11v2h-12v-2h-2v4h16v-4zM12 6h-3v-5h-2v5h-3l4 6z"
                ></path>
              </svg>
              Download
            </Button>
          </p>
        </FlexCol>
      </FlexRow>
      <FlexRow v-bind:gutter="12">
        <FlexCol v-bind:xs="12">
          <pre v-highlightjs="icons"><code class="html"></code></pre>
        </FlexCol>
      </FlexRow>
      <FlexRow v-bind:gutter="12">
        <FlexCol v-bind:xs="12">
          <h4>Button Groups</h4>
        </FlexCol>
      </FlexRow>
      <FlexRow v-bind:gutter="12">
        <FlexCol v-bind:xs="12">
          <p>
            <ButtonGroup ariaLabel="Button group (default) examples">
              <Button>One</Button>
              <Button>Two</Button>
              <Button>Three</Button>
            </ButtonGroup>
            <ButtonGroup ariaLabel="Button group (border) examples">
              <Button isBordered>One</Button>
              <Button isBordered>Two</Button>
              <Button isBordered>Three</Button>
            </ButtonGroup>
            <ButtonGroup ariaLabel="Button group (raised) examples">
              <Button isRaised>One</Button>
              <Button isRaised>Two</Button>
              <Button isRaised>Three</Button>
            </ButtonGroup>
          </p>
        </FlexCol>
      </FlexRow>
      <FlexRow v-bind:gutter="12">
        <FlexCol v-bind:xs="12">
          <pre v-highlightjs="groups"><code class="html"></code></pre>
        </FlexCol>
      </FlexRow>
      <FlexRow v-bind:gutter="12">
        <FlexCol v-bind:xs="12">
          <p>
            <ButtonGroup
              ariaLabel="Button group examples using primary buttons"
            >
              <Button mode="primary">One</Button>
              <Button mode="primary">Two</Button>
              <Button mode="primary">Three</Button>
            </ButtonGroup>
            <ButtonGroup
              ariaLabel="Button group examples using primary and bordered buttons"
            >
              <Button mode="primary" :isBordered="true">One</Button>
              <Button mode="primary" isBordered>Two</Button>
              <Button mode="primary" isBordered>Three</Button>
            </ButtonGroup>
            <ButtonGroup
              ariaLabel="Button group examples using primary and raised buttons"
            >
              <Button mode="primary" :isRaised="true">One</Button>
              <Button mode="primary" :isRaised="true">Two</Button>
              <Button mode="primary" isRaised>Three</Button>
            </ButtonGroup>
          </p>
        </FlexCol>
      </FlexRow>
      <FlexRow v-bind:gutter="12">
        <FlexCol v-bind:xs="12">
          <pre v-highlightjs="groupsPrimary"><code class="html"></code></pre>
        </FlexCol>
      </FlexRow>
      <FlexRow v-bind:gutter="12">
        <FlexCol v-bind:xs="12">
          <p>
            <ButtonGroup
              ariaLabel="Button group examples using secondary buttons"
            >
              <Button mode="secondary">One</Button>
              <Button mode="secondary">Two</Button>
              <Button mode="secondary">Three</Button>
            </ButtonGroup>
            <ButtonGroup
              ariaLabel="Button group examples using secondary and bordered buttons"
            >
              <Button mode="secondary" :isBordered="true">One</Button>
              <Button mode="secondary" isBordered>Two</Button>
              <Button mode="secondary" isBordered>Three</Button>
            </ButtonGroup>
            <ButtonGroup
              ariaLabel="Button group examples using secondary and raised buttons"
            >
              <Button mode="secondary" :isRaised="true">One</Button>
              <Button mode="secondary" :isRaised="true">Two</Button>
              <Button mode="secondary" isRaised>Three</Button>
            </ButtonGroup>
          </p>
        </FlexCol>
      </FlexRow>
      <FlexRow v-bind:gutter="12">
        <FlexCol v-bind:xs="12">
          <pre v-highlightjs="groupsSecondary"><code class="html"></code></pre>
        </FlexCol>
      </FlexRow>
    </FlexGrid>
  </section>
</template>
<script>
import Button from "agnosticui/Button.vue";
import ButtonGroup from "agnosticui/ButtonGroup.vue";
import FlexGrid from "agnosticui/FlexGrid/FlexGrid";
import FlexRow from "agnosticui/FlexGrid/FlexRow";
import FlexCol from "agnosticui/FlexGrid/FlexCol";

export default {
  name: "Buttons",
  components: {
    Button,
    ButtonGroup,
    FlexCol,
    FlexGrid,
    FlexRow,
  },
  data() {
    // This seems to be the easiest way to display these as basic html
    // 1. add the vue snippet
    // 2. grab resulting html rendered
    // 3. create a data key for it like you see here
    // 4. <pre v-highlightjs="basic"><code class="html">
    // https://stackoverflow.com/questions/46564752/how-do-i-get-highlight-js-to-show-html-in-a-vue-component
    return {
      basic: `<button class="btn">Go</button>
<button class="btn btn-rounded">Go</button>
<button class="btn btn-raised btn-rounded">Go</button>
<button class="btn btn-bordered">Go</button>
<button class="btn btn-bordered btn-rounded">Go</button>
`,
      primary: `<button type="button" class="btn btn-primary">Go</button>
<button type="button" class="btn btn-rounded btn-primary">Go</button>
<button type="button" class="btn btn-rounded btn-raised btn-primary">Go</button>
<button type="button" class="btn btn-bordered btn-primary">Go</button>
<button type="button" class="btn btn-bordered btn-rounded btn-primary">Go</button>`,
      secondary: `<button class="btn btn-secondary">Go</Button>
<button class="btn btn-secondary btn-rounded">Go</Button>
<button class="btn btn-secondary btn-raised btn-rounded">Go</Button>
<button class="btn btn-secondary btn-bordered">Go</Button>
<button class="btn btn-secondary btn-bordered btn-rounded">Go</Button>`,
      disabled: `<!-- Primary, Secondary, and all variants work the same. Just use
the disabled attribute. -->
<button class="btn" disabled>Disabled</Button>`,
      sizes: `<button class="btn btn-small">Small</Button>
<button class="btn">Regular</Button>
<button class="btn btn-large">Large</Button>`,
      block: `<button class="btn btn-block">Go</Button>
<button class="btn btn-primary btn-block">Go</Button>
<button class="btn btn-secondary btn-block">Go</Button>`,
      misc: `<button class="btn-base">Base no skin</button>
<button class="btn btn-blank">Blank</button>`,
      icons: `<button class="btn btn-primary btn-rounded"> Call
  <svg
    stroke="currentColor"
    fill="currentColor"
    stroke-width="0"
    viewBox="0 0 16 16"
    data-custom-icon="true"
    focusable="false"
    aria-hidden="true"
    height="14px"
    width="14px"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M11 10c-1 1-1 2-2 2s-2-1-3-2-2-2-2-3 1-1 2-2-2-4-3-4-3 3-3
      3c0 2 2.055 6.055 4 8s6 4 8 4c0 0 3-2 3-3s-3-4-4-3z"
    />
  </svg>
</button>
<button class="btn btn-primary btn-rounded">
  <svg
    stroke="currentColor"
    fill="currentColor"
    stroke-width="0"
    viewBox="0 0 16 16"
    data-custom-icon="true"
    focusable="false"
    aria-hidden="true"
    height="14px"
    width="14px"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M14 11v2h-12v-2h-2v4h16v-4zM12 6h-3v-5h-2v5h-3l4 6z"
    />
  </svg> Download
</button>`,
      groups: `<div class="btn-group" role="group" aria-label="Button group example">
  <button class="btn">One</button>
  <button class="btn">Two</button>
  <button class="btn">Three</button>
</div>
<div class="btn-group" role="group" aria-label="Button group example">
  <button class="btn btn-bordered">One</button>
  <button class="btn btn-bordered">Two</button>
  <button class="btn btn-bordered">Three</button>
</div>
<div class="btn-group" role="group" aria-label="Button group example">
  <button class="btn btn-raised">One</button>
  <button class="btn btn-raised">Two</button>
  <button class="btn btn-raised">Three</button>
</div>`,
      groupsPrimary: `<div class="btn-group" role="group" aria-label="Button group example">
  <button class="btn btn-primary">One</button>
  <button class="btn btn-primary">Two</button>
  <button class="btn btn-primary">Three</button>
</div>
<div class="btn-group" role="group" aria-label="Button group example">
  <button class="btn btn-primary btn-bordered">One</button>
  <button class="btn btn-primary btn-bordered">Two</button>
  <button class="btn btn-primary btn-bordered">Three</button>
</div>
<div class="btn-group" role="group" aria-label="Button group example">
  <button class="btn btn-primary btn-raised">One</button>
  <button class="btn btn-primary btn-raised">Two</button>
  <button class="btn btn-primary btn-raised">Three</button>
</div>`,
      groupsSecondary: `<div class="btn-group" role="group" aria-label="Button group example">
  <button class="btn btn-secondary">One</button>
  <button class="btn btn-secondary">Two</button>
  <button class="btn btn-secondary">Three</button>
</div>
<div class="btn-group" role="group" aria-label="Button group example">
  <button class="btn btn-secondary btn-bordered">One</button>
  <button class="btn btn-secondary btn-bordered">Two</button>
  <button class="btn btn-secondary btn-bordered">Three</button>
</div>
<div class="btn-group" role="group" aria-label="Button group example">
  <button class="btn btn-secondary btn-raised">One</button>
  <button class="btn btn-secondary btn-raised">Two</button>
  <button class="btn btn-secondary btn-raised">Three</button>
</div>`,
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
.iconLeft {
  margin-inline-end: 8px;
  width: 14px;
  height: 14px;
}
.iconRight {
  margin-inline-start: 8px;
  width: 14px;
  height: 14px;
}
</style>

<style scoped>
.flex {
  display: flex;
  flex-wrap: wrap;
}

Button {
  margin-inline-end: var(--fluid-8);
  margin-inline-start: var(--fluid-12);
}
</style>
