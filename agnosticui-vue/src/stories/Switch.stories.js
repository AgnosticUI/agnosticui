import AgSwitch from "./Switch.vue";
import { action } from "@storybook/addon-actions";

const wrapper = () => {
  return {
    template: '<div style="padding: 2rem;"><story/></div>',
  };
};

const handler = {
  changeHandler: action("change"),
};

export default {
  title: "Switch",
  decorators: [wrapper],
  components: [AgSwitch],
};

export const SwitchSmall = () => ({
  components: { AgSwitch },
  template: `<AgSwitch id="1" label="Switch small label" size="small" @change="changeHandler" />`,
  methods: handler,
});

export const SwitchDefault = () => ({
  components: { AgSwitch },
  template: `<AgSwitch id="2" label="Switch default label" @change="changeHandler" />`,
  methods: handler,
});

export const SwitchLarge = () => ({
  components: { AgSwitch },
  template: `<AgSwitch id="3" label="Switch large label" size="large" @change="changeHandler" />`,
  methods: handler,
});

export const SwitchPrechecked = () => ({
  components: { AgSwitch },
  template: `<AgSwitch id="4" isChecked label="Switch prechecked" size="large" @change="changeHandler" />`,
  methods: handler,
});

export const SwitchDisabled = () => ({
  components: { AgSwitch },
  template: `<AgSwitch id="5" label="Switch disabled" :disabled="true" @change="changeHandler" />`,
  methods: handler,
});

export const SwitchAction = () => ({
  components: { AgSwitch },
  template: `<AgSwitch id="99" label="Switch action" isAction @change="changeHandler" />`,
  methods: handler,
});

export const SwitchBorder = () => ({
  components: { AgSwitch },
  template: `<AgSwitch id="6" label="Switch bordered" isBordered @change="changeHandler" />`,
  methods: handler,
});

export const SwitchBorderAction = () => ({
  components: { AgSwitch },
  template: `<AgSwitch id="7" label="Switch bordered action" isBordered isAction @change="changeHandler" />`,
  methods: handler,
});

export const SwitchLabelRight = () => ({
  components: { AgSwitch },
  template: `<AgSwitch id="8" labelPosition="right" label="Switch with label on right" @change="changeHandler" />`,
  methods: handler,
});

export const SwitchLabelRightBorder = () => ({
  components: { AgSwitch },
  template: `<AgSwitch id="9" isBordered labelPosition="right" label="Switch with label on right" @change="changeHandler" />`,
  methods: handler,
});

export const SwitchLabelRightAction = () => ({
  components: { AgSwitch },
  template: `<AgSwitch id="10" isAction labelPosition="right" label="Switch with label right action" @change="changeHandler" />`,
  methods: handler,
});

export const SwitchLabelRightActionBorder = () => ({
  components: { AgSwitch },
  template: `<AgSwitch id="11" isAction isBordered labelPosition="right" label="Switch with label right action" @change="changeHandler" />`,
  methods: handler,
});

export const SwitchLabelRightActionBorderDisabled = () => ({
  components: { AgSwitch },
  template: `<AgSwitch :disabled="true" id="12" isAction isBordered labelPosition="right" label="Switch with label right action" @change="changeHandler" />`,
  methods: handler,
});
