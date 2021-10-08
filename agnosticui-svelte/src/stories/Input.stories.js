import Input from "./Input.svelte";
import { action } from "@storybook/addon-actions";

const actionsData = {
  click: action("click"),
  blur: action("blur"),
  change: action("change"),
  input: action("input"),
  focus: action("focus"),
};

export default {
  title: "AG—Svelte (Beta)/Input",
  component: Input,
};

const Template = ({ ...args }) => ({
  Component: Input,
  props: args,
  on: {
    ...actionsData,
  },
});

export const Default = Template.bind({});
Default.args = {
  id: "myid1",
  label: "Default input",
};

export const InlineInput = Template.bind({});
InlineInput.args = {
  id: "myid2",
  label: "Inline input",
  isInline: true,
};

export const Rounded = Template.bind({});
Rounded.args = {
  id: "myid3",
  label: "Rounded input",
  isRounded: true,
};

export const Underlined = Template.bind({});
Underlined.args = {
  id: "myid4",
  label: "Underlined input",
  isUnderlined: true,
};

export const UnderlinedWithBackground = Template.bind({});
UnderlinedWithBackground.args = {
  id: "myid5",
  label: "Underlined with background input",
  isUnderlined: true,
  isUnderlinedWithBackground: true,
};

export const Large = Template.bind({});
Large.args = {
  id: "myid6",
  label: "Large input",
  size: "large",
};

export const Small = Template.bind({});
Small.args = {
  id: "myid7",
  label: "Small input",
  size: "small",
};

export const Disabled = Template.bind({});
Disabled.args = {
  id: "myid8",
  label: "Disabled input",
  isDisabled: true,
};

export const HelpText = Template.bind({});
HelpText.args = {
  id: "myid9",
  label: "Help text",
  helpText: "Some useful help text.",
};

export const HelpTextSmall = Template.bind({});
HelpTextSmall.args = {
  id: "myid10",
  size: "small",
  label: "Help text small",
  helpText: "Some useful help text.",
};

export const HelpTextLarge = Template.bind({});
HelpTextLarge.args = {
  id: "myid11",
  size: "large",
  label: "Help text large",
  helpText: "Some useful help text.",
};

export const InvalidText = Template.bind({});
InvalidText.args = {
  id: "myid12",
  label: "Invalid text",
  invalidText: "This field has errors.",
  isInvalid: true,
};

export const InvalidTextLarge = Template.bind({});
InvalidTextLarge.args = {
  id: "myid13",
  size: "large",
  label: "Invalid text large",
  invalidText: "This field has errors.",
  isInvalid: true,
};

export const InvalidTextSmall = Template.bind({});
InvalidTextSmall.args = {
  id: "myid14",
  size: "small",
  label: "Invalid text small",
  invalidText: "This field has errors.",
  isInvalid: true,
};

/*
export const VModelInitialValueAndPropogatesAllNativeEvents = () => ({

  components: { AgInput },
  template: '<div><p>Open console and do things like backspace, blur, enter, etc. Becuase we bind $listeners, all native events should be available.</p><AgInput id="myid" v-model="name" @blur="onBlur" @keydown.delete="onBackspaceDelete" @keydown.esc="onEscape" @keyup.page-down="onPageDown" @keydown.enter="onEnter" label="Le Name" placeholder="Name" /><strong style="display: inline-block;margin-top: 24px;">Bound variable: {{ name }}</strong></div>',
  data() {
    return {
      name: ''
    }
  },
  methods: {
    onEnter: (ev) => { console.log('onEnter: ', ev) },
    onBlur: (ev) => { console.log('onBlur: ', ev) },
    onEscape: (ev) => { console.log('onEscape: ', ev) },
    onBackspaceDelete: (ev) => { console.log('onBackspaceDelete: ', ev) },
    onPageDown: (ev) => { console.log('onPageDown: ', ev) },
    onUpdate: (ev) => { console.log('onUpdate: ', ev) },
  },
})
// https://vuejs.org/v2/guide/forms.html

*/

export const Search = Template.bind({});
Search.args = {
  id: "myid15",
  label: "Search",
  type: "search",
};

export const Telephone = Template.bind({});
Telephone.args = {
  id: "myid16",
  label: "Telephone",
  type: "tel",
};

export const URL = Template.bind({});
URL.args = {
  id: "myid17",
  label: "URL",
  type: "url",
};

export const Number = Template.bind({});
Number.args = {
  id: "myid18",
  label: "Number",
  type: "number",
};

export const Email = Template.bind({});
Email.args = {
  id: "myid19",
  label: "Email",
  type: "email",
};

export const Password = Template.bind({});
Password.args = {
  id: "myid20",
  label: "Password",
  type: "password",
};

export const Textarea = Template.bind({});
Textarea.args = {
  id: "myid21",
  label: "Textarea",
  type: "textarea",
};

export const TextareaSmall = Template.bind({});
TextareaSmall.args = {
  id: "myid22",
  label: "Textarea small",
  type: "textarea",
  size: "small",
  rows: "10",
  cols: "5",
};

export const TextareaLarge = Template.bind({});
TextareaLarge.args = {
  id: "myid23",
  label: "Textarea large",
  type: "textarea",
  size: "large",
  rows: "10",
  cols: "5",
};
