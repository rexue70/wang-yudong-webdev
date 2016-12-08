(function () {
    angular
        .module("GreatNeighborhood")
        .controller("WeatherController", WeatherController);


    function WeatherController($routeParams, NeighborhoodService, WeatherService, $location, $sce, $http) {
        var vm = this;
        var userId = $routeParams.uid;
        vm.userId = userId;
        var city = $routeParams.city;
        var state = $routeParams.state;
        vm.city = city;
        vm.state = state;
        vm.street = $routeParams.street;
        vm.addressId = $routeParams.addressId;



        function init() {


            WeatherService
                .findWeather(state, city)
                .success(function (res) {
                    vm.weather = res;
                    console.log(res);
                    console.log(res.current_observation.icon_url);
                });
        }
        init();

    }
})();

