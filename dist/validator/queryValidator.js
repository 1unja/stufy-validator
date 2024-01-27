"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.inputQueryValidationMiddleware = exports.queryValidator = void 0;
const express_validator_1 = require("express-validator");
exports.queryValidator = ((0, express_validator_1.query)('title').notEmpty());
const inputQueryValidationMiddleware = (req, res, next) => {
    const result = (0, express_validator_1.validationResult)(req);
    if (!result.isEmpty()) {
        res.status(400).send({ errors: result.array() });
    }
    next();
};
exports.inputQueryValidationMiddleware = inputQueryValidationMiddleware;
