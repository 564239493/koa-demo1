/**
 * 17.error 事件的监听
 * 运行过程中一旦出错，Koa 会触发一个error事件。
 * 监听这个事件，也可以处理错误。
 */

const koa = require('koa');
const app = new koa();

const main = ctx => {
    ctx.throw(500);
}

app.on('error', (err, ctx) => {
    console.log('error事件');
    console.error('server error', err);
});

app.use(main);
app.listen(3000);