import Vue from 'vue'
import Router from 'vue-router'
import Cain from '@cain/'
Vue.use(Router)

const routes = [
  {
    path: '/',
    redirect: '/index'
  },
  {
    path: '/index',
    component: resolve => require(['@/components/Index'], resolve),
    name: '主页',
    meta: {
      isShowBar: true,
      code: 'index',
      keepAlive: true
    }
  },
  {
    path: '/login',
    component: resolve => require(['@/components/Login'], resolve),
    name: '登录',
    meta: {
      code: 'login',
      isShowBar: false
    }
  },
  {
    path: '/chatList',
    component: resolve => require(['@/components/chat/ChatList'], resolve),
    name: '消息列表',
    meta: {
      isShowBar: true,
      code: 'chatList',
      keepAlive: true
    }
  },
  {
    path: '/chatDetail/:senderId/:recverId/:sessionId/:unReadCount',
    component: resolve => require(['@/components/chat/ChatDetail'], resolve),
    name: '消息',
    meta: {
      isShowBar: false,
      code: 'chatDetail'
    }
  },

  {
    path: '/selectSex',
    component: resolve => require(['@/components/SelectSex'], resolve),
    name: '选择您的性别',
    meta: {
      code: 'selectSex',
      isShowBar: false
    }
  },
  {
    path: '/my',
    component: resolve => require(['@/components/my/My'], resolve),
    name: '我的',
    meta: {
      isShowBar: true,
      code: 'my',
      keepAlive: true
    }
  },
  {
    path: '/memberDetail',
    component: resolve => require(['@/components/member/MemberDetail'], resolve),
    name: '会员详情',
    meta: {
      code: 'memberDetail',
      isShowBar: false,
      keepAlive: true
    }
  },
  {
    path: '/detailInfo',
    component: resolve => require(['@/components/member/DetailInfo'], resolve),
    name: '详细信息',
    meta: {
      code: 'detailInfo',
      isShowBar: false,
      keepAlive: true
    }
  },

  {
    path: '/giftList',
    component: resolve => require(['@/components/member/GiftList'], resolve),
    name: '送礼物',
    meta: {
      code: 'giftList',
      isShowBar: false,
      keepAlive: true
    }
  },
  {
    path: '/topMemberList',
    component: resolve => require(['@/components/search/TopMemberList'], resolve),
    name: '排行榜',
    meta: {
      code: 'topMemberList',
      isShowBar: false,
      keepAlive: true
    }
  },
  {
    path: '/memberListByTabs',
    component: resolve => require(['@/components/search/MemberListByTabs'], resolve),
    name: '会员列表',
    meta: {
      code: 'memberListByTabs',
      isShowBar: false,
      keepAlive: true
    }
  },
  {
    path: '/memberList',
    component: resolve => require(['@/components/search/MemberList'], resolve),
    name: '会员搜索',
    meta: {
      code: 'memberList',
      isShowBar: false,
      keepAlive: true
    }
  },
  {
    path: '/searchIndex',
    component: resolve => require(['@/components/search/SearchIndex'], resolve),
    name: '搜索',
    meta: {
      isShowBar: true,
      code: 'searchIndex',
      keepAlive: true
    }
  },
  {
    path: '/addSearchItem',
    component: resolve => require(['@/components/search/AddSearchItem'], resolve),
    name: '搜索条件',
    meta: {
      isShowBar: false,
      code: 'addSearchItem',
      keepAlive: true
    }
  },
  {
    path: '/memberService',
    component: resolve => require(['@/components/my/MemberService'], resolve),
    name: '会员服务',
    meta: {
      isShowBar: false,
      code: 'memberService',
      keepAlive: true
    }
  },
  {
    path: '/memberServiceVIP',
    component: resolve => require(['@/components/my/MemberServiceVIP'], resolve),
    name: 'VIP服务',
    meta: {
      isShowBar: false,
      code: 'memberServiceVIP',
      keepAlive: true
    }
  },
  {
    path: '/memberServiceSVIP',
    component: resolve => require(['@/components/my/MemberServiceSVIP'], resolve),
    name: 'SVIP服务',
    meta: {
      isShowBar: false,
      code: 'memberServiceVIP',
      keepAlive: true
    }
  },
  {
    path: '/memberServiceTopRecommend',
    component: resolve => require(['@/components/my/MemberServiceTopRecommend'], resolve),
    name: '特别推荐置顶服务',
    meta: {
      isShowBar: false,
      code: 'memberServiceTopRecommend',
      keepAlive: true
    }
  },
  {
    path: '/editProfile',
    component: resolve => require(['@/components/my/EditProfile'], resolve),
    name: '我的信息',
    meta: {
      isShowBar: false,
      code: 'editProfile',
      keepAlive: true
    }
  },
  {
    path: '/editSelectOther',
    component: resolve => require(['@/components/my/EditSelectOther'], resolve),
    name: '我的择偶标准',
    meta: {
      isShowBar: false,
      code: 'editSelectOther',
      keepAlive: true
    }
  },
  {
    path: '/myGift',
    component: resolve => require(['@/components/my/MyGift'], resolve),
    name: '礼物盒',
    meta: {
      isShowBar: false,
      code: 'myGift',
      keepAlive: true
    }
  },
  {
    path: '/myFavorite',
    component: resolve => require(['@/components/my/MyFavorite'], resolve),
    name: '我的收藏',
    meta: {
      isShowBar: false,
      code: 'myFavorite',
      keepAlive: true
    }
  },
  {
    path: '/myMeeting',
    component: resolve => require(['@/components/my/MyMeeting'], resolve),
    name: '会客厅',
    meta: {
      isShowBar: false,
      code: 'myMeeting',
      keepAlive: true
    }
  },
  {
    path: '/starAuth',
    component: resolve => require(['@/components/my/StarAuth'], resolve),
    name: '星级认证',
    meta: {
      isShowBar: false,
      code: 'starAuth',
      keepAlive: true
    }
  },
  {
    path: '/myAuth',
    component: resolve => require(['@/components/my/MyAuth'], resolve),
    name: '我的认证',
    meta: {
      isShowBar: false,
      code: 'myAuth',
      keepAlive: true
    }
  },
  {
    path: '/authRealPerson',
    component: resolve => require(['@/components/my/AuthRealPerson'], resolve),
    name: '实名认证',
    meta: {
      isShowBar: false,
      code: 'authRealPerson',
      keepAlive: true
    }
  },
  {
    path: '/authEdu',
    component: resolve => require(['@/components/my/AuthEdu'], resolve),
    name: '学历认证',
    meta: {
      isShowBar: false,
      code: 'authEdu',
      keepAlive: true
    }
  },
  {
    path: '/authHouse',
    component: resolve => require(['@/components/my/AuthHouse'], resolve),
    name: '房屋认证',
    meta: {
      isShowBar: false,
      code: 'authHouse',
      keepAlive: true
    }
  },
  {
    path: '/authCar',
    component: resolve => require(['@/components/my/AuthCar'], resolve),
    name: '车辆认证',
    meta: {
      isShowBar: false,
      code: 'authCar',
      keepAlive: true
    }
  },
  {
    path: '/myAlbum',
    component: resolve => require(['@/components/my/MyAlbum'], resolve),
    name: '我的相册',
    meta: {
      isShowBar: false,
      code: 'myAlbum',
      keepAlive: true
    }
  },
  {
    path: '/uploadUserHead',
    component: resolve => require(['@/components/my/UploadUserHead'], resolve),
    name: '上传头像',
    meta: {
      isShowBar: false,
      code: 'uploadUserHead',
      keepAlive: true
    }
  },
  {
    path: '/reportUser',
    component: resolve => require(['@/components/chat/ReportUser'], resolve),
    name: '举报',
    meta: {
      isShowBar: false,
      code: 'reportUser'
    }
  },
  {

    path: '/agreement',
    component: resolve => require(['@/components/about/Agreement'], resolve),
    name: '服务协议',
    meta: {
      isShowBar: false,
      code: 'agreement'
    }
  },
  {

    path: '/about',
    component: resolve => require(['@/components/about/About'], resolve),
    name: '关于',
    meta: {
      isShowBar: false,
      code: 'about'
    }
  },
  {

    path: '/myShield',
    component: resolve => require(['@/components/my/MyShield'], resolve),
    name: '我的拉黑',
    meta: {
      keepAlive: true,
      isShowBar: false,
      code: 'myShield'
    }
  },
  {

    path: '/kf',
    component: resolve => require(['@/components/about/Kf'], resolve),
    name: '客服',
    meta: {
      keepAlive: true,
      isShowBar: false,
      code: 'kf'
    }
  },
  {
    path: '/manageIndex',
    component: resolve => require(['@/components/manage/ManageIndex'], resolve),
    name: '管理主页',
    meta: {
      keepAlive: true,
      isShowBar: false,
      code: 'manageIndex'
    }
  },
  {
    path: '/manageUserHead',
    component: resolve => require(['@/components/manage/ManageUserHead'], resolve),
    name: '审核头像',
    meta: {
      keepAlive: true,
      isShowBar: false,
      code: 'manageUserHead'
    }
  },
  {
    path: '/manageRealPerson',
    component: resolve => require(['@/components/manage/ManageRealPerson'], resolve),
    name: '实名审核',
    meta: {
      keepAlive: true,
      isShowBar: false,
      code: 'manageRealPerson'
    }
  }

]
// let loading = ''
const router = new Router({
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  },
  linkActiveClass: 'active',
  routes
})
// let menuList = sessionStorage.getItem('menuList')
router.beforeEach(async (to, from, next) => {
  // await this.$role.validateNoAudit('searchItem')

  if (to.meta.code) {
    let pages = Cain.getParam('noRulePages')
    if (!Cain.isBlank(pages)) {
      pages = pages.split(',')
      for (let item of pages) {
        if (item === to.meta.code) {
          router.push('/login')
          return false
        }
      }
    }
  }
  next()
})
router.afterEach((to, from) => {
  document.title = to.name
})

export default router
