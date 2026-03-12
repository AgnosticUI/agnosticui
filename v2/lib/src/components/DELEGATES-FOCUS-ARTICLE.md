# Shadow DOM Focus Delegation: Getting `delegatesFocus` Right

Focus management in Shadow DOM is one of those things that is easy to get subtly wrong. You build a clean `<ag-button>` wrapper around a native `<button>`, add a manual `focus()` override that pokes into the shadow root, ship it, and call it done. It works. But there is a cleaner way, and it has been sitting in the spec the whole time.

That cleaner way is `delegatesFocus`.

---

## What `delegatesFocus` Does

When you attach a shadow root with `delegatesFocus: true`, the browser takes on two responsibilities that you would otherwise handle manually.

**First:** Any click on the host element (including padding areas and decorative regions outside the inner control) automatically forwards focus to the first focusable element inside the shadow root. No `this.shadowRoot.querySelector('button').focus()` required.

**Second:** The host element receives the CSS `:focus-within` pseudo-class whenever an internal element is focused. This means you can style the host wrapper based on internal focus state without any JavaScript at all.

These two behaviors together eliminate the most common boilerplate found in simple wrapper components.

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

But `delegatesFocus` is not universally appropriate. Components that manage their own focus routing should opt out:

- **Roving tabindex components** (like `<ag-tabs>`): The host element itself must be reachable by keyboard. Delegating away from it breaks the pattern.
- **Multiple internal focus targets** (like `<ag-combobox>`): The component has an input, a toggle, a clear button, and potentially removable badges. Automatic delegation to the "first focusable element" would interfere with carefully managed transitions between those targets.
- **Custom pointer handling** (like `<ag-slider>` or `<ag-rating>`): These components use `setPointerCapture` or manage `tabindex` on internal elements dynamically. Letting the browser redirect focus automatically creates conflicts.

The rule is simple: if there is only one place focus should ever go, delegate. If the component decides where focus goes, keep control.

---

## What We Changed in AgnosticUI

For `AgButton`, `AgInput`, and `Select`, the implementation was the same in each case.

**Add `shadowRootOptions`:**

```typescript
static shadowRootOptions = {
  ...LitElement.shadowRootOptions,
  delegatesFocus: true,
};
```

**Remove the manual `focus()` and `blur()` overrides.** Each component had something like this:

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

**Keep the focus and blur re-dispatch handlers.** One thing we did _not_ remove is the `@focus` and `@blur` listeners on the internal elements that re-dispatch bubbling events from the host. It is worth being explicit here: removing the manual `focus()` and `blur()` overrides does _not_ neuter these listeners. They are completely separate concerns.

The `@focus` and `@blur` listeners on the inner element fire normally whenever that element receives or loses focus, regardless of how the focus arrived. `delegatesFocus` is only responsible for _routing_ focus on a host click; it has no effect on event listeners that are already attached to elements inside the shadow root.

Those listeners exist because `focus` and `blur` do not bubble natively. A consumer listening on the host with `addEventListener('focus', ...)` would never hear events that stay trapped inside the shadow root. The re-dispatch pattern solves that by catching the non-bubbling event on the inner element and re-firing it as a bubbling, composed event from the host. `delegatesFocus` does not address this gap at all. The two mechanisms do different jobs and both stay in place:

```typescript
// This is untouched — delegatesFocus does not replace it
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

`delegatesFocus` is a small opt-in with outsized payoff for the right components. It eliminates manual shadow root traversal, makes host click areas behave intuitively, and hands `:focus-within` styling to CSS where it belongs.

The audit that surfaced this improvement also clarified something more broadly useful: not every Shadow DOM feature is a universal default. `delegatesFocus` belongs on simple wrappers. Roving tabindex, custom pointer management, and multi-focus widgets need to stay in control of their own focus. Knowing which category a component falls into is the whole job.

For `AgButton`, `AgInput`, and `<ag-select>`, the browser now does the work we were doing by hand. That is the right outcome.
