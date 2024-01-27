import { NextFunction } from 'connect';
import { query, validationResult } from 'express-validator';
import {Request, Response} from 'express'

export const queryValidator = (query('title').notEmpty())

export const inputQueryValidationMiddleware = (req: Request, res: Response, next: NextFunction) => {
    const result = validationResult(req)
    if (!result.isEmpty()) {
        res.status(400).send({errors: result.array()})
    }
    next()
}