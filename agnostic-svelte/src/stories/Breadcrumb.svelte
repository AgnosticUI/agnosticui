<style>
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
  content: '\203A';
}

.breadcrumb-item.active {
  color: var(--agnostic-dark);
}

.breadcrumb-slash .breadcrumb-item + .breadcrumb-item::before {
  content: '\0002f';
}

.breadcrumb-arrow .breadcrumb-item + .breadcrumb-item::before {
  content: '\02192';
}

.breadcrumb-bullet .breadcrumb-item + .breadcrumb-item::before {
  content: '\02022';
}

</style>
