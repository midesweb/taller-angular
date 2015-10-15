angular
    .module("miApp", [])
    .factory("factoriaPrueba", function(){
        var datoPublico = "Público";
        var datoPrivado = "Privado";
        var metodoPublico = function(){
            console.log("ejecuto...");
        }
        return {
            dato: datoPublico,
            funcion: metodoPublico
        }
    })
    .controller("MiAppController", ["factoriaPrueba", function(factoriaPrueba){
        console.log(factoriaPrueba.dato);
        factoriaPrueba.funcion();
    }]);