import { User } from "../../schemas";
import { ListResponse } from "../../common/response.dto";

export class UserController {
    static async getAll(req, res) {
        return res.send({ foo: "test" });
        const users = await User.getAll();
        res.send(new ListResponse(users));
    }
}