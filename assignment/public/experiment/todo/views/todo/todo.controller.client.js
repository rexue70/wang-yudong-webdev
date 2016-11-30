(function () {
    angular
        .module("TodoApp")
        .controller("TodoListController",TodoListController);

    function TodoListController(TodoService) {
        var vm = this;
        TodoService
            .getAllTodos()
            .success(function (todos) {
                vm.todos = todos;

            })
    }
})();
// http://localhost:3000/experiment/todo/index.html#/todo