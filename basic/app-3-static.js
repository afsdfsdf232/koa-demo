const Koa = require('koa')
const Router = require('@koa/router')
const static = require('koa-static')
const mount = require('koa-mount')
const path = require('path')
const app = new Koa()
const router = new Router()

// 静态资源托管，不设置虚拟路径
// app.use(static(path.join(__dirname, './public')))
// 设置虚拟路径
app.use(mount('/public', static(path.join(__dirname, './public'))))
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

// p8