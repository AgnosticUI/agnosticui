<template>
<section style="margin:0;padding:0;">
  <div>
    <h1>Buttons</h1>
  </div>
  <div>
    <h3>Primary</h3>
    <AgnosticButton label="Primary" mode="primary" />
  </div>
  <div>
    <h3>Default</h3>
    <AgnosticButton label="Default" />
  </div>
  <div>
    <h3>Primary Rounded</h3>
    <AgnosticButton label="Primary" isRounded={true} mode="primary" />
  </div>
  <div>
    <h3>Default Rounded</h3>
    <AgnosticButton label="Default Rounded" isRounded={true} />
  </div>
  <div>
    <h3>Large</h3>
    <AgnosticButton label="Large" mode="primary" size="large" isRounded={true} />
  </div>
  <div>
    <h3>Primary Raised</h3>
    <AgnosticButton label="Primary" isRaised={true} isRounded={true} mode="primary" />
  </div>
  <div>
    <h3>Default Raised</h3>
    <AgnosticButton label="Default Raised" isRaised={true} isRounded={true} />
  </div>
  <div>
    <h3>Icon Left</h3>
    <AgnosticButton label="Download" isIconLeft={true} isRaised={true} isRounded={true} mode="primary">
      <template #iconLeft>
        <svg
          viewBox="0 0 16 16"
          version="1.1"
          width="16"
          height="16"
          aria-hidden="true">
          <path
            fill="currentColor"
            fill-rule="evenodd"
            d="M9 12h2l-3 3-3-3h2V7h2v5zm3-8c0-.44-.91-3-4.5-3C5.08 1 3 2.92 3 5 1.02
            5 0 6.52 0 8c0 1.53 1 3 3 3h3V9.7H3C1.38 9.7 1.3 8.28 1.3 8c0-.17.05-1.7
            1.7-1.7h1.3V5c0-1.39 1.56-2.7 3.2-2.7 2.55 0 3.13 1.55 3.2 1.8v1.2H12c.81
            0 2.7.22 2.7 2.2 0 2.09-2.25 2.2-2.7 2.2h-2V11h2c2.08 0 4-1.16 4-3.5C16
            5.06 14.08 4 12 4z" />
        </svg>
      </template>
    </AgnosticButton>
  </div>

  <div>
    <h3>Icon Right</h3>
    <AgnosticButton label="Call" isIconRight={true} isRaised={true} isRounded={true} mode="primary">
      <template #iconRight>
        <svg
          stroke="currentColor"
          fill="currentColor"
          stroke-width="0"
          viewBox="0 0 24 24"
          data-custom-icon="true"
          focusable="false"
          aria-hidden="true"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36
            1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39
            0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57
            3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
        </svg>
      </template>
    </AgnosticButton>
  </div>
</section>
</template>

<script>
import AgnosticButton from './stories/Button.vue';
export default {
  name: 'ButtonExamples',
  components: {
    AgnosticButton,
  }
}
</script>
