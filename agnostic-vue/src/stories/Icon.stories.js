import AgIcon from '../components/Icon.vue';
import IconExFontAwesome from '../components/IconExFontAwesome.vue';
import IconExMaterial from '../components/IconExMaterial.vue';
import IconExOcticons from '../components/IconExOcticons.vue';

const wrapper = () => {
  return {
    template: '<div style="margin-inline-end: 0.5rem;"><story /></div>',
  }
}
export default {
  title: 'AG—Vue (Beta)/Icon',
  components: [AgIcon, IconExFontAwesome, IconExMaterial, IconExOcticons],
  decorators: [wrapper],
};

export const Overview = () => ({
  components: { AgIcon, IconExFontAwesome, IconExMaterial, IconExOcticons },
  template: `<section>
    <p class="mbe24">
      The icon component is a light-weight bounding box around your SVG icon. You should be able to
      pass in any well constructored icon set, but here are a few examples using popular ones
      (Material, Octicons, and FontAwesome in order below):
    </p>
    <div class="flex">
      <div class="mie8">
        <ag-icon>
          <IconExMaterial />
        </ag-icon>
      </div>
      <div class="mie8">
        <ag-icon>
          <IconExOcticons />
        </ag-icon>
      </div>
      <div class="mie8">
        <ag-icon>
          <IconExFontAwesome />
        </ag-icon>
      </div>
    </div>
  </section>
  `
})

export const MaterialExample = () => ({
  components: { AgIcon, IconExMaterial },
  template: `<div class="mie8">
    <ag-icon>
      <IconExMaterial />
    </ag-icon>
  </div>`
});

export const OcticonsExample = () => ({
  components: { AgIcon, IconExOcticons },
  template: `<div class="mie8">
    <ag-icon>
      <IconExOcticons />
    </ag-icon>
  </div>`
});


export const FontAwesomeExample = () => ({
  components: { AgIcon, IconExFontAwesome },
  template: `<div class="mie8">
    <ag-icon>
      <IconExFontAwesome />
    </ag-icon>
  </div>`
});

export const Types = () => ({
  components: { AgIcon, IconExOcticons },
  template: `<div class="mbe16">
    <ag-icon :size="24" type="success">
      <IconExOcticons />
    </ag-icon>
    <ag-icon :size="24" type="info">
      <IconExOcticons />
    </ag-icon>
    <ag-icon :size="24" type="warning">
      <IconExOcticons />
    </ag-icon>
    <ag-icon :size="24" type="error">
      <IconExOcticons />
    </ag-icon>
  </div>`
});

export const Sizes = () => ({
  components: { AgIcon, IconExOcticons },
  template: `<div class="mbe16">
    <ag-icon :size="14">
      <IconExOcticons />
    </ag-icon>
    <ag-icon :size="16">
      <IconExOcticons />
    </ag-icon>
    <ag-icon :size="18">
      <IconExOcticons />
    </ag-icon>
    <ag-icon :size="20">
      <IconExOcticons />
    </ag-icon>
    <ag-icon :size="24">
      <IconExOcticons />
    </ag-icon>
    <ag-icon :size="32">
      <IconExOcticons />
    </ag-icon>
    <ag-icon :size="36">
      <IconExOcticons />
    </ag-icon>
    <ag-icon :size="40">
      <IconExOcticons />
    </ag-icon>
    <ag-icon :size="48">
      <IconExOcticons />
    </ag-icon>
    <ag-icon :size="56">
      <IconExOcticons />
    </ag-icon>
    <ag-icon :size="64">
      <IconExOcticons />
    </ag-icon>
  </div>`
});
