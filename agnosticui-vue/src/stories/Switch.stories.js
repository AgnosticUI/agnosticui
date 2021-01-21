import AgSwitch from "./Switch.vue";

const wrapper = () => {
  return {
    template: '<div style="padding: 2rem;"><story/></div>',
  };
};

export default {
  title: "Switch",
  decorators: [wrapper],
  components: [AgSwitch],
};

export const SwitchDefault = () => ({
  components: { AgSwitch },
  template: `<AgSwitch id="1" label="Switch default label" />`,
});
