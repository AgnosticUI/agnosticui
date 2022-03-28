<script>
  export let index;
  export let isDisabled = false;
  export let isSelected = false;
  export let classes;
  console.log('classes: ', classes)
  // children: ReactNode;
  // onClick?: (activeIndex: number) => void;
  // onKeyDown?: (ev: KeyboardEvent<HTMLElement>) => void;
  // menuRef: React.ForwardedRef<HTMLButtonElement>,
  
</script>
<button
  role="menuitem"
  tabindex={isSelected ? 0 : -1}
  disabled={isDisabled}
  class={classes}
  {...$$restProps}
>
  <slot />
</button>

<style>
.menu-item {
  text-align: left;

  /* TODO -- can we compose some of this from the button styles? */
  border-color: var(--agnostic-btn-bgcolor, var(--agnostic-gray-light));
  border-style: solid;
  border-width: var(--agnostic-btn-border-size, 1px);
  font-size: inherit;

  /* this can be overriden, but it might mess with the balance of the button heights across variants */
  line-height: var(--agnostic-line-height, var(--fluid-20, 1.25rem));
  padding-block-start: var(--agnostic-vertical-pad, 0.5rem);
  padding-block-end: var(--agnostic-vertical-pad, 0.5rem);
  padding-inline-start: var(--agnostic-side-padding, 0.75rem);
  padding-inline-end: var(--agnostic-side-padding, 0.75rem);
  background-color: transparent;
  display: block;
  min-width: 100%;
  white-space: nowrap;
  cursor: default;
}

.menu-item:not(:first-of-type) {
  border-top: 0;
}

.menu-item-selected {
  color: white;
  background-color: var(--agnostic-primary);
}

.menu-item:active:not(.menu-item-selected) {
  color: var(--agnostic-primary);
}

.menu-item [aria-checked="true"]::before {
  /* TODO make this more flexible eventually */
  content: "\2713\0020";
}

/* Sizes */
.menu-item-large {
  font-size: calc(var(--agnostic-btn-font-size, 1rem) + 0.25rem);
  height: 3rem;
  line-height: 2rem;
}

.menu-item-small {
  font-size: calc(var(--agnostic-btn-font-size, 1rem) - 0.25rem);
  height: 2rem;
  line-height: 1rem;
}

.menu-item-rounded:first-of-type {
  border-top-left-radius: var(--agnostic-radius);
  border-top-right-radius: var(--agnostic-radius);
}

.menu-item-rounded:last-of-type {
  border-bottom-left-radius: var(--agnostic-radius);
  border-bottom-right-radius: var(--agnostic-radius);
}

.menu-item:hover:not([disabled]):not(.menu-item-selected) {
  background-color: var(--agnostic-gray-extra-light);
  cursor: pointer;
}

</style>
