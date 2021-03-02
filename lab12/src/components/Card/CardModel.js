export class CardModel {
    static freeId = 0;

    constructor(text) {
        this.id = CardModel.freeId;
        this.text = text;
        this.date = new Date().toLocaleString();
        this.likes = 0;
        this.dislikes = 0;

        CardModel.freeId ++;
    }
}
