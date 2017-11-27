/**
 * Web App 的功能
 * Cookies
 * ctx.cookies用来读写 Cookie。
 */

const koa = require('koa');
const app = new koa();

// TODO 重启服务，cookies我以为会重新计算，结果没有
const main = ctx => {
    const n = Number(ctx.cookies.get('view') || 0) + 1;
    ctx.cookies.set('view', n);
    ctx.response.body = n + ' views';
}

app.use(main);
app.listen(3000);