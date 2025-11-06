<template>
  <section>
    <div class="mbe4">
      <div class="mbe2">
        <h3>Default</h3>
      </div>
      <VueBreadcrumb
        :items="items"
        @breadcrumb-click="handleClick"
      />
    </div>
    <div class="mbe4">
      <div class="mbe2">
        <h3>Types</h3>
      </div>
      <VueBreadcrumb
        type="slash"
        :items="items"
        @breadcrumb-click="handleClick"
      />
      <VueBreadcrumb
        type="bullet"
        :items="items"
        @breadcrumb-click="handleClick"
      />
      <VueBreadcrumb
        type="arrow"
        :items="items"
        @breadcrumb-click="handleClick"
      />
      <VueBreadcrumb
        primary
        type="arrow"
        :items="items"
        @breadcrumb-click="handleClick"
      />
    </div>

    <div class="mbe4">
      <div class="mbe2">
        <h3>CSS Shadow Parts Customization</h3>
        <p style="margin-top: 0.5rem; margin-bottom: 1rem; color: var(--vp-c-text-2);">
          Breadcrumb can be customized using CSS Shadow Parts:
          <code>::part(ag-breadcrumb-item)</code>,
          <code>::part(ag-breadcrumb-item-link)</code>,
          <code>::part(ag-breadcrumb-item-current)</code>. The following are meant solely to show how to utilize CSS shadow parts to create custom breadcrumb styles. They are NOT meant to represent best practices or good taste in breadcrumb design!
        </p>
      </div>

      <div style="display: flex; flex-direction: column; gap: 2rem;">
        <div>
          <h4 class="mbe4">Gradient Style</h4>
          <div class="mbe3"></div>
          <VueBreadcrumb
            class="custom-gradient-breadcrumb"
            :items="items"
          />
        </div>
        <div>
          <h4 class="pbe4">Neon Glow Effect</h4>
          <div class="mbe3"></div>
          <VueBreadcrumb
            class="custom-neon-breadcrumb"
            :items="items"
          />
        </div>
        <div>
          <h4>Minimal with Underline</h4>
          <div class="mbe3"></div>
          <VueBreadcrumb
            class="custom-minimal-breadcrumb"
            :items="items"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import VueBreadcrumb from "agnosticui-core/breadcrumb/vue";
export default {
  name: "BreadcrumbExamples",
  components: { VueBreadcrumb },
  data() {
    return {
      items: [
        { label: "Home", href: "#" },
        { label: "About", href: "#about" },
        { label: "Services", href: "#services" },
        { label: "Products", href: "#products" },
      ],
    };
  },
  methods: {
    handleClick(event) {
      console.log(
        `VueBreadcrumb -> handleClick -- label: ${event.item.label}, href: ${event.item.href}`
      );
    },
  },
};
</script>

<style scoped>
/* Gradient breadcrumb style */
.custom-gradient-breadcrumb::part(ag-breadcrumb-item-link) {
  color: #667eea;
  font-weight: 600;
  text-decoration: none;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  transition: all 0.3s ease;
  background: linear-gradient(
    135deg,
    transparent 0%,
    rgba(102, 126, 234, 0.1) 100%
  );
}

.custom-gradient-breadcrumb::part(ag-breadcrumb-item-link):hover {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(102, 126, 234, 0.3);
}

.custom-gradient-breadcrumb::part(ag-breadcrumb-item-current) {
  color: #764ba2;
  font-weight: 700;
  padding: 0.5rem 1rem;
}

/* Neon glow breadcrumb */
.custom-neon-breadcrumb::part(ag-breadcrumb-item-link) {
  color: #0ff;
  font-weight: 600;
  text-decoration: none;
  padding: 0.5rem 1rem;
  border: 2px solid transparent;
  border-radius: 4px;
  transition: all 0.3s ease;
}

.custom-neon-breadcrumb::part(ag-breadcrumb-item-link):hover {
  border-color: #0ff;
  box-shadow: 0 0 10px #0ff, inset 0 0 5px rgba(0, 255, 255, 0.2);
  text-shadow: 0 0 5px #0ff;
}

.custom-neon-breadcrumb::part(ag-breadcrumb-item-current) {
  color: #0ff;
  font-weight: 700;
  text-shadow: 0 0 8px #0ff;
  padding: 0.5rem 1rem;
}

/* Minimalist breadcrumb */
.custom-minimal-breadcrumb::part(ag-breadcrumb-item-link) {
  color: var(--vp-c-text-1);
  font-weight: 500;
  text-decoration: none;
  padding: 0.25rem 0.75rem;
  border-bottom: 2px solid transparent;
  transition: border-color 0.2s ease;
}

.custom-minimal-breadcrumb::part(ag-breadcrumb-item-link):hover {
  border-bottom-color: var(--vp-c-brand-1);
}

.custom-minimal-breadcrumb::part(ag-breadcrumb-item-current) {
  color: var(--vp-c-brand-1);
  font-weight: 700;
  padding: 0.25rem 0.75rem;
  border-bottom: 2px solid var(--vp-c-brand-1);
}

/* Pill-style breadcrumb */
.custom-pill-breadcrumb::part(ag-breadcrumb-item-link) {
  color: #333;
  font-weight: 600;
  text-decoration: none;
  padding: 0.5rem 1.25rem;
  border-radius: 50px;
  background: #e5e7eb;
  transition: all 0.2s ease;
}

.custom-pill-breadcrumb::part(ag-breadcrumb-item-link):hover {
  background: #d1d5db;
  transform: scale(1.05);
}

.custom-pill-breadcrumb::part(ag-breadcrumb-item-current) {
  color: white;
  font-weight: 700;
  padding: 0.5rem 1.25rem;
  border-radius: 50px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  box-shadow: 0 4px 8px rgba(102, 126, 234, 0.3);
}
</style>
