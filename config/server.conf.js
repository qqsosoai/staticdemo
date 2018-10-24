/**
 * 该文件为设置后台服务器
 * @type {{requestPath: string, backServer: string}}
 */
const server={
  requestPath:'/server',//代理别名
  backServer:'http://192.168.1.104:8080/djpt_dzb'//代理地址,后台的基础目录
}
module.exports = server;
