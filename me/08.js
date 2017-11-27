/**
 * 8.中间件概念
 * 上一个例子里面的 Logger 功能，可以拆分成一个独立函数
 * logger函数就叫做"中间件"（middleware），因为它处在 HTTP Request 和 HTTP Response 中间，用来实现某种中间功能。
 * app.use()用来加载中间件。
 * 基本上，Koa 所有的功能都是通过中间件实现的，前面例子里面的main也是中间件。
 * 每个中间件默认接受两个参数，第一个参数是 Context 对象，
 * 第二个参数是next函数。只要调用next函数，就可以把执行权转交给下一个中间件。
 */

const koa = require('koa');
const app = new koa();

// logger中间件
const logger = (ctx, next) => {
    console.log("请求" + `${Date.now()} ${ctx.request.method} ${ctx.request.url}`);
    // 执行下一个中间件
    next();
    // 以下方法会在返回时执行
    console.log("返回" + `${Date.now()} ${ctx.request.method} ${ctx.request.url}`);

}

// 业务逻辑
const main = (ctx, next) => {
    console.log("执行业务逻辑");
    ctx.response.body = '中间件 - 洋葱理论';
}

app.use(logger);
app.use(main);
app.listen(3000);