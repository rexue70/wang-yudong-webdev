module.exports = function () {
    var mongoose = require("mongoose");
    // mongoose.connect("mongodb://yudong:yudong@ds033086.mlab.com:33086/yudong");
    mongoose.connect("mongodb://localhost/wam-fall-2017");

    var userModel = require("./user/user.model.server")();
    var websiteModel = require("./website/website.model.server")();
    var pageModel = require("./page/page.model.server")();
    var widgetModel = require("./widget/widget.model.server")();


    var model = {
        userModel: userModel,
        websiteModel: websiteModel,
        pageModel: pageModel,
        widgetModel: widgetModel
    };


    userModel.setModel(model);
    websiteModel.setModel(model);
    pageModel.setModel(model);
    widgetModel.setModel(model);

    return model;
};