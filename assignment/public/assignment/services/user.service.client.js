(function () {
    angular
        .module("WebAppMaker")
        .factory("UserService", UserService);

    function UserService($http) {
        var api = {
            createUser: createUser,
            findUserById: findUserById,
            findUserByCredentials: findUserByCredentials,
            findUser: findUser,
            findUserByUsername: findUserByUsername,
            updateUser: updateUser,
            unregisterUser: unregisterUser,
            login: login,
            checkLogin: checkLogin,
            logout: logout,
            register : register
        };
        return api;

        function register(user) {
            return $http.post("/api/register", user);
        }


        function logout() {
            return $http.post("/api/logout");
        }
        
        function checkLogin() {
            return $http.post("/api/checkLogin");
        }

        function login(username, password) {
            var user = {
                username: username,
                password: password
            };
            return $http.post("/api/login", user);
        }

        function findUser(username, password) {
            var url = '/api/user?username=' + username + '&password=' + password;
            console.log("client");
            console.log(url);
            console.log("client");
            return $http.get(url);
        }

        function createUser(username, password) {
            var objUser = {
                username: username,
                password: password
            };
            return $http.post("/api/user", objUser);
        }

        function findUserById(userId) {
            var url = "/api/user/" + userId;
            return $http.get(url);
        }

        function findUserByUsername(username) {
            for (var u in users) {
                user = users[u];
                if (user.username === username) {
                    return user;
                }
            }
            return null;
        }


        function findUserByCredentials(username, password) {
            console.log("client");
            console.log(username);
            console.log(username);

            var url = '/api/user?username=' + username + '&password=' + password;
            return $http.get(url);
        }

        function updateUser(user) {
            var url = "/api/user/" + user._id;
            $http.put(url, user);
        }

        function unregisterUser(userId) {
            var url = "/api/user/" + userId;
            return $http.delete(url);
        }
    }
})();