import AgAlert from '../components/Alert.vue';
import AlertIconExample from './AlertIconExample.vue';

const wrapper = () => {
  return {
    template: '<div style="margin-block-end: 3rem;"><story /></div>',
  };
};
export default {
  title: 'AG—Vue (Beta)/Alert',
  component: AgAlert,
  decorators: [wrapper],
};

const message = 'Alerts should be used for timely information.';

export const Default = () => ({
  components: { AgAlert, AlertIconExample },
  template: `<div>
    <div class="mbe16">
      <ag-alert>
        <AlertIconExample iconType="dark" utilityClass="mie8" #icon />
        ${message}
      </ag-alert>
    </div>
    <div class="mbe16">
      <ag-alert isRounded>
      <AlertIconExample iconType="dark" utilityClass="mie8" #icon /> 
      ${message}</ag-alert>
    </div>
    <div class="mbe16">
      <ag-alert isBorderAll>
        <AlertIconExample iconType="dark" utilityClass="mie8" #icon /> 
        ${message}
      </ag-alert>
    </div>
    <div class="mbe16">
      <ag-alert isRounded isBorderAll>
        <AlertIconExample iconType="dark" utilityClass="mie8" #icon /> 
        ${message}
      </ag-alert>
    </div>
    <div class="mbe16">
      <ag-alert isBorderLeft>
        <AlertIconExample iconType="dark" utilityClass="mie8" #icon /> 
        ${message}
      </ag-alert>
    </div>
    <div class="mbe16">
      <ag-alert isBorderRight>
        <AlertIconExample iconType="dark" utilityClass="mie8" #icon /> 
        ${message}
      </ag-alert>
    </div>
    <div class="mbe16">
      <ag-alert isBorderTop>
        <AlertIconExample iconType="dark" utilityClass="mie8" #icon /> 
        ${message}
      </ag-alert>
    </div>
    <div class="mbe16">
      <ag-alert isBorderBottom>
        <AlertIconExample iconType="dark" utilityClass="mie8" #icon /> 
        ${message}
      </ag-alert>
    </div>
    <div class="mbe16">
      <ag-alert isBlockEnd>
        ${message}
        <AlertIconExample iconType="dark" utilityClass="mis8" #icon /> 
      </ag-alert>
    </div>
    <div class="mbe16">
      <ag-alert isBlockEnd isBorderRight>
        ${message}
        <AlertIconExample iconType="dark" utilityClass="mis8" #icon /> 
      </ag-alert>
    </div>
  </div>
  `,
});

export const Warning = () => ({
  components: { AgAlert, AlertIconExample },
  template: `<div>
  <div class="mbe16">
    <ag-alert type="warning">
      <AlertIconExample iconType="warning" utilityClass="mie8" #icon /> 
      ${message}
    </ag-alert>
  </div>
  <div class="mbe16">
    <ag-alert type="warning" isRounded>
      <AlertIconExample iconType="warning" utilityClass="mie8" #icon /> 
      ${message}
    </ag-alert>
  </div>
  <div class="mbe16">
    <ag-alert type="warning" isBorderAll>
      <AlertIconExample iconType="warning" utilityClass="mie8" #icon /> 
      ${message}
    </ag-alert>
  </div>
  <div class="mbe16">
    <ag-alert type="warning" isRounded isBorderAll>
      <AlertIconExample iconType="warning" utilityClass="mie8" #icon /> 
      ${message}
    </ag-alert>
  </div>
  <div class="mbe16">
    <ag-alert type="warning" isBorderLeft>
      <AlertIconExample iconType="warning" utilityClass="mie8" #icon /> 
      ${message}
    </ag-alert>
  </div>
  <div class="mbe16">
    <ag-alert type="warning" isBorderRight>
      <AlertIconExample iconType="warning" utilityClass="mie8" #icon /> 
      ${message}
    </ag-alert>
  </div>
  <div class="mbe16">
    <ag-alert type="warning" isBorderTop>
      <AlertIconExample iconType="warning" utilityClass="mie8" #icon /> 
      ${message}
    </ag-alert>
  </div>
  <div class="mbe16">
    <ag-alert type="warning" isBorderBottom>
      <AlertIconExample iconType="warning" utilityClass="mie8" #icon /> 
      ${message}
    </ag-alert>
  </div>
  <div class="mbe16">
    <ag-alert type="warning" isBlockEnd>
      ${message}
      <AlertIconExample iconType="warning" utilityClass="mis8" #icon /> 
    </ag-alert>
  </div>
  <div class="mbe16">
    <ag-alert type="warning" isBlockEnd isBorderRight>
      ${message}
      <AlertIconExample iconType="warning" utilityClass="mis8" #icon /> 
    </ag-alert>
  </div>
  </div>
  `,
});

export const Success = () => ({
  components: { AgAlert, AlertIconExample },
  template: `<div>
  <div class="mbe16">
    <ag-alert type="success">
      <AlertIconExample iconType="success" utilityClass="mie8" #icon /> 
      ${message}
    </ag-alert>
  </div>
  <div class="mbe16">
    <ag-alert isRounded type="success">
      <AlertIconExample iconType="success" utilityClass="mie8" #icon /> 
      ${message}
    </ag-alert>
  </div>
  <div class="mbe16">
    <ag-alert isBorderAll type="success">
      <AlertIconExample iconType="success" utilityClass="mie8" #icon /> 
      ${message}
    </ag-alert>
  </div>
  <div class="mbe16">
    <ag-alert isRounded isBorderAll type="success">
      <AlertIconExample iconType="success" utilityClass="mie8" #icon /> 
      ${message}
    </ag-alert>
  </div>
  <div class="mbe16">
    <ag-alert isBorderLeft type="success">
      <AlertIconExample iconType="success" utilityClass="mie8" #icon /> 
      ${message}
    </ag-alert>
  </div>
  <div class="mbe16">
    <ag-alert isBorderRight type="success">
      <AlertIconExample iconType="success" utilityClass="mie8" #icon /> 
      ${message}
    </ag-alert>
  </div>
  <div class="mbe16">
    <ag-alert isBorderTop type="success">
      <AlertIconExample iconType="success" utilityClass="mie8" #icon /> 
      ${message}
    </ag-alert>
  </div>
  <div class="mbe16">
    <ag-alert isBorderBottom type="success">
      <AlertIconExample iconType="success" utilityClass="mie8" #icon /> 
      ${message}
    </ag-alert>
  </div>
  <div class="mbe16">
    <ag-alert isBlockEnd type="success">
      ${message}
      <AlertIconExample iconType="success" utilityClass="mis8" #icon /> 
    </ag-alert>
  </div>
  <div class="mbe16">
    <ag-alert isBlockEnd isBorderRight type="success">
      ${message}
      <AlertIconExample iconType="success" utilityClass="mis8" #icon /> 
    </ag-alert>
  </div>
  </div>
  `,
});

export const Info = () => ({
  components: { AgAlert, AlertIconExample },
  template: `<div>
  <div class="mbe16">
    <div class="mbe16">
      <ag-alert type="info">
        <AlertIconExample iconType="info" utilityClass="mie8" #icon /> 
        ${message}
      </ag-alert>
    </div>
    <div class="mbe16">
      <ag-alert isRounded type="info">
        <AlertIconExample iconType="info" utilityClass="mie8" #icon /> 
        ${message}
      </ag-alert>
    </div>
    <div class="mbe16">
      <ag-alert isBorderAll type="info">
        <AlertIconExample iconType="info" utilityClass="mie8" #icon /> 
        ${message}
      </ag-alert>
    </div>
    <div class="mbe16">
      <ag-alert isRounded isBorderAll type="info">
        <AlertIconExample iconType="info" utilityClass="mie8" #icon /> 
        ${message}
      </ag-alert>
    </div>
    <div class="mbe16">
      <ag-alert isBorderLeft type="info">
        <AlertIconExample iconType="info" utilityClass="mie8" #icon /> 
        ${message}
      </ag-alert>
    </div>
    <div class="mbe16">
      <ag-alert isBorderRight type="info">
        <AlertIconExample iconType="info" utilityClass="mie8" #icon /> 
        ${message}
      </ag-alert>
    </div>
    <div class="mbe16">
      <ag-alert isBorderTop type="info">
        <AlertIconExample iconType="info" utilityClass="mie8" #icon /> 
        ${message}
      </ag-alert>
    </div>
    <div class="mbe16">
      <ag-alert isBorderBottom type="info">
        <AlertIconExample iconType="info" utilityClass="mie8" #icon /> 
        ${message}
      </ag-alert>
    </div>
    <div class="mbe16">
      <ag-alert isBlockEnd type="info">
        ${message}
        <AlertIconExample iconType="info" utilityClass="mis8" #icon /> 
      </ag-alert>
    </div>
    <div class="mbe16">
      <ag-alert isBlockEnd isBorderRight type="info">
        ${message}
        <AlertIconExample iconType="info" utilityClass="mis8" #icon /> 
      </ag-alert>
    </div>
    </div>
    `,
  });

  export const Error = () => ({
    components: { AgAlert, AlertIconExample },
    template: `<div><div class="mbe16">
      <ag-alert type="error">yo</ag-alert>
    </div>
    <div class="mbe16">
      <ag-alert isRounded type="error">
        <AlertIconExample iconType="error" utilityClass="mie8" #icon /> 
        ${message}
      </ag-alert>
    </div>
    <div class="mbe16">
      <ag-alert isBorderAll type="error">
        <AlertIconExample iconType="error" utilityClass="mie8" #icon /> 
        ${message}
      </ag-alert>
    </div>
    <div class="mbe16">
      <ag-alert isRounded isBorderAll type="error">
        <AlertIconExample iconType="error" utilityClass="mie8" #icon /> 
        ${message}
      </ag-alert>
    </div>
    <div class="mbe16">
      <ag-alert isBorderLeft type="error">
        <AlertIconExample iconType="error" utilityClass="mie8" #icon /> 
        ${message}
      </ag-alert>
    </div>
    <div class="mbe16">
      <ag-alert isBorderRight type="error">
        <AlertIconExample iconType="error" utilityClass="mie8" #icon /> 
        ${message}
      </ag-alert>
    </div>
    <div class="mbe16">
      <ag-alert isBorderTop type="error">
        <AlertIconExample iconType="error" utilityClass="mie8" #icon /> 
        ${message}
      </ag-alert>
    </div>
    <div class="mbe16">
      <ag-alert isBorderBottom type="error">
        <AlertIconExample iconType="error" utilityClass="mie8" #icon /> 
        ${message}
      </ag-alert>
    </div>
    <div class="mbe16">
      <ag-alert isBlockEnd type="error">
        ${message}
        <AlertIconExample iconType="error" utilityClass="mis8" #icon /> 
      </ag-alert>
    </div>
    <div class="mbe16">
      <ag-alert isBlockEnd isBorderRight type="error">
        ${message}
        <AlertIconExample iconType="error" utilityClass="mis8" #icon /> 
      </ag-alert>
    </div>
  </div>
  `,
});
