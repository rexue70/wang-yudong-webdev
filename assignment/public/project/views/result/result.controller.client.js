(function () {
    angular
        .module("GreatNeighborhood")
        .controller("ResultController", ResultController);


    function ResultController($routeParams, NeighborhoodService, WeatherService, $location, $sce, $http) {
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
        vm.checkSafeUrl = checkSafeUrl;
        vm.checkSafeUrl2 = checkSafeUrl2;
        vm.checkSafeUrl3 = checkSafeUrl3;
        // vm.checkSafeUrl4 = checkSafeUrl4;
        vm.checkSafeUrl5 = checkSafeUrl5;


        console.log(userId);
        console.log(street);
        console.log(city);
        console.log(state);
        var coord = {"x": 0, "y": 0};
        var place = {"street": street, "city": city, "state": state};
        var zipcode = {"num": 0};
        vm.addressId = 0;
        function init() {


            NeighborhoodService
                .search(place)
                .then(function (result) {
                    console.log("here");
                    console.log(result);
                    vm.addressId = result.place.data.result.addressMatches[0].geographies["Census Blocks"][0].GEOID.substring(0, 11);
                    console.log(vm.addressId);
                    vm.success = true;
                    coord.x = result.place.data.result.addressMatches[0].coordinates.x;
                    coord.y = result.place.data.result.addressMatches[0].coordinates.y;
                    zipcode.num = result.place.data.result.addressMatches[0].addressComponents.zip;
                    vm.result = result;
                    vm.map = "https://www.google.com/maps/embed/v1/place?q=" + place.street + "&key=AIzaSyD6TfeGbq0OZX86s45odgvXuaqhouSO8I0";
                    $location.url("/user/" + userId + "/result/" + place.street + "/" + place.city + "/" + place.state);
                })
        }

        init();

        function checkSafeUrl() {
            var url = "https://www.google.com/maps/embed/v1/place?q=" + place.street + "&key=AIzaSyD6TfeGbq0OZX86s45odgvXuaqhouSO8I0";
            return $sce.trustAsResourceUrl(url);
        }

        function checkSafeUrl2() {

            var url = "https://www.google.com/maps/embed/v1/view?key=AIzaSyD6TfeGbq0OZX86s45odgvXuaqhouSO8I0&center=" + coord.y + "," + coord.x + "&zoom=20&maptype=satellite";
            return $sce.trustAsResourceUrl(url);
        }

        function checkSafeUrl3() {
            var url = "https://www.google.com/maps/embed/v1/search?key=AIzaSyD6TfeGbq0OZX86s45odgvXuaqhouSO8I0&q=" + "school near" + zipcode.num;
            return $sce.trustAsResourceUrl(url);
        }
        //
        // function checkSafeUrl4() {
        //     var url = "https://www.google.com/maps/embed/v1/search?key=AIzaSyD6TfeGbq0OZX86s45odgvXuaqhouSO8I0&q=" + "hospital near" + zipcode.num;
        //     return $sce.trustAsResourceUrl(url);
        // }

        function checkSafeUrl5() {
            var url = "https://www.google.com/maps/embed/v1/streetview?key=AIzaSyD6TfeGbq0OZX86s45odgvXuaqhouSO8I0&location=" + coord.y + "," + coord.x + "&heading=280&pitch=0&fov=35";
            return $sce.trustAsResourceUrl(url);
        }

    }
})();

