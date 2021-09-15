import koa from 'koa'
import bodyparser from 'koa-bodyparser'
import loggerKoa from 'koa-logger'
import cors from 'koa2-cors'

import rootRouter from '../routers'


const start = async (options: any) => {

    const app = new koa()
    
    app.use(cors())
    app.use(loggerKoa())
    app.use(bodyparser())

    app.use( async (ctx, next) => {
        try {
          await next()
        } catch(err: any) {
          ctx.status = err.status || 500;
          ctx.body = err.message;
        }
      })
    
    app.use(rootRouter.routes())
        .use(rootRouter.allowedMethods())

    const server: any = app.listen(options.port, async () => server)

    return await server
}



export default Object.assign({},{start})