import express from 'express'
import cors from 'cors'
import routes from './routes/routes'

const server = express()

server.use(express.json())
server.use(cors())

server.use('/payment', routes)

server.listen(process.env.PORT_API, () =>
  console.log(`Server start in port ${process.env.PORT_API}`),
)
