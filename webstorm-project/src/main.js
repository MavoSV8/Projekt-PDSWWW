import Vue from 'vue'
import App from '@/App.vue'


Vue.config.productionTip = false

console.log(App)

new Vue({
  el : '#app',
  render: h => h(App),
})

