(function () {
    angular
        .module("MovieApp")
        .factory("MovieService", MovieService);


    function MovieService($http) {
        var api = {
            "searchMovieByTitle" : searchMovieByTitle,
            "searchMovieByImdbID" : searchMovieByImdbID
            // "findWeather" :findWeather
        };
        return api;
        function searchMovieByTitle(title) {
            var url = "http://www.omdbapi.com/?s="+title;
            return $http.get(url);
        }
        function searchMovieByImdbID(imdbID) {
            var url = "http://www.omdbapi.com?i=" + imdbID;
            return $http.get(url);
        }
        // function findWeather() {
        //     for (var c in cities) {
        //         var url = "http://api.openweathermap.org/data/2.5/weather?q=" + cities[c].cityName + "&APPID=e822da6865bf3f112c7ac5ade4f3a684";
        //         console.log($http.get(url));
        //     }
        // }


    }
})();