<template>
  <Tabs size="jumbo" :tabs="tabs" :isBorderless="true" tabType="button">
    <template slot="tab-button-react">
      <Button style="padding: 1rem 2rem; height: 100%;" type="faux" isBordered>
        <svg
          width="96"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 841.9 595.3"
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
        <pre v-highlightjs="react" :class="$style.snippetCanvas" ><code class="react"></code></pre>
      </TabPanel>
    </template>
    <template slot="tab-button-vue">
      <Button style="padding: 1.75rem 3.25rem; height: 100%;" type="faux" isBordered>
        <svg
          width="54"
          viewBox="0 0 261.76 226.69"
          xmlns="http://www.w3.org/2000/svg"
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
        <p>Vue content here...</p>
      </TabPanel>
    </template>
    <template slot="tab-button-angular">
      <Button style="padding: 1.75rem 3rem; height: 100%;" type="faux" isBordered>
        <svg
          width="68"
          viewBox="0 0 250 250"
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
        <p>Angular content here...</p>
      </TabPanel>
    </template>
    <template slot="tab-button-svelte">
      <Button style="padding: 1.75rem 3.5rem; height: 100%;" type="faux" isBordered>
        <svg
          width="48"
          viewBox="0 0 98.1 118"
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
        <p>Svelte content here...</p>
      </TabPanel>
    </template>
  </Tabs> 
</template>

<script>
// Global AgnosticUI CSS custom properties
import 'agnostic-css/css-dist/common.min.css'
import {
  Button,
  Tabs,
  TabPanel,
} from "agnostic-vue";


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
      tabs: ["react", "vue", "angular", "svelte"],
      react: `class Hello extends React.Component {
  render() {
    return React.createElement(
      'button',
      { class: 'btn' },
      \`Hello \${this.props.toWhat\}\`
    );
  }
}
ReactDOM.render(
  React.createElement(Hello, { toWhat: 'World' }, null),
  document.getElementById('root')
);`
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
  padding: 1.5rem 2rem;
}
</style>
