import Vue from 'vue'
import Button from './Button.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(Button),
}).$mount('#app')
