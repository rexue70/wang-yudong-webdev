(function () {
    angular
        .module("GreatNeighborhood")
        .controller("searchController", searchController);

    function searchController(NeighborhoodService, $routeParams, $location, $http) {
        var vm = this;
        vm.title = $routeParams.title;
        this.search = search;

        function init() {
        }
        init();

        function search(title) {
            console.log("hello from controller");
            NeighborhoodService
                .search(title)
                .success(function (result) {
                    vm.neighbors = result;
                    console.log("here");
                    console.log(result);
                })
        }
    }

})();
