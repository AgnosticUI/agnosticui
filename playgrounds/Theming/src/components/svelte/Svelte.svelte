<script>
  import { onMount } from 'svelte';
  import { Alert, Card, Button, ButtonGroup, ChoiceInput} from 'agnostic-svelte';
  import ToastIconExample from './icons/ToastIconExample.svelte';
  
  let checked = ["tos"];
  const checkboxOptions = [{
    name: "tos",
    value: "tos",
    label: "I have read and agree to the terms of service."
  }];
  const handleCheckbox = e => {
    checked = e.target.checked ? ["tos"] : [];
  }

  $: disabled = !checked.length

  onMount(() => {
    const doc = document.querySelector('.tab-panel');
    // Presets checked to the light option
    doc.setAttribute('color-scheme', 'light')
  });
  const setTheme = e => {
    const doc = document.querySelector('.tab-panel');
    doc.setAttribute('color-scheme', e.target.value)
  }

  export let tabindex = 0;

  const opts = [
    { name: 'theme', value: 'light', label: 'Light' },
    { name: 'theme', value: 'dim', label: 'Dim' },
    { name: 'theme', value: 'grape', label: 'Grape' },
    { name: 'theme', value: 'indigo', label: 'Indigo' },
    { name: 'theme', value: 'cyan', label: 'Cyan' },
    { name: 'theme', value: 'custom', label: 'Custom' },
  ];
</script>
<style>
@import "open-props/sizes";
@import "open-props/indigo";
@import "open-props/grape";
@import "open-props/cyan";
@import "open-props/gray";
@import "open-props/orange";
.tab-panel {
  margin-block-start: var(--fluid-40);
  margin-block-end: var(--fluid-24);
  margin-inline-start: 0;
  margin-inline-end: 0;
}
:root {
  /* Step 1 — Variablize open-props to your in-house themes */

  /* light */
  --brand-light: var(--orange-7);
  --text1-light: var(--gray-8);
  --text2-light: var(--gray-7);
  --surface1-light: var(--gray-0);
  --surface2-light: var(--gray-1);
  --surface3-light: var(--gray-2);
  --surface4-light: var(--gray-3);
  --surface-shadow-light: 200 10% 20%;
  --shadow-strength-light: 2%;

  /* dim */
  --brand-dim: var(--orange-5);
  --text1-dim: var(--gray-4);
  --text2-dim: var(--gray-5);
  --surface1-dim: var(--gray-8);
  --surface2-dim: var(--gray-7);
  --surface3-dim: var(--gray-6);
  --surface4-dim: var(--gray-5);
  --surface-shadow-dim: 200 10% 13%;
  --shadow-strength-dim: 20%;
  
  /* grape */
  --brand-grape: var(--grape-5);
  --text1-grape: var(--grape-9);
  --text2-grape: var(--grape-8);
  --surface1-grape: var(--grape-0);
  --surface2-grape: var(--grape-1);
  --surface3-grape: var(--grape-2);
  --surface4-grape: var(--grape-3);
  --surface-shadow-grape: 288 30% 20%;
  --shadow-strength-grape: 2%;

  /* indigo */
  --brand-indigo: var(--indigo-5);
  --text1-indigo: var(--indigo-9);
  --text2-indigo: var(--indigo-8);
  --surface1-indigo: var(--indigo-0);
  --surface2-indigo: var(--indigo-1);
  --surface3-indigo: var(--indigo-2);
  --surface4-indigo: var(--indigo-3);
  --surface-shadow-indigo: 288 30% 20%;
  --shadow-strength-indigo: 2%;
  
  /* cyan */
  --brand-cyan: var(--cyan-6);
  --text1-cyan: var(--cyan-9);
  --text2-cyan: var(--cyan-9);
  --surface1-cyan: var(--cyan-0);
  --surface2-cyan: var(--cyan-1);
  --surface3-cyan: var(--cyan-2);
  --surface4-cyan: var(--cyan-3);
  --surface-shadow-cyan: 288 30% 20%;
  --shadow-strength-cyan: 2%;

  /* custom */
  --brand-custom: var(--teal-5);
  --text1-custom: var(--teal-9);
  --text2-custom: var(--teal-8);
  --surface1-custom: var(--teal-0);
  --surface2-custom: var(--teal-1);
  --surface3-custom: var(--custom-2);
  --surface4-custom: var(--custom-3);
  --surface-shadow-teal: 288 30% 20%;
  --shadow-strength-teal: 2%;

  --card-background: transparent;
}

/* Step 2 — apply the various themes to same variable sets */
:global([color-scheme="light"]) {
  --brand: var(--brand-light);
  --text1: var(--text1-light);
  --text2: var(--text2-light);
  --surface1: var(--surface1-light);
  --surface2: var(--surface2-light);
  --surface3: var(--surface3-light);
  --surface4: var(--surface4-light);
  --surface-shadow: var(--surface-shadow-light);
  --shadow-strength: var(--shadow-strength-light);

  /* Override agnostic custom props with our theme props */
  --agnostic-primary: var(--brand);
  --agnostic-primary-light: var(--surface1);
  --agnostic-primary-dark: var(--text2);
  --agnostic-gray-light: var(--surface4);
  --agnostic-checkbox-fill-color: var(--text2);
}

:global([color-scheme="custom"]) {
  --brand: #037562;
  --text1: white;
  --text2: #fffaf7;
  --surface1: #f2eeeb;
  --surface2: #ede5df;
  --surface3: #fef8f4;
  --surface4: #fde7d7;
  --surface-shadow: var(--surface-shadow-light);
  --shadow-strength: var(--shadow-strength-light);
  --agnostic-primary: var(--brand);
  --agnostic-primary-light: var(--brand);
  /* Hack: Background is dark enough we have to flip */
  --agnostic-primary-dark: #d2fff8;;
  --agnostic-gray-light: var(--surface4);
  --agnostic-checkbox-fill-color: var(--brand);
  --card-background: var(--surface3);
}

:global([color-scheme="dim"]) {
  --brand: var(--brand-dim);
  --text1: var(--text1-dim);
  --text2: var(--text2-dim);
  --surface1: var(--surface1-dim);
  --surface2: var(--surface2-dim);
  --surface3: var(--surface3-dim);
  --surface4: var(--surface4-dim);
  --surface-shadow: var(--surface-shadow-dim);
  --shadow-strength: var(--shadow-strength-dim);
  
  /* Override agnostic custom props with our theme props */
  --agnostic-primary: var(--brand-dim);
  --agnostic-primary-light: var(--surface1);
  --agnostic-primary-dark: var(--text2);
  --agnostic-gray-light: var(--surface4);
  --agnostic-btn-disabled-bg: #d9dcdf;
  --agnostic-checkbox-fill-color: var(--surface4);
}

:global([color-scheme="grape"]) {
  --brand: var(--brand-grape);
  --text1: var(--text1-grape);
  --text2: var(--text2-grape);
  --surface1: var(--surface1-grape);
  --surface2: var(--surface2-grape);
  --surface3: var(--surface3-grape);
  --surface4: var(--surface4-grape);
  --surface-shadow: var(--surface-shadow-grape);
  --shadow-strength: var(--shadow-strength-grape);
  --agnostic-primary: var(--brand);
  --agnostic-primary-light: var(--surface1);
  --agnostic-primary-dark: var(--text2);
  --agnostic-gray-light: var(--surface4);
  --agnostic-btn-disabled-bg: #d9dcdf;
  --agnostic-checkbox-fill-color: var(--surface4);
  --card-background: #fffdff;
}

:global([color-scheme="cyan"]) {

  --brand: var(--brand-cyan);
  --text1: var(--text1-cyan);
  --text2: var(--text2-cyan);
  --surface1: var(--surface1-cyan);
  --surface2: var(--surface2-cyan);
  --surface3: var(--surface3-cyan);
  --surface4: var(--surface4-cyan);
  --surface-shadow: var(--surface-shadow-cyan);
  --shadow-strength: var(--shadow-strength-cyan);
  --agnostic-primary: var(--brand);
  --agnostic-primary-light: var(--surface1);
  --agnostic-primary-dark: var(--text2);
  --agnostic-gray-light: var(--surface4);
  --agnostic-btn-disabled-bg: #d9dcdf;
  --agnostic-checkbox-fill-color: var(--surface4);
  --card-background: #f5feff;
}

:global([color-scheme="indigo"]) {
  --brand: var(--brand-indigo);
  --text1: var(--text1-indigo);
  --text2: var(--text2-indigo);
  --surface1: var(--surface1-indigo);
  --surface2: var(--surface2-indigo);
  --surface3: var(--surface3-indigo);
  --surface4: var(--surface4-indigo);
  --surface-shadow: var(--surface-shadow-indigo);
  --shadow-strength: var(--shadow-strength-indigo);
  --agnostic-primary: var(--brand);
  --agnostic-primary-light: var(--surface1);
  --agnostic-primary-dark: var(--text2);
  --agnostic-gray-light: var(--surface4);
  --agnostic-btn-disabled-bg: #d9dcdf;
  --agnostic-checkbox-fill-color: var(--surface4);
  --card-background: #f6f8ff;
}

section {
  display: grid;
  gap: var(--size-6);
}

header {
  display: inline-grid;
  gap: var(--size-3);
}

.theming-form {
  display: flex;
  gap: var(--size-5);
}

:global(.ag-card) {
  /* curates the card width to be the same as the open-props swatches */
  --size: var(--size-content-1);
  width: calc(var(--size) * 2 + var(--size-5)) !important;
  background-color: var(--card-background);
}

.surface-samples {
  display: grid;
  --size: var(--size-content-1);
  grid-template-columns: var(--size) var(--size);
  /* grid-auto-rows: var(--size); */
  gap: var(--size-5);

}
@media (max-width: 480px) {
  :global(.ag-card),
  .surface-samples {
    --size: 40vw;
    grid-template-columns: 1fr;
  }
}

.surface1 {
  background-color: var(--surface1);
  color: var(--text2);
}

.surface2 {
  background-color: var(--surface2);
  color: var(--text2);
}

.surface3 {
  background-color: var(--surface3);
  color: var(--text1);
}

.surface4 {
  background-color: var(--surface4);
  color: var(--text1);
}

.rad-shadow {
  border: 1px solid hsl(var(--brand-hue) 10% 50% / 15%);
  box-shadow: 0 1rem .5rem -.5rem;
  box-shadow:
    0 2.8px 2.2px hsl(var(--surface-shadow) / calc(var(--shadow-strength) + 3%)),
    0 6.7px 5.3px hsl(var(--surface-shadow) / calc(var(--shadow-strength) + 1%)),
    0 12.5px 10px hsl(var(--surface-shadow) / calc(var(--shadow-strength) + 2%)),
    0 22.3px 17.9px hsl(var(--surface-shadow) / calc(var(--shadow-strength) + 2%)),
    0 41.8px 33.4px hsl(var(--surface-shadow) / calc(var(--shadow-strength) + 3%)),
    0 100px 80px hsl(var(--surface-shadow) / var(--shadow-strength))
  ;
}
  
.demo {
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  grid-template-rows: 1fr 1fr;
  min-height: 28rem;
  gap: var(--fluid-40);
}
@media screen and (min-width: 1150px) {
  .demo {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    grid-template-rows: 1fr;
  }
}
.agnostic-form {
  padding-inline-start: var(--fluid-24);
  padding-inline-end: var(--fluid-24);
}

/* Forcing an override like this is a bit hacky but possible ;-) */
:global(.btn-override) {
  padding-inline-end: var(--fluid-16) !important;
  padding-inline-start: var(--fluid-16) !important;
}

</style>
<div id="theming-panel" class="tab-panel" role="tabpanel" tabindex="{tabindex}" aria-labelledby="theming-panel-button">
  <header class="mbe24">
    <p class="mbs16 mbe24">One nice thing about <a href="tbd" target="_blank">open-props</a> is that we can import only the modules we need!</p>
    <form class="theming-form" id="theme-switcher">
      <ChoiceInput
        type="radio"
        legendLabel="Radio"
        isFieldset={false}
        isInline
        checkedOptions={['light']}
        options={opts}
        on:click={setTheme}
      />
    </form>
  </header>
  <div class="demo">
    <section>
      <div class="surface-samples">
        <div class="surface1 rad-shadow"></div>
        <div class="surface2 rad-shadow"></div>
        <div class="surface3 rad-shadow"></div>
        <div class="surface4 rad-shadow"></div>
      </div>
    </section>
    <Card css="ag-card" isStacked isShadow>
      <div class="h4 mbs24 mbe12">AgnosticUI</div>
      <form class="agnostic-form w-100 mbe32" on:submit|preventDefault>
        <Alert isRounded isBorderLeft type="info">
          <ToastIconExample type="info" utilityClasses="mie8" />
          <span>The colors change as you click. Whoa! 😲</span>
        </Alert>
        <p class="mbs24 mbe32">The swatches are adapted from the <a href="https://codepen.io/argyleink/pen/XWaYyWe" target="_blank">open-props demo</a> showing how to use their approach applied to AgnosticUI's components. Use your own brand colors like the custom example.</p>
        <ButtonGroup ariaLabel="Appropriate label for your button group">
          <Button css="btn-override" mode="primary" isBordered isGrouped size="small">One</Button>
          <Button css="btn-override" mode="primary" isBordered isGrouped size="small">Two</Button>
          <Button css="btn-override" mode="primary" isBordered isGrouped size="small">
            Three
          </Button>
        </ButtonGroup>
        <div class="mbs16"></div>
        <ChoiceInput
          type="checkbox"
          checkedOptions={checked}
          isFieldset={false}
          legendLabel="agree to terms of service toggle"
          options={checkboxOptions}
          on:change={handleCheckbox}
        />
        <div class="mbs32"></div>
        <Button mode="primary" isRounded isBlock isDisabled={disabled}>Submit</Button>
      </form>
    </Card>
  </div>
  <div class="mbs40">
    <a class="mbs40 flex items-center" href="https://github.com/AgnosticUI/agnosticui/tree/master/playgrounds/Theming" target="_blank">
      <svg class="mie14" role="img" width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>GitHub</title><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
      Source code for theming example on GitHub
    </a>
  </div>
</div>
