export class Product {
    parent;
    name;
    price;
    imageUrl;
    container;
    callback;
    constructor(parent, pimageUrl, pname, pprice, callback) {
        this.parent = parent;
        this.name = pname;
        this.price = pprice;
        this.imageUrl = pimageUrl;
        this.callback = callback;
        this.createUI();
    }

    createUI() {
        this.container = document.createElement('div');
        this.container.className = 'product';

        this.container.onclick = () => {
            this.callback(this);
        }

        this.parent.appendChild(this.container);

        var productImage = document.createElement('img');
        productImage.className = 'product-image';
        productImage.src = this.imageUrl;
        this.container.appendChild(productImage);

        var productName = document.createElement('span');
        productName.className = 'product-name';
        productName.innerHTML = this.name;
        this.container.appendChild(productName);

        var productRow = document.createElement('div');
        productRow.className = 'product-row';
        this.container.appendChild(productRow);

        var productPriceTitle = document.createElement('span');
        productPriceTitle.className = 'product-price-title';
        productPriceTitle.innerHTML = 'Price:';

        var productPrice = document.createElement('span');
        productPrice.className = 'product-price';
        productPrice.innerHTML = '$' + this.price;

        productRow.appendChild(productPriceTitle);
        productRow.appendChild(productPrice);
    }
}