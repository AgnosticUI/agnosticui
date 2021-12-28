<template>
  <nav
    :class="paginationContainerClasses"
    :aria-label="ariaLabel"
  >
    <ul :class="paginationClasses">
      <li
        v-if="isFirstLast"
        :class="[paginationItemClass, isOnFirst() ? paginationItemDisabledClass : '']"
      >
        <button
          :class="paginationButtonClass"
          @click.prevent="handleClick(1)"
          :disabled="isOnFirst()"
          :aria-disabled="isOnFirst()"
          aria-label="Goto page 1"
        >
          {{ String.fromCharCode(171) }} {{ navigationLabels.first }}
        </button>
      </li>
      <li :class="[paginationItemClass, isOnFirst() ? paginationItemDisabledClass : '']">
        <button
          :class="paginationButtonClass"
          @click.prevent="handleClick(current - 1)"
          :disabled="isOnFirst()"
          :aria-disabled="isOnFirst()"
          aria-label="Goto previous page"
        >
          {{ String.fromCharCode(8249) }} {{ navigationLabels.previous }}
        </button>
      </li>
      <li
        v-for="page in pages"
        :key="`page-${page}`"
        :class="[paginationItemClass, page === current ? paginationItemsActiveClass : '']"
      >
        <button
          v-if="page === current"
          @click.prevent="handleClick(page)"
          :class="paginationButtonClass"
          type="button"
          aria-current="page"
          :aria-label="`Page ${page}, current page`"
        >
          {{ page }}
        </button>
        <button
          v-else
          @click.prevent="handleClick(page)"
          :class="paginationButtonClass"
          type="button"
          :aria-label="`Goto page ${page}`"
        >
          {{ page }}
        </button>
      </li>

      <li :class="[paginationItemClass, isOnLast() ? paginationItemDisabledClass : '']">
        <button
          :class="paginationButtonClass"
          @click.prevent="handleClick(current + 1)"
          :disabled="isOnLast()"
          :aria-disabled="isOnLast()"
          aria-label="Goto next page"
        >
          {{ navigationLabels.next }} {{ String.fromCharCode(8250) }}
        </button>
      </li>

      <li
        v-if="isFirstLast"
        :class="[paginationItemClass, isOnLast() ? paginationItemDisabledClass : '']"
      >
        <button
          :class="paginationButtonClass"
          @click.prevent="handleClick(getLastPageNumber())"
          :disabled="isOnLast()"
          :aria-disabled="isOnLast()"
          aria-label="Goto last page"
        >
          {{ navigationLabels.last }} {{ String.fromCharCode(187) }}
        </button>
      </li>
    </ul>
  </nav>
</template>

<script>
import { /*ref, computed, */ useCssModule /*, watch */ } from "vue";

// import { usePagination } from "agnostic-helpers/dist/agnostic-helpers.esm";
const defaultLabels = {
  first: "First",
  last: "Last",
  previous: "Previous",
  next: "Next",
};

export default {
  name: "AgPagination",
  props: {
    justify: {
      type: String,
      required: false,
      default: "",
      validator: (value) => ["start", "center", "end", ""].includes(value),
    },
    ariaLabel: {
      type: String,
      required: false,
      default: "pagination",
    },
    current: {
      type: Number,
      required: true,
    },
    pages: {
      type: Array,
      required: true,
    },
    isBordered: {
      type: Boolean,
      required: false,
      default: false,
    },
    isFirstLast: {
      type: Boolean,
      required: false,
      default: true,
    },
    navigationLabels: {
      type: Object,
      default: () => defaultLabels,
    },
  },
  emits: ["update-page"],
  setup(props, { emit }) {
    const styles = useCssModule();

    // TODO convert all these class computations to computed so we can cache 'em

    const paginationContainerClasses = {
      [styles["pagination-container"]]: true,
      [styles[`pagination-${props.justify}`]]: !!props.justify,
    };

    const paginationClasses = {
      [styles["pagination"]]: true,
      [styles["pagination-bordered"]]: !!props.isBordered,
    };

    const paginationButtonClass = styles["pagination-button"];
    const paginationItemClass = styles["pagination-item"];
    const paginationItemsActiveClass = styles["pagination-item-active"];
    const paginationItemDisabledClass = styles["pagination-item-disabled"];

    const isOnFirst = () => {
      return props.current === 1;
    };

    const getLastPageNumber = () => {
      return props.pages[props.pages.length - 1];
    };

    const isOnLast = () => {
      return props.current === getLastPageNumber();
    };

    // TODO need to use a template ref https://v3.vuejs.org/guide/composition-api-template-refs.html
    // to place focus on updates like we did for the react version:
    /*
    const currentButtonRef = useRef<HTMLButtonElement>(null);
    useEffect(() => {
      if (currentButtonRef.current) currentButtonRef.current.focus();
    }, [pages, current, currentButtonRef]);
    */

    const handleClick = (pageNumber) => {
      emit("update-page", pageNumber);
    };

    return {
      handleClick,
      getLastPageNumber,
      isOnFirst,
      isOnLast,
      paginationButtonClass,
      paginationItemClass,
      paginationItemsActiveClass,
      paginationItemDisabledClass,
      paginationClasses,
      paginationContainerClasses,
    };
  },
};
</script>

<style module>
.pagination-container {
  display: flex;
}

.pagination {
  display: flex;
  list-style: none;
}

.pagination-item {
  padding-inline-start: var(--fluid-2);
  padding-inline-end: var(--fluid-2);
}

.pagination-button {
  --agnostic-pagination-button-color: var(--agnostic-primary);

  color: var(--agnostic-pagination-button-color);
  display: inline-block;
  line-height: var(--fluid-20);
  padding-inline-start: var(--fluid-12);
  padding-inline-end: var(--fluid-12);
  padding-block-start: var(--fluid-6);
  padding-block-end: var(--fluid-6);
  border-radius: var(--agnostic-radius);

  /* We need a border set on both hovered and unhovered so it does not jump around */
  border: 1px solid transparent;
  background-color: transparent;
}

.pagination-button:focus {
  box-shadow: 0 0 0 var(--agnostic-focus-ring-outline-width) var(--agnostic-focus-ring-color);

  /* Needed for High Contrast mode */
  outline:
    var(--agnostic-focus-ring-outline-width) var(--agnostic-focus-ring-outline-style)
    var(--agnostic-focus-ring-outline-color);
  transition: box-shadow var(--agnostic-timing-fast) ease-out;
}

@media (prefers-reduced-motion), (update: slow) {
  .pagination-button:focus {
    transition-duration: 0.001ms !important;
  }
}

.pagination-item-disabled {
  cursor: not-allowed;
}

.pagination-button:disabled,
.pagination-item-disabled .pagination-button {
  color: var(--agnostic-pagination-disabled-bg, var(--agnostic-gray-mid-dark));
  opacity: 80%;
  pointer-events: none;
}

.pagination-item-active .pagination-button {
  background-color: var(--agnostic-primary);
  color: var(--agnostic-light);
}

.pagination-bordered .pagination-item-active .pagination-button {
  background-color: unset;
  border: 1px solid var(--agnostic-primary);
  color: var(--agnostic-primary);
}

.pagination-item:hover .pagination-button {
  text-decoration: none;
}

.pagination-item:not(.pagination-item-active):not(.pagination-item-disabled):hover .pagination-button {
  background-color: var(--agnostic-gray-extra-light);
}

.pagination-center {
  justify-content: center;
}

.pagination-start {
  justify-content: flex-start;
}

.pagination-end {
  justify-content: flex-end;
}

</style>
