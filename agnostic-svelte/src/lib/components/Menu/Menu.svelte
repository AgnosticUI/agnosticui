<script>
	import { onDestroy, onMount } from 'svelte';

  export let id;
  export let size = '';
  export let menuTitle;
  export let menuItems = [];
  export let isRounded = false;
  export let isBordered = false;
  export let icon = '▾';
  export let onOpen;
  export let onClose;
  export let closeOnClickOutside = true;
  export let closeOnSelect = true;

  // References aka bindings
  let rootRef;
  let triggerRef;

  let menuItemRefs = []; //https://svelte.dev/tutorial/component-this
  $: menuItemRefs = [];

  // State management
  let expanded = false;
  const setExpanded = (b) => expanded = b;
  let selectedItem = -1;
  const setSelectedItem = (n) => selectedItem = n;

  const setOpened = (open) => {
    if (open && onOpen) {
      onOpen(selectedItem);
    } else if (onClose) {
      onClose();
    }
    setExpanded(open);
  };

  // Focus management
  const focusItem = (index, direction) => {
    let i = index;
    if (direction === 'asc') {
      i += 1;
    } else if (direction === 'desc') {
      i -= 1;
    }

    // Circular navigation
    //
    // If we've went beyond "start" circle around to last
    if (i < 0) {
      i = menuItems.length - 1;
    } else if (i >= menuItems.length) {
      // We've went beyond "last" so circle around to first
      i = 0;
    }

    const nextMenuItem = menuItemRefs[i];

    if (nextMenuItem) {
      // Edge case: We hit a tab button that's been disabled. If so, we recurse, but
      // only if we've been supplied a `direction`. Otherwise, nothing left to do.
      if (nextMenuItem.isDisabled() && direction) {
        // Retry with new `i` index going in same direction
        focusItem(i, direction);
      } else {
        // Note that .focus is available here as a result of agnostic-svelte/src/lib/components/Menu/MenuItem.svelte
        // maintaining its own reference to the native <button> element and then exposing itw own export function focus
        nextMenuItem.focus();
      }
    }
  };

  const focusTriggerButton = () => triggerRef && triggerRef.focus();

  const isInside = (el) => {
    if (rootRef) {
      const children = rootRef.querySelectorAll('*');
      for (let i = 0; i < children.length; i += 1) {
        const child = children[i];
        if (el === child) {
          return true;
        }
      }
    }
    return false;
  };

  const clickedOutside = (ev) => {
    if (expanded && closeOnClickOutside) {
      if (!isInside(ev.target)) {
        setExpanded(false);
        focusTriggerButton();
      }
    }
  };

	onMount(() => {
    if (typeof window !== 'undefined') {
      document.addEventListener('click', clickedOutside);
    }
	});

  onDestroy(() => {
    if (typeof window !== 'undefined') {
      document.removeEventListener('click', clickedOutside);
    }
  });

  // CSS Classes
  let triggerSizeClasses;
  let itemSizeClasses;
  switch (size) {
    case 'small':
      triggerSizeClasses = "menu-trigger-small";
      itemSizeClasses = "menu-item-small";
      break;
    case 'large':
      triggerSizeClasses = "menu-trigger-large";
      itemSizeClasses = "menu-item-large";
      break;
    default:
      triggerSizeClasses = '';
      itemSizeClasses = '';
  }

  const triggerClasses = [
    "menu-trigger",
    triggerSizeClasses,
    isBordered ? "menu-trigger-bordered" : '',
    isRounded ? "menu-trigger-rounded" : '',
  ]
    .filter((cls) => cls)
    .join(' ');

  const itemClasses = [itemSizeClasses, isRounded ? "menu-item-rounded" : '']
    .filter((cls) => cls)
    .join(' ');

  const afterOpened = () => {
    requestAnimationFrame(() => {
      // If selectedItem < 1 probably hasn't been opened before (or happens to be on
      // first item). Otherwise, might be "reopening" and has previously selected item
      if (selectedItem < 1) {
        setSelectedItem(0);
        onMenuItemKeyDown('Home', 0);
      } else {
        focusItem(selectedItem);
        setSelectedItem(selectedItem);
      }
    });
  };

  /**
   * @param evOrString arg of either keyboard event or a string w/direction key like Up Down etc.
   * @param index
   * @returns
   */
  const onMenuItemKeyDown = (evOrString, index) => {
    const key = typeof evOrString === 'string' ? evOrString : evOrString.key;
    switch (key) {
      case 'Up': // These first cases are IEEdge :(
      case 'ArrowUp':
        focusItem(index, 'desc');
        break;
      case 'Down':
      case 'ArrowDown':
        focusItem(index, 'asc');
        break;
      case 'Home':
      case 'ArrowHome':
        focusItem(0);
        break;
      case 'End':
      case 'ArrowEnd':
        focusItem(menuItems.length - 1);
        break;
      case 'Enter':
      case 'Space':
        // Focus and select the item
        focusItem(index);
        setSelectedItem(index);
        // If we're to close the menu on selection (default) then do so
        if (closeOnSelect) {
          setOpened(false);
          focusTriggerButton();
        }
        break;
      case 'Escape':
        setOpened(false);
        focusTriggerButton();
        break;
      case 'Tab':
        // Trap tabs while capturing these menu events
        if (typeof evOrString !== 'string') {
          evOrString.preventDefault();
        }
        break;
      default:
        return;
    }
    if (typeof evOrString !== 'string') {
      evOrString.preventDefault();
    }
  };

  const onTriggerButtonKeyDown = (e) => {
    switch (e.key) {
      case 'Down':
      case 'ArrowDown':
        // If not expanded and we haven't previously selected an item other then first item
        // puts focus on first item in menu list. Otherwise,
        if (!expanded) {
          setOpened(true);
          afterOpened();
          e.preventDefault();
        }
        break;
      case 'Escape':
        if (expanded) {
          setOpened(false);
          focusTriggerButton();
        }
        break;
      default:
      // Noop
    }
  };

  const onTriggerButtonClicked = () => {
    // toggled is local reference to !expanded since setExpanded is async (avoids race condition)
    const toggled = !expanded;
    setOpened(toggled);
    setTimeout(() => {
      if (toggled) {
        afterOpened();
      } else if (closeOnSelect) {
        // If we're to close the menu on selection (default) then do so
        setOpened(false);
        focusTriggerButton();
      }
    }, 10);
  };

  $: menuItemClasses = (isSelected) => {
    return [
      `menu-item`,
      itemClasses,
      isSelected ? "menu-item-selected" : "",
    ].filter((klass) => klass.length).join(" ");
  };

  $: onMenuItemClicked = (index) => {
    setSelectedItem(index);
    if (closeOnSelect) {
      setOpened(false);
      focusTriggerButton();
    }
  };
</script>
<div bind:this={rootRef} class="menu">
  <button
    bind:this={triggerRef}
    class={triggerClasses}
    aria-haspopup="true"
    aria-expanded={expanded}
    on:keydown={onTriggerButtonKeyDown}
    on:click={onTriggerButtonClicked}
  >
    {menuTitle}
    <span class="menu-icon" aria-hidden="true">
      {icon}
    </span>
  </button> 
  <div class="menu-items" id={id} role="menu" hidden={!expanded}>
    {#each menuItems as item, i}
      <svelte:component
        this={item.menuItemComponent}
        bind:this={menuItemRefs[i]}
        classes={menuItemClasses(selectedItem === i)}
        isSelected={selectedItem === i}
        disabled={item.isDisabled}
        on:click={onMenuItemClicked(i)}
        on:keydown={(ev) => onMenuItemKeyDown(ev, i)}
      >
      {item.label}
    </svelte:component>
    {/each}
  </div> 
</div> 
<style>
.menu {
  display: inline-block;
  position: relative;
}

:is(.menu-items, .menu-items-right) {
  position: absolute;
  margin-block-start: var(--fluid-6);
  background-color: white;
  z-index: 10;
}

.menu-items {
  right: initial;
  left: 0;
}

.menu-items-right {
  left: initial;
  right: 0;
}

</style>
