import Vue from 'vue'
import App from './App.vue'
import router from './route/router'
import store from './store/store'

import "normalize.css"

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

//引入全局mock
import "./api/mock"


Vue.config.productionTip = false
Vue.use(ElementUI);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
