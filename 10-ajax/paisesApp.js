angular
  .module("paisesApp", [])
  .controller("PaisesAppController", ["$scope", "$http", function($scope, $http){
      $scope.paises = [];
      $http.get("https://restcountries.eu/rest/v1/all")
        .then(function(res){
          $scope.paises = res.data;
        }, function(res){
          $scope.paises = [{name: "Error!! " + res.status}];
        });
  }]);