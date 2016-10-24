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
            vm.pages = PageService.findPagesByWebsiteId(vm.websiteId);
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
            vm.pages = PageService.findPagesByWebsiteId(websiteId);
        }

        init();

        function createPage(page) {
            console.log("I am here");
            page._id = (new Date()).getTime();
            page.websiteId = websiteId;
            PageService.createPage(page);
            $location.url("/user/" + userId + "/website/" + websiteId + "/page");
            console.log(PageService.findPagesByWebsiteId(websiteId));
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
            vm.page = PageService.findPageById(pageId);
            vm.pages = PageService.findPagesByWebsiteId(websiteId);
        }
        init();

        function updatePage(page) {
            PageService.updatePage(page);
            $location.url("/user/" + userId + "/website/" + websiteId + "/page");
        }

        function deletePage(pid) {
            PageService.deletePage(pid);
            $location.url("/user/" + userId + "/website/" + websiteId + "/page");
        }


    }

})();