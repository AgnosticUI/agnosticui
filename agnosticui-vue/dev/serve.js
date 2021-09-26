import Vue from "vue";
import Dev from "./serve.vue";
// To register individual components where they are used (serve.vue) instead of using the
// library as a whole, comment/remove this import and it's corresponding "Vue.use" call
import installAgnosticUiVue from "@/entry.esm";
Vue.use(installAgnosticUiVue);

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(Dev)
}).$mount("#app");
