/**
 * 释放 error 事件
 * 需要注意的是，如果错误被try...catch捕获，就不会触发error事件。
 * 这时，必须调用ctx.app.emit()，手动释放error事件，才能让监听函数生效。
 */
const koa = require('koa');
const app = new koa();

const handler = async (ctx, next) => {
    try {
        await next();
    } catch (err) {
        ctx.response.status = err.statusCode || err.status || 500;
        ctx.response.type = 'html';
        ctx.response.body = '<p>Something wrong, please contact administrator.</p>';
        // 屏蔽此行代码，则error事件不起作用
        // ctx.app.emit('error', err, ctx);
    }
}

const main = ctx => {
    ctx.throw({ status: 201, message: "错误" });
};

app.on('error', function (err) {
    console.log('logging error ', err.message);
    console.log(err);
});

app.use(handler);
app.use(main);
app.listen(3000);