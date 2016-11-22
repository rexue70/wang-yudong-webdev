(function () {
    angular
        .module("WebAppMaker")
        .controller("PageListController", PageListController)
        .controller("NewPageController", NewPageController)
        .controller("EditPageController", EditPageController);

    function PageListController($routeParams, PageService) {
        var vm = this;
        vm.userId = parseInt($routeParams.uid);
        vm.websiteId = parseInt($routeParams.wid);

        function init() {
            PageService
                .findPagesByWebsiteId(vm.websiteId)
                .success(function (pages) {
                    vm.pages = pages;
                });
        }

        init();
    }

    function NewPageController($routeParams, PageService, $location) {
        var vm = this;
        var userId = parseInt($routeParams.uid);
        var websiteId = parseInt($routeParams.wid);
        vm.userId = userId;
        vm.websiteId = websiteId;
        vm.createPage = createPage;
        function init() {
            PageService
                .findPagesByWebsiteId(websiteId)
                .success(function (pages) {
                    vm.pages = pages;
                })
        }

        init();

        function createPage(page) {
            page._id = (new Date()).getTime();
            page.websiteId = websiteId;
            PageService
                .createPage(page)
                .success(function () {
                    $location.url("/user/" + userId + "/website/" + websiteId + "/page");
                });
        }
    }


    function EditPageController($routeParams, PageService, $location) {

        var vm = this;
        var userId = parseInt($routeParams.uid);
        var websiteId = parseInt($routeParams.wid);
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
                .success(function (pages) {
                    vm.pages = pages;
                });
        }

        init();

        function updatePage(page) {
            PageService
                .updatePage(page)
                .success(function () {
                    $location.url("/user/" + userId + "/website/" + websiteId + "/page");
                });
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