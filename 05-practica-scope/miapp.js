angular
    .module("miApp", [])
    .controller("MiAppController", ['$scope', function($scope){
        //Esta manera de inyectar el scope no es la mejor
        $scope.clasificaciones = ['Drama', 'Comedia', 'Documental'];
        $scope.peliculas = [];
        $scope.nuevaPelicula = {};
        $scope.nuevaPelicula.clasificacion = "Drama";
        $scope.agregarPelicula = function(){
            $scope.peliculas.push(angular.copy($scope.nuevaPelicula));
        }
        $scope.campoOrden = 'nombre';
        $scope.ordendesc = false;
        $scope.ordena = function(orden){
            if(orden == $scope.campoOrden){
                $scope.ordendesc = !$scope.ordendesc;
            }else{
                $scope.campoOrden = orden;
                $scope.ordendesc = false;
            }
        }
    }]);