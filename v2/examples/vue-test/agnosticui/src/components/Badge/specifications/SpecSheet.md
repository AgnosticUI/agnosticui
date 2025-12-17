# Badge Component — SpecSheet.md  
**Purpose:** spec for a reusable, accessible **Badge** UI primitive (status-dot, count, label variants) for AgnosticUI v2.  
Use this as the canonical context for an LLM or implementer to generate the component implementation, tests, examples, and docs.

> Load-bearing guidance in this spec references the WAI-ARIA Authoring Practices (APG) and accessible live-region guidance, plus BBC GEL design guidance — follow these where applicable. :contentReference[oaicite:0]{index=0}

---

## 1 — Summary / Intent
A **Badge** is a small UI token used to show short contextual information attached to another UI element or shown inline:
- **Count badge** — numeric indicator of items (e.g., unread message count).
- **Status badge / dot** — small status indicator (e.g., online/offline, warning).
- **Label / tag-like badge** — small, capsule-like label (e.g., “Beta”, “New”).

Primary goals:
- Expose concise state to sighted users.
- Expose the same state to assistive technologies (AT) in a non-disruptive way.
- Be visually consistent with theme tokens (color, typography, spacing).
- Be small, composable, and non-obtrusive.

---

## 2 — Accessibility Principles (summary)
1. **Semantic clarity:** Badges are usually *presentational* — do not add interactive semantics unless interactive. If the badge conveys information that AT users need, expose it via accessible name or a live region/ARIA relationship. :contentReference[oaicite:1]{index=1}  
2. **Non-intrusive updates:** When dynamic counts change (e.g., notifications), use ARIA live regions (`aria-live`) thoughtfully — `polite` for non-urgent updates; `assertive` only for truly time-critical announcements. Use `aria-atomic="true"` to ensure atomic announcements when needed. :contentReference[oaicite:2]{index=2}  
3. **Decorative elements:** Status dots that are purely visual should be `aria-hidden="true"`; provide text alternative near the control if the status matters (e.g., an accessible label like “User online”). :contentReference[oaicite:3]{index=3}  
4. **Contrast & legibility:** Badge foreground/background color combinations must meet WCAG contrast for the textual content used. Prefer meeting **4.5:1** for normal-sized text; smaller text should be increased in size or use stronger contrasts to meet requirements. (BBC GEL stresses accessible colour usage and testing.) :contentReference[oaicite:4]{index=4}

---

## 3 — Variants & Visual Behavior
- `inline` — small pill used inline with text (label-style).
- `attached` — anchored to another UI element (e.g., avatar, icon); supports absolute positioning via a wrapper.
- `count` — numeric; supports `max` (default `99` show `99+`) and optional `overflow` display mode.
- `dot` — small round indicator (8–12px typical); purely visual by default.
- `status` — dot + optional textual label variant (e.g., green dot + “Online”).
- `tone` / `variant` — semantic color tokens: `default`, `success`, `warning`, `danger`, `info`, `neutral`.
- `size` — `xs`, `sm`, `md` (component-level control over font-size and padding).

**Design tokens** to use (CSS custom props / theme keys):
- `--badge-bg-{variant}`
- `--badge-color-{variant}`
- `--badge-radius`
- `--badge-font-size-{size}`
- `--badge-padding-{size}`
- `--badge-dot-size-{size}`
- `--badge-z-index` (for attached badges)

IMPORTANT! The above --badge-* CSS Custom properties are to only be used within the v2/lib/src/components/Badge/core/_badge.ts Lit web component itself and should derive values from the --ag-* props from ag-tokens.css:
- Spacing: --ag-space-* (1, 2, 3, 4)
- Border: --ag-border, --ag-border-subtle, --ag-border-width-1, --ag-border-width-2
- Colors: --ag-primary, --ag-success, --ag-black, --ag-white
- Focus: --ag-focus, --ag-focus-width, --ag-focus-offset
- Radius: --ag-radius-full (for circular indicator)
- Motion: --ag-motion-fast (for transitions)
and so on. These are defined in the v2/theme-registry and are built out using style dictionary and copied over.

---

## 4 — Markup Patterns & ARIA (examples)

### 4.1 Static decorative dot (no AT exposure)
Use when dot is purely visual (no AT announcement required).

```html
<span class="ag-badge ag-badge--dot ag-badge--success" aria-hidden="true"></span>
```

### 4.2 Attached count inside a button (badge part of accessible name)

Recommended pattern: include badge *inside* the control so it becomes part of the accessible name (screen readers will read the button label + count automatically, if the badge is textual).

```html
<button class="icon-btn" aria-label="Messages">
  <svg ... aria-hidden="true"></svg>
  <span class="ag-badge ag-badge--count">3</span>
</button>
```

If your UI needs a concise, explicit accessible name that includes the count, *also* provide a full accessible label on the control:

```html
<button class="icon-btn" aria-label="Messages (3 unread)">
  <svg ... aria-hidden="true"></svg>
  <span class="ag-badge ag-badge--count" aria-hidden="true">3</span>
</button>
```

**Rule:** If the badge text is not presented in DOM text or included in the accessible name of the parent, ensure the information is available to AT via `aria-label` or `aria-describedby`.

### 4.3 Using aria-describedby

If the badge is external to the control or you can't include count in the control's accessible name:

```html
<button id="inbox-btn" aria-describedby="inbox-badge-desc">Inbox</button>
<span id="inbox-badge-desc" class="visually-hidden">3 unread messages</span>
<span class="ag-badge ag-badge--count" aria-hidden="true">3</span>
```

### 4.4 Live-region for dynamic counts (non-urgent)

If the badge count updates live and you want AT to be notified without disrupting:

```html
<!-- polite live region elsewhere (hidden visually) -->
<div id="badge-live" aria-live="polite" aria-atomic="true" class="visually-hidden"></div>

<!-- when count changes -->
<script>
  // update visible badge
  badgeEl.textContent = newCountDisplay;

  // announce for AT
  const live = document.getElementById('badge-live');
  live.textContent = `${newCount} unread messages`; // polite update
</script>
```

**Important:** Don’t announce every minor change (spam), and prefer `polite` for unobtrusive updates. Use `assertive` only for critical alerts. ([MDN Web Docs][1])

---

## 5 — Behavioral & JS API Requirements

* `value` (number | null) — numeric content for `count` variant.
* `max` (number, default 99) — when `value > max` display `max+`.
* `variant` (`default|success|warning|danger|info|neutral`) — chooses color tokens.
* `dot` (boolean) — render the dot-only variant.
* `statusLabel` (string | null) — optional textual label used for AT (e.g., “Online”).
* `live` (`'off'|'polite'|'assertive'`) — whether to push updates to a live region (default `'off'`).
* `interactive` (boolean) — if true, badge is keyboard-focusable and emits click/keyboard events (then must implement keyboard focus style and ARIA semantics).
* `ariaHidden` (boolean) — force `aria-hidden` (if you want to explicitly hide from AT).
* `attachTo` (selector | null) — helper for attached badges (positioning wrapper).

**JS behaviors:**

* When `value` changes and `live !== 'off'`, update the external live region text in a developer-consumable format (e.g., `"3 unread messages"`). Avoid updating live region when element is hidden or out of context.
* When `interactive === true`, component emits standard DOM `click` events and is keyboard accessible (Enter/Space activate). Add `role="button"` if not using a native `<button>`. Provide `tabindex="0"` for non-button elements.

---

## 6 — Accessibility Rules & Decisions (explicit)

* **If badge is purely decorative dot:** `aria-hidden="true"`.
* **If badge conveys crucial info:** include info in the control's accessible name (preferred) or `aria-describedby` pointing to a visible/offscreen description.
* **Dynamic counts:** use a *single* offscreen live-region container under application control (not inside the badge element), update it when a count change should be announced; default `aria-live="polite"` and `aria-atomic="true"`. Avoid noisy announcements. ([MDN Web Docs][1])
* **Color contrast:** badge text must meet WCAG contrast with its background; prefer 4.5:1 for normal text. If the badge text is icon-only or small, consider increasing size or boldness to meet contrast. (Follow BBC GEL accessibility emphasis on color and legibility.) ([PageUp GEL][2])
* **Focus & keyboard:** badges normally are not focusable. If they are interactive (e.g., removable chips or interactive counters), they must be keyboard operable and have visible focus styles and ARIA states.
* **Screen reader verbosity:** do not expose duplicate or verbose strings (e.g., avoid both announcing via live region and also via `aria-describedby` causing duplicate vocalization).

---

## 7 — Visual & Interaction Specs (tokens & CSS suggestions)

**CSS parts / slots / classes**

* `.ag-badge` base
* `.ag-badge--count`
* `.ag-badge--dot`
* `.ag-badge--attached`
* `.ag-badge--size-sm|md|lg`
* `.ag-badge--variant-success|warning|danger|info|neutral`

**Suggested CSS custom properties**

```css
--badge-font-family: var(--font-family);
--badge-font-size-sm: 11px;
--badge-font-size-md: 12px;
--badge-padding-sm: 0.125rem 0.4rem;
--badge-padding-md: 0.125rem 0.5rem;
--badge-radius: 999px;
--badge-bg-default: var(--color-gray-700);
--badge-color-default: var(--color-white);
--badge-dot-size-sm: 8px;
--badge-dot-size-md: 10px;
```

**Attached badge wrapper**

* Provide `.ag-badge__attach-wrapper { position: relative; display: inline-block; }`
* Badge uses `position: absolute; top: -4px; right: -4px; transform: translate(50%, -50%);` (customizable via CSS variables).

---

## 8 — Testing Checklist (automated + manual)

**Automated:**

* Axe-core (jest-axe) checks for color contrast & semantic issues.
* Unit tests: rendering of variants, `max` overflow behavior, `dot` aria-hidden, `interactive` keyboard behavior.
* Snapshot tests for DOM structure.

**Manual / QA:**

* Screen reader test (NVDA, VoiceOver) verifying:

  * Attached badge included in control accessible name when appropriate.
  * `aria-describedby` audible description reads only once and is accurate.
  * Live region announces change as expected (no duplicates).
* Keyboard tab order: interactive badges are reachable and operable.
* Visual tests: color contrast, alignment when attached at different sizes.

---

## 9 — Example Implementations (HTML + small JS)

### Minimal component (non-interactive count)

```html
<span class="ag-badge ag-badge--count ag-badge--neutral" aria-hidden="false">12</span>
```

### Accessible attached count (preferred: count included in button labeling)

```html
<button aria-label="Notifications (12 unread)">
  <svg aria-hidden="true">...</svg>
  <span class="ag-badge ag-badge--count" aria-hidden="true">12</span>
</button>
```

### Live-region example (non-intrusive)

```html
<!-- hidden live region once at app root -->
<div id="ag-badge-live" class="visually-hidden" aria-live="polite" aria-atomic="true"></div>
```

JS update:

```js
function announceBadgeCount(newCount) {
  const live = document.getElementById('ag-badge-live');
  if (!live) return;
  const text = newCount > 0 ? `${newCount} unread messages` : 'No unread messages';
  live.textContent = text;
}
```

---

## 10 — Component API (Web Component / React / Lit friendly)

**Props / Attributes**

* `value` — number | null
* `max` — number (default `99`)
* `variant` — `default|success|warning|danger|info|neutral`
* `dot` — boolean
* `size` — `xs|sm|md`
* `interactive` — boolean
* `status-label` — string (for programmatic usage / AT)
* `live` — `'off'|'polite'|'assertive'` (default `'off'`)
* `aria-hidden` — boolean

**Events**

* `badge:click` (when interactive)
* `badge:remove` (if removable)

---

## 11 — Implementation Guidance & Edge Cases

* **Do not overuse `aria-live`**: prefer explicit accessible naming (aria-label/aria-describedby) where possible; reserve live regions for asynchronous, relevant updates. ([MDN Web Docs][1])
* **Avoid role inflation**: badges are usually not widgets — avoid giving them `role="status"` or `role="alert"` unless their semantics actually match (APG discussion shows this is nuanced). When in doubt, expose text via the parent control's accessible name. ([GitHub][3])
* **Counting & privacy**: be mindful of announcing counts that could reveal private info (e.g., number of messages in a context where that matters). Allow developers to disable live announcements.
* **SVG badges**: if using SVGs for badge visuals, ensure title/desc or `aria-hidden` as appropriate.

---

## 12 — Documentation & Examples to include in SpecSheet usage docs

* Markup examples for inline, attached, interactive badges.
* Live-region snippet and guidance about when to use `polite` vs `assertive`.
* Contrast examples showing failures and passing combinations with chosen tokens.
* Migration notes: if replacing Tag vs Badge, show mapping examples.

---

## 13 — Acceptance Criteria (for PR review)

* Visuals match design tokens and accessible contrast thresholds.
* All variants render correctly (count overflow, dot, attached).
* `dot` variant is `aria-hidden="true"` by default; `status-label` optional for AT.
* If `interactive`, keyboard accessible and events emitted.
* Live-region integration example included in docs; `live` default off.
* Automated accessibility tests (axe) pass; manual SR checks pass (VoiceOver / NVDA).

---

## 14 — References & Further Reading

* WAI-ARIA Authoring Practices (APG) — patterns & guidance. ([W3C][4])
* MDN: ARIA live regions — when and how to use `aria-live`. ([MDN Web Docs][1])
* BBC GEL technical guidance & badge usage (contrast & accessibility emphasis). ([PageUp GEL][2])
* W3C APG issue & discussion about badge/state indicator semantics. ([GitHub][3])
* Accessible notifications (articles and practical live-region patterns). ([Sara Soueidan][5])

---

## 15 — LLM Prompt (short) — for generating component code & docs

> Read and follow this `Badge Component — SpecSheet.md` and implement a web component (Lit) and React wrapper with the props and behaviors described above. Ensure: (1) visual tokens use CSS custom properties matching AgnosticUI token names, (2) accessibility rules (aria-hidden for decorative dots, `aria-describedby`/accessible names for counts, non-intrusive `aria-live` behavior) are implemented and documented, (3) unit and a11y tests are provided (jest + axe). **Also read and abide by** `v2/docs2/COMPONENT_DEVELOPMENT_WORKFLOW.md` for coding, testing, and docs conventions.

---

### Notes for reviewers / implementers

* This spec is intentionally conservative about announcing via live regions — that behavior should be opt-in for apps.
* Prefer making tests and examples that demonstrate both “developer-controlled” labeling (aria-label) and “automatic” live region announcement (developer chooses `live="polite"`).

---

*End of SpecSheet.md*