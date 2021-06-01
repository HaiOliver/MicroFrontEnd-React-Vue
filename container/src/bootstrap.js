// connect with product component -> from products remote -> config in webpack.config.js
import {mount as productsMount} from 'products/ProductsIndex';
import {mount as cartMount} from 'cart/CartShow';

console.log("connect products and cart folder");

cartMount(document.querySelector("#my-cart"));
productsMount(document.querySelector("#my-products"));