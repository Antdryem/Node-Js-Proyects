'use strict';

angular.module("pruebaModulo", []).controller("pruebaControlador", function ($scope) {
    $scope.nombre = "1";

    $scope.pruebaFuncion = function (hola) {
        if(hola=="333")
            alert("vale chetos la vida");
        alert($scope.nombre);
    }
}).controller("otroControlador", function ($scope) {
    $scope.nombre = "2";

    $scope.pruebaFuncion2 = function () {
        alert($scope.nombre);
    }
});