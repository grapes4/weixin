var wechat = require('wechat');
var verifyInfo = {  //验证信息
  token: 'weixin',  // your wechat token
  appid: 'wx286063f0275512d3', // your wechat appid
  appsecret: '5a43ffca7bd646a0e140bc91bc76466f'
};

//处理文本消息
var handler = wechat(verifyInfo, wechat.text(wechatText));  

module.exports = handler;

function wechatText(message, req, res, next) {
  var input = (message.Content || '').trim();  

  if (/你好/.test(input)) {
    res.reply('Hello world (•̀ロ•́)و✧ ~~');
  } else {
    res.reply('(¬_¬)ﾉ 听不懂啦');
  }
}