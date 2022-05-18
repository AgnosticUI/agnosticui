<script lang="ts">
  import { setLanguage } from "../../store/language";
  import { Select } from "agnostic-svelte";
  let selectedValue;

  const countryOptions = [
    { value: 'en_US', label: 'English' },
    { value: 'es', label: 'Español' },
    { value: 'fr', label: 'Français' },
  ];
</script>

<section class="language">
  <form on:submit|preventDefault>
    <Select
      bind:singleSelected={selectedValue}
      on:selected={(e) => {
        console.log('Single select: ', e.detail);
        const selectedLanguage = e.detail;
        if (selectedLanguage) {
          setLanguage(selectedLanguage);
        }
      }}
      uniqueId="langSelector"
      name="languageselector"
      defaultOptionLabel="Select Language"
      labelCopy="Please select a language"
      options={countryOptions}
    />
  </form>
</section>

<style>
  .h2 {
    font-family: Cochin, Georgia, 'Times New Roman', serif;
    letter-spacing: 0.03rem;
  }

  .password-eye-btn :global(svg) {
    color: var(--neutral-x-dark);
  }
  .password-eye-btn {
    opacity: 75%;
    transition: opacity var(--agnostic-timing-medium);
  }

  .password-eye-btn:hover {
    opacity: 100%;
  }
</style>
