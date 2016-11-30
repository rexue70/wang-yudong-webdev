(function() {
    angular
        .module("WebAppMaker")
        .factory("FlikrSearchService", FlikrSearchService);

    function FlikrSearchService($http){
        var api = {
            searchPhotos : searchPhotos
        };
        return api;

        <!--key-->
        <!--c5290523aa0a628812f466eb70f3d947-->
        <!--password-->
        <!--24fae96c2c14a540-->
        function searchPhotos(searchTerm){
            console.log("sc searchPhotos")
            console.log(searchTerm);
            var key = "c5290523aa0a628812f466eb70f3d947";
            var secret = "24fae96c2c14a540";
            var urlBase = "https://api.flickr.com/services/rest/?method=flickr.photos.search&format=json&api_key=API_KEY&text=TEXT";
            var url = urlBase.replace("API_KEY", key).replace("TEXT", searchTerm);
            console.log(url);
            return $http.get(url);
        }

    }
})();