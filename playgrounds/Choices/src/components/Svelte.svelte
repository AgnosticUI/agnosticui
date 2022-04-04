<script>
  import { Button, ChoiceInput } from 'agnostic-svelte';

  // Choice Inputs Shifting on Small Devices #118
  // Config for an individual checkbox hence array of 1 item
  const checkboxOptions = [{
    name: "tos",
    value: "tos",
    label: "I have read and agree to the terms of service."
  }];
  let tosAgreedTo = false;
  const toggleTosAgreedTo = () => tosAgreedTo = !tosAgreedTo;

  /**
   * Choice Inputs
   */
   const opts = [
		{
			name: "frequency",
			value: "daily",
			label: "Daily",
		},
		{
			name: "frequency",
			value: "weekly",
			label: "Weekly",
		},
		{
			name: "frequency",
			value: "monthly",
			label: "Monthly",
		},
	];

  // Fixes input bug #114
  let textIsVisible = false;
	const toggleTextVisibility = () => {
		textIsVisible = !textIsVisible;
	};
  let testIsInvalid = false;
  let testHelpText = false;
 
</script>
<section>
  <div class="h4 mbe32 flex items-center">
    <img width="24" height="24" src="/assets/Svelte-icon.svg" alt="Svelte logo" class="mie12" />Svelte Choice Inputs
  </div>
  <ChoiceInput type="checkbox" isInline options={opts} />
  <ChoiceInput type="checkbox" isInline isDisabled options={opts} />
  <div class="h4 mbs16 mbe16">Weekly disabled only</div>
  <ChoiceInput type="checkbox" isInline disabledOptions={["weekly"]} options={opts} />
  <p class="h4 mbs16 mbe16">Radio</p>
  <ChoiceInput type="radio" isInline options={opts} />
  <ChoiceInput type="radio" isInline isDisabled options={opts} />
  <Button css="mbs16  mbe24" isBordered on:click={() => testIsInvalid=!testIsInvalid}>Toggles isInvalid below</Button>
  <ChoiceInput type="radio" isInvalid={testIsInvalid} options={opts} />
  <p class="mbs32 mbe16">Choice Inputs Shifting #118. Remove body widths and narrow viewport.
  Once text wraps, the check should maintain integrity:</p>
  <ChoiceInput
    type="checkbox"
    isFieldset={false}
    legendLabel="agree to terms of service toggle"
    isInvalid={!tosAgreedTo}
    options={checkboxOptions}
    on:change={toggleTosAgreedTo}
  />
  <div class="mbe24"></div>
  <Button mode="primary" isRounded isBlock isDisabled={!tosAgreedTo}>Submit</Button>
</section>
