import AgSpinner from '../components/Spinner.vue';

export default {
  title: 'AG—Vue (Beta)/Spinner',
  components: [AgSpinner],
  decorators: [() => ({ template: '<div style="font-family: var(--agnostic-font-family-body); line-height: 1.4; font-size: var(--agnostic-body);"><story/></div>' })],
};

const defaultArgs = {
  size: ""
};

const Template = (args) => ({
  components: { AgSpinner},
  setup() {
    return { args };
  },
  template: `<ag-spinner :size="args.size" :ariaLabel="args.ariaLabel"></ag-spinner>`
});

export const DefaultSpinner = Template.bind({});
DefaultSpinner.args = {
  ...defaultArgs,
  // Please use a better aria label -- this is just an example of how ;)
  ariaLabel: "Loading indicator dots…"
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

export const XLarge = Template.bind({});
XLarge.args = {
  ...defaultArgs,
  size: "xlarge",
};

const CustomColorTemplate = (args) => ({
  components: { AgSpinner},
  setup() {
    return { args };
  },
  template: `<div style="--agnostic-spinner-color: slateblue;"><p>Set <i>--agnostic-spinner-color</i> on spinner ancestor<p><ag-spinner :size="args.size" :ariaLabel="args.ariaLabel"></ag-spinner></div>`
});

export const CustomColor = CustomColorTemplate.bind({});
CustomColor.args = {
  ...defaultArgs,
};
