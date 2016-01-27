angular.module('myApp', [])
  .controller('ProCtrl', ['$scope', 'ProductService', function($scope, ProductService) {
    $scope.products = ProductService.list();
    $scope.remove = function(product) {  
      ProductService.remove(product);
    };
    $scope.add = function() {
      var product = {
        model: $scope.modelInput,
        year: parseInt($scope.modelYear, 10),
        price: parseInt($scope.modelPrice, 10),
        producer: $scope.modelProducer,
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

