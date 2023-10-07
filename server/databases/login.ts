import { PrismaClient } from '@prisma/client'
import { User } from "../model/userVO";
import util from "util";
import crypto from "crypto";
const prisma = new PrismaClient();
// 사용자 로그인 ID
export async function loginCheckId(importUser: User) {
    const user = await prisma.user.findMany({
        where: {
            user_email: importUser.userEmail
        }
    });
    if (user.length == 0) {
        return user;
    }
    return user;
}

// 사용자 로그인 PW
export async function loginCheckPw(importUser: User) {
    const user = await prisma.user.findMany({
        where: {
            user_email: importUser.userEmail
        }
    });

    const vertified = await verifyPassword(importUser.userPw, user[0].user_pwHash, user[0].user_pw);

    if (vertified) {
        return user;
    } else {
        return null;
    }
}

// 사용자 회원 가입
export async function joinUs(User: User) {
    const pwData = await createHashedPassword(User.userPw);
    const result = await prisma.user.create({
        data: {
            user_email: User.userEmail,
            user_pw: pwData.hashedPassword,
            user_pwHash: pwData.salt,
            user_nm: User.userNm,
            user_status: "4"
        },
    });

    if (result != null) return true;
    return false;
}

// 비밀번호 변경
export async function changePw(User: User) {
    const pwData = await createHashedPassword(User.userPw);
    const result = await prisma.user.update({
        where: {
            user_email: User.userEmail,
        },
        data: {
            user_pw: pwData.hashedPassword,
            user_pwHash: pwData.salt
        }
    });
    if (result != null) return true;
    return false;
}

// 비밀번호 초기화 변경 후 변경 비밀번호 리턴
export async function changePwRan(User: User) {
    const ranPw = Math.random().toString(36).slice(2);
    const pwData = await createHashedPassword(ranPw);
    const result = await prisma.user.update({
        where: {
            user_email: User.userEmail,
        },
        data: {
            user_pw: pwData.hashedPassword,
            user_pwHash: pwData.salt
        }
    });
    let data = {
        result: result,
        ranPw: ranPw
    }
    return data;
}
// 아이디 중복 확인
export async function checkId(User: User) {
    const result = await prisma.user.findMany({
        where: {
            user_email: User.userEmail,
        }
    });
    if (result.length !== 0) return true;
    return false;
}

// 회원 정보 수정
export async function changeInfo(User: User) {
    const pwData = await createHashedPassword(User.userPw);
    const result = await prisma.user.update({
        where: {
            user_email: User.userEmail,
        },
        data: {
            user_nm: User.userNm != null ? User.userNm : undefined,
            user_pw: pwData != null ? pwData.hashedPassword : undefined,
            user_pwHash: pwData != null ? pwData.salt : undefined,
        }
    });
    if (result) return true;
    return false;
}

//비밀번호 암호화 생성
const createHashedPassword = async (password: crypto.BinaryLike) => {
    const salt = await createSalt();
    const key = await pbkdf2Promise(password, salt, 104906, 64, "sha512");
    const hashedPassword = key.toString("base64");

    return { hashedPassword, salt };
};

//비밀번호 암호화 비교
const verifyPassword = async (password: crypto.BinaryLike, userSalt: any, userPassword: any) => {
    const key = await pbkdf2Promise(password, userSalt, 104906, 64, "sha512");
    const hashedPassword = key.toString("base64");

    if (hashedPassword === userPassword) return true;
    return false;
};

//비밀번호 salt 암호화 생성
const createSalt = async () => {
    const buf = await randomBytesPromise(64);

    return buf.toString("base64");
};
const randomBytesPromise = util.promisify(crypto.randomBytes);
const pbkdf2Promise = util.promisify(crypto.pbkdf2);