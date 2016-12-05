(function () {
    angular
        .module("GreatNeighborhood")
        .controller("searchController", searchController);

    function searchController(NeighborhoodService, $location, $routeParams) {
        var vm = this;
        this.search = search;
        var userId = $routeParams.uid;


        function init() {
        }

        init();


        function search(place) {
            console.log("hello from controller");
            console.log(place);
            // console.log(place.street);
            console.log("hello from controller");

            $location.url("/user/" + userId + "/result/" + place.street + "/" + place.city + "/" + place.state);


        }


    }

})
();
