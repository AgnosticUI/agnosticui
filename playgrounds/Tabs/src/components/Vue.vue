<template>
  <section class="mbe40">
    <div class="h4 mbe32 flex items-center">
      <img
        width="24"
        height="24"
        src="/assets/Vue-icon.svg"
        alt="Vue logo"
        class="mie12"
      />Vue 3 Close
    </div>
    <div class="mbs24 mbe16">
      <Tabs>
        <template #tab-1>
          Tab 1
        </template>
        <template #panel-1>
          <p>Tab 1 content (no padding or margins so consumer can control desired gutters) (no padding or margins so consumer can control desired gutters)</p>
          <p>
            Try tabbing into this. You'll be able to tab through the links, and then shift-tab back out. To get to the
            next tab you use the arrow key and enter|space to select. This is consistent with
            wai-aria practices <a href="https://www.w3.org/TR/wai-aria-practices/examples/tabs/tabs-2/tabs.html">
              aria manual activation example</a>.
          </p>
          <p>Random <a href="www.yahoo.com">yahoo link 1</a> and random <a href="www.yahoo.com">yahoo link 2</a>. Just testing some links out :)</p>
        </template>
        <template #tab-2>
          Tab 2
        </template>
        <template #panel-2>
          <p>Random <a href="www.yahoo.com">yahoo link 1</a> and random <a href="www.yahoo.com">yahoo link 2</a>. Just testing some links out :)</p>
        </template>
        <template #tab-foo>
          Tab Foo
        </template>
        <template #panel-foo>
          Panel Foo content (no padding or margins so consumer can control desired gutters)
        </template>
        <template #tab-bar>
          Tab Bar
        </template>
        <template #panel-bar>
          Panel Bar
        </template>
      </Tabs>
    </div>
    <div class="mbs32 mbe16">
      <Tabs size="large">
        <template #tab-11>
          Tab 1
        </template>
        <template #panel-11>
          Panel 1
        </template>
        <template #tab-12>
          Tab 2
        </template>
        <template #panel-12>
          Panel 2
        </template>
      </Tabs>
    </div>
    <h2>Vertical Tabs</h2>
    <div class="mbs48 mbe16">
      <Tabs is-vertical>
        <template #tab-13>
          Tab 1
        </template>
        <template #panel-13>
          <p>Vertical tab 1 content (no padding or margins so consumer can control desired gutters) (no padding or margins so consumer can control desired gutters)</p>
          <p>Now you'll use the up and down arrows. Home and end still work the same. Random <a href="www.yahoo.com">yahoo link 1</a> and random <a href="www.yahoo.com">yahoo link 2</a>. Just testing some links out :)</p>
        </template>
        <template #tab-14>
          Tab 2
        </template>
        <template #panel-14>
          Vertical tab 2 content (no padding or margins so consumer can control desired gutters)
        </template>
      </Tabs>
    </div>
    <h2>Disabled Tabs</h2>
    <div class="mbs48 mbe16">
      <Tabs is-disabled>
        <template #tab-15>
          Tab 1
        </template>
        <template #panel-15>
          Panel 1
        </template>
        <template #tab-16>
          Tab 1
        </template>
        <template #panel-16>
          Panel 2
        </template>
      </Tabs>
    </div>
    <h2>Disabled Options</h2>
    <div class="mbs12 mbe16">
      <Tabs :disabled-options="disabledOptions">
        <template #tab-17>
          Tab 1
        </template>
        <template #panel-17>
          Disabled options only make sense if you do NOT supply isDisabled (as
          that disabled all the tab buttons), and you wish to selectively disable certain buttons.
          Here we've disabled the second and fourth tabs. Keyboard navigation skips the disabled tabs.
        </template>
        <template #tab-18>
          Tab 2
        </template>
        <template #panel-18>
          Panel 2
        </template>
        <template #tab-19>
          Tab 3
        </template>
        <template #panel-19>
          Panel 3
        </template>
        <template #tab-20>
          Tab 4
        </template>
        <template #panel-20>
          Panel 4
        </template>
        <template #tab-21>
          Tab 5
        </template>
        <template #panel-21>
          Panel 5
        </template>
      </Tabs>
    </div>
    <h2>Custom</h2>
    <div class="mbs12 mbe16">
      <div>
        <p class="mbe12">
          Custom tabs using an AgnosticUI button requires two things:
        </p>
        <ul class="mbe24">
          <li>You need to use the <code>tabType="custom"</code> prop on the tab</li>
          <li>You need to use the <code>type="faux"</code> prop on the button. This is required because the tabs are already buttons so you'd have a nested button a11y violation otherwise.</li>
        </ul>
        <Tabs tab-type="custom">
          <template #tab-22>
            <Button
              type="faux"
              mode="primary"
              is-bordered
            >
              Tab One
            </Button>
          </template>
          <template #panel-22>
            <p>Tab 1 content (no padding or margins so consumer can control desired gutters) (no padding or margins so consumer can control desired gutters)</p>
            <p>
              Try tabbing into this. You'll be able to tab through the links, and then shift-tab back out. To get to the
              next tab you use the arrow key and enter|space to select. This is consistent with
              wai-aria practices <a href="https://www.w3.org/TR/wai-aria-practices/examples/tabs/tabs-2/tabs.html">
                aria manual activation example</a>.
            </p>
            <p>Random <a href="www.yahoo.com">yahoo link 1</a> and random <a href="www.yahoo.com">yahoo link 2</a>. Just testing some links out :)</p>
          </template>
          <template #tab-23>
            <Button
              type="faux"
              mode="primary"
              is-bordered
            >
              Tab Two
            </Button>
          </template>
          <template #panel-23>
            Tab 2 content (no padding or margins so consumer can control desired gutters)
          </template>
        </Tabs>
      </div>
    </div>
  </section>
</template>

<script setup>
// Components CSS
import "agnostic-vue/dist/index.css";
import { Button, Tabs } from "agnostic-vue";
const disabledOptions = ["tab-18", "tab-20"];
</script>
