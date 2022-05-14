<script>
  import Input from "./Input.svelte";
  import InputAddonItem from "./InputAddonItem.svelte";
  // NOTE: this throws a bogus warning:
  // https://github.com/sveltejs/svelte/issues/4546
</script>

<Input
  hasLeftAddon="{true}"
  hasRightAddon="{true}"
  id="myid"
  label="Input with addons"
>
  <div slot="addonLeft">
    <InputAddonItem addonLeft="{true}"><span>L</span></InputAddonItem>
  </div>
  <div slot="addonRight">
    <InputAddonItem addonRight="{true}"><span>R</span></InputAddonItem>
  </div>
</Input>
