import bcrypt from "bcrypt";
import dotenv from "dotenv";

dotenv.config();

export class RegisterDTO {
    userPw;
    userNm;
    userEmail;
    userStatus;

    constructor(props) {
        this.userPw = props.userPw;
        this.userNm = props.userNm;
        this.userEmail = props.userEmail;
        this.userStatus = props.userStatus;
    }

    async hashPassword() {
        const hashedPassword = await bcrypt.hash(
            this.userPw,
            Number(process.env.PASSWORD_SALT)
        );
        return hashedPassword;
    }
}