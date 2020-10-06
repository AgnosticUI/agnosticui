import Input from "./Input.vue";

const wrapper = () => {
  return {
    template: '<div style="padding: 2rem;"><story/></div>',
  };
}

export default {
  title: "Inputs",
  decorators: [wrapper],
  component: Input,
}

export const Default = () => ({
  components: { Input },
  template: '<Input v-model="name" label="Default input" />',
  props: ['value'],
  data() {
    return {
      name: ''
    }
  },
})

export const VModelInitialValueAndPropogatesAllNativeEvents = () => ({

  components: { Input },
  template: '<div><p>Open console and do things like backspace, blur, enter, etc. Becuase we bind $listeners, all native events should be available.</p><Input v-model="name" @blur="onBlur" @keydown.delete="onBackspaceDelete" @keydown.esc="onEscape" @keyup.page-down="onPageDown" @keydown.enter="onEnter" label="Le Name" placeholder="Name" /><strong>Name: {{ name }}</strong></div>',
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
  template: '<Input type="search" placeholder="Search" label="Search" v-model="name" @keydown.enter="onEnter" />',
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

export const Color = () => ({
  components: { Input },
  template: '<Input type="color" placeholder="Color" label="Color" v-model="name" @keydown.enter="onEnter" />',
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
  template: '<Input type="tel" placeholder="Tel" label="Telephone" v-model="name" @keydown.enter="onEnter" />',
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
  template: '<Input type="url" placeholder="Type url" label="URL" v-model="name" @keydown.enter="onEnter" />',
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
  template: '<Input type="number" placeholder="Type number" label="Number" v-model="name" @keydown.enter="onEnter" />',
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
  template: '<Input type="password" placeholder="Type password" label="Password" v-model="name" @keydown.enter="onEnter" />',
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
  template: '<Input type="email" placeholder="Type email" label="Email" v-model="name" @keydown.enter="onEnter" />',
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