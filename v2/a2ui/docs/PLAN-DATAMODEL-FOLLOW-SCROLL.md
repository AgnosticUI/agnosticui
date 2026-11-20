# Implementation Plan: `Live DataModel (@path)` Smart Follow-Scroll

- **Target Surface:** Support Center Studio Demos (`lit`, `react`, `vue`)
- **Primary Container:** `<pre class="json-viewer">` inside the first `.inspector-panel` (`Live DataModel (@path)`)
- **Branch:** `feat/datamodel-follow-scroll`
- **Status:** Implemented & Verified ✅

---

## 1. Value vs. Effort Analysis

| Dimension | Assessment |
| --- | --- |
| **User Value (High)** | The line-by-line JSON diff highlighting (`.a2ui-json-line--added` / `.a2ui-json-line--updated`) is the Studio's clearest visual proof of real-time `@path` streaming and two-way FACE binding. Once the JSON tree exceeds `.json-viewer`'s viewport height, new keys stream in below the fold unseen without auto-follow. |
| **Engineering Effort (Low)** | Self-contained in `v2/a2ui/demos/support-center/` (`shared/`, `lit/`, `react/`, `vue/`). Touches zero core library (`v2/lib`), catalog, or renderer npm packages. |
| **UX Risk & Mitigation** | Blindly forcing `scrollTop = scrollHeight` on every tick hijacks scrolling when a user manually scrolls up to inspect top-level keys. **Smart tail-follow** with an async `requestAnimationFrame` programmatic-scroll guard pauses auto-scroll immediately on manual upward scroll and resumes when scrolling back near the bottom or clicking `"↓ Jump to latest"`. |

---

## 2. Completed Implementation

1. **Shared Follow-Scroll Controller & Unit Tests (`v2/a2ui/demos/support-center/shared/`)** ✅
   - `follow-scroll.ts`: Exports `isNearBottom(el, thresholdPx = 36)` and `createFollowScrollController(thresholdPx = 36)` with `requestAnimationFrame` programmatic scroll guard, targeting the latest `.a2ui-json-line--added, .a2ui-json-line--updated` element (`scrollIntoView({ block: 'nearest', behavior: 'auto' })`) or falling back to `el.scrollTop = el.scrollHeight`.
   - `follow-scroll.spec.ts`: 9 unit tests covering threshold boundaries, manual upward pause, bottom resume, async rAF guard isolation, diff line targeting, `scrollHeight` fallback, and `reset()`.
   - `studio.css`: Added `.follow-scroll-pill` styling in `.panel-header`.
2. **Tri-Framework Parity (`lit`, `react`, `vue`)** ✅
   - **`lit/src/main.ts`:** Wired `createFollowScrollController()`, `isAutoFollowing` reactive state, `updated(changed)` post-render sync, `renderWireMessages()` baseline reset, `@scroll` handler, and `"↓ Jump to latest"` pill.
   - **`react/src/main.tsx`:** Wired `followScrollRef`, `jsonViewerRef`, `useEffect(..., [dataModelHtml, inspectorOpen])` sync, `runStream()` reset, `onScroll` handler, and `"↓ Jump to latest"` pill.
   - **`vue/src/App.vue`:** Wired `followScroll`, `jsonViewerEl`, `watch([dataModelHtml, inspectorOpen], ..., { flush: 'post' })` sync, `runStream()` reset, `@scroll` handler, and `"↓ Jump to latest"` pill.
3. **Verification** ✅
   - `(cd v2/a2ui/demos/support-center/shared && npm run typecheck && npm test)` — 4 test files, 19 tests passing.
   - `(cd v2/a2ui/demos/support-center/lit && npm run build)` — clean `tsc --noEmit && vite build`.
   - `(cd v2/a2ui/demos/support-center/react && npm run build)` — clean `tsc --noEmit && vite build`.
   - `(cd v2/a2ui/demos/support-center/vue && npm run build)` — clean `vue-tsc --noEmit && vite build`.
