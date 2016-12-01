(function () {
    angular
        .module("GreatNeighborhood")
        .factory("NeighborhoodService", NeighborhoodService);

    function NeighborhoodService($http) {
        var api = {
            search: search
        };
        return api;

        function search(title) {
            if (typeof (title) == undefined){

            } else {
                console.log("the title is " + title);
                var url = "/api/neighbor/" + title;
                // var url = "/api/page/";
                console.log("this is from client part");
                console.log(url);
                return $http.get(url);
            }

        }
    }
})();