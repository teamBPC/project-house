import database from "../../../database";

export class UserService {

    // findById, findMany, create, update, delete

    async checkUserByEmail(email) {
        const user = await database.user.findUnique({
            where: {
                userEmail: email,
            },
        });

        if (!user) return false;

        return user;
    }

    async findUserById(userEmail) {
        const user = await database.user.findUnique({
            where: {
                userEmail,
            },
        });

        if (!user) throw { status: 404, message: "유저를 찾을 수 없습니다." };
        return user;
    }

    async findUsers({ skip, take },) {
        const users = await database.user.findMany({
            skip,
            take,
        });

        const count = await database.user.count();

        return {
            users,
            count,
        };
    }

    async createUser(props) {
        const newUser = await database.user.create({
            data: {
                userEmail: props.userEmail,
                userPw: props.userPw,
                userNm: props.userNm,
                userStatus: "01",
            },
        });

        return newUser.userEmail;
    }

    async updateUser(userEmail, props) {
        const isExist = await database.user.findUnique({
            where: {
                userEmail,
            },
        });

        if (!isExist) throw { status: 404, message: "유저를 찾을 수 없습니다." }

        await database.user.update({
            where: {
                userEmail,
            },
            data: {
                userEmail: props.userEmail,
                userPW: props.userPW,
                userNm: props.userNm,
            },
        });
    }

    async deleteUser(userEmail) {
        const isExist = await database.user.findUnique({
            where: {
                userEmail,
            },
        });

        if (!isExist) throw { status: 404, message: "유저를 찾을 수 없습니다." }

        await database.user.delete({
            where: {
                userEmail,
            },
        });
    }
}