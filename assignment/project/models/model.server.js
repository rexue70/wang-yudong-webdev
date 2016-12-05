module.exports = function () {
    var mongoose = require("mongoose");
    // mongoose.connect("mongodb://yudong:yudong@ds033086.mlab.com:33086/yudong");
    mongoose.connect("mongodb://localhost/project-fall-2017");

    var userModel = require("./user/user.model.server")();



    var model = {
        userModel: userModel
     };


    userModel.setModel(model);

    return model;
};