///  <reference path="../types/index.d.ts" />
///  <reference path="./shims.d.ts"/>

import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
