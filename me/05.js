/**
 * 5.原生路由
 * 通过ctx.request.path可以获取用户请求的路径，由此实现简单的路由
 */

const koa = require('koa');
const app = new koa();

const main = ctx => {
    if (ctx.request.path != "/") {
        ctx.response.type = "html";
        ctx.response.body = '<a href="/">首页</a>';
    }else{
        ctx.response.body = "首页,你好";
    }
}

app.use(main);
app.listen(3000);