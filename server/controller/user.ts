import { Request, Response } from "express";
import * as userQuery from "../databases/user";
import * as loginQuery from "../databases/login";
import { User } from "../model/userVO";

// 유저 view
export async function view(req: Request, res: Response) {
    const user = new User(req.body);
    const vData = await userQuery.view(user);
    let data = {
        result: vData,
        msg: vData.length > 0 ? "성공" : "존재하지 않는 계정입니다."
    }
    if (vData.length > 0) {
        res.status(200).json({ "result": data });
    } else {
        res.status(202).json({ "result": data });
    }
    return res;
}

/** 
 * post localhost:3000/user/view -> api view
 *   parameter (
 *   userEmail: string;
 *   )
 *   
 * return {
    "result": {
        "result": [
            {
                "user_idx": 1,
                "user_email": "aaa@naver.com",
                "user_nm": "테스",
                "user_status": "4",
                "updateDt": "2023-09-14T12:19:02.499Z",
                "createdDt": "2023-09-14T12:19:02.499Z"
            }
        ],
        "msg": "성공"
    }
}
*/