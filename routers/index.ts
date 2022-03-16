import { indexControl } from "../controllers/index";
import { Router } from "express";

const indexRouter = Router();

indexRouter.get('/', indexControl);

export { indexRouter };