# Accessible Icon Buttons

*Published on May 22, 2019 by [Sara Soueidan](https://www.sarasoueidan.com/blog/accessible-icon-buttons/)*

There is a handful of ways that an icon button can be implemented accessibly. This article is an overview of them all.

## Table of Contents
- [Accessible Button Names](#accessible-button-names)
- [Inspecting the Button Name in Chrome Devtools](#inspecting-the-button-name-in-chrome-devtools)
- [Icon Sitting Next to Text](#icon-sitting-next-to-text)
- [Technique #1: Accessible Visually Hidden Text](#technique-1-accessible-visually-hidden-text)
- [Technique #2: Accessible Visually Hidden Text with hidden and aria-labelledby](#technique-2-accessible-visually-hidden-text-with-hidden-and-aria-labelledby)
- [Technique #3: Using aria-label](#technique-3-using-aria-label)
- [Technique #4: aria-label on the `<svg>` Icon](#technique-4-aria-label-on-the-svg-icon)
- [Technique #5: aria-labelledby on the svg Icon](#technique-5-aria-labelledby-on-the-svg-icon)
- [Use SVG](#use-svg)
- [There is no One Way to Rule Them All](#there-is-no-one-way-to-rule-them-all)
- [Final Words](#final-words)

## Accessible Button Names

An icon button is an icon that triggers some sort of action on the page. More accurately, technically speaking, an icon button is a button that contains an icon and no (visible) accompanying text.

A button is announced to screen readers as a button when the proper element — the almighty `<button>` is used, or when an element has a `role="button"` on it. Either way, when a button is announced as one, users expect to be able to interact with it in a certain way, which includes being able to activate the button using either the ENTER or SPACE keys.

## Inspecting the Button Name in Chrome Devtools

To inspect what the accessible name of a button is and, therefore, how it will be announced by a screen reader, you can use the Chrome devtools. Next to the Style tab, you'll find an "Accessibility" tab, inside which you can see the accessible name.

## Icon Sitting Next to Text

When a button contains text, that text is going to be used to create an accessible name for the button. That text should usually be enough to convey what the button does to screen readers.

As such, the icon itself (an svg image) could become irrelevant to screen reader users, as it does not clarify or add to the accessible name of the button. As such, the common practice is to hide it from screen readers using `aria-hidden`:

```html
<button aria-expanded="false" id="menu-trigger">
   <svg viewBox="0 0 32 32" width="32px" height="32px" aria-hidden="true" focusable="false">
        <!-- svg content here -->
    </svg>
    Menu
</button>
```

The `aria-hidden` attribute is used to indicate whether an element is exposed to screen readers or not. When set to "true", the element and its contents are hidden from the accessibility API.

The svg also has a `focusable` attribute set to false which prevents the icon itself from receiving focus in IE.

## Technique #1: Accessible Visually Hidden Text

If your button isn't supposed to visually contain any text, you can still provide the text inside the `<button>` so that it's picked up and used by screen readers, while hiding it visually using CSS.

```html
<button>
   <svg viewBox="0 0 32 32" width="32px" height="32px" aria-hidden="true" focusable="false">
        <!-- svg content -->
    </svg>
    <span class="visually-hidden">Menu</span>
</button>
```

```css
.visually-hidden:not(:focus):not(:active) {
  clip: rect(0 0 0 0); 
  clip-path: inset(100%); 
  height: 1px; 
  overflow: hidden; 
  position: absolute; 
  white-space: nowrap; 
  width: 1px; 
}
```

## Technique #2: Accessible Visually Hidden Text with hidden and aria-labelledby

This technique uses the `hidden` attribute to hide the button text:

```html
<button class="menu-trigger" aria-labelledby="button-label">
    <span id="button-label" hidden>Menu</span>
    <svg aria-hidden="true" focusable="false" width="24" height="28" viewBox="0 0 24 28">
        <!-- svg content -->
    </svg>
</button>
```

The `hidden` attribute is a boolean attribute that hides the element both visually and from assistive tech. The `aria-labelledby` attribute establishes relationships between an element and its label(s).

## Technique #3: Using aria-label

`aria-label` is another attribute which can be used to provide an accessible label to an element. It takes a string of text as a value, and that string will be used as the accessible name for the element it is used on.

```html
<button class="menu-trigger" aria-label="Menu">
    <svg focusable="false" width="24" height="28" viewBox="0 0 24 28">
        <!-- svg content -->
    </svg>
</button>
```

## Technique #4: aria-label on the `<svg>` Icon

The icon itself can be used to create a label to the button, by making sure that the icon itself has an accessible label.

```html
<button class="menu-trigger">
    <svg focusable="false" width="24" height="28" viewBox="0 0 24 28" aria-label="Menu">
        <!-- svg content -->
    </svg>
</button>
```

## Technique #5: aria-labelledby on the svg Icon

This technique uses `aria-labelledby` to reference the `<title>` of the SVG as the accessible label:

```html
<button class="menu-trigger">
    <svg focusable="false" width="24" height="28" viewBox="0 0 24 28" role="img" aria-labelledby="svg-title">
        <title id="svg-title">Menu</title>
        <!-- svg content -->
    </svg>
</button>
```

## Use SVG

Using SVG should be the first requirement to making icons accessible. There are a myriad of reasons why SVG is better suited for icons than icon fonts.

## There is no One Way to Rule Them All

Scott O'Hara's complementary article dives into technical intricacies of markup patterns and shares extensive tests on how these patterns work in different browser/screen reader pairings. Treating the icon as decorative and providing an accessible name to the button using one of the first three techniques is often the better way to go.

## Final Words

This article provides an overview of many possible ways to provide an accessible label to an icon button. It is important to note that we only covered providing an accessible label to the buttons. There are many more things to take into consideration when combining labels with additional descriptions.

*Article by [Sara Soueidan](https://www.sarasoueidan.com/)*
