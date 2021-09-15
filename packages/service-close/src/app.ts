import config from './config'
import server from './server'
import log from './logger'

const { port } = config

log.info('---- Service -----')

// log unhandled execpetions
process.once('uncaughtException', (err) => {
  log.error('Unhandled Exception', err)
})
process.once('uncaughtRejection', (err) => {
  log.error('Unhandled Rejection', err)
})

try {
  const app = server.start({
    port
  })
  log.info(`Server started succesfully, running on port: ${port}.`)
} catch (error: any) {
  log.error(error)
}
