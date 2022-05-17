<script lang="ts">
  import { setLanguage } from "../../store/language";
  import { Select } from "agnostic-svelte";
  let selectedValue;

  const countryOptions = [
    { value: 'en_US', label: 'English' },
    { value: 'es', label: 'Español' },
    { value: 'zh_CN', label: '简体中文' },
    { value: 'th', label: 'ภาษาไทย' },
    { value: 'sv', label: 'Svenska' },
    { value: 'zh_TW', label: '繁體中文' },
    { value: 'nl_NL', label: 'Nederlands' },
    { value: 'da', label: 'Dansk' },
    { value: 'no', label: 'Norsk' },
    { value: 'ru', label: 'Русский' },
    { value: 'fr', label: 'Français' },
    { value: 'fi', label: 'Suomi' },
    { value: 'de', label: 'Deutsch' },
  ];
</script>

<section class="language">
  <form on:submit|preventDefault>
    <Select
      bind:selected={selectedValue}
      on:selected={(e) => {
        console.log('Single select: ', e.detail);
        const selectedLanguage = e.detail;
        // TODO -- get the textContent of node or just use the
        // countryOptions to find the label value
        if (selectedLanguage) {
          setLanguage({
            value: selectedLanguage,
            label: 'TBD'
          });
        }
      }}
      uniqueId="langSelector"
      name="languageselector"
      defaultOptionLabel="English"
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
