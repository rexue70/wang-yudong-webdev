(function () {
    angular
        .module("GreatNeighborhood")
        .factory("WeatherService", WeatherService);

    function WeatherService($http, $sce) {
        var api = {
            findWeather: findWeather
        };
        return api;


        function findWeather(state, city) {
            var url = "http://api.wunderground.com/api/da44262e8d008090/conditions/q/"+state+"/"+city+".json";
            return $http.get(url);
        }
    }
})();

