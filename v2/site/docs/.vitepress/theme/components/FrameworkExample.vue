<template>
  <div class="framework-example">
    <VueTabs
      aria-label="Framework code examples"
      @tab-change="handleTabChange"
    >
      <!-- Vue Tab -->
      <VueTab panel="panel-vue">
        <div class="flex-inline items-center">
          <span class="framework-icon">Vue</span>
        </div>
      </VueTab>

      <!-- Lit Tab -->
      <VueTab panel="panel-lit">
        <div class="flex-inline items-center">
          <span class="framework-icon">Lit</span>
        </div>
      </VueTab>

      <!-- Vue Panel -->
      <VueTabPanel panel="panel-vue">
        <details class="preview-details" open>
          <summary>Live Preview</summary>
          <div class="preview">
            <slot name="vue" />
          </div>
        </details>
        <details v-if="vueCode" class="code-details" open>
          <summary>View Vue Code</summary>
          <div v-if="highlightedVueCode" v-html="highlightedVueCode"></div>
          <pre v-else><code class="language-vue">{{ vueCode }}</code></pre>
        </details>
      </VueTabPanel>

      <!-- Lit Panel -->
      <VueTabPanel panel="panel-lit">
        <details class="preview-details" open>
          <summary>Live Preview</summary>
          <div class="preview">
            <slot name="lit" />
          </div>
        </details>
        <details v-if="litCode" class="code-details" open>
          <summary>View Lit / Web Component Code</summary>
          <div v-if="highlightedLitCode" v-html="highlightedLitCode"></div>
          <pre v-else><code class="language-javascript">{{ litCode }}</code></pre>
        </details>
      </VueTabPanel>
    </VueTabs>
  </div>
</template>

<script>
import { onMounted, ref } from 'vue'
import VueTabs, { VueTab, VueTabPanel } from "agnosticui-core/tabs/vue"
import { codeToHtml } from 'shiki'

export default {
  name: "FrameworkExample",
  components: {
    VueTabs,
    VueTab,
    VueTabPanel,
  },
  props: {
    component: {
      type: String,
      required: true,
    },
    vueCode: {
      type: String,
      default: '',
    },
    litCode: {
      type: String,
      default: '',
    },
  },
  setup(props) {
    const highlightedVueCode = ref('')
    const highlightedLitCode = ref('')

    onMounted(async () => {
      // Dynamically import the Lit component
      try {
        await import(/* @vite-ignore */ `agnosticui-core/${props.component}`)
      } catch (error) {
        console.warn(`Could not load Lit component: ${props.component}`, error)
      }

      // Highlight Vue code
      if (props.vueCode) {
        try {
          highlightedVueCode.value = await codeToHtml(props.vueCode, {
            lang: 'vue',
            themes: {
              light: 'github-light-high-contrast',
              dark: 'github-dark-high-contrast',
            },
          })
        } catch (error) {
          console.error('Failed to highlight Vue code:', error)
        }
      }

      // Highlight Lit code
      if (props.litCode) {
        try {
          highlightedLitCode.value = await codeToHtml(props.litCode, {
            lang: 'javascript',
            themes: {
              light: 'github-light-high-contrast',
              dark: 'github-dark-high-contrast',
            },
          })
        } catch (error) {
          console.error('Failed to highlight Lit code:', error)
        }
      }
    })

    const handleTabChange = (detail) => {
      // Optional: track analytics or other side effects
    }

    return {
      handleTabChange,
      highlightedVueCode,
      highlightedLitCode,
    }
  },
}
</script>

<style scoped>
.framework-example {
  margin: 2rem 0;
}

/* Override tab panel padding for better alignment */
.framework-example ::v-deep(ag-tab-panel)::part(ag-tab-panel) {
  padding: 0;
}

.framework-icon {
  font-weight: 600;
  font-size: 0.9rem;
}

.preview {
  padding: 2rem;
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  background-color: var(--vp-c-bg-soft);
  margin-top: 1rem;
}

.preview-details {
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  padding: 0 1rem;
  margin-bottom: 1rem;
}

.code-details {
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  padding: 0 1rem;
  margin-bottom: 1rem;
}

.preview-details summary,
.code-details summary {
  cursor: pointer;
  font-weight: 600;
  color: var(--vp-c-brand);
  user-select: none;
  list-style: none;
}

.preview-details summary::-webkit-details-marker,
.code-details summary::-webkit-details-marker {
  display: none;
}

.preview-details summary::before,
.code-details summary::before {
  content: '▶';
  display: inline-block;
  margin-right: 0.5rem;
  transition: transform 0.2s ease;
}

.preview-details[open] summary::before,
.code-details[open] summary::before {
  transform: rotate(90deg);
}

/* Shiki generated code blocks */
.code-details :deep(pre) {
  margin-top: 1rem;
  margin-bottom: 0;
  overflow-x: auto;
  max-width: 100%;
  border-radius: 6px;
  padding: 1rem !important;
}

.code-details :deep(code) {
  font-size: 0.875rem;
}

/* Fallback for non-highlighted code */
.code-details > pre {
  margin-top: 1rem;
  margin-bottom: 0;
  overflow-x: auto;
  max-width: 100%;
}

.code-details > pre code {
  font-size: 0.875rem;
  white-space: pre;
  display: block;
}
</style>
