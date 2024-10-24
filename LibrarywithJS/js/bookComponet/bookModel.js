
export class bookModel{

    id;
    isAvailableOnStore;
    title;
    subtitle;
    author;
    image;
    isAvailableOnLine;
    quantity;

    constructor(id, isAvailableOnStore, title, subtitle, author, image, isAvailableOnLine, quantity) {
        this.id = id;
        this.isAvailableOnStore = isAvailableOnStore;
        this.title = title;
        this.subtitle = subtitle;
        this.author = author;
        this.image = image;
        this.isAvailableOnLine = isAvailableOnLine;
        this.quantity = quantity;


    }

}