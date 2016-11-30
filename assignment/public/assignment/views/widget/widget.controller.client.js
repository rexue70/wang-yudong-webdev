(function () {
    angular
        .module("WebAppMaker")
        .controller("WidgetListController", WidgetListController)
        .controller("ChooseWidgetController", ChooseWidgetController)
        .controller("EditWidgetController", EditWidgetController)
        .controller("FlickrSearchController", FlickrSearchController);

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
            WidgetService
                .findWidgetsByPageId(vm.pid)
                .success(function (widgets) {
                    vm.widgets = widgets;
                });
        }

        init();

        function checkSafeImageUrl(url) {
            return $sce.trustAsHtml(url);
        }

        function checkSafeHtml(html) {
            return $sce.trustAsHtml(html);
        }

        function checkSafeYouTubeUrl(url) {
            if (url != undefined) {
                var parts = url.split('/');
                var id = parts[parts.length - 1];

                url = "https://www.youtube.com/embed/" + id;
                return $sce.trustAsResourceUrl(url);
            }

        }
    }

    function ChooseWidgetController($routeParams, WidgetService, $location) {
        var vm = this;
        vm.uid = $routeParams.uid;
        vm.wid = $routeParams.wid;
        vm.pid = $routeParams.pid;
        vm.wgid = $routeParams.wgid;

        // _page: {type: mongoose.Schema.Types.ObjectId, ref: "PageModel"},
        // type: {type: String, enum: ['HEADER', 'IMAGE', 'YOUTUBE', 'HTML', 'TEXT']},
        // name: String,
        //     text: String,
        //     placeholder: String,
        //     description: String,
        //     url: String,
        //     width: String,
        //     height: String,
        //     rows: Number,
        //     size: Number,
        //     class: String,
        //     icon: String,
        //     deletable: Boolean,
        //     formatted: Boolean,
        //     dateCreated: {type: Date, default: Date.now}


        vm.widget = {
            "type": null,
            "_page": null,
            "rows": 0,
            "size": 0,
            "text": null,
            "deletable": false,
            "formatted": false
        };
        vm.createWidget = createWidget;

        function createWidget(type) {
            vm.widget.type = type;
            vm.widget._page = vm.pid;
            console.log("#1");
            console.log(vm.widget);
            WidgetService
                .createWidget(vm.widget)
                .success(function (widgetId) {
                    console.log("receive widgetid in choose" + widgetId);
                    $location.url("/user/" + vm.uid + "/website/" + vm.wid + "/page/" + vm.pid + "/widget/" + widgetId);
                });
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

            WidgetService
                .findWidgetById(vm.wgid)
                .success(function (widget) {
                    vm.widget = widget;
                    // vm.widget.rows = Integer.valueOf(widget.rows);

                });
            WidgetService
                .findWidgetsByPageId(vm.pid)
                .success(function (widgets) {
                    vm.widgets = widgets;
                });
        }

        init();
        function updateWidget(widget) {
            console.log(widget);
            console.log(widget.name);
            if (widget.name == undefined || widget.name == "") {
                vm.error = "widget name can not be empty."
            } else {
                WidgetService
                    .updateWidget(widget)
                    .success(function () {
                        $location.url("/user/" + vm.uid + "/website/" + vm.wid + "/page/" + vm.pid + "/widget/");
                    });
            }
        }

        function deleteWidget(wgid) {
            WidgetService
                .deleteWidget(wgid)
                .success(function () {
                    $location.url("/user/" + vm.uid + "/website/" + vm.wid + "/page/" + vm.pid + "/widget/");
                });
        }
    }

    function FlickrSearchController($http, $location, $routeParams, WidgetService, FlikrSearchService) {
        var vm = this;
        vm.pid = $routeParams.pid;
        vm.uid = $routeParams.uid;
        vm.wid = $routeParams.wid;
        vm.wgid = $routeParams.wgid;
        vm.searchPhotos = searchPhotos;
        vm.selectPhoto = selectPhoto;

        function searchPhotos(searchTerm) {
            console.log("controller");
            console.log(searchTerm);
            FlikrSearchService
                .searchPhotos(searchTerm)
                .success(function (response) {
                    var data = response.replace("jsonFlickrApi(", "");
                    data = data.substring(0, data.length - 1);
                    data = JSON.parse(data);
                    vm.photos = data.photos;
                });
        }

        function selectPhoto(photo) {
            var url = "https://farm" + photo.farm + ".staticflickr.com/" + photo.server;
            url += "/" + photo.id + "_" + photo.secret + "_b.jpg";
            var widget = {
                "_id": vm.wgid,
                "name": vm.wgid,
                "type": "IMAGE",
                "_page": vm.pid,
                "width": "100%",
                "url": url
            };
            console.log("addto widget");
            console.log(widget);

            WidgetService
                .updateWidget(widget)
                .success(function () {
                    $location.url("/user/" + vm.uid + "/website/" + vm.wid + "/page/" + vm.pid + "/widget");
                })
                .error(function () {
                    console.log("error");
                })
        }

    }
})();