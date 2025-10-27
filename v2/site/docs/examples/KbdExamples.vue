<template>
  <section>
    <div class="mbe4">
      <h3>Default</h3>
      <p class="mbs2 mbe3">Basic keyboard key representation with default styling.</p>
      <div class="stacked-mobile">
        <VueKbd class="mie2">⌘</VueKbd>
        <VueKbd class="mie2">⌥</VueKbd>
        <VueKbd class="mie2">⇧</VueKbd>
        <VueKbd>⌃</VueKbd>
      </div>
      <div class="mbs3">
        <VueKbd class="mie5">cntrl + shift + del</VueKbd>
        <VueKbd>⌘ + v</VueKbd>
      </div>
      <div class="mbs3">
        <VueKbd
          size="sm"
          class="mie5"
        >cntrl + shift + del</VueKbd>
        <VueKbd size="sm">⌘ + v</VueKbd>
      </div>
    </div>

    <div class="mbe4">
      <h3>Variants</h3>
      <p class="mbs2 mbe3">Semantic color variants for different contexts and visual emphasis.</p>
      <div class="stacked mbe3">
        <div class="mbe2">
          <VueKbd
            variant="default"
            class="mie2"
          >⌘</VueKbd>
          <VueKbd
            variant="default"
            class="mie2"
          >⌥</VueKbd>
          <VueKbd
            variant="default"
            class="mie2"
          >⇧</VueKbd>
          <VueKbd variant="default">⌃</VueKbd>
        </div>
        <div class="mbe2">
          <VueKbd
            variant="primary"
            class="mie2"
          >⌘</VueKbd>
          <VueKbd
            variant="primary"
            class="mie2"
          >⌥</VueKbd>
          <VueKbd
            variant="primary"
            class="mie2"
          >⇧</VueKbd>
          <VueKbd variant="primary">⌃</VueKbd>
        </div>
        <div class="mbe2">
          <VueKbd
            variant="secondary"
            class="mie2"
          >⌘</VueKbd>
          <VueKbd
            variant="secondary"
            class="mie2"
          >⌥</VueKbd>
          <VueKbd
            variant="secondary"
            class="mie2"
          >⇧</VueKbd>
          <VueKbd variant="secondary">⌃</VueKbd>
        </div>
        <div class="mbe2">
          <VueKbd
            variant="info"
            class="mie2"
          >⌘</VueKbd>
          <VueKbd
            variant="info"
            class="mie2"
          >⌥</VueKbd>
          <VueKbd
            variant="info"
            class="mie2"
          >⇧</VueKbd>
          <VueKbd variant="info">⌃</VueKbd>
        </div>
        <div class="mbe2">
          <VueKbd
            variant="warning"
            class="mie2"
          >⌘</VueKbd>
          <VueKbd
            variant="warning"
            class="mie2"
          >⌥</VueKbd>
          <VueKbd
            variant="warning"
            class="mie2"
          >⇧</VueKbd>
          <VueKbd variant="warning">⌃</VueKbd>
        </div>
        <div class="mbe2">
          <VueKbd
            variant="success"
            class="mie2"
          >⌘</VueKbd>
          <VueKbd
            variant="success"
            class="mie2"
          >⌥</VueKbd>
          <VueKbd
            variant="success"
            class="mie2"
          >⇧</VueKbd>
          <VueKbd variant="success">⌃</VueKbd>
        </div>
        <div class="mbe2">
          <VueKbd
            variant="danger"
            class="mie2"
          >⌘</VueKbd>
          <VueKbd
            variant="danger"
            class="mie2"
          >⌥</VueKbd>
          <VueKbd
            variant="danger"
            class="mie2"
          >⇧</VueKbd>
          <VueKbd variant="danger">⌃</VueKbd>
        </div>
        <div class="mbe2">
          <VueKbd
            variant="error"
            class="mie2"
          >⌘</VueKbd>
          <VueKbd
            variant="error"
            class="mie2"
          >⌥</VueKbd>
          <VueKbd
            variant="error"
            class="mie2"
          >⇧</VueKbd>
          <VueKbd variant="error">⌃</VueKbd>
        </div>
      </div>
    </div>

    <div class="mbe4">
      <h3>Sizes</h3>
      <p class="mbs2 mbe3">Three size options to match different contexts and typography scales.</p>
      <div class="stacked">
        <div class="mbe2">
          <strong class="mie2">Small:</strong>
          <VueKbd
            size="sm"
            class="mie2"
          >⌘</VueKbd>
          <VueKbd
            size="sm"
            class="mie2"
          >⌥</VueKbd>
          <VueKbd
            size="sm"
            class="mie2"
          >⇧</VueKbd>
          <VueKbd size="sm">⌃</VueKbd>
        </div>
        <div class="mbe2">
          <strong class="mie2">Medium:</strong>
          <VueKbd
            size="md"
            class="mie2"
          >⌘</VueKbd>
          <VueKbd
            size="md"
            class="mie2"
          >⌥</VueKbd>
          <VueKbd
            size="md"
            class="mie2"
          >⇧</VueKbd>
          <VueKbd size="md">⌃</VueKbd>
        </div>
        <div class="mbe2">
          <strong class="mie2">Large:</strong>
          <VueKbd
            size="lg"
            class="mie2"
          >⌘</VueKbd>
          <VueKbd
            size="lg"
            class="mie2"
          >⌥</VueKbd>
          <VueKbd
            size="lg"
            class="mie2"
          >⇧</VueKbd>
          <VueKbd size="lg">⌃</VueKbd>
        </div>
      </div>
    </div>

    <div class="mbe4">
      <h3>With Background</h3>
      <p class="mbs2 mbe3">Add background colors to variants for increased visual emphasis.</p>
      <div class="stacked mbe3">
        <div class="mbe2">
          <VueKbd
            :background="true"
            variant="primary"
            class="mie2"
          >⌘</VueKbd>
          <VueKbd
            :background="true"
            variant="primary"
            class="mie2"
          >⌥</VueKbd>
          <VueKbd
            :background="true"
            variant="primary"
            class="mie2"
          >⇧</VueKbd>
          <VueKbd
            :background="true"
            variant="primary"
          >⌃</VueKbd>
        </div>
        <div class="mbe2">
          <VueKbd
            :background="true"
            variant="secondary"
            class="mie2"
          >⌘</VueKbd>
          <VueKbd
            :background="true"
            variant="secondary"
            class="mie2"
          >⌥</VueKbd>
          <VueKbd
            :background="true"
            variant="secondary"
            class="mie2"
          >⇧</VueKbd>
          <VueKbd
            :background="true"
            variant="secondary"
          >⌃</VueKbd>
        </div>
        <div class="mbe2">
          <VueKbd
            :background="true"
            variant="info"
            class="mie2"
          >⌘</VueKbd>
          <VueKbd
            :background="true"
            variant="info"
            class="mie2"
          >⌥</VueKbd>
          <VueKbd
            :background="true"
            variant="info"
            class="mie2"
          >⇧</VueKbd>
          <VueKbd
            :background="true"
            variant="info"
          >⌃</VueKbd>
        </div>
        <div class="mbe2">
          <VueKbd
            :background="true"
            variant="warning"
            class="mie2"
          >⌘</VueKbd>
          <VueKbd
            :background="true"
            variant="warning"
            class="mie2"
          >⌥</VueKbd>
          <VueKbd
            :background="true"
            variant="warning"
            class="mie2"
          >⇧</VueKbd>
          <VueKbd
            :background="true"
            variant="warning"
          >⌃</VueKbd>
        </div>
        <div class="mbe2">
          <VueKbd
            :background="true"
            variant="success"
            class="mie2"
          >⌘</VueKbd>
          <VueKbd
            :background="true"
            variant="success"
            class="mie2"
          >⌥</VueKbd>
          <VueKbd
            :background="true"
            variant="success"
            class="mie2"
          >⇧</VueKbd>
          <VueKbd
            :background="true"
            variant="success"
          >⌃</VueKbd>
        </div>
        <div class="mbe2">
          <VueKbd
            :background="true"
            variant="danger"
            class="mie2"
          >⌘</VueKbd>
          <VueKbd
            :background="true"
            variant="danger"
            class="mie2"
          >⌥</VueKbd>
          <VueKbd
            :background="true"
            variant="danger"
            class="mie2"
          >⇧</VueKbd>
          <VueKbd
            :background="true"
            variant="danger"
          >⌃</VueKbd>
        </div>
        <div class="mbe2">
          <VueKbd
            :background="true"
            variant="error"
            class="mie2"
          >⌘</VueKbd>
          <VueKbd
            :background="true"
            variant="error"
            class="mie2"
          >⌥</VueKbd>
          <VueKbd
            :background="true"
            variant="error"
            class="mie2"
          >⇧</VueKbd>
          <VueKbd
            :background="true"
            variant="error"
          >⌃</VueKbd>
        </div>
      </div>
    </div>

    <div class="mbe4">
      <h3>Bordered</h3>
      <p class="mbs2 mbe3">Toggle border styling for different visual treatments.</p>
      <div class="stacked-mobile mbe3">
        <div class="mbe2">
          <strong class="mie2">With Border:</strong>
          <VueKbd
            :bordered="true"
            class="mie2"
          >⌘</VueKbd>
          <VueKbd
            :bordered="true"
            class="mie2"
          >⌥</VueKbd>
          <VueKbd
            :bordered="true"
            class="mie2"
          >⇧</VueKbd>
          <VueKbd :bordered="true">⌃</VueKbd>
        </div>
        <div class="mbe2">
          <strong class="mie2">Without Border:</strong>
          <VueKbd
            :bordered="false"
            class="mie2"
          >⌘</VueKbd>
          <VueKbd
            :bordered="false"
            class="mie2"
          >⌥</VueKbd>
          <VueKbd
            :bordered="false"
            class="mie2"
          >⇧</VueKbd>
          <VueKbd :bordered="false">⌃</VueKbd>
        </div>
      </div>
    </div>

    <div class="mbe4">
      <h3>Combined Examples</h3>
      <p class="mbs2 mbe3">Combining multiple properties for rich presentations.</p>
      <div class="stacked">
        <div class="mbe2">
          <strong class="mie2">Medium + Primary + Background:</strong>
          <VueKbd
            size="md"
            :background="true"
            variant="primary"
            class="mie2"
          >⌘</VueKbd>
          <VueKbd
            size="md"
            :background="true"
            variant="primary"
            class="mie2"
          >⌥</VueKbd>
          <VueKbd
            size="md"
            :background="true"
            variant="primary"
            class="mie2"
          >⇧</VueKbd>
          <VueKbd
            size="md"
            :background="true"
            variant="primary"
          >⌃</VueKbd>
        </div>
        <div class="mbe2">
          <strong class="mie2">Large + Success + Background:</strong>
          <VueKbd
            size="lg"
            :background="true"
            variant="success"
            class="mie2"
          >⌘</VueKbd>
          <VueKbd
            size="lg"
            :background="true"
            variant="success"
            class="mie2"
          >⌥</VueKbd>
          <VueKbd
            size="lg"
            :background="true"
            variant="success"
            class="mie2"
          >⇧</VueKbd>
          <VueKbd
            size="lg"
            :background="true"
            variant="success"
          >⌃</VueKbd>
        </div>
        <div class="mbe2">
          <strong class="mie2">Large + Warning:</strong>
          <VueKbd
            size="lg"
            variant="warning"
            class="mie2"
          >⌘</VueKbd>
          <VueKbd
            size="lg"
            variant="warning"
            class="mie2"
          >⌥</VueKbd>
          <VueKbd
            size="lg"
            variant="warning"
            class="mie2"
          >⇧</VueKbd>
          <VueKbd
            size="lg"
            variant="warning"
          >⌃</VueKbd>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { VueKbd } from "agnosticui-core/kbd/vue";
</script>
