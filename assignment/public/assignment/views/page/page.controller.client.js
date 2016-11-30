(function () {
    angular
        .module("WebAppMaker")
        .controller("PageListController", PageListController)
        .controller("NewPageController", NewPageController)
        .controller("EditPageController", EditPageController);

    function PageListController($routeParams, PageService) {
        var vm = this;
        vm.userId = $routeParams.uid;
        vm.websiteId = $routeParams.wid;

        function init() {
            PageService
                .findPagesByWebsiteId(vm.websiteId)
                .success(function (website) {
                    vm.pages = website.pages;
                });
        }

        init();
    }

    function NewPageController($routeParams, PageService, $location) {
        var vm = this;
        var userId = $routeParams.uid;
        var websiteId = $routeParams.wid;
        vm.userId = userId;
        vm.websiteId = websiteId;
        vm.createPage = createPage;
        function init() {
            PageService
                .findPagesByWebsiteId(websiteId)
                .success(function (website) {
                    vm.pages = website.pages;
                })
        }

        init();

        function createPage(name, description) {
            console.log(name);
            if (typeof(name) === "undefined") {
                vm.error = "page name can not be empty."
            } else {
                var page = {name: name, description: description};
                PageService
                    .createPage(websiteId, page)
                    .success(function () {
                        $location.url("/user/" + userId + "/website/" + websiteId + "/page");
                    });
            }
        }
    }


    function EditPageController($routeParams, PageService, $location) {

        var vm = this;
        var userId = $routeParams.uid;
        var websiteId = $routeParams.wid;
        var pageId = $routeParams.pid;

        vm.pageId = pageId;
        vm.userId = userId;
        vm.websiteId = websiteId;
        vm.updatePage = updatePage;
        vm.deletePage = deletePage;
        function init() {
            PageService
                .findPageById(pageId)
                .success(function (page) {
                    vm.page = page;
                });
            PageService
                .findPagesByWebsiteId(websiteId)
                .success(function (website) {
                    vm.pages = website.pages;
                });
        }

        init();

        function updatePage(page) {
            if (page.name == undefined || page.name == "") {
                vm.error = "page name can not be empty."
            } else {
                PageService
                    .updatePage(page)
                    .success(function () {
                        $location.url("/user/" + userId + "/website/" + websiteId + "/page");
                    });
            }
        }

        function deletePage(pid) {
            PageService
                .deletePage(pid)
                .success(function () {
                    $location.url("/user/" + userId + "/website/" + websiteId + "/page");
                });
        }
    }
})();