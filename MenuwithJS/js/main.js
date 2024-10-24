"use strict";
import { Product } from "./product.js";

window.addEventListener('load', init, false);

function init() {
    var total = 0;
    var productList = [];
    var title = document.createElement('div');
    var subtitle = document.createElement('div');
    var combosContainer = document.createElement('div');
    var productsContainer = document.createElement('div');
    var totalLbl = document.createElement('div');
    var clearButton = document.createElement('button');

    title.innerHTML = 'Soda Super';
    subtitle.innerHTML = 'Comida para heroes!';
    totalLbl.innerHTML = 'TOTAL: $0';
    clearButton.innerHTML = 'Limpiar';

    title.className = 'title';
    subtitle.className = 'subtitle';
    combosContainer.className = 'combos-container';
    productsContainer.className = 'product-container';
    totalLbl.className = 'total';
    clearButton.className = 'clear-button';

    document.body.appendChild(title);
    document.body.appendChild(subtitle);
    document.body.appendChild(combosContainer);
    document.body.appendChild(productsContainer);
    document.body.appendChild(totalLbl);
    document.body.appendChild(clearButton);

    var combo1 = new Product(combosContainer, './assets/images/combo1.png', 'Hamburguesa y Coca', 15, addProductToCart);
    var combo2 = new Product(combosContainer, './assets/images/combo2.png', 'HotDog y papas', 12, addProductToCart);
    var combo3 = new Product(combosContainer, './assets/images/combo3.png', 'Cafe y Donats', 8, addProductToCart);
    var combo4 = new Product(combosContainer, './assets/images/combo4.png', 'Pollo, papa y helado', 14, addProductToCart);

    var product1 = new Product(productsContainer, './assets/images/cafe.png', 'Cafe', 2, addProductToCart);
    var product2 = new Product(productsContainer, './assets/images/coca.png', 'Coca', 2, addProductToCart);
    var product3 = new Product(productsContainer, './assets/images/donaCaramelo.png', 'Dona Caramelo', 2, addProductToCart);
    var product4 = new Product(productsContainer, './assets/images/donaFresa.png', 'Dona Fresa', 2, addProductToCart);
    var product5 = new Product(productsContainer, './assets/images/hamburguesa.png', 'Hamburguesa', 5, addProductToCart);
    var product6 = new Product(productsContainer, './assets/images/helado.png', 'Helado', 3, addProductToCart);
    var product7 = new Product(productsContainer, './assets/images/hotdog.png', 'Hotdog', 4, addProductToCart);
    var product8 = new Product(productsContainer, './assets/images/papas.png', 'Papas', 4, addProductToCart);
    var product9 = new Product(productsContainer, './assets/images/pollo.png', 'Pollo', 5, addProductToCart);

    clearButton.addEventListener('click', clearCart);

    function addProductToCart(product) {
        productList.push(product);
        updateTotal();
    }

    function updateTotal() {
        total = 0;
        totalLbl.innerHTML = '';

        productList.forEach((product, index) => {
            var productItem = document.createElement('div');
            var productName = document.createElement('p');
            var removeButton = document.createElement('button');

            productName.innerHTML = `${product.name}: $${product.price}`;
            removeButton.innerHTML = 'X';
            removeButton.className = 'remove-button';
            removeButton.onclick = () => removeProductFromCart(index);

            productItem.appendChild(productName);
            productItem.appendChild(removeButton);
            totalLbl.appendChild(productItem);

            total += product.price;
        });

        var totalDisplay = document.createElement('p');
        totalDisplay.innerHTML = `TOTAL: $${total}`;
        totalLbl.appendChild(totalDisplay);
    }

    function removeProductFromCart(index) {
        productList.splice(index, 1);
        updateTotal();
    }

    function clearCart() {
        productList = [];
        updateTotal();
    }
}
