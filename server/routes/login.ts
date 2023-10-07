import express, { Request, Response, NextFunction, application } from "express";
import * as loginController from "../controller/login";

const router = express.Router();

router.post("/join", loginController.joinTo);
router.post("/changePw", loginController.changePw);
router.post("/changePwRan", loginController.changePwRan);
router.post("/changeInfo", loginController.changeInfo);
router.post("/checkId", loginController.checkId);

//로그인 로그아웃
router.post("/id", loginController.loginId);
router.post("/pw", loginController.loginPw);
router.get("/logout", loginController.logout);

//로그인 체크
router.get("/check", loginController.isLogin);
export default router;

