import AgToasts from '../components/Toasts.vue';
import AgToast from '../components/Toast.vue';
import AgClose from '../components/Close.vue';
import AlertIconExample from './AlertIconExample.vue';

const wrapper = () => {
  return {
    template: '<div class="mbe40"><story /></div>',
  };
};

export default {
  title: 'AG-Vue (Beta)/Toasts',
  component: AgToasts,
  decorators: [wrapper],
};

const message = 'Toasts should be used for timely information.';

export const Default = () => ({
  components: { AgClose, AgToasts, AgToast, AlertIconExample },
  template: `<div>
    <ag-toasts portalRootSelector="body" verticalPosition="top" horizontalPosition="center">
      <ag-toast :isOpen="true" type="success">
        <alert-icon-example iconType="success" utilityClass="mie8" #icon />
        ${message}
      </ag-toast>
      <div class="mbe14" />
      <ag-toast :isOpen="true" type="success">
        <alert-icon-example iconType="success" utilityClass="mie8" #icon />
        ${message}
      </ag-toast>
    </ag-toasts>
    <ag-toasts portalRootSelector="body" verticalPosition="top" horizontalPosition="end">
      <ag-toast :isOpen="true" type="info">
        <alert-icon-example iconType="info" utilityClass="mie8" #icon />
        ${message}
      </ag-toast>
      <div class="mbe14" />
      <ag-toast :isOpen="true" type="info">
        <alert-icon-example iconType="info" utilityClass="mie8" #icon />
        ${message}
      </ag-toast>
      <div class="mbe14" />
      <ag-toast :isOpen="true" type="info">
        <alert-icon-example iconType="info" utilityClass="mie8" #icon />
        ${message}
      </ag-toast>
    </ag-toasts>
    <ag-toasts portalRootSelector="body" verticalPosition="top" horizontalPosition="start">
      <ag-toast :isOpen="true" type="dark">
        <alert-icon-example iconType="dark" utilityClass="mie8" #icon />
        ${message}
      </ag-toast>
    </ag-toasts>
    <ag-toasts portalRootSelector="body" verticalPosition="bottom" horizontalPosition="start">
      <ag-toast :isOpen="true" type="warning">
        <alert-icon-example iconType="warning" utilityClass="mie8" #icon />
        <div className="flex-fill">${message}</div>
        <ag-close :style="{ color: 'var(--agnostic-warning-dark)' }"></ag-close>
      </ag-toast>
      <div class="mbe16" />
      <ag-toast :isOpen="true" type="dark">
        <alert-icon-example iconType="dark" utilityClass="mie8" #icon />
        <div className="flex-fill">${message}</div>
        <ag-close :style="{ color: 'var(--agnostic-light)' }"></ag-close>
      </ag-toast>
    </ag-toasts>
    <ag-toasts portalRootSelector="body" verticalPosition="bottom" horizontalPosition="center">
      <ag-toast :isOpen="true" type="error">
        <alert-icon-example iconType="error" utilityClass="mie8" #icon />
        ${message}
      </ag-toast>
    </ag-toasts>
    <ag-toasts portalRootSelector="body" verticalPosition="bottom" horizontalPosition="end">
      <ag-toast :isOpen="true" type="error">
        <alert-icon-example iconType="error" utilityClass="mie8" #icon />
        ${message}
      </ag-toast>
    </ag-toasts>
  </div>`
});
