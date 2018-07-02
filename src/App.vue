<template>
  <div>

    <router-view v-if="!$route.meta.keepAlive"></router-view>
    <keep-alive v-if="$route.meta.keepAlive">
      <router-view></router-view>
    </keep-alive>

    <cain-navigation :param="navParam"></cain-navigation>


    <div class="isSealAccountOverlay" v-if="isSealAccount">
     <p>由于您违反了用户行为准则，将您封号</p>
    </div>

  </div>
</template>

<script>
import Cain from '@cain/'
import CainNavigation from '@cain/components/Navigation/'
import CainChatPlugin from '@/components/chat/CainChatPlugin.js'
import Vue from 'vue'
export default {
  data () {
    return {
      isSealAccount: false,
      navParam: [
        { key: 'index', text: '首页' },
        { key: 'searchIndex', text: '搜索' },
        { key: 'chatList', text: '消息' },
        { key: 'my', text: '我的' }
      ]
    }
  },
  created () {
    this.initEnv()
  },
  mounted () {
    let list = [
      'ozbuFuGq7yxmQMROM3Qv-rMaY5ck', // 孙靖
      'ozbuFuGhwAVyX0RzKZjIsEr_LjDw', // 心远
      'ozbuFuKEusohYPa-jEtrGYabmb2Y', // 低调
      'ozbuFuO0-a_iVfYWYZpYjTAzqHF0', // Miss
      'ozbuFuFGYFy605FrSP5Png6xMjJ4', // 刘蕴茹万岁
      'ozbuFuCiFq8b4mqSIIyClVDTGL8A',
      'ozbuFuH4kd3vzjbwlMmzCBo5SyoE' // 猎奇
    ]

    if (list.indexOf(Cain.getParam('openId')) === -1) {
      return false
    }
    this.hideOverlay()
    Vue.use(CainChatPlugin, {
      $router: this.$router,
      $store: this.$store,
      $cain: this.$cain,
      // $vux: this.$vux,
      $http: this.$httpChat,
      $httpFile: this.$httpFile
    })
    this.openConnection()
  },
  methods: {
    async initEnv () {
      // 初始化Cain http对象
      Cain.initHttp(this.$http)
      // 刷新用户信息
      let user = await Cain.getUserInfoByRefersh()

      // 获取用户权限
      this.$role.getUserRole()

      if (user.isSealAccount === '1') {
        this.isSealAccount = true
        return false
      }

      // 获取未读消息
      this.getMyUnRead()

      if (process.env.NODE_ENV !== 'development') {
        // 初始化微信Token
        await Cain.getWeChatToken(this.$httpWx)
        // 获取地理位置
        const location = await Cain.getLocation()
        const userId = Cain.getParam('openId')

        let array = [
          {
            userId,
            keyName: 'longitude',
            valueName: location.longitude
          },
          {
            userId,
            keyName: 'latitude',
            valueName: location.latitude
          }
        ]

        await this.$http.post('interface/batchReplaceUser', {
          batchInsert: array
        })
      }

      // 判断用户性别选择
      if (Cain.isBlank(user.sex)) {
        this.$router.replace('/selectSex')
      }
    },
    //  打开连接
    async openConnection () {
      const role = await this.$role.getUserRole()
      if (role === 'visitor') {
        return false
      }
      await this.$webIM.openConnection(Cain.getParam('openId'))
      // 获取未读信息
      const res = await this.$httpChat.post('chat/getUnreadRecordCount', {
        userId: Cain.getParam('openId')
      })
      this.$store.commit('addUnReadIMCount', res.unreadCnt)
      let self = this
      window.onbeforeunload = () => {
        self.$webIM.closeConnetction()
      }
    },
    // 获取我的消息未读数
    async getMyUnRead () {
      const role = await this.$role.getUserRole()
      if (role === 'visitor') {
        return false
      }
      let toUserId = Cain.getParam('openId')
      const cont = await this.$http.post('interface/getU2uAction', {
        toUserId,
        actionTypeList:
          'authEdu,authCar,authHouse,authRealPerson,authUserHead,heartBeat,view',
        selectField: 'count(1) as total',
        status: '1'
      })

      const cont2 = await this.$http.post('interface/getU2uActionHis', {
        toUserId,
        actionTypeList: 'gift',
        selectField: 'count(1) as total',
        status: '1'
      })
      this.$store.commit(
        'addUnReadMyCount',
        cont.result[0].total + cont2.result[0].total
      )
    },
    hideOverlay () {
      let overlay = document.getElementById('rootOverlay')
      overlay.classList.add('hiddenReady')
      setTimeout(() => {
        overlay.remove()
      }, 1000)
    }
  },
  components: {
    CainNavigation
  }
}
</script>

<style  scoped   lang="scss">


 .isSealAccountOverlay {
        position: fixed;
        width: 100%;
        height: 100%;
        background: #c2524a;
        top: 0;
        left:0;
        z-index: 300;
        margin: 0 auto;
        text-align: center;
        display: flex;
        justify-content: center;
        align-items: center;
        color:#fff;
        font-size: $fs30;
      }
// #E3594F
// #191919
</style>
