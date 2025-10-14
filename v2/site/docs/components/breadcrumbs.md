# Breadcrumbs

The `Breadcrumb` component is a <span class="quoted">wayfinding</span> element that helps make users aware of their current location within an application or website.

## Examples

<BreadcrumbExamples />

<script setup>
import BreadcrumbExamples from '../examples/BreadcrumbExamples.vue'
</script>

## Usage

```vue{4}
<template>
  <section>
    <div class="mbe4">
      <div class="mbe2">
        <h3>Default</h3>
      </div>
      <VueBreadcrumb
        :items="items"
        @breadcrumb-click="handleClick"
      />
    </div>
    <div class="mbe4">
      <div class="mbe2">
        <h3>Types</h3>
      </div>
      <VueBreadcrumb
        type="slash"
        :items="items"
        @breadcrumb-click="handleClick"
      />
      <VueBreadcrumb
        type="bullet"
        :items="items"
        @breadcrumb-click="handleClick"
      />
      <VueBreadcrumb
        type="arrow"
        :items="items"
        @breadcrumb-click="handleClick"
      />
      <VueBreadcrumb
        primary
        type="arrow"
        :items="items"
        @breadcrumb-click="handleClick"
      />
    </div>
  </section>
</template>
<script>
import VueBreadcrumb from "agnosticui-core/breadcrumb/vue";
export default {
  name: "BreadcrumbExamples",
  components: { VueBreadcrumb },
  data() {
    return {
      items: [
        { label: "Home", href: "#" },
        { label: "About", href: "#about" },
        { label: "Services", href: "#services" },
        { label: "Products", href: "#products" },
      ],
    };
  },
  methods: {
    handleClick(event) {
      console.log(
        `VueBreadcrumb -> handleClick -- label: ${event.item.label}, href: ${event.item.href}`
      );
    },
  },
};
</script>
</template>
```
