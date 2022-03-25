import { Router } from 'express'
import controllerApi from '../controller/controllerApi'

const routes = Router()

routes.get('', controllerApi.info)
routes.post('/', controllerApi.addPayment)
routes.get('/pending', controllerApi.pending)

export default routes
