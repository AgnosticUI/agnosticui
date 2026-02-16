<template>
  <div ref="wrapper">
    <div v-if="open" class="skin-panel">
      <div class="skin-panel-section">
        <div class="skin-panel-label">Theme</div>
        <div class="skin-panel-themes">
          <button :class="['skin-theme-btn', { active: !dark }]" @click="setTheme(false)">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></svg>
            Light
          </button>
          <button :class="['skin-theme-btn', { active: dark }]" @click="setTheme(true)">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>
            Dark
          </button>
        </div>
      </div>
      <div class="skin-panel-section">
        <div class="skin-panel-label">Skin</div>
        <button
          v-for="s in skins"
          :key="s.id"
          :class="['skin-option', { active: skin === s.id }]"
          @click="setSkin(s.id)"
        >
          <span class="skin-option-radio" />
          <span class="skin-option-label">{{ s.label }}</span>
          <span class="skin-option-swatch" :style="{ background: s.swatch }" />
        </button>
      </div>
      <div class="skin-panel-hint">
        <kbd>{{ isMac ? '⌘' : 'Ctrl' }}</kbd> + <kbd>Shift</kbd> + <kbd>T</kbd> to toggle
      </div>
    </div>
    <button class="skin-fab" aria-label="Toggle skin switcher" @click="open = !open">
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <circle cx="13.5" cy="6.5" r="0.5" fill="currentColor" /><circle cx="17.5" cy="10.5" r="0.5" fill="currentColor" /><circle cx="8.5" cy="7.5" r="0.5" fill="currentColor" /><circle cx="6.5" cy="12" r="0.5" fill="currentColor" />
        <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2Z"/>
      </svg>
    </button>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';

const skins = [
  { id: '', label: 'Default', swatch: '#297aff' },
  { id: 'deep-forest', label: 'Deep Forest', swatch: '#1f514c' },
  { id: 'terra-soft', label: 'Terra Soft', swatch: '#ff6a3e' },
  { id: 'claymorphic', label: 'Claymorphic', swatch: '#c96442' },
  { id: 'retro-brutalist', label: 'Retro Brutalist', swatch: '#ffdb33' },
  { id: 'monochromatic', label: 'Monochromatic', swatch: '#000000' },
  { id: 'muted-minimal', label: 'Muted Minimal', swatch: '#4a90a4' },
  { id: 'autumn-slate', label: 'Autumn Slate', swatch: '#d2691e' },
  { id: 'mo-neobrut', label: 'Mo-Neobrut', swatch: '#00bcd4' },
  { id: 'black-cream', label: 'Black Cream', swatch: '#1a1a1a' },
  { id: 'neons-on-black', label: 'Neons On Black', swatch: '#00ffff' },
];

const isMac = typeof navigator !== 'undefined' && /Mac/i.test(navigator.userAgent);

const open = ref(false);
const skin = ref(localStorage.getItem('ag-skin') || '');
const dark = ref(document.documentElement.getAttribute('data-theme') === 'dark');
const wrapper = ref<HTMLElement | null>(null);

function applySkinClass(skinId: string) {
  const html = document.documentElement;
  html.className = html.className.replace(/\bag-skin-[\w-]+\b/g, '').trim();
  if (skinId) html.classList.add(`ag-skin-${skinId}`);
  localStorage.setItem('ag-skin', skinId);
}

function applyThemeAttr(isDark: boolean) {
  if (isDark) {
    document.documentElement.setAttribute('data-theme', 'dark');
  } else {
    document.documentElement.removeAttribute('data-theme');
  }
  localStorage.setItem('ag-theme', isDark ? 'dark' : 'light');
}

function setSkin(id: string) {
  skin.value = id;
  applySkinClass(id);
}

function setTheme(isDark: boolean) {
  dark.value = isDark;
  applyThemeAttr(isDark);
}

// Restore prefs on load
applySkinClass(skin.value);
if (localStorage.getItem('ag-theme') === 'dark') applyThemeAttr(true);

function onKey(e: KeyboardEvent) {
  if ((e.metaKey || e.ctrlKey) && e.shiftKey && e.key === 'T') {
    e.preventDefault();
    open.value = !open.value;
  }
}

function onClickOutside(e: MouseEvent) {
  if (wrapper.value && !wrapper.value.contains(e.target as Node)) {
    open.value = false;
  }
}

onMounted(() => {
  window.addEventListener('keydown', onKey);
  document.addEventListener('mousedown', onClickOutside);
});

onUnmounted(() => {
  window.removeEventListener('keydown', onKey);
  document.removeEventListener('mousedown', onClickOutside);
});
</script>
