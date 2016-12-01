module.exports = function (app, model) {
    // var userModel = require("../models/user/user.model.server");
    var passport = require('passport');
    var LocalStrategy = require('passport-local').Strategy;
    var cookieParser = require('cookie-parser');
    var session = require('express-session');
    var bcrypt = require("bcrypt-nodejs");

    app.use(session({
        secret: 'this is the secret',
        resave: true,
        saveUninitialized: true
    }));
    app.use(cookieParser());
    app.use(passport.initialize());
    app.use(passport.session());
    passport.use(new LocalStrategy(localStrategy));
    passport.serializeUser(serializeUser);
    passport.deserializeUser(deserializeUser);

    app.post('/api/register', register);
    app.post('/api/login', passport.authenticate('local'), login);
    app.post('/api/checkLogin', checkLogin);
    app.post('/api/user', createUser);
    app.post('/api/logout', logout);
    app.get('/api/user', findUser);
    app.get('/api/user/:uid', findUserById);
    app.put('/api/user/:uid', updateUser);
    app.delete('/api/user/:uid', unregisterUser);


    function register(req, res) {
        var user = req.body;
        // user.password = bcrypt.hashSync(user.password);
        userModel
            .createUser(user)
            .then(
                function (user) {
                    if (user) {
                        req.login(user, function (err) {
                            if (err) {
                                res.status(400).send(err);
                            } else {
                                res.json(user);
                            }
                        });
                    }
                }
            );
    }


    function logout(req, res) {
        req.logout();
        res.send(200);
    }


    function checkLogin(req, res) {
        res.send(req.isAuthenticated() ? req.user : '0');
    }


    function serializeUser(user, done) {
        done(null, user);
    }

    function deserializeUser(user, done) {
        model
            .userModel
            .findUserById(user._id)
            .then(
                function (user) {
                    done(null, user);
                },
                function (err) {
                    done(err, null);
                }
            );
    }

    function localStrategy(username, password, done) {

        // console.log("#3 local strategy");
        // console.log(username);
        // console.log(password);
        // console.log("#3 local strategy");
        model
            .userModel
            .findUserByUsername(username)
            .then(
                function (user) {
                    // console.log("receive back");
                    // console.log(user);
                    // console.log("inside the local strategy");
                    // console.log(password);
                    // // console.log(user.password);
                    // console.log("inside the local strategy");
                    if (user) {
                        if(user && bcrypt.compareSync(password, user.password)) {
                            return done(null, user);
                        } else {
                            return done(null, false);
                        }
                    } else {
                        return done(null, false);
                    }
                },
                function (error) {
                    res.sendStatus(400).send(error);
                }
            );
    }


    function login(req, res) {
        var user = req.user;
        res.json(user);
     }


    function createUser(req, res) {
        var user = req.body;
        user.password = bcrypt.hashSync(user.password);

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
        if (query.username && query.password) {
            findUserByCredentials(req, res);
        } else {
            res.send('0');
        }

    }

    function findUserByCredentials(req, res) {
        var username = req.query.username;
        var password = req.query.password;
        model
            .userModel
            .findUserByCredentials(username, password)
            .then(
                function (users) {
                    if (users) {
                        if (users[0]) {
                            res.json(users[0]);
                        } else {
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
    }

    function findUserByUsername(req, res) {
        var username = req.query.username;
    }

    function findUserById(req, res) {
        var userId = req.params.uid;
        model
            .userModel
            .findUserById(userId)
            .then(
                function (user) {

                    if (user) {
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