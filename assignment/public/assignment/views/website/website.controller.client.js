(function () {
    angular
        .module("WebAppMaker")
        .controller("WebsiteListController", WebsiteListController)
        .controller("NewWebsiteController", NewWebsiteController)
        .controller("EditWebsiteController", EditWebsiteController);


    function WebsiteListController($routeParams, WebsiteService) {
        var vm = this;
        vm.userId = $routeParams.uid;

        function init() {
            WebsiteService
                .findWebsitesByUser(vm.userId)
                .success(function (user) {
                    vm.websites = user.websites;
                });
        }
        init();
    }

    function NewWebsiteController($routeParams, WebsiteService, $location) {
        var vm = this;
        var userId = $routeParams.uid;
        var websiteId = $routeParams.websiteId;
        vm.userId = userId;
        vm.createWebsite = createWebsite;


        function init() {
            var promise = WebsiteService.findWebsitesByUser(vm.userId);
            promise
                .success(function (user) {
                    vm.websites = user.websites;
                });
        }

        init();

        function createWebsite(website) {
            WebsiteService
                .createWebsite(userId, website)
                .success(function () {
                    $location.url("/user/" + userId + "/website");
                });
        }

    }

    function EditWebsiteController($routeParams, WebsiteService, $location) {
        var vm = this;
        var websiteId = $routeParams.wid;
        var userId = $routeParams.uid;
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

            WebsiteService
                .findWebsitesByUser(vm.userId)
                .success(function (user) {
                    vm.websites = user.websites;
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



