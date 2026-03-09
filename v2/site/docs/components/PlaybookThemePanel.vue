<template>
  <div class="ptp">
    <!-- ── Skin picker ─────────────────────────────────────────────────────── -->
    <section class="ptp-section">
      <p class="ptp-label">Skins <span class="ptp-label-hint">— click to apply instantly</span></p>
      <div class="ptp-skins">
        <button
          v-for="skin in SKINS"
          :key="skin.id"
          class="ptp-swatch-btn"
          :class="{ active: activeSkin === skin.id }"
          :title="skin.label"
          :aria-label="skin.label"
          :aria-pressed="activeSkin === skin.id"
          @click="selectSkin(skin.id)"
        >
          <span class="ptp-swatch" :style="{ backgroundColor: skin.swatch }"></span>
          <span class="ptp-swatch-label">{{ skin.label }}</span>
        </button>
      </div>
    </section>

    <!-- ── Image-to-theme extraction ─────────────────────────────────────── -->
    <section class="ptp-section">
      <p class="ptp-label">Extract theme from image</p>
      <div
        class="ptp-drop-zone"
        :class="{ 'drag-over': isDragOver, 'has-palette': extractedPalette.length > 0 }"
        role="button"
        tabindex="0"
        :aria-label="extractedPalette.length > 0 ? 'Extracted palette — click Clear to reset' : 'Drop an image or click to upload for theme extraction'"
        @dragover.prevent="isDragOver = true"
        @dragleave="isDragOver = false"
        @drop.prevent="handleImageDrop"
        @click="extractedPalette.length === 0 && triggerFileInput()"
        @keydown.enter="triggerFileInput"
        @keydown.space.prevent="triggerFileInput"
      >
        <input
          ref="fileInputRef"
          type="file"
          accept="image/png,image/jpeg,image/webp"
          class="sr-only"
          tabindex="-1"
          aria-hidden="true"
          @change="handleImageSelect"
        />
        <template v-if="extractedPalette.length === 0">
          <VueIcon size="28" no-fill class="ptp-drop-icon"><ImagePlus :size="28" /></VueIcon>
          <p class="ptp-drop-label">Drop an image to extract a theme</p>
          <p class="ptp-drop-hint">PNG · JPG · WebP — or click to browse</p>
        </template>
        <template v-else>
          <div class="ptp-palette" @click.stop>
            <div class="ptp-palette-swatches">
              <span
                v-for="color in extractedPalette"
                :key="color"
                class="ptp-palette-swatch"
                :style="{ backgroundColor: color }"
                :title="color"
              ></span>
            </div>
            <VueButton size="small" variant="monochrome" :bordered="true" shape="rounded" @click.stop="clearExtraction">
              Clear image
            </VueButton>
          </div>
        </template>
      </div>
    </section>

    <!-- ── Paste-back custom CSS ──────────────────────────────────────────── -->
    <section class="ptp-section">
      <button class="ptp-toggle-header" :aria-expanded="pasteOpen" @click="pasteOpen = !pasteOpen">
        <p class="ptp-label" style="margin:0">Paste custom CSS vars</p>
        <VueIcon size="14" no-fill class="ptp-chevron" :class="{ 'ptp-chevron--open': pasteOpen }">
          <ChevronDown :size="14" />
        </VueIcon>
      </button>
      <div v-show="pasteOpen" class="ptp-paste-area">
        <p class="ptp-paste-hint">
          When a skin is selected its vars appear here for reference. Edit them and hit <strong>Apply</strong> to switch to fully custom theming. Or drop an image above to auto-generate a theme. Only <code>--ag-*</code> properties take effect.
        </p>
        <VueInput
          v-model:value="customCssText"
          label="Custom CSS vars"
          type="textarea"
          :rows="7"
          placeholder="--ag-primary: #4a90d9;
--ag-primary-dark: #357abd;
--ag-background-primary: #f8fafc;"
          :hide-label="true"
          spellcheck="false"
          class="ptp-textarea-input"
        />
        <div class="ptp-paste-actions">
          <VueButton size="small" variant="primary" shape="rounded" :disabled="!customCssText" @click="applyCustomCss">
            Apply
          </VueButton>
          <VueButton size="small" variant="monochrome" :bordered="true" shape="rounded" :disabled="!customCssText" @click="copyCustomCss">
            <VueIcon size="13" no-fill><Copy :size="13" /></VueIcon>
            <span class="mis1">Copy</span>
          </VueButton>
          <VueButton size="small" variant="monochrome" :bordered="true" shape="rounded" :disabled="!customCssText" @click="downloadCustomCss">
            <VueIcon size="13" no-fill><Download :size="13" /></VueIcon>
            <span class="mis1">Download</span>
          </VueButton>
          <VueButton size="small" variant="monochrome" :bordered="true" shape="rounded" :disabled="!customCssText" @click="clearCustomCss">
            Clear
          </VueButton>
          <span v-if="applyStatus" class="ptp-status" aria-live="polite">{{ applyStatus }}</span>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { SKINS, applySkin } from '@skins/skin-switcher-core.js'
import { SKINS_CSS } from '@skins/skins-css-data.js'
import VueButton from 'agnosticui-core/button/vue'
import VueInput from 'agnosticui-core/input/vue'
import { VueIcon } from 'agnosticui-core/icon/vue'
import { ImagePlus, ChevronDown, Copy, Download } from 'lucide-vue-next'

// ── State ─────────────────────────────────────────────────────────────────────

const activeSkin = ref('')
const isDragOver = ref(false)
const extractedPalette = ref([])
const fileInputRef = ref(null)
const pasteOpen = ref(true)
const customCssText = ref('')
const applyStatus = ref('')

onMounted(() => {
  activeSkin.value = localStorage.getItem('ag-skin') || ''
  // If custom CSS is active (no skin), restore textarea content
  if (!activeSkin.value) {
    customCssText.value = localStorage.getItem('ag-custom-css') || ''
  }
})

// ── Style tag helpers ─────────────────────────────────────────────────────────
// Custom CSS is applied via an injected <style> tag (not inline style.setProperty)
// so that :where(html) and [data-theme="dark"] blocks both take effect correctly.

function injectCustomStyleTag(cssText) {
  // If no CSS structure (no braces), wrap bare --ag-* declarations in :where(html)
  const trimmed = cssText.trim()
  const css = trimmed.includes('{') ? trimmed : (
    trimmed ? `:where(html) {\n${trimmed}\n}` : ''
  )
  if (!css) return
  let tag = document.getElementById('ag-custom-theme')
  if (!tag) {
    tag = document.createElement('style')
    tag.id = 'ag-custom-theme'
    document.head.appendChild(tag)
  }
  tag.textContent = css
}

function removeCustomStyleTag() {
  document.getElementById('ag-custom-theme')?.remove()
}

// ── Skin ──────────────────────────────────────────────────────────────────────
// Skins and custom CSS are mutually exclusive:
//   • selecting a skin → class-based (skins-bundle.css), custom CSS cleared
//   • applying custom CSS → style tag, skin class cleared

function selectSkin(id) {
  activeSkin.value = id
  applySkin(id)           // applies ag-skin-{id} class, saves ag-skin to localStorage

  // Remove any active custom CSS style tag — skin class takes over
  removeCustomStyleTag()
  localStorage.removeItem('ag-custom-css')

  // Clear any image extraction so the palette circles don't linger
  clearExtraction()

  // Populate textarea with the skin's vars (reformatted to generic selectors)
  // so the user can see exactly what the skin does and optionally customise
  customCssText.value = skinToRootVarsCss(id)
  applyStatus.value = 'Skin applied'
  setTimeout(() => { applyStatus.value = '' }, 2000)
}

/**
 * Reformat skin CSS from class-scoped selectors to generic :root-level selectors.
 * e.g. ":where(html).ag-skin-deep-forest { ... }" → ":where(html) { ... }"
 * This lets users copy vars directly into their own projects.
 */
function skinToRootVarsCss(skinId) {
  const entry = SKINS_CSS[skinId]
  if (!entry) return ''
  const escId = skinId.replace(/[-]/g, '\\-')
  const light = (entry.light || '')
    .replace(new RegExp(`:where\\(html\\)\\.ag-skin-${escId}`, 'g'), ':where(html)')
  const dark = (entry.dark || '')
    .replace(new RegExp(`\\[data-theme="dark"\\]\\.ag-skin-${escId}`, 'g'), '[data-theme="dark"]')
  return [light.trim(), dark.trim()].filter(Boolean).join('\n\n')
}

// ── Custom CSS paste-back ─────────────────────────────────────────────────────

function applyCustomCss() {
  // Switch from skin → custom CSS: remove skin class
  if (activeSkin.value) {
    applySkin('')           // clears ag-skin-* class and sets ag-skin='' in localStorage
    activeSkin.value = ''
  }
  injectCustomStyleTag(customCssText.value)
  localStorage.setItem('ag-custom-css', customCssText.value)
  applyStatus.value = 'Applied'
  setTimeout(() => { applyStatus.value = '' }, 2000)
}

function clearCustomCss() {
  customCssText.value = ''
  localStorage.removeItem('ag-custom-css')
  removeCustomStyleTag()
  applyStatus.value = 'Cleared'
  setTimeout(() => { applyStatus.value = '' }, 2000)
}

async function copyCustomCss() {
  if (!customCssText.value) return
  try {
    await navigator.clipboard.writeText(customCssText.value)
    applyStatus.value = 'Copied!'
  } catch {
    applyStatus.value = 'Copy failed'
  }
  setTimeout(() => { applyStatus.value = '' }, 2000)
}

function downloadCustomCss() {
  if (!customCssText.value) return
  const blob = new Blob([customCssText.value], { type: 'text/css' })
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = 'ag-theme.css'
  a.click()
  URL.revokeObjectURL(url)
  applyStatus.value = 'Downloaded!'
  setTimeout(() => { applyStatus.value = '' }, 2000)
}

// ── Image drop / file input ───────────────────────────────────────────────────

function triggerFileInput() {
  fileInputRef.value?.click()
}

function handleImageDrop(event) {
  isDragOver.value = false
  const file = event.dataTransfer?.files?.[0]
  if (file && file.type.startsWith('image/')) processImageFile(file)
}

function handleImageSelect(event) {
  const file = event.target?.files?.[0]
  if (file) processImageFile(file)
}

function clearExtraction() {
  extractedPalette.value = []
  if (fileInputRef.value) fileInputRef.value.value = ''
}

function processImageFile(file) {
  const img = new Image()
  const url = URL.createObjectURL(file)
  img.onload = () => {
    URL.revokeObjectURL(url)
    const palette = extractColors(img)
    extractedPalette.value = palette
    const { light, dark } = mapPaletteToTokens(palette)
    const css = tokensToCSS(light, dark)

    // Clear any active skin — switching to custom CSS mode
    if (activeSkin.value) {
      applySkin('')
      activeSkin.value = ''
    }
    customCssText.value = css
    injectCustomStyleTag(css)          // proper light/dark via <style> tag
    localStorage.setItem('ag-custom-css', css)
    applyStatus.value = 'Theme extracted and applied'
    setTimeout(() => { applyStatus.value = '' }, 3000)
  }
  img.src = url
}

// ── Color math helpers ────────────────────────────────────────────────────────

function _rgbToHex(r, g, b) {
  return '#' + [r, g, b].map(v => v.toString(16).padStart(2, '0')).join('')
}

function _hexToRgb(hex) {
  const m = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
  return m ? { r: parseInt(m[1], 16), g: parseInt(m[2], 16), b: parseInt(m[3], 16) } : { r: 0, g: 0, b: 0 }
}

function _rgbToHsl(r, g, b) {
  r /= 255; g /= 255; b /= 255
  const max = Math.max(r, g, b), min = Math.min(r, g, b)
  let h = 0, s = 0
  const l = (max + min) / 2
  if (max !== min) {
    const d = max - min
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min)
    switch (max) {
      case r: h = ((g - b) / d + (g < b ? 6 : 0)) / 6; break
      case g: h = ((b - r) / d + 2) / 6; break
      case b: h = ((r - g) / d + 4) / 6; break
    }
  }
  return { h: h * 360, s, l }
}

function _hslToHex(h, s, l) {
  h /= 360
  const hue2rgb = (p, q, t) => {
    if (t < 0) t += 1; if (t > 1) t -= 1
    if (t < 1 / 6) return p + (q - p) * 6 * t
    if (t < 1 / 2) return q
    if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6
    return p
  }
  let r, g, b
  if (s === 0) {
    r = g = b = l
  } else {
    const q = l < 0.5 ? l * (1 + s) : l + s - l * s
    const p = 2 * l - q
    r = hue2rgb(p, q, h + 1 / 3); g = hue2rgb(p, q, h); b = hue2rgb(p, q, h - 1 / 3)
  }
  return _rgbToHex(Math.round(r * 255), Math.round(g * 255), Math.round(b * 255))
}

function _getLuminance(hex) {
  const { r, g, b } = _hexToRgb(hex)
  const toLinear = v => { v /= 255; return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4) }
  return 0.2126 * toLinear(r) + 0.7152 * toLinear(g) + 0.0722 * toLinear(b)
}

function _getContrastRatio(hex1, hex2) {
  const l1 = _getLuminance(hex1), l2 = _getLuminance(hex2)
  return (Math.max(l1, l2) + 0.05) / (Math.min(l1, l2) + 0.05)
}

function _ensureContrast(color, against, minRatio, preferDarken = true) {
  let { h, s, l } = (() => { const { r, g, b } = _hexToRgb(color); return _rgbToHsl(r, g, b) })()
  for (let i = 0; i < 20; i++) {
    if (_getContrastRatio(_hslToHex(h, s, l), against) >= minRatio) break
    l = preferDarken ? Math.max(0, l - 0.05) : Math.min(1, l + 0.05)
  }
  return _hslToHex(h, s, l)
}

function _darkenHex(hex, amount) {
  const { r, g, b } = _hexToRgb(hex); const { h, s, l } = _rgbToHsl(r, g, b)
  return _hslToHex(h, s, Math.max(0, l - amount))
}

function _lightenHex(hex, amount) {
  const { r, g, b } = _hexToRgb(hex); const { h, s, l } = _rgbToHsl(r, g, b)
  return _hslToHex(h, s, Math.min(1, l + amount))
}

function _vibrancyScore(hex) {
  const { r, g, b } = _hexToRgb(hex); const { s } = _rgbToHsl(r, g, b)
  return s * (1 - Math.abs(_getLuminance(hex) - 0.5) * 2)
}

// ── Canvas color extraction ───────────────────────────────────────────────────

function extractColors(img) {
  const MAX_DIM = 200
  const canvas = document.createElement('canvas')
  const scale = Math.min(1, MAX_DIM / Math.max(img.width, img.height))
  canvas.width = Math.round(img.width * scale)
  canvas.height = Math.round(img.height * scale)
  const ctx = canvas.getContext('2d')
  ctx.drawImage(img, 0, 0, canvas.width, canvas.height)
  const data = ctx.getImageData(0, 0, canvas.width, canvas.height).data

  const buckets = {}
  for (let i = 0; i < data.length; i += 4) {
    if (data[i + 3] < 128) continue
    const r = Math.round(data[i] / 24) * 24
    const g = Math.round(data[i + 1] / 24) * 24
    const b = Math.round(data[i + 2] / 24) * 24
    const key = `${r},${g},${b}`
    buckets[key] = (buckets[key] || 0) + 1
  }

  const sorted = Object.entries(buckets).sort((a, b) => b[1] - a[1]).map(([key]) => key.split(',').map(Number))
  const selected = []
  for (const [r, g, b] of sorted) {
    if (selected.length >= 8) break
    const tooClose = selected.some(([sr, sg, sb]) => {
      const dr = r - sr, dg = g - sg, db = b - sb
      return Math.sqrt(dr * dr + dg * dg + db * db) < 50
    })
    if (!tooClose) selected.push([r, g, b])
  }
  return selected.map(([r, g, b]) => _rgbToHex(r, g, b))
}

// ── Palette-to-token mapping ──────────────────────────────────────────────────

function mapPaletteToTokens(palette) {
  if (!palette.length) return { light: {}, dark: {} }

  const colors = palette.map(hex => {
    const { r, g, b } = _hexToRgb(hex)
    const hsl = _rgbToHsl(r, g, b)
    return { hex, ...hsl, lum: _getLuminance(hex), vib: _vibrancyScore(hex) }
  })

  const findByHueRange = (min, max, exclude = []) =>
    colors.filter(c => {
      const inRange = min <= max ? c.h >= min && c.h <= max : c.h >= min || c.h <= max
      return inRange && !exclude.includes(c.hex) && c.s >= 0.15
    }).sort((a, b) => b.vib - a.vib)[0]

  const vibrancySorted = [...colors].sort((a, b) => b.vib - a.vib)
  const primaryColor = vibrancySorted.find(c => c.lum >= 0.15 && c.lum <= 0.70) || vibrancySorted[0]
  let primaryHex = _ensureContrast(primaryColor.hex, '#ffffff', 4.5, true)
  const { r: pr, g: pg, b: pb } = _hexToRgb(primaryHex)
  const primaryHsl = _rgbToHsl(pr, pg, pb)
  const dominantHue = primaryHsl.h

  const primaryRgb = _hexToRgb(primaryHex)
  const secondaryColor = vibrancySorted.find(c => {
    const { r, g, b } = _hexToRgb(c.hex)
    const dr = r - primaryRgb.r, dg = g - primaryRgb.g, db = b - primaryRgb.b
    return c.hex !== primaryColor.hex && Math.sqrt(dr * dr + dg * dg + db * db) > 60
  })
  let secondaryHex = secondaryColor
    ? _ensureContrast(secondaryColor.hex, '#ffffff', 3.0, true)
    : _hslToHex((dominantHue + 30) % 360, primaryHsl.s, primaryHsl.l)

  const successHex = findByHueRange(90, 150)?.hex ?? _hslToHex(120, 0.5, 0.35)
  const dangerHex = (findByHueRange(0, 20) ?? findByHueRange(340, 360))?.hex ?? _hslToHex(0, 0.6, 0.40)
  const warningHex = findByHueRange(35, 65)?.hex ?? _hslToHex(45, 0.7, 0.45)
  const infoBase = findByHueRange(200, 240, [primaryHex])
  const infoHex = infoBase ? infoBase.hex : (() => {
    const { r, g, b } = _hexToRgb(primaryHex); const pHsl = _rgbToHsl(r, g, b)
    return _hslToHex(210, Math.max(0, pHsl.s - 0.3), pHsl.l)
  })()

  const neutrals = colors.filter(c => c.s < 0.25).sort((a, b) => b.lum - a.lum)
  const bgPrimary = neutrals[0]?.hex ?? _hslToHex(dominantHue, 0.05, 0.98)
  const bgSecondary = neutrals[1]?.hex ?? _darkenHex(bgPrimary, 0.04)
  const bgTertiary = _darkenHex(bgSecondary, 0.03)

  const darkestColor = [...colors].sort((a, b) => a.lum - b.lum)[0]
  const textPrimary = _ensureContrast(darkestColor?.hex ?? '#111827', bgSecondary, 4.5, true)
  const { r: tpr, g: tpg, b: tpb } = _hexToRgb(textPrimary)
  const tpHsl = _rgbToHsl(tpr, tpg, tpb)
  const textSecondary = _ensureContrast(
    _hslToHex(tpHsl.h, tpHsl.s, Math.min(1, tpHsl.l + 0.15)), bgSecondary, 3.0, true
  )

  const bgSecLum = _getLuminance(bgSecondary)
  const tsLum = _getLuminance(textSecondary)
  const borderL = (bgSecLum + tsLum) / 2
  const border = _hslToHex(dominantHue, 0.10, Math.max(0.1, Math.min(0.9, borderL)))
  const borderSubtle = _lightenHex(border, 0.05)

  const sl = baseHex => {
    const base = _ensureContrast(baseHex, bgPrimary, 3.0, true)
    const { r, g, b } = _hexToRgb(base); const { h } = _rgbToHsl(r, g, b)
    return { base, dark: _darkenHex(base, 0.12), background: _hslToHex(h, 0.20, 0.93),
      text: _ensureContrast(_darkenHex(base, 0.10), _hslToHex(h, 0.20, 0.93), 4.5, true) }
  }

  const darkNeutrals = colors.filter(c => c.s < 0.25 && c.lum < 0.06).sort((a, b) => a.lum - b.lum)
  const darkBgPrimary = darkNeutrals[0]?.hex ?? _hslToHex(dominantHue, 0.10, 0.07)
  const darkBgSecondary = _lightenHex(darkBgPrimary, 0.05)
  const darkBgTertiary = _lightenHex(darkBgPrimary, 0.10)

  const lightestColor = [...colors].sort((a, b) => b.lum - a.lum)[0]
  const darkTextPrimary = _ensureContrast(lightestColor?.hex ?? '#F0F6FC', darkBgSecondary, 4.5, false)
  const { r: dtpr, g: dtpg, b: dtpb } = _hexToRgb(darkTextPrimary)
  const dtpHsl = _rgbToHsl(dtpr, dtpg, dtpb)
  const darkTextSecondary = _ensureContrast(
    _hslToHex(dtpHsl.h, dtpHsl.s, Math.max(0, dtpHsl.l - 0.10)), darkBgSecondary, 3.0, false
  )

  const darkBorder = _hslToHex(dominantHue, 0.12, 0.25)
  const darkBorderSubtle = _lightenHex(darkBorder, 0.08)

  let darkPrimary = primaryHex
  if (_getLuminance(darkPrimary) < 0.25) darkPrimary = _lightenHex(darkPrimary, 0.20)
  darkPrimary = _ensureContrast(darkPrimary, '#ffffff', 4.5, false)
  const { r: dphr, g: dphg, b: dphb } = _hexToRgb(darkPrimary)
  const darkPrimaryHsl = _rgbToHsl(dphr, dphg, dphb)

  let darkSecondary = _getLuminance(secondaryHex) < 0.25 ? _lightenHex(secondaryHex, 0.20) : secondaryHex

  const sd = lightBaseHex => {
    const { r, g, b } = _hexToRgb(lightBaseHex); const { h } = _rgbToHsl(r, g, b)
    let base = _getLuminance(lightBaseHex) < 0.25 ? _lightenHex(lightBaseHex, 0.20) : lightBaseHex
    base = _ensureContrast(base, darkBgPrimary, 3.0, false)
    return { base, dark: _lightenHex(base, 0.10), background: _hslToHex(h, 0.35, 0.10),
      text: _ensureContrast(_lightenHex(base, 0.10), _hslToHex(h, 0.35, 0.10), 4.5, false) }
  }

  const light = {
    '--ag-primary': primaryHex, '--ag-primary-dark': _darkenHex(primaryHex, 0.12),
    '--ag-primary-background': _hslToHex(dominantHue, 0.20, 0.93),
    '--ag-primary-text': _ensureContrast(_darkenHex(primaryHex, 0.10), _hslToHex(dominantHue, 0.20, 0.93), 4.5, true),
    '--ag-secondary': secondaryHex, '--ag-secondary-dark': _darkenHex(secondaryHex, 0.10),
    '--ag-background-primary': bgPrimary, '--ag-background-secondary': bgSecondary, '--ag-background-tertiary': bgTertiary,
    '--ag-text-primary': textPrimary, '--ag-text-secondary': textSecondary,
    '--ag-border': border, '--ag-border-subtle': borderSubtle,
    '--ag-success': sl(successHex).base, '--ag-success-dark': sl(successHex).dark,
    '--ag-success-background': sl(successHex).background, '--ag-success-text': sl(successHex).text,
    '--ag-danger': sl(dangerHex).base, '--ag-danger-dark': sl(dangerHex).dark,
    '--ag-danger-background': sl(dangerHex).background, '--ag-danger-text': sl(dangerHex).text,
    '--ag-warning': sl(warningHex).base, '--ag-warning-dark': sl(warningHex).dark,
    '--ag-warning-background': sl(warningHex).background, '--ag-warning-text': sl(warningHex).text,
    '--ag-info': sl(infoHex).base, '--ag-info-dark': sl(infoHex).dark,
    '--ag-info-background': sl(infoHex).background, '--ag-info-text': sl(infoHex).text,
  }

  const dark = {
    '--ag-primary': darkPrimary, '--ag-primary-dark': _darkenHex(darkPrimary, 0.10),
    '--ag-primary-background': _hslToHex(darkPrimaryHsl.h, 0.40, 0.12),
    '--ag-primary-text': _ensureContrast(_lightenHex(darkPrimary, 0.10), _hslToHex(darkPrimaryHsl.h, 0.40, 0.12), 4.5, false),
    '--ag-secondary': darkSecondary, '--ag-secondary-dark': _darkenHex(darkSecondary, 0.10),
    '--ag-background-primary': darkBgPrimary, '--ag-background-secondary': darkBgSecondary, '--ag-background-tertiary': darkBgTertiary,
    '--ag-text-primary': darkTextPrimary, '--ag-text-secondary': darkTextSecondary,
    '--ag-border': darkBorder, '--ag-border-subtle': darkBorderSubtle,
    '--ag-success': sd(successHex).base, '--ag-success-dark': sd(successHex).dark,
    '--ag-success-background': sd(successHex).background, '--ag-success-text': sd(successHex).text,
    '--ag-danger': sd(dangerHex).base, '--ag-danger-dark': sd(dangerHex).dark,
    '--ag-danger-background': sd(dangerHex).background, '--ag-danger-text': sd(dangerHex).text,
    '--ag-warning': sd(warningHex).base, '--ag-warning-dark': sd(warningHex).dark,
    '--ag-warning-background': sd(warningHex).background, '--ag-warning-text': sd(warningHex).text,
    '--ag-info': sd(infoHex).base, '--ag-info-dark': sd(infoHex).dark,
    '--ag-info-background': sd(infoHex).background, '--ag-info-text': sd(infoHex).text,
  }

  return { light, dark }
}

// ── CSS string generation ─────────────────────────────────────────────────────

function tokensToCSS(light, dark) {
  const lightLines = [':where(html) {']
  for (const [k, v] of Object.entries(light)) lightLines.push(`  ${k}: ${v};`)
  lightLines.push('}')
  const darkLines = ['[data-theme="dark"] {']
  for (const [k, v] of Object.entries(dark)) darkLines.push(`  ${k}: ${v};`)
  darkLines.push('}')
  return lightLines.join('\n') + '\n\n' + darkLines.join('\n')
}
</script>

<style scoped>
.ptp {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.ptp-section {
  display: flex;
  flex-direction: column;
  gap: 0.625rem;
}

.ptp-label {
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: var(--vp-c-text-2);
  margin: 0;
}

.ptp-label-hint {
  font-weight: 400;
  text-transform: none;
  letter-spacing: 0;
  font-size: 0.7rem;
  color: var(--vp-c-text-3);
}

/* Skin swatches */
.ptp-skins {
  display: flex;
  flex-wrap: wrap;
  gap: 0.375rem;
}

.ptp-swatch-btn {
  display: flex;
  align-items: center;
  gap: 0.35rem;
  padding: 0.2rem 0.5rem 0.2rem 0.25rem;
  border: 1.5px solid var(--vp-c-divider);
  border-radius: 999px;
  background: var(--vp-c-bg);
  cursor: pointer;
  font-size: 0.72rem;
  color: var(--vp-c-text-1);
  transition: border-color 0.15s, box-shadow 0.15s;
  white-space: nowrap;
}

.ptp-swatch-btn:hover {
  border-color: var(--vp-c-brand-1);
}

.ptp-swatch-btn.active {
  border-color: var(--vp-c-brand-1);
  box-shadow: 0 0 0 2px var(--vp-c-brand-soft);
}

.ptp-swatch {
  display: inline-block;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  border: 1px solid rgba(0,0,0,0.12);
  flex-shrink: 0;
}

.ptp-swatch-label {
  line-height: 1;
}

/* Paste section toggle header */
.ptp-toggle-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  color: inherit;
  text-align: left;
}

.ptp-chevron {
  color: var(--vp-c-text-3);
  transition: transform 0.2s ease;
  flex-shrink: 0;
}

.ptp-chevron--open {
  transform: rotate(180deg);
}

/* Drop zone */
.ptp-drop-zone {
  border: 2px dashed var(--vp-c-divider);
  border-radius: 8px;
  padding: 1.25rem;
  text-align: center;
  cursor: pointer;
  transition: border-color 0.15s, background 0.15s;
  min-height: 90px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.375rem;
}

.ptp-drop-zone:hover,
.ptp-drop-zone.drag-over {
  border-color: var(--vp-c-brand-1);
  background: var(--vp-c-brand-soft);
}

.ptp-drop-zone.has-palette {
  cursor: default;
}

.ptp-drop-icon {
  color: var(--vp-c-text-3);
}

.ptp-drop-label {
  font-size: 0.8125rem;
  color: var(--vp-c-text-2);
  margin: 0;
}

.ptp-drop-hint {
  font-size: 0.72rem;
  color: var(--vp-c-text-3);
  margin: 0;
}

.ptp-palette {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.625rem;
  width: 100%;
}

.ptp-palette-swatches {
  display: flex;
  gap: 0.375rem;
  flex-wrap: wrap;
  justify-content: center;
}

.ptp-palette-swatch {
  width: 24px;
  height: 24px;
  border-radius: 50%;
  border: 1px solid rgba(0,0,0,0.12);
  display: inline-block;
}

/* Paste area */
.ptp-paste-area {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding-top: 0.5rem;
}

.ptp-paste-hint {
  font-size: 0.78rem;
  color: var(--vp-c-text-2);
  margin: 0;
  line-height: 1.5;
}

.ptp-paste-actions {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  flex-wrap: wrap;
}

.ptp-status {
  font-size: 0.8rem;
  color: var(--vp-c-brand-1);
  font-weight: 500;
}

/* Force textarea to fill the panel width */
.ptp-textarea-input {
  width: 100%;
}

.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}
</style>
