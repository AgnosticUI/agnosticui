# Blog / Article Reader Playbook — PROMPT-3-FRAMEWORKS.md

## Overview

**New components:** ScrollProgress, ScrollToButton, Mark, AspectRatio, Loader

**Design inspiration:** Medium, Dropbox Paper, Svbtle

**Target aesthetic:** Single-column editorial layout. Lora serif for body copy.
Strong typographic scale. Restrained UI chrome that recedes while reading.

---

## Directory Structure

All output relative to `v2/playbooks/blog/`. Three projects:

```
react-example/
  index.html
  src/
    main.tsx
    App.tsx
    app.css
    SkinSwitcher.tsx
    data/article.ts

vue-example/
  index.html
  src/
    main.ts
    App.vue
    app.css
    SkinSwitcher.vue
    data/article.ts

lit-example/
  index.html
  src/
    main.ts
    blog-app.ts
    app.css
    skin-switcher.ts
    data/article.ts
```

---

## Project Setup

### React

```bash
npm create vite@latest react-example -- --template react-ts
cd react-example
npm install
npm install lucide-react
npx agnosticui-cli init --framework react --skip-prompts
npx agnosticui-cli add \
  Header Avatar Badge Button Divider Input Tag Tabs Toast \
  ScrollProgress ScrollToButton Mark AspectRatio Loader
```

### Vue

```bash
npm create vite@latest vue-example -- --template vue-ts
cd vue-example
npm install
npm install lucide-vue-next
npx agnosticui-cli init --framework vue --skip-prompts
npx agnosticui-cli add \
  Header Avatar Badge Button Divider Input Tag Tabs Toast \
  ScrollProgress ScrollToButton Mark AspectRatio Loader
```

`vite.config.ts`:

```ts
vue({
  template: {
    compilerOptions: { isCustomElement: (tag) => tag.startsWith('ag-') },
  },
})
```

### Lit

```bash
npm create vite@latest lit-example -- --template lit-ts
cd lit-example
npm install
npx agnosticui-cli init --framework lit --skip-prompts
npx agnosticui-cli add \
  Header Avatar Badge Button Divider Input Tag Tabs Toast \
  ScrollProgress ScrollToButton Mark AspectRatio Loader
```

---

## Token & Font Setup

### `index.html` — add to `<head>`

```html
<link
  href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Lora:ital,wght@0,400;0,600;1,400&display=swap"
  rel="stylesheet"
/>
```

### Entry point imports (all frameworks)

```ts
import './components/ag/styles/ag-tokens.css'
import './components/ag/styles/ag-tokens-dark.css'
import './components/ag/styles/skins-bundle.css'
import './components/ag/styles/skin-switcher.css'
import './app.css'
```

---

## Article Data — `src/data/article.ts`

Create this file identically in all three projects:

```ts
export const article = {
  title: 'The Quiet Art of Deep Reading in a Distracted Age',
  subtitle: 'Why slowing down transforms how we understand the written word',
  category: 'Culture',
  author: {
    name: 'Alex Chen',
    initials: 'AC',
    bio: 'Alex Chen is a writer and researcher exploring how digital habits reshape human cognition, creativity, and culture.',
    date: 'March 15, 2025',
  },
  readTime: '8 min read',
  heroImage: 'https://picsum.photos/seed/deepreading/1200/675',
  heroImageAlt: 'Open book on a wooden desk bathed in warm afternoon light',
  body: [
    "Something caught me off guard last autumn while reading a novel I had been putting off for months. Midway through the second chapter, I noticed I was still on the same page — not because the prose was difficult, but because I had forgotten how to stay. I would reach a paragraph's end and find myself scanning back, unsure what I had just absorbed. The words were there, but I wasn't.",
    'We are, by nearly every measure, reading more than at any point in human history: emails, articles, threads, newsletters, reports. Text floods through our days in a continuous current. And yet a growing number of people report feeling less able to engage with extended written thought than they once did. We read more and comprehend less. We consume faster and retain barely anything.',
    "The neuroscientist Maryanne Wolf has spent decades studying what happens in the brain during reading. She describes the human capacity for deep reading — the slow, immersive kind — as a magnificent but fragile achievement. Unlike spoken language, which is biologically hardwired, reading is a cultural technology the brain must learn, and can partially unlearn. The habits encouraged by digital interfaces — scanning, jumping, multitasking — are, she argues, rewiring our reading circuits in real time.",
    'This is not an argument against the internet, which has done extraordinary things for access to knowledge and expression. It is an argument about design. Most digital environments are built to keep attention moving: another headline, another notification, another recommendation. Depth requires the opposite — the willingness to stay somewhere long enough for meaning to accumulate. The architecture of our devices systematically discourages that kind of staying.',
    'Deep reading, as Wolf defines it, is not simply understanding what words mean. It is the cognitive and emotional process by which we make connections, generate inferences, feel the weight of a sentence, and inhabit another point of view. It is how empathy is practised at scale. It is how complex argument becomes something more than information — something that changes how we think. Strip that capacity away and we are left with faster processing of less.',
    "Reclaiming depth does not require a wholesale rejection of screens. It requires deliberate design of one's reading life. That might mean reserving certain texts for paper. It might mean a browser extension that removes sidebars and notifications. It might mean reading with a pencil — not to annotate cleverly, but to slow the eye down. It might simply mean deciding, before opening an article, that you are going to finish it.",
    'Re-reading is one of the most underrated strategies of all. In digital culture we almost never return to something we have already read; there is always more to consume. But returning to a difficult passage, a resonant sentence, a paragraph that confused you the first time, does something that novelty cannot: it lets the text work on you rather than the other way around.',
    'The screen you are reading these words on is not your enemy. Screens are neutral surfaces. What surrounds them — the alerts, the tabs, the ambient pressure to be elsewhere — that is what makes depth hard. Build a reading environment that strips those pressures away, even briefly, and the same words can do what they always could: slow time, open thought, and briefly make the interior life feel large.',
  ],
  related: [
    {
      id: 1,
      title: 'How Typography Shapes the Way We Think',
      category: 'Design',
      image: 'https://picsum.photos/seed/typography/600/400',
      readTime: '6 min read',
    },
    {
      id: 2,
      title: 'The Science of Habit Formation in Digital Spaces',
      category: 'Science',
      image: 'https://picsum.photos/seed/habitscience/600/400',
      readTime: '5 min read',
    },
    {
      id: 3,
      title: 'Designing for Attention: Lessons from Print',
      category: 'Design',
      image: 'https://picsum.photos/seed/printdesign/600/400',
      readTime: '7 min read',
    },
  ],
  comments: [
    {
      id: 1,
      author: 'Sam K.',
      initials: 'SK',
      date: 'March 16, 2025',
      text: "This articulates something I've felt for years but couldn't name. The bit about re-reading especially — I used to do that constantly and somewhere along the way just stopped.",
    },
    {
      id: 2,
      author: 'River L.',
      initials: 'RL',
      date: 'March 16, 2025',
      text: "Wolf's research is cited a lot but never with this kind of clarity about what it actually means for everyday reading habits. Bookmarked for re-reading, naturally.",
    },
    {
      id: 3,
      author: 'Jordan M.',
      initials: 'JM',
      date: 'March 17, 2025',
      text: 'The paragraph about re-reading hit hard. I used to annotate physical books obsessively and the discipline of that slowing-down was real.',
    },
  ],
}
```

---

## Application Layout

```
┌─────────────────────────────────────────────────────────────────┐
│ [ScrollProgress — fixed top, full-width thin bar]               │
├─────────────────────────────────────────────────────────────────┤
│ HEADER                                                          │
│ [AgnosticUI]                        [☀/🌙]  [Avatar: AC]        │
├─────────────────────────────────────────────────────────────────┤
│                  ┌──── .reader-main (max 720px) ────┐           │
│                  │                                   │           │
│                  │  [AspectRatio 16:9 → hero image]  │           │
│                  │                                   │           │
│                  │  [Tag: Culture]                   │           │
│                  │  [Avatar AC]  Alex Chen  ·  Mar 15, 2025     │
│                  │  [Badge: 8 min read]              │           │
│                  │                                   │           │
│                  │  [Tabs: Article | Comments (3)]   │           │
│                  │                                   │           │
│                  │  — Article tab —                  │           │
│                  │  [Find input]  "n matches"        │           │
│                  │  <h1>The Quiet Art of…</h1>       │           │
│                  │  <p class="subtitle">…</p>        │           │
│                  │  [Mark wraps all body paragraphs] │           │
│                  │  [Divider]                        │           │
│                  │  [Author card: Avatar + bio]      │           │
│                  │  [Related: 3 AspectRatio cards]   │           │
│                  │                                   │           │
│                  │  — Comments tab —                 │           │
│                  │  [3 comments with Avatar + text]  │           │
│                  │                                   │           │
│                  └───────────────────────────────────┘           │
├─────────────────────────────────────────────────────────────────┤
│ [ScrollToButton — fixed bottom-right, appears after 400px]      │
│ [SkinSwitcher FAB — fixed bottom-right, above ScrollToButton]   │
└─────────────────────────────────────────────────────────────────┘
```

**Initial load state:** The entire `.reader-main` content area shows a centered
`Loader` for 1500ms, then is replaced by the article.

---

## `app.css`

Create identically in all three projects (`src/app.css`):

```css
*,
*::before,
*::after {
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: 'Inter', sans-serif;
  background-color: var(--ag-background-primary);
  color: var(--ag-text-primary);
}

/* ── Layout ── */
.reader-main {
  max-width: 720px;
  margin: 0 auto;
  padding: var(--ag-space-6, 1.5rem) var(--ag-space-4, 1rem);
  padding-bottom: 5rem;
}

/* ── Typography ── */
.reader-body {
  font-family: 'Lora', serif;
  font-size: 1.1875rem;
  line-height: 1.8;
  color: var(--ag-text-primary);
}

.reader-body p {
  margin: 0 0 1.5em;
}

.article-title {
  font-family: 'Lora', serif;
  font-size: 2.25rem;
  font-weight: 600;
  line-height: 1.25;
  margin: 0 0 0.625rem;
  color: var(--ag-text-primary);
}

.article-subtitle {
  font-family: 'Lora', serif;
  font-style: italic;
  font-size: 1.25rem;
  color: var(--ag-text-secondary);
  margin: 0 0 2rem;
  line-height: 1.5;
}

/* ── Hero ── */
.hero-wrapper {
  margin-bottom: var(--ag-space-6, 1.5rem);
  border-radius: var(--ag-radius-lg, 0.75rem);
  overflow: hidden;
}

.hero-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

/* ── Article meta row ── */
.article-meta {
  display: flex;
  align-items: center;
  gap: var(--ag-space-3, 0.75rem);
  flex-wrap: wrap;
  margin-bottom: var(--ag-space-4, 1rem);
}

.article-meta-author {
  display: flex;
  align-items: center;
  gap: var(--ag-space-2, 0.5rem);
}

.article-meta-author-name {
  font-size: 0.9375rem;
  font-weight: 600;
  color: var(--ag-text-primary);
}

.article-meta-date {
  font-size: 0.875rem;
  color: var(--ag-text-secondary);
}

.article-meta-sep {
  color: var(--ag-text-secondary);
  font-size: 0.875rem;
}

/* ── Tabs content panels ── */
.article-tab-content,
.comments-tab-content {
  padding-top: var(--ag-space-6, 1.5rem);
}

/* ── Find toolbar ── */
.find-toolbar {
  display: flex;
  align-items: center;
  gap: var(--ag-space-2, 0.5rem);
  margin-bottom: var(--ag-space-5, 1.25rem);
}

.find-count {
  font-size: 0.8125rem;
  color: var(--ag-text-secondary);
  white-space: nowrap;
  min-width: 5rem;
}

/* ── Author card ── */
.author-card {
  display: flex;
  gap: var(--ag-space-4, 1rem);
  align-items: flex-start;
  background: var(--ag-background-secondary);
  border-radius: var(--ag-radius-lg, 0.75rem);
  padding: var(--ag-space-6, 1.5rem);
  margin-top: var(--ag-space-6, 1.5rem);
}

.author-card-name {
  font-weight: 700;
  font-size: 1rem;
  margin: 0 0 var(--ag-space-1, 0.25rem);
  color: var(--ag-text-primary);
}

.author-card-bio {
  font-size: 0.9375rem;
  color: var(--ag-text-secondary);
  margin: 0;
  line-height: 1.55;
}

/* ── Related articles ── */
.related-section {
  margin-top: var(--ag-space-10, 2.5rem);
}

.related-heading {
  font-size: 1.25rem;
  font-weight: 700;
  margin: 0 0 var(--ag-space-4, 1rem);
  color: var(--ag-text-primary);
}

.related-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--ag-space-4, 1rem);
}

.related-card {
  border-radius: var(--ag-radius-lg, 0.75rem);
  overflow: hidden;
  background: var(--ag-background-secondary);
  cursor: pointer;
  transition: transform 0.15s;
}

.related-card:hover {
  transform: translateY(-2px);
}

.related-card-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.related-card-body {
  padding: var(--ag-space-3, 0.75rem) var(--ag-space-4, 1rem);
}

.related-card-title {
  font-size: 0.9375rem;
  font-weight: 600;
  margin: 0 0 var(--ag-space-2, 0.5rem);
  color: var(--ag-text-primary);
  line-height: 1.35;
}

.related-card-meta {
  font-size: 0.8125rem;
  color: var(--ag-text-secondary);
}

/* ── Comments ── */
.comment-item {
  display: flex;
  gap: var(--ag-space-3, 0.75rem);
  margin-bottom: var(--ag-space-5, 1.25rem);
}

.comment-body {
  flex: 1;
}

.comment-author {
  font-weight: 600;
  font-size: 0.9375rem;
  margin-bottom: 0.1rem;
  color: var(--ag-text-primary);
}

.comment-date {
  font-size: 0.8125rem;
  color: var(--ag-text-secondary);
  margin-bottom: var(--ag-space-2, 0.5rem);
}

.comment-text {
  font-size: 0.9375rem;
  color: var(--ag-text-primary);
  line-height: 1.55;
  margin: 0;
}

/* ── Loader overlay ── */
.loader-overlay {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 60vh;
}

/* ── Theme toggle ── */
.theme-toggle {
  background: none;
  border: none;
  cursor: pointer;
  color: var(--ag-text-secondary);
  padding: var(--ag-space-2);
  border-radius: var(--ag-radius-sm);
  display: flex;
  align-items: center;
  margin-inline-end: var(--ag-space-2);
}

.theme-toggle:hover {
  background: var(--ag-background-secondary);
}

/* ── Header content width ── */
@media (min-width: 960px) {
  ag-header::part(ag-header-content) {
    width: min(1200px, 100%) !important;
  }
}

/* ── Responsive: tablet ── */
@media (max-width: 1023px) {
  .related-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  .related-grid .related-card:last-child {
    display: none;
  }
}

/* ── Responsive: mobile ── */
@media (max-width: 767px) {
  .article-title {
    font-size: 1.625rem;
  }
  .article-subtitle {
    font-size: 1.0625rem;
  }
  .reader-body {
    font-size: 1.0625rem;
  }
  .related-grid {
    grid-template-columns: 1fr;
  }
  .related-grid .related-card:last-child {
    display: block;
  }
  .author-card {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
}
```

---

## SkinSwitcher

Copy the SkinSwitcher from the grid playbook V1 (same relative path to
`../../../../skins/skin-switcher-core.js`):

- **React:** copy `v2/playbooks/grid/react-example/src/SkinSwitcher.tsx`
- **Vue:** copy `v2/playbooks/grid/vue-example/src/SkinSwitcher.vue`
- **Lit:** copy `v2/playbooks/grid/lit-example/src/skin-switcher.ts`

The relative import path `../../../../skins/skin-switcher-core.js` resolves
correctly from `v2/playbooks/blog/[framework]/src/`.

The skin CSS files (`skins-bundle.css`, `skin-switcher.css`) are already placed
by `agnosticui-cli init` under `src/components/ag/styles/`.

---

## Component Specs

### ScrollProgress

```
mode="bar"          (thin horizontal progress bar — default)
orientation="top"   (fixed to top of viewport — default)
no target prop      (tracks document.scrollingElement automatically)
```

- Renders a thin line (e.g., 3–4px) fixed to the top of the viewport
- Fills left-to-right as the user scrolls toward the bottom of the page
- No additional configuration needed — the component self-manages

**React:** `<ReactScrollProgress />`
**Vue:** `<VueScrollProgress />`
**Lit:** `<ag-scroll-progress></ag-scroll-progress>` (import core)

---

### ScrollToButton

```
scrollThreshold={400}    (appears after 400px of scroll)
target="top"             (scrolls back to top)
shape="circle"
```

- Fixed bottom-right of viewport, rendered above the SkinSwitcher FAB
- The component self-manages visibility based on scroll position
- No additional state management needed

**React:** `<ReactScrollToButton scrollThreshold={400} shape="circle" />`
**Vue:** `<VueScrollToButton :scroll-threshold="400" shape="circle" />`
**Lit:** `<ag-scroll-to-button scroll-threshold="400" shape="circle"></ag-scroll-to-button>`

---

### Loader

Shown for **1500ms** on initial mount, replacing the entire `.reader-main` content.
After 1500ms, `isLoading` becomes `false` and the article content renders.

```
size="large"
ariaLabel="Loading article…"
```

**React:**
```tsx
import { ReactLoader } from './components/ag/Loader/react/ReactLoader'

const [isLoading, setIsLoading] = useState(true)
useEffect(() => {
  const t = setTimeout(() => setIsLoading(false), 1500)
  return () => clearTimeout(t)
}, [])

// In render:
{isLoading ? (
  <div className="loader-overlay">
    <ReactLoader size="large" ariaLabel="Loading article…" />
  </div>
) : (
  /* article content */
)}
```

**Vue:**
```ts
const isLoading = ref(true)
onMounted(() => { setTimeout(() => { isLoading.value = false }, 1500) })
```
```vue
<div v-if="isLoading" class="loader-overlay">
  <VueLoader size="large" ariaLabel="Loading article…" />
</div>
<template v-else>
  <!-- article content -->
</template>
```

**Lit:** (`blog-app.ts` — light DOM)
```ts
@state() private _isLoading = true
private _loadTimer: ReturnType<typeof setTimeout> | null = null

override connectedCallback() {
  super.connectedCallback()
  this._loadTimer = setTimeout(() => { this._isLoading = false }, 1500)
}
override disconnectedCallback() {
  super.disconnectedCallback()
  if (this._loadTimer) clearTimeout(this._loadTimer)
}

// In render():
${this._isLoading
  ? html`<div class="loader-overlay">
           <ag-loader size="large" aria-label="Loading article…"></ag-loader>
         </div>`
  : html`<!-- article content -->`}
```

---

### AspectRatio

**Hero image (16:9):**
```tsx
// React
<ReactAspectRatio width={16} height={9}>
  <img className="hero-img" src={article.heroImage} alt={article.heroImageAlt} />
</ReactAspectRatio>

// Vue
<VueAspectRatio :width="16" :height="9">
  <img class="hero-img" :src="article.heroImage" :alt="article.heroImageAlt" />
</VueAspectRatio>

// Lit
<ag-aspect-ratio width="16" height="9">
  <img class="hero-img" src="${article.heroImage}" alt="${article.heroImageAlt}" />
</ag-aspect-ratio>
```

**Related article card images (3:2):**
```tsx
// React
<ReactAspectRatio width={3} height={2}>
  <img className="related-card-img" src={item.image} alt={item.title} />
</ReactAspectRatio>
```
Same pattern for Vue and Lit.

Wrap the AspectRatio in `.hero-wrapper` div (for border-radius + overflow:hidden).

---

### Mark

Wraps the **entire article body** (all paragraphs). Controlled by the find Input.

```
search={findTerm}       bound to find Input value
matchAll                always true — highlight every occurrence
variant="warning"       yellow highlight
caseSensitive           false (default)
```

The find toolbar sits above the article title (inside the Article tab panel):
- An `Input` with `placeholder="Find in article…"` and `type="search"` and `rounded`
- A `<span className="find-count">` showing match count
- Match count: count non-overlapping occurrences of `findTerm` in `article.body.join(' ')` (case-insensitive)

**React:**
```tsx
import { ReactMark } from './components/ag/Mark/react/ReactMark'

const [findTerm, setFindTerm] = useState('')

// Count helper
function countMatches(term: string): number {
  if (!term) return 0
  const text = article.body.join(' ').toLowerCase()
  const t = term.toLowerCase()
  let count = 0, pos = 0
  while ((pos = text.indexOf(t, pos)) !== -1) { count++; pos += t.length }
  return count
}

// Find toolbar:
<div className="find-toolbar">
  <ReactInput
    type="search"
    placeholder="Find in article…"
    rounded
    value={findTerm}
    onInput={(e: Event) => setFindTerm((e.target as HTMLInputElement).value)}
  />
  <span className="find-count">
    {findTerm ? `${countMatches(findTerm)} match${countMatches(findTerm) !== 1 ? 'es' : ''}` : ''}
  </span>
</div>

// Article body wrapped in Mark:
<ReactMark search={findTerm} matchAll variant="warning">
  <div className="reader-body">
    {article.body.map((p, i) => <p key={i}>{p}</p>)}
  </div>
</ReactMark>
```

**Vue:**
```ts
const findTerm = ref('')
function countMatches(term: string): number {
  if (!term) return 0
  const text = article.body.join(' ').toLowerCase()
  const t = term.toLowerCase()
  let count = 0, pos = 0
  while ((pos = text.indexOf(t, pos)) !== -1) { count++; pos += t.length }
  return count
}
```
```vue
<div class="find-toolbar">
  <VueInput
    type="search"
    placeholder="Find in article…"
    rounded
    @input="(e: Event) => findTerm = (e.target as HTMLInputElement).value"
  />
  <span class="find-count">
    {{ findTerm ? `${countMatches(findTerm)} match${countMatches(findTerm) !== 1 ? 'es' : ''}` : '' }}
  </span>
</div>

<VueMark :search="findTerm" :match-all="true" variant="warning">
  <div class="reader-body">
    <p v-for="(para, i) in article.body" :key="i">{{ para }}</p>
  </div>
</VueMark>
```

**Lit:**
```ts
@state() private _findTerm = ''

private _countMatches(term: string): number {
  if (!term) return 0
  const text = article.body.join(' ').toLowerCase()
  const t = term.toLowerCase()
  let count = 0, pos = 0
  while ((pos = text.indexOf(t, pos)) !== -1) { count++; pos += t.length }
  return count
}

// In render():
html`
  <div class="find-toolbar">
    <ag-input
      type="search"
      placeholder="Find in article…"
      rounded
      @input="${(e: Event) => { this._findTerm = (e.target as HTMLInputElement).value }}"
    ></ag-input>
    <span class="find-count">
      ${this._findTerm
        ? `${this._countMatches(this._findTerm)} match${this._countMatches(this._findTerm) !== 1 ? 'es' : ''}`
        : ''}
    </span>
  </div>

  <ag-mark
    search="${this._findTerm}"
    match-all
    variant="warning"
  >
    <div class="reader-body">
      ${article.body.map(p => html`<p>${p}</p>`)}
    </div>
  </ag-mark>
`
```

---

## Tabs Structure

The main content area uses `ag-tabs` with two tabs: **Article** and **Comments (3)**.

```
Tab 0: "Article"
Tab 1: "Comments (3)"
```

**React:**
```tsx
import { ReactTabs, ReactTab, ReactTabPanel } from './components/ag/Tabs/react/ReactTabs'

<ReactTabs ariaLabel="Article navigation">
  <ReactTab slot="tab" panel="article">Article</ReactTab>
  <ReactTab slot="tab" panel="comments">Comments (3)</ReactTab>
  <ReactTabPanel slot="panel" id="article">
    <div className="article-tab-content">
      {/* find toolbar + article title + subtitle + Mark body + Divider + author card + related */}
    </div>
  </ReactTabPanel>
  <ReactTabPanel slot="panel" id="comments">
    <div className="comments-tab-content">
      {/* 3 comment items */}
    </div>
  </ReactTabPanel>
</ReactTabs>
```

**Vue:**
```vue
<VueTabs aria-label="Article navigation">
  <VueTab slot="tab" panel="article">Article</VueTab>
  <VueTab slot="tab" panel="comments">Comments (3)</VueTab>
  <VueTabPanel slot="panel" id="article">
    <div class="article-tab-content">...</div>
  </VueTabPanel>
  <VueTabPanel slot="panel" id="comments">
    <div class="comments-tab-content">...</div>
  </VueTabPanel>
</VueTabs>
```

**Lit:**
```ts
html`
  <ag-tabs aria-label="Article navigation">
    <ag-tab slot="tab" panel="article">Article</ag-tab>
    <ag-tab slot="tab" panel="comments">Comments (3)</ag-tab>
    <ag-tab-panel slot="panel" id="article">
      <div class="article-tab-content">...</div>
    </ag-tab-panel>
    <ag-tab-panel slot="panel" id="comments">
      <div class="comments-tab-content">...</div>
    </ag-tab-panel>
  </ag-tabs>
`
```

---

## Header

```tsx
// React (same pattern for Vue/Lit)
<ReactHeader contentJustify="between">
  <span slot="logo" style={{ fontWeight: 700, fontSize: '1.125rem', color: 'var(--ag-primary)' }}>
    AgnosticUI
  </span>
  <button className="theme-toggle" aria-label="Toggle theme" onClick={toggleTheme}>
    {isDark ? sunIcon : moonIcon}
  </button>
  <ReactAvatar text="AC" variant="info" />
</ReactHeader>
```

Same sun/moon SVG icons as grid playbook. Same `_isDark` / `_toggleTheme` pattern.

---

## Article Meta Row

Inside `.reader-main`, before the Tabs:

```tsx
// React
<div className="article-meta">
  <ReactTag>{article.category}</ReactTag>
  <div className="article-meta-author">
    <ReactAvatar text={article.author.initials} size="small" variant="info" />
    <span className="article-meta-author-name">{article.author.name}</span>
  </div>
  <span className="article-meta-sep">·</span>
  <span className="article-meta-date">{article.author.date}</span>
  <span className="article-meta-sep">·</span>
  <ReactBadge variant="info">{article.readTime}</ReactBadge>
</div>
```

---

## Author Card (inside Article tab, after Divider)

```tsx
// React
<div className="author-card">
  <ReactAvatar text={article.author.initials} variant="info" />
  <div>
    <p className="author-card-name">{article.author.name}</p>
    <p className="author-card-bio">{article.author.bio}</p>
  </div>
</div>
```

---

## Related Articles (inside Article tab, after Author card)

```tsx
// React
<div className="related-section">
  <h2 className="related-heading">More to read</h2>
  <div className="related-grid">
    {article.related.map(item => (
      <div className="related-card" key={item.id}>
        <ReactAspectRatio width={3} height={2}>
          <img className="related-card-img" src={item.image} alt={item.title} />
        </ReactAspectRatio>
        <div className="related-card-body">
          <p className="related-card-title">{item.title}</p>
          <span className="related-card-meta">
            <ReactTag size="sm">{item.category}</ReactTag>
            {' · '}{item.readTime}
          </span>
        </div>
      </div>
    ))}
  </div>
</div>
```

---

## Comment Items (inside Comments tab)

```tsx
// React
{article.comments.map(c => (
  <div className="comment-item" key={c.id}>
    <ReactAvatar text={c.initials} size="small" variant="neutral" />
    <div className="comment-body">
      <p className="comment-author">{c.author}</p>
      <p className="comment-date">{c.date}</p>
      <p className="comment-text">{c.text}</p>
    </div>
  </div>
))}
```

---

## Full Page Structure (React pseudocode — Vue/Lit follow same shape)

```tsx
<>
  {/* Fixed elements — outside reader-main, always visible */}
  <ReactScrollProgress />
  <SkinSwitcher />
  <ReactScrollToButton scrollThreshold={400} shape="circle" />

  <ReactHeader contentJustify="between">...</ReactHeader>

  <main className="reader-main">
    {isLoading ? (
      <div className="loader-overlay">
        <ReactLoader size="large" ariaLabel="Loading article…" />
      </div>
    ) : (
      <>
        {/* Hero */}
        <div className="hero-wrapper">
          <ReactAspectRatio width={16} height={9}>
            <img className="hero-img" src={article.heroImage} alt={article.heroImageAlt} />
          </ReactAspectRatio>
        </div>

        {/* Meta */}
        <div className="article-meta">...</div>

        {/* Tabs */}
        <ReactTabs ariaLabel="Article navigation">
          <ReactTab slot="tab" panel="article">Article</ReactTab>
          <ReactTab slot="tab" panel="comments">Comments (3)</ReactTab>

          <ReactTabPanel slot="panel" id="article">
            <div className="article-tab-content">
              {/* Find toolbar */}
              <div className="find-toolbar">
                <ReactInput ... />
                <span className="find-count">...</span>
              </div>

              <h1 className="article-title">{article.title}</h1>
              <p className="article-subtitle">{article.subtitle}</p>

              {/* Mark wraps body */}
              <ReactMark search={findTerm} matchAll variant="warning">
                <div className="reader-body">
                  {article.body.map((p, i) => <p key={i}>{p}</p>)}
                </div>
              </ReactMark>

              <ReactDivider />

              {/* Author card */}
              <div className="author-card">...</div>

              {/* Related */}
              <div className="related-section">...</div>
            </div>
          </ReactTabPanel>

          <ReactTabPanel slot="panel" id="comments">
            <div className="comments-tab-content">
              {article.comments.map(c => (
                <div className="comment-item" key={c.id}>...</div>
              ))}
            </div>
          </ReactTabPanel>
        </ReactTabs>
      </>
    )}
  </main>
</>
```

**Lit (`blog-app.ts`):** Use light DOM (`override createRenderRoot() { return this }`).
Root element is `<blog-app>` defined in `index.html`. Import all ag-* cores at top.

---

## Shared Conventions

- `--ag-*` tokens throughout; no hardcoded colours
- `rounded` attribute/prop on all `Input` elements
- `shape="rounded"` on all `Button` elements
- `ReactSelect` / `VueSelect` / `ag-select` — never native `<select>`
- Lit: light DOM via `override createRenderRoot() { return this }`
- Lit: inline SVG for sun/moon icons (lucide is not Lit-compatible)
- Vue: `"strict": false, "noUnusedLocals": false, "noUnusedParameters": false` in `tsconfig.app.json`
- Header `::part(ag-header-content)` width override requires `!important`

---

## Build Verification

```bash
cd react-example && npm run build   # exits 0
cd vue-example   && npm run build   # exits 0
cd lit-example   && npm run build   # exits 0
```

---

## Final Deliverables Checklist

### ScrollProgress
- [ ] Thin bar fixed to top of viewport
- [ ] Fills left-to-right as user scrolls down the article
- [ ] Visible on both light and dark themes (uses `--ag-primary` color)

### Loader
- [ ] Appears in `.loader-overlay` for 1500ms on initial page load
- [ ] Header visible during loading; only `.reader-main` content area shows Loader
- [ ] After 1500ms, Loader replaced by article content
- [ ] `size="large"`, `ariaLabel="Loading article…"`

### AspectRatio
- [ ] Hero image enforces 16:9 ratio across all viewport widths
- [ ] Related article card images enforce 3:2 ratio
- [ ] Hero wrapped in `.hero-wrapper` for border-radius

### Mark
- [ ] Find toolbar: `Input` (type="search", rounded) + match count `<span>`
- [ ] Typing in Input highlights matching text in article body
- [ ] All occurrences highlighted (`matchAll`)
- [ ] `variant="warning"` (yellow)
- [ ] Empty input → no highlighting, count hidden
- [ ] Match count updates as user types

### ScrollToButton
- [ ] Hidden on initial load (before 400px scroll)
- [ ] Appears smoothly after scrolling 400px
- [ ] Click scrolls back to top
- [ ] Fixed bottom-right, above SkinSwitcher FAB

### Tabs
- [ ] "Article" and "Comments (3)" tabs
- [ ] Article tab: find toolbar + title + subtitle + body + Divider + author card + related
- [ ] Comments tab: 3 comment items with Avatar + author + date + text

### All
- [ ] `npm run build` exits 0 for all three frameworks
- [ ] Loader appears on initial load
- [ ] SkinSwitcher FAB functional
- [ ] Dark mode responds to `data-theme="dark"` on `<html>`
- [ ] Mobile: single column, readable at 375px
- [ ] Tablet: related grid shows 2 cards, 3rd hidden
- [ ] Desktop: centered 720px reading column
