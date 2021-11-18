import AgAlert from '../components/Alert.vue';

const wrapper = () => {
  return {
    template: '<div style="margin-block-end: 3rem;"><story /></div>',
  }
}
export default {
  title: 'AG—Vue (Beta)/Alert',
  component: AgAlert,
  decorators: [wrapper],
};

const message = 'Alerts should be used for timely information.';

export const Default = () => ({
  components: { AgAlert },
  template: `<div>
  <div class="mbe16">
    <ag-alert>${message}</ag-alert>
  </div>
  <div class="mbe16">
    <ag-alert isRounded>${message}</ag-alert>
  </div>
  <div class="mbe16">
    <ag-alert isBorderAll>${message}</ag-alert>
  </div>
  <div class="mbe16">
    <ag-alert isRounded isBorderAll>${message}</ag-alert>
  </div>
  <div class="mbe16">
    <ag-alert isBorderLeft>${message}</ag-alert>
  </div>
  <div class="mbe16">
    <ag-alert isBorderRight>${message}</ag-alert>
  </div>
  <div class="mbe16">
    <ag-alert isBorderTop>${message}</ag-alert>
  </div>
  <div class="mbe16">
    <ag-alert isBorderBottom>${message}</ag-alert>
  </div>
  <div class="mbe16">
    <ag-alert isBlockEnd>${message}</ag-alert>
  </div>
  <div class="mbe16">
    <ag-alert isBlockEnd isBorderRight>${message}</ag-alert>
  </div>
  </div>
  `,
});

export const Warning = () => ({
  components: { AgAlert },
  template: `<div>
  <div class="mbe16">
    <ag-alert type="warning">${message}</ag-alert>
  </div>
  <div class="mbe16">
    <ag-alert isRounded type="warning">${message}</ag-alert>
  </div>
  <div class="mbe16">
    <ag-alert isBorderAll type="warning">${message}</ag-alert>
  </div>
  <div class="mbe16">
    <ag-alert isRounded isBorderAll type="warning">${message}</ag-alert>
  </div>
  <div class="mbe16">
    <ag-alert isBorderLeft type="warning">${message}</ag-alert>
  </div>
  <div class="mbe16">
    <ag-alert isBorderRight type="warning">${message}</ag-alert>
  </div>
  <div class="mbe16">
    <ag-alert isBorderTop type="warning">${message}</ag-alert>
  </div>
  <div class="mbe16">
    <ag-alert isBorderBottom type="warning">${message}</ag-alert>
  </div>
  <div class="mbe16">
    <ag-alert isBlockEnd type="warning">${message}</ag-alert>
  </div>
  <div class="mbe16">
    <ag-alert isBlockEnd isBorderRight type="warning">${message}</ag-alert>
  </div>
  </div>
  `,
});

export const Success = () => ({
  components: { AgAlert },
  template: `<div>
  <div class="mbe16">
    <ag-alert type="success">${message}</ag-alert>
  </div>
  <div class="mbe16">
    <ag-alert isRounded type="success">${message}</ag-alert>
  </div>
  <div class="mbe16">
    <ag-alert isBorderAll type="success">${message}</ag-alert>
  </div>
  <div class="mbe16">
    <ag-alert isRounded isBorderAll type="success">${message}</ag-alert>
  </div>
  <div class="mbe16">
    <ag-alert isBorderLeft type="success">${message}</ag-alert>
  </div>
  <div class="mbe16">
    <ag-alert isBorderRight type="success">${message}</ag-alert>
  </div>
  <div class="mbe16">
    <ag-alert isBorderTop type="success">${message}</ag-alert>
  </div>
  <div class="mbe16">
    <ag-alert isBorderBottom type="success">${message}</ag-alert>
  </div>
  <div class="mbe16">
    <ag-alert isBlockEnd type="success">${message}</ag-alert>
  </div>
  <div class="mbe16">
    <ag-alert isBlockEnd isBorderRight type="success">${message}</ag-alert>
  </div>
  </div>
  `,
});

export const Info = () => ({
  components: { AgAlert },
  template: `<div>
  <div class="mbe16">
  <ag-alert type="info">${message}</ag-alert>
    </div>
    <div class="mbe16">
      <ag-alert isRounded type="info">${message}</ag-alert>
    </div>
    <div class="mbe16">
      <ag-alert isBorderAll type="info">${message}</ag-alert>
    </div>
    <div class="mbe16">
      <ag-alert isRounded isBorderAll type="info">${message}</ag-alert>
    </div>
    <div class="mbe16">
      <ag-alert isBorderLeft type="info">${message}</ag-alert>
    </div>
    <div class="mbe16">
      <ag-alert isBorderRight type="info">${message}</ag-alert>
    </div>
    <div class="mbe16">
      <ag-alert isBorderTop type="info">${message}</ag-alert>
    </div>
    <div class="mbe16">
      <ag-alert isBorderBottom type="info">${message}</ag-alert>
    </div>
    <div class="mbe16">
      <ag-alert isBlockEnd type="info">${message}</ag-alert>
    </div>
    <div class="mbe16">
      <ag-alert isBlockEnd isBorderRight type="info">${message}</ag-alert>
    </div>
    </div>
    `,
  });

  export const Error = () => ({
    components: { AgAlert },
    template: `<div><div class="mbe16">
      <ag-alert type="error">yo</ag-alert>
    </div>
    <div class="mbe16">
      <ag-alert isRounded type="error">${message}</ag-alert>
    </div>
    <div class="mbe16">
      <ag-alert isBorderAll type="error">${message}</ag-alert>
    </div>
    <div class="mbe16">
      <ag-alert isRounded isBorderAll type="error">${message}</ag-alert>
    </div>
    <div class="mbe16">
      <ag-alert isBorderLeft type="error">${message}</ag-alert>
    </div>
    <div class="mbe16">
      <ag-alert isBorderRight type="error">${message}</ag-alert>
    </div>
    <div class="mbe16">
      <ag-alert isBorderTop type="error">${message}</ag-alert>
    </div>
    <div class="mbe16">
      <ag-alert isBorderBottom type="error">${message}</ag-alert>
    </div>
    <div class="mbe16">
      <ag-alert isBlockEnd type="error">${message}</ag-alert>
    </div>
    <div class="mbe16">
      <ag-alert isBlockEnd isBorderRight type="error">${message}</ag-alert>
    </div>
  </div>
  `,
});
