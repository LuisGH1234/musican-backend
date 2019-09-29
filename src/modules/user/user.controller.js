import { User } from "../../schemas";
import { ListResponse } from "../../common/dto";

export class UserController {
    static async getAll(req, res, next) {
        try {
            const users = await User.getAll();
            return res.send(new ListResponse(users));
        } catch (error) {
            next(error);
        }
    }

    static async getOne(req, res, next) {
        try {
            const { id } = req.params;
            const user = await User.getOne(id);
            if (!user) return res.send(new Error("No se encontro al usuario"));
            return res.send(user);
        } catch (error) {
            next(error);
        }
    }

    static getLeadeboard(req, res, next) {
        try {
            const users = User.getLeaderBoard();
            return res.send(new ListResponse(users));
        } catch (error) {
            next(error);
        }
    }

    static getMe(req, res, next) {
        return res.send(req.user);
    }
}
