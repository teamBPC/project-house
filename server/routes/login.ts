import express, { Request, Response, NextFunction, application } from "express";
import * as loginController from "../controller/login";

const router = express.Router();

router.post("/", loginController.login);
router.post("/join", loginController.joinTo);
router.post("/changePw", loginController.changePw);
router.post("/changePwRan", loginController.changePwRan);
router.post("/checkId", loginController.checkId);

export default router;
/** 
 * post localhost:3000/login/ -> 로그인 api 임시
 *   parameter (
 *   userId: string;
 *   userPw: string )
 *   
 *   return boolean
*/

/** 
 * post localhost:3000/login/join -> 회원가입 api
 *   parameter (
 *   userId: string;
 *   userPw: string;     
 *   userEmail: string;
 *   userNm : string ) 
 * 
 *   return boolean
*/

/** 
 * post localhost:3000/login/changePw -> 비밀번호 변경 api
 *   parameter (
 *   userPw: string )
 * 
 *   return boolean
*/

/** 
 * post localhost:3000/login/changePwRan -> 비밀번호 재발급 api
 *   parameter (
 *   userId: string )
 * 
 *   return string; //비밀번호 재발급
*/

/** 
 * post localhost:3000/login/changePwRan -> 비밀번호 재발급 api
 *   parameter (
 *   userId: string )
 * 
 *   return boolean
*/