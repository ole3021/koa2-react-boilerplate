import Koa from 'koa'
import logger from './lib/logger'

const app = new Koa()

app.use(async (ctx, next) => {
  const start = new Date()
  await next()
  const ms = new Date() - start
  ctx.set('X-Response-Time', '${ms}ms')
})

app.use(ctx => {
  ctx.body = 'Hello World!'
})

app.listen(4030)
logger.info('servser started at 4030')
