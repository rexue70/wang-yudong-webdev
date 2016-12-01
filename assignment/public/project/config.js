(function () {
    angular
        .module("GreatNeighborhood")
        .config(Config);
    function Config($routeProvider) {
        $routeProvider
            .when("/", {
                templateUrl: "views/search/search.view.client.html",
                controller: "searchController",
                controllerAs: "model"
            })
            .when("/search", {
                templateUrl: "views/search/search.view.client.html",
                controller: "searchController",
                controllerAs: "model"
            })
    }
})();