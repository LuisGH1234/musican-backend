export class ListResponse {
    constructor(list) {
        this.data = list;
        this.totalsize = list.length;
    }
}