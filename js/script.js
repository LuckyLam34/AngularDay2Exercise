angular.module('myApp', [])
  .controller('ProCtrl', ['$scope', 'ProductService', 'ProductYear', function($scope, ProductService, ProductYear) {
    $scope.products = ProductService.list();
    
    $scope.remove = function(product) {  
      ProductService.remove(product);
    };
    
    $scope.add = function(modelParam, priceParam, producerParam) {
      var product = {
        model: modelParam,
        year: ProductYear.year,
        price: parseInt(priceParam),
        producer: producerParam,
        available: true
      };
      console.log(product);
      ProductService.add(product);
    };
    
    $scope.predicate = '';
    $scope.reverse = true;

    $scope.order = function(predicate) {
      $scope.reverse = !$scope.reverse;
      $scope.predicate = predicate;
    };
  }]);

