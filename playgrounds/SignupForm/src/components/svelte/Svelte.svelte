<script>
  import suite from "./suite.js";
  import { Card, Input, InputAddonItem, Button, ChoiceInput} from 'agnostic-svelte';
  import EyeClosed from './icons/IconifyEyeClosed.svelte';
  import EyeOpen from './icons/IconifyEyeOpen.svelte';
  
  let touched = {
    tos: false,
    username: false,
    password: false,
    confirm: false,
  };

  let formState = {};
  let usernamePending = false;
  let result = suite.get();
  let checked = [];

  const checkboxOptions = [{
    name: "tos",
    value: "tos",
    label: "I have read and agree to the terms of service."
  }];

  const validate = (fieldName) => {
    if (touched[fieldName]) {
      result = suite(formState, fieldName);
      result.done(res => {
        usernamePending = false;
        result = res;
        // console.log('Vent Result: ', { result })
      });
    }
  }

  const updateState = (fieldName, value) => {
    if(fieldName === 'username') {
      usernamePending = true;
      formState.username = value;
    } else {
      formState[fieldName] = value;
    }
  }

  /**
   * Blurring field makes it "touched" and candidate for validation
   */
  const handleBlur = name => {
    if (touched[name] === false) {
      touched[name] = true;
      // First time this field is considered "touched" e.g. user just tab'd or clicked out
      // of the field. As such, we now need to validate said field for the first time!
      validate(name);
    }
  }

  const handleCheckbox = e => {
    // Since often user will simply click (not TAB then SPACE select
    // checked) we consider any interaction w/checkbox as now "touched"
    touched.tos = true;
    checked = [];
    formState.tos = false
    if (e.target.checked) {
      formState.tos = true
      checked = ["tos"]
    }
    validate('tos');
  }

  const handleChange = e => {
    const name = e.target.getAttribute('name');
    const value = e.target.value;
    updateState(name, value);
    validate(name);
  };

  $: disabled = !result.isValid();

  let textIsVisible = false;
	const toggleTextVisibility = () => {
		textIsVisible = !textIsVisible;
	};

  let textIsVisibleConfirm = false;
	const toggleTextVisibilityConfirm = () => {
		textIsVisibleConfirm = !textIsVisibleConfirm;
	};
</script>

<section>
  <div class="flex flex-column items-start">
    <div class="h4">
      <img width="24" height="24" src="/assets/Svelte-icon.svg" alt="Svelte logo" class="mie12" />Svelte
    </div>
    <p class="mbe16">This example signup form uses <a href="https://www.npmjs.com/package/agnostic-svelte" target="_blank">agnostic-svelte</a> for the UI primitives, and <a href="https://vestjs.dev/" target="_blank">Vest</a>
      for the form validation.</p>
  </div>
  
  <Card css="card-demo" isStacked isShadow>
    <div class="h4">Signup</div>
    <form on:submit|preventDefault>
      <Input
        id="uname-svelte"
        name="username"
        label="Username"
        bind:value={formState.username}
        autocomplete="username"
        on:change={handleChange}
        on:blur={() => handleBlur('username')}
        pending={usernamePending}
        isInvalid={result.hasErrors('username')}
        invalidText={[...result.getErrors('username')]}
      />
      <div class="mbs12"></div>
      <Input
        id="pword-svelte"
        name="password"
        label="Password"
        type={textIsVisible ? 'text' : 'password'}
        autocomplete="new-password"
        bind:value={formState.password}
        on:change={handleChange}
        on:blur={() => handleBlur('password')}
        isInvalid={result.hasErrors('password') || result.hasWarnings('password')}
        invalidText={[...result.getErrors('password'), ...result.getWarnings('password')]}
        hasRightAddon
      >
        <div slot="addonRight" class="password-eye-btn">
          <InputAddonItem addonRight={true}>
            <Button isBlank on:click={toggleTextVisibility}>
              <span class="screenreader-only">Password visibility toggle</span>
              {#if textIsVisible}
                <EyeClosed />
              {:else}
                <EyeOpen />
              {/if}
            </Button>
          </InputAddonItem>
        </div>
      </Input>
      <div class="mbs12"></div>
      <Input
        id="confirm-svelte"
        name="confirm"
        label="Confirm"
        autocomplete="new-password-confirm"
        type={textIsVisibleConfirm ? 'text' : 'password'}
        bind:value={formState.confirm}
        on:change={handleChange}
        on:blur={() => handleBlur('confirm')}
        isInvalid={result.hasErrors('confirm')}
        invalidText={[...result.getErrors('confirm')]}
        hasRightAddon
      >
        <div slot="addonRight" class="password-eye-btn">
          <InputAddonItem addonRight={true}>
            <Button isBlank on:click={toggleTextVisibilityConfirm}>
              <span class="screenreader-only">Confirm password visibility toggle</span>
              {#if textIsVisibleConfirm}
                <EyeClosed />
              {:else}
                <EyeOpen />
              {/if}
            </Button>
          </InputAddonItem>
        </div>
      </Input>
      <div class="mbs12"></div>
      <ChoiceInput
        id="agrees"
        type="checkbox"
        checkedOptions={checked}
        isFieldset={false}
        legendLabel="agree to terms of service toggle"
        isInvalid={result.hasErrors('tos')}
        options={checkboxOptions}
        bind:checked={checked}
        on:input={handleCheckbox}
      />
      <div class="mbs32"></div>
      <Button type="submit" mode="primary" isRounded isBlock isDisabled={disabled}>Submit</Button>
    </form>
  </Card>
</section>

<style>

  form {
    width: 80%;
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
