(function () {
    angular
        .module("WebAppMaker")
        .factory("UserService", UserService);

    function UserService($http) {
        var api = {
            createUser: createUser,
            findUserById: findUserById,
            findUserByCredentials: findUserByCredentials,
            findUserByUsername: findUserByUsername,
            updateUser: updateUser,
            unregisterUser: unregisterUser
        };
        return api;

        function createUser(username, password) {
            var objUser = {
                username: username,
                passord: password
            }
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
            var url = '/api/user?username=' + username + '&password' + password;
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