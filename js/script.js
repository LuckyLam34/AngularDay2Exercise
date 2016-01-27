angular.module('myApp', [])
  .controller('ProCtrl', ['$scope', 'ProductService', function($scope, ProductService) {
    $scope.products = ProductService.list();
    $scope.remove = function(product) {  
      ProductService.remove(product);
    };
    $scope.add = function(modelParam, yearParam, priceParam, producerParam) {
      var product = {
        model: modelParam,
        year: yearParam,
        price: parseInt(priceParam),
        producer: producerParam,
        available: true
      };
      
      ProductService.add(product);
    };
    
    $scope.predicate = '';
    $scope.reverse = true;
    $scope.p = 'conheo';
    $scope.order = function(predicate) {
      $scope.reverse = !$scope.reverse;
      $scope.predicate = predicate;
    };
  }]);

