<script>
  import Divider from "./Divider.svelte";
  export let justify = "";
  export let size = "";
  export let type = "";
</script>

<Divider justify="{justify}" size="{size}" type="{type}">
  <div slot="dividerContent">Boom!</div>
</Divider>
<p class="mbs16 mbe16">With no <code>dividerContent</code> slot:</p>
<Divider justify="{justify}" size="{size}" type="{type}" />
