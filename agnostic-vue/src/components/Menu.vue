<template>
  <div
    ref="rootRef"
    :class="styles['menu']"
  >
    <MenuTrigger
      ref="childRef"
      :menu-title="menuTitle"
      :type="type"
      :size="size"
      :is-expanded="expanded"
      :is-disabled="isDisabled"
      :is-bordered="isBordered"
      :is-rounded="isRounded"
      @trigger-keydown="onTriggerButtonKeyDown($event)"
      @trigger-click="onTriggerButtonClicked()"
    >
      <template #icon>
        <slot name="icon" />
      </template>
    </MenuTrigger>
    <div
      :class="menuItemsClasses()"
      :id="id"
      role="menu"
      :hidden="!expanded"
    >
      <button
        v-for="(item, index) of menuItemSlotNames"
        :id="item"
        :key="item"
        :ref="setMenuItemRefs"
        :class="menuItemClasses(selectedItem === index)"
        :isSelected="selectedItem === index"
        :disabled="isItemDisabled(item)"
        @click="onMenuItemClicked(index)"
        @keydown="(ev) => onMenuItemKeyDown(ev, index)"
      >
        <slot :name="item" />
      </button>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref, onMounted, onUnmounted, useCssModule, useSlots } from "vue";
import MenuTrigger from "./MenuTrigger.vue";
export interface MenuProps {
  id: string;
  type?: "simple" | "kebab" | "hamburger" | "meatball";
  size?: "small" | "large" | "";
  menuTitle: string;
  isDisabled?: boolean;
  isItemsRight?: boolean;
  disabledItems?: string[];
  isBordered?: boolean;
  isRounded?: boolean;
  closeOnSelect?: boolean;
  closeOnClickOutside?: boolean;
}

const styles = useCssModule();

const emit = defineEmits(["open", "close"]);

const props = withDefaults(defineProps<MenuProps>(), {
  type: "simple",
  size: "",
  // Array for providing individual items(s) that should be disabled
  // Caller needs to use the template name of the corresponding item
  // e.g. ['menuitem-foo', 'menuitem-bar']
  disabledItems: () => [],
  closeOnSelect: true,
  closeOnClickOutside: true,
});

// References aka bindings
let rootRef = ref<InstanceType<typeof HTMLDivElement> | null>(null);
let childRef = ref<InstanceType<typeof MenuTrigger> | null>(null);

const menuItemRefs = ref([] as Array<any>);
const setMenuItemRefs = (el) => {
  if (el) {
    menuItemRefs.value.push(el);
  }
};

// State management
let expanded = ref(false);
const setExpanded = (b) => (expanded.value = b);

let selectedItem = ref(-1);
const setSelectedItem = (n) => (selectedItem.value = n);

const setOpened = (open) => {
  if (open) {
    emit("open", selectedItem.value);
  } else {
    emit("close");
  }
  setExpanded(open);
};

/**
 * Precondition: consumer must pass corresponding named templates
 * prefixed with menuitem- e.g. menuitem-foo menuitem-bar etc.
 */
const slots = useSlots();
const menuItemSlotNames = Object.keys(slots).filter((name) =>
  name.startsWith("menuitem-")
);

// Focus management
const focusItem = (index: number, direction?: "asc" | "desc") => {
  let i = index;
  if (direction === "asc") {
    i += 1;
  } else if (direction === "desc") {
    i -= 1;
  }

  // Circular navigation
  //
  // If we've went beyond "start" circle around to last
  if (i < 0) {
    i = menuItemSlotNames.length - 1;
  } else if (i >= menuItemSlotNames.length) {
    // We've went beyond "last" so circle around to first
    i = 0;
  }

  const nextMenuItem = menuItemRefs.value[i];

  if (nextMenuItem) {
    // Edge case: We hit a tab button that's been disabled. If so, we recurse, but
    // only if we've been supplied a `direction`. Otherwise, nothing left to do.
    if (nextMenuItem.disabled && direction) {
      // Retry with new `i` index going in same direction
      focusItem(i, direction);
    } else {
      // Note that .focus is available here as a result of agnostic-svelte/src/lib/components/Menu/MenuItem.svelte
      // maintaining its own reference to the native <button> element and then exposing itw own export function focus
      nextMenuItem.focus();
    }
  }
};

const focusTriggerButton = () => {
  childRef?.value?.triggerRef?.focus();
};

const isInside = (el) => {
  if (rootRef) {
    const children = rootRef.value?.querySelectorAll("*");
    if (children) {
      for (let i = 0; i < children.length; i += 1) {
        const child = children[i];
        if (child && el === child) {
          return true;
        }
      }
    }
  }
  return false;
};

const clickedOutside = (ev) => {
  if (expanded.value && props.closeOnClickOutside) {
    if (!isInside(ev.target)) {
      setExpanded(false);
      focusTriggerButton();
    }
  }
};

onMounted(() => {
  if (typeof window !== "undefined") {
    document.addEventListener("click", clickedOutside);
  }
});

onUnmounted(() => {
  if (typeof window !== "undefined") {
    document.removeEventListener("click", clickedOutside);
  }
});

// CSS Classes
let triggerSizeClasses;
let itemSizeClasses;
switch (props.size) {
  case "small":
    triggerSizeClasses = styles["menu-trigger-small"];
    itemSizeClasses = styles["menu-item-small"];
    break;
  case "large":
    triggerSizeClasses = styles["menu-trigger-large"];
    itemSizeClasses = styles["menu-item-large"];
    break;
  default:
    triggerSizeClasses = "";
    itemSizeClasses = "";
}

const triggerClasses = {
  [styles["menu-trigger"]]: true,
  [triggerSizeClasses]: true,
  [styles["menu-trigger-bordered"]]: props.isBordered,
  [styles["menu-trigger-rounded"]]: props.isRounded,
};

const menuItemsClasses = () => {
  return {
    [styles["menu-items"]]: !props.isItemsRight,
    [styles["menu-items-right"]]: !!props.isItemsRight,
  };
};

const menuItemClasses = (isSelected) => {
  return {
    [styles["menu-item"]]: true,
    [styles["menu-item-selected"]]: isSelected,
    [itemSizeClasses]: true,
    [styles["menu-item-rounded"]]: props.isRounded,
  };
};

const afterOpened = () => {
  requestAnimationFrame(() => {
    // If selectedItem < 1 probably hasn't been opened before (or happens to be on
    // first item). Otherwise, might be "reopening" and has previously selected item
    if (selectedItem.value < 1) {
      setSelectedItem(0);
      onMenuItemKeyDown("Home", 0);
    } else {
      focusItem(selectedItem.value);
      setSelectedItem(selectedItem.value);
    }
  });
};

const onMenuItemKeyDown = (evOrString, index) => {
  const key = typeof evOrString === "string" ? evOrString : evOrString.key;
  switch (key) {
    case "Up": // These first cases are IEEdge :(
    case "ArrowUp":
      focusItem(index, "desc");
      break;
    case "Down":
    case "ArrowDown":
      focusItem(index, "asc");
      break;
    case "Home":
    case "ArrowHome":
      focusItem(0);
      break;
    case "End":
    case "ArrowEnd":
      focusItem(menuItemSlotNames.length - 1);
      break;
    case "Enter":
    case "Space":
      // Focus and select the item
      focusItem(index);
      setSelectedItem(index);
      // If we're to close the menu on selection (default) then do so
      if (props.closeOnSelect) {
        setOpened(false);
        focusTriggerButton();
      }
      break;
    case "Escape":
      setOpened(false);
      focusTriggerButton();
      break;
    case "Tab":
      // Trap tabs while capturing these menu events
      if (typeof evOrString !== "string") {
        evOrString.preventDefault();
      }
      break;
    default:
      return;
  }
  if (typeof evOrString !== "string") {
    evOrString.preventDefault();
  }
};

const isItemDisabled = (menuItemSlotName) => {
  // First we check props.isDisabled which signifies we
  // should disable "all" menu items for menu
  if (props.isDisabled) {
    return true;
  }

  // Next check props.disabledItems — an array for providing
  // individual item(s) we should disable (by item slot name)
  if (props.disabledItems && props.disabledItems.includes(menuItemSlotName)) {
    return true;
  }
};
const onTriggerButtonKeyDown = (e: KeyboardEvent) => {
  switch (e.key) {
    case "Down":
    case "ArrowDown":
      // If not expanded and we haven't previously selected an item other then first item
      // puts focus on first item in menu list. Otherwise,
      if (!expanded.value) {
        setOpened(true);
        afterOpened();
        e.preventDefault();
      }
      break;
    case "Escape":
      if (expanded.value) {
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
  const toggled = !expanded.value;
  setOpened(toggled);
  setTimeout(() => {
    if (toggled) {
      afterOpened();
    } else if (props.closeOnSelect) {
      // If we're to close the menu on selection (default) then do so
      setOpened(false);
      focusTriggerButton();
    }
  }, 10);
};

const onMenuItemClicked = (index) => {
  setSelectedItem(index);
  if (props.closeOnSelect) {
    setOpened(false);
    focusTriggerButton();
  }
};
</script>
<style module>
.menu {
  display: inline-flex;
  position: relative;
  background-color: inherit;
}

:is(.menu-items, .menu-items-right) {
  position: absolute;
  background-color: var(--agnostic-light);
  margin-block-start: var(--fluid-6);
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

.menu-item {
  --menu-item-background-color: var(--agnostic-menu-item-background-color, inherit);

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
  background-color: var(--menu-item-background-color);
  display: block;
  min-width: 100%;
  white-space: nowrap;
  cursor: default;
}

.menu-item[disabled] {
  background: var(--agnostic-input-disabled-bg, var(--agnostic-disabled-bg)) !important;
  color: var(--agnostic-input-disabled-color, var(--agnostic-disabled-color)) !important;
  cursor: not-allowed !important;
  opacity: 80% !important;
}

.menu-item:focus {
  box-shadow: 0 0 0 var(--agnostic-focus-ring-outline-width) var(--agnostic-focus-ring-color);

  /* Needed for High Contrast mode */
  outline:
    var(--agnostic-focus-ring-outline-width) var(--agnostic-focus-ring-outline-style)
    var(--agnostic-focus-ring-outline-color);
  transition: box-shadow var(--agnostic-timing-fast) ease-out;

  /* In order for the focused element's box-shadow to appear above its siblings we need to
  establish a new stacking context: https://stackoverflow.com/a/28042700 */
  isolation: isolate;
}

.menu-item:not(:first-of-type) {
  border-top: 0;
}

.menu-item-selected {
  color: var(--agnostic-light);
  background-color: var(--agnostic-primary);
  border-color: var(--agnostic-primary);
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
