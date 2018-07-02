<template>
  <div>

    <router-view v-if="!$route.meta.keepAlive"></router-view>
    <keep-alive v-if="$route.meta.keepAlive">
      <router-view></router-view>
    </keep-alive>

    <!-- <cain-navigation :param="navParam"></cain-navigation> -->

  </div>
</template>

<script>
// import Cain from '@cain/'
import CainNavigation from '@cain/components/Navigation/'
// import Vue from 'vue'
export default {
  data () {
    return {
      // navParam: [
      //   { key: 'index', text: '首页' },
      //   { key: 'searchIndex', text: '首页2' },
      //   { key: 'chatList', text: '首页3' },
      //   { key: 'my', text: '首页4' }
      // ]
    }
  },
  created () {
  },
  mounted () {
    this.hideOverlay()
  },
  methods: {
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


</style>
