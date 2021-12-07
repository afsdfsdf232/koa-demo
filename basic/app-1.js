const koa = require('koa')
const app = new koa()
    // koa 没有路由系统只有中间件
app.use(ctx => {
    ctx.body = 'hello Koa'
})
app.listen(3000, () => {
    console.log('3000端口启动成功')
})