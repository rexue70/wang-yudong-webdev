(function () {
    angular
        .module("GreatNeighborhood")
        .config(Config);
    function Config($routeProvider) {
        $routeProvider
            .when("/", {
                templateUrl: "views/search/searchNoLogin.view.client.html",
                controller: "searchController",
                controllerAs: "model"
            })
            .when("/login", {
                templateUrl: "views/user/login.view.client.html",
                controller: "LoginController",
                controllerAs: "model"
            })
            .when("/user/:uid/search", {
                templateUrl: "views/search/search.view.client.html",
                controller: "searchController",
                controllerAs: "model"
            })
            .when("/register", {
                templateUrl: "views/user/register.view.client.html",
                controller: "RegisterController",
                controllerAs: "model"
            })
            .when("/user/:uid", {
                templateUrl: "views/user/profile.view.client.html",
                controller: "ProfileController",
                controllerAs: "model",
                resolve: {
                    checkLogin: checkLogin
                    // isMyFriend: isMyFriend
                }
            })
            .when("/user/:uid/result/:street/:city/:state", {
                templateUrl: "views/result/result.view.client.html",
                controller: "ResultController",
                controllerAs: "model"
            })
            .when("/user/:uid/hospital/:street/:city/:state/:addressId", {
                templateUrl: "views/hospital/hospital.view.client.html",
                controller: "HospitalController",
                controllerAs: "model"
            })

            .when("/user/:uid/school/:street/:city/:state/:addressId", {
                templateUrl: "views/school/school.view.client.html",
                controller: "SchoolController",
                controllerAs: "model"
            })
            .when("/user/:uid/weather/:street/:city/:state/:addressId", {
                templateUrl: "views/weather/weather.view.client.html",
                controller: "WeatherController",
                controllerAs: "model"
            });


        function checkLogin($q, UserService, $location) {
            var deferred = $q.defer();
            UserService
                .checkLogin()
                .success(
                    function (user) {
                        if (user != '0') {
                            deferred.resolve();
                        } else {
                            deferred.reject();
                            $location.url("/login");
                        }
                    }
                );
            return deferred.promise;
        }
    }
})();