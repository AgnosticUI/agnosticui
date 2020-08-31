import Vue from 'vue'
import ButtonExamples from './ButtonExamples.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(ButtonExamples),
}).$mount('#app')
