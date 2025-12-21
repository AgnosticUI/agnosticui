.card {
  position: relative;
  border: 3px solid green;

  // Style hover and focus states.
  &:hover,
  &:focus-within {
    border-color: red;
  }

  // Make the text selectable.
  &__text {
    position: relative;
    z-index: 2;
  }

  // Make the whole card clickable.
  &__link::after {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    content: "";
  }
}
This approach—often referred to as the **"pseudo-content overlay" trick**—is a clever and accessible solution for making an entire card clickable while **preserving usability, accessibility, and text selection**.

Let’s break it down and analyze **why and how it works**, what pitfalls it avoids, and how you could refine or extend it.

---

## ✅ Why This Trick Works

### ✔️ **Clickability**

* The `::after` pseudo-element stretches over the entire card via `position: absolute; top: 0; right: 0; bottom: 0; left: 0;`.
* Since it is applied to the `<a>` element, clicking anywhere inside the card activates the link.

### ✔️ **Accessibility**

* The actual `<a>` tag remains in the markup, ensuring assistive technologies (like screen readers) recognize and announce it.
* Unlike `onclick` handlers on `div` or `article`, this uses **semantic HTML**, which is crucial for accessibility.

### ✔️ **Text Selection**

* The text layer is given `z-index: 2`, which puts it above the pseudo-element (`z-index: auto` or `1`), allowing users to **select text without interference**.

### ✔️ **Hover and Focus Styles**

* Use of `:hover` and `:focus-within` on the `.card` allows for styling feedback when either the card or any focusable element inside it (like links or buttons) is active.

---

## 🧱 Full Working Example

Here's an **enhanced and complete HTML + CSS example**, accounting for edge cases like multiple links and text selection.

### ✅ HTML

```html
<div class="card">
  <h2 class="card__title">Accessible Card Title</h2>
  <p class="card__text">
    This is some description text. You can <a href="/other-page" class="inline-link">visit another page</a> too.
  </p>
  <a href="/main-link" class="card__link" aria-label="Read more about Accessible Card"></a>
</div>
```

### ✅ SCSS / CSS

```scss
.card {
  position: relative;
  border: 2px solid #ccc;
  padding: 1rem;
  border-radius: 6px;
  transition: border-color 0.3s;

  &:hover,
  &:focus-within {
    border-color: #007acc;
  }

  &__text,
  &__title {
    position: relative;
    z-index: 2; // Keeps text above the pseudo-overlay
  }

  // Optional: Style inline links separately
  .inline-link {
    position: relative;
    z-index: 3;
    color: #007acc;
    text-decoration: underline;
  }

  &__link {
    position: absolute;
    inset: 0;
    z-index: 1;

    // Pseudo-element to absorb the click
    &::after {
      content: "";
      position: absolute;
      inset: 0;
    }
  }
}
```

---

## 🧠 Why Not Just Wrap the Whole Card in `<a>`?

HTML5 allows block-level elements like `<div>`, `<article>`, etc. inside `<a>`, but:

* 🧭 **Nested links are invalid HTML** and break accessibility.
* 🧑‍🦯 Screen readers might **misinterpret the content**.
* 🔗 You may need multiple links inside the card, which **isn't allowed** within a single `<a>`.

So, while wrapping the card in an `<a>` is tempting, it's **semantically incorrect and not future-proof** if you need more than one interactive element.

---

## 🔒 Considerations & Gotchas

1. **Don’t add text inside `.card__link`** – it’s meant to be visually hidden and only act as a click target.
2. **Use `aria-label`** if the link has no visible text to ensure screen readers still announce it meaningfully.
3. **Avoid pointer-events: none** tricks on the text layer—they might block context menus or tooltips.

---

## ✅ Benefits Recap

* ✔️ Accessible
* ✔️ Text remains selectable
* ✔️ Fully clickable card
* ✔️ Multiple internal links allowed
* ✔️ Works with keyboard navigation
* ✔️ Maintains semantic HTML
