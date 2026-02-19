import { product, Cart, product } from "./core.mjs";
import * as Utils from "./utils.mjs";

const cart = new Cart();
const product = new product(1, "widget", 10.99);

cart.addItem(product, 2);

console.log('Total: ${Utils.formatprice(cart.getTotal())}');
