const Koa = require('koa')
const Router = require('@koa/router')

const app = new Koa()
const router = new Router()

router.get('/', ctx => {
    ctx.body = 'home page'
})

router.get('/foo', ctx => {
    ctx.body = 'foo page'
})

// 路由重定向
router.get('/bar', ctx => {
    ctx.redirect('/foo')
})
app
    .use(router.routes()) // 挂在路由
    .use(router.allowedMethods()) // 配置方法，默认全部请求方法
app.listen(3000, () => {
    console.log('3000端口启动成功')
})