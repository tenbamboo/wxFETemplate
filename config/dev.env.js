'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  // basePath:'"http://172.16.30.19:9070"',
  // rheaServicePath :'"http://172.16.30.19:9070/rhea/"',
  // fileSysPath :'"http://172.16.30.19:9070/fileManagerw/"',

  basePath:'"http://192.168.1.115:9070"',
  rheaServicePath :'"http://192.168.1.115:9070/rhea/"',
  fileSysPath :'"http://192.168.1.115:9070/fileManagerw/"',
  // wxServicePath:'"http://health.ztlife.com.cn/UnionWeChat/"',
  
 
  weChatNo:'"gh_8b6060547075"',
  NODE_ENV: '"development"'
})
