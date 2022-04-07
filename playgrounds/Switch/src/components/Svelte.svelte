<script>
  import { Switch } from "agnostic-svelte";
</script>
<section>
  <div class="h4 mbe32 flex items-center">
    <img width="24" height="24" src="/assets/Svelte-icon.svg" alt="Svelte logo" class="mie12" />Svelte Select
  </div>
  <Switch id="41" label="Switch default" />
  <Switch id="42" size="small" label="Switch small" />
  <Switch id="43" size="large" label="Switch large" />
  <Switch id="44" isChecked={true} label="Prechecked" />
  <Switch id="45" isDisabled={true} label="Disabled" />
  <Switch id="46" isBordered={true} label="Bordered" />
  <Switch id="47" isAction={true} label="Action" />
  <Switch
    id="48"
    isAction={true}
    isBordered={true}
    label="Action bordered"
  />
  <div class="h4 mbs24 mbe24">Switch label on right</div>
  <Switch
    id="49"
    labelPosition="right"
    label="Label on right"
  />
  <Switch
    id="50"
    isBordered={true}
    labelPosition="right"
    label="Label on right bordered"
  /> 
</section>
