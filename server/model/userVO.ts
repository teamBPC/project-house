export class User {
    userId: string;
    userPw: string;
    userPwHash: string;
    userNm: string;
    userEmail: string;
    userStatus: string;

    constructor(body: { userId: string; userPw: string; userPwHash: string; userNm: string; userEmail: string; userStatus: string; }) {
        this.userId = body.userId;
        this.userPw = body.userPw;
        this.userPwHash = body.userPwHash;
        this.userNm = body.userNm;
        this.userEmail = body.userEmail;
        this.userStatus = body.userStatus;
    }
}