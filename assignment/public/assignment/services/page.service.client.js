(function () {
    angular
        .module("WebAppMaker")
        .factory("PageService", PageService);

    function PageService() {
        var pages = [
            { "_id": "321", "name": "Post 1", "websiteId": "456", "description": "Lorem" },
            { "_id": "432", "name": "Post 2", "websiteId": "456", "description": "Lorem" },
            { "_id": "543", "name": "Post 3", "websiteId": "456", "description": "Lorem" },
            { "_id": "213", "name": "Post 4", "websiteId": "567", "description": "Lorem" },
            { "_id": "112", "name": "Post 5", "websiteId": "567", "description": "Lorem" },
            { "_id": "221", "name": "Post 6", "websiteId": "678", "description": "Lorem" },
            { "_id": "333", "name": "Post 7", "websiteId": "789", "description": "Lorem" }

        ];


        var api = {
            createPage : createPage,
            findPagesByWebsiteId: findPagesByWebsiteId,
            findPageById:findPageById,
            updatePage:updatePage,
            deletePage:deletePage
        };
        return api;

        function createPage(page) {
            pages.push(page);
        }

        function findPagesByWebsiteId(websiteId) {
            var res = [];
            for(var p in pages) {
                if (pages[p].websiteId == websiteId) {
                    res.push(pages[p]);
                }
            }
            return res;
        }

        function findPageById(pageId) {
            for(var p in pages) {
                if (pages[p]._id == pageId) {
                    return pages[p];
                }
            }
            return null;
        }


        function updatePage(page) {
            for (var p in pages) {
                curPage = pages[p];
                if (curPage._id === page._id) {
                    pages[p] = page;
                }
            }
        }

        function deletePage(userId) {
            for (var p in pages) {
                curPage = pages[p];
                if (curPage._id === userId) {
                    pages.splice(p, 1);
                }
            }
        }

    }
})();