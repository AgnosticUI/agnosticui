<template>
  <section :class="$style.component">
    <FlexGrid tagName="section">
      <FlexRow v-bind:gutter="12">
        <FlexCol v-bind:xs="12">
          <h2 id="progress">Progress</h2>
        </FlexCol>
      </FlexRow>
      <FlexRow v-bind:gutter="12">
        <FlexCol v-bind:xs="12">
          <h3>
            AgnosticUI offers a <i>Progress</i> component in the framework
            implementations. The CSS package offers class-based styling with
            a slightly sleaker progress then the native one on webkit-based browsers.
          </h3>
        </FlexCol>
      </FlexRow>
      <FlexRow v-bind:gutter="12">
        <FlexCol v-bind:xs="12">
          <h4>Progress</h4>
        </FlexCol>
      </FlexRow>
      <FlexRow
        :customClasses="$style.rowProgresss"
        v-bind:gutter="12"
      >
        <FlexCol v-bind:xs="12">
          <p class="flex">
            <AgProgress
              :value="30"
              :max="100"
            />
          </p>
        </FlexCol>
      </FlexRow>
      <FlexRow v-bind:gutter="12">
        <FlexCol v-bind:xs="12">
          <pre v-highlightjs="regular"><code class="html"></code></pre>
        </FlexCol>
      </FlexRow>
      <FlexRow v-bind:gutter="12">
        <FlexCol v-bind:xs="12">
          <h4>Progress with a bit of JavaScript</h4>
          <p>The following example snippet uses Vue, but it is easily translated to
            vanilla JavaScript or another framework.</p>
        </FlexCol>
      </FlexRow>
      <FlexRow
        :customClasses="$style.rowProgresss"
        v-bind:gutter="12"
      >
        <FlexCol v-bind:xs="12">
          <p class="flex">
            <AgProgress
              :value="this.count"
              :max="100"
            />
          </p>
          <p style="margin-top: 2em;">
            <button
              @click.prevent="startProgress"
              :disabled="this.started"
            >Start</button>
            <button
              @click.prevent="stopProgress"
              :disabled="!this.started"
            >Stop</button>
          </p>
        </FlexCol>
      </FlexRow>
      <FlexRow v-bind:gutter="12">
        <FlexCol v-bind:xs="12">
          <pre v-highlightjs="javascript"><code class="vue"></code></pre>
        </FlexCol>
      </FlexRow>
    </FlexGrid>
  </section>
</template>
<script>
import AgProgress from 'agnosticui/Progress.vue'
import FlexGrid from 'agnosticui/FlexGrid/FlexGrid'
import FlexRow from 'agnosticui/FlexGrid/FlexRow'
import FlexCol from 'agnosticui/FlexGrid/FlexCol'

export default {
  name: 'Progresss',
  components: {
    AgProgress,
    FlexCol,
    FlexGrid,
    FlexRow
  },
  methods: {
    startProgress: function () {
      if (this.count >= 100) {
        this.count = 0
      }
      this.requestAnimationID = requestAnimationFrame(this.step)
    },
    stopProgress: function () {
      if (this.requestAnimationID) {
        cancelAnimationFrame(this.requestAnimationID)
        this.requestAnimationID = undefined
        this.started = false
      }
    },
    step: function () {
      this.started = true
      this.count += 1
      if (this.count === 100) {
        this.started = false
      } else if (this.count < 100) {
        this.requestAnimationID = requestAnimationFrame(this.step)
      }
    }
  },
  data() {
    return {
      count: 0,
      requestAnimationID: undefined,
      started: false,
      regular: `<progress max="100" class="progress" value="35"></progress>`,
      javascript: `<div>
  <p>
    <AgProgress :value="this.count" :max="100" />
  </p>
  <p>
    <button @click.prevent="startProgress" :disabled="this.started">Start</button>
    <button @click.prevent="stopProgress" :disabled="!this.started">Stop</button>
  </p>
</div>
...etc.
/* Vue methods to back the start / stop functionality */
methods: {
  startProgress: function() {
    if (this.count >= 100) {
      this.count = 0
    }
    this.requestAnimationID = requestAnimationFrame(this.step)
  },
  stopProgress: function() {
    if (this.requestAnimationID) {
      cancelAnimationFrame(this.requestAnimationID);
      this.requestAnimationID = undefined;
      this.started = false;
    }
  },
  step: function() {
    this.started = true;
    this.count += 1
    if (this.count === 100) {
      this.started = false;
    } else if (this.count < 100) {
      this.requestAnimationID = requestAnimationFrame(this.step)
    }
  },
},`
    }
  }
}
</script>

<style module>
.component {
  composes: component from './partials.module.css';
}
.rowProgresss {
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
