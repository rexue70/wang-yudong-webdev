(function () {
    angular
        .module("WebAppMaker")
        .controller("WidgetListController", WidgetListController)
        .controller("ChooseWidgetController", ChooseWidgetController)
        .controller("EditWidgetController", EditWidgetController);

    function WidgetListController($routeParams, WidgetService, $sce) {
        var vm = this;
        vm.uid = $routeParams.uid;
        vm.wid = $routeParams.wid;
        vm.pid = $routeParams.pid;
        vm.wgid = $routeParams.wgid;


        vm.checkSafeHtml = checkSafeHtml;
        vm.checkSafeYouTubeUrl = checkSafeYouTubeUrl;
        vm.checkSafeImageUrl = checkSafeImageUrl;
        function init() {
            vm.widgets = WidgetService.findWidgetsByPageId(vm.pid);
        }

        init();

        function checkSafeImageUrl(url) {
            return $sce.trustAsHtml(url);
        }

        function checkSafeHtml(html) {
            return $sce.trustAsHtml(html);
        }

        function checkSafeYouTubeUrl(url) {
            var parts = url.split('/');
            var id = parts[parts.length - 1];

            url = "https://www.youtube.com/embed/" + id;
            return $sce.trustAsResourceUrl(url);
        }
    }

    function ChooseWidgetController($routeParams, WidgetService, $location) {
        var vm = this;
        vm.uid = $routeParams.uid;
        vm.wid = $routeParams.wid;
        vm.pid = $routeParams.pid;
        vm.wgid = $routeParams.wgid;
        vm.tmp =  {"_id": null, "widgetType": null, "pageId": null, "size": null, "text": null};
        vm.createWidget = createWidget;

        function createWidget(widgetType) {
            widget = vm.tmp;
            widget.widgetType = widgetType;
            console.log("create new widget");
            widget._id = (new Date()).getTime();
            widget.pageId = vm.pid;
            WidgetService.createWidget(widget);

            $location.url("/user/" + vm.uid + "/website/" + vm.wid + "/page/" + vm.pid + "/widget/" + widget._id);
        }
    }
    
    function EditWidgetController($routeParams, WidgetService, $location) {

        var vm = this;
        vm.uid = $routeParams.uid;
        vm.wid = $routeParams.wid;
        vm.pid = $routeParams.pid;
        vm.wgid = $routeParams.wgid;

        vm.updateWidget = updateWidget;
        vm.deleteWidget = deleteWidget;
        function init() {
            vm.widget = WidgetService.findWidgetById(vm.wgid);
            vm.widgets = WidgetService.findWidgetsByPageId(vm.pid);
        }
        init();

        function updateWidget(widget) {
            WidgetService.updateWidget(widget);
            console.log("I am here!!");
            console.log(vm.widget);
            $location.url("/user/" + vm.uid + "/website/" + vm.wid + "/page/" + vm.pid + "/widget/");
        }

        function deleteWidget(wgid) {
            WidgetService.deleteWidget(wgid);
            $location.url("/user/" + vm.uid + "/website/" + vm.wid + "/page/" + vm.pid + "/widget/");
        }




    }
})();