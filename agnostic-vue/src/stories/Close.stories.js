
import AgClose from '../components/Close.vue';

export default {
  title: 'AG—Vue (Beta)/Close',
  components: [AgClose],
};

export const Default = () => ({
  components: { AgClose },
  template: `<div class="mbe16">
    <ag-close></ag-close>
  </div>
  `
});

export const Small = () => ({
  components: { AgClose },
  template: `<div class="mbe16">
    <ag-close size="small"></ag-close>
  </div>
  `
});

export const Large = () => ({
  components: { AgClose },
  template: `<div class="mbe16">
    <ag-close size="large"></ag-close>
  </div>
  `
});

export const XLarge = () => ({
  components: { AgClose },
  template: `<div class="mbe16">
    <ag-close size="xlarge"></ag-close>
  </div>
  `
});
