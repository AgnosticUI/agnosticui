<script>
// This way you get the properties, reset, and utilities in one file:
// import "agnostic-vue/dist/common.min.css";
// But, you can also import them individually. Here we're just testing
// importing all of them, but, you can imagine a case where you don't
// want the CSS Utilities because they add to the payload weight.
import "agnostic-vue/dist/common.properties.min.css";
import "agnostic-vue/dist/common.resets.min.css";
import "agnostic-vue/dist/common.utilities.min.css";
// Components CSS
import "agnostic-vue/dist/index.css";
import {
  Alert,
  Avatar,
  AvatarGroup,
  Breadcrumb,
  Button,
  Card,
  ChoiceInput,
  Close,
  Disclose,
  Header,
  HeaderNav,
  HeaderNavItem,
  Icon,
  Input,
  InputAddonItem,
  Select,
  Switch,
  Tabs,
  Tag,
} from "agnostic-vue";

import IconExOcticons from "./components/IconExOcticons.vue";

export default {
  name: "App",
  components: {
    Alert,
    AvatarGroup,
    Avatar,
    Breadcrumb,
    Button,
    Card,
    ChoiceInput,
    Close,
    Disclose,
    Header,
    HeaderNav,
    HeaderNavItem,
    Icon,
    IconExOcticons,
    Input,
    InputAddonItem,
    Select,
    Switch,
    Tabs,
    Tag,
  },
  data() {
    return {
      disabledOptions: ["tab-1", "tab-3"],
      tennisRoutes: [
        {
          label: "Tennis",
          url: "#tennis",
        },
        {
          label: "Superstars",
          url: "#tennis-superstars",
        },
        {
          label: "Serena Williams",
          url: "#tennis-superstars-serena",
        },
      ],
    };
  },
};
</script>
<template>
  <div id="app">
    <h1>AgnosticUI Vue</h1>
  </div>
  <h2>Select</h2>
  <div class="mbs12 mbe16">
    <Select
      :options="[{ value: 'andre', label: 'Andre Agassi' }, { value: 'serena', label: 'Serena Williams'} , { value: 'mac', label: 'John McEnroe'}, { value: 'borg', label: 'Bjorn Borg'}, { value: 'althea', label: 'Althea Gibson'}, { value: 'roger', label: 'Roger Federer'}]"
      unique-id="sel1"
      name="select1"
      label-copy="Select the best tennis player of all time"
    />
  </div>
  <h2>Customize the first option's text copy</h2>
  <div class="mbe16">
    <p className="mbe24">
      Pass <code>default-option-label</code> to specify the text copy to use for the first option
    </p>
    <Select
      default-option-label="Select your favorite tennis player"
      :options="[{ value: 'andre', label: 'Andre Agassi' }, { value: 'serena', label: 'Serena Williams'} , { value: 'mac', label: 'John McEnroe'}, { value: 'borg', label: 'Bjorn Borg'}, { value: 'althea', label: 'Althea Gibson'}, { value: 'roger', label: 'Roger Federer'}]"
      unique-id="sel1b"
      name="select1b"
      label-copy="Select the best tennis player of all time"
    />
  </div>
  <h2>Disabled select</h2>
  <div class="mbs12 mbe16">
    <Select
      is-disabled
      :options="[{ value: 'andre', label: 'Andre Agassi' }]"
      unique-id="sel2"
      name="select2"
      label-copy="Select -- example disabled"
    />
  </div>
  <h2>Small select</h2>
  <div class="mbs12 mbe16">
    <Select
      size="small"
      :options="[{ value: 'andre', label: 'Andre Agassi' }, { value: 'serena', label: 'Serena Williams'} , { value: 'mac', label: 'John McEnroe'}, { value: 'borg', label: 'Bjorn Borg'}, { value: 'althea', label: 'Althea Gibson'}, { value: 'roger', label: 'Roger Federer'}]"
      unique-id="sel3"
      name="select3"
      label-copy="Select the best tennis player of all time"
    />
  </div>
  <h2>Large select</h2>
  <div class="mbs12 mbe16">
    <Select
      size="large"
      :options="[{ value: 'andre', label: 'Andre Agassi' }, { value: 'serena', label: 'Serena Williams'} , { value: 'mac', label: 'John McEnroe'}, { value: 'borg', label: 'Bjorn Borg'}, { value: 'althea', label: 'Althea Gibson'}, { value: 'roger', label: 'Roger Federer'}]"
      unique-id="sel4"
      name="select4"
      label-copy="Select the best tennis player of all time"
    />
  </div>
  <h2>Multiple select size 4</h2>
  <div class="mbs12 mbe16">
    <Select
      :is-multiple="true"
      :multiple-size="4"
      :options="[{ value: 'andre', label: 'Andre Agassi' }, { value: 'serena', label: 'Serena Williams'} , { value: 'mac', label: 'John McEnroe'}, { value: 'borg', label: 'Bjorn Borg'}, { value: 'althea', label: 'Althea Gibson'}, { value: 'roger', label: 'Roger Federer'}]"
      unique-id="sel4"
      name="select4"
      label-copy="Select the best tennis player of all time"
    />
  </div>
  <h2>Breadcrumbs</h2>
  <div class="mbs24 mbe16">
    <Breadcrumb :routes="tennisRoutes" />
    <Breadcrumb
      type="slash"
      :routes="tennisRoutes"
    />
    <Breadcrumb
      type="bullet"
      :routes="tennisRoutes"
    />
    <Breadcrumb
      type="arrow"
      :routes="tennisRoutes"
    />
    <Breadcrumb :routes="[{ label: 'A single route will look *linkless*' }]" />
    <Breadcrumb :routes="[{label: 'First', url: '#foo'}, { label: 'Second', url: '#bar' }]" />
  </div>
  <h2>Tabs</h2>
  <div class="mbs24 mbe16">
    <Tabs>
      <template #tab-1>
        Tab 1
      </template>
      <template #panel-1>
        <p>
          Tab 1 content (no padding or margins so consumer can control desired
          gutters) (no padding or margins so consumer can control desired
          gutters)
        </p>
        <p>
          Try tabbing into this. You'll be able to tab through the links, and
          then shift-tab back out. To get to the next tab you use the arrow key
          and enter|space to select. This is consistent with wai-aria practices
          <a href="https://www.w3.org/TR/wai-aria-practices/examples/tabs/tabs-2/tabs.html">
            aria manual activation example</a>.
        </p>
        <p>
          Random <a href="www.yahoo.com">yahoo link 1</a> and random
          <a href="www.yahoo.com">yahoo link 2</a>. Just testing some links out
          :)
        </p>
      </template>
      <template #tab-2>
        Tab 2
      </template>
      <template #panel-2>
        <p>
          Random <a href="www.yahoo.com">yahoo link 1</a> and random
          <a href="www.yahoo.com">yahoo link 2</a>. Just testing some links out
          :)
        </p>
      </template>
      <template #tab-foo>
        Tab Foo
      </template>
      <template #panel-foo>
        Panel Foo content (no padding or margins so consumer can control desired
        gutters)
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
      <template #tab-21>
        Tab 2
      </template>
      <template #panel-21>
        Panel 2
      </template>
    </Tabs>
  </div>
  <h2>Vertical Tabs</h2>
  <div class="mbs48 mbe16">
    <Tabs is-vertical>
      <template #tab-12>
        Tab 1
      </template>
      <template #panel-12>
        <p>
          Vertical tab 1 content (no padding or margins so consumer can control
          desired gutters) (no padding or margins so consumer can control
          desired gutters)
        </p>
        <p>
          Now you'll use the up and down arrows. Home and end still work the
          same. Random <a href="www.yahoo.com">yahoo link 1</a> and random
          <a href="www.yahoo.com">yahoo link 2</a>. Just testing some links out
          :)
        </p>
      </template>
      <template #tab-22>
        Tab 2
      </template>
      <template #panel-22>
        Vertical tab 2 content (no padding or margins so consumer can control
        desired gutters)
      </template>
    </Tabs>
  </div>
  <h2>Disabled Tabs</h2>
  <div class="mbs48 mbe16">
    <Tabs is-disabled>
      <template #tab-13>
        Tab 1
      </template>
      <template #panel-13>
        Panel 1
      </template>
      <template #tab-23>
        Tab 1
      </template>
      <template #panel-23>
        Panel 2
      </template>
    </Tabs>
  </div>
  <h2>Disabled Options</h2>
  <div class="mbs12 mbe16">
    <Tabs :disabled-options="disabledOptions">
      <template #tab-14>
        Tab 1
      </template>
      <template #panel-14>
        Disabled options only make sense if you do NOT supply isDisabled (as
        that disabled all the tab buttons), and you wish to selectively disable
        certain buttons. Here we've obviously disabled the first and third tab.
      </template>
      <template #tab-24>
        Tab 2
      </template>
      <template #panel-24>
        Panel 2
      </template>
      <template #tab-34>
        Tab 3
      </template>
      <template #panel-34>
        Panel 3
      </template>
      <template #tab-44>
        Tab 4
      </template>
      <template #panel-44>
        Panel 4
      </template>
    </Tabs>
  </div>
  <div class="mbs12 mbe16">
    <div>
      <p class="mbe12">
        Custom tabs using an AgnosticUI button requires two things:
      </p>
      <ul class="mbe24">
        <li>
          You need to use the <code>tabType="custom"</code> prop on the tab
        </li>
        <li>
          You need to use the <code>type="faux"</code> prop on the button. This
          is required because the tabs are already buttons so you'd have a
          nested button a11y violation otherwise.
        </li>
      </ul>
      <Tabs tab-type="custom">
        <template #tab-15>
          <Button
            type="faux"
            mode="primary"
            is-bordered
          >
            Tab One
          </Button>
        </template>
        <template #panel-15>
          <p>
            Tab 1 content (no padding or margins so consumer can control desired
            gutters) (no padding or margins so consumer can control desired
            gutters)
          </p>
          <p>
            Try tabbing into this. You'll be able to tab through the links, and
            then shift-tab back out. To get to the next tab you use the arrow
            key and enter|space to select. This is consistent with wai-aria
            practices
            <a href="https://www.w3.org/TR/wai-aria-practices/examples/tabs/tabs-2/tabs.html">
              aria manual activation example</a>.
          </p>
          <p>
            Random <a href="www.yahoo.com">yahoo link 1</a> and random
            <a href="www.yahoo.com">yahoo link 2</a>. Just testing some links
            out :)
          </p>
        </template>
        <template #tab-25>
          <Button
            type="faux"
            mode="primary"
            is-bordered
          >
            Tab Two
          </Button>
        </template>
        <template #panel-25>
          Tab 2 content (no padding or margins so consumer can control desired
          gutters)
        </template>
      </Tabs>
    </div>
  </div>
  <div class="mbs12 mbe16">
    <Avatar
      text="RL"
      size="small"
    />
    <Avatar text="AB" />
    <Avatar
      text="RL"
      size="large"
    />
    <Avatar
      text="RL"
      size="xlarge"
    />
    <Avatar
      is-square
      type="error"
      text="Sq"
    />
  </div>
  <div class="mbs12 mbe16">
    <h2>Icon</h2>
    <p class="mbs24 mbe40">
      Test this in Safari! We need to ensure that the component is actually
      applying a
      <code>width</code> to the SVG itself else Safari the icon won't be visible
    </p>
    <div class="mbe16">
      <Icon :size="14">
        <IconExOcticons />
      </Icon>
    </div>
    <div class="mbe16">
      <Icon :size="16">
        <IconExOcticons />
      </Icon>
    </div>
    <div class="mbe16">
      <Icon :size="18">
        <IconExOcticons />
      </Icon>
    </div>
    <div class="mbe16">
      <Icon :size="20">
        <IconExOcticons />
      </Icon>
    </div>
    <div class="mbe16">
      <Icon :size="24">
        <IconExOcticons />
      </Icon>
    </div>
    <div class="mbe16">
      <Icon :size="32">
        <IconExOcticons />
      </Icon>
    </div>
    <div class="mbe16">
      <Icon :size="36">
        <IconExOcticons />
      </Icon>
    </div>
    <div class="mbe16">
      <Icon :size="40">
        <IconExOcticons />
      </Icon>
    </div>
    <div class="mbe16">
      <Icon :size="48">
        <IconExOcticons />
      </Icon>
    </div>
    <div class="mbe16">
      <Icon :size="56">
        <IconExOcticons />
      </Icon>
    </div>
    <div class="mbe16">
      <Icon :size="64">
        <IconExOcticons />
      </Icon>
    </div>
    <div class="mbs12 mbe16">
      <h2>Avatars</h2>
      <Avatar>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            fill-rule="evenodd"
            d="M12 2.5a5.5 5.5 0 00-3.096 10.047 9.005 9.005 0 00-5.9 8.18.75.75 0 001.5.045 7.5 7.5 0 0114.993 0 .75.75 0 101.499-.044 9.005 9.005 0 00-5.9-8.181A5.5 5.5 0 0012 2.5zM8 8a4 4 0 118 0 4 4 0 01-8 0z"
          />
        </svg>
      </Avatar>
      <Avatar type="info">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            fill-rule="evenodd"
            d="M12 2.5a5.5 5.5 0 00-3.096 10.047 9.005 9.005 0 00-5.9 8.18.75.75 0 001.5.045 7.5 7.5 0 0114.993 0 .75.75 0 101.499-.044 9.005 9.005 0 00-5.9-8.181A5.5 5.5 0 0012 2.5zM8 8a4 4 0 118 0 4 4 0 01-8 0z"
          />
        </svg>
      </Avatar>
    </div>
    <div class="mbs12 mbe16">
      <Avatar img-url="https://joeschmoe.io/api/v1/random" />
      <Avatar
        is-transparent
        img-url="https://joeschmoe.io/api/v1/random"
      />
      <Avatar
        type="success"
        img-url="https://joeschmoe.io/api/v1/random"
      />
      <Avatar
        type="info"
        img-url="https://joeschmoe.io/api/v1/random"
      />
    </div>
    <div class="mbs12 mbe16">
      <span class="mie6">
        <Avatar
          type="success"
          text="S"
        />
      </span>
      <span class="mie6">
        <Avatar
          type="info"
          text="I"
        />
      </span>
      <span class="mie6">
        <Avatar
          type="warning"
          text="W"
        />
      </span>
      <span class="mie6">
        <Avatar
          type="error"
          text="E"
        />
      </span>
    </div>
    <h2 class="mbe16">
      Groups
    </h2>
    <div class="mbe16">
      <AvatarGroup>
        <Avatar text="AB" />
        <Avatar text="CD" />
        <Avatar text="WX" />
        <Avatar text="YZ" />
      </AvatarGroup>
    </div>
    <div class="mbe16">
      <AvatarGroup>
        <Avatar img-url="https://joeschmoe.io/api/v1/random" />
        <Avatar
          type="success"
          text="Yes"
        />
        <Avatar img-url="https://joeschmoe.io/api/v1/random" />
        <Avatar
          type="info"
          text="We"
        />
        <Avatar img-url="https://joeschmoe.io/api/v1/random" />
        <Avatar
          type="success"
          text="Can"
        />
      </AvatarGroup>
    </div>

    <div class="mbs12 mbe16">
      <Alert>Default</Alert>
    </div>
    <div class="mbs12 mbe16">
      <Alert is-rounded>
        Rounded
      </Alert>
    </div>
    <div class="mbs12 mbe16">
      <Alert is-border-all>
        Border all
      </Alert>
    </div>
    <div class="mbs12 mbe16">
      <Alert is-border-left>
        Border left
      </Alert>
    </div>
    <div class="mbs12 mbe16">
      <Alert type="success">
        Success
      </Alert>
    </div>
    <div class="mbs12 mbe16">
      <Alert type="info">
        Info
      </Alert>
    </div>
    <div class="mbs12 mbe16">
      <Alert type="warning">
        Warning
      </Alert>
    </div>
    <div class="mbs12 mbe16">
      <Alert type="error">
        Error
      </Alert>
    </div>
    <h2>Switch</h2>
    <div class="mbs12 mbe16">
      <Switch
        id="sw1"
        label="Switch small"
        size="small"
      />
      <Switch
        id="sw2"
        label="Switch default (medium)"
      />
      <Switch
        id="sw3"
        label="Switch large"
        size="large"
      />
      <Switch
        id="sw4"
        is-checked
        label="Switch large prechecked"
        size="large"
      />
      <Switch
        id="sw5"
        is-disabled
        label="Switch disabled"
        size="large"
      />
      <Switch
        id="sw6"
        is-bordered
        label="Switch bordered"
      />
      <Switch
        id="sw7"
        is-action
        is-checked
        label="Switch action prechecked"
        size="large"
      />
      <Switch
        id="sw8"
        is-action
        is-bordered
        label="Switch action bordered"
      />
    </div>
    <h2>Switch label on right</h2>
    <div>
      <Switch
        id="sw9"
        label-position="right"
        label="Switch label on right"
      />
    </div>
    <h2>Default Buttons</h2>
    <section>
      <Button is-bordered>
        Go
      </Button>
      <Button is-blank>
        Go
      </Button>
      <Button is-block>
        Go
      </Button>
      <Button is-rounded>
        Go
      </Button>
      <Button
        is-raised
        is-rounded
      >
        Go
      </Button>
      <Button
        is-bordered
        is-rounded
      >
        Go
      </Button>
    </section>
    <h2>Primary</h2>
    <section>
      <Button mode="primary">
        Go
      </Button>
      <Button
        mode="primary"
        :is-bordered="true"
      >
        Go
      </Button>
      <Button
        mode="primary"
        is-blank
      >
        Go
      </Button>
      <Button
        mode="primary"
        is-block
      >
        Go
      </Button>
      <Button
        mode="primary"
        is-rounded
      >
        Go
      </Button>
      <Button
        mode="primary"
        is-raised
        is-rounded
      >
        Go
      </Button>
      <Button
        mode="primary"
        is-bordered
        is-rounded
      >
        Go
      </Button>
    </section>
    <h2>Secondary</h2>
    <section>
      <Button mode="secondary">
        Go
      </Button>
      <Button
        mode="secondary"
        :is-bordered="true"
      >
        Go
      </Button>
      <Button
        mode="secondary"
        is-blank
      >
        Go
      </Button>
      <Button
        mode="secondary"
        is-block
      >
        Go
      </Button>
      <Button
        mode="secondary"
        is-rounded
      >
        Go
      </Button>
      <Button
        mode="secondary"
        is-raised
        is-rounded
      >
        Go
      </Button>
      <Button
        mode="secondary"
        is-bordered
        is-rounded
      >
        Go
      </Button>
    </section>
    <h2>Misc</h2>
    <section>
      <Button :is-disabled="true">
        Go
      </Button>
      <Button
        mode="primary"
        is-disabled
      >
        Go
      </Button>
      <Button
        mode="secondary"
        is-disabled
      >
        Go
      </Button>
      <Button size="small">
        Go
      </Button>
      <Button size="large">
        Go
      </Button>
      <Button :is-skinned="false">
        No Skin
      </Button>
    </section>
    <section>
      <Card>
        <div class="p16">
          Default
        </div>
        <div class="p16">
          Card
        </div>
      </Card>
      <div class="mbe24" />
      <Card is-border>
        <div class="p16">
          Border
        </div>
        <div class="p16">
          Card
        </div>
      </Card>
      <div class="mbe24" />
      <Card
        is-border
        is-rounded
      >
        <div class="p16">
          Border & Rounded
        </div>
        <div class="p16">
          Card
        </div>
      </Card>
      <div class="mbe24" />
      <Card
        is-stacked
        is-border
      >
        <div class="p16">
          Stacked & Border
        </div>
        <div class="p16">
          Card
        </div>
      </Card>
      <div class="mbe24" />
      <Card
        is-stacked
        is-shadow
      >
        <div class="p16">
          Stacked & Shadow
        </div>
        <div class="p16">
          Card
        </div>
      </Card>
      <div class="mbe24" />
      <Card
        is-stacked
        is-shadow
        is-animated
      >
        <div class="p16">
          Stacked, Animated (on hover), & Shadow
        </div>
        <div class="p16">
          Card
        </div>
      </Card>
      <div class="mbe24" />
      <Card
        type="success"
        is-stacked
      >
        <div class="p16">
          Success
        </div>
        <div class="p16">
          Card
        </div>
      </Card>
      <div class="mbe24" />
      <Card
        type="info"
        is-stacked
      >
        <div class="p16">
          Info
        </div>
        <div class="p16">
          Card
        </div>
      </Card>
      <div class="mbe24" />
      <Card
        type="warning"
        is-stacked
      >
        <div class="p16">
          Warning
        </div>
        <div class="p16">
          Card
        </div>
      </Card>
      <div class="mbe24" />
      <Card
        type="error"
        is-stacked
      >
        <div class="p16">
          Error
        </div>
        <div class="p16">
          Card
        </div>
      </Card>
      <div class="mbe24" />
      <Card
        is-stacked
        is-animated
      >
        <div class="p16">
          Stacked & Animated
        </div>
        <div class="p16">
          Card
        </div>
      </Card>
      <div class="mbe24" />
      <Card is-skinned>
        <div class="p16">
          Base Card
        </div>
        <div class="p16">
          No Skin
        </div>
      </Card>
      <div class="mbe24" />
      <Card css="addition-classes">
        <div class="p16">
          Custom CSS Class Overrides
        </div>
        <div class="p16">
          Inspect to see additional-classes
        </div>
      </Card>
    </section>
    <section>
      <ChoiceInput
        type="radio"
        legend-label="Radio"
        :options="[{ name: 'solo', value: 'stevie', label: 'Stevie Wonder'}, { name: 'solo', value: 'whitney', label: 'Whitney Houston' }, { name: 'solo', value: 'charlie', label: 'Charlie Wilson' }]"
      />

      <ChoiceInput
        type="checkbox"
        :options="[{ name: 'bands', value: 'bonjovi', label: 'Bon Jovi'}, { name: 'bands', value: 'stones', label: 'Rolling Stones' }, { name: 'bands', value: 'isleybros', label: 'Isley Brothers' }]"
        legend-label="Large"
        size="large"
        is-inline
      />
    </section>
    <section>
      <Input
        id="in1"
        size="small"
        placeholder="Enter name…"
        label="Small input"
        type="text"
      />
    </section>
    <section>
      <Input
        id="in2"
        placeholder="Enter name…"
        label="Default input"
        type="text"
      />
    </section>
    <section>
      <Input
        id="in3"
        size="large"
        placeholder="Enter name…"
        label="Large input"
        type="text"
      />
    </section>
    <section>
      <Input
        id="in4"
        is-inline
        placeholder="Enter name…"
        label="Inline input"
        type="text"
      />
    </section>
    <section>
      <Input
        id="in4b"
        is-rounded
        placeholder="Enter name…"
        label="Rounded input"
        type="text"
      />
    </section>
    <section>
      <Input
        id="in6"
        is-underlined
        placeholder="Enter name…"
        label="Underlined input"
        type="text"
      />
    </section>
    <section>
      <Input
        id="in7"
        is-underlined
        is-underlined-with-background
        placeholder="Enter name…"
        label="Underlined with background"
        type="text"
      />
    </section>
    <section>
      <Input
        id="in10"
        help-text="Some useful help text can go here"
        placeholder="Enter something…"
        label="Help text"
        type="text"
      />
    </section>
    <section>
      <Input
        id="in9"
        is-invalid
        invalid-text="It's impossible to have a string that is cool enough for this field."
        placeholder="Enter a very cool string…"
        label="Cool factor"
        type="text"
      />
    </section>
    <section>
      <Input
        id="in8"
        has-left-addon
        has-right-addon
        label="Input with addons"
      >
      <template #addonLeft>
        <InputAddonItem addon-left>
          <Icon
            :size="18"
            type="success"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M21.03 5.72a.75.75 0 010 1.06l-11.5 11.5a.75.75 0 01-1.072-.012l-5.5-5.75a.75.75 0 111.084-1.036l4.97 5.195L19.97 5.72a.75.75 0 011.06 0z"
              />
            </svg>
          </Icon>
        </InputAddonItem>
      </template>
      <template #addonRight>
        <InputAddonItem addon-right>
          <Icon
            :size="18"
            type="info"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M13 7.5a1 1 0 11-2 0 1 1 0 012 0zm-3 3.75a.75.75 0 01.75-.75h1.5a.75.75 0 01.75.75v4.25h.75a.75.75 0 010 1.5h-3a.75.75 0 010-1.5h.75V12h-.75a.75.75 0 01-.75-.75z" />
              <path
                fill-rule="evenodd"
                d="M12 1C5.925 1 1 5.925 1 12s4.925 11 11 11 11-4.925 11-11S18.075 1 12 1zM2.5 12a9.5 9.5 0 1119 0 9.5 9.5 0 01-19 0z"
              />
            </svg>
          </Icon>
        </InputAddonItem>
      </template>
      </Input>
    </section>
    <section class="mbe24">
      <Input
        id="in11"
        label="Textarea"
        type="textarea"
      />
    </section>
    <section class="mbe24">
      <Input
        id="in12"
        label="Textarea small"
        type="textarea"
        size="small"
        :rows="10"
        :cols="5"
      />
    </section>
    <section class="mbe24">
      <Input
        id="in13"
        label="Textarea large"
        type="textarea"
        size="large"
        :rows="10"
        cols="5"
      />
    </section>
    <section>
      <h2>Default close</h2>
      <Close />
      <h2>Sizes</h2>
      <Close />
      <Close size="small" />
      <Close size="large" />
      <Close size="xlarge" />
    </section>
    <section>
      <h2>Tags</h2>
      <Tag>unknown</Tag>
      <Tag is-uppercase>
        UpperCasE
      </Tag>
      <Tag
        shape="round"
        is-uppercase
      >
        round
      </Tag>
      <Tag shape="pill">
        pill badge
      </Tag>
      <Tag
        shape="circle"
        type="error"
      >
        2
      </Tag>
      <Tag type="success">
        success
      </Tag>
      <Tag type="info">
        info
      </Tag>
      <Tag type="warning">
        warning
      </Tag>
    </section>
    <section>
      <Disclose
        is-open
        title="Roger Federer"
      >
        Roger Federer is a Swiss professional tennis player. He is ranked No. 11
        in the world by the Association of Tennis Professionals. He has won 20
        Grand Slam men&apos;s singles titles, an all-time record shared with
        Rafael Nadal and Novak Djokovic (Wikipedia).
      </Disclose>
      <Disclose title="Serena Williams">
        Serena Jameka Williams is an American professional tennis player. She
        has won 23 Grand Slam singles titles, the most by any player in the Open
        Era, and the second-most of all time behind Margaret Court. The
        Women&apos;s Tennis Association ranked her singles world No. 1 on eight
        separate occasions between 2002 and 2017.(Wikipedia).
      </Disclose>
      <Disclose title="Stefi Graf">
        Stefanie Maria Graf is a German former professional tennis player. She
        was ranked world No. 1 for a record 377 weeks and won 22 Grand Slam
        singles titles, which is the second-most since the introduction of the
        Open Era in 1968 and third-most of all-time behind Margaret Court and
        Serena Williams (Wikipedia).
      </Disclose>
      <Disclose title="Andre Agassi">
        Andre Kirk Agassi is an American former world No. 1 tennis player. He is
        an eight-time major champion and a 1996 Olympic gold medalist, as well
        as a runner-up in seven other Grand Slam tournaments. Agassi was the
        first man to win four Australian Open singles titles in the Open Era
        (Wikipedia).
      </Disclose>
    </section>

    <section>
      <h2 class="mbe12">
        Header defaults to space between
      </h2>
      <Header>
        <template #logoleft>
          <a href="https://web.dev/">web.dev</a>
        </template>
        <template #headernav>
          <HeaderNav>
            <HeaderNavItem>
              <a href="https://css-tricks.com/">CSS-Tricks</a>
            </HeaderNavItem>
            <HeaderNavItem>
              <a href="https://developer.mozilla.org/en-US/">MDN</a>
            </HeaderNavItem>
          </HeaderNav>
        </template>
        <template #logoright>
          <a href="https://www.freecodecamp.org/">freeCodeCamp</a>
        </template>
      </Header>
      <h2 class="mbe12">
        Header content justify left
      </h2>
      <p class="mbe16">
        Pass in <code>isHeaderContentStart</code> and apply a global CSS class
        with <code>flex-grow: 0</code> on mobile (so it will stack as column),
        and <code>flex-grow: 1</code> at a breakpoint of your choosing to push
        other content over. Inspect <code>.header-flex-fill</code>
        in devtools to see an example.
      </p>
      <Header is-header-content-start>
        <template #logoleft>
          <a href="https://web.dev/">web.dev</a>
        </template>
        <template #headernav>
          <HeaderNav css="header-flex-fill">
            <HeaderNavItem>
              <a href="https://css-tricks.com/">CSS-Tricks</a>
            </HeaderNavItem>
            <HeaderNavItem>
              <a href="https://developer.mozilla.org/en-US/">MDN</a>
            </HeaderNavItem>
          </HeaderNav>
        </template>
        <template #logoright>
          <a href="https://www.freecodecamp.org/">freeCodeCamp</a>
        </template>
      </Header>
      <h2 class="mbe12">
        Header content justify right
      </h2>
      <p class="mbe16">
        Pass in <code>isHeaderContentEnd</code> and apply
        <code>flex-fill</code> to the <code>logoleft</code> content so grows
        (pushes content over).
      </p>
      <Header is-header-content-end>
        <template #logoleft>
          <a
            class="flex-fill"
            href="https://web.dev/"
          >web.dev</a>
        </template>
        <template #headernav>
          <HeaderNav css="header-mbe16">
            <HeaderNavItem>
              <a href="https://css-tricks.com/">CSS-Tricks</a>
            </HeaderNavItem>
            <HeaderNavItem>
              <a href="https://developer.mozilla.org/en-US/">MDN</a>
            </HeaderNavItem>
          </HeaderNav>
        </template>
        <template #logoright>
          <a href="https://www.freecodecamp.org/">freeCodeCamp</a>
        </template>
      </Header>
    </section>
  </div>
</template>
<style>
/* these styles are purely demonstration related styles only */
body {
  width: 600px;
  margin: 40px auto;
}
h1,
h3 {
  display: block;
  margin-top: 2rem;
  margin-bottom: 1rem;
}
button:not(:first-child) {
  margin-left: 0.25rem;
}
section {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-bottom: 40px;
}

details {
  width: 100%;
}

/**
 * Header Examples
 */
.header-flex-fill {
  flex-grow: 0;
}
.header-flex-fill {
  margin-inline-start: 0;
}

.header-mbe16 {
  margin-inline-end: 0;
}

@media (min-width: 970px) {
  .header-flex-fill {
    flex-grow: 1;
    margin-inline-start: var(--fluid-16);
  }

  .header-mbe16 {
    margin-inline-end: var(--fluid-16);
  }
}
</style>
