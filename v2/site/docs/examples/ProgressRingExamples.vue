<template>
  <section>
    <div class="mbe4">
      <h3>Default Progress Ring</h3>
      <p class="mbs2 mbe3">A basic progress ring component.</p>
      <VueProgressRing :value="75" />
    </div>

    <div class="mbe4">
      <h3>Different Progress Values</h3>
      <p class="mbs2 mbe3">Progress rings showing various completion levels.</p>
      <div style="display: flex; gap: 2rem; align-items: center; flex-wrap: wrap;">
        <VueProgressRing :value="0" />
        <VueProgressRing :value="25" />
        <VueProgressRing :value="50" />
        <VueProgressRing :value="75" />
        <VueProgressRing :value="100" />
      </div>
    </div>

    <div class="mbe4">
      <h3>Sizes</h3>
      <p class="mbs2 mbe3">Three size options: small, medium (default), and large.</p>
      <div style="display: flex; gap: 2rem; align-items: center; flex-wrap: wrap;">
        <VueProgressRing
          size="small"
          :value="60"
        />
        <VueProgressRing
          size="medium"
          :value="60"
        />
        <VueProgressRing
          size="large"
          :value="60"
        />
      </div>
    </div>

    <div class="mbe4">
      <h3>Variants</h3>
      <p class="mbs2 mbe3">Color variants for different contexts.</p>
      <div style="display: flex; gap: 2rem; align-items: center; flex-wrap: wrap;">
        <div style="text-align: center;">
          <VueProgressRing
            variant="primary"
            :value="70"
          />
          <p style="margin-top: 0.5rem; font-size: 0.875rem;">Primary</p>
        </div>
        <div style="text-align: center;">
          <VueProgressRing
            variant="success"
            :value="70"
          />
          <p style="margin-top: 0.5rem; font-size: 0.875rem;">Success</p>
        </div>
        <div style="text-align: center;">
          <VueProgressRing
            variant="warning"
            :value="70"
          />
          <p style="margin-top: 0.5rem; font-size: 0.875rem;">Warning</p>
        </div>
        <div style="text-align: center;">
          <VueProgressRing
            variant="danger"
            :value="70"
          />
          <p style="margin-top: 0.5rem; font-size: 0.875rem;">Danger</p>
        </div>
        <div style="text-align: center;">
          <VueProgressRing
            variant="info"
            :value="70"
          />
          <p style="margin-top: 0.5rem; font-size: 0.875rem;">Info</p>
        </div>
      </div>
    </div>

    <div class="mbe4">
      <h3>Custom Labels</h3>
      <p class="mbs2 mbe3">Override the default slot to display custom content.</p>
      <div style="display: flex; gap: 2rem; align-items: center; flex-wrap: wrap;">
        <VueProgressRing :value="45">
          <span style="font-size: 0.875rem; font-weight: bold;">45/100</span>
        </VueProgressRing>
        <VueProgressRing
          :value="80"
          variant="success"
        >
          <span style="font-size: 1.25rem;">✓</span>
        </VueProgressRing>
        <VueProgressRing
          :value="30"
          variant="warning"
        >
          <span style="font-size: 0.75rem; text-align: center;">Low<br />Storage</span>
        </VueProgressRing>
      </div>
    </div>

    <div class="mbe4">
      <h3>No Animation</h3>
      <p class="mbs2 mbe3">Disable the fill animation with the <code>noAnimation</code> prop.</p>
      <VueProgressRing
        :value="65"
        :no-animation="true"
      />
    </div>

    <div class="mbe4">
      <h3>Animated Progress</h3>
      <p class="mbs2 mbe3">Progress ring with dynamic value updates.</p>
      <div>
        <VueProgressRing
          :value="animatedValue"
          variant="info"
        />
        <div class="mbs6">
          <VueButton
            @click="startAnimation"
            variant="primary"
            bordered
            grouped
          >
            Start
          </VueButton>
          <VueButton
            @click="resetAnimation"
            variant="primary"
            bordered
            grouped
          >
            Reset
          </VueButton>
        </div>
      </div>
    </div>

    <div class="mbe4">
      <h3>CSS Shadow Parts Customization</h3>
      <p class="mbs2 mbe3">
        Use CSS Shadow Parts to customize the component's appearance.
      </p>
      <VueProgressRing
        :value="85"
        class="custom-ring"
      />
    </div>

    <div class="mbe4">
      <h3>Real-world Example</h3>
      <p class="mbs2 mbe3">Progress rings in a dashboard-style layout.</p>
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: 1.5rem;">
        <div style="padding: 1rem; border: 1px solid #e0e0e0; border-radius: 8px; text-align: center;">
          <h4 style="margin: 0 0 1rem 0; font-size: 0.875rem; color: #666;">Tasks Complete</h4>
          <VueProgressRing
            :value="85"
            variant="success"
          >
            <strong>17/20</strong>
          </VueProgressRing>
        </div>
        <div style="padding: 1rem; border: 1px solid #e0e0e0; border-radius: 8px; text-align: center;">
          <h4 style="margin: 0 0 1rem 0; font-size: 0.875rem; color: #666;">Storage Used</h4>
          <VueProgressRing
            :value="68"
            variant="warning"
          >
            <strong>68GB</strong>
          </VueProgressRing>
        </div>
        <div style="padding: 1rem; border: 1px solid #e0e0e0; border-radius: 8px; text-align: center;">
          <h4 style="margin: 0 0 1rem 0; font-size: 0.875rem; color: #666;">CPU Usage</h4>
          <VueProgressRing
            :value="42"
            variant="info"
          >
            <strong>42%</strong>
          </VueProgressRing>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent, ref, onUnmounted } from "vue";
import { VueProgressRing } from "agnosticui-core/progress-ring/vue";
import VueButton from "agnosticui-core/button/vue";

export default defineComponent({
  name: "ProgressRingExamples",
  components: {
    VueProgressRing,
    VueButton,
  },
  setup() {
    const animatedValue = ref(0);
    let animationInterval: number | null = null;

    const startAnimation = () => {
      if (animationInterval) {
        clearInterval(animationInterval);
      }

      animatedValue.value = 0;
      animationInterval = setInterval(() => {
        if (animatedValue.value < 100) {
          animatedValue.value += 1;
        } else {
          if (animationInterval) {
            clearInterval(animationInterval);
            animationInterval = null;
          }
        }
      }, 30);
    };

    const resetAnimation = () => {
      if (animationInterval) {
        clearInterval(animationInterval);
        animationInterval = null;
      }
      animatedValue.value = 0;
    };

    onUnmounted(() => {
      if (animationInterval) {
        clearInterval(animationInterval);
      }
    });

    return {
      animatedValue,
      startAnimation,
      resetAnimation,
    };
  },
});
</script>

<style>
/* CSS Shadow Parts customization examples */
.custom-ring::part(track) {
  stroke: #e0e0e0;
  stroke-width: 6;
}
.custom-ring::part(indicator) {
  stroke: #667eea;
  stroke-width: 6;
  stroke-linecap: round;
  filter: drop-shadow(0 0 4px rgba(102, 126, 234, 0.5));
}
.custom-ring::part(label) {
  font-weight: bold;
  font-size: 1.5rem;
  color: #667eea;
}
</style>
