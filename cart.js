const cars = require('./data/cars');

module.exports = {
  cart: [],
  total: 0,

  addToCart: function(arr) {
    this.cart.push(arr);
    this.total += arr.price;
  },

  removeFromCart: function(i, price) {
    this.cart.splice(i, 1);
    this.total -= price;
  },

  checkout: function() {
    this.cart = [];
    this.total = 0;
  }
};