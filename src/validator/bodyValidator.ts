import { NextFunction } from 'connect';
import { body, validationResult } from 'express-validator';
import {Request, Response} from 'express'


export const titleValidator = body('title').trim().isLength({
    min: 2,
    max: 10
}).withMessage('checking')

export const inputValidationMiddleware = (req: Request, res: Response, next: NextFunction) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.status(400).json({ errors: errors.array() });
    } else {
        next()
    }
}