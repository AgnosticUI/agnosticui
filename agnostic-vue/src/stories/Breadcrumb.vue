<template>
  <nav aria-label="breadcrumbs">
    <ol :class="breadcrumbClasses">
      <li
        v-for="(route, index) of this.routes"
        :key="index"
        :class="crumbClasses(index)"
      >
        <a
          v-if="index !== routes.length - 1 && route.url"
          href={route.url}
        >{{route.label}}</a>
        <span v-else>{{route.label}}</span>
      </li>
    </ol>
  </nav>
</template>
<script>
export default {
  name: "ag-breadcrumb",
  props: {
    routes: {
      type: Array,
      required: true,
      validator: (value) => {
        let isValid = true;
        value.forEach(
          (obj) =>
            (isValid = Object.keys(obj).every((key) =>
              ["label", "url"].includes(key)
            ))
        );
        if (!isValid) {
          console.warn(
            "routes argument must be an array of objects with shape: {label:..., url:...}"
          );
        }
        return isValid;
      },
    },
    type: {
      type: String,
      default: "",
      required: false,
      validator: (value) => ["arrow", "slash", "bullet", ""].includes(value),
    },
  },
  methods: {
    isLast(crumbRoutes, idx) {
      return idx === crumbRoutes.length - 1;
    },
    crumbClasses(index) {
      console.log("yo?");
      const isLastCrumb = this.isLast(this.routes, index);
      return {
        [this.$style["breadcrumb-item"]]: true,
        [this.$style.active]: isLastCrumb,
      };
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
