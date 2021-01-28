import AgInput from "./Input.vue";
import InputAddonItem from "./InputAddonItem.vue";
import { action } from "@storybook/addon-actions";

const actionsData = {
  blur: action("blur"),
  change: action("change"),
  focus: action("focus"),
};

const wrapper = () => {
  return {
    template: '<div style="padding: 2rem;"><story/></div>',
  };
};

export default {
  title: "Inputs",
  decorators: [wrapper],
  components: [AgInput, InputAddonItem],
};

export const InputAddons = () => ({
  components: { AgInput, InputAddonItem },
  template:
    '<AgInput hasLeftAddon hasRightAddon uniqueId="myUniqueId" v-model="name" label="Input with addons"><template v-slot:addonLeft><InputAddonItem addonLeft><span>L</span></InputAddonItem></template><template v-slot:addonRight><InputAddonItem addonRight><span>R</span></InputAddonItem></template></AgInput>',
  props: ["value"],
  data() {
    return {
      name: "",
    };
  },
});

export const Default = () => ({
  components: { AgInput },
  template:
    '<AgInput uniqueId="myUniqueId" v-model="name" label="Default input" @focus="focus" @change="change" @blur="blur" />',
  methods: actionsData,
  props: ["value"],
  data() {
    return {
      name: "",
    };
  },
});

export const Inline = () => ({
  components: { AgInput },
  template:
    '<AgInput uniqueId="myUniqueId" isInline v-model="name" label="Inline input" @focus="focus" @change="change" @blur="blur" />',
  methods: actionsData,
  props: ["value"],
  data() {
    return {
      name: "",
    };
  },
});

export const Rounded = () => ({
  components: { AgInput },
  template:
    '<AgInput isRounded uniqueId="myUniqueId" v-model="name" label="Rounded input" @focus="focus" @change="change" @blur="blur" />',
  methods: actionsData,
  props: ["value"],
  data() {
    return {
      name: "",
    };
  },
});

export const Underlined = () => ({
  components: { AgInput },
  template:
    '<AgInput isUnderlined uniqueId="myUniqueId" v-model="name" label="Underlined input" @focus="focus" @change="change" @blur="blur" />',
  methods: actionsData,
  props: ["value"],
  data() {
    return {
      name: "",
    };
  },
});

export const UnderlinedWithBackground = () => ({
  components: { AgInput },
  template:
    '<AgInput isUnderlined isUnderlinedWithBackground uniqueId="myUniqueId" v-model="name" label="Underlined input" @focus="focus" @change="change" @blur="blur" />',
  methods: actionsData,
  props: ["value"],
  data() {
    return {
      name: "",
    };
  },
});

export const Large = () => ({
  components: { AgInput },
  template:
    '<AgInput size="large" uniqueId="myUniqueId" v-model="name" label="Large input" @focus="focus" @change="change" @blur="blur" />',
  methods: actionsData,
  props: ["value"],
  data() {
    return {
      name: "",
    };
  },
});

export const Small = () => ({
  components: { AgInput },
  template:
    '<AgInput size="small" uniqueId="myUniqueId" v-model="name" label="Small input" @focus="focus" @change="change" @blur="blur" />',
  methods: actionsData,
  props: ["value"],
  data() {
    return {
      name: "",
    };
  },
});

export const Disabled = () => ({
  components: { AgInput },
  template:
    '<AgInput isDisabled uniqueId="myUniqueId" v-model="name" label="Disabled input" @focus="focus" @change="change" @blur="blur" />',
  methods: actionsData,
  props: ["value"],
  data() {
    return {
      name: "",
    };
  },
});

export const HelpText = () => ({
  components: { AgInput },
  template:
    '<AgInput helpText="Some useful help text." uniqueId="myUniqueId" v-model="name" label="Help text" @focus="focus" @change="change" @blur="blur" />',
  methods: actionsData,
  props: ["value"],
  data() {
    return {
      name: "",
    };
  },
});

export const InvalidText = () => ({
  components: { AgInput },
  template:
    '<AgInput isInvalid invalidText="This field has errors." uniqueId="myUniqueId" v-model="name" label="Invalid text" @focus="focus" @change="change" @blur="blur" />',
  methods: actionsData,
  props: ["value"],
  data() {
    return {
      name: "",
    };
  },
});

export const InvalidTextSmall = () => ({
  components: { AgInput },
  template:
    '<AgInput isInvalid size="small" invalidText="This field has errors." uniqueId="myUniqueId" v-model="name" label="Invalid text—size small results in smaller input and error text" @focus="focus" @change="change" @blur="blur" />',
  methods: actionsData,
  props: ["value"],
  data() {
    return {
      name: "",
    };
  },
});

export const InvalidTextLarge = () => ({
  components: { AgInput },
  template:
    '<AgInput isInvalid size="large" invalidText="This field has errors." uniqueId="myUniqueId" v-model="name" label="Invalid text—size large results in larger input and error text" @focus="focus" @change="change" @blur="blur" />',
  methods: actionsData,
  props: ["value"],
  data() {
    return {
      name: "",
    };
  },
});

export const VModelInitialValueAndPropogatesAllNativeEvents = () => ({
  components: { AgInput },
  template:
    '<div><p>Open console and do things like backspace, blur, enter, etc. Becuase we bind $listeners, all native events should be available.</p><AgInput uniqueId="myUniqueId" v-model="name" @blur="onBlur" @keydown.delete="onBackspaceDelete" @keydown.esc="onEscape" @keyup.page-down="onPageDown" @keydown.enter="onEnter" label="Le Name" placeholder="Name" /><strong style="display: inline-block;margin-top: 24px;">Bound variable: {{ name }}</strong></div>',
  data() {
    return {
      name: "",
    };
  },
  methods: {
    onEnter: (ev) => {
      console.log("onEnter: ", ev);
    },
    onBlur: (ev) => {
      console.log("onBlur: ", ev);
    },
    onEscape: (ev) => {
      console.log("onEscape: ", ev);
    },
    onBackspaceDelete: (ev) => {
      console.log("onBackspaceDelete: ", ev);
    },
    onPageDown: (ev) => {
      console.log("onPageDown: ", ev);
    },
    onUpdate: (ev) => {
      console.log("onUpdate: ", ev);
    },
  },
});
// https://vuejs.org/v2/guide/forms.html

export const Search = () => ({
  components: { AgInput },
  template:
    '<AgInput uniqueId="myUniqueId" type="search" placeholder="Search" label="Search" v-model="name" @keydown.enter="onEnter" />',
  props: ["value", "label", "type"],
  model: {
    prop: "value",
    event: "update",
  },
  data() {
    return {
      name: "",
    };
  },
  methods: {
    onEnter: (ev) => {
      console.log(ev);
    },
  },
});

export const Telephone = () => ({
  components: { AgInput },
  template:
    '<AgInput uniqueId="myUniqueId" type="tel" placeholder="Tel" label="Telephone" v-model="name" @keydown.enter="onEnter" />',
  props: ["value", "label", "type"],
  model: {
    prop: "value",
    event: "update",
  },
  data() {
    return {
      name: "",
    };
  },
  methods: {
    onEnter: (ev) => {
      console.log(ev);
    },
  },
});

export const URL = () => ({
  components: { AgInput },
  template:
    '<AgInput uniqueId="myUniqueId" type="url" placeholder="Type url" label="URL" v-model="name" @keydown.enter="onEnter" />',
  props: ["value", "label", "type"],
  model: {
    prop: "value",
    event: "update",
  },
  data() {
    return {
      name: "",
    };
  },
  methods: {
    onEnter: (ev) => {
      console.log(ev);
    },
  },
});

export const Number = () => ({
  components: { AgInput },
  template:
    '<AgInput uniqueId="myUniqueId" type="number" placeholder="Type number" label="Number" v-model="name" @keydown.enter="onEnter" />',
  props: ["value", "label", "type"],
  model: {
    prop: "value",
    event: "update",
  },
  data() {
    return {
      name: "",
    };
  },
  methods: {
    onEnter: (ev) => {
      console.log(ev);
    },
  },
});

export const Password = () => ({
  components: { AgInput },
  template:
    '<AgInput uniqueId="myUniqueId" type="password" placeholder="Type password" label="Password" v-model="name" @keydown.enter="onEnter" />',
  props: ["value", "label", "type"],
  model: {
    prop: "value",
    event: "update",
  },
  data() {
    return {
      name: "",
    };
  },
  methods: {
    onEnter: (ev) => {
      console.log(ev);
    },
  },
});

export const Email = () => ({
  components: { AgInput },
  template:
    '<AgInput uniqueId="myUniqueId" type="email" placeholder="Type email" label="Email" v-model="name" @keydown.enter="onEnter" />',
  props: ["value", "label", "type"],
  model: {
    prop: "value",
    event: "update",
  },
  data() {
    return {
      name: "",
    };
  },
  methods: {
    onEnter: (ev) => {
      console.log(ev);
    },
  },
});

export const TextareaAgInput = () => ({
  components: { AgInput },
  template:
    '<AgInput type="textarea" rows="10" cols="5" uniqueId="myUniqueIdTextarea" v-model="name" label="Textarea" @focus="focus" @change="change" @blur="blur" />',
  props: ["value"],
  data() {
    return {
      name: "Predefined content",
    };
  },
});

export const TextareaAgInputSmall = () => ({
  components: { AgInput },
  template:
    '<AgInput type="textarea" size="small" rows="10" cols="5" uniqueId="myUniqueIdTextarea" v-model="name" label="Textarea" @focus="focus" @change="change" @blur="blur" />',
  props: ["value"],
  data() {
    return {
      name: "Predefined content",
    };
  },
});

export const TextareaAgInputLarge = () => ({
  components: { AgInput },
  template:
    '<AgInput type="textarea" size="large" rows="10" cols="5" uniqueId="myUniqueIdTextarea" v-model="name" label="Textarea" @focus="focus" @change="change" @blur="blur" />',
  props: ["value"],
  data() {
    return {
      name: "Predefined content",
    };
  },
});
