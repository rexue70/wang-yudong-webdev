module.exports = function () {
    var model = {};
    var mongoose = require("mongoose");
    var UserSchema = require("./user.schema.server")();
    var UserModel = mongoose.model("UserModel", UserSchema);


    var api = {
        createUser: createUser,
        findUserById: findUserById,
        findUserByUsername: findUserByUsername,
        findUserByCredentials: findUserByCredentials,
        findWebsitesByUser: findWebsitesByUser,
        updateUser: updateUser,
        removeUser: removeUser,
        setModel: setModel

    };
    return api;

    function setModel(_model) {
        model = _model;
    }

    function findUserByUsername(username) {
        // console.log("#4 findUserByUsername model");
        // console.log(username);
        // console.log("#4 findUserByUsername");
        return UserModel.findOne({
            username: username
        });
    }

    function findWebsitesByUser(userId) {
        return UserModel
            .findById(userId)
            .populate("websites", "name")
            .exec();

    }

    function removeUser(userId) {
        return UserModel.remove({_id: userId});
    }


    function findUserByCredentials(username, password) {
        console.log("#4 findUserByCredentials model");
        console.log(username);
        console.log(password);
        console.log("#4 findUserByCredentials");
        return UserModel.findOne({
            username: username,
            password: password
        });
    }

    function updateUser(userId, user) {
        return UserModel
            .update(
                {
                    _id: userId
                },
                {
                    firstName: user.firstName,
                    lastName: user.lastName,
                    email: user.email,
                    phone: user.phone
                }
            );
    }


    function findUserById(userId) {
        // UserModel.find({_id:userId}) //method one  --> returns an array
        // method two
        return UserModel.findById(userId);
    }

    function createUser(user) {
        return UserModel.create(user)
    }

};