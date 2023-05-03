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
          :href="route.url"
        >{{ route.label }}</a>
        <span v-else>{{ route.label }}</span>
      </li>
    </ol>
  </nav>
</template>
<script setup lang="ts">
import { computed, useCssModule } from "vue";
import { BreadcrumbRoute, BreadcrumbType } from "./BreadcrumbApi";

export interface BreadcrumbProps {
  routes: BreadcrumbRoute[];
  type?: BreadcrumbType;
}

const styles = useCssModule();

const props = withDefaults(defineProps<BreadcrumbProps>(), { type: "" });

const breadcrumbClasses = computed(() => ({
  [styles.breadcrumb]: true,
  [styles[`breadcrumb-${props.type}`]]: !!props.type,
}));

const isLast = (crumbRoutes, idx) => {
  return idx === crumbRoutes.length - 1;
};

const crumbClasses = (index) => {
  const isLastCrumb = isLast(props.routes, index);
  return {
    [styles["breadcrumb-item"]]: true,
    [styles.active]: isLastCrumb,
  };
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
