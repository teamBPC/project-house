import bcrypt from "bcrypt";

export class LoginDTO {
    userEmail;
    userPw;

    constructor(props) {
        this.userEmail = props.userEmail;
        this.userPw = props.userPw;
    }

    async comparePassword(password) {
        const isCorrect = await bcrypt.compare(this.userPw, password);
        return isCorrect;
    }
}