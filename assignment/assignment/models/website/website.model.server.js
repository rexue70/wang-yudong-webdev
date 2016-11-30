module.exports = function () {
    var model = {};
    var mongoose = require("mongoose");
    var WebsiteSchema = require("./website.schema.server")();
    var WebsiteModel = mongoose.model("WebsiteModel", WebsiteSchema);


    var api = {
        createWebsite: createWebsite,
        findWebsitesByUser: findWebsitesByUser,
        findWebsiteById: findWebsiteById,
        updateWebsite: updateWebsite,
        deleteWebsite:deleteWebsite,
        setModel: setModel

    };
    return api;

    function setModel(_model) {
        model = _model;
    }

    function deleteWebsite(websiteId) {
        return WebsiteModel.remove({_id: websiteId});
    }
    
    function updateWebsite(websiteId, website) {
        return WebsiteModel
            .update(
                {
                    _id: websiteId
                },
                {
                    _user: website._user,
                    name: website.name,
                    description: website.description,
                    pages: website.pages,
                    dateCreated: website.dateCreated
                }
            );
    }

    function findWebsiteById(websiteId) {
        return WebsiteModel.findById(websiteId);
    }

    function findWebsitesByUser(userId) {
        return model.userModel.findWebsitesByUser(userId);
    }


    function createWebsite(userId, website) {
        return WebsiteModel
            .create(website)
            .then(function (websiteObj) {
                return model.userModel
                    .findUserById(userId)
                    .then(function (userObj) {
                        userObj.websites.push(websiteObj);
                        websiteObj._user = userObj._id;
                        websiteObj.save();
                        return userObj.save();
                    });
            })
    }

};