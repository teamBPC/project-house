import { UserDTO } from "../../users/dto";
import { UserService } from "../../users/services";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

export class AuthService {
    userService;


    constructor() {
        this.userService = new UserService();
    }


    async register(props) {
        const isExist = await this.userService.checkUserByEmail(props.userEmail);

        if (isExist) throw { status: 400, message: "이미 존재하는 계정입니다." };
        console.log("isExist", isExist)
        const newUserEmail = await this.userService.createUser(
            new UserDTO({
                ...props,
                userPw: await props.hashPassword(),
            })
        );

        const accessToken = jwt.sign({ userEmail: newUserEmail }, process.env.JWT_KEY, {
            expiresIn: '2h',
        });

        const refreshToken = jwt.sign({ userEmail: newUserEmail }, process.env.JWT_KEY, {
            expiresIn: '14d',
        });

        return { accessToken, refreshToken };
    }

    async login(props) {
        const isExist = await this.userService.checkUserByEmail(props.userEmail);

        if (!isExist) throw { status: 404, message: "유저가 존재하지 않습니다." };

        const isCorrect = await props.comparePassword(isExist.userPw);

        if (!isCorrect)
            throw { status: 400, message: "비밀번호를 잘못 입력하였습니다." };

        const accessToken = jwt.sign({ userEmail: isExist.userEmail }, process.env.JWT_KEY, {
            expiresIn: '2h',
        });

        const refreshToken = jwt.sign({ userEmail: isExist.userEmail }, process.env.JWT_KEY, {
            expiresIn: '14d',
        });

        return { accessToken, refreshToken };
    }

    async refresh(accessToken, refreshToken) {
        const accessTokenPayLoad = jwt.verify(accessToken, process.env.JWT_KEY, {
            ignoreExpiration: true,
        });
        const refreshTokenPayLoad = jwt.verify(refreshToken, process.env.JWT_KEY);

        if (accessTokenPayLoad.userEmail !== refreshTokenPayLoad.userEmail) {
            throw { status: 403, message: "권한이 없습니다." };
        }

        const user = await this.userService.findUserById(accessTokenPayLoad.userEmail);

        const newAccessToken = jwt.sign({ userEmail: user.userEmail }, process.env.JWT_KEY, {
            expiresIn: '2h',
        });

        const newRefreshToken = jwt.sign({ userEmail: user.userEmail }, process.env.JWT_KEY, {
            expiresIn: '14d',
        });

        return {
            accessToken: newAccessToken,
            refreshToken: newRefreshToken
        };
    }
}