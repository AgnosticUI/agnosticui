<template>
  <section :class="$style.component">
    <h1 id="buttons">Buttons</h1>
    <h3>Everyone knows buttons are the life of the party &#128378; &#127867;</h3>
    <p>
      Maybe you recognize some of these buttons—if so, it's because most of them originally
      appeared in
      <a
        href="https://github.com/alexwolfe/Buttons"
      >Sass Buttons</a>, a project I coauthored with my good friend
      <a href="https://twitter.com/alexwolfe">Alex Wolfe</a>.
    </p>
    <p>
      If you're using the CSS AgnosticUI package, you can simply apply the global CSS classes
      you see in the demo below. However, if you're using React, Svelte, or
      Vue, you should utilize that framework's version of the Button component as it will provide
      localized CSS via
      <a
        href="https://github.com/css-modules/css-modules"
      >CSS Modules</a> (React, Vue) or
      <a href="https://vuejs.org/v2/guide/single-file-components.html">SFC</a> styles (Svelte).
    </p>
    <h6>Core Buttons</h6>
    <p class="flex">
      <Button>Go</Button>
      <Button isRounded>Go</Button>
      <Button isRaised isRounded>Go</Button>
      <Button :isBordered="true">Go</Button>
      <Button isBordered isRounded>Go</Button>
    </p>

    <pre v-highlightjs><code class="html">
&lt;button class=&quot;btn&quot;&gt;Go&lt;/button&gt;
&lt;button class=&quot;btn btn-rounded&quot;&gt;Go&lt;/button&gt;
&lt;button class=&quot;btn btn-raised btn-rounded&quot;&gt;Go&lt;/button&gt;
&lt;button class=&quot;btn btn-bordered&quot;&gt;Go&lt;/button&gt;
&lt;button class=&quot;btn btn-bordered btn-rounded&quot;&gt;Go&lt;/button&gt;
    </code></pre>
    <h6>Primary</h6>
    <p class="flex">
      <Button mode="primary">Go</Button>
      <Button mode="primary" isRounded>Go</Button>
      <Button mode="primary" isRaised isRounded>Go</Button>
      <Button mode="primary" :isBordered="true">Go</Button>
      <Button mode="primary" isBordered isRounded>Go</Button>
    </p>
    <pre v-highlightjs><code class="html">
&lt;button class=&quot;btn btn-primary&quot;&gt;Go&lt;/button&gt;
&lt;button class=&quot;btn btn-primary btn-rounded&quot;&gt;Go&lt;/button&gt;
&lt;button class=&quot;btn btn-raised btn-primary btn-rounded&quot;&gt;Go&lt;/button&gt;
&lt;button class=&quot;btn btn-primary btn-bordered&quot;&gt;Go&lt;/button&gt;
&lt;button class=&quot;btn btn-primary btn-bordered btn-rounded&quot;&gt;Go&lt;/button&gt;
    </code></pre>
    <h6>Secondary</h6>
    <p class="flex">
      <Button mode="secondary">Go</Button>
      <Button mode="secondary" isRounded>Go</Button>
      <Button mode="secondary" isRaised isRounded>Go</Button>
      <Button mode="secondary" :isBordered="true">Go</Button>
      <Button mode="secondary" isBordered isRounded>Go</Button>
    </p>
    <pre v-highlightjs><code class="html">
&lt;button class=&quot;btn btn-secondary&quot;&gt;Go&lt;/Button&gt;
&lt;button class=&quot;btn btn-secondary btn-rounded&quot;&gt;Go&lt;/Button&gt;
&lt;button class=&quot;btn btn-secondary btn-raised btn-rounded&quot;&gt;Go&lt;/Button&gt;
&lt;button class=&quot;btn btn-secondary btn-bordered&quot;&gt;Go&lt;/Button&gt;
&lt;button class=&quot;btn btn-secondary btn-bordered btn-rounded&quot;&gt;Go&lt;/Button&gt;
    </code></pre>

    <h6>Disabled</h6>
    <p>
      <Button :isDisabled="true">Go</Button>
    </p>

    <pre v-highlightjs><code class="html">
&lt;!-- Primary, Secondary, and all variants work the same. Just use the disabled attribute. --&gt;
&lt;button class=&quot;btn&quot; disabled&gt;Disabled&lt;/Button&gt;
    </code></pre>

    <h6>Sizes</h6>
    <p style="display: initial;">
      <Button size="small">Go</Button>
      <Button>Go</Button>
      <Button size="large">Go</Button>
    </p>

    <pre v-highlightjs><code class="html">
&lt;button class=&quot;btn btn-small&quot;&gt;Small&lt;/Button&gt;
&lt;button class=&quot;btn&quot;&gt;Regular&lt;/Button&gt;
&lt;button class=&quot;btn btn-large&quot;&gt;Large&lt;/Button&gt;
    </code></pre>

    <h6>Block</h6>
    <p>
      <Button isBlock>Go</Button>
      <Button mode="primary" isBlock>Go</Button>
      <Button mode="secondary" isBlock>Go</Button>
    </p>
    <pre v-highlightjs><code class="html">
&lt;button class=&quot;btn btn-block&quot;&gt;Go&lt;/Button&gt;
&lt;button class=&quot;btn btn-primary btn-block&quot;&gt;Go&lt;/Button&gt;
&lt;button class=&quot;btn btn-secondary btn-block&quot;&gt;Go&lt;/Button&gt;
    </code></pre>

    <h6>Misc</h6>
    <p>
      <Button :isSkinned="false">No skin button (if you want to style yourself)</Button>
      <Button isBlank>Blank button</Button>
    </p>
    <pre v-highlightjs><code class="html">
&lt;button class=&quot;btn-base&quot;&gt;Base no skin&lt;/button&gt;
&lt;button class=&quot;btn btn-blank&quot;&gt;Blank&lt;/button&gt;
    </code></pre>
    <h6>Button Icons</h6>
    <p style="display: flex;">
      <Button mode="primary" v-bind:isRounded="true">
        Call
        <svg
          :class="this.$style.iconRight"
          stroke="currentColor"
          fill="currentColor"
          stroke-width="0"
          viewBox="0 0 24 24"
          data-custom-icon="true"
          focusable="false"
          aria-hidden="true"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36
            1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39
            0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57
            3.57.11.35.03.74-.25 1.02l-2.2 2.2z"
          />
        </svg>
      </Button>
      <Button mode="primary" v-bind:isRounded="true">
        <svg
          :class="this.$style.iconLeft"
          viewBox="0 0 16 16"
          version="1.1"
          width="16"
          height="16"
          aria-hidden="true"
        >
          <path
            fill="currentColor"
            fill-rule="evenodd"
            d="M9 12h2l-3 3-3-3h2V7h2v5zm3-8c0-.44-.91-3-4.5-3C5.08 1 3 2.92 3 5 1.02
            5 0 6.52 0 8c0 1.53 1 3 3 3h3V9.7H3C1.38 9.7 1.3 8.28 1.3 8c0-.17.05-1.7
            1.7-1.7h1.3V5c0-1.39 1.56-2.7 3.2-2.7 2.55 0 3.13 1.55 3.2 1.8v1.2H12c.81
            0 2.7.22 2.7 2.2 0 2.09-2.25 2.2-2.7 2.2h-2V11h2c2.08 0 4-1.16 4-3.5C16
            5.06 14.08 4 12 4z"
          />
        </svg> Download
      </Button>
    </p>
    <pre v-highlightjs><code class="html">
&#x3C;button class=&#x22;btn btn-primary btn-rounded&#x22;&#x3E; Call
  &#x3C;svg
    stroke=&#x22;currentColor&#x22;
    fill=&#x22;currentColor&#x22;
    stroke-width=&#x22;0&#x22;
    viewBox=&#x22;0 0 24 24&#x22;
    data-custom-icon=&#x22;true&#x22;
    focusable=&#x22;false&#x22;
    aria-hidden=&#x22;true&#x22;
    height=&#x22;1em&#x22;
    width=&#x22;1em&#x22;
    xmlns=&#x22;http://www.w3.org/2000/svg&#x22;
  &#x3E;
    &#x3C;path
      d=&#x22;M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36
      1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39
      0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57
      3.57.11.35.03.74-.25 1.02l-2.2 2.2z&#x22;
    /&#x3E;
  &#x3C;/svg&#x3E;
&#x3C;/button&#x3E;
&#x3C;button class=&#x22;btn btn-primary btn-rounded&#x22;&#x3E;
    :class=&#x22;this.$style.iconLeft&#x22;
    viewBox=&#x22;0 0 16 16&#x22;
    version=&#x22;1.1&#x22;
    width=&#x22;16&#x22;
    height=&#x22;16&#x22;
    aria-hidden=&#x22;true&#x22;
  &#x3E;
    &#x3C;path
      fill=&#x22;currentColor&#x22;
      fill-rule=&#x22;evenodd&#x22;
      d=&#x22;M9 12h2l-3 3-3-3h2V7h2v5zm3-8c0-.44-.91-3-4.5-3C5.08 1 3 2.92 3 5 1.02
      5 0 6.52 0 8c0 1.53 1 3 3 3h3V9.7H3C1.38 9.7 1.3 8.28 1.3 8c0-.17.05-1.7
      1.7-1.7h1.3V5c0-1.39 1.56-2.7 3.2-2.7 2.55 0 3.13 1.55 3.2 1.8v1.2H12c.81
      0 2.7.22 2.7 2.2 0 2.09-2.25 2.2-2.7 2.2h-2V11h2c2.08 0 4-1.16 4-3.5C16
      5.06 14.08 4 12 4z&#x22;
    /&#x3E;
  &#x3C;/svg&#x3E; Download
&#x3C;/button&#x3E;
    </code></pre>

    <h6>Button Groups</h6>
    <p>
      <ButtonGroup>
        <Button>One</Button>
        <Button>Two</Button>
        <Button>Three</Button>
      </ButtonGroup>
      <ButtonGroup>
        <Button isBordered>One</Button>
        <Button isBordered>Two</Button>
        <Button isBordered>Three</Button>
      </ButtonGroup>
      <ButtonGroup>
        <Button isRaised>One</Button>
        <Button isRaised>Two</Button>
        <Button isRaised>Three</Button>
      </ButtonGroup>
    </p>
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
    <p>
      <ButtonGroup>
        <Button mode="primary">One</Button>
        <Button mode="primary">Two</Button>
        <Button mode="primary">Three</Button>
      </ButtonGroup>
      <ButtonGroup>
        <Button mode="primary" :isBordered="true">One</Button>
        <Button mode="primary" isBordered>Two</Button>
        <Button mode="primary" isBordered>Three</Button>
      </ButtonGroup>
      <ButtonGroup>
        <Button mode="primary" :isRaised="true">One</Button>
        <Button mode="primary" :isRaised="true">Two</Button>
        <Button mode="primary" isRaised>Three</Button>
      </ButtonGroup>
    </p>
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
    <p>
      <ButtonGroup>
        <Button mode="secondary">One</Button>
        <Button mode="secondary">Two</Button>
        <Button mode="secondary">Three</Button>
      </ButtonGroup>
      <ButtonGroup>
        <Button mode="secondary" :isBordered="true">One</Button>
        <Button mode="secondary" isBordered>Two</Button>
        <Button mode="secondary" isBordered>Three</Button>
      </ButtonGroup>
      <ButtonGroup>
        <Button mode="secondary" :isRaised="true">One</Button>
        <Button mode="secondary" :isRaised="true">Two</Button>
        <Button mode="secondary" isRaised>Three</Button>
      </ButtonGroup>
    </p>
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
  </section>
</template>
<script>
import Button from "agnosticui/Button.vue";
import ButtonGroup from "agnosticui/ButtonGroup.vue";
export default {
  name: "Buttons",
  components: { ButtonGroup, Button },
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
}
.iconRight {
  margin-left: 8px;
}
</style>

<style scoped>
.flex {
  display: flex;
}
Button {
  margin-right: var(--Space-8);
  margin-bottom: var(--Space-12);
}
</style>
