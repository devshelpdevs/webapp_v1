"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.indexRouter = void 0;
const index_1 = require("../controllers/index");
const express_1 = require("express");
const indexRouter = (0, express_1.Router)();
exports.indexRouter = indexRouter;
indexRouter.get('/', index_1.indexControl);
