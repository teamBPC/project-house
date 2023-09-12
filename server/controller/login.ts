import { Request, Response } from "express";
import * as loginQuery from "../databases/login";
import { User } from "../model/userVO";

// 로그인 
export async function login(req: Request, res: Response) {
    const user = new User(req.body);
    const isCheck = await loginQuery.loginCheck(user);
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
