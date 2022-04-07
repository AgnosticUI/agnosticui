<script>
import { Tabs } from "agnostic-svelte";
import Tab1 from "./TabPanel1.svelte";
import Tab2 from "./TabPanel2.svelte";
import Tab3 from "./TabPanel3.svelte"; 
</script>
<section>
  <div class="h4 mbe32 flex items-center">
    <img width="24" height="24" src="/assets/Svelte-icon.svg" alt="Svelte logo" class="mie12" />Svelte Tabs
  </div>
  <section class="mbe24">
    <Tabs size="large" tabs={[
        {
          title: "Tab 1",
          ariaControls: "panel-1",
          tabPanelComponent: Tab1,
        },
        {
          title: "Tab 2",
          ariaControls: "panel-2",
          tabPanelComponent: Tab2,
        },
        {
          title: "Tab 3",
          ariaControls: "panel-3",
          tabPanelComponent: Tab3,
        },
      ]}
    >
    </Tabs>
  </section>
</section>
