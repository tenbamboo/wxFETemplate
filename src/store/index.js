import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

let state = {
  blockChatArea: {},
  unReadIMCount: 0,
  unReadMyCount: 0,
  chatStatus: 'offline',
  rootUserId: 0
  // menuList: []
}
// if (process.env.NODE_ENV === 'development') {
//   state.rootUserId = sessionStorage.getItem('rootUserId') || 1001
// }

const mutations = {
  // 改变未读IM条数
  addUnReadIMCount (state, count) {
    state.unReadIMCount += count
  },
  // 改变未读我的条数
  addUnReadMyCount (state, count) {
    state.unReadMyCount += count
  },
  // 改变在线离线状态
  changeChatStatus (state, status) {
    state.chatStatus = status
  },
  // 设置UserId
  setRootUserId (state, userId) {
    state.rootUserId = userId
  },
  // 添加空白域内容
  addBlockChatArea (state, item) {
    state.blockChatArea = item
  },
  // 删除空白域内容
  removeBlockChatArea (state, item) {
    state.blockChatArea.push(item)
  }
}
const actions = {}
const getters = {}

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})
