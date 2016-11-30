module.exports = function (app) {
    console.log("hello from app.jQuery");
    var model = require("./models/model.server.js")();

    require("./services/user.service.server.js")(app, model);
    require("./services/website.service.server.js")(app, model);
    require("./services/page.service.server.js")(app, model);
    require("./services/widget.service.server.js")(app, model);
};