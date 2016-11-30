(function () {
    angular
        .module("WebAppMaker")
        .factory("PageService", PageService);

    function PageService($http) {
        var api = {
            createPage : createPage,
            findPagesByWebsiteId: findPagesByWebsiteId,
            findPageById:findPageById,
            updatePage:updatePage,
            deletePage:deletePage
        };
        return api;

        function createPage(websiteId, page) {
            console.log("create page sc");
            var url = "/api/website/" + websiteId + "/page";
            console.log(url);
            return $http.post(url, page);
        }

        function findPagesByWebsiteId(websiteId) {
             var url = "/api/website/" + websiteId + "/page";
            return $http.get(url);
        }

        function findPageById(pageId) {
            var url = "/api/page/" + pageId;
            return $http.get(url);
        }

        function updatePage(page) {
            var url = "/api/page/" + page._id;
            return $http.put(url, page);
        }

        function deletePage(pageId) {
            var url = "/api/page/" + pageId;
            return $http.delete(url);
        }
    }
})();