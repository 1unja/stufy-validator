"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authMiddleware = void 0;
let authMiddleware = (req, res, next) => {
    if (req.query.token === '123') {
        next();
    }
    return res.sendStatus(401);
};
exports.authMiddleware = authMiddleware;
