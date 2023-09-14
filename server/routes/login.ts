import express, { Request, Response, NextFunction, application } from "express";
import * as loginController from "../controller/login";

const router = express.Router();

router.post("/id", loginController.loginId);
router.post("/pw", loginController.loginPw);
router.post("/join", loginController.joinTo);
router.post("/changePw", loginController.changePw);
router.post("/changePwRan", loginController.changePwRan);
router.post("/checkId", loginController.checkId);

export default router;
