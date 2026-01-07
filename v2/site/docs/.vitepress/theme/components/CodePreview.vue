<template>
  <div class="code-preview-section">
    <div class="code-preview-container">
      <h2>Components That Live With Your Code</h2>
      <div
        class="code-window"
        @mouseenter="isHovered = true"
        @mouseleave="isHovered = false"
      >
        <div class="window-header">
          <span class="window-dot dot-red"></span>
          <span class="window-dot dot-yellow"></span>
          <span class="window-dot dot-green"></span>
          <span class="window-title">your-project/</span>
        </div>
        <div class="code-content">
          <div class="code-line">
            <span class="code-comment">// Your project structure</span>
          </div>
          <div class="code-line">
            <span class="code-keyword">src/components/ag/</span>
            <span class="code-comment">&nbsp;← .vue, .tsx, or .ts (framework-specific)</span>
          </div>
          <div class="code-line indent">
            <span class="code-tag">Button.vue</span>
            <span class="code-comment">&nbsp;← Fully customizable</span>
          </div>
          <div class="code-line indent">
            <span class="code-tag">Card.vue</span>
            <span class="code-comment">&nbsp;← AI can read it</span>
          </div>
          <div class="code-line indent">
            <span class="code-tag">Input.vue</span>
            <span class="code-comment">&nbsp;← No black box</span>
          </div>
          <div class="code-line">
            <span class="code-keyword">agnosticui/</span>
            <span class="code-comment">&nbsp;← Source templates</span>
          </div>
          <div class="code-line">
            <span class="code-keyword">pages/</span>
          </div>
          <div class="code-line">
            <span class="code-keyword">styles/</span>
          </div>
          <div
            class="code-line command-line"
            :class="{ visible: isHovered }"
          >
            <span class="code-prompt">$</span>
            <span class="code-command">npx agnosticui-cli add button</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const isHovered = ref(false);
</script>

<style scoped>
.code-preview-section {
  padding: 6rem 2rem;
  text-align: center;
  background: var(--vp-c-bg);
  position: relative;
  overflow: hidden;
}

.code-preview-container {
  max-width: 1200px;
  margin: 0 auto;
}

.code-preview-section h2 {
  font-size: 2.5rem;
  margin-bottom: 3rem;
  font-weight: 800;
  background: linear-gradient(
    120deg,
    var(--vp-c-brand-1) 30%,
    var(--vp-c-brand-2)
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.code-window {
  max-width: 800px;
  margin: 0 auto;
  background: var(--vp-c-bg-soft);
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 20px 60px rgba(102, 126, 234, 0.15);
  transition: all 0.3s ease;
  border: 1px solid rgba(102, 126, 234, 0.2);
}

.code-window:hover {
  transform: scale(1.02);
  box-shadow: 0 25px 70px rgba(102, 126, 234, 0.25);
}

.window-header {
  background: var(--vp-c-bg-alt);
  padding: 0.8rem 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  border-bottom: 1px solid rgba(102, 126, 234, 0.1);
}

.window-dot {
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

.window-title {
  margin-left: 1rem;
  font-family: "Courier New", monospace;
  font-size: 0.85rem;
  color: var(--vp-c-text-2);
}

.code-content {
  padding: 2rem;
  text-align: left;
  font-family: "Courier New", "Menlo", monospace;
  font-size: 0.95rem;
  line-height: 1.8;
}

.code-line {
  display: block;
  transition: all 0.3s ease;
}

.code-line.indent {
  padding-left: 2rem;
}

/* WCAG AA Compliant Colors - Light Mode */
.code-comment {
  color: #2d7d2d; /* 4.52:1 contrast on white background */
}

.code-tag {
  color: #0056b3; /* 7.1:1 contrast on white background */
}

.code-keyword {
  color: #8e24aa; /* 5.3:1 contrast on white background */
  font-weight: 600;
}

.code-prompt {
  color: #00796b; /* 4.54:1 contrast on white background */
  margin-right: 0.5rem;
}

.code-command {
  color: #6d4c00; /* 4.5:1 contrast on white background */
}

/* WCAG AA Compliant Colors - Dark Mode */
.dark .code-comment {
  color: #7fb77f; /* 4.51:1 contrast on #1e1e1e background */
}

.dark .code-tag {
  color: #6eb7ff; /* 7.1:1 contrast on #1e1e1e background */
}

.dark .code-keyword {
  color: #d896ff; /* 7.6:1 contrast on #1e1e1e background */
}

.dark .code-prompt {
  color: #4dd0c0; /* 7.2:1 contrast on #1e1e1e background */
}

.dark .code-command {
  color: #ffd966; /* 9.8:1 contrast on #1e1e1e background */
}

.command-line {
  margin-top: 1rem;
  padding-top: 1rem;
  border-top: 1px solid rgba(102, 126, 234, 0.1);
  opacity: 0;
  transform: translateY(10px);
  transition: all 0.4s ease;
}

.command-line.visible {
  opacity: 1;
  transform: translateY(0);
}

@media (max-width: 768px) {
  .code-preview-section {
    padding: 4rem 1rem;
  }

  .code-preview-section h2 {
    font-size: 1.8rem;
    margin-bottom: 2rem;
  }

  .code-content {
    padding: 1.5rem;
    font-size: 0.85rem;
  }

  .code-line.indent {
    padding-left: 1rem;
  }
}
</style>
