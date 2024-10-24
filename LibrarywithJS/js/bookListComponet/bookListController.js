import { bookListService } from "./bookListService.js";
import { BookListView } from "./bookListView.js";

export class BookListController {
    model;
    service;
    view;
    appManager;
    constructor(parent, appManager) {
        this.appManager = appManager;
        this.service = new bookListService(this);
        this.view = new BookListView(parent, this);
        this.service.getBooks();
    }

    receivedBooks(books) {
        this.model = books;
        this.view.createUI(this.model)
    }

}