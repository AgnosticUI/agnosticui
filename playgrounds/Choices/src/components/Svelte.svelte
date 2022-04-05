<script>
  import { Button, ChoiceInput } from 'agnostic-svelte';

  // Choice Inputs Shifting on Small Devices #118
  // Config for an individual checkbox hence array of 1 item
  const tosCheckboxOptions = [{
    name: "tos",
    value: "tos",
    label: "I have read and agree to the terms of service."
  }];
  let tosAgreedTo = false;
  const toggleTosAgreedTo = () => tosAgreedTo = !tosAgreedTo;

  const opts = [
  {
    value: "daily",
    label: "Daily",
  },
  {
    value: "weekly",
    label: "Weekly",
  },
  {
    value: "monthly",
    label: "Monthly",
  },
];
const optionNames = ['frequency', 'schedule', 'howoften', 'when', 'letmeknow', 'whenz', 'often', 'freq', 'frekuency', 'whattimes']
const options = []
for (let i = 0; i < optionNames.length; i += 1) {
  const optionName = optionNames[i];
  const optionsWithNames = []
  opts.forEach(o => {
    const copy = Object.assign({}, o, { name: optionName })
    optionsWithNames.push(copy);
  })
  options.push(optionsWithNames);
}

// Fixes input bug #114
let textIsVisible = false;
const toggleTextVisibility = () => {
  textIsVisible = !textIsVisible;
};
let testIsInvalid = false;
</script>
<section>
  <div class="h4 mbe32 flex items-center">
    <img width="24" height="24" src="/assets/Svelte-icon.svg" alt="Svelte logo" class="mie12" />Svelte Choice Inputs
  </div>
  <ChoiceInput id="c1" type="checkbox" isInline options={options[0]} />
  <ChoiceInput id="c2" type="checkbox" isInline isDisabled options={options[1]} />
  <div class="h4 mbs16 mbe16">Weekly disabled only</div>
  <ChoiceInput id="c3" type="checkbox" isInline disabledOptions={["weekly"]} options={options[2]} />
  <p class="h4 mbs16 mbe16">Radio</p>
  <ChoiceInput id="r1" type="radio" isInline options={options[3]} />
  <ChoiceInput id="r2" type="radio" isInline isDisabled options={options[4]} />
  <Button css="mbs16  mbe24" isBordered on:click={() => testIsInvalid=!testIsInvalid}>Toggles isInvalid below</Button>
  <ChoiceInput id="r3" type="radio" isInvalid={testIsInvalid} options={options[5]} />
  <p class="mbs32 mbe16">Choice Inputs Shifting #118. Remove body widths and narrow viewport.
  Once text wraps, the check should maintain integrity:</p>
  <ChoiceInput
    id="c4"
    type="checkbox"
    isFieldset={false}
    legendLabel="agree to terms of service toggle"
    isInvalid={!tosAgreedTo}
    options={tosCheckboxOptions}
    on:change={toggleTosAgreedTo}
  />
  <div class="mbe24"></div>
  <Button mode="primary" isRounded isBlock isDisabled={!tosAgreedTo}>Submit</Button>
</section>
