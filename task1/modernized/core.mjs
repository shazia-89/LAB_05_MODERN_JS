import { taxRate } from "./config.mjs";
export class product {
    price;
    constructor(id, name, price) {
        this.id = id;
        this.name = name;
        this.price = price;
}

get price() {
    return this.price;
 }
}

export class Cart {
    items = [];

    addItem(product, quantity) {
        this.items.push({ product, quantity })
    }

    getSubtotal() {
        let total = 0;
        for (const item of this.items) {
            total += item.product.price * item.quantity;
        }
        return total;
    }

    getTax() {
        return this.getSubtotal() * taxRate;
    }

    getTotal() {
        return this.getSubtotal() + this.getTax();
    }
}