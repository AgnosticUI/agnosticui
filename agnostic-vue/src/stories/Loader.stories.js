import AgLoader from '../components/Loader.vue';

export default {
  title: 'AG—Vue (Beta)/Loader',
  components: [AgLoader],
  decorators: [() => ({ template: '<div style="font-family: var(--agnostic-font-family-body); line-height: 1.4; font-size: var(--agnostic-body);"><story/></div>' })],
};

const defaultArgs = {
  size: ""
};

const Template = (args) => ({
  components: { AgLoader},
  setup() {
    return { args };
  },
  template: `<ag-loader :size="args.size" :ariaLabel="args.ariaLabel"></ag-loader>`
});

export const DefaultLoader = Template.bind({});
DefaultLoader.args = {
  ...defaultArgs,
  // Please use a better aria label -- this is just an example of how ;)
  ariaLabel: "Loader to indicate data is loading…"
};

export const Small = Template.bind({});
Small.args = {
  ...defaultArgs,
  size: "small",
};

export const Large = Template.bind({});
Large.args = {
  ...defaultArgs,
  size: "large",
};

const CustomColorTemplate = (args) => ({
  components: { AgLoader},
  setup() {
    return { args };
  },
  template: `<div style="--agnostic-loading-color: lightseagreen;"><p class="mbe24">Set <i>--agnostic-loader-color</i> on any loader ancestor</p><ag-loader :size="args.size" :ariaLabel="args.ariaLabel"></ag-loader></div>`
});

export const CustomColor = CustomColorTemplate.bind({});
CustomColor.args = {
  ...defaultArgs,
};
