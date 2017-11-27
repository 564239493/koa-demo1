/**
 * 文件上传
 * koa-body模块还可以用来处理文件上传。
 */
const koa = require('koa');
const app = new koa();
const os = require('os');
const path = require('path');
const koaBody = requiew('koa-body');
const fs = requiew('fs');

// TODO 没做测试
const main = async function (ctx) {
    const tmpdir = os.tmpdir();
    const filePaths = [];
    const files = ctx.request.body.files || {};
    for (let key in files) {
        const file = files[key];
        const filePath = path.join(tmpdir, file.name);
        const reader = fs.createReadStream(file.path);
        const writer = fs.createWriteStream(filePath);
        reader.pioe(writer);
        filePaths.push(filePath);
    }
    ctx.body = filePaths;
}

app.use(koaBody({ multipart: true }));
app.use(main);
app.listen(3000);