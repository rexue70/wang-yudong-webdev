(function () {
    angular
        .module("WebAppMaker")
        .controller("WebsiteListController", WebsiteListController)
        .controller("NewWebsiteController", NewWebsiteController)
        .controller("EditWebsiteController", EditWebsiteController);


    function WebsiteListController($routeParams, WebsiteService) {
        var vm = this;
        vm.userId = parseInt($routeParams.uid);

        function init() {
            WebsiteService
                .findWebsitesByUser(vm.userId)
                .success(function (websites) {
                    vm.websites = websites;
                });
        }

        init();
    }

    function NewWebsiteController($routeParams, WebsiteService, $location) {
        var vm = this;
        var userId = parseInt($routeParams.uid);
        var websiteId = parseInt($routeParams.websiteId);
        vm.userId = userId;
        vm.createWebsite = createWebsite;


        function init() {
            var promise = WebsiteService.findWebsitesByUser(vm.userId);
            promise
                .success(function (websites) {
                    vm.websites = websites;
                });
        }

        init();

        function createWebsite(website) {
            website._id = (new Date()).getTime();
            website.developerId = userId;

            WebsiteService
                .createWebsite(userId, website)
                .success(function () {
                    $location.url("/user/" + userId + "/website");
                });
        }

    }

    function EditWebsiteController($routeParams, WebsiteService, $location) {
        var vm = this;
        var websiteId = parseInt($routeParams.wid);
        var userId = parseInt($routeParams.uid);
        vm.userId = userId;

        vm.updateWebsite = updateWebsite;
        vm.deleteWebsite = deleteWebsite;
        function init() {
            WebsiteService
                .findWebsiteById(websiteId)
                .success(function (website) {
                    if (website != '0') {
                        vm.website = website;
                    }
                });
            WebsiteService.findWebsitesByUser(userId)
                .success(function (websites) {
                    if (websites != '0') {
                        vm.websites = websites;
                    }
                });
        }

        init();

        function updateWebsite(website) {
            WebsiteService
                .updateWebsite(website)
                .success(function () {
                    $location.url("/user/" + userId + "/website");
                })
        }

        function deleteWebsite(wid) {
            WebsiteService
                .deleteWebsite(wid)
                .success(function () {
                    $location.url("/user/" + userId + "/website");
                })
        }


    }

})();



