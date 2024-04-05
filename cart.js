'use strict';


// Задание 1
// Продолжим работу с cart.js
// Обнаружена уязвимость в нашем функционале
/* Если после добавления последнего товара
присвоить к totalPrice любое значение,*/
// например
// cart.totalPrice = 10;
// то при выводе print() общая стоимость корзины будет равна 10
/* Чтобы это предотвратить, необходимо свойство totalPrice сделать геттером
 который будет возвращать результат вызова метода calculateItemPrice */
// метод getTotalPrice больше не нужен
/* calculateItemPrice переделать таким образом, чтобы сумму он возвращал,
 а не записывал в свойство totalPrice */
// Вызов метода calculateItemPrice оставить только у геттера totalPrice

const cart = {
  items: [],
  count: 0,

  /* Чтобы это предотвратить, необходимо свойство totalPrice сделать геттером
 который будет возвращать результат вызова метода calculateItemPrice */

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
  /* calculateItemPrice переделать таким образом,
чтобы сумму он возвращал, а не записывал в свойство totalPrice*/
  calculateItemPrice() {
    this.items.reduce((sum, item) => sum + item.price * item.amount, 0);
  },

  clear() {
    this.count = 0;
    this.items = [];
  },

  print() {
    console.log(JSON.stringify(cart.items));
    console.log(`TotalPrice: ${this.totalPrice}`); // 25060
  },
};

cart.add('часы', 20, 25);
cart.add('коньки', 23, 10);
cart.add('Мячь', 15, 12);
cart.add('лыжи', 345, 70);
/* Cannot set property totalPrice of #<Object> which has only a getter
(Не удается задать суммарное значение свойства #, которое имеет только фильтр)*/

cart.print();
console.log(cart);