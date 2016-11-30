module.exports = function () {
    var model = {};
    var mongoose = require("mongoose");
    var PageSchema = require("./page.schema.server")();
    var PageModel = mongoose.model("PageModel", PageSchema);


    var api = {
        createPage: createPage,
        findAllPagesForWebsite: findAllPagesForWebsite,
        findPageById: findPageById,
        updatePage: updatePage,
        deletePage: deletePage,
        setModel: setModel

    };
    return api;

    function setModel(_model) {
        model = _model;
    }

    function deletePage(pageId) {
        return PageModel.remove({_id: pageId});
    }

    function updatePage(pageId, page) {
        return PageModel
            .update(
                {
                    _id: pageId
                },
                {
                    _website: page._website,
                    name: page.name,
                    title: page.title,
                    description: page.description,
                    widgets: page.widgets,
                    dateCreated: page.dateCreated
                }
            );
    }

    function findPageById(pageId) {
        return PageModel.findById(pageId);
    }

    function findAllPagesForWebsite(websiteId) {
        return model.websiteModel
            .findWebsiteById(websiteId)
            .populate("pages", "name")
            .exec();
    }


    function createPage(websiteId, page) {
        return PageModel
            .create(page)
            .then(function (pageObj) {
                return model.websiteModel
                    .findWebsiteById(websiteId)
                    .then(function (websiteObj) {
                        websiteObj.pages.push(pageObj);
                        pageObj._website = websiteObj._id;
                        pageObj.save();
                        return websiteObj.save();
                    })
            })
    }

};