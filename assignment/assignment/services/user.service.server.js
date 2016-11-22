module.exports = function (app) {
    var users = [
        {_id: "123", username: "alice", password: "alice", firstName: "Alice", lastName: "Wonder"},
        {_id: "234", username: "bob", password: "bob", firstName: "Bob", lastName: "Marley"},
        {_id: "345", username: "charly", password: "charly", firstName: "Charly", lastName: "Garcia"},
        {_id: "456", username: "yudong", password: "yudong", firstName: "yudong", lastName: "Wang"}
    ];

    app.post('/api/user', createUser);
    app.get('/api/user', findUser);
    app.get('/api/user/:uid', findUserById);
    app.put('/api/user/:uid', updateUser);
    app.delete('/api/user/:uid', unregisterUser);


    
    function createUser(req, res) {
        var user = req.body;
        user._id = (new Date()).getTime();
        users.push(user);
        res.send(user);
    }


    function findUser(req, res) {
        var params = req.params;
        var query = req.query;
        if (query.username && query.password) {
            findUserByCredentials(req, res);
        } else if (query.username) {
            findUserByUsername(req, res);
        }
    }

    function findUserByCredentials(req, res) {
        var username = req.query.username;
        var password = req.query.password;
        for (var u in users) {
            user = users[u];
            if (user.username === username &&
            users[u].password === password) {
                res.send(users[u]);
                return;
            }
        }
        res.send('0');
    }

    function findUserByUsername(req, res) {
        var username = req.query.username;
        for (var u in users) {
            user = users[u];
            if (user.username === username) {
                res.send(users[u]);
                return;
            }
        }
        res.send('0');
    }

    function findUserById(req, res) {
        var userId = req.params.uid;
        for (var u in users) {
            if (users[u]._id == userId) {
                res.send(users[u]);
                return;
            }
        }
        res.send('0');
    }

    function updateUser(req, res) {
        var user = req.body;
        var uid = req.params.uid;
        for (var u in users) {
            if (users[u]._id == uid) {
                users[u] = user;
            }
        }
        res.send(200);
    }


    function unregisterUser(req, res) {
        var uid = req.params.uid;
        for (var u in users) {
            if (users[u]._id == uid) {
                users.splice(u, 1);
            }
        }
        res.send(200);
    }
};