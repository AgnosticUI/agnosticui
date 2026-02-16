<template>
  <div class="playbook-stackblitz">
    <div class="playbook-buttons">
      <ag-button
        v-for="fw in availableFrameworks"
        :key="fw.id"
        variant="primary"
        shape="rounded"
        :disabled="loading === fw.id"
        @click="openInStackBlitz(fw.id)"
      >
        <ag-icon size="18" no-fill>
          <Zap :size="18" />
        </ag-icon>
        <span class="mis2">
          {{ loading === fw.id ? 'Loading...' : `Open ${fw.label} in StackBlitz` }}
        </span>
      </ag-button>
    </div>
    <p v-if="error" class="error-message">{{ error }}</p>
  </div>
</template>

<script>
import { ref, computed } from 'vue'
import sdk from '@stackblitz/sdk'
import { Zap } from 'lucide-vue-next'
import { playbooksConfig, GITHUB_RAW_BASE } from './playbooks-config'
import 'agnosticui-core/button'
import 'agnosticui-core/icon'

const FRAMEWORK_LABELS = {
  react: 'React',
  vue: 'Vue',
  lit: 'Lit',
}

export default {
  name: 'PlaybookStackBlitz',
  components: { Zap },
  props: {
    playbook: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    const loading = ref(null)
    const error = ref(null)

    const config = computed(() => playbooksConfig[props.playbook])

    const availableFrameworks = computed(() => {
      if (!config.value?.frameworks) return []
      return Object.keys(config.value.frameworks)
        .filter(fw => config.value.frameworks[fw]?.length > 0)
        .map(fw => ({ id: fw, label: FRAMEWORK_LABELS[fw] || fw }))
    })

    async function fetchFile(filePath) {
      const url = `${GITHUB_RAW_BASE}/${props.playbook}/${filePath}`
      const response = await fetch(url)
      if (!response.ok) {
        throw new Error(`Failed to fetch ${filePath}: ${response.status}`)
      }
      return response.text()
    }

    async function openInStackBlitz(framework) {
      if (!config.value) {
        error.value = `Unknown playbook: ${props.playbook}`
        return
      }

      const files = config.value.frameworks[framework]
      if (!files) {
        error.value = `Unknown framework: ${framework}`
        return
      }

      loading.value = framework
      error.value = null

      try {
        // Fetch all files in parallel
        const fileContents = await Promise.all(
          files.map(async (filePath) => {
            const content = await fetchFile(`${framework}-example/${filePath}`)
            return { path: filePath, content }
          })
        )

        // Fetch external files (files outside the example directory)
        const externalFiles = config.value.externalFiles || {}
        const externalContents = await Promise.all(
          Object.entries(externalFiles).map(async ([destPath, url]) => {
            const response = await fetch(url)
            if (!response.ok) {
              throw new Error(`Failed to fetch external file ${destPath}: ${response.status}`)
            }
            const content = await response.text()
            return { path: destPath, content }
          })
        )

        // Build the files object for StackBlitz
        const projectFiles = {}
        const binaryFiles = config.value.binaryFiles || {}
        const contentReplacements = config.value.contentReplacements || {}

        for (const { path, content } of [...fileContents, ...externalContents]) {
          let processedContent = content
          // Replace binary file references with GitHub raw URLs
          for (const [localPath, url] of Object.entries(binaryFiles)) {
            processedContent = processedContent.replaceAll(localPath, url)
          }
          // Apply content replacements (e.g. import path rewrites)
          for (const [oldStr, newStr] of Object.entries(contentReplacements)) {
            processedContent = processedContent.replaceAll(oldStr, newStr)
          }
          projectFiles[path] = processedContent
        }

        const title = config.value.title || props.playbook
        const frameworkLabel = FRAMEWORK_LABELS[framework] || framework

        // Open in StackBlitz
        sdk.openProject({
          title: `AgnosticUI ${title} - ${frameworkLabel}`,
          description: `${title} implementation using AgnosticUI with ${frameworkLabel}`,
          template: 'node',
          files: projectFiles,
          settings: {
            compile: {
              trigger: 'auto',
              clearConsole: false,
            },
          },
        })
      } catch (err) {
        console.error('Failed to open StackBlitz:', err)
        error.value = `Failed to load project: ${err.message}`
      } finally {
        loading.value = null
      }
    }

    return {
      availableFrameworks,
      loading,
      error,
      openInStackBlitz,
    }
  },
}
</script>

<style scoped>
.playbook-stackblitz {
  margin: 2rem 0;
}

.playbook-buttons {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}

.error-message {
  color: var(--vp-c-danger);
  margin-top: 1rem;
}
</style>
