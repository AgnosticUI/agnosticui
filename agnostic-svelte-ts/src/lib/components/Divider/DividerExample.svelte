<script lang="ts">
  import type { DividerJustify, DividerTypes, DividerSizes } from './api';
  import Divider from "./Divider.svelte";
  export let justify: DividerJustify = "";
  export let size: DividerSizes = "";
  export let type: DividerTypes= "";
</script>

<Divider justify={justify} size={size} type={type}>
  <div slot="dividerContent">Boom!</div>
</Divider>
<p class="mbs16 mbe16">With no <code>dividerContent</code> slot:</p>
<Divider justify={justify} size={size} type={type} />
