/**
 * 中间件的合成
 * koa-compose模块可以将多个中间件合成为一个
 */

const koa = require('koa');
const app = new koa();
const compose = require('koa-compose');

const fun1 = (ctx, next) => {
    console.log("方法1");
    next();
}

const fun2 = (ctx, next) => {
    console.log("方法2");
    next();
}

const fun3 = (ctx, next) => {
    console.log("方法3");
    ctx.response.body = 'Hello World';
}

const middlewares = compose([fun2, fun1, fun3]);
app.use(middlewares);
app.listen(3000);