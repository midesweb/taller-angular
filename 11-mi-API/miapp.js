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
    .factory("clasificacionFactory", ['$http', function($http){
        var getClasificaciones = function(){
            return $http.get("http://localhost:3000/clasificaciones");
        }
        var crearClasificacion = function(nuevaClasificacion){
            var data = {
                nombre: nuevaClasificacion
            }
            return $http.post("http://localhost:3000/clasificaciones", data);
        }
        return {
            getClasificaciones: getClasificaciones,
            crearClasificacion: crearClasificacion
        }
    }])
    .factory("peliculasFactory", ['$http', function($http){
        var getPeliculas = function(){
            return $http.get("http://localhost:3000/peliculas");
        }
        var crearPelicula = function(nuevaPelicula){
            return $http.post("http://localhost:3000/peliculas", nuevaPelicula);
        }
        return {
            getPeliculas: getPeliculas,
            crearPelicula: crearPelicula
        }
    }])
    .controller("MiAppController", ['$scope', 'clasificacionFactory', 'peliculasFactory', function($scope, clasificacionFactory, peliculasFactory){
        //Esta manera de inyectar el scope no es la mejor
        clasificacionFactory.getClasificaciones()
            .then(function(res){
                $scope.clasificaciones = res.data;
            });
        peliculasFactory.getPeliculas().then(function(res){
            $scope.peliculas = res.data;
        });
        $scope.nuevaPelicula = {};
        $scope.nuevaPelicula.clasificacion = "Drama";
        $scope.agregarPelicula = function(){
            peliculasFactory.crearPelicula($scope.nuevaPelicula).then(function(res){
                peliculasFactory.getPeliculas().then(function(res){
                    $scope.peliculas = res.data;
                });
            });
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
            clasificacionFactory.crearClasificacion($scope.nuevaClasificacion)
                .then(function(){
                    clasificacionFactory.getClasificaciones()
                    .then(function(res){
                        $scope.clasificaciones = res.data;
                    });
                });
            $scope.nuevaClasificacion = "";
        }
    }]);