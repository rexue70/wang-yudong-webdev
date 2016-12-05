(function () {
    angular
        .module("GreatNeighborhood")
        .factory("NeighborhoodService", NeighborhoodService);

    function NeighborhoodService($http, $sce) {
        var api = {
            search: search
            // checkSafeHtml:checkSafeHtml
            // callApi: callApi
        };
        return api;

        // function checkSafeHtml(url) {
        //     return $sce.trustAsResourceUrl(url);
        // }


        function search(title) {





            var street = title.street;
            var city = title.city;
            var state = title.state;
            console.log(street);
            console.log(city);
            console.log(state);
            var url = "https://geocoding.geo.census.gov/geocoder/geographies/address?street=" + street + "&city=" + city + "&state=" + state + "&benchmark=Public_AR_Census2010&vintage=Census2010_Census2010&layers=14&format=jsonp&&callback=JSON_CALLBACK";
            console.log("this is from client part");
            console.log(url);


            // var url2 = "https://geocoding.geo.census.gov/geocoder/geographies/address?street=7432%204th%20Ave%20NE&city=Seattle&state=WA&benchmark=Public_AR_Census2010&vintage=Census2010_Census2010&layers=14?json_callback=angular.callbacks._0&format=jsonp";
            // var url2 = "https://geocoding.geo.census.gov/geocoder/geographies/address?street=7432%204th%20Ave%20NE&city=Seattle&state=WA&benchmark=Public_AR_Census2010&vintage=Census2010_Census2010&layers=14&format=jsonp&&callback=JSON_CALLBACK";
            return $http.jsonp(url).then(function successCallback(response) {
                console.log("hear back from api");
                // console.log(response.data.result.addressMatches[0].geographies["Census Blocks"][0].GEOID);
                var addressId = response.data.result.addressMatches[0].geographies["Census Blocks"][0].GEOID;
                var shortAddressId = addressId.substring(0, 11);
                console.log(shortAddressId);
                var place = {"place":response, "addressId":shortAddressId};
                return place;
            }, function errorCallback(response) {
                // ko
            });
        }


    }
})();