(function () {
    angular
        .module("WebAppMaker")
        .controller("LoginController", LoginController)
        .controller("RegisterController", RegisterController)
        .controller("ProfileController", ProfileController);

    function LoginController($location, UserService) {
        var vm = this;
        vm.login = login;

        function login(username, password) {
            if (typeof(username) === "undefined") {
                vm.error = "UserName can not be empty."
            } else if (typeof(password) === "undefined") {
                vm.error = "Password can not be empty."
            } else {
                var promise = UserService.login(username, password);
                console.log(promise);
                promise
                    .success(function (user) {
                        console.log("back");
                        if (user === '0') {
                            vm.error = "No such user"
                        } else {
                            $location.url("/user/" + user._id);
                        }
                    })
                    .error(function (user) {
                        console.log("error");
                        console.log(user);
                    });
            }
        }
    }

    function RegisterController(UserService, $location, $rootScope) {
        var vm = this;
        vm.createUser = createUser;
        function createUser(username, password, password2) {
            if (typeof(username) === "undefined") {
                vm.error = "UserName can not be empty."
            } else if (typeof(password) === "undefined") {
                vm.error = "Password can not be empty."
            } else {
                if (password != password2) {
                    vm.error = "Your password is different, please type again!"
                } else {
                    UserService
                        .createUser(username, password)
                        .success(function (user) {
                            $rootScope.currentUser = user;
                            $location.url("/user/" + user._id);
                        })
                        .error(function (error) {
                            vm.error = "Can not create the user";
                        });
                }
            }
        }
    }

    function ProfileController($location, $routeParams, UserService) {
        var vm = this;

        vm.userId = $routeParams.uid;


        vm.updateUser = updateUser;
        vm.unregisterUser = unregisterUser;
        vm.logout = logout;


        function init() {
            UserService
                .findUserById(vm.userId)
                .success(function (user) {

                    vm.user = user;


                })
                .error(function () {

                });
        }

        init();

        function logout() {
            UserService.logout()
                .success(function () {
                    $location.url("/login");
                });
        }

        function updateUser() {
            console.log(vm.user);

            UserService.updateUser(vm.user);
        }

        function unregisterUser() {
            UserService
                .unregisterUser(vm.user._id)
                .success(function () {
                    $location.url("/login");
                })
                .error(function () {

                });

        }
    }


})();