/**
 * 9.中间件栈
 * 多个中间件会形成一个栈结构（middle stack），
 * 以"先进后出"（first-in-last-out）的顺序执行
 * 如果中间件内部没有调用next函数，那么执行权就不会传递下去。
 * 作为练习，你可以将two函数里面next()这一行注释掉再执行，看看会有什么结果。
 */

const koa = require('koa');
const app = new koa();

const one = (ctx, next) => {
    console.log('>> one');
    next();
    console.log('<< one');
  }
  
  const two = (ctx, next) => {
    console.log('>> two');
    // next(); 
    console.log('<< two');
  }
  
  const three = (ctx, next) => {
    console.log('>> three');
    next();
    console.log('<< three');
  }
  
  app.use(one);
  app.use(two);
  app.use(three);

app.listen(3000);