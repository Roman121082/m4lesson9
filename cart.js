'use strict';


const cart = {
  items: [],
  count: 0,
  totalPrice: 0,

  get totalPrice() {
    return this.calculateItemPrice();
  },

  add(name, price, amount = 1) {

    const goods = {
      name,
      price,
      amount,
    };

    this.items.push(goods);
    this.increaseCount(amount);
  },

  increaseCount(num) {
    this.count += num;
  },

  calculateItemPrice() {
    const check = this.items.reduce((sum, item) => sum + item.price * item.amount, 0);
    return check;
  },

  clear() {
    this.count = 0;
    this.items = [];
  },

  print() {
    console.log(JSON.stringify(cart.items));
    console.log(`TotalPrice: ${this.totalPrice}`);
  },
};

cart.add('часы', 5, 20);
cart.add('коньки', 23, 10);
cart.add('Мяч', 15, 12);

cart.print();

console.log(cart);


