import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

import ElementUi from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUi)

import './assets/css/base.css'

new Vue({
  router,
  // 挂载路由
  render: h => h(App),
}).$mount('#app')
