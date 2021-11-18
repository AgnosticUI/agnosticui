<template>
  <div>
    <div class="mbe16">
      <Button mode="primary">Little Button Test</Button>
      <Button
        isBlock
        isRounded
        mode="primary"
      >Little Button Test</Button>
    </div>
    <Alert>test</Alert>
    <Tabs
      :tabButtonNames="['tabButton1', 'tabButton2']"
      :tabPanelNames="['tabPanel1', 'tabPanel2']"
    >
      <template #tabButton1>
        Tab 1
      </template>
      <template #tabButton2>
        Tab 2
      </template>
      <template #tabPanel1>
        <TabPanel title="Tab 1">
          <p>Tab 1 content (no padding or margins so consumer can control desired gutters) (no padding or margins so consumer can control desired gutters)</p>
          <p>Random <a href="www.yahoo.com">yahoo link 1</a> and random <a href="www.yahoo.com">yahoo link 2</a>. Just testing some links out :)</p>
        </TabPanel>
      </template>
      <template #tabPanel2>
        <TabPanel title="Tab 2">
          Tab 2 content (no padding or margins so consumer can control desired gutters)
        </TabPanel>
      </template>
    </Tabs>
  </div>
</template>

<script>
import "agnosticvue/dist/common.min.css";
import "agnosticvue/dist/style.css";
import { Alert, Button, Tabs, TabPanel } from "agnosticvue";

export default {
  name: "Test",
  components: {
    Alert,
    Button,
    Tabs,
    TabPanel,
  },
};
</script>
