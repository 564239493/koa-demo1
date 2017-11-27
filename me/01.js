// 架设HTTP服务
const Koa = require("koa");
const app = new Koa();

// 程序端口
app.listen(3000);

// 运行脚本
// node me/01.js
// 访问 http://127.0.0.1:3000 。
// 你会看到页面显示"Not Found"，表示没有发现任何内容。
// 这是因为我们并没有告诉 Koa 应该显示什么内容。