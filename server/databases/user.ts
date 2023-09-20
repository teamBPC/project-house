import { PrismaClient } from '@prisma/client'
import { User } from "../model/userVO";
import util from "util";
import crypto from "crypto";

// 사용자 로그인 ID
export async function view(importUser: User) {
    const prisma = new PrismaClient();
    const user = await prisma.user.findMany({
        select: {
            user_idx: true,
            user_email: true,
            user_nm: true,
            user_status: true,
            updateDt: true,
            createdDt: true
        },
        where: {
            user_email: importUser.userEmail
        }
    });
    if (user.length == 0) {
        return user;
    }
    return user;
}