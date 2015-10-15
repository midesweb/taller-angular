angular
    .module("miApp", ["ngRoute"])
    .config(["$routeProvider", function($routeProvider){
        $routeProvider
            .when("/", {
                controller: "MiAppController",
                templateUrl: "vistas/peliculas.html"
            })
            .when("/clasificaciones", {
                controller: "MiAppController",
                templateUrl: "vistas/clasificaciones.html"
            })
    }])
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
        $scope.crearClasificacion = function(){
            $scope.clasificaciones.push($scope.nuevaClasificacion);
            $scope.nuevaClasificacion = "";
        }
    }]);