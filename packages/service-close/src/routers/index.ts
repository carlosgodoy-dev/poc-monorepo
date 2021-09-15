import Router from 'koa-router'

const router: Router = new Router()

router.get('/', (context) => {
    context.status = 200
    context.body = {status: 'ok', message:'Hello Close Service'}
})

export default router