import  { Router } from "express";
import { prdouctRepository } from "../repositories/products-respository";
import bodyParser from "body-parser";
import {Request, Response} from 'express'
import { authMiddleware } from "../middleware/auth-middleware";
import { inputValidationMiddleware, titleValidator } from "../validator/bodyValidator";
import { inputQueryValidationMiddleware, queryValidator } from "../validator/queryValidator";

export const productRouter = Router()


productRouter.use(bodyParser())
// productRouter.use(authMiddleware)


productRouter.get('/', queryValidator,
                       inputQueryValidationMiddleware,
                       (req: Request<{},{},{},{title: string}>, res: Response) => {
    const gotQueryProduct = prdouctRepository.readQueryProduct(req.query.title)
    res.json(gotQueryProduct)
})
productRouter.post('/', titleValidator,
                        inputValidationMiddleware,
                        (req: Request, res: Response) => {
    const sentProduct = prdouctRepository.sendProduct(req.body.title)
    res.sendStatus(sentProduct)
})
productRouter.put('/:id', (req, res) => {
    const updatedProduct = prdouctRepository.updateProduct(req.body.title, +req.params.id)
    res.sendStatus(updatedProduct)
})