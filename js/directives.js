angular.module('myApp')
  .directive('productList', function() {
  
    return {
      restrict: 'EA',
      replace: false,
      scope: {
        item: '='
      },
      templateUrl: 'views/productData.html'
    };
  });