import AgEmptyState from '../components/EmptyState.vue';
import AgButton from "../components/Button.vue";

const defaultArgs = {
  title: "No connections yet",
  subtitle: "Click below to add some friends",
  btnCopy: "Invite friends",
  isRounded: false,
  isBordered: false,
};

export default {
  title: 'AG—Vue (Beta)/EmptyState',
  components: [AgEmptyState],
  decorators: [() => ({ template: '<div style="font-family: var(--agnostic-font-family-body); line-height: 1.4; font-size: var(--agnostic-body);"><story/></div>' })],
};

const Template = (args) => ({
  components: { AgEmptyState, AgButton },
  setup() {
    return { args };
  },
  template: `<ag-empty-state :isBordered="args.isBordered" :isRounded="args.isRounded">
    <template v-slot:header>
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
        ></path>
      </svg>
    </template>
    <template v-slot:body>
      <div class="h4">{{ args.title }}</div>
      <p class="mbe16" style="color: var(--agnostic-gray-dark);">
        {{ args.subtitle }}
      </p>
    </template>
    <template v-slot:footer>
      <AgButton mode="primary">{{ args.btnCopy }}</AgButton>
    </template>
  </ag-empty-state>`
});

export const DefaultEmptyState = Template.bind({});
DefaultEmptyState.args = defaultArgs;

export const Rounded = Template.bind({});
Rounded.args = {
  ...defaultArgs,
  isRounded: true,
};

export const Bordered = Template.bind({});
Bordered.args = {
  ...defaultArgs,
  isBordered: true,
};

export const RoundedAndBordered = Template.bind({});
RoundedAndBordered.args = {
  ...defaultArgs,
  isBordered: true,
  isRounded: true,
};
