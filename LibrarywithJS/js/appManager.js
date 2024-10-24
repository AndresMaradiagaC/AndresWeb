import {BookListController} from "./bookListComponet/bookListController.js"
export class AppManager {

    constructor() {
        var parent = document.body
        var bookListController = new BookListController(parent, this)
    }
}