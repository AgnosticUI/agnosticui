import AgTag from '../components/Tag.vue';

export default {
  title: 'AG—Vue (Beta)/Tag',
  components: [AgTag],
};

export const Default = () => ({
  components: { AgTag },
  template: `<div class="flex-inline mie8">
    <ag-tag>unknown</ag-tag>
  </div>`
});

export const Uppercase = () => ({
  components: { AgTag },
  template: `<div class="flex-inline mie8">
    <ag-tag isUppercase>uppercase</ag-tag>
  </div>`
});

export const Rounded = () => ({
  components: { AgTag },
  template: `<div class="flex-inline mie8">
    <ag-tag shape="round">round</ag-tag>
  </div>`
});

export const Pill = () => ({
  components: { AgTag },
  template: `<div class="flex-inline mie8">
    <ag-tag shape="pill">pill badge</ag-tag>
  </div>`
});

export const Circle = () => ({
  components: { AgTag },
  template: `<div class="flex-inline mie8">
    <ag-tag shape="circle" type="error">2</ag-tag>
  </div>`
});

export const Success = () => ({
  components: { AgTag },
  template: `<div class="flex-inline mie8">
    <ag-tag type="success">success</ag-tag>
  </div>`
});

export const Info = () => ({
  components: { AgTag },
  template: `<div class="flex-inline mie8">
    <ag-tag type="info">info</ag-tag>
  </div>`
});

export const Warning = () => ({
  components: { AgTag },
  template: `<div class="flex-inline mie8">
    <ag-tag type="warning">warning</ag-tag>
  </div>`
});

export const Error = () => ({
  components: { AgTag },
  template: `<div class="flex-inline mie8">
    <ag-tag type="error">error</ag-tag>
  </div>`
});

export const InfoPillUppercased = () => ({
  components: { AgTag },
  template: `<div class="flex-inline mie8">
    <ag-tag type="info" shape="pill" isUppercase>saved</ag-tag>
  </div>`
});

export const ErrorRoundUppercased = () => ({
  components: { AgTag },
  template: `<div class="flex-inline mie8">
    <ag-tag type="error" shape="round" isUppercase>error</ag-tag>
  </div>`
});

export const WarnUppercased = () => ({
  components: { AgTag },
  template: `<div class="flex-inline mie8">
    <ag-tag type="warning" isUppercase>sure?</ag-tag>
  </div>`
});
