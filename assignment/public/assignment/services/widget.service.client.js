(function () {
    angular
        .module("WebAppMaker")
        .factory("WidgetService", WidgetService);

    function WidgetService($http) {
        var api = {
            createWidget: createWidget,
            findWidgetsByPageId: findWidgetsByPageId,
            findWidgetById: findWidgetById,
            updateWidget: updateWidget,
            deleteWidget: deleteWidget,
            sort : sort
        };
        return api;

        function sort(start, end) {
            var url = "/api/widget?start=START&end=END";
            url = url.replace("START", start);
            url = url.replace("END", end);
            $http.put(url);
        }


        function createWidget(widget) {
            var url = "/api/page/" + widget.pageId + "/widget";
            return $http.post(url, widget);
        }

        function findWidgetsByPageId(pageId) {
            var url = "/api/page/" + pageId + "/widget";
            return $http.get(url);
        }

        function findWidgetById(widgetId) {
            var url = "/api/widget/" + widgetId;
            return $http.get(url);
        }

        function updateWidget(widget) {
            var url = "/api/widget/" + widget._id;
            return $http.put(url, widget);
        }

        function deleteWidget(widgetId) {
            var url = "/api/widget/" + widgetId;
            return $http.delete(url);
        }
    }
})();