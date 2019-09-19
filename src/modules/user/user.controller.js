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
            return res.send(user);
        } catch (error) {
            next(error);
        }
    }
}
