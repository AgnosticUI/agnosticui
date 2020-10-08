<template>
  <section :class="$style.component">
    <FlexGrid tagName="section">
      <FlexRow v-bind:gutter="16">
        <FlexCol v-bind:xs="12">
          <h1 id="buttons">Buttons</h1>
        </FlexCol>
      </FlexRow>
      <FlexRow v-bind:gutter="16">
        <FlexCol v-bind:xs="12">
          <h3>
            Everyone knows buttons are the life of the party &#128378; &#127867;
          </h3>
        </FlexCol>
      </FlexRow>
      <FlexRow v-bind:gutter="16">
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
      <FlexRow v-bind:gutter="16">
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
      <FlexRow v-bind:gutter="16">
        <FlexCol v-bind:xs="12">
          <h6>Core Buttons</h6>
        </FlexCol>
      </FlexRow>
      <FlexRow v-bind:gutter="16">
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
      <FlexRow v-bind:gutter="16">
        <FlexCol v-bind:xs="12">
          <pre v-highlightjs><code class="html">
&lt;button class=&quot;btn&quot;&gt;Go&lt;/button&gt;
&lt;button class=&quot;btn btn-rounded&quot;&gt;Go&lt;/button&gt;
&lt;button class=&quot;btn btn-raised btn-rounded&quot;&gt;Go&lt;/button&gt;
&lt;button class=&quot;btn btn-bordered&quot;&gt;Go&lt;/button&gt;
&lt;button class=&quot;btn btn-bordered btn-rounded&quot;&gt;Go&lt;/button&gt;
    </code></pre>
        </FlexCol>
      </FlexRow>
      <FlexRow v-bind:gutter="16">
        <FlexCol v-bind:xs="12">
          <h6>Primary</h6>
        </FlexCol>
      </FlexRow>
      <FlexRow v-bind:gutter="16">
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
      <FlexRow v-bind:gutter="16">
        <FlexCol v-bind:xs="12">
          <pre v-highlightjs><code class="html">
&lt;button class=&quot;btn btn-primary&quot;&gt;Go&lt;/button&gt;
&lt;button class=&quot;btn btn-primary btn-rounded&quot;&gt;Go&lt;/button&gt;
&lt;button class=&quot;btn btn-raised btn-primary btn-rounded&quot;&gt;Go&lt;/button&gt;
&lt;button class=&quot;btn btn-primary btn-bordered&quot;&gt;Go&lt;/button&gt;
&lt;button class=&quot;btn btn-primary btn-bordered btn-rounded&quot;&gt;Go&lt;/button&gt;
    </code></pre>
        </FlexCol>
      </FlexRow>
      <FlexRow v-bind:gutter="16">
        <FlexCol v-bind:xs="12">
          <h6>Secondary</h6>
        </FlexCol>
      </FlexRow>
      <FlexRow v-bind:gutter="16">
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
      <FlexRow v-bind:gutter="16">
        <FlexCol v-bind:xs="12">
          <pre v-highlightjs><code class="html">
&lt;button class=&quot;btn btn-secondary&quot;&gt;Go&lt;/Button&gt;
&lt;button class=&quot;btn btn-secondary btn-rounded&quot;&gt;Go&lt;/Button&gt;
&lt;button class=&quot;btn btn-secondary btn-raised btn-rounded&quot;&gt;Go&lt;/Button&gt;
&lt;button class=&quot;btn btn-secondary btn-bordered&quot;&gt;Go&lt;/Button&gt;
&lt;button class=&quot;btn btn-secondary btn-bordered btn-rounded&quot;&gt;Go&lt;/Button&gt;
    </code></pre>
        </FlexCol>
      </FlexRow>
      <FlexRow v-bind:gutter="16">
        <FlexCol v-bind:xs="12">
          <h6>Disabled</h6>
        </FlexCol>
      </FlexRow>
      <FlexRow v-bind:gutter="16">
        <FlexCol v-bind:xs="12">
          <p>
            <Button :isDisabled="true">Go</Button>
          </p>
        </FlexCol>
      </FlexRow>
      <FlexRow v-bind:gutter="16">
        <FlexCol v-bind:xs="12">
          <pre v-highlightjs><code class="html">
&lt;!-- Primary, Secondary, and all variants work the same. Just use
the disabled attribute. --&gt;
&lt;button class=&quot;btn&quot; disabled&gt;Disabled&lt;/Button&gt;
    </code></pre>
        </FlexCol>
      </FlexRow>
      <FlexRow v-bind:gutter="16">
        <FlexCol v-bind:xs="12">
          <h6>Sizes</h6>
        </FlexCol>
      </FlexRow>
      <FlexRow v-bind:gutter="16">
        <FlexCol v-bind:xs="12">
          <p style="display: initial">
            <Button size="small">Go</Button>
            <Button>Go</Button>
            <Button size="large">Go</Button>
          </p>
        </FlexCol>
      </FlexRow>
      <FlexRow v-bind:gutter="16">
        <FlexCol v-bind:xs="12">
          <pre v-highlightjs><code class="html">
&lt;button class=&quot;btn btn-small&quot;&gt;Small&lt;/Button&gt;
&lt;button class=&quot;btn&quot;&gt;Regular&lt;/Button&gt;
&lt;button class=&quot;btn btn-large&quot;&gt;Large&lt;/Button&gt;
    </code></pre>
        </FlexCol>
      </FlexRow>
      <FlexRow v-bind:gutter="16">
        <FlexCol v-bind:xs="12">
          <h6>Block</h6>
        </FlexCol>
      </FlexRow>
      <FlexRow v-bind:gutter="16">
        <FlexCol v-bind:xs="12">
          <p>
            <Button isBlock>Go</Button>
            <Button mode="primary" isBlock>Go</Button>
            <Button mode="secondary" isBlock>Go</Button>
          </p>
        </FlexCol>
      </FlexRow>
      <FlexRow v-bind:gutter="16">
        <FlexCol v-bind:xs="12">
          <pre v-highlightjs><code class="html">
&lt;button class=&quot;btn btn-block&quot;&gt;Go&lt;/Button&gt;
&lt;button class=&quot;btn btn-primary btn-block&quot;&gt;Go&lt;/Button&gt;
&lt;button class=&quot;btn btn-secondary btn-block&quot;&gt;Go&lt;/Button&gt;
    </code></pre>
        </FlexCol>
      </FlexRow>
      <FlexRow v-bind:gutter="16">
        <FlexCol v-bind:xs="12">
          <h6>Misc</h6>
        </FlexCol>
      </FlexRow>
      <FlexRow v-bind:gutter="16">
        <FlexCol v-bind:xs="12">
          <p>
            <Button :isSkinned="false"
              >No skin button (if you want to style yourself)</Button
            >
            <Button isBlank>Blank button</Button>
          </p>
        </FlexCol>
      </FlexRow>
      <FlexRow v-bind:gutter="16">
        <FlexCol v-bind:xs="12">
          <pre v-highlightjs><code class="html">
&lt;button class=&quot;btn-base&quot;&gt;Base no skin&lt;/button&gt;
&lt;button class=&quot;btn btn-blank&quot;&gt;Blank&lt;/button&gt;
    </code></pre>
        </FlexCol>
      </FlexRow>
      <FlexRow v-bind:gutter="16">
        <FlexCol v-bind:xs="12">
          <h6>Button Icons</h6>
        </FlexCol>
      </FlexRow>
      <FlexRow v-bind:gutter="16">
        <FlexCol v-bind:xs="12">
          <p style="display: flex">
            <Button mode="primary" v-bind:isRounded="true">
              Call
              <svg
                :class="this.$style.iconRight"
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
                  d="M11 10c-1 1-1 2-2 2s-2-1-3-2-2-2-2-3 1-1 2-2-2-4-3-4-3 3-3 3c0 2 2.055 6.055 4 8s6 4 8 4c0 0 3-2 3-3s-3-4-4-3z"
                />
              </svg>
            </Button>
            <Button mode="primary" v-bind:isRounded="true">
              <svg
                :class="this.$style.iconLeft"
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
                ></path>
              </svg>
              Download
            </Button>
          </p>
        </FlexCol>
      </FlexRow>
      <FlexRow v-bind:gutter="16">
        <FlexCol v-bind:xs="12">
          <pre v-highlightjs><code class="html">
&#x3C;button class=&#x22;btn btn-primary btn-rounded&#x22;&#x3E; Call
  &#x3C;svg
    stroke=&#x22;currentColor&#x22;
    fill=&#x22;currentColor&#x22;
    stroke-width=&#x22;0&#x22;
    viewBox=&#x22;0 0 16 16&#x22;
    data-custom-icon=&#x22;true&#x22;
    focusable=&#x22;false&#x22;
    aria-hidden=&#x22;true&#x22;
    height=&#x22;14px&#x22;
    width=&#x22;14px&#x22;
    xmlns=&#x22;http://www.w3.org/2000/svg&#x22;
  &#x3E;
    &#x3C;path
      d=&#x22;M11 10c-1 1-1 2-2 2s-2-1-3-2-2-2-2-3 1-1 2-2-2-4-3-4-3 3-3
      3c0 2 2.055 6.055 4 8s6 4 8 4c0 0 3-2 3-3s-3-4-4-3z&#x22;
    /&#x3E;
  &#x3C;/svg&#x3E;
&#x3C;/button&#x3E;
&#x3C;button class=&#x22;btn btn-primary btn-rounded&#x22;&#x3E;
  &#x3C;svg
    stroke=&#x22;currentColor&#x22;
    fill=&#x22;currentColor&#x22;
    stroke-width=&#x22;0&#x22;
    viewBox=&#x22;0 0 16 16&#x22;
    data-custom-icon=&#x22;true&#x22;
    focusable=&#x22;false&#x22;
    aria-hidden=&#x22;true&#x22;
    height=&#x22;14px&#x22;
    width=&#x22;14px&#x22;
    xmlns=&#x22;http://www.w3.org/2000/svg&#x22;
  &#x3E;
    &#x3C;path
      d=&#x22;M14 11v2h-12v-2h-2v4h16v-4zM12 6h-3v-5h-2v5h-3l4 6z&#x22;
    /&#x3E;
  &#x3C;/svg&#x3E; Download
&#x3C;/button&#x3E;
    </code></pre>
        </FlexCol>
      </FlexRow>
      <FlexRow v-bind:gutter="16">
        <FlexCol v-bind:xs="12">
          <h6>Button Groups</h6>
        </FlexCol>
      </FlexRow>
      <FlexRow v-bind:gutter="16">
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
      <FlexRow v-bind:gutter="16">
        <FlexCol v-bind:xs="12">
          <pre v-highlightjs><code class="html">
&lt;div class=&quot;btn-group&quot; role=&quot;group&quot; aria-label=&quot;Button group example&quot;&gt;
  &lt;button class=&quot;btn&quot;&gt;One&lt;/button&gt;
  &lt;button class=&quot;btn&quot;&gt;Two&lt;/button&gt;
  &lt;button class=&quot;btn&quot;&gt;Three&lt;/button&gt;
&lt;/div&gt;
&lt;div class=&quot;btn-group&quot; role=&quot;group&quot; aria-label=&quot;Button group example&quot;&gt;
  &lt;button class=&quot;btn btn-bordered&quot;&gt;One&lt;/button&gt;
  &lt;button class=&quot;btn btn-bordered&quot;&gt;Two&lt;/button&gt;
  &lt;button class=&quot;btn btn-bordered&quot;&gt;Three&lt;/button&gt;
&lt;/div&gt;
&lt;div class=&quot;btn-group&quot; role=&quot;group&quot; aria-label=&quot;Button group example&quot;&gt;
  &lt;button class=&quot;btn btn-raised&quot;&gt;One&lt;/button&gt;
  &lt;button class=&quot;btn btn-raised&quot;&gt;Two&lt;/button&gt;
  &lt;button class=&quot;btn btn-raised&quot;&gt;Three&lt;/button&gt;
&lt;/div&gt;
    </code></pre>
        </FlexCol>
      </FlexRow>
      <FlexRow v-bind:gutter="16">
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
      <FlexRow v-bind:gutter="16">
        <FlexCol v-bind:xs="12">
          <pre v-highlightjs><code class="html">
&lt;div class=&quot;btn-group&quot; role=&quot;group&quot; aria-label=&quot;Button group example&quot;&gt;
  &lt;button class=&quot;btn btn-primary&quot;&gt;One&lt;/button&gt;
  &lt;button class=&quot;btn btn-primary&quot;&gt;Two&lt;/button&gt;
  &lt;button class=&quot;btn btn-primary&quot;&gt;Three&lt;/button&gt;
&lt;/div&gt;
&lt;div class=&quot;btn-group&quot; role=&quot;group&quot; aria-label=&quot;Button group example&quot;&gt;
  &lt;button class=&quot;btn btn-primary btn-bordered&quot;&gt;One&lt;/button&gt;
  &lt;button class=&quot;btn btn-primary btn-bordered&quot;&gt;Two&lt;/button&gt;
  &lt;button class=&quot;btn btn-primary btn-bordered&quot;&gt;Three&lt;/button&gt;
&lt;/div&gt;
&lt;div class=&quot;btn-group&quot; role=&quot;group&quot; aria-label=&quot;Button group example&quot;&gt;
  &lt;button class=&quot;btn btn-primary btn-raised&quot;&gt;One&lt;/button&gt;
  &lt;button class=&quot;btn btn-primary btn-raised&quot;&gt;Two&lt;/button&gt;
  &lt;button class=&quot;btn btn-primary btn-raised&quot;&gt;Three&lt;/button&gt;
&lt;/div&gt;
    </code></pre>
        </FlexCol>
      </FlexRow>
      <FlexRow v-bind:gutter="16">
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
      <FlexRow v-bind:gutter="16">
        <FlexCol v-bind:xs="12">
          <pre v-highlightjs><code class="html">
&lt;div class=&quot;btn-group&quot; role=&quot;group&quot; aria-label=&quot;Button group example&quot;&gt;
  &lt;button class=&quot;btn btn-secondary&quot;&gt;One&lt;/button&gt;
  &lt;button class=&quot;btn btn-secondary&quot;&gt;Two&lt;/button&gt;
  &lt;button class=&quot;btn btn-secondary&quot;&gt;Three&lt;/button&gt;
&lt;/div&gt;
&lt;div class=&quot;btn-group&quot; role=&quot;group&quot; aria-label=&quot;Button group example&quot;&gt;
  &lt;button class=&quot;btn btn-secondary btn-bordered&quot;&gt;One&lt;/button&gt;
  &lt;button class=&quot;btn btn-secondary btn-bordered&quot;&gt;Two&lt;/button&gt;
  &lt;button class=&quot;btn btn-secondary btn-bordered&quot;&gt;Three&lt;/button&gt;
&lt;/div&gt;
&lt;div class=&quot;btn-group&quot; role=&quot;group&quot; aria-label=&quot;Button group example&quot;&gt;
  &lt;button class=&quot;btn btn-secondary btn-raised&quot;&gt;One&lt;/button&gt;
  &lt;button class=&quot;btn btn-secondary btn-raised&quot;&gt;Two&lt;/button&gt;
  &lt;button class=&quot;btn btn-secondary btn-raised&quot;&gt;Three&lt;/button&gt;
&lt;/div&gt;
    </code></pre>
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
  margin-right: 8px;
  width: 14px;
  height: 14px;
}
.iconRight {
  margin-left: 8px;
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
  margin-right: var(--Space-8);
  margin-bottom: var(--Space-12);
}
</style>
