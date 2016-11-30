module.exports = function () {
    var model = {};
    var mongoose = require("mongoose");
    var WidgetSchema = require("./widget.schema.server")();
    var WidgetModel = mongoose.model("WidgetModel", WidgetSchema);

    var api = {
        createWidget: createWidget,
        findAllWidgetsForPage: findAllWidgetsForPage,
        findWidgetById: findWidgetById,
        updateWidget: updateWidget,
        deleteWidget: deleteWidget,
        reorderWidget: reorderWidget,
        setModel: setModel
    };
    return api;

    function setModel(_model) {
        model = _model;
    }


    function reorderWidget(pageId, start, end) {

    }


    function deleteWidget(widgetId) {
        return WidgetModel.remove({_id: widgetId});
    }

    function updateWidget(widgetId, widget) {
        return WidgetModel
            .update(
                {
                    _id: widgetId
                },
                {
                    _page: widget._page,
                    type: widget.type,
                    name: widget.name,
                    text: widget.text,
                    placeholder: widget.placeholder,
                    description: widget.description,
                    width: widget.width,
                    url : widget.url,
                    height: widget.height,
                    rows: widget.rows,
                    size: widget.size,
                    class: widget.class,
                    icon: widget.icon,
                    deletable: widget.deletable,
                    formatted: widget.formatted,
                    dateCreated: widget.dateCreated
                }
            );
    }

    function findWidgetById(widgetId) {
        return WidgetModel.findById(widgetId);
    }

    function findAllWidgetsForPage(pageId) {
        return WidgetModel.find(
            {"_page" : pageId}
        );
    }


    function createWidget(pageId, widget) {

        return WidgetModel
            .create(widget)
            .then(function (widgetObj) {
                return model.pageModel
                    .findPageById(pageId)
                    .then(function (pageObj) {
                        pageObj.widgets.push(widgetObj);
                        widgetObj._page = pageObj._id;
                        widgetObj.save();
                        return pageObj.save();
                    })
            })
    }

};