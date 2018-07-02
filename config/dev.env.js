'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  // basePath:'"http://172.16.30.19:9070"',
  // rheaServicePath :'"http://172.16.30.19:9070/rhea/"',
  // chatServicePath :'"http://172.16.30.19:9070/chatw/"',
  // fileSysPath :'"http://172.16.30.19:9070/fileManagerw/"',
  // websocketPath :'"ws://127.0.0.1:8080/senderw/websocket"',
  // // websocketPath :'"ws://172.16.30.26:9070/senderw/websocket"',
  // wxServicePath:'"http://health.ztlife.com.cn/UnionWeChat/"',

  basePath:'"http://192.168.1.115:9070"',
  rheaServicePath :'"http://192.168.1.115:9070/rhea/"',
  chatServicePath :'"http://192.168.1.115:9070/chatw/"',
  fileSysPath :'"http://192.168.1.115:9070/fileManagerw/"',
  websocketPath :'"ws://127.0.0.1:8080/senderw/websocket"',
  wxServicePath:'"http://health.ztlife.com.cn/UnionWeChat/"',
  
 
  seekGiftUrl:'"https://www.tenbamboo.com/fileManagerw/file/download/seekGift.jpg"',
  weChatNo:'"gh_8b6060547075"',
  NODE_ENV: '"development"'
})
