angular.module("FinalApp", ["lumx", "ngRoute"])
        .configure(function ($routerProvider) {
            $routerProvider.when("/", {
                controller: "MainController",
                templateUrl: "templates/home.html"
            })
        });