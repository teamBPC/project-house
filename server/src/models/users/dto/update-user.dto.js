export class UpdateUserDTO {
    userPw;
    userNm;
    userEmail;
    userStatus;

    constructor(user) {
        this.userPw = user.userPw ?? undefined;
        this.userNm = user.userNm ?? undefined;
        this.userEmail = user.userEmail ?? undefined;
        this.userStatus = user.userStatus ?? undefined;
    }
}