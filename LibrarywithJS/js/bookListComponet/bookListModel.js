export class BookListModel {
    books;

    constructor() {
        this.books = [];


    }

    addBook(book) {
        this.books = book;
    }
}