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

    <!-- Pattern 2: Custom Layout Orchestration Demo -->
    <div class="demo-section">
      <h3 class="mbe2">2. Custom Layout Orchestration</h3>
      <p class="demo-desc mbe3">
        Hover anywhere inside the card boundary below. The <code>.ag-fx-trigger</code> class coordinates 
        a smooth, hardware-accelerated pulse animation on the status icon.
      </p>
      <div class="render-box">
        <div class="ag-fx-trigger my-custom-dashboard-card">
          <div class="card-content">
            <span class="card-title">Server Status</span>
            <p class="card-text">All systems functional. Hover to ping micro-interaction loop.</p>
          </div>
          <!-- Slotted icon pointing straight to the pulse engine track -->
          <ZapIcon class="ag-fx-inherit-pulse status-icon" />
        </div>
      </div>
    </div>

  </div>
</template>

<script setup>
import { VueButtonFx } from 'agnosticui-core/button-fx/vue';
import { Settings as SettingsIcon, Zap as ZapIcon } from 'lucide-vue-next';
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

/* Icon layout rules matching your standard components */
.icon-spacing {
  margin-inline-start: var(--ag-space-2, 0.5rem);
  width: 1.25rem;
  height: 1.25rem;
}

/* Custom dashboard card styling */
.my-custom-dashboard-card {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 400px;
  padding: 1.5rem;
  border: 1px solid var(--ag-border);
  border-radius: var(--ag-radius-md);
  background: var(--ag-background-primary);
  transition: border-color 0.2s ease, box-shadow 0.2s ease;
  cursor: pointer;
}
.my-custom-dashboard-card:hover {
  border-color: var(--ag-primary);
  box-shadow: var(--ag-shadow-md);
}
.card-title {
  display: block;
  font-weight: 600;
  font-size: 1.1rem;
  margin-block-end: 0.25rem;
}
.card-text {
  font-size: 0.85rem;
  color: var(--ag-text-secondary);
  margin: 0;
}
.status-icon {
  width: 2rem;
  height: 2rem;
  color: var(--ag-warning);
}
</style>
