angular.module('myApp')
  .filter('CurrencySymbolFilter', function() {
    
    return function(input) {
      return input + '$';
    };
  });