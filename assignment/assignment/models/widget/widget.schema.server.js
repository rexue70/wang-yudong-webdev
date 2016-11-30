module.exports = function () {
    var mongoose = require("mongoose");
    var WidgetSchema = mongoose.Schema({
        _page: {type: mongoose.Schema.Types.ObjectId, ref: "PageModel"},
        type: {type: String, enum: ['HEADER', 'IMAGE', 'YOUTUBE', 'HTML', 'TEXT']},
        name: String,
        text: String,
        placeholder: String,
        description: String,
        url: String,
        width: String,
        height: String,
        rows: String,
        size: String,
        class: String,
        icon: String,
        deletable: String,
        formatted: String,
        dateCreated: {type: Date, default: Date.now}
    }, {collection: "widget"});
    return WidgetSchema;
};