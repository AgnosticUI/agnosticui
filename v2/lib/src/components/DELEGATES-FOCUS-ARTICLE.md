# Shadow DOM Focus Delegation: Getting `delegatesFocus` Right

Focus management in Shadow DOM is one of those things that is easy to get subtly wrong. You build a clean `<ag-button>` wrapper around a native `<button>`, add a manual `focus()` override that pokes into the shadow root, ship it, and call it done. It works. But there is a cleaner way, and it has been sitting in the spec the whole time.

That cleaner way is `delegatesFocus`.

---

## What `delegatesFocus` Does

When you attach a shadow root with `delegatesFocus: true`, the browser takes on a few responsibilities that you would otherwise handle manually.

**First:** Any click on the host element (including padding areas and decorative regions outside the inner control) automatically forwards focus to the first focusable element inside the shadow root. No `this.shadowRoot.querySelector('button').focus()` required.

**Second:** The host element matches both the `:focus` and `:focus-within` CSS pseudo-classes whenever an internal element is focused. While `:focus-within` normally applies to any ancestor of a focused element, the less obvious behavior occurs with `:focus`: when `delegatesFocus: true` is set, the shadow host matches `:focus` as if it were the focused element itself. This allows you to style the host's focus ring using CSS alone, rather than toggling classes via JavaScript.

_It is important to note, however, that the **host element itself does not receive focus**; focus is strictly delegated to the internal element, which remains the `activeElement` in the DOM._

**Third:** It ensures accessibility by eliminating "dead focus" zones. Without delegation, clicking a host’s padding or decorative area can leave focus stranded on a non-interactive element. For keyboard and screen reader users, this creates a broken experience where the component appears active but has no functional focus. `delegatesFocus` closes this gap at the platform level, guaranteeing that any interaction with the host reliably moves focus to the internal control.

These behaviors together eliminate the most common boilerplate found in simple wrapper components.

---

## Opting In with Lit

Lit exposes shadow root configuration through a static class property. The opt-in is a one-line addition to LitElement's own `shadowRootOptions`:

```typescript
export class AgButton extends LitElement {
  static shadowRootOptions = {
    ...LitElement.shadowRootOptions,
    delegatesFocus: true,
  };
}
```

Spreading `LitElement.shadowRootOptions` is important. It preserves Lit's own defaults (like `mode: 'open'`) so you are not accidentally overwriting them. Browser support is excellent: `delegatesFocus` has been available in all major engines for years and requires no polyfill.

---

## When to Use It, and When Not To

`delegatesFocus` is a good fit for **simple wrapper components** that each wrap a single native focusable element. If clicking the host should always move focus to one predictable target, the browser can handle that automatically.

For AgnosticUI, the right candidates are clear:

| Component     | Use `delegatesFocus`? | Reason                                         |
| ------------- | --------------------- | ---------------------------------------------- |
| `<ag-button>` | Yes                   | Single `<button>`, unambiguous focus target    |
| `<ag-input>`  | Yes                   | Single `<input>` or `<textarea>`, same pattern |
| `<ag-select>` | Yes                   | Single `<select>`, identical case              |

But `delegatesFocus` is not always appropriate. Components that manage their own focus routing should opt out:

- **Roving tabindex components** (like `<ag-tabs>`): The host element itself must be reachable by keyboard. Delegating away from it breaks the pattern.
- **Multiple internal focus targets** (like `<ag-combobox>`): The component has an input, a toggle, a clear button, and potentially removable badges. Automatic delegation to the "first focusable element" would interfere with carefully managed navigation between those targets.
- **Custom pointer handling** (like `<ag-slider>` or `<ag-rating>`): These components use `setPointerCapture` or manage `tabindex` on internal elements dynamically. Letting the browser redirect focus automatically creates conflicts.

The rule is simple: if there is only one place focus should ever go, delegate. If the component decides where focus goes, keep control.

_**One more pitfall: do not add `tabindex` to the host when using `delegatesFocus`.** Setting `tabindex="0"` on the host creates two stops in the tab order where there should be one: the host receives focus on the first Tab, then the inner element receives it on the next. This breaks the expected navigation flow for keyboard users. With `delegatesFocus`, the host participates in focus routing automatically. Adding a manual `tabindex` on top of it interferes with that and produces confusing, inaccessible behavior._

---

## What We Changed in AgnosticUI

The only components we deemed appropriate for utilizing `delegatesFocus` were `AgButton`, `AgInput`, and `AgSelect`. The implementation was the same in each case.

**Add `shadowRootOptions`:**

```typescript
static shadowRootOptions = {
  ...LitElement.shadowRootOptions,
  delegatesFocus: true,
};
```

**A note on `autofocus`.** For page-load focus, use the `autofocus` attribute on the inner element rather than JavaScript. With `delegatesFocus`, the host correctly reflects this state. However, use it sparingly: jumping focus can disorient screen reader and keyboard users. Reserve `autofocus` for specific interactions, like a dedicated search page or a modal triggered by the user.

**Remove the manual `focus()` and `blur()` overrides.** Each of the components had something like this:

```typescript
// Before: manual delegation
focus() {
  this.shadowRoot?.querySelector('button')?.focus();
}
blur() {
  this.shadowRoot?.querySelector('button')?.blur();
}
```

With `delegatesFocus: true`, calling `.focus()` on the host element automatically delegates to the inner native element. The manual overrides became dead code and were removed.

**Retain focus and blur re-dispatch handlers.** Removing manual `focus()` and `blur()` overrides does not affect our `@focus` and `@blur` listeners. These address a separate concern: event bubbling.

While `delegatesFocus` routes focus _into_ the shadow root, native `focus` and `blur` events remain trapped inside it. We must keep these internal listeners to re-dispatch events as bubbling, composed events from the host. This ensures `addEventListener('focus', ...)` works for the consumer:

```typescript
// untouched: delegatesFocus does not handle event bubbling
private _handleFocus(event: FocusEvent) {
  this.dispatchEvent(new FocusEvent('focus', {
    bubbles: true,
    composed: true,
    relatedTarget: event.relatedTarget,
  }));
  this.onFocus?.(event);
}
```

---

## Conclusion

`delegatesFocus` provides high impact for the right components. It eliminates manual shadow root traversal, makes host click areas intuitive, and moves `:focus-within` styling to CSS where it belongs.

For `AgButton`, `AgInput`, and `<ag-select>`, the browser now does the work we were doing by hand. That is the right outcome.
