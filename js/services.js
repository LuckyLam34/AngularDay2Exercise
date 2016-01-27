angular.module('myApp')
  .service('ProductService', function() {
    var products = [
      {model: 'Giacomo', year: 2015, price: 10, producer: 'Guilizzoni', available: true},
      {model: 'Aarco', year: 2009, price: 120, producer: 'Botton', available: false},
      {model: 'Tutto', year: 2001, price: 20, producer: 'Liberty', available: false}
    ];

    this.list = function() {
      return products;
    }
    this.remove = function(product) {
      var index = products.indexOf(product);
      products.splice(index, 1);
    }
    this.add = function(product) {
      products.push(product);
    }
  });