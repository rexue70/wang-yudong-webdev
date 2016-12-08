(function () {
    angular
        .module("GreatNeighborhood")
        .controller("SchoolController", SchoolController);


    function SchoolController($routeParams, NeighborhoodService, $location, $sce, $http) {
        var vm = this;
        vm.result = "Loading... Please wait patiently!";

        var userId = $routeParams.uid;
        vm.userId = userId;
        // 14307 35th ave ne
        var street = $routeParams.street;
        var city = $routeParams.city;
        var state = $routeParams.state;
        vm.city = city;
        vm.state = state;
        vm.street = street;
        vm.addressId = $routeParams.addressId;
        vm.checkSafeUrl3 = checkSafeUrl3;

        console.log(userId);
        console.log(street);
        console.log(city);
        console.log(state);
        var coord = {"x": 0, "y": 0};
        var place = {"street": street, "city": city, "state": state};
        var zipcode = {"num": 0};

        function init() {
            NeighborhoodService
                .search(place)
                .then(function (result) {
                    vm.success = true;
                    zipcode.num = result.place.data.result.addressMatches[0].addressComponents.zip;
                    vm.result = result;
                    vm.map = "https://www.google.com/maps/embed/v1/place?q=" + place.street + "&key=AIzaSyD6TfeGbq0OZX86s45odgvXuaqhouSO8I0";
                    $location.url("/user/" + userId + "/school/" + place.street + "/" + place.city + "/" + place.state + "/" + vm.addressId);
                });

            // https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=-33.8670522,151.1957362&radius=500&types=hospital&key=AIzaSyD6TfeGbq0OZX86s45odgvXuaqhouSO8I0

        }

        init();

        function checkSafeUrl3() {
            var url = "https://www.google.com/maps/embed/v1/search?key=AIzaSyD6TfeGbq0OZX86s45odgvXuaqhouSO8I0&q=" + "school near" + zipcode.num;
            return $sce.trustAsResourceUrl(url);
        }
        // https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=-33.8670,151.1957&radius=5000&types=hospital&key=AIzaSyD6TfeGbq0OZX86s45odgvXuaqhouSO8I0

    }
})();

