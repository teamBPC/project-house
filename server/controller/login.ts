import { Request, Response } from "express";
import * as loginQuery from "../databases/login";
import { User } from "../model/userVO";

// 로그인 ID 확인
export async function loginId(req: Request, res: Response) {
    const user = new User(req.body);
    const users = await loginQuery.loginCheckId(user);
    if (users.length > 0) {
        res.status(200).json({ "result": true });
    } else {
        res.status(202).json({ "result": false });
    }
    return res;
}

// 로그인 PW 확인
export async function loginPw(req: Request, res: Response) {
    const user = new User(req.body);
    const users = await loginQuery.loginCheckPw(user);
    if (users != null) {
        req.session.userEmail = req.body.userEmail;
        req.session.isLogined = true;
        console.log("okay")
        res.redirect('/');
    } else {
        res.redirect('/login/login?msg=아이디 및 패스워드 불일치');
    }
}

export async function logout(req: Request, res: Response) {
    if (req.session.userEmail) {
        console.log("로그아웃중입니다!");
        req.session.destroy((err) => {
            if (err) {
                console.log("세션 삭제시에 에러가 발생했습니다.");
                return;
            }
            res.clearCookie('sid');
            res.send('logout');
            console.log("세션이 삭제됐습니다.");
            res.redirect("/login.html");
        });
    } else {
        console.log("로그인이 안돼있으시네요?");
        res.redirect("/login.html");
    }
    //return res.json({ "result": users });
}

export async function isLogin(req: Request, res: Response) {
    console.log(req.session)
    if (req.session.isLogined) {
        return res.json({ message: 'user 있다' });
    } else {
        return res.json({ message: 'user 없음' });
    }
}


// 회원가입
export async function joinTo(req: Request, res: Response) {
    const user = new User(req.body);
    const result = await loginQuery.joinUs(user);
    if (result) {
        res.status(200);
    } else {
        res.status(202);
    }
    return res.json({ "result": result });
}

// 비밀번호 변경
export async function changePw(req: Request, res: Response) {
    const user = new User(req.body);
    const result = await loginQuery.changePw(user);
    if (result) {
        res.status(200);
    } else {
        res.status(202);
    }
    return res.json({ "result": result });
}

// 비밀번호 임의 재설정 후 리턴
export async function changePwRan(req: Request, res: Response) {
    const user = new User(req.body);
    const result = await loginQuery.changePwRan(user);
    if (result.result) {
        res.status(200);
    } else {
        res.status(202);
    }
    return res.json({ "result": result });
}

// 아이디 중복확인 checkId
export async function checkId(req: Request, res: Response) {
    const user = new User(req.body);
    const result = await loginQuery.checkId(user);
    if (result) {
        res.status(200);
    } else {
        res.status(202);
    }
    return res.json({ "result": result });
}

// 회원 정보 수정
export async function changeInfo(req: Request, res: Response) {
    const user = new User(req.body);
    const result = await loginQuery.changeInfo(user);
    if (result) {
        res.status(200);
    } else {
        res.status(202);
    }
    return res.json({ "result": result });
}

/** 
 * post localhost:3000/login/id -> 로그인 api id
 *   parameter (
 *   userEmail: string;
 *   )
 *   
 *   return json : { result : boolean }
*/

/** 
 * post localhost:3000/login/pw -> 로그인 api pw
 *   parameter (
 *   userEmail: string;
 *   userPw: string )
 *   
 *   return json : { result : boolean }
*/

/** 
 * post localhost:3000/login/join -> 회원가입 api
 *   parameter (
 *   userPw: string;     
 *   userEmail: string;
 *   userNm : string ) 
 * 
 *   return json : { result : boolean }
*/

/** 
 * post localhost:3000/login/changePw -> 비밀번호 변경 api
 *   parameter (
 *   userPw: string 
 *   userEmail: string;)
 * 
 *   return json : { result : boolean }
*/

/** 
 * post localhost:3000/login/changePwRan -> 비밀번호 재발급 api
 *   parameter (
 *   userEmail: string; )
 * 
 *   return json : { result : {result : boolean, ranPw:string} } //비밀번호 재발급
*/

/** 
 * post localhost:3000/login/checkId -> 중복 이메일 확인 api
 *   parameter (
 *   userEmail: string; )
 * 
 *   return json : { result : boolean }
*/