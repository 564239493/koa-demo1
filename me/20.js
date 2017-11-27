/**
 * 表单
 * Web 应用离不开处理表单。
 * 本质上，表单就是 POST 方法发送到服务器的键值对。
 * koa-body模块可以用来从 POST 请求的数据体里面提取键值对。
 */
const koa = require('koa');
const app = new koa();
const koaBody = require('koa-body');

const main = async function (ctx) {
    const body = ctx.request.body;
    if (!body.name) {
        ctx.throw(400, ".name required");
    }
    ctx.body = { name: body.name }
}

app.use(koaBody());
app.use(main);
app.listen(3000);