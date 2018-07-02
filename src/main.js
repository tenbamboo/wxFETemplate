import Vue from 'vue'
import App from './App'
import resource from './resource'
import store from './store'
import router from './router'
import Mint from 'mint-ui'
// import { Picker, Button, Badge, Swipe, SwipeItem, InfiniteScroll, Lazyload, DatetimePicker, TabContainer, TabContainerItem, Popup } from 'mint-ui'
import '@/assets/css/normalize.css'
import '@/assets/css/mintui.css'
import '@/assets/css/custom.css'
import _ from '@/components/common/localLodash.js'
import CainUICommon from '@/components/cain/CainUICommon'
import RoleModel from '@/components/common/RoleModel.js'

Vue.prototype.$_ = _

if (process.env.NODE_ENV === 'development') {
  sessionStorage.setItem('openId', 'ozbuFuGhwAVyX0RzKZjIsEr_LjDw')
  // sessionStorage.setItem('openId', 'ozbuFuKEusohYPa-jEtrGYabmb2Y')
  // sessionStorage.setItem('openId', 'ozbuFuO0-a_iVfYWYZpYjTAzqHF0')
}

resource.init()

Vue.use(CainUICommon)
Vue.use(RoleModel, {
  $http: Vue.prototype.$http,
  $router: router
})
// Mint UI
// Vue.component(Badge.name, Badge)
// Vue.component(Picker.name, Picker)
// Vue.component(Button.name, Button)
// Vue.component(Swipe.name, Swipe)
// Vue.component(SwipeItem.name, SwipeItem)
// Vue.component(DatetimePicker.name, DatetimePicker)
// Vue.component(TabContainer.name, TabContainer)
// Vue.component(TabContainerItem.name, TabContainerItem)
// Vue.component(Popup.name, Popup)
// Vue.use(InfiniteScroll)
// Vue.use(Lazyload)
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
