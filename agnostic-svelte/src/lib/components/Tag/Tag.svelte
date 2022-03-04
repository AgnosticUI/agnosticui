<style>
.tag-base,
.tag {
  display: inline-flex;
  justify-content: center;
  white-space: nowrap;
}

.tag-skin,
.tag {
  background-color: var(--agnostic-gray-light);
  color: var(--agnostic-dark);
  font-size: var(--fluid-12);
  line-height: var(--agnostic-line-height, var(--fluid-20, 1.25rem));
  padding-block-start: var(--fluid-2);
  padding-block-end: var(--fluid-2);
  padding-inline-start: var(--fluid-8);
  padding-inline-end: var(--fluid-8);
}

.tag-info {
  background: var(--agnostic-primary-light);
  color: var(--agnostic-primary-dark);
}

.tag-warning {
  background: var(--agnostic-warning-light);
  color: var(--agnostic-warning-dark);
}

.tag-error {
  background: var(--agnostic-error-light);
  color: var(--agnostic-error-dark);
}

.tag-success {
  background: var(--agnostic-action-light);
  color: var(--agnostic-action-from);
}

.tag-upper {
  font-size: var(--fluid-10);
  text-transform: uppercase;
}

.tag-circle {
  border-radius: 50%;
}

.tag-round {
  border-radius: var(--agnostic-radius);
}

.tag-pill {
  border-radius: 200px;
}

</style>

<script>
  export let isUppercase = false;
  export let isSkinned = true;
  export let type = "";
  export let shape = "";

  const tagClasses = [
    isSkinned ? "tag" : "tag-base",
    type ? `tag-${type}` : "",
    shape ? `tag-${shape}` : "",
    isUppercase ? "tag-upper" : "",
  ]
    .filter((c) => c)
    .join(" ");
</script>

<span class="{tagClasses}">
  <slot />
</span>
