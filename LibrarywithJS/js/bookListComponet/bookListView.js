export class BookListView {
    parent;
    controller;
    container;

    constructor(parent, controller) {
        this.controller = controller;
        this.parent = parent;
        this.container = document.createElement('div');
        this.parent.appendChild(this.container);

        var navContainer = document.createElement('div');
        navContainer.textContent = 'BooksAvailable';
        navContainer.className = 'navbarContainer';
        this.container.appendChild(navContainer);
    }

    createUI(books) {
        books.forEach(book => {
            if (book.author === 'J.R.R. Tolkien' && book.isAvailableOnLine && book.quantity > 2) {
                var mainContainer = document.createElement('div');
                mainContainer.className = 'mainContainer';
                this.container.appendChild(mainContainer);

                var image = document.createElement('img');
                image.src = book.image;
                image.style.width = '250px';
                image.style.height = '250px'; 
                mainContainer.appendChild(image);

                var dataContainer = document.createElement('div');
                dataContainer.className = 'dataContainer';
                mainContainer.appendChild(dataContainer);

                var span = document.createElement('span');
                span.innerHTML = `<b>Title: </b>${book.title}`;
                dataContainer.appendChild(span);

                span = document.createElement('span');
                span.innerHTML = `<b>Subtitle: </b>${book.subtitle}`;
                dataContainer.appendChild(span);

                span = document.createElement('span');
                span.innerHTML = `<b>Author: </b>${book.author}`;
                dataContainer.appendChild(span);
            }
        });
    }
}
