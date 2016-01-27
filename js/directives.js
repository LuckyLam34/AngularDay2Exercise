angular.module('myApp')
  .directive('productList', function() {
  
    return {
      restrict: 'EA',
      replace: false,
      scope: {
        item: '=',
        removeItem: '&'
      },
      templateUrl: 'views/productData.html'
    };
  });