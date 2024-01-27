"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.inputValidationMiddleware = exports.titleValidator = void 0;
const express_validator_1 = require("express-validator");
exports.titleValidator = (0, express_validator_1.body)('title').trim().isLength({
    min: 2,
    max: 10
}).withMessage('checking');
const inputValidationMiddleware = (req, res, next) => {
    const errors = (0, express_validator_1.validationResult)(req);
    if (!errors.isEmpty()) {
        res.status(400).json({ errors: errors.array() });
    }
    else {
        next();
    }
};
exports.inputValidationMiddleware = inputValidationMiddleware;
