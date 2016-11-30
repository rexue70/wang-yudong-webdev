module.exports = function (app, model) {

    app.post('/api/user', createUser);
    app.get('/api/user', findUser);
    app.get('/api/user/:uid', findUserById);
    app.put('/api/user/:uid', updateUser);
    app.delete('/api/user/:uid', unregisterUser);


    function createUser(req, res) {
        var user = req.body;
        // user._id = (new Date()).getTime();
        // users.push(user);
        // console.log(user);
        // console.log("ss");
        model
            .userModel
            .createUser(user)
            .then(
                function (newUser) {
                    res.send(newUser);
                },
                function (error) {
                    res.send(400).send(error);
                }
            );
    }


    function findUser(req, res) {
        var username = req.query.username;
        var password = req.query.password;
        var query = req.query;
        // console.log("login");
        // console.log(username + " " + password);
        // console.log(query);
        // console.log("login");
        if (query.username && query.password) {
            findUserByCredentials(req, res);
        }  else {
            res.send('0');
        }

    }

    function findUserByCredentials(req, res) {
        var username = req.query.username;
        var password = req.query.password;
        // console.log("right place" );
        // console.log(username);
        // console.log(password);
        model
            .userModel.findUserByCredentials(username, password)
            .then(
                function (users) {

                    if (users) {
                        // console.log("server recieve");
                        // console.log(users);
                        // console.log("server recieve");
                        if (users[0]) {
                            res.json(users[0]);
                        } else{
                            res.send('0')
                        }
                    } else {
                        res.send('0');
                    }

                },
                function (error) {
                    res.sendStatus(400).send(error);
                }
            );
        // for (var u in users) {
        //     user = users[u];
        //     if (user.username === username &&
        //         users[u].password === password) {
        //         res.send(users[u]);
        //         return;
        //     }
        // }
        // res.send('0');
    }

    function findUserByUsername(req, res) {
        var username = req.query.username;

        // for (var u in users) {
        //     user = users[u];
        //     if (user.username === username) {
        //         res.send(users[u]);
        //         return;
        //     }
        // }
        // res.send('0');
    }

    function findUserById(req, res) {
        var userId = req.params.uid;
        model
            .userModel
            .findUserById(userId)
            .then(
                function (user) {

                    if (user) {
                        // console.log("good");
                        // console.log(user);
                        res.send(user);

                    } else {
                        res.send('0');
                    }
                },
                function (error) {
                    // console.log("wrong");
                    res.sendStatus(400).send(error);
                }
            );

        // for (var u in users) {
        //     if (users[u]._id == userId) {
        //         res.send(users[u]);
        //         return;
        //     }
        // }
        // res.send('0');
    }

    function updateUser(req, res) {
        var user = req.body;
        var uid = req.params.uid;

        console.log("ss start");
        console.log(user);
        console.log(uid);

        model
            .userModel
            .updateUser(uid, user)
            .then(
                function (status) {
                    res.send(200);
                },
                function (error) {
                    res.sendStatus(400).send(error);
                }
            );
    }


    function unregisterUser(req, res) {
        var uid = req.params.uid;
        model
            .userModel
            .removeUser(uid)
            .then(
                function (status) {
                    res.send(200);
                },
                function (error) {
                    res.sendStatus(400).send(error);
                }
            );
    }
};