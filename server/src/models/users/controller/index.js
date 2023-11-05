import { Router } from "express";
import { UserService } from "../services";
import { pagination } from "../../../middleware/pagination";
import { UserDTO, UpdateUserDTO } from "../dto";

// 라우터와 app 등록할 경로 지정을 위한 class
class UserController {
    router;
    path = "/users";
    userService;

    constructor() {
        this.router = Router();
        this.init();
        this.userService = new UserService();
    }

    init() {
        this.router.get("/", pagination, this.getUsers.bind(this));
        this.router.get("/:id", this.getUser.bind(this));
        this.router.post("/", this.createUser.bind(this));
        this.router.patch("/:id", this.updateUser.bind(this));
        this.router.delete("/:id", this.deleteUser.bind(this));
    }

    async getUsers(req, res, next) {
        try {
            const { users, count } = await this.userService.findUsers({
                skip: req.skip,
                take: req.take,
            });

            res.status(200).json({ users: users.map((user) => new UserDTO(user)), count });
        } catch (err) {
            next(err);
        }
    }

    async getUser(req, res, next) {
        try {
            const { userEmail } = req.params;
            const user = await this.userService.findUserById(userEmail);
            res.status(200).json({ user: new UserDTO(user) });
        } catch (err) {
            next(err);
        }
    }

    async createUser(req, res, next) {
        try {
            const createUserDto = new UserDTO(req.body);

            const newUserEmail = await this.userService.createUser(createUserDto);

            res.status(201).json({ userEmail: newUserEmail });
        } catch (err) {
            next(err);
        }
    }

    async updateUser(req, res, next) {
        try {
            const { userEmail } = req.params;
            const updateUserDto = new UpdateUserDTO(req.body);

            await this.userService.updateUser(userEmail, updateUserDto);

            res.status(204).json({});
        } catch (err) {
            next(err);
        }
    }

    async deleteUser(req, res, next) {
        try {
            const { userEmail } = req.params;

            await this.userService.deleteUser(userEmail);

            res.status(204).json({});
        } catch (err) {
            next(err);
        }
    }
}

const userController = new UserController();
export default userController;
