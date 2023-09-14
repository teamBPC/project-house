import { Request, Response } from "express";
import * as loginQuery from "../databases/login";
import { User } from "../model/userVO";

// 로그인 ID 확인
export async function loginId(req: Request, res: Response) {
    const user = new User(req.body);
    const isCheck = await loginQuery.loginCheckId(user);
    console.log(isCheck);
    return isCheck;
}

export async function loginPw(req: Request, res: Response) {
    const user = new User(req.body);
    const isCheck = await loginQuery.loginCheckPw(user);
    console.log(isCheck);
    return isCheck;
}

// 회원가입
export async function joinTo(req: Request, res: Response) {
    const user = new User(req.body);
    const result = await loginQuery.joinUs(user);
    console.log(result);
    return result;
}

// 비밀번호 변경
export async function changePw(req: Request, res: Response) {
    const user = new User(req.body);
    const result = await loginQuery.changePw(user);
    console.log(result);
    return result;
}

// 비밀번호 임의 재설정 후 리턴
export async function changePwRan(req: Request, res: Response) {
    const user = new User(req.body);
    const result = await loginQuery.changePwRan(user);
    console.log(result);
    return result;
}

// 아이디 중복확인 checkId
export async function checkId(req: Request, res: Response) {
    const user = new User(req.body);
    const result = await loginQuery.checkId(user);
    console.log(result);
    return result;
}

/** 
 * post localhost:3000/login/id -> 로그인 api id
 *   parameter (
 *   userEmail: string;
 *   )
 *   
 *   return boolean
*/

/** 
 * post localhost:3000/login/pw -> 로그인 api pw
 *   parameter (
 *   userEmail: string;
 *   userPw: string )
 *   
 *   return boolean
*/

/** 
 * post localhost:3000/login/join -> 회원가입 api
 *   parameter (
 *   userPw: string;     
 *   userEmail: string;
 *   userNm : string ) 
 * 
 *   return boolean
*/

/** 
 * post localhost:3000/login/changePw -> 비밀번호 변경 api
 *   parameter (
 *   userPw: string 
 *   userEmail: string;)
 * 
 *   return boolean
*/

/** 
 * post localhost:3000/login/changePwRan -> 비밀번호 재발급 api
 *   parameter (
 *   userEmail: string; )
 * 
 *   return string; //비밀번호 재발급
*/

/** 
 * post localhost:3000/login/checkId -> 중복 이메일 확인 api
 *   parameter (
 *   userEmail: string; )
 * 
 *   return boolean
*/