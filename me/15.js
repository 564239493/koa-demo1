/**
 * 15.404错误
 * 如果将ctx.response.status设置成404，
 * 就相当于ctx.throw(404)，返回404错误
 */

const koa = require('koa');
const app = new koa();

const main = ctx => {
    ctx.response.status = 404;
    ctx.response.body = 'Page Not Found';
}

app.use(main);
app.listen(3000);