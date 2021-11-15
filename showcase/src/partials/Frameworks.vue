<template>
  <section class="mbe16">
    <Tabs
      size="jumbo"
      :isBorderless="true"
      tabType="button"
      :tabButtonNames="['tab-button-react', 'tab-button-vue', 'tab-button-angular', 'tab-button-svelte', 'tab-button-javascript']"
      :tabPanelNames="['tab-panel-react', 'tab-panel-vue', 'tab-panel-angular', 'tab-panel-svelte', 'tab-panel-javascript']"
    >
      <template slot="tab-button-react">
        <Button
          :css="$style.buttonReact"
          type="faux"
          isBordered
          aria-label="React framework"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 841.9 595.3"
            :class="$style.logoReact"
          >
            <g fill="#61DAFB">
              <path d="M666.3 296.5c0-32.5-40.7-63.3-103.1-82.4 14.4-63.6 8-114.2-20.2-130.4-6.5-3.8-14.1-5.6-22.4-5.6v22.3c4.6 0 8.3.9 11.4 2.6 13.6 7.8 19.5 37.5 14.9 75.7-1.1 9.4-2.9 19.3-5.1 29.4-19.6-4.8-41-8.5-63.5-10.9-13.5-18.5-27.5-35.3-41.6-50 32.6-30.3 63.2-46.9 84-46.9V78c-27.5 0-63.5 19.6-99.9 53.6-36.4-33.8-72.4-53.2-99.9-53.2v22.3c20.7 0 51.4 16.5 84 46.6-14 14.7-28 31.4-41.3 49.9-22.6 2.4-44 6.1-63.6 11-2.3-10-4-19.7-5.2-29-4.7-38.2 1.1-67.9 14.6-75.8 3-1.8 6.9-2.6 11.5-2.6V78.5c-8.4 0-16 1.8-22.6 5.6-28.1 16.2-34.4 66.7-19.9 130.1-62.2 19.2-102.7 49.9-102.7 82.3 0 32.5 40.7 63.3 103.1 82.4-14.4 63.6-8 114.2 20.2 130.4 6.5 3.8 14.1 5.6 22.5 5.6 27.5 0 63.5-19.6 99.9-53.6 36.4 33.8 72.4 53.2 99.9 53.2 8.4 0 16-1.8 22.6-5.6 28.1-16.2 34.4-66.7 19.9-130.1 62-19.1 102.5-49.9 102.5-82.3zm-130.2-66.7c-3.7 12.9-8.3 26.2-13.5 39.5-4.1-8-8.4-16-13.1-24-4.6-8-9.5-15.8-14.4-23.4 14.2 2.1 27.9 4.7 41 7.9zm-45.8 106.5c-7.8 13.5-15.8 26.3-24.1 38.2-14.9 1.3-30 2-45.2 2-15.1 0-30.2-.7-45-1.9-8.3-11.9-16.4-24.6-24.2-38-7.6-13.1-14.5-26.4-20.8-39.8 6.2-13.4 13.2-26.8 20.7-39.9 7.8-13.5 15.8-26.3 24.1-38.2 14.9-1.3 30-2 45.2-2 15.1 0 30.2.7 45 1.9 8.3 11.9 16.4 24.6 24.2 38 7.6 13.1 14.5 26.4 20.8 39.8-6.3 13.4-13.2 26.8-20.7 39.9zm32.3-13c5.4 13.4 10 26.8 13.8 39.8-13.1 3.2-26.9 5.9-41.2 8 4.9-7.7 9.8-15.6 14.4-23.7 4.6-8 8.9-16.1 13-24.1zM421.2 430c-9.3-9.6-18.6-20.3-27.8-32 9 .4 18.2.7 27.5.7 9.4 0 18.7-.2 27.8-.7-9 11.7-18.3 22.4-27.5 32zm-74.4-58.9c-14.2-2.1-27.9-4.7-41-7.9 3.7-12.9 8.3-26.2 13.5-39.5 4.1 8 8.4 16 13.1 24 4.7 8 9.5 15.8 14.4 23.4zM420.7 163c9.3 9.6 18.6 20.3 27.8 32-9-.4-18.2-.7-27.5-.7-9.4 0-18.7.2-27.8.7 9-11.7 18.3-22.4 27.5-32zm-74 58.9c-4.9 7.7-9.8 15.6-14.4 23.7-4.6 8-8.9 16-13 24-5.4-13.4-10-26.8-13.8-39.8 13.1-3.1 26.9-5.8 41.2-7.9zm-90.5 125.2c-35.4-15.1-58.3-34.9-58.3-50.6 0-15.7 22.9-35.6 58.3-50.6 8.6-3.7 18-7 27.7-10.1 5.7 19.6 13.2 40 22.5 60.9-9.2 20.8-16.6 41.1-22.2 60.6-9.9-3.1-19.3-6.5-28-10.2zM310 490c-13.6-7.8-19.5-37.5-14.9-75.7 1.1-9.4 2.9-19.3 5.1-29.4 19.6 4.8 41 8.5 63.5 10.9 13.5 18.5 27.5 35.3 41.6 50-32.6 30.3-63.2 46.9-84 46.9-4.5-.1-8.3-1-11.3-2.7zm237.2-76.2c4.7 38.2-1.1 67.9-14.6 75.8-3 1.8-6.9 2.6-11.5 2.6-20.7 0-51.4-16.5-84-46.6 14-14.7 28-31.4 41.3-49.9 22.6-2.4 44-6.1 63.6-11 2.3 10.1 4.1 19.8 5.2 29.1zm38.5-66.7c-8.6 3.7-18 7-27.7 10.1-5.7-19.6-13.2-40-22.5-60.9 9.2-20.8 16.6-41.1 22.2-60.6 9.9 3.1 19.3 6.5 28.1 10.2 35.4 15.1 58.3 34.9 58.3 50.6-.1 15.7-23 35.6-58.4 50.6zM320.8 78.4z" />
              <circle
                cx="420.9"
                cy="296.5"
                r="45.7"
              />
              <path d="M520.5 78.1z" />
            </g>
          </svg>
        </Button>
      </template>
      <template slot="tab-panel-react">
        <TabPanel>
          <pre
            v-highlightjs="react"
            :class="$style.snippetCanvas"
          ><code class="react"></code></pre>
        </TabPanel>
      </template>
      <template slot="tab-button-vue">
        <Button
          :css="$style.buttonVue"
          type="faux"
          isBordered
          aria-label="Vue framework"
        >
          <svg
            viewBox="0 0 261.76 226.69"
            xmlns="http://www.w3.org/2000/svg"
            :class="$style.logoVue"
          >
            <path
              d="M161.096.001l-30.224 52.35L100.647.002H-.005L130.872 226.69 261.749 0z"
              fill="#41b883"
            />
            <path
              d="M161.096.001l-30.224 52.35L100.647.002H52.346l78.526 136.01L209.398.001z"
              fill="#34495e"
            />
          </svg>
        </Button>
      </template>
      <template slot="tab-panel-vue">
        <TabPanel>
          <pre
            v-highlightjs="vue"
            :class="$style.snippetCanvas"
          ><code class="vue"></code></pre>
        </TabPanel>
      </template>
      <template slot="tab-button-angular">
        <Button
          :css="$style.buttonAngular"
          type="faux"
          isBordered
          aria-label="Angular framework"
        >
          <svg
            viewBox="0 0 250 250"
            :class="$style.logoAngular"
          >
            <path
              fill="#dd0031"
              d="M125 30L31.9 63.2l14.2 123.1L125 230l78.9-43.7 14.2-123.1z"
            />
            <path
              fill="#c3002f"
              d="M125 30v22.2-.1V230l78.9-43.7 14.2-123.1L125 30z"
            />
            <path
              d="M125 52.1L66.8 182.6h21.7l11.7-29.2h49.4l11.7 29.2H183L125 52.1zm17 83.3h-34l17-40.9 17 40.9z"
              fill="#fff"
            />
          </svg>
        </Button>
      </template>
      <template slot="tab-panel-angular">
        <TabPanel>
          <pre
            v-highlightjs="angular"
            :class="$style.snippetCanvas"
          ><code class="js"></code></pre>
        </TabPanel>
      </template>
      <template slot="tab-button-svelte">
        <Button
          :css="$style.buttonSvelte"
          type="faux"
          isBordered
          aria-label="Svelte framework"
        >
          <svg
            viewBox="0 0 98.1 118"
            :class="$style.logoSvelte"
          >
            <path
              d="M91.8 15.6C80.9-.1 59.2-4.7 43.6 5.2L16.1 22.8C8.6 27.5 3.4 35.2 1.9 43.9c-1.3 7.3-.2 14.8 3.3 21.3-2.4 3.6-4 7.6-4.7 11.8-1.6 8.9.5 18.1 5.7 25.4 11 15.7 32.6 20.3 48.2 10.4l27.5-17.5c7.5-4.7 12.7-12.4 14.2-21.1 1.3-7.3.2-14.8-3.3-21.3 2.4-3.6 4-7.6 4.7-11.8 1.7-9-.4-18.2-5.7-25.5"
              fill="#ff3e00"
            />
            <path
              d="M40.9 103.9c-8.9 2.3-18.2-1.2-23.4-8.7-3.2-4.4-4.4-9.9-3.5-15.3.2-.9.4-1.7.6-2.6l.5-1.6 1.4 1c3.3 2.4 6.9 4.2 10.8 5.4l1 .3-.1 1c-.1 1.4.3 2.9 1.1 4.1 1.6 2.3 4.4 3.4 7.1 2.7.6-.2 1.2-.4 1.7-.7L65.5 72c1.4-.9 2.3-2.2 2.6-3.8.3-1.6-.1-3.3-1-4.6-1.6-2.3-4.4-3.3-7.1-2.6-.6.2-1.2.4-1.7.7l-10.5 6.7c-1.7 1.1-3.6 1.9-5.6 2.4-8.9 2.3-18.2-1.2-23.4-8.7-3.1-4.4-4.4-9.9-3.4-15.3.9-5.2 4.1-9.9 8.6-12.7l27.5-17.5c1.7-1.1 3.6-1.9 5.6-2.5 8.9-2.3 18.2 1.2 23.4 8.7 3.2 4.4 4.4 9.9 3.5 15.3-.2.9-.4 1.7-.7 2.6l-.5 1.6-1.4-1c-3.3-2.4-6.9-4.2-10.8-5.4l-1-.3.1-1c.1-1.4-.3-2.9-1.1-4.1-1.6-2.3-4.4-3.3-7.1-2.6-.6.2-1.2.4-1.7.7L32.4 46.1c-1.4.9-2.3 2.2-2.6 3.8s.1 3.3 1 4.6c1.6 2.3 4.4 3.3 7.1 2.6.6-.2 1.2-.4 1.7-.7l10.5-6.7c1.7-1.1 3.6-1.9 5.6-2.5 8.9-2.3 18.2 1.2 23.4 8.7 3.2 4.4 4.4 9.9 3.5 15.3-.9 5.2-4.1 9.9-8.6 12.7l-27.5 17.5c-1.7 1.1-3.6 1.9-5.6 2.5"
              fill="#fff"
            />
          </svg>
        </Button>
      </template>
      <template slot="tab-panel-svelte">
        <TabPanel>
          <pre
            v-highlightjs="svelte"
            :class="$style.snippetCanvas"
          ><code class="svelte"></code></pre>
        </TabPanel>
      </template>
      <template slot="tab-button-javascript">
        <Button
          :css="$style.buttonJavascript"
          type="faux"
          isBordered
          aria-label="Web Standards JavaScript"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 630 630"
            :class="$style.logoJavascript"
          >
            <rect
              width="630"
              height="630"
              fill="#f7df1e"
            />
            <path d="m423.2 492.19c12.69 20.72 29.2 35.95 58.4 35.95 24.53 0 40.2-12.26 40.2-29.2 0-20.3-16.1-27.49-43.1-39.3l-14.8-6.35c-42.72-18.2-71.1-41-71.1-89.2 0-44.4 33.83-78.2 86.7-78.2 37.64 0 64.7 13.1 84.2 47.4l-46.1 29.6c-10.15-18.2-21.1-25.37-38.1-25.37-17.34 0-28.33 11-28.33 25.37 0 17.76 11 24.95 36.4 35.95l14.8 6.34c50.3 21.57 78.7 43.56 78.7 93 0 53.3-41.87 82.5-98.1 82.5-54.98 0-90.5-26.2-107.88-60.54zm-209.13 5.13c9.3 16.5 17.76 30.45 38.1 30.45 19.45 0 31.72-7.61 31.72-37.2v-201.3h59.2v202.1c0 61.3-35.94 89.2-88.4 89.2-47.4 0-74.85-24.53-88.81-54.075z" />
          </svg>
        </Button>
      </template>
      <template slot="tab-panel-javascript">
        <TabPanel>
          <pre
            v-highlightjs="javascript"
            :class="$style.snippetCanvas"
          ><code class="html"></code></pre>
        </TabPanel>
      </template>
    </Tabs>
  </section>
</template>

<script>
/* eslint-disable no-useless-escape */
// Above needed for our react data code snippet fed to highlightjs (see below)

// Global AgnosticUI CSS custom properties
import 'agnostic-css/build/css-dist/common.min.css'
import { Button, Tabs, TabPanel } from 'agnostic-vue'

export default {
  name: 'FrameworkButtonGroup',
  components: {
    Button,
    Tabs,
    // TODO -- https://github.com/AgnosticUI/agnosticui/issues/34
    // Remove the `.pane` class; currently there's a big gap between
    // the snippets and tabs because of this.
    TabPanel
  },
  data() {
    return {
      // This looks like magic but it's being handled by vue-highlightjs which does encoding and
      // highlightjs class mapping for free. It just needs a Vue variable to mount to (e.g.
      // v-highlightjs="snippet" in above tpl) see https://www.npmjs.com/package/vue-highlightjs
      snippet: ``,
      tabs: ['react', 'vue', 'angular', 'svelte'],
      react: `import 'agnostic-react/dist/common.min.css';
import 'agnostic-react/dist/esm/index.css';
import { Button } from 'agnostic-react';
const App = () => (
  <Button mode="primary">Go</Button>
)
ReactDOM.render(
  React.createElement(App, {}, null),
  document.getElementById('root')
);`,
      vue: `<script>
import "agnostic-vue/dist/common.min.css";
import {
  Button,
} from "agnostic-vue";
<\/script>
<template>
  <Button mode="primary">Go</Button>
</template>`,
      angular: `// In angular.json or similar pull in:
// agnostic-svelte/dist/common.min.css
import { Component } from '@angular/core';

@Component({
  selector: 'ag-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'examples';
}
/* Now in app.component.html do:
<ag-button>Go</ag-button> */
`,
      svelte: `<script>
import "agnostic-svelte/dist/common.min.css";
import {
  Button,
} from 'agnostic-svelte';
<\/script>
<div class="container">
  <Button mode="primary">Go</Button>
</div>`,
      javascript: `<link rel="stylesheet"
href="vendor/agnostic/common.min.css">
<script>
/* It even works without a framework!! 😎 */
const doIt = (ev) => { }
<\/script>
...
<button class="btn btn-primary" onClick="doIt()">Go</button>`
    }
  },
  mounted: function () {
    console.log('mounted lifecycle not yet implemented...')
  }
}
</script>

<style module>
.snippetCanvas {
  /* Match the Monokai Sublime style highlightjs theme we're using .. this is the background
  for all that -- simply use the same background hex otherwise we get only odd lined background */
  background: #23241f;
  padding: 0.5rem 1rem;
}
.snippetCanvas {
  line-height: 1.25;
}

button[role='tab'] {
  background-color: var(--agnostic-light);
}
button[role='tab'][aria-selected] {
  background-color: var(--agnostic-gray-light);
}

/* Mobile first we want to reduce the size of our tab buttons. Also, since these are various
SVGs with inconsistent bounding boxes, we kind of have to curate the padding as such. These
CSS custom properties scoped to the tablist basically turn off the frameworks padding. */
[role='tablist'] {
  --agnostic-side-padding: 0;
  --agnostic-vertical-pad: 0;
  justify-content: space-between;
}

/* TODO: Maybe do this in framework? See https://github.com/AgnosticUI/agnosticui/issues/35 */
button > div {
  height: 100%;
}

.buttonReact {
  padding-inline: var(--fluid-4) !important;
}
.buttonVue {
  padding-inline: var(--fluid-12) !important;
}
.buttonAngular {
  padding-inline: var(--fluid-12) !important;
}
.buttonSvelte {
  padding-inline: var(--fluid-14) !important;
}
.buttonJavascript {
  padding-inline: var(--fluid-14) !important;
}

.logoReact {
  width: var(--fluid-40);
}
.logoVue {
  width: var(--fluid-24);
}
.logoAngular {
  width: var(--fluid-32);
}
.logoSvelte {
  width: var(--fluid-20);
}
.logoJavascript {
  width: var(--fluid-24);
}

@media only screen and (min-width: 376px) {
  .buttonReact {
    padding-inline: var(--fluid-8) !important;
  }
  .buttonVue {
    padding-inline: var(--fluid-14) !important;
  }
  .buttonAngular {
    padding-inline: var(--fluid-16) !important;
  }
  .buttonSvelte {
    padding-inline: var(--fluid-18) !important;
  }
  .buttonJavascript {
    padding-inline: var(--fluid-16) !important;
  }
  .logoReact {
    width: var(--fluid-48);
  }
  .logoVue {
    width: 1.75rem;
  }
  .logoAngular {
    width: var(--fluid-36);
  }
  .logoSvelte {
    width: var(--fluid-24);
  }
  .logoJavascript {
    width: var(--fluid-24);
  }
}

@media only screen and (min-width: 495px) {
  .buttonReact {
    padding-inline: var(--fluid-10) !important;
  }
  .buttonVue {
    padding-inline: var(--fluid-16) !important;
  }
  .buttonAngular {
    padding-inline: var(--fluid-18) !important;
  }
  .buttonSvelte {
    padding-inline: var(--fluid-20) !important;
  }
  .buttonJavascript {
    padding-inline: var(--fluid-18) !important;
  }
  .logoReact {
    width: var(--fluid-56);
  }
  .logoVue {
    width: var(--fluid-36);
  }
  .logoAngular {
    width: var(--fluid-48);
  }
  .logoSvelte {
    width: var(--fluid-32);
  }
  .logoJavascript {
    width: var(--fluid-36);
  }
}
@media only screen and (min-width: 576px) {
  [role='tablist'] {
    justify-content: flex-start;
  }
  .buttonReact {
    padding-inline: 0 !important;
    padding-block: var(--fluid-12) !important;
  }
  .buttonVue {
    padding-inline: var(--fluid-24) !important;
    padding-block: var(--fluid-8) !important;
  }
  .buttonAngular {
    padding-inline: var(--fluid-18) !important;
    padding-block: var(--fluid-8) !important;
  }
  .buttonSvelte {
    padding-inline: var(--fluid-24) !important;
    padding-block: var(--fluid-8) !important;
  }
  .buttonJavascript {
    padding-inline: var(--fluid-20) !important;
    padding-block: var(--fluid-8) !important;
  }

  .logoReact {
    width: var(--fluid-72);
  }
  .logoVue {
    width: var(--fluid-40);
  }
  .logoAngular {
    width: var(--fluid-48);
  }
  .logoSvelte {
    width: var(--fluid-36);
  }
  .logoJavascript {
    width: var(--fluid-40);
  }
}

@media only screen and (min-width: 768px) {
  .buttonReact {
    padding-inline: var(--fluid-12) !important;
    padding-block: var(--fluid-12) !important;
  }
  .buttonVue {
    padding-inline: var(--fluid-36) !important;
    padding-block: var(--fluid-12) !important;
  }
  .buttonAngular {
    padding-inline: var(--fluid-32) !important;
    padding-block: var(--fluid-12) !important;
  }
  .buttonSvelte {
    padding-inline: var(--fluid-40) !important;
    padding-block: var(--fluid-12) !important;
  }
  .buttonJavascript {
    padding-inline: var(--fluid-36) !important;
    padding-block: var(--fluid-8) !important;
  }
}

@media only screen and (min-width: 1200px) {
  .snippetCanvas {
    padding: 1.5rem 2rem;
  }
  .logoReact {
    width: var(--fluid-80);
  }
  .logoVue {
    width: var(--fluid-48);
  }
  .logoAngular {
    width: var(--fluid-56);
  }
  .logoSvelte {
    width: var(--fluid-40);
  }
  .logoJavascript {
    width: var(--fluid-48);
  }
}
</style>
