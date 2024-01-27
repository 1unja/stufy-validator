"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.productRouter = void 0;
const express_1 = require("express");
const products_respository_1 = require("../repositories/products-respository");
const body_parser_1 = __importDefault(require("body-parser"));
const bodyValidator_1 = require("../validator/bodyValidator");
const queryValidator_1 = require("../validator/queryValidator");
exports.productRouter = (0, express_1.Router)();
exports.productRouter.use((0, body_parser_1.default)());
// productRouter.use(authMiddleware)
exports.productRouter.get('/', queryValidator_1.queryValidator, queryValidator_1.inputQueryValidationMiddleware, (req, res) => {
    const gotQueryProduct = products_respository_1.prdouctRepository.readQueryProduct(req.query.title);
    res.json(gotQueryProduct);
});
exports.productRouter.post('/', bodyValidator_1.titleValidator, bodyValidator_1.inputValidationMiddleware, (req, res) => {
    const sentProduct = products_respository_1.prdouctRepository.sendProduct(req.body.title);
    res.sendStatus(sentProduct);
});
exports.productRouter.put('/:id', (req, res) => {
    const updatedProduct = products_respository_1.prdouctRepository.updateProduct(req.body.title, +req.params.id);
    res.sendStatus(updatedProduct);
});
