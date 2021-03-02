export class CardModel {
    static freeId = 0;

    constructor(text) {
        this.id = CardModel.freeId;
        this.text = text;
        this.date = new Date().toLocaleString();
        this.likes = 0;
        this.dislikes = 0;

        CardModel.freeId++;
    }

    incrementLikes() {
        return this.likes += 1;
    }

    incrementDislikes() {
        return this.dislikes += 1;
    }

    decrementLikes() {
        return this.likes -= 1;
    }

    decrementDislikes() {
        return this.dislikes -= 1;
    }
}
