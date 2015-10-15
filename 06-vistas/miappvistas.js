angular
    .module("miAppVistas", ["ngRoute"])
    .config(["$routeProvider", function($routeProvider){
        //configuración de las rutas
        $routeProvider
            .when("/", {
                controller: "miAppVistasController",
                templateUrl: "vistas/home.html"
            })
            .when("/seccion", {
                controller: "miAppVistasController",
                templateUrl: "vistas/seccion.html"
            });
    }])
    .controller("miAppVistasController", function(){
        console.log("inicializo")
    });