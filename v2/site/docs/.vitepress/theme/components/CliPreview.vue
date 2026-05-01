<template>
  <div class="cli-preview-section">
    <div class="cli-preview-container">
      <h2>Get Started in Seconds</h2>
      <p class="subtitle">Three commands and your agent of choice knows your entire stack.</p>

      <div class="cli-terminal">
        <div class="terminal-header">
          <span class="terminal-dot dot-red"></span>
          <span class="terminal-dot dot-yellow"></span>
          <span class="terminal-dot dot-green"></span>
          <span class="terminal-title">terminal</span>
        </div>
        <div class="terminal-content">
          <div class="command-line">
            <span class="prompt">$</span>
            <span class="command">{{ typedCommand }}</span>
            <span class="cursor">▋</span>
          </div>
          <div
            v-for="(line, index) in currentOutput"
            :key="`${currentCommandIndex}-${index}`"
            class="output-line"
            :class="{ success: index === currentOutput.length - 1 }"
          >
            <span class="output-text">{{ line }}</span>
          </div>
        </div>
      </div>
      <VueButtonFx
        fx="press-shadow"
        fx-ease="ease"
        fx-speed="md"
        variant="success"
        shape="capsule"
        size="lg"
        class="jumbo-button"
        @click="() => router.go('/installation')"
      >
        Get Agent-Ready in 3 Steps →
      </VueButtonFx>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useRouter } from 'vitepress'
import { VueButtonFx } from 'agnosticui-core/button-fx/vue'

const router = useRouter()

const commands = [
  {
    command: 'npx agnosticui-cli init',
    output: [
      '✓ Installing AgnosticUI components...',
      '✓ Components ready in src/components/ag/',
      '🎉 Done! Start building with AI-friendly components.'
    ]
  },
  {
    command: 'npx agnosticui-cli add button',
    output: [
      '✓ Adding button component...',
      '✓ Button component ready in src/components/ag/button/',
      '✨ Done! Import and use your button component.'
    ]
  },
  {
    command: 'npx agnosticui-cli context',
    output: [
      '✓ Detected Claude Code — writing to CLAUDE.md',
      '✓ 7 components · 2 playbooks included',
      'Done! Prompt Claude, Copilot, Gemini, or Codex — they know your stack.'
    ]
  }
]

const currentCommandIndex = ref(0)
const typedCommand = ref('')

const currentOutput = computed(() => commands[currentCommandIndex.value].output)

const typeCommand = () => {
  const fullCommand = commands[currentCommandIndex.value].command
  let i = 0
  const interval = setInterval(() => {
    if (i < fullCommand.length) {
      typedCommand.value = fullCommand.slice(0, i + 1)
      i++
    } else {
      clearInterval(interval)
      // Pause for 5 seconds before resetting and typing the next command
      setTimeout(() => {
        typedCommand.value = ''
        // Switch to the next command
        currentCommandIndex.value = (currentCommandIndex.value + 1) % commands.length
        setTimeout(typeCommand, 500)
      }, 5000)
    }
  }, 80)
}

onMounted(() => {
  typeCommand()
})
</script>

<style scoped>
.cli-preview-section {
  padding: 4rem 2rem;
  text-align: center;
  background: var(--vp-c-bg);
  position: relative;
}

.cli-preview-container {
  max-width: 900px;
  margin: 0 auto;
}

.cli-preview-section h2 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
  font-weight: 800;
  background: linear-gradient(120deg, #14b8a6 30%, #06b6d4);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.subtitle {
  font-size: 1.2rem;
  color: var(--vp-c-text-2);
  margin-bottom: 3rem;
}

.cli-terminal {
  max-width: 700px;
  margin: 0 auto 3rem;
  background: var(--vp-c-bg-soft);
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 20px 60px rgba(20, 184, 166, 0.15);
  border: 1px solid rgba(20, 184, 166, 0.2);
  transition: all 0.3s ease;
}

.cli-terminal:hover {
  transform: translateY(-5px);
  box-shadow: 0 25px 70px rgba(20, 184, 166, 0.25);
}

.terminal-header {
  background: var(--vp-c-bg-alt);
  padding: 0.8rem 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  border-bottom: 1px solid rgba(20, 184, 166, 0.1);
}

.terminal-dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
}

.dot-red {
  background: #ff5f57;
}
.dot-yellow {
  background: #ffbd2e;
}
.dot-green {
  background: #28ca42;
}

.terminal-title {
  margin-left: 1rem;
  font-family: "Courier New", monospace;
  font-size: 0.85rem;
  color: var(--vp-c-text-2);
}

.terminal-content {
  padding: 2rem;
  text-align: left;
  font-family: "Courier New", "Menlo", monospace;
  font-size: 1rem;
  line-height: 2;
}

.command-line {
  display: flex;
  align-items: center;
  margin-bottom: 1.5rem;
  animation: fadeIn 0.5s ease-out;
}

/* WCAG AA Compliant Colors - Light Mode */
.prompt {
  color: #00796b; /* 4.54:1 contrast on light background */
  margin-right: 0.8rem;
  font-weight: bold;
}

.command {
  color: #0277bd; /* 5.1:1 contrast on light background */
  font-weight: 600;
}

.cursor {
  color: #0277bd; /* 5.1:1 contrast on light background */
  animation: blink 1s step-end infinite;
  margin-left: 2px;
}

/* WCAG AA Compliant Colors - Dark Mode */
.dark .prompt {
  color: #4dd0c0; /* 7.2:1 contrast on dark background */
}

.dark .command {
  color: #4fc3f7; /* 8.5:1 contrast on dark background */
}

.dark .cursor {
  color: #4fc3f7; /* 8.5:1 contrast on dark background */
}

@keyframes blink {
  0%, 50% { opacity: 1; }
  51%, 100% { opacity: 0; }
}

.output-line {
  display: flex;
  align-items: center;
  opacity: 0;
  animation: fadeInSlide 0.6s ease-out forwards;
  margin-bottom: 0.5rem;
}

.output-line:nth-child(2) {
  animation-delay: 0.3s;
}

.output-line:nth-child(3) {
  animation-delay: 0.6s;
}

.output-line:nth-child(4) {
  animation-delay: 0.9s;
}

.output-text {
  color: var(--vp-c-text-2);
}

.output-line.success .output-text {
  color: #00897b; /* 4.51:1 contrast on light background */
  font-weight: 600;
}

.dark .output-line.success .output-text {
  color: #26a69a; /* 5.2:1 contrast on dark background */
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes fadeInSlide {
  from {
    opacity: 0;
    transform: translateX(-10px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

.cta-row {
  display: flex;
  justify-content: center;
  gap: 1rem;
}

@media (max-width: 768px) {
  .cli-preview-section {
    padding: 4rem 1rem;
  }

  .cli-preview-section h2 {
    font-size: 1.8rem;
  }

  .subtitle {
    font-size: 1rem;
  }

  .terminal-content {
    padding: 1.5rem;
    font-size: 0.9rem;
  }

}
</style>
