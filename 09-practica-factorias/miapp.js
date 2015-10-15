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
    .factory("clasificacionFactory", function(){
        var clasificaciones = ['Drama', 'Comedia', 'Documental'];
        var crearClasificacion = function(nuevaClasificacion){
            clasificaciones.push(nuevaClasificacion);
        }
        return {
            clasificaciones: clasificaciones,
            crearClasificacion: crearClasificacion
        }
    })
    .factory("peliculasFactory", function(){
        var peliculas = [];
        var crearPelicula = function(nuevaPelicula){
            peliculas.push(nuevaPelicula);
        }
        return {
            peliculas: peliculas,
            crearPelicula: crearPelicula
        }
    })
    .controller("MiAppController", ['$scope', 'clasificacionFactory', 'peliculasFactory', function($scope, clasificacionFactory, peliculasFactory){
        //Esta manera de inyectar el scope no es la mejor
        $scope.clasificaciones = clasificacionFactory.clasificaciones;
        $scope.peliculas = peliculasFactory.peliculas;
        $scope.nuevaPelicula = {};
        $scope.nuevaPelicula.clasificacion = "Drama";
        $scope.agregarPelicula = function(){
            peliculasFactory.crearPelicula(angular.copy($scope.nuevaPelicula));
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
            clasificacionFactory.crearClasificacion($scope.nuevaClasificacion);
            $scope.nuevaClasificacion = "";
        }
    }]);