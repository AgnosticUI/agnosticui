<template>
  <div class="cli-preview-section">
    <div class="cli-preview-container">
      <h2>Get Started in Seconds</h2>
      <p class="subtitle">No more hallucinated UIs. One command sets you up.</p>

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
          <div class="output-line">
            <span class="output-text">✓ Installing AgnosticUI components...</span>
          </div>
          <div class="output-line">
            <span class="output-text">✓ Components ready in src/components/ag/</span>
          </div>
          <div class="output-line success">
            <span class="output-text">🎉 Done! Start building with AI-friendly components.</span>
          </div>
        </div>
      </div>

      <div class="cta-row">
        <VueLink
          href="/installation"
          class="cta-button"
        >
          View Full Installation Guide
          <ArrowRight :size="20" style="display: inline-block; vertical-align: middle; margin-left: 0.5rem;" />
        </VueLink>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { VueLink } from 'agnosticui-core/link/vue'
import { ArrowRight } from 'lucide-vue-next'

const fullCommand = 'npx agnosticui-cli init'
const typedCommand = ref('')

const typeCommand = () => {
  let i = 0
  const interval = setInterval(() => {
    if (i < fullCommand.length) {
      typedCommand.value = fullCommand.slice(0, i + 1)
      i++
    } else {
      clearInterval(interval)
      // Pause for 5 seconds before resetting and typing again
      setTimeout(() => {
        typedCommand.value = ''
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

.prompt {
  color: #14b8a6;
  margin-right: 0.8rem;
  font-weight: bold;
}

.command {
  color: #06b6d4;
  font-weight: 600;
}

.cursor {
  color: #06b6d4;
  animation: blink 1s step-end infinite;
  margin-left: 2px;
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
  color: #14b8a6;
  font-weight: 600;
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

.cta-button {
  display: inline-block;
  padding: 1rem 2rem;
  background: rgba(20, 184, 166, 0.1);
  border: 2px solid rgba(20, 184, 166, 0.3);
  border-radius: 50px;
  color: var(--vp-c-brand-1);
  font-weight: 700;
  text-decoration: none;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
}

.dark .cta-button {
  background: rgba(20, 184, 166, 0.15);
  border-color: rgba(20, 184, 166, 0.4);
}

.cta-button:hover {
  transform: translateY(-3px);
  background: rgba(20, 184, 166, 0.2);
  border-color: rgba(20, 184, 166, 0.5);
  box-shadow: 0 10px 30px rgba(20, 184, 166, 0.3);
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

  .cta-button {
    width: 100%;
    text-align: center;
  }
}
</style>
