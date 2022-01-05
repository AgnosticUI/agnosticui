<script>
  export let isRounded = false;
  export let isBordered = false;
  const emptyClasses = [
    "empty",
    isRounded ? "empty-rounded" : "",
    isBordered ? "empty-bordered" : "",
  ]
    .filter((cl) => cl.length)
    .join(" ");
</script>

<style>
.empty-base,
.empty {
  display: flex;
  flex-flow: column wrap;
  align-items: center;
  text-align: center;
  width: 100%;
}

.empty {
  padding: calc(2 * var(--agnostic-side-padding));
  background: var(--agnostic-gray-extra-light);
}

.empty-bordered {
  background: transparent;
  border: 1px solid var(--agnostic-gray-light);
}

.empty-rounded {
  border-radius: var(--agnostic-radius);
}

.empty-actions {
  margin-block-start: var(--spacing-24);
}

</style>

<div class="{emptyClasses}">
  <slot name="header" />
  <slot name="body" />
  <div class="empty-actions">
    <slot name="footer" />
  </div>
</div>
