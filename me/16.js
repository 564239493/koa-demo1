/**
 * 16.处理错误的中间件
 * 为了方便处理错误，最好使用try...catch将其捕获。
 * 但是，为每个中间件都写try...catch太麻烦，
 * 我们可以让最外层的中间件，负责所有中间件的错误处理
 */
const koa = require('koa');
const app = new koa();

const handler = async (ctx, next) => {
    try {
        await next();
    } catch (err) {
        // 处理捕获的异常
        console.log(JSON.stringify(err));
        ctx.response.status = err.statusCode || err.status || 500;
        ctx.response.body = {
            code: err.status,
            message: err.message
        };
    }
}

// 有点问题，我抛出的201,拿不到
const main = ctx => {
    ctx.throw({ status: 201, message: "错误中间件" });
};

app.use(handler);
app.use(main);
app.listen(3000);
