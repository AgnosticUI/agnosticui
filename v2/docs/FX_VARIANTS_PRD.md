# Quick Reference for AI

## Session-to-Section Mapping

| Session | Steps            | PRD Sections Needed | Dev Guide Sections                        |
| ------- | ---------------- | ------------------- | ----------------------------------------- |
| 1       | 0.1-0.3          | 2-3, 5              | Token System, Scaffolding, Event Patterns |
| 2       | 1.1-1.4          | 4, 6                | Storybook                                 |
| 3       | 1.5-1.8          | 4, 6                | Storybook                                 |
| 4       | 1.9-1.12         | 4, 6                | Storybook                                 |
| 5       | 2.1-2.2          | 3                   | React Wrapper, Storybook                  |
| 6       | 3.1-3.2          | 3                   | Vue Integration, Storybook                |
| 7       | 4.1, 5.1-5.3     | 8                   | Storybook, Documentation                  |
| 8       | 6.1-6.4, 7.1-7.2 | 1, 4, 7             | Dark Mode, Build & Verification           |

## File Locations (for AI reference)

- Token System: `v2/theme-registry/tokens/`
- Component Core: `v2/lib/src/components/ButtonFx/core/`
- React Wrapper: `v2/lib/src/components/ButtonFx/react/`
- Vue Wrapper: `v2/lib/src/components/ButtonFx/vue/`
- React Stories: `playgrounds/react/src/stories/ButtonFx.stories.tsx`
- Vue Stories: `playgrounds/vue/src/stories/ButtonFx.stories.ts`
- Lit Stories: `playgrounds/lit/src/stories/ButtonFx.stories.ts`

<!-- ============================================ -->
<!-- SECTION A: PRD (Reference Material)          -->
<!-- ============================================ -->

# **AgnosticUI FX — Phase 1 PRD / AI Mega-Prompt (Shadow DOM-ready)**

**Goal:** Implement 12 CSS-only FX variants for AgnosticUI components (starting with `ButtonFx`), fully Shadow DOM compatible, accessibility-first, tree-shakable, and ready for AI-assisted coding.

---

## **1. FX Wrapper Architecture**

- **Wrapper component**: `<button-fx>` wraps existing `<ag-button>` (static, Shadow DOM promoted).
- **Props merging**: `ButtonFx` accepts `ButtonProps & FxProps` and forwards everything to `<ag-button>`.
- **Events**: Native & custom events (`click`, `focus`, `blur`, `toggle`) are re-dispatched.
- **Reduced motion**: Automatic via `@media (prefers-reduced-motion: reduce)` — cannot be overridden.

**Shadow DOM Ready Import**:

```ts
import "../../Button/core/Button.js"; // ensures ag-button is registered
```

---

## **2. FxProps Interface**

```ts
export interface FxProps {
  fx?: string | string[]; // one or multiple effects
  fxSpeed?: "xs" | "sm" | "md" | "lg" | "xl"; // maps to duration tokens
  fxEase?: string; // maps to CSS easing tokens
  fxDisabled?: boolean; // bypass FX entirely
}
```

**Notes:**

- No `respectReduceMotion` prop — always on.
- FX array enables **composition**.

---

## **3. Shadow DOM-ready `ButtonFx` Wrapper Example**

```ts
import { html, css, LitElement } from "lit";
import { property } from "lit/decorators.js";
import type { ButtonProps } from "../../Button/core/Button.js";
import "../../Button/core/Button.js";

export type ButtonFxProps = ButtonProps & FxProps;

export class ButtonFx extends LitElement {
  static styles = css`
    :host {
      display: inline-block;
    }

    .ag-fx-disabled {
      animation: none !important;
      transition: none !important;
    }

    @media (prefers-reduced-motion: reduce) {
      .ag-fx-disabled,
      .ag-fx-bounce,
      .ag-fx-pulse,
      .ag-fx-jelly,
      .ag-fx-tilt-press,
      .ag-fx-shimmer,
      .ag-fx-glow,
      .ag-fx-press-pop,
      .ag-fx-slide-in,
      .ag-fx-flip,
      .ag-fx-icon-reveal,
      .ag-fx-ripple,
      .ag-fx-highlight-sweep,
      .ag-fx-underline-reveal {
        animation-duration: 0.01ms !important;
        transition-duration: 0.01ms !important;
      }
    }
  `;

  // FX props
  @property({ type: Array }) fx?: string[];
  @property({ type: String }) fxSpeed: "xs" | "sm" | "md" | "lg" | "xl" = "md";
  @property({ type: String }) fxEase: string = "ease";
  @property({ type: Boolean }) fxDisabled = false;

  // ButtonProps (all forwarded)
  @property({ type: String }) variant?: ButtonProps["variant"];
  @property({ type: String }) size?: ButtonProps["size"];
  @property({ type: String }) shape?: ButtonProps["shape"];
  @property({ type: Boolean }) bordered?: ButtonProps["bordered"];
  @property({ type: Boolean }) ghost?: ButtonProps["ghost"];
  @property({ type: Boolean }) link?: ButtonProps["link"];
  @property({ type: Boolean }) grouped?: ButtonProps["grouped"];
  @property({ type: String }) type: ButtonProps["type"] = "button";
  @property({ type: Boolean }) disabled?: ButtonProps["disabled"];
  @property({ type: Boolean }) loading?: ButtonProps["loading"];
  @property({ type: Boolean }) toggle?: ButtonProps["toggle"];
  @property({ type: Boolean }) pressed?: ButtonProps["pressed"];
  @property({ type: String }) ariaLabel?: ButtonProps["ariaLabel"];
  @property({ type: String }) ariaDescribedby?: ButtonProps["ariaDescribedby"];

  render() {
    const fxClasses = (
      Array.isArray(this.fx) ? this.fx : this.fx ? [this.fx] : []
    )
      .map((e) => `ag-fx-${e}`)
      .concat(this.fxDisabled ? ["ag-fx-disabled"] : [])
      .join(" ");

    return html`
      <ag-button
        class="${fxClasses}"
        style="
          --ag-fx-duration: var(--ag-fx-duration-${this.fxSpeed});
          --ag-fx-ease: var(--ag-fx-ease-${this.fxEase});
        "
        variant="${this.variant || ""}"
        size="${this.size || ""}"
        shape="${this.shape || ""}"
        ?bordered="${this.bordered}"
        ?ghost="${this.ghost}"
        ?link="${this.link}"
        ?grouped="${this.grouped}"
        type="${this.type}"
        ?disabled="${this.disabled}"
        ?loading="${this.loading}"
        ?toggle="${this.toggle}"
        ?pressed="${this.pressed}"
        aria-label="${this.ariaLabel || ""}"
        aria-describedby="${this.ariaDescribedby || ""}"
        @click="${(e: MouseEvent) =>
          this.dispatchEvent(new MouseEvent("click", e))}"
        @focus="${(e: FocusEvent) =>
          this.dispatchEvent(new FocusEvent("focus", e))}"
        @blur="${(e: FocusEvent) =>
          this.dispatchEvent(new FocusEvent("blur", e))}"
        @toggle="${(e: CustomEvent) =>
          this.dispatchEvent(new CustomEvent("toggle", e))}"
      >
        <slot></slot>
      </ag-button>
    `;
  }
}

customElements.define("button-fx", ButtonFx);
```

---

## **4. Phase 1 FX — 12 CSS-only Effects**

| FX Name         | Notes / Performance                    |
| --------------- | -------------------------------------- |
| bounce          | vertical pop, light                    |
| pulse           | scale grow/shrink, light               |
| jelly           | squash/stretch, light                  |
| tilt-press      | subtle 3D tilt on press, light         |
| shimmer         | light sweep, light                     |
| glow            | box-shadow pulse, light                |
| press-pop       | quick press down/up, light             |
| slide-in        | entrance from below, light             |
| flip            | Y-axis rotation, light                 |
| icon-reveal     | clip-path reveal of icon, light        |
| ripple          | center-origin radial expansion, medium |
| highlight-sweep | horizontal highlight, light            |

> All effects are **CSS-only**, Shadow DOM-compatible, and reduced-motion-aware.

---

## **5. FX Duration & Easing Tokens**

```css
--ag-fx-duration-xs: 90ms;
--ag-fx-duration-sm: 120ms;
--ag-fx-duration-md: 200ms;
--ag-fx-duration-lg: 320ms;
--ag-fx-duration-xl: 480ms;

--ag-fx-ease-ease: ease;
--ag-fx-ease-ease-in: ease-in;
--ag-fx-ease-ease-out: ease-out;
--ag-fx-ease-ease-in-out: ease-in-out;
--ag-fx-ease-bounce: cubic-bezier(0.68, -0.55, 0.265, 1.55);
--ag-fx-ease-spring-sm: cubic-bezier(0.5, 1.5, 0.5, 1);
--ag-fx-ease-spring-md: cubic-bezier(0.5, 1.8, 0.5, 1);
--ag-fx-ease-spring-lg: cubic-bezier(0.5, 2.5, 0.5, 1);
```

---

## **6. CSS Keyframes Template**

```css
@keyframes ag-fx-bounce {
  50% {
    transform: translateY(-4%);
  }
}
@keyframes ag-fx-pulse {
  50% {
    transform: scale(1.06);
  }
}
@keyframes ag-fx-jelly {
  30% {
    transform: scale(1.15, 0.85);
  }
  60% {
    transform: scale(0.9, 1.1);
  }
}
@keyframes ag-fx-tilt-press {
  to {
    transform: rotateX(6deg) translateY(1px);
  }
}
@keyframes ag-fx-shimmer {
  from {
    background-position: -200% 0;
  }
  to {
    background-position: 200% 0;
  }
}
@keyframes ag-fx-glow {
  50% {
    box-shadow: 0 0 12px currentColor;
  }
}
@keyframes ag-fx-press-pop {
  50% {
    transform: scale(0.92);
  }
}
@keyframes ag-fx-slide-in {
  from {
    opacity: 0;
    transform: translateY(20%);
  }
}
@keyframes ag-fx-flip {
  to {
    transform: rotateY(180deg);
  }
}
@keyframes ag-fx-icon-reveal {
  from {
    clip-path: inset(0 100% 0 0);
  }
}
@keyframes ag-fx-ripple {
  from {
    transform: scale(0);
    opacity: 0.6;
  }
  to {
    transform: scale(2.5);
    opacity: 0;
  }
}
@keyframes ag-fx-highlight-sweep {
  from {
    background-position: -100% 0;
  }
  to {
    background-position: 100% 0;
  }
}
```

> Apply with `.ag-fx-{effect}` class + `--ag-fx-duration` & `--ag-fx-ease`.

---

## **7. Micro-Task Workflow (AI-Friendly)**

1. **Scaffold `ButtonFx`** wrapper with Shadow DOM + props forwarding.
2. **Implement FX 1–12** CSS keyframes + classes.
3. **Build Storybook/Playground** examples for each FX (replayable).
4. **Update Vitepress docs** (Effects Gallery, 3×4 grid, `fxSpeed`/`fxEase` controls, `fxDisabled` toggle).
5. **QA**:

   - Dark mode / light mode
   - RTL layout
   - Touch device hover simulation
   - Performance & reduced-motion verification

---

## **8. Documentation / Effects Gallery**

- **Grid**: 3×4 for 12 FX.
- **Tile**: Preview button + FX name + small snippet.
- **Controls above grid**: `fxSpeed`, `fxEase`, `Disable FX`.
- **Jump link**: `Variant Guide → ButtonFx → Effects Gallery`.

---

<!-- ============================================ -->
<!-- SECTION B: Implementation Plan (Task List)   -->
<!-- ============================================ -->

# AgnosticUI FX Phase 1 — Decomposed Implementation Plan

Based on the PRD and your architecture documents, here's an efficient breakdown into **manageable, context-focused iterations** that respect Claude's context window and minimize drift:

---

## **Phase 0: Foundation Setup** (2-3 steps)

### Step 0.1: Token System Extension

**Prompt Focus:** "Add FX duration and easing tokens to theme-registry"

**Deliverables:**

- Add `fx-motion.json` to `v2/theme-registry/tokens/`
- Define 5 duration tokens (xs→xl)
- Define 7 easing tokens (ease variants + springs)
- Run `npm run build` in theme-registry
- Verify tokens in `dist/ag-tokens.css`

**Context Needed:** `DEVELOPMENT_GUIDE.md` (Token System section only)

---

### Step 0.2: Scaffold ButtonFx Component

**Prompt Focus:** "Scaffold ButtonFx wrapper component with Shadow DOM pattern"

**Deliverables:**

- Run `npm run scaffold -- ButtonFx` in `v2/lib`
- Verify file structure created:
  - `src/components/ButtonFx/core/_ButtonFx.ts`
  - `src/components/ButtonFx/react/ReactButtonFx.tsx`
  - `src/components/ButtonFx/vue/VueButtonFx.vue`
- Add package.json exports (manual, not scaffolded)
- Import `Button.js` at top of `_ButtonFx.ts`

**Context Needed:** `DEVELOPMENT_GUIDE.md` (Scaffolding + Package Exports sections)

---

### Step 0.3: Implement FxProps Interface & Base Wrapper

**Prompt Focus:** "Implement ButtonFx core with props forwarding and FX prop handling"

**Deliverables:**

- Define `FxProps` interface in `_ButtonFx.ts`
- Implement property declarations for all `ButtonProps` + `FxProps`
- Implement `render()` with:
  - FX class generation logic
  - CSS variable assignment for duration/easing
  - All props forwarded to `<ag-button>`
  - Event re-dispatching (click, focus, blur, toggle)
- Manual `customElements.define()` with guard
- Add base reduced-motion styles to component styles

**Context Needed:**

- `FX_VARIANTS_PRD.md` (sections 2-3)
- `DEVELOPMENT_GUIDE.md` (Event Patterns, Critical Patterns sections)

---

## **Phase 1: CSS-Only FX Implementation** (12 steps, 1 per effect)

**Pattern:** Each step implements ONE effect end-to-end (CSS + class + test)

### Step 1.1: Bounce Effect

**Prompt Focus:** "Implement ag-fx-bounce CSS keyframe and class"

**Deliverables:**

- Add `@keyframes ag-fx-bounce` to ButtonFx styles
- Add `.ag-fx-bounce` class with animation property
- Add unit test verifying class application
- Add Storybook story showing bounce effect

**Context Needed:** `FX_VARIANTS_PRD.md` (sections 4, 6 only)

---

### Step 1.2: Pulse Effect

**Prompt Focus:** "Implement ag-fx-pulse CSS keyframe and class"

**Deliverables:** (Same pattern as 1.1)

- Keyframe + class
- Unit test
- Storybook story

**Context Needed:** Same as 1.1

---

### Steps 1.3 through 1.12: Repeat Pattern

**Effects in order:** 3. Jelly 4. Tilt-press 5. Shimmer 6. Glow 7. Press-pop 8. Slide-in 9. Flip 10. Icon-reveal 11. Ripple 12. Highlight-sweep

**Note:** Each step is independent and can be iterated quickly (~10-15 min per effect)

---

## **Phase 2: React Wrapper** (2 steps)

### Step 2.1: React Wrapper Core

**Prompt Focus:** "Implement ReactButtonFx wrapper with @lit/react"

**Deliverables:**

- Implement `ReactButtonFx.tsx` using `createComponent`
- Map custom events only (not native events)
- Export types
- Add unit test

**Context Needed:** `DEVELOPMENT_GUIDE.md` (React Wrapper section only)

---

### Step 2.2: React Storybook Stories

**Prompt Focus:** "Create React Storybook stories for ButtonFx with all 12 effects"

**Deliverables:**

- Create `playgrounds/react/src/stories/ButtonFx.stories.tsx`
- Default story with controls
- Individual story per effect (12 total)
- Combination story (multiple effects)
- CSS Parts customization story

**Context Needed:** `DEVELOPMENT_GUIDE.md` (Storybook section only)

---

## **Phase 3: Vue Wrapper** (2 steps)

### Step 3.1: Vue Wrapper Core

**Prompt Focus:** "Implement VueButtonFx wrapper with prop syncing"

**Deliverables:**

- Implement `VueButtonFx.vue` with `watchEffect` pattern
- Prop syncing for all ButtonProps + FxProps
- Event emitters (click, focus, blur, toggle)
- Manual slotchange dispatch in `onMounted`
- Add unit test

**Context Needed:**

- `DEVELOPMENT_GUIDE.md` (Vue Integration Patterns section)
- `FX_VARIANTS_PRD.md` (section 3 for event forwarding)

---

### Step 3.2: Vue Storybook Stories

**Prompt Focus:** "Create Vue Storybook stories for ButtonFx with all 12 effects"

**Deliverables:**

- Create `playgrounds/vue/src/stories/ButtonFx.stories.ts`
- Same structure as React stories
- Use `v-html` pattern for CSS Parts customization story

**Context Needed:** `DEVELOPMENT_GUIDE.md` (Storybook + Vue sections)

---

## **Phase 4: Lit Playground** (1 step)

### Step 4.1: Lit Storybook Stories

**Prompt Focus:** "Create Lit Storybook stories for ButtonFx with all 12 effects"

**Deliverables:**

- Create `playgrounds/lit/src/stories/ButtonFx.stories.ts`
- Use `html` tagged templates
- Same story structure as React/Vue

**Context Needed:** `DEVELOPMENT_GUIDE.md` (Storybook section only)

---

## **Phase 5: Documentation** (3 steps)

### Step 5.1: API Documentation

**Prompt Focus:** "Create VitePress API documentation for ButtonFx"

**Deliverables:**

- Create `v2/site/docs/components/button-fx.md`
- Document FxProps interface
- Document all ButtonProps (inherit from Button)
- Usage examples (Lit, React, Vue)
- Add to VitePress sidebar config

**Context Needed:** `AGNOSTICUI_LOCAL.md` (Documentation section)

---

### Step 5.2: Effects Gallery Page

**Prompt Focus:** "Create interactive Effects Gallery with 3×4 grid"

**Deliverables:**

- Create gallery component in VitePress
- 3×4 grid layout (12 effects)
- Global controls: fxSpeed, fxEase, fxDisabled
- Each tile: preview button + name + code snippet
- Live preview updates on control change

**Context Needed:** `FX_VARIANTS_PRD.md` (section 8 only)

---

### Step 5.3: Accessibility Documentation

**Prompt Focus:** "Document reduced-motion behavior and accessibility considerations"

**Deliverables:**

- Add "Accessibility" section to ButtonFx docs
- Explain automatic reduced-motion handling
- Note that fxDisabled is NOT for accessibility (it's automatic)
- Show browser console testing pattern
- Link to WCAG Motion guidelines

**Context Needed:** `DEVELOPMENT_GUIDE.md` (Dark Mode Testing + Accessibility sections)

---

## **Phase 6: Quality Assurance** (4 steps)

### Step 6.1: Dark Mode Testing

**Prompt Focus:** "Test all 12 FX effects in dark mode and fix contrast issues"

**Deliverables:**

- Test each effect with `data-theme="dark"`
- Fix any contrast/visibility issues
- Document any token adjustments needed
- Screenshots of before/after if fixes required

**Context Needed:** `DEVELOPMENT_GUIDE.md` (Dark Mode Testing section)

---

### Step 6.2: RTL Testing

**Prompt Focus:** "Test effects that use directional transforms in RTL mode"

**Deliverables:**

- Test slide-in, highlight-sweep, shimmer with `dir="rtl"`
- Add RTL-aware transforms if needed
- Document RTL behavior

**Context Needed:** `FX_VARIANTS_PRD.md` (section 7 QA notes)

---

### Step 6.3: Touch Device Testing

**Prompt Focus:** "Verify hover-triggered effects work on touch devices"

**Deliverables:**

- Test on mobile viewport (Chrome DevTools)
- Add touch-action CSS if needed
- Document mobile behavior differences

**Context Needed:** `DEVELOPMENT_GUIDE.md` (Pre-Commit Checklist)

---

### Step 6.4: Performance & Reduced Motion Verification

**Prompt Focus:** "Verify performance and reduced-motion compliance"

**Deliverables:**

- Test with Chrome DevTools Performance tab
- Verify no layout thrashing
- Test with `prefers-reduced-motion: reduce` enabled
- Verify animations are effectively disabled (0.01ms duration)
- Bundle size analysis (tree-shaking verification)

**Context Needed:** `FX_VARIANTS_PRD.md` (sections 1, 4)

---

## **Phase 7: Build & Integration** (2 steps)

### Step 7.1: Library Build & Pack

**Prompt Focus:** "Build library and pack for playground testing"

**Deliverables:**

```bash
cd v2/lib
npm run lint && npm run typecheck && npm run test && npm run build
npm pack
```

- Fix any build errors
- Verify exports in dist/
- Create tarball

**Context Needed:** `DEVELOPMENT_GUIDE.md` (Build & Verification section)

---

### Step 7.2: Install in Playgrounds

**Prompt Focus:** "Install built library in all three playgrounds and verify"

**Deliverables:**

```bash
cd playgrounds/react && npm i ../../lib/agnosticui-*.tgz && npm run storybook
cd playgrounds/vue && npm i ../../lib/agnosticui-*.tgz && npm run storybook
cd playgrounds/lit && npm i ../../lib/agnosticui-*.tgz && npm run storybook
```

- Verify all stories render
- Verify no console errors
- Verify FX effects play correctly

**Context Needed:** `DEVELOPMENT_GUIDE.md` (Build & Verification section)

---

## **Total Step Count: 28 Steps**

### Breakdown:

- **Foundation:** 3 steps
- **CSS FX Implementation:** 12 steps (1 per effect)
- **React:** 2 steps
- **Vue:** 2 steps
- **Lit:** 1 step
- **Documentation:** 3 steps
- **QA:** 4 steps
- **Build/Integration:** 2 steps

---

## **Iteration Strategy for Claude Code Pro**

### **Recommended Batching:**

**Session 1: Foundation (Steps 0.1-0.3)**

- Context: Core architecture docs
- Output: Working ButtonFx scaffold with no effects yet

**Session 2: Batch 1 Effects (Steps 1.1-1.4)**

- Context: PRD FX table + CSS examples
- Output: Bounce, Pulse, Jelly, Tilt-press working

**Session 3: Batch 2 Effects (Steps 1.5-1.8)**

- Context: Same as Session 2
- Output: Shimmer, Glow, Press-pop, Slide-in working

**Session 4: Batch 3 Effects (Steps 1.9-1.12)**

- Context: Same as Session 2
- Output: Flip, Icon-reveal, Ripple, Highlight-sweep working

**Session 5: React Integration (Steps 2.1-2.2)**

- Context: React wrapper patterns only
- Output: React wrapper + stories complete

**Session 6: Vue Integration (Steps 3.1-3.2)**

- Context: Vue wrapper patterns only
- Output: Vue wrapper + stories complete

**Session 7: Lit + Docs (Steps 4.1, 5.1-5.3)**

- Context: Documentation structure
- Output: Lit stories + full documentation

**Session 8: QA + Build (Steps 6.1-6.4, 7.1-7.2)**

- Context: Testing checklists
- Output: Verified, tested, built, deployed to playgrounds

---

## **Context Window Management**

**Per session, include ONLY:**

1. The specific PRD section(s) needed
2. The relevant DEVELOPMENT_GUIDE.md section(s)
3. Output from previous session (if dependent)

**Do NOT include:**

- Full PRD every time
- Entire DEVELOPMENT_GUIDE.md
- Unrelated component code
- Full design token lists (just note they exist)

---

## **Drift Prevention**

**After every 4 steps, create a checkpoint:**

```bash
git commit -m "Checkpoint: [Phase X Step Y] - [Brief description]"
```

**If drift detected:**

1. Stop current work
2. Review last checkpoint
3. Create a "reconciliation prompt" showing what diverged
4. Resume from clean state

---

This decomposition gives you **clear, focused prompts** that Claude Code Pro can execute efficiently without context bloat. Each step has a single responsibility and clear acceptance criteria.

Would you like me to:

1. **Generate the actual prompt text** for Session 1 (Foundation)?
2. **Create a prompt template** you can reuse for the effect batches?
3. **Design a checkpoint/verification script** to run between sessions?
