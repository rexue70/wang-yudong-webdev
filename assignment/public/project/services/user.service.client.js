(function () {
    angular
        .module("GreatNeighborhood")
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
            return $http.post("/api2/register", user);
        }


        function logout() {
            return $http.post("/api2/logout");
        }
        
        function checkLogin() {
            return $http.post("/api2/checkLogin");
        }

        function login(username, password) {
            var user = {
                username: username,
                password: password
            };
            // console.log("#2 client service");
            // console.log(username);
            // console.log(password);
            // console.log("#2 client service");
            return $http.post("/api2/login", user);
        }

        function findUser(username, password) {
            var url = '/api2/user?username=' + username + '&password=' + password;
            // console.log("client");
            // console.log(url);
            // console.log("client");
            return $http.get(url);
        }

        function createUser(username, password) {
            var objUser = {
                username: username,
                password: password
            };
            return $http.post("/api2/user", objUser);
        }

        function findUserById(userId) {
            var url = "/api2/user/" + userId;
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

            var url = '/api2/user?username=' + username + '&password=' + password;
            return $http.get(url);
        }

        function updateUser(user) {
            var url = "/api2/user/" + user._id;
            $http.put(url, user);
        }

        function unregisterUser(userId) {
            var url = "/api2/user/" + userId;
            return $http.delete(url);
        }
    }
})();