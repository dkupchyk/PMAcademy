export class CardItem {
    static freeId = 0;

    constructor(text) {
        this.id = CardItem.freeId;
        this.text = text;
        this.date = new Date().toLocaleString();
        this.likes = 0;
        this.dislikes = 0;

        CardItem.freeId++;

        this.updateLikes = this.updateLikes.bind(this)
    }

    updateLikes(prop, value) {
        return this[prop] += value;
    }
}
