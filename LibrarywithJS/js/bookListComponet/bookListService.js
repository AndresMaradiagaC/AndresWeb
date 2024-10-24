import { bookModel } from "../bookComponet/bookModel.js";
export class bookListService{
    controller;
    constructor(controller){
        this.controller = controller;

    }
    getBooks(){
        let books = []
        let request = new XMLHttpRequest();
        request.open('GET', 'data/data.json');
        request.send();
        request.onload = (event) => {
            
            let dt = event.target.response;
            let bookGeneric = JSON.parse(dt);
            bookGeneric.data.books.forEach(datadt => {
                
                var book = new bookModel (datadt.id, datadt.isAvailableOnStore, datadt.title, datadt.subtitle, datadt.author, datadt.image, datadt.isAvailableOnLine, datadt.quantity);
                books.push(book);
    
                
            });
            this.controller.receivedBooks(books)
        }
    
    }
}