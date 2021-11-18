import ButtonIconTests from '../components/ButtonIconTests';

export default {
  title: "AG—Vue (Beta)/ButtonIcons"
};

export const All = () => ({
  components: { ButtonIconTests },
  template: '<ButtonIconTests />',

});
All.parameters = {
  docs: {
    source: {
      code: `
/* Note that we've used Vue CSS Modules on the icons themselves.
Essentially, you can style your slots aka children with css-in-js,
css modules, or whatever suits you best. We just render it with
<slot /> so it makes no difference. */
<Button mode="primary" v-bind:isRounded="true">
Call
<svg
  :class="this.$style.iconRight"
  role="img"
  stroke="currentColor"
  fill="currentColor"
  stroke-width="0"
  viewBox="0 0 16 16"
  version="1.1"
  data-custom-icon="true"
  focusable="false"
  aria-hidden="true"
  height="14px"
  width="14px"
  xmlns="http://www.w3.org/2000/svg"
>
  <desc>Phone icon</desc>
  <path
    d="M11 10c-1 1-1 2-2 2s-2-1-3-2-2-2-2-3 1-1 2-2-2-4-3-4-3 3-3 3c0 2 2.055 6.055 4 8s6 4 8 4c0 0 3-2 3-3s-3-4-4-3z"
  />
</svg>
</Button>
<Button mode="primary" v-bind:isRounded="true">
<svg
  :class="this.$style.iconLeft"
  role="img"
  stroke="currentColor"
  fill="currentColor"
  viewBox="0 0 16 16"
  version="1.1"
  stroke-width="0"
  viewBox="0 0 16 16"
  data-custom-icon="true"
  focusable="false"
  aria-hidden="true"
  height="14px"
  width="14px"
  xmlns="http://www.w3.org/2000/svg
>
  <desc>Download icon</desc>
  <path d="M14 11v2h-12v-2h-2v4h16v-4zM12 6h-3v-5h-2v5h-3l4 6z"></path>
</svg>
Download
</Button
      `
    }
  }
};

