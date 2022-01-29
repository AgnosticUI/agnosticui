<script>
  export let title = "";
  // The <details> open attribute indicates whether the details content will be
  // displayed on page load or not.
  export let isOpen = false;
  export let isBackground = false;

  const discloseClasses = ["disclose", isBackground ? "disclose-bg" : ""]
    .filter((c) => c)
    .join(" ");

</script>

<style>
.disclose {
  margin-block-end: var(--fluid-4);
  /* When this element is a direct child of a flex container with
  flex-direction: column it collapses similar to an inline element even though
  it's block. This helps prevent that. */
  width: 100%;
}

.disclose-title {
  display: block;
  cursor: pointer;
  font-weight: 600;
  padding: var(--fluid-8) var(--fluid-12);

  /* Required to position the icon absolutely */
  position: relative;
  color: inherit;
  transition: color var(--agnostic-timing-slow);
}

.disclose-panel {
  font-weight: 400;
  padding: var(--fluid-16);
}

.disclose-title,
.disclose-panel {
  margin: 0;
}

/* stylelint-disable-next-line selector-pseudo-element-no-unknown */
.disclose-title::webkit-details-marker {
  display: none;
}

.disclose-bg .disclose-title {
  background-color: var(--agnostic-gray-light);
}

.disclose-title:focus {
  box-shadow: 0 0 0 var(--agnostic-focus-ring-outline-width) var(--agnostic-focus-ring-color);

  /* Needed for High Contrast mode */
  outline:
    var(--agnostic-focus-ring-outline-width) var(--agnostic-focus-ring-outline-style)
    var(--agnostic-focus-ring-outline-color);
  transition: box-shadow var(--agnostic-timing-fast) ease-out;
}

.disclose-title::after {
  color: var(--agnostic-gray-dark);
  content: "\203A";
  position: absolute;
  right: var(--fluid-12);
  top: 0;
  bottom: 0;

  /* Chevron thinning :) */
  font-size: var(--fluid-32);
  line-height: 1;
  font-weight: 100;
  transition: transform var(--agnostic-timing-slow);
  transform: rotate(0);
}

@media (prefers-reduced-motion), (update: slow) {
  .disclose-title,
  .disclose-title:focus,
  .disclose-title::after {
    transition: none;
  }
}

.disclose[open] > .disclose-title::after {
  transform: rotate(90deg);
}

</style>

<details class="{discloseClasses}" open="{isOpen || null}">
  <summary class="disclose-title">{title}</summary>
  <div class="disclose-panel">
    <slot />
  </div>
</details>
