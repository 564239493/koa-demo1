/**
 * 6.koa-route 模块
 * 原生路由用起来不太方便，我们可以使用封装好的koa-route模块
 */

const koa = require('koa');
const app = new koa();
const route = require('koa-route');

// about函数
const about = ctx => {
    ctx.response.body = '这是请求about的返回';
}

// main函数
const main = ctx => {
    ctx.response.body = '这是请求main的返回';
}

// 路由挂载
app.use(route.get('/', main));
app.use(route.get('/about', about));

app.listen(3000);