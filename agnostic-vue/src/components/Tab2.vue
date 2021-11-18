<template>
  <div
    class="tab-content"
    v-show="title === selectedTitle"
    role="tabpanel"
    tabindex="0"
  >
    <slot name="tab1" />
    <slot name="panel1" />
    <slot name="tab2" />
    <slot name="panel2" />
  </div>
</template>

<script>
// import { inject } from "vue";
// export default {
//   props: {
//     title: {
//       type: String,
//       required: true,
//     },
//   },
//   setup() {
//     const selectedTitle = inject("selectedTitle");
//     return {
//       selectedTitle,
//     };
//   },
// };

import { ref, provide, onBeforeUpdate, onUpdated } from "vue";
export default {
  setup(props, { slots }) {
    // TODO -- if we use tabSlotName and panelSlotName there shouldn't be
    // a need to have a title since it will be in the custom button tab

    // Array of tab title refs from <Tab title="foo">... children
    console.log("slots prop: ", slots);
    const slotRefs = ref(slots);
    console.log("slot refs: ", slotRefs);
    // const tabTitles = ref(slots.default().map((tab) => tab.props.title));

    // Tracks currently active tab title
    const selectedSlot = ref(slotRefs.value[0]);
    provide("selectedSlot", selectedSlot);

    // https://v3.vuejs.org/guide/migration/array-refs.html
    let tabButtonRefs = [];
    const setTabButtonRefs = (el) => {
      if (el) {
        tabButtonRefs.push(el);
      }
    };
    onBeforeUpdate(() => {
      tabButtonRefs = [];
    });
    onUpdated(() => {
      console.log(tabButtonRefs);
    });

    return {
      // setTabButtonRefs,
      // tabButtonRefs,
      selectedSlot,
      slotRefs,
    };
  },
};
</script>
