/* eslint-disable */
// function getcookie (name) {
//   var strcookie = document.cookie
//   var arrcookie = strcookie.split('; ')
//   for (var i = 0; i < arrcookie.length; i++) {
//     var arr = arrcookie[i].split('=')
//     if (arr[0] == name) return decodeURIComponent(arr[1]) // 增加对特殊字符的解析
//   }
//   return ''
// }
// function addcookie (name, value, expireHours) {
//   var cookieString = name + '=' + escape(value) + '; path=/'
//   // 判断是否设置过期时间
//   if (expireHours > 0) {
//     var date = new Date()
//     date.setTime(date.getTime + expireHours * 3600 * 1000)
//     cookieString = cookieString + '; expire=' + date.toGMTString()
//   }
//   document.cookie = cookieString
// }
function GetQueryString(name) {
    var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)')
    var r = window.location.search.substr(1).match(reg)
    if (r != null) { return unescape(r[2]) }
    return null
}
function post(u, d, f) {
    var xmlhttp = new XMLHttpRequest()
    xmlhttp.open('POST', u, true)
    xmlhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded')
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            f.call(this, xmlhttp.responseText)
        }
    }
    xmlhttp.send(d)
}

function isWeiXin() {
    var ua = window.navigator.userAgent.toLowerCase()
    if (ua.match(/MicroMessenger/i) == 'micromessenger') {
        return true
    } else {
        return false
    }
}

// var APPID = 'wx5fdcf9e7c681ba69'
var URL_HOST = window.location.protocol + '//' + window.location.host
var WX_SVR_URL = URL_HOST + '/dcwx/wxsr'
var rootOpenId = sessionStorage.getItem('rootOpenId')
if (isWeiXin() && rootOpenId == '') {
    var access_code = GetQueryString('code')
    var fromurl = location.href
    if (access_code == null) {
        var url = 'https://open.weixin.qq.com/connect/oauth2/authorize?appid=' + jkx.appID + '&redirect_uri=' + encodeURIComponent(fromurl) + '&response_type=code&scope=snsapi_base&state=STATE%23wechat_redirect&connect_redirect=1#wechat_redirect'
        location.replace = url
    } else {
        post(WX_SVR_URL + '/getOpenID', 'c=' + access_code, function (result) {
            if (result != null && result.length > 0) {
                sessionStorage.setItem('rootOpenId', result)
                location.replace = location.href.split('?')[0] + location.hash
            } else {
                location.replace = jkx.noAuthPage + '?openid=' + GetQueryString('openid')
            }
        })
    }
}
/* eslint-enable */
