import Input from './Input.svelte';
import { action } from '@storybook/addon-actions';

const actionsData = {
  'click': action('click'),
  'blur': action('blur'),
  'change': action('change'),
  'input': action('input'),
  'focus': action('focus'),
}

export default {
  title: 'Input',
  component: Input,
};

const Template = ({ ...args }) => ({
  Component: Input,
  props: args,
  on: {
    ...actionsData,
  }
});

export const Default = Template.bind({});
Default.args = {
  uniqueId: "myUniqueId",
  label: "Default input",
};

export const Rounded = Template.bind({});
Rounded.args = {
  uniqueId: "myUniqueId",
  label: "Rounded input",
  isRounded: true,
};

export const Underlined = Template.bind({});
Underlined.args = {
  uniqueId: "myUniqueId",
  label: "Underlined input",
  isUnderlined: true,
};

export const UnderlinedWithBackground = Template.bind({});
UnderlinedWithBackground.args = {
  uniqueId: "myUniqueId",
  label: "Underlined with background input",
  isUnderlined: true,
  isUnderlinedWithBackground: true,
};

export const Large = Template.bind({});
Large.args = {
  uniqueId: "myUniqueId",
  label: "Large input",
  size: "large",
};

export const Small = Template.bind({});
Small.args = {
  uniqueId: "myUniqueId",
  label: "Small input",
  size: "small",
};

export const Disabled = Template.bind({});
Disabled.args = {
  uniqueId: "myUniqueId",
  label: "Disabled input",
  disabled: true,
};

export const HelpText = Template.bind({});
HelpText.args = {
  uniqueId: "myUniqueId",
  label: "Help text",
  helpText: "Some useful help text."
};

export const InvalidText = Template.bind({});
InvalidText.args = {
  uniqueId: "myUniqueId",
  label: "Invalid text",
  invalidText: "This field has errors.",
  isInvalid: true,
};

export const InvalidTextLarge = Template.bind({});
InvalidTextLarge.args = {
  uniqueId: "myUniqueId",
  size: "large",
  label: "Invalid text large",
  invalidText: "This field has errors.",
  isInvalid: true,
};

export const InvalidTextSmall = Template.bind({});
InvalidTextSmall.args = {
  uniqueId: "myUniqueId",
  size: "small",
  label: "Invalid text small",
  invalidText: "This field has errors.",
  isInvalid: true,
};


/*
export const VModelInitialValueAndPropogatesAllNativeEvents = () => ({

  components: { AgInput },
  template: '<div><p>Open console and do things like backspace, blur, enter, etc. Becuase we bind $listeners, all native events should be available.</p><AgInput uniqueId="myUniqueId" v-model="name" @blur="onBlur" @keydown.delete="onBackspaceDelete" @keydown.esc="onEscape" @keyup.page-down="onPageDown" @keydown.enter="onEnter" label="Le Name" placeholder="Name" /><strong style="display: inline-block;margin-top: 24px;">Bound variable: {{ name }}</strong></div>',
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
  uniqueId: "myUniqueId",
  label: "Search",
  type: "search",
};

export const Telephone = Template.bind({});
Telephone.args = {
  uniqueId: "myUniqueId",
  label: "Telephone",
  type: "tel",
};

export const URL = Template.bind({});
URL.args = {
  uniqueId: "myUniqueId",
  label: "URL",
  type: "url",
};

export const Number = Template.bind({});
Number.args = {
  uniqueId: "myUniqueId",
  label: "Number",
  type: "number",
};

export const Email = Template.bind({});
Email.args = {
  uniqueId: "myUniqueId",
  label: "Email",
  type: "email",
}

export const Password = Template.bind({});
Password.args = {
  uniqueId: "myUniqueId",
  label: "Password",
  type: "password",
}

export const Textarea = Template.bind({});
Textarea.args = {
  uniqueId: "myUniqueId",
  label: "Textarea",
  type: "textarea",
}

export const TextareaSmall = Template.bind({});
TextareaSmall.args = {
  uniqueId: "myUniqueId",
  label: "Textarea small",
  type: "textarea",
  size: "small",
  rows: "10",
  cols: "5",
}

export const TextareaLarge = Template.bind({});
TextareaLarge.args = {
  uniqueId: "myUniqueId",
  label: "Textarea small",
  type: "textarea",
  size: "large",
  rows: "10",
  cols: "5",
}
