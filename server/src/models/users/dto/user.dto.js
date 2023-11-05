export class UserDTO {
    userPw;
    userNm;
    userEmail;
    userStatus;

    constructor(user) {
        this.userPw = user.userPw;
        this.userNm = user.userNm;
        this.userEmail = user.userEmail;
        this.userStatus = user.userStatus;
    }
}