module.exports = function (app) {
    console.log("hello from project app.jQuery");
    var model = require("./models/model.server.js")();
    require("./services/search.service.server")(app);
    require("./services/user.service.server")(app, model);

};