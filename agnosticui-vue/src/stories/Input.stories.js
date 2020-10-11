import Input from "./Input.vue";
import InputAddonItem from "./InputAddonItem.vue";

const wrapper = () => {
  return {
    template: '<div style="padding: 2rem;"><story/></div>',
  };
}

export default {
  title: "Inputs",
  decorators: [wrapper],
  components: [
    Input,
    InputAddonItem,
  ]
}

export const InputAddons = () => ({
  components: { Input, InputAddonItem },
  template: '<Input hasLeftAddon hasRightAddon uniqueId="myUniqueId" v-model="name" label="Input with addons"><template v-slot:addonLeft><InputAddonItem addonLeft><span>L</span></InputAddonItem></template><template v-slot:addonRight><InputAddonItem addonRight><span>R</span></InputAddonItem></template></Input>',
  props: ['value'],
  data() {
    return {
      name: ''
    }
  },
})

export const Default = () => ({
  components: { Input },
  template: '<Input uniqueId="myUniqueId" v-model="name" label="Default input" />',
  props: ['value'],
  data() {
    return {
      name: ''
    }
  },
})

export const Rounded = () => ({
  components: { Input },
  template: '<Input isRounded uniqueId="myUniqueId" v-model="name" label="Rounded input" />',
  props: ['value'],
  data() {
    return {
      name: ''
    }
  },
})

export const Underlined = () => ({
  components: { Input },
  template: '<Input isUnderlined uniqueId="myUniqueId" v-model="name" label="Underlined input" />',
  props: ['value'],
  data() {
    return {
      name: ''
    }
  },
})

export const UnderlinedWithBackground = () => ({
  components: { Input },
  template: '<Input isUnderlined isUnderlinedWithBackground uniqueId="myUniqueId" v-model="name" label="Underlined input" />',
  props: ['value'],
  data() {
    return {
      name: ''
    }
  },
})

export const Large = () => ({
  components: { Input },
  template: '<Input size="large" uniqueId="myUniqueId" v-model="name" label="Large input" />',
  props: ['value'],
  data() {
    return {
      name: ''
    }
  },
})

export const Small = () => ({
  components: { Input },
  template: '<Input size="small" uniqueId="myUniqueId" v-model="name" label="Small input" />',
  props: ['value'],
  data() {
    return {
      name: ''
    }
  },
})

export const Disabled = () => ({
  components: { Input },
  template: '<Input disabled uniqueId="myUniqueId" v-model="name" label="Disabled input" />',
  props: ['value'],
  data() {
    return {
      name: ''
    }
  },
})

export const HelpText = () => ({
  components: { Input },
  template: '<Input helpText="Some useful help text." uniqueId="myUniqueId" v-model="name" label="Help text" />',
  props: ['value'],
  data() {
    return {
      name: ''
    }
  },
})

export const InvalidText = () => ({
  components: { Input },
  template: '<Input isInvalid invalidText="This field has errors." uniqueId="myUniqueId" v-model="name" label="Invalid text" />',
  props: ['value'],
  data() {
    return {
      name: ''
    }
  },
})

export const InvalidTextSmall = () => ({
  components: { Input },
  template: '<Input isInvalid size="small" invalidText="This field has errors." uniqueId="myUniqueId" v-model="name" label="Invalid text—size small results in smaller input and error text" />',
  props: ['value'],
  data() {
    return {
      name: ''
    }
  },
})

export const InvalidTextLarge = () => ({
  components: { Input },
  template: '<Input isInvalid size="large" invalidText="This field has errors." uniqueId="myUniqueId" v-model="name" label="Invalid text—size large results in larger input and error text" />',
  props: ['value'],
  data() {
    return {
      name: ''
    }
  },
})

export const VModelInitialValueAndPropogatesAllNativeEvents = () => ({

  components: { Input },
  template: '<div><p>Open console and do things like backspace, blur, enter, etc. Becuase we bind $listeners, all native events should be available.</p><Input uniqueId="myUniqueId" v-model="name" @blur="onBlur" @keydown.delete="onBackspaceDelete" @keydown.esc="onEscape" @keyup.page-down="onPageDown" @keydown.enter="onEnter" label="Le Name" placeholder="Name" /><strong style="display: inline-block;margin-top: 24px;">Bound variable: {{ name }}</strong></div>',
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


export const Search = () => ({
  components: { Input },
  template: '<Input uniqueId="myUniqueId" type="search" placeholder="Search" label="Search" v-model="name" @keydown.enter="onEnter" />',
  props: ['value', 'label', 'type'],
  model: {
    prop: 'value',
    event: 'update',
  },
  data() {
    return {
      name: ''
    }
  },
  methods: {
    onEnter: (ev) => { console.log(ev) },
  },
});

export const Telephone = () => ({
  components: { Input },
  template: '<Input uniqueId="myUniqueId" type="tel" placeholder="Tel" label="Telephone" v-model="name" @keydown.enter="onEnter" />',
  props: ['value', 'label', 'type'],
  model: {
    prop: 'value',
    event: 'update',
  },
  data() {
    return {
      name: ''
    }
  },
  methods: {
    onEnter: (ev) => { console.log(ev) },
  },
});

export const URL = () => ({
  components: { Input },
  template: '<Input uniqueId="myUniqueId" type="url" placeholder="Type url" label="URL" v-model="name" @keydown.enter="onEnter" />',
  props: ['value', 'label', 'type'],
  model: {
    prop: 'value',
    event: 'update',
  },
  data() {
    return {
      name: ''
    }
  },
  methods: {
    onEnter: (ev) => { console.log(ev) },
  },
});

export const Number = () => ({
  components: { Input },
  template: '<Input uniqueId="myUniqueId" type="number" placeholder="Type number" label="Number" v-model="name" @keydown.enter="onEnter" />',
  props: ['value', 'label', 'type'],
  model: {
    prop: 'value',
    event: 'update',
  },
  data() {
    return {
      name: ''
    }
  },
  methods: {
    onEnter: (ev) => { console.log(ev) },
  },
});


export const Password = () => ({
  components: { Input },
  template: '<Input uniqueId="myUniqueId" type="password" placeholder="Type password" label="Password" v-model="name" @keydown.enter="onEnter" />',
  props: ['value', 'label', 'type'],
  model: {
    prop: 'value',
    event: 'update',
  },
  data() {
    return {
      name: ''
    }
  },
  methods: {
    onEnter: (ev) => { console.log(ev) },
  },
});

export const Email = () => ({
  components: { Input },
  template: '<Input uniqueId="myUniqueId" type="email" placeholder="Type email" label="Email" v-model="name" @keydown.enter="onEnter" />',
  props: ['value', 'label', 'type'],
  model: {
    prop: 'value',
    event: 'update',
  },
  data() {
    return {
      name: ''
    }
  },
  methods: {
    onEnter: (ev) => { console.log(ev) },
  },
});
