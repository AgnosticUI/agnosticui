# Buttons Theming

Properties such as background and font colors, borders, etc., are applied to these buttons is through
[CSS custom properties](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties). All of these custom properties have a fallback default, but will prioritize your configuration if you've supplied them.

To demonstrate the mechanics of this simply, let's say we were to define a property like:
```css
color: var(--color-you-may-or-may-not-have-defined, var(--our-fallback-default));
```
We would set up our fallback default if and only if you had not provided the first custom property.

## Defaults

We set up all our fallback defaults with the prefix: `--agnostic-default-`. The definition we prioritize
that you may define to &ldquo;theme&rdquo; a particular characteristic should use the same name with the
`default-` part removed. With that said, the following example should make sense:

```css
  color: var(--agnostic-btn-font-color, var(--agnostic-default-btn-font-color));
```

So, if you've actually setup your root definitions like the following, all your button text will then be
hotpink and not black:

```css
:root {
  --agnostic-btn-font-color: hotpink;
}
```
