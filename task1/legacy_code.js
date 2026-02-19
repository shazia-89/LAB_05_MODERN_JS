var taxRate = 0.08;
var currency = "USD";

function product(id, name, price) {
    this.id = id;
    this.name = name;
    this.price = price;
}

function Cart() {
    this.items = [];
}

Cart.prototype.addItem = function (product, quantity) {
    this.items.push({ product: product, quantity: quantity });
};

Cart.partotype.getSubtotale = function () {
    var total = 0;
    for (var i = 0; i < this.items.length; i++) {
         total += this.items[i].product.price * this.items[i].quantity;
    }
    return total;
 };

 Cart.prototype.getTotal = function () {
    return this.getSubtotale() + this.getTax();
 };

 function formatPrice(amount) {
    return currency + " " + amount.toFixed(2);
 }

 var cart = new Cart();
 var p1 = new product(1, "widget", 10.99);
 cart.addItem(p1, 2);

 console.log("Total: " + formatPrice(cart.getTotal()));
        
    
