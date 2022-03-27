<template>
  <div class="counter">
    <button @click="subtract()">
      -
    </button>
    <pre>{{ count }}</pre>
    <button @click="add()">
      +
    </button>
  </div>
  <div class="counter-message">
    <slot />
  </div>
  <section class="demo">
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
    <h2>Buttons</h2>
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
    </section>
    <section>
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
      <h2>Close</h2>
      <Close />
      <Close size="large" />
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
    </section>

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
    <Icon :size="14">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path
          fill-rule="evenodd"
          d="M11.03 2.59a1.5 1.5 0 011.94 0l7.5 6.363a1.5 1.5 0 01.53 1.144V19.5a1.5 1.5 0 01-1.5 1.5h-5.75a.75.75 0 01-.75-.75V14h-2v6.25a.75.75 0 01-.75.75H4.5A1.5 1.5 0 013 19.5v-9.403c0-.44.194-.859.53-1.144l7.5-6.363zM12 3.734l-7.5 6.363V19.5h5v-6.25a.75.75 0 01.75-.75h3.5a.75.75 0 01.75.75v6.25h5v-9.403L12 3.734z"
        />
      </svg>
    </Icon>
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
    <Pagination
      @update-page="handlePaginationUpdate"
      :current="currentPaginationPage"
      :pages="paginationPages"
    />
    <h2>Spinners</h2>
    <Spinner
      size="small"
      aria-label="Custom aria"
    />
    <h2>Select</h2>
    <div class="mbs12 mbe16">
      <Select
        :options="[{ value: 'andre', label: 'Andre Agassi' }, { value: 'serena', label: 'Serena Williams'} , { value: 'mac', label: 'John McEnroe'}, { value: 'borg', label: 'Bjorn Borg'}, { value: 'althea', label: 'Althea Gibson'}, { value: 'roger', label: 'Roger Federer'}]"
        unique-id="sel1"
        name="select1"
        label-copy="Select the best tennis player of all time"
      />
    </div>
    <Switch
      id="sw2"
      label="Switch default (medium)"
    />
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
    <Table
      :rows="rows"
      :headers="headers"
      caption="My caption test"
    />
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
    <Input
      id="in1"
      size="small"
      placeholder="Enter name…"
      label="Small input"
      type="text"
    />
  </section>
  <!-- Rest of these result in a hydration mismatch error see also https://vuejs.org/api/ssr.html#rendertostring -->
  <section
    v-if="isMounted"
    client:load
  >
    <h2>Drawer</h2>
    <p>
      Note the Drawer, Dialog, and Toast components all use the Vue <code>Teleport</code> builtin
      but this is not available until the client side has mounted. Since this is an Astro page,
      we're mostly using SSR but we can tell Astro et al to wait until mounted and use the client load
      directive too. If you see this <code>section</code>
      it has conditional based on if we've mounted yet and the client:load directive too.
    </p>
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
    <Toasts
      vertical-position="top"
      horizontal-position="start"
    >
      <Toast
        :is-open="true"
        type="warning"
      >
        This is a sticky toast message
      </Toast>
    </Toasts>
  </section>
</template>

<script setup>
import { ref, onMounted, useCssModule } from "vue";
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
  Divider,
  EmptyState,
  Header,
  HeaderNav,
  HeaderNavItem,
  Icon,
  Input,
  usePagingGenerator,
  Loader,
  Pagination,
  Select,
  Spinner,
  Switch,
  Tabs,
  Table,
  Tag,
  // THE FOLLOWING USE TELEPORT so the solution is to conditionally mount
  // them once the page has mounted (e.g. see the `isMounted` usage on this page)
  // see https://vuejs.org/api/ssr.html#rendertostring
  Dialog,
  Drawer,
  Toast,
  Toasts,
} from "agnostic-vue";

const isMounted = ref(false);

onMounted(() => {
  isMounted.value = true;
});

const count = ref(0);
const add = () => (count.value = count.value + 1);
const subtract = () => (count.value = count.value - 1);

const createRow = (name, weapon, slams, birthdate) => ({
  name,
  weapon,
  slams,
  birthdate,
});
const styles = useCssModule();
const disabledOptions = ["tab-1", "tab-3"];

const tennisRoutes = [
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
];
const rows = [
  createRow("Roger Federer", "Forehand and serve", 20, "August 8, 1981"),
  createRow(
    "Andre Agassi",
    "Return of serve. Groundstrokes",
    8,
    "April 29, 1970"
  ),
  createRow("Steffi Graf", "Forehand", 22, "June 14, 1969"),
  createRow("Martina Navratilova", "Serve and volley", 18, "October 18, 1956"),
  createRow("Rafael Nadal", "Backhand and speed", 20, "June 3, 1986"),
  createRow(
    "Althea Gibson",
    "Speed, strength, and fluidity ",
    11,
    "August 25, 1927"
  ),
  createRow("Novak Djokovic", "Backhand and speed", 20, "May 22, 1987"),
  createRow("Arthur Ashe", "Serve and volley", 3, "July 10, 1943"),
];
const headers = [
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
    renderFn: (value) => `<div>${value}<span class="mis6">🏆</span></div>`,
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
];

const { currentPaginationPage, paginationPages, handlePaginationUpdate } =
  usePagingGenerator(1, 1, 20);

// Example of a timed toast aka toast with duration
const timedToast = ref(true);
setTimeout(() => {
  timedToast.value = false;
}, 10000);

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

// const log = (message, extra) => {
//   console.log(message, extra);
// };
</script>

<style>
.counter {
  display: grid;
  font-size: 2em;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  margin-top: 2em;
  place-items: center;
}
.counter-message {
  text-align: center;
}
.demo {
  margin: 0 auto;
  max-width: 48rem;
}
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
