import express, { Request, Response, NextFunction, application } from "express";
import * as userController from "../controller/user";

const router = express.Router();

router.post("/view", userController.view);
export default router;

