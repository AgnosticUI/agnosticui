<template>
  <nav aria-label="breadcrumbs">
    <ol :class="breadcrumbClasses">
      <li
        v-for="(route, index) of routes"
        :key="index"
        :class="crumbClasses(index)"
      >
        <a
          v-if="index !== routes.length - 1 && route.url"
          href="{route.url}"
        >{{ route.label }}</a>
        <span v-else>{{ route.label }}</span>
      </li>
    </ol>
  </nav>
</template>
<script>
export default {
  name: "AgBreadcrumb",
  props: {
    routes: {
      type: Array,
      required: true,
    },
    type: {
      type: String,
      default: "",
      required: false,
      validator: (value) => ["arrow", "slash", "bullet", ""].includes(value),
    },
  },
  computed: {
    breadcrumbClasses() {
      return {
        [this.$style.breadcrumb]: true,
        [this.$style[`breadcrumb-${this.type}`]]: !!this.type,
      };
    },
  },
  methods: {
    isLast(crumbRoutes, idx) {
      return idx === crumbRoutes.length - 1;
    },
    crumbClasses(index) {
      const isLastCrumb = this.isLast(this.routes, index);
      return {
        [this.$style["breadcrumb-item"]]: true,
        [this.$style.active]: isLastCrumb,
      };
    },
  },
};
</script>
<style module>
.breadcrumb {
  display: flex;
  flex-wrap: wrap;
  padding: 0;
  white-space: nowrap;
  list-style: none;
}

.breadcrumb-item + .breadcrumb-item {
  padding-inline-start: var(--fluid-6);
}

.breadcrumb-item + .breadcrumb-item::before {
  padding-inline-end: var(--fluid-6);
  color: var(--agnostic-gray-mid-dark);
  content: "\203A";
}

.breadcrumb-item.active {
  color: var(--agnostic-dark);
}

.breadcrumb-slash .breadcrumb-item + .breadcrumb-item::before {
  content: "\0002f";
}

.breadcrumb-arrow .breadcrumb-item + .breadcrumb-item::before {
  content: "\02192";
}

.breadcrumb-bullet .breadcrumb-item + .breadcrumb-item::before {
  content: "\02022";
}
</style>
