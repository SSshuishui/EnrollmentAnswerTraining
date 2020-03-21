import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import toast from 'components/common/toast'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.config.productionTip = false
// 安装ElementUI插件
Vue.use(ElementUI)
// 安装toast插件
Vue.use(toast)

new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')
