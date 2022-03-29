<template>
  <div
    ref="rootRef"
    class="menu"
  >
    <button
      ref="triggerRef"
      class={triggerClasses}
      aria-haspopup="true"
      aria-expanded="expanded"
      on:keydown="onTriggerButtonKeyDown"
      on:click="onTriggerButtonClicked"
    >
      {menuTitle}
      <template #icon>
        <span
          class="menu-icon"
          aria-hidden="true"
        >▾</span>
      </template>
    </button>
  </div>
</template>
<script setup>
import { defineProps, ref, onMounted } from "vue";

const props = defineProps({
  id: {
    type: String,
    required: true,
  },
  size: {
    type: String,
    default: "",
    validator(value) {
      return ["small", "large", ""].includes(value);
    },
  },
  menuTitle: {
    type: String,
    default: "",
  },
  // itemSlots: {
  //   type: Array,
  //   default: [],
  // },
  isBordered: {
    type: Boolean,
    required: false,
    default: false,
  },
  isRounded: {
    type: Boolean,
    required: false,
    default: false,
  },
});

// References aka bindings
let rootRef = ref(null);
let triggerRef = ref(null);
const menuItemRefs = ref([]);
const setMenuItemRefs = (el) => {
  if (el) {
    menuItemRefs.value.push(el);
  }
};

// State management
let expanded = false;
const setExpanded = (b) => (expanded = b);
let selectedItem = -1;
const setSelectedItem = (n) => (selectedItem = n);

const setOpened = (open) => {
  if (open && onOpen) {
    onOpen(selectedItem);
  } else if (onClose) {
    onClose();
  }
  setExpanded(open);
};

/**
 * Precondition: consumer must pass corresponding named templates
 * prefixed with menuitem- e.g. menuitem-foo menuitem-bar etc.
 */
const itemSlots = Object.keys(slots).filter((name) =>
  name.startsWith("menuitem-")
);
console.log("MENU ITEMS: ", itemSlots);
</script>

<style module>
</style>
