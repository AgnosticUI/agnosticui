<template>
  <div class="motion-utilities-demo">
    
    <!-- Pattern 1: Automatic Parent Synchronization Demo -->
    <div class="demo-section mbe4">
      <h3 class="mbe2">1. Automatic Parent Synchronization</h3>
      <p class="demo-desc mbe3">
        Hover the button. The slotted settings icon automatically synchronizes to the button's 
        long <code>xl</code> duration and custom <code>spring-lg</code> physics curve.
      </p>
      <div class="render-box">
        <VueButtonFx fx="bounce" fx-speed="xl" fx-ease="spring-lg" variant="primary">
          Settings
          <SettingsIcon class="ag-fx-inherit-bounce icon-spacing" />
        </VueButtonFx>
      </div>
    </div>
    <!-- Pattern 2: The Multi-Element Staggered Orchestra Pattern -->
    <div class="demo-section mbe4">
      <h3 class="mbe2">2. Multi-Element Staggered Orchestra</h3>
      <p class="demo-desc mbe3">
        A single component container acting as a motion context provider can drive entirely different, 
        synchronized physics paths simultaneously across multiple light-DOM slotted nodes on hover.
      </p>
      <div class="render-box">
        <VueButtonFx fx="pulse" fx-speed="lg" fx-ease="spring-md" variant="success">
          <ZapIcon class="icon-spacing-left ag-fx-inherit-pulse" />
          <span>Deploy Action Completed</span>
          <CheckIcon class="ag-fx-inherit-bounce icon-spacing" />
        </VueButtonFx>
      </div>
    </div>

    <!-- Pattern 3: The "Fully Divorced" Custom Layout Orchestration (The Showstopper) -->
    <div class="demo-section">
      <h3 class="mbe2">3. Component-Free Layout Orchestration (Fully Divorced)</h3>
      <p class="demo-desc mbe3">
        This card layout uses pure custom application elements completely independent of 
        AgnosticUI Web Components. It uses <code>.ag-fx-trigger</code> to establish explicit interaction 
        boundaries, letting standard markup Point into the global animation engine seamlessly.
      </p>
      <div class="render-box">
        
        <div class="ag-fx-trigger advanced-product-card">
          <div class="badge-layer">
            <!-- This badge pulses dynamically on container hover -->
            <span class="ag-fx-inherit-jelly custom-discount-badge">PROMO</span>
          </div>
          
          <div class="product-visual">
            <!-- The visual element pops organically on container active click -->
            <SparklesIcon class="ag-fx-inherit-pulse visual-icon" />
          </div>

          <div class="product-details mbe3">
            <span class="product-title">Next-Gen Interface Track</span>
            <span class="product-price">$49.00</span>
          </div>

          <!-- Active state press-pop trigger built cleanly onto a standard anchor tag -->
          <a href="#buy" class="ag-fx-inherit-press-pop product-buy-btn" @click.prevent>
            Quick Add
            <HeartIcon class="ag-fx-inherit-bounce btn-inner-icon" />
          </a>
        </div>

      </div>
    </div>

  </div>
</template>

<script setup>
import { VueButtonFx } from 'agnosticui-core/button-fx/vue';
import { 
  Settings as SettingsIcon, 
  Zap as ZapIcon, 
  Check as CheckIcon, 
  Sparkles as SparklesIcon, 
  Heart as HeartIcon 
} from 'lucide-vue-next';
</script>

<style scoped>
.motion-utilities-demo {
  padding: 1rem;
}
.demo-desc {
  font-size: 0.9rem;
  color: var(--ag-text-secondary);
}
.render-box {
  padding: 2rem;
  background: var(--ag-background-secondary);
  border: 1px solid var(--ag-border);
  border-radius: var(--ag-radius-lg);
  display: flex;
  justify-content: flex-start;
  align-items: center;
}

.icon-spacing {
  margin-inline-start: var(--ag-space-2, 0.5rem);
  width: 1.25rem;
  height: 1.25rem;
}
.icon-spacing-left {
  margin-inline-end: var(--ag-space-2, 0.5rem);
  width: 1.25rem;
  height: 1.25rem;
}

/* ==========================================================================
   ADVANCED PRODUCT CARD STYLING (FULLY DIVORCED CUSTOM LAYOUT)
   ========================================================================== */
.advanced-product-card {
  width: 100%;
  max-width: 320px;
  padding: 1.25rem;
  background: var(--ag-background-primary);
  border: 1px solid var(--ag-border);
  border-radius: var(--ag-radius-lg);
  position: relative;
  box-shadow: var(--ag-shadow-sm);
  transition: border-color 0.25s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.25s ease;
}

/* Dynamic custom properties injected strictly when the orchestrator is active */
.advanced-product-card:hover {
  border-color: var(--ag-primary);
  box-shadow: var(--ag-shadow-xl);
  --ag-fx-duration: var(--ag-fx-duration-lg);
  --ag-fx-ease: var(--ag-fx-ease-spring-lg);
}

.badge-layer {
  display: flex;
  justify-content: flex-end;
  margin-block-end: 0.5rem;
}
.custom-discount-badge {
  background: var(--ag-primary-background);
  color: var(--ag-primary-text);
  font-size: 0.75rem;
  font-weight: 700;
  padding: 0.25rem 0.5rem;
  border-radius: var(--ag-radius-sm);
}

.product-visual {
  height: 140px;
  background: var(--ag-background-secondary);
  border-radius: var(--ag-radius-md);
  display: flex;
  justify-content: center;
  align-items: center;
  margin-block-end: 1rem;
}
.visual-icon {
  width: 3rem;
  height: 3rem;
  color: var(--ag-primary);
}

.product-details {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}
.product-title {
  font-weight: 600;
  font-size: 1rem;
  color: var(--ag-text-primary);
}
.product-price {
  font-size: 0.9rem;
  font-weight: 700;
  color: var(--ag-text-secondary);
}

.product-buy-btn {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  width: 100%;
  padding: 0.75rem;
  background: var(--ag-text-primary);
  color: var(--ag-background-primary) !important;
  text-decoration: none;
  font-size: 0.875rem;
  font-weight: 600;
  border-radius: var(--ag-radius-md);
  transition: background-color 0.2s ease;
}
.product-buy-btn:hover {
  background: var(--ag-primary);
}
.btn-inner-icon {
  width: 1rem;
  height: 1rem;
}
</style>
