import { NextFunction } from 'connect'
import {Request, Response} from 'express'

export let authMiddleware = (req: Request, res: Response, next: NextFunction) => {
    if (req.query.token === '123') {
        next()
    }
    return res.sendStatus(401)
}