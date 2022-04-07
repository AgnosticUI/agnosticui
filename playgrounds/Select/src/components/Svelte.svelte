<script>
  import { Select } from "agnostic-svelte";
  const tennisOptions = [
    { value: 'andre', label: 'Andre Agassi' },
    { value: 'serena', label: 'Serena Williams' },
    { value: 'mac', label: 'John McEnroe' },
    { value: 'borg', label: 'Bjorn Borg' },
    { value: 'althea', label: 'Althea Gibson' },
    { value: 'roger', label: 'Roger Federer' },
  ];
</script>
<section>
  <div class="h4 mbe32 flex items-center">
    <img width="24" height="24" src="/assets/Svelte-icon.svg" alt="Svelte logo" class="mie12" />Svelte Select
  </div>
  <div class="h4 mbs24 mbe24">Select default</div>
  <Select
    uniqueId="sel1"
    name="select1"
    labelCopy="Select the best tennis player of all time"
    options={tennisOptions}
  />
  <div class="h4 mbs24 mbe24">Select default option customized</div>
  <Select
    uniqueId="sel2"
    name="select2"
    labelCopy="Select the best tennis player of all time"
    defaultOptionLabel="Select your favorite tennis player of all-time"
    options={tennisOptions}
  />
  <div class="h4 mbs24 mbe24">Select disabled</div>
  <Select
    uniqueId="sel3"
    name="select3"
    isDisabled={true}
    labelCopy="Select the best tennis player of all time"
    defaultOptionLabel="Select your favorite tennis player of all-time"
    options={tennisOptions}
  />
  <div class="h4 mbs24 mbe24">Select small</div>
  <Select
    uniqueId="sel3"
    name="select3"
    size="small"
    labelCopy="Select the best tennis player of all time"
    defaultOptionLabel="Select your favorite tennis player of all-time"
    options={tennisOptions}
  />
  <div class="h4 mbs24 mbe24">Select large</div>
  <Select
    uniqueId="sel3"
    name="select3"
    size="large"
    labelCopy="Select the best tennis player of all time"
    defaultOptionLabel="Select your favorite tennis player of all-time"
    options={tennisOptions}
  />
</section>
