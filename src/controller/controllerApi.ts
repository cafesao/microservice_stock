import { Request, Response } from 'express'

const controllerApi = {
  info(req: Request, res: Response) {
    res.sendStatus(200)
  },
  addPayment(req: Request, res: Response) {
    res.sendStatus(200)
  },
  pending(req: Request, res: Response) {
    res.sendStatus(200)
  },
}

export default controllerApi
