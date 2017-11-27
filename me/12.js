/**
 * 12.静态资源
 * 如果网站提供静态资源（图片、字体、样式表、脚本......），
 * 为它们一个个写路由就很麻烦，也没必要。
 * koa-static模块封装了这部分的请求。
 */
const koa = require('koa');
const app = new koa();
const path = require('path');
const serve = require('koa-static');

const main = serve(path.join(__dirname));

app.use(main);
app.listen(3000);