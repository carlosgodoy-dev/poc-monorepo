import Router from 'koa-router'

const router: Router = new Router()

router.get('/', (context) => {
    context.status = 200
    context.body = 'Hello World'
})

export default router