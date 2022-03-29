<script>
import { ref } from "vue";
// This way you get the properties, reset, and utilities in one file:
// import "agnostic-vue/dist/common.min.css";
// But, you can also import them individually. Here we're just testing
// importing all of them, but, you can imagine a case where you don't
// want the CSS Utilities because they add to the payload weight.
import "agnostic-vue/dist/common.properties.min.css";
import "agnostic-vue/dist/common.resets.min.css";
import "agnostic-vue/dist/common.utilities.min.css";
import "agnostic-vue/dist/opinions.min.css";

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
  Dialog,
  Divider,
  Drawer,
  EmptyState,
  Header,
  HeaderNav,
  HeaderNavItem,
  Icon,
  Input,
  InputAddonItem,
  usePagingGenerator,
  Loader,
  Menu,
  Pagination,
  Select,
  Spinner,
  Switch,
  Tabs,
  Table,
  Tag,
  Toast,
  Toasts,
} from "agnostic-vue";

import IconExOcticons from "./components/IconExOcticons.vue";
import ToastIconExample from "./components/ToastIconExample.vue";

const createRow = (name, weapon, slams, birthdate) => ({
  name,
  weapon,
  slams,
  birthdate,
});

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
    Dialog,
    Disclose,
    Divider,
    Drawer,
    EmptyState,
    Header,
    HeaderNav,
    HeaderNavItem,
    Icon,
    IconExOcticons,
    Input,
    InputAddonItem,
    Loader,
    Menu,
    Pagination,
    Select,
    Switch,
    Spinner,
    Tabs,
    Table,
    Tag,
    Toast,
    Toasts,
    ToastIconExample,
  },

  setup() {
    const { currentPaginationPage, paginationPages, handlePaginationUpdate } =
      usePagingGenerator(1, 1, 20);

    // Example of a timed toast aka toast with duration
    const timedToast = ref(true);
    setTimeout(() => {
      timedToast.value = false;
    }, 10000);

    const toast1IsOpen = ref(true);
    const close1Toast = () => {
      toast1IsOpen.value = false;
    };
    const toast2IsOpen = ref(true);
    const close2Toast = () => {
      toast2IsOpen.value = false;
    };

    let dialog = null;
    const openDialog = () => {
      if (dialog) {
        dialog.show();
      }
    };

    const assignDialogRef = (instance) => {
      dialog = instance;
    };

    let drawer = null;
    const openDrawer = () => {
      if (drawer) {
        drawer.show();
      }
    };

    const closeDrawer = () => {
      if (drawer) {
        drawer.hide();
      }
    };

    const assignDrawerRef = (instance) => {
      drawer = instance;
    };

    let tosAgreedTo = ref(false);
    const toggleTosAgreedTo = () => {
      tosAgreedTo.value = !tosAgreedTo.value;
    };

    const log = (message, extra) => {
      console.log(message, extra);
    };

    return {
      log,
      tosAgreedTo,
      toggleTosAgreedTo,
      openDialog,
      assignDialogRef,
      closeDrawer,
      openDrawer,
      assignDrawerRef,
      currentPaginationPage,
      paginationPages,
      handlePaginationUpdate,
      timedToast,
      toast1IsOpen,
      toast2IsOpen,
      close1Toast,
      close2Toast,
    };
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
      rows: [
        createRow("Roger Federer", "Forehand and serve", 20, "August 8, 1981"),
        createRow(
          "Andre Agassi",
          "Return of serve. Groundstrokes",
          8,
          "April 29, 1970"
        ),
        createRow("Steffi Graf", "Forehand", 22, "June 14, 1969"),
        createRow(
          "Martina Navratilova",
          "Serve and volley",
          18,
          "October 18, 1956"
        ),
        createRow("Rafael Nadal", "Backhand and speed", 20, "June 3, 1986"),
        createRow(
          "Althea Gibson",
          "Speed, strength, and fluidity ",
          11,
          "August 25, 1927"
        ),
        createRow("Novak Djokovic", "Backhand and speed", 20, "May 22, 1987"),
        createRow("Arthur Ashe", "Serve and volley", 3, "July 10, 1943"),
      ],
      headers: [
        {
          label: "Name",
          key: "name",
          width: "25%",
          sortable: true,
        },
        {
          label: "Weapon",
          key: "weapon",
          width: "45%",
        },
        {
          label: "Grand Slams",
          key: "slams",
          width: "13%",
          sortable: true,
          // Only use this approach for trusted input that you control
          renderFn: (value) =>
            `<div>${value}<span class="mis6">🏆</span></div>`,
        },
        {
          label: "Birthdate",
          key: "birthdate",
          sortable: true,
          sortFn: (a, b) => {
            // Naive date comparisons; but we're controlling data so ;-)
            const d1 = new Date(a).getTime() || -Infinity;
            const d2 = new Date(b).getTime() || -Infinity;
            if (d1 > d2) {
              return 1;
            }
            if (d1 < d2) {
              return -1;
            }
            return 0;
          },
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
  <div id="portal-root" />
  <section>
    <Toasts
      vertical-position="top"
      horizontal-position="start"
    >
      <Toast
        :is-open="true"
        type="warning"
      >
        <ToastIconExample
          icon-type="warning"
          utility-classes="mie8"
        >
          <template #icon />
        </ToastIconExample>
        This is a sticky toast message
      </Toast>
    </Toasts>
    <Toasts
      vertical-position="top"
      horizontal-position="end"
    >
      <Toast
        :is-open="timedToast"
        type="info"
      >
        <ToastIconExample
          icon-type="info"
          utility-classes="mie8"
        >
          <template #icon />
        </ToastIconExample>
        Self timed toast that will close in 10 seconds.
      </Toast>
      <div className="mbe14" />
      <Toast
        :is-open="true"
        type="dark"
      >
        <ToastIconExample
          icon-type="dark"
          utility-classes="mie8"
        >
          <template #icon />
        </ToastIconExample>
        Toast top end. Sticky.
      </Toast>
      <div className="mbe14" />
      <Toast
        :is-open="true"
        type="dark"
      >
        <ToastIconExample
          icon-type="dark"
          utility-classes="mie8"
        >
          <template #icon />
        </ToastIconExample>
        Toast 2 top end. Sticky.
      </Toast>
    </Toasts>
    <Toasts
      vertical-position="top"
      horizontal-position="center"
    >
      <Toast
        :is-open="timedToast"
        type="success"
      >
        <ToastIconExample
          icon-type="success"
          utility-classes="mie8"
        >
          <template #icon />
        </ToastIconExample>
        <div class="flex-fill">
          Self timed toast that will close in 10 seconds.
        </div>
      </Toast>
      <div className="mbe14" />
      <Toast
        :is-open="true"
        type="error"
      >
        <ToastIconExample
          icon-type="error"
          utility-classes="mie8"
        >
          <template #icon />
        </ToastIconExample>
        This is an
        &nbsp;<code>aria-live</code>&nbsp;
        &ldquo;assertive&rdquo; error toast
      </Toast>
    </Toasts>
    <Toasts
      vertical-position="bottom"
      horizontal-position="center"
    >
      <Toast
        :is-open="toast1IsOpen"
        type="dark"
      >
        <ToastIconExample
          icon-type="dark"
          utility-classes="mie8"
        >
          <template #icon />
        </ToastIconExample>
        <div class="flex-fill">
          This is a closable toast message
        </div>
        <Close
          @click="close1Toast()"
          :style="{ 'color': 'var(--agnostic-light)' }"
        />
      </Toast>
      <div className="mbe14" />
      <Toast
        :is-open="toast2IsOpen"
        type="success"
      >
        <ToastIconExample
          icon-type="success"
          utility-classes="mie8"
        >
          <template #icon />
        </ToastIconExample>
        <div class="flex-fill">
          This is a closable toast message
        </div>
        <Close
          @click="close2Toast()"
          :style="{ 'color': 'var(--agnostic-action-from)' }"
        />
      </Toast>
      <div className="mbe14" />
      <Toast
        :is-open="timedToast"
        type="error"
      >
        <ToastIconExample
          icon-type="error"
          utility-classes="mie8"
        >
          <template #icon />
        </ToastIconExample>
        <div class="flex-fill">
          Self timed toast that will close in 10 seconds.
        </div>
      </Toast>
    </Toasts>
    <h2>Drawer</h2>
    <Button
      mode="primary"
      :is-bordered="true"
      :is-block="true"
      :is-rounded="true"
      type="button"
      @click="openDrawer"
    >
      Open first bottom drawer via drawerRef
    </Button>
    <div class="mbs24 mbe16" />
    <Button
      type="button"
      data-a11y-dialog-show="drawer-bottom-test"
      mode="primary"
      :is-bordered="true"
      :is-block="true"
      :is-rounded="true"
    >
      Open the first bottom drawer via data attribute
    </Button>
    <Drawer
      id="drawer-bottom-test"
      drawer-root="#portal-root"
      placement="bottom"
      title="My Drawer Title"
      @instance="assignDrawerRef"
    >
      <div class="flex-fill">
        <p>This is main drawer slot. To test positioning, update the placement property to one of: start | end | top | bottom.</p>
        <button
          :style="{ position: 'absolute', bottom: '1rem', left: '1rem', right: '1rem'}"
          @click="closeDrawer"
        >
          Close from within slot using instance
        </button>
      </div>
    </Drawer>
    <div class="mbs24 mbe16" />
    <Button
      type="button"
      data-a11y-dialog-show="drawer-end-test"
      mode="primary"
      :is-bordered="true"
      :is-block="true"
      :is-rounded="true"
    >
      Open second right drawer via data attribute
    </Button>
    <Drawer
      id="drawer-end-test"
      drawer-root="#portal-root"
      placement="end"
      title="My Drawer Title"
    >
      <p>This is main drawer slot</p>
    </Drawer>
    <div class="mbs24 mbe16" />
    <Button
      type="button"
      data-a11y-dialog-show="drawer-start-test"
      mode="primary"
      :is-bordered="true"
      :is-block="true"
      :is-rounded="true"
    >
      Open left drawer via data attribute
    </Button>
    <Drawer
      id="drawer-start-test"
      drawer-root="#portal-root"
      placement="start"
      title="My Drawer Title"
    >
      <p>This is main drawer slot</p>
    </Drawer>
    <div class="mbs24 mbe16" />
    <Button
      type="button"
      data-a11y-dialog-show="drawer-top-test"
      mode="primary"
      :is-bordered="true"
      :is-block="true"
      :is-rounded="true"
    >
      Open top drawer via data attribute
    </Button>
    <Drawer
      id="drawer-top-test"
      drawer-root="#portal-root"
      placement="top"
      title="My Drawer Title"
    >
      <p>This is main drawer slot</p>
    </Drawer>
    <h2 class="mbs40">
      Dialog
    </h2>
    <p class="mbe24">
      The following opens because we've assigned a dialog <code>ref</code>:
    </p>
    <Button
      mode="primary"
      :is-bordered="true"
      :is-block="true"
      :is-rounded="true"
      type="button"
      @click="openDialog"
    >
      Open dialog via dialogRef
    </Button>
    <p class="mbs24 mbe16">
      The following opens because a11y-dialog uses the <code>data-a11y-dialog-show</code> data attribute:
    </p>
    <Button
      type="button"
      data-a11y-dialog-show="a11y-dialog"
      mode="primary"
      :is-bordered="true"
      :is-block="true"
      :is-rounded="true"
    >
      Open the dialog via data attribute
    </Button>
    <Dialog
      id="a11y-dialog"
      dialog-root="#portal-root"
      :is-animation-fade-in="true"
      :is-animation-slide-up="true"
      role="dialog"
      :class-names="{
        title: 'h4 mbe18 flex justify-center',
      }"
      @instance="assignDialogRef"
    >
      <template #title>
        My Dialog
      </template>
      <p
        class="mbs16 mbe16"
        id="dialog-example-description"
      >
        Fill in the form below to receive our newsletter!
      </p>
      <form class="dialog-form-demo">
        <Input
          :is-rounded="true"
          label="Email (required)"
          type="email"
          name="EMAIL"
          id="email"
          placeholder="email@example.com"
          required
        />
        <div class="mbe16" />
        <Button
          type="submit"
          mode="primary"
          :is-rounded="true"
          :is-block="true"
        >
          Sign Up
        </Button>
      </form>
    </Dialog>
  </section>
  <section>
    <h2>Dialog 2</h2>
    <Button
      type="button"
      mode="primary"
      :is-bordered="true"
      :is-block="true"
      :is-rounded="true"
      data-a11y-dialog-show="a11y-dialog2"
    >
      Open dialog 2
    </Button>
    <Dialog
      id="a11y-dialog2"
      dialog-root="#portal-root"
      close-button-label="My close button label"
      close-button-position="last"
      role="alertdialog"
      :class-names="{
        container: this.$style['my-dialog-container'],
        overlay: this.$style['my-dialog-overlay'],
        document: this.$style['my-dialog-content'],
        title: 'h4 mbe18 flex justify-center',
        closeButton: this.$style['close-button-demo'],
      }"
    >
      <template #title>
        Dialog — Custom Close Button
      </template>
      <p
        class="mbs16 mbe16"
        id="dialog-example-description"
      >
        For the cancel button we have used an AgnosticUI <code>Button</code> of type <code>type="faux</code>
        This generates a div that looks like a button. As <code>vue-a11y-dialog</code> generates its own
        button around <code>closeButtonContent</code>, this prevents an unwanted nested buttons situation.
      </p>
      <p class="mbe16">
        You'll also notice that this dialog did not &ldquo;slide up&rdquo; or &ldquo;fade in&rdquo;
        as we did NOT pass in either <code>:is-animation-fade-in="true"</code> or <code>:is-animation-slide-up="true"</code>.
        Both of these default to <code>false</code>.
      </p>
      <p class="mbe16">
        Lastly, you'll note that the role is <code>alertdialog</code> which results in opting out of
        ESC closing the dialog.
      </p>
      <form class="dialog-form-demo">
        <Input
          :is-rounded="true"
          label="Email (required)"
          type="email"
          name="EMAIL"
          id="email"
          placeholder="email@example.com"
          required
        />
        <div class="mbe16" />
        <Button
          type="submit"
          mode="primary"
          :is-rounded="true"
          :is-block="true"
        >
          Sign Up
        </Button>
      </form>
      <template #closeButtonContent>
        <Button
          type="faux"
          :is-rounded="true"
          :is-bordered="true"
          :is-block="true"
        >
          Cancel
        </Button>
      </template>
    </Dialog>
  </section>
  <section>
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
        @selected="(e) => log('Single: selected item:', e.target.value)"
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
        @selected="(e) => log('Multi: selected items', Array.from(e.target.selectedOptions, (item) => item.value))"
      />
    </div>
    <h2>Table</h2>
    <div class="mbs24 mbe16">
      <Table
        :rows="rows"
        :headers="headers"
        caption="My caption test"
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
          <ToastIconExample
            icon-type="warning"
            utility-classes="mie8"
          >
            <template #icon />
          </ToastIconExample>
          <p class="flex-fill">
            Success alert w/projected icon
          </p>
        </Alert>
      </div>
      <div class="mbs12 mbe16">
        <Alert type="info">
          <ToastIconExample
            icon-type="info"
            utility-classes="mie8"
          >
            <template #icon />
          </ToastIconExample>
          <p class="flex-fill">
            Info alert w/projected icon
          </p>
        </Alert>
      </div>
      <div class="mbs12 mbe16">
        <Alert type="warning">
          <ToastIconExample
            icon-type="warning"
            utility-classes="mie8"
          >
            <template #icon />
          </ToastIconExample>
          <p class="flex-fill">
            Warning alert w/projected icon
          </p>
        </Alert>
      </div>
      <div class="mbs12 mbe16">
        <Alert type="error">
          <ToastIconExample
            icon-type="error"
            utility-classes="mie8"
          >
            <template #icon />
          </ToastIconExample>
          <p class="flex-fill">
            Error alert w/projected icon
          </p>
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
          type="radio"
          legend-label="Radio"
          :is-disabled="true"
          :options="[{ name: 'solo', value: 'stevie', label: 'Stevie Wonder'}, { name: 'solo', value: 'whitney', label: 'Whitney Houston' }, { name: 'solo', value: 'charlie', label: 'Charlie Wilson' }]"
        />
        <ChoiceInput
          type="radio"
          legend-label="Radio"
          :is-invalid="true"
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
        <p class="mbs40 mbe24">
          Pass in <code>false</code> to <code>:is-fieldset</code> (Vue)
          <code>isFieldset</code> (React, Svelte) to remove the fieldset border and it will be hidden
          from sighted users.
          Choice Inputs Shifting #118. Remove body widths and narrow viewport.
          Once text wraps, the check should maintain integrity:
        </p>
        <ChoiceInput
          type="checkbox"
          :is-fieldset="false"
          legend-label="agree to terms of service toggle"
          :is-invalid="!tosAgreedTo"
          :options="[
            { name: 'tos', value: 'tos', label: 'I have read and agree to the Terms of Service'},
          ]"
          @change="toggleTosAgreedTo"
        />
        <div class="mbe24" />
        <Button
          mode="primary"
          :is-disabled="!tosAgreedTo"
        >
          Submit
        </Button>
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
        <h2>Spinners</h2>
        <Spinner
          size="small"
          aria-label="Custom aria"
        />
        <div class="mbe24" />
        <Spinner aria-label="Custom aria" />
        <div class="mbe24" />
        <Spinner
          size="large"
          aria-label="Custom aria"
        />
        <p class="mbs16 mbe24">
          Custom color via <code>--agnostic-spinner-color</code> and size <code>xlarge</code>:
        </p>
        <div
          class="mbe24"
          style="--agnostic-spinner-color: salmon;"
        >
          <Spinner
            size="xlarge"
            aria-label="Custom aria"
          />
        </div>
      </section>
      <section>
        <h2>Loaders</h2>
        <Loader />
        <p class="mbs16 mbe24">
          Custom color via <code>--agnostic-loading-color</code> and size <code>large</code>:
        </p>
        <div
          class="mbe24"
          style="--agnostic-loading-color: salmon;"
        >
          <Loader size="large" />
        </div>
      </section>
      <section>
        <h2>Menu</h2>
        <Menu
          id="menu1"
          menuTitle="Players"
          disabledItems="['menuitem-3']"
        >
          <template #menuitem-1>Menu Item 1</template>
          <template #menuitem-2>Menu Item 2</template>
          <template #menuitem-3>Menu Item 3</template>
          <template #menuitem-4>Menu Item 4</template>
          <template #menuitem-5>Menu Item 5</template>
          <template #icon>&#9662;</template>
        </Menu>
        <div class="mbe16" />
        <Menu
          id="menu2"
          menuTitle="Players (!closeOnClickOutside)"
          :closeOnClickOutside="false"
        >
          <template #menuitem-1>Menu Item 1</template>
          <template #menuitem-2>Menu Item 2</template>
          <template #menuitem-3>Menu Item 3</template>
          <template #menuitem-4>Menu Item 4</template>
          <template #menuitem-5>Menu Item 5</template>
          <template #icon>&#9662;</template>
        </Menu>
        <div class="mbe16" />
        <Menu
          id="menu3"
          menuTitle="Players (!closeOnSelect)"
          :closeOnSelect="false"
        >
          <template #menuitem-1>Menu Item 1</template>
          <template #menuitem-2>Menu Item 2</template>
          <template #menuitem-3>Menu Item 3</template>
          <template #menuitem-4>Menu Item 4</template>
          <template #menuitem-5>Menu Item 5</template>
          <template #icon>&#9662;</template>
        </Menu>
        <div class="mbe16" />
        <Menu
          id="menu4"
          menuTitle="Players (!closeOnClickOutside && !closeOnSelect)"
          :closeOnClickOutside="false"
          :closeOnSelect="false"
        >
          <template #menuitem-1>Menu Item 1</template>
          <template #menuitem-2>Menu Item 2</template>
          <template #menuitem-3>Menu Item 3</template>
          <template #menuitem-4>Menu Item 4</template>
          <template #menuitem-5>Menu Item 5</template>
          <template #icon>&#9662;</template>
        </Menu>
        <div class="mbe16" />
        <Menu
          id="menu5"
          menuTitle="Players (small)"
          size="small"
        >
          <template #menuitem-1>Menu Item 1</template>
          <template #menuitem-2>Menu Item 2</template>
          <template #menuitem-3>Menu Item 3</template>
          <template #menuitem-4>Menu Item 4</template>
          <template #menuitem-5>Menu Item 5</template>
          <template #icon>&#9662;</template>
        </Menu>
        <div class="mbe16" />
        <Menu
          id="menu5"
          menuTitle="Players (large)"
          size="large"
          disabledItems="['menuitem-2', 'menuitem-5']"
        >
          <template #menuitem-1>Menu Item 1</template>
          <template #menuitem-2>Menu Item 2</template>
          <template #menuitem-3>Menu Item 3</template>
          <template #menuitem-4>Menu Item 4</template>
          <template #menuitem-5>Menu Item 5</template>
          <template #icon>&#9662;</template>
        </Menu>
        <div class="mbe16" />
        <Menu
          id="menu5"
          menuTitle="Players (all disabled)"
          :isDisabled="true"
        >
          <template #menuitem-1>Menu Item 1</template>
          <template #menuitem-2>Menu Item 2</template>
        </Menu>
        <div class="mbe16" />
      </section>
      <section>
        <Pagination
          @update-page="handlePaginationUpdate"
          :current="currentPaginationPage"
          :pages="paginationPages"
        />
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
        <EmptyState>
          <template #header>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="#999"
              width="40"
              height="40"
              viewBox="0 0 24 24"
            >
              <path
                fill-rule="evenodd"
                d="M12 2.5a5.5 5.5 0 00-3.096 10.047 9.005 9.005 0 00-5.9 8.18.75.75 0 001.5.045 7.5 7.5 0 0114.993 0 .75.75 0 101.499-.044 9.005 9.005 0 00-5.9-8.181A5.5 5.5 0 0012 2.5zM8 8a4 4 0 118 0 4 4 0 01-8 0z"
              />
            </svg>
          </template>
          <template #body>
            <div class="h4">
              No connections yet
            </div>
            <p
              class="mbe16"
              style="color: var(--agnostic-gray-dark);"
            >
              Click below to add some friends
            </p>
          </template>
          <template #footer>
            <Button mode="primary">
              Invite friend
            </Button>
          </template>
        </EmptyState>
      </section>
      <section>
        <h2 class="mbe24">
          Dividers
        </h2>
        <Divider />
        <Divider>
          <template #dividerContent>
            Boom!
          </template>
        </Divider>
        <Divider justify="start">
          <template #dividerContent>
            Start
          </template>
        </Divider>
        <Divider justify="end">
          <template #dividerContent>
            End
          </template>
        </Divider>
        <Divider size="small">
          <template #dividerContent>
            Small
          </template>
        </Divider>
        <Divider size="large">
          <template #dividerContent>
            Large
          </template>
        </Divider>
        <Divider size="xlarge">
          <template #dividerContent>
            XLarge
          </template>
        </Divider>
        <Divider type="success">
          <template #dividerContent>
            Success
          </template>
        </Divider>
        <Divider type="info">
          <template #dividerContent>
            Info
          </template>
        </Divider>
        <Divider type="warning">
          <template #dividerContent>
            Warning
          </template>
        </Divider>
        <Divider type="error">
          <template #dividerContent>
            Error
          </template>
        </Divider>
        <Divider
          type="info"
          size="small"
        >
          <template #dividerContent>
            <Button
              mode="primary"
              is-bordered
              is-rounded
            >
              Go
            </Button>
          </template>
        </Divider>
        <div class="flex mbs40 mbe48">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          <Divider :is-vertical="true">
            <template #dividerContent>
              yes
            </template>
          </Divider>
          <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</p>
          <Divider :is-vertical="true">
            <template #dividerContent>
              sir!
            </template>
          </Divider>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
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
  </section>
</template>
<style>
/* these styles are purely demonstration related styles only */
body {
  width: 55rem;
  margin: var(--fluid-40) auto;
  font-family: var(--agnostic-font-family-body);
  font-size: var(--agnostic-body);
  color: var(--agnostic-font-color);
  -webkit-font-smoothing: antialiased;
  line-height: 1.5;
}
h1,
h3 {
  display: block;
  margin-top: 2rem;
  margin-bottom: 1rem;
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

<style module>
.close-button-demo {
  background-color: transparent;
  border: transparent;
  width: 100%;
  margin-block-start: 0.5rem;
}
.my-dialog-container {
  display: flex;
  z-index: 2;
  /* This is just to override the silly centered app demo css :) */
  text-align: left;
}

.my-dialog-overlay {
  background-color: rgba(43, 46, 56, 0.9);
  animation: fade-in 200ms both;
}

.my-dialog-overlay,
.my-dialog-container {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
}

/* Crucial—dialog w/not hide visually without this rule */
.my-dialog-container[aria-hidden="true"] {
  display: none;
}

.my-dialog-content {
  background-color: rgb(255, 255, 255);
  margin: auto;
  z-index: 2;
  position: relative;
  padding-block-start: 1.5rem;
  padding-block-end: 2rem;
  padding-inline-start: 2em;
  padding-inline-end: 2rem;
  max-width: 90%;
  width: 600px;
  border-radius: 2px;
}

.my-close-button {
  display: inline-block;
  cursor: pointer;
  padding-inline-start: 2rem;
  padding-inline-end: 2rem;
  background-color: transparent;
  border-radius: 0.1875rem;
  border: 1px solid #036dc9;
  color: #036dc9;
  line-height: 2rem;
  text-align: center;
}

.my-dialog-title {
  font-size: 2rem;
  font-weight: 300;
  letter-spacing: 0.005em;
  margin-block-start: 0.5rem;
  margin-block-end: 0.25rem;
}
</style>
