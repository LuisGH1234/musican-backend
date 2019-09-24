import { Song } from "../../schemas";
import { ListResponse } from "../../common/dto";

export class SongController {
    static async getAll(req, res, next) {
        try {
            const songs = await Song.getAll();
            return res.send(new ListResponse(songs));
        } catch (error) {
            next(error);
        }
    }

    static async getOne(req, res, next) {
        try {
            const { id } = req.params;
            const song = await Song.getOne(id);
            return res.send(song);
        } catch (error) {
            next(error);
        }
    }
}
