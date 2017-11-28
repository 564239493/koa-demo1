/**
 * 文件上传
 * koa-body模块还可以用来处理文件上传。
 */
const koa = require('koa');
const app = new koa();
const os = require('os');
const path = require('path');
const koaBody = require('koa-body');
const fs = require('fs');

const main = async function (ctx) {
    // 返回操作系统的默认临时文件夹
    const tmpdir = os.tmpdir();
    const filePaths = [];
    // 接受请求文件
    const files = ctx.request.body.files || {};
    for (let key in files) {
        const file = files[key];
        const filePath = path.join(tmpdir, file.name);
        // 用来打开一个可读的文件流，它返回一个fs.ReadStream对象
        const reader = fs.createReadStream(file.path);
        // 用来创建一个可写的文件流，它返回fs.WriteStream对象
        const writer = fs.createWriteStream(filePath);
        // 管道
        reader.pipe(writer);
        filePaths.push(filePath);
    }
    ctx.body = filePaths;
}

app.use(koaBody({ multipart: true }));
app.use(main);
app.listen(3000);