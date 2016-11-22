(function () {
    angular
        .module("TodoApp")
        .factory("TodoService",TodoService)

    function TodoService($http) {

        var api = {
            getAllTodos: getAllTodos,
            sort : sort
        };
        return api;

        function sort(start, end) {
            var url = "/api/experiment/todo?start=START&end=END";
            url = url.replace("START", start);
            url = url.replace("END", end);
            $http.put(url);
        }

        function getAllTodos() {
            var url = "/api/experiment/todo";
            return $http.get(url);
        }
    }
})();