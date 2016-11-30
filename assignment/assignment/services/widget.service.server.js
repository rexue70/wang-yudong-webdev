module.exports = function (app, model) {

    var multer = require('multer'); // npm install multer --save
    var upload = multer({dest: __dirname + '/../../public/assignment/uploads'});

    app.put("/api/widget", updateIndex);
    app.post("/api/upload", upload.single('myFile'), uploadImage);
    app.put("/page/:pageId/widget?start=index1&end=index2");


    app.post('/api/page/:pageId/widget', createWidget);
    app.get('/api/page/:pageId/widget', findAllWidgetsForPage);
    app.get('/api/widget/:widgetId', findWidgetById);
    app.put('/api/widget/:widgetId', updateWidget);
    app.delete('/api/widget/:widgetId', deleteWidget);


    function uploadImage(req, res) {
        console.log("inside uploadImage");

        var userId = req.body.uid;
        var websiteId = req.body.wid;
        var pageId = req.body.pid;
        var widgetId = req.body.wgid;
        var width = req.body.width;
        var myFile = req.file;


        console.log("userId " + userId);
        console.log("websiteId " + websiteId);
        console.log("pageId " + pageId);
        console.log("widgetId " + widgetId);
        console.log("width " + width);
        console.log("myFile " + myFile);


        var originalname = myFile.originalname; // file name on user's computer
        var filename = myFile.filename;     // new file name in upload folder
        var path = myFile.path;         // full path of uploaded file
        var destination = myFile.destination;  // folder where file is saved to
        var size = myFile.size;

        var newUrl = '/assignment/uploads/' + filename;
        var updateOne = {
            "_id": widgetId,
            "name": filename,
            "type": "IMAGE",
            "text": req.body.text,
            "url": newUrl,
            "width": width,
            "_page": pageId
        };

        console.log("push success");
        console.log(updateOne.url);
        model
            .widgetModel
            .updateWidget(widgetId, updateOne)
            .then(
                function (status) {
                    var url = '/assignment/index.html#/user/' + userId + '/website/' + websiteId + '/page/' + pageId + '/widget/';
                    res.redirect(url);
                },
                function (error) {
                    res.sendStatus(400).send(error);
                }
            );
    }

    function updateIndex(req, res) {
        // var start = req.query.start;
        // var end = req.query.end;
        // widgets.splice(end, 0, widgets.splice(start, 1)[0]);
    }

    function createWidget(req, res) {
        var widget = req.body;
        model
            .widgetModel
            .createWidget(widget._page, widget)
            .then(function (page) {
                var widgetId = page.widgets[page.widgets.length - 1];
                res.send(widgetId);
            })
    }

    function findAllWidgetsForPage(req, res) {
        var pid = req.params.pageId;
        model
            .widgetModel
            .findAllWidgetsForPage(pid)
            .then(function (widgets) {
                    if (widgets) {
                        res.json(widgets);
                    } else {
                        res.json([]);
                    }
                },
                function (error) {
                    res.sendStatus(400).send(error);
                }
            )
    }

    function findWidgetById(req, res) {
        var widgetId = req.params.widgetId;
        model
            .widgetModel
            .findWidgetById(widgetId)
            .then(
                function (widget) {
                    if (widget) {
                        res.json(widget);
                    } else {
                        res.send('0');
                    }
                },
                function (error) {
                    res.sendStatus(400).send(error);
                }
            );
    }

    function updateWidget(req, res) {
        var widget = req.body;
        var widgetId = req.params.widgetId;
        model
            .widgetModel
            .updateWidget(widgetId, widget)
            .then(
                function (status) {
                    res.send(200);
                },
                function (error) {
                    res.sendStatus(400).send(error);
                }
            );
    }

    function deleteWidget(req, res) {
        var widgetId = req.params.widgetId;
        model
            .widgetModel
            .deleteWidget(widgetId)
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