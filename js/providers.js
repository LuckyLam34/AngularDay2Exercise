angular.module('myApp')
  .provider('ProductYear', function() {
    var yearTemp = '';
    
    this.setYear = function() {
      yearTemp = (new Date()).getFullYear();
    };
    this.$get = function() {
      return {
        year: yearTemp
      };
    };
  })
  .config(function(ProductYearProvider) {
    ProductYearProvider.setYear();  
  });