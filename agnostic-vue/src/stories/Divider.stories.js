
import AgDivider from '../components/Divider.vue';

export default {
  title: 'AG—Vue (Beta)/Divider',
  components: [AgDivider],
  decorators: [() => ({ template: '<div style="font-family: var(--agnostic-font-family-body); line-height: 1.4; font-size: var(--agnostic-body);"><story/></div>' })],
};

const Template = (args) => ({
  components: { AgDivider },
  setup() {
    return { args };
  },
  template: `
  <ag-divider
    :isVertical="args.isVertical"
    :justify="args.justify"
    :size="args.size"
    :type="args.type"
  >
  <template v-slot:dividerContent>Boom!</template>
</ag-divider>`
});

export const DefaultDivider = Template.bind({});
DefaultDivider.args = {};

export const Start = Template.bind({});
Start.args = {
  justify: 'start',
};

export const End = Template.bind({});
End.args = {
  justify: 'end',
};

export const Success = Template.bind({});
Success.args = {
  type: 'success',
};
export const Info = Template.bind({});
Info.args = {
  type: 'info',
};

export const Warning = Template.bind({});
Warning.args = {
  type: 'warning',
};

export const Error = Template.bind({});
Error.args = {
  type: 'error',
};

const VerticalTemplate = (args) => ({
  components: { AgDivider },
  setup() {
    return { args };
  },
  template: `<div class="flex mbe48">
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
  <ag-divider
    :isVertical="true"
    :justify="args.justify"
    :size="args.size"
    :type="args.type"
  >
    <template v-slot:dividerContent>yes</template>
  </ag-divider>
  <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</p>
  <ag-divider
    :isVertical="true"
    :justify="args.justify"
    :size="args.size"
    :type="args.type"
  >
    <template v-slot:dividerContent>sir!</template>
  </ag-divider>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
</div>`
});

export const Vertical = VerticalTemplate.bind({});
Vertical.args = {};

export const VerticalSmall = VerticalTemplate.bind({});
VerticalSmall.args = {
  size: 'small',
};
export const VerticalLarge = VerticalTemplate.bind({});
VerticalLarge.args = {
  size: 'large',
};
export const VerticalXLarge = VerticalTemplate.bind({});
VerticalXLarge.args = {
  size: 'xlarge',
};

const NoContentTemplate = (args) => ({
  components: { AgDivider },
  setup() {
    return { args };
  },
  template: `
  <ag-divider
    :isVertical="args.isVertical"
    :justify="args.justify"
    :size="args.size"
    :type="args.type"
  ></ag-divider>
</div>`
});

export const NoContent = NoContentTemplate.bind({});
NoContent.args = {};

export const NoContentSmall = NoContentTemplate.bind({});
NoContentSmall.args = {
  size: "small",
};
export const NoContentLarge = NoContentTemplate.bind({});
NoContentLarge.args = {
  size: "large",
};

const NoContentVerticalTemplate = (args) => ({
  components: { AgDivider },
  setup() {
    return { args };
  },
  template: `
  <div class="flex mbe48">
  <p>Foo</p>
  <ag-divider
    :isVertical="true"
    :size="args.size"
  ></ag-divider>
  <p>Bar</p>
  <ag-divider
    :isVertical="true"
    :size="args.size"
  ></ag-divider>
  <p>Baz</p>
</div>`
});

export const NoContentVertical = NoContentVerticalTemplate.bind({});
NoContentVertical.args = {};

export const NoContentVerticalSmall = NoContentVerticalTemplate.bind({});
NoContentVerticalSmall.args = {
  size: "small"
};

export const NoContentVerticalLarge = NoContentVerticalTemplate.bind({});
NoContentVerticalLarge.args = {
  size: "large"
};

export const NoContentVerticalXLarge = NoContentVerticalTemplate.bind({});
NoContentVerticalXLarge.args = {
  size: "xlarge"
};
