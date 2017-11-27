/**
 * 7.中间件 - Logger
 * Koa 的最大特色，也是最重要的一个设计，就是中间件（middleware）。
 * 为了理解中间件，我们先看一下 Logger （打印日志）功能的实现。
 */

const koa = require('koa');
const app = new koa();

const main = ctx => {
    console.log(`${Date.now()} ${ctx.request.method} ${ctx.request.url}`);
    ctx.response.body = '日志中间件';
}

app.use(main);
app.listen(3000);