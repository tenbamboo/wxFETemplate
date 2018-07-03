import Vue from 'vue'
import App from './App'
import resource from './resource'
import store from './store'
import router from './router'
import Mint from 'mint-ui'
import '@/assets/css/normalize.css'
import '@/assets/css/mintui.css'
import '@/assets/css/custom.css'
import _ from '@/components/common/localLodash.js'
import CainUICommon from '@/components/cain/CainUICommon'

Vue.prototype.$_ = _

resource.init()

Vue.use(CainUICommon)
Vue.use(Mint)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})
