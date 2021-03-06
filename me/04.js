/**
 * 4.网页模板
 * 实际开发中，返回给用户的网页往往都写成模板文件。
 * 我们可以让 Koa 先读取模板文件，然后将这个模板返回给用户。
 */
const fs= require('fs');
const koa = require("koa");
const app = new koa();

const main = ctx => {
    ctx.response.type = 'html';
    ctx.response.body = fs.createReadStream('./demos/template.html');
}

app.use(main);
app.listen(3000);