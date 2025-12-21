# Collapsible

Use native `<details>` / `<summary>` elements as the foundation for the Collapsible component.

Ideally, we can extract and share the CSS styles inlined into /Users/roblevin/workspace/opensource/agnosticui/v2/lib/src/components/Accordion/core/_Accordion.ts

---

### Accessibility Guidelines

- **Expanded State:**  
  The toggle trigger (e.g., `<summary>` or a button) must clearly indicate the expanded state via `aria-expanded="true" | "false"` or by reflecting the native `open` attribute on `<details>`.  
  *Source: [W3C APG – Disclosure Pattern](https://www.w3.org/WAI/ARIA/apg/patterns/disclosure/)*

- **Hidden Content:**  
  The content region must be programmatically hidden when collapsed (e.g., `<details>` without `open`, or `hidden` attribute) so assistive technologies don’t announce hidden content.  
  *Source: [handreichungen.bfit-bund.de](https://handreichungen.bfit-bund.de/accessible-uie/akkordeon.html)*

- **Accessible Toggle Label:**  
  Use a semantic heading level or accessible label for the toggle. If using `<summary>`, keep it concise and text-only (no complex interactive children).  
  *Source: [handreichungen.bfit-bund.de](https://handreichungen.bfit-bund.de/accessible-uie/akkordeon.html)*

- **Keyboard Activation:**  
  Support both `Enter` and `Space` keys for toggling the collapsed/expanded state when the trigger has focus.  
  *Source: [W3C APG – Disclosure Pattern](https://www.w3.org/WAI/ARIA/apg/patterns/disclosure/)*

- **Keyboard Navigation:**  
  Focusable elements within the expanded region must be reachable via Tab; focus order must remain logical and free of traps.

- **Visual State Indicators:**  
  Expanded/collapsed states must be perceivable without relying solely on colour (e.g., icon rotation, plus/minus, or text change).  
  *Source: [BBC GEL Accessibility Principles](https://www.bbc.co.uk/gel/guidelines/how-to-design-accessibly)*

- **Accessible Naming:**  
  The toggle/control must have an accessible name that conveys its action (e.g., “Show details”, “Hide details”). The expanded content may reference the trigger via `aria-labelledby` if appropriate.  
  *Source: [W3C APG – Accordion Pattern](https://www.w3.org/WAI/ARIA/apg/patterns/accordion/)*

- **Dynamic Updates:**  
  When content is dynamically added or removed, ensure name/role/value changes are programmatically exposed so assistive technologies detect the update.  
  *Source: [W3C APG](https://www.w3.org/WAI/ARIA/apg/patterns/disclosure/)*

- **Document Structure:**  
  Ensure the heading structure remains logical within larger page contexts (e.g., trigger within a heading element or given equivalent semantics).  
  *Source: [handreichungen.bfit-bund.de](https://handreichungen.bfit-bund.de/accessible-uie/akkordeon.html)*

- **Minimal ARIA:**  
  Avoid adding redundant ARIA roles or properties if native `<details>/<summary>` semantics already cover the behavior.  
  *Principle: “No ARIA is better than bad ARIA.”*  
  *Source: [WAI-ARIA Practices](https://wai-aria-practices.netlify.app/aria-practices/examples/accordion/accordion.html)*

---
