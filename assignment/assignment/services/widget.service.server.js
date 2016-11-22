module.exports = function (app) {
    var widgets = [
        {"_id": "123", "widgetType": "HEADER", "pageId": "321", "size": 2, "text": "GIZMODO"},
        {"_id": "234", "widgetType": "HEADER", "pageId": "321", "size": 4, "text": "Lorem ipsum"},
        {
            "_id": "345",
            "widgetType": "IMAGE",
            "pageId": "321",
            "width": "100%",
            "url": "http://lorempixel.com/400/200/"
        },
        {"_id": "456", "widgetType": "HTML", "pageId": "321", "text": "<p>Lorem ipsum</p>"},
        {"_id": "567", "widgetType": "HEADER", "pageId": "321", "size": 4, "text": "Lorem ipsum"},
        {
            "_id": "678", "widgetType": "YOUTUBE", "pageId": "321", "width": "100%",
            "url": "https://youtu.be/AM2Ivdi9c4E"
        },
        {"_id": "789", "widgetType": "HTML", "pageId": "321", "text": "<p>Lorem ipsum</p>"}
    ];


    var multer = require('multer'); // npm install multer --save
    var upload = multer({dest: __dirname + '/../../public/assignment/uploads'});

    app.put("/api/widget", updateIndex);
    app.post("/api/upload", upload.single('myFile'), uploadImage);



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
        console.log("websiteId "+websiteId);
        console.log("pageId " +pageId);
        console.log("widgetId " +widgetId);
        console.log("width " +width);
        console.log("myFile " +myFile);


        var originalname = myFile.originalname; // file name on user's computer
        var filename = myFile.filename;     // new file name in upload folder
        var path = myFile.path;         // full path of uploaded file
        var destination = myFile.destination;  // folder where file is saved to
        var size = myFile.size;

        var newUrl = '/assignment/uploads/' + filename;
        var updateOne = {
            "_id":widgetId,
            "name": filename,
            "widgetType": "IMAGE",
            "text": req.body.text,
            "url": newUrl,
            "width": width,
            "pageId": pageId
        };

        var indexOfOrigin = -1;
        for (var i = 0; i < widgets.length; i++) {
            if (widgets[i]._id == updateOne._id) {
                indexOfOrigin = i;
                widgets[i] = updateOne;
                break;
            }
        }
        // if (indexOfOrigin === -1) {
        //     widgets.push(updateOne);
        // }
        console.log("push success");
        console.log(updateOne.url);
        var url = '/assignment/index.html#/user/' + userId + '/website/' + websiteId + '/page/' + pageId + '/widget/';
        res.redirect(url);
    }

    function updateIndex(req, res) {
        var start = req.query.start;
        var end = req.query.end;
        widgets.splice(end, 0, widgets.splice(start, 1)[0]);
    }



    function createWidget(req, res) {
        var widget = req.body;
        widgets.push(widget);
        res.send(widgets);
    }

    function findAllWidgetsForPage(req, res) {
        var pid = req.params.pageId;
        var result = [];
        for (var w in widgets) {
            if (widgets[w].pageId == pid) {
                result.push(widgets[w]);
            }
        }
        res.send(result);
    }

    function findWidgetById(req, res) {
        var widgetId = req.params.widgetId;
        for (var w in widgets) {
            if (widgets[w]._id == widgetId) {
                res.send(widgets[w]);
                return;
            }
        }
        res.send('0');
    }

    function updateWidget(req, res) {
        var widget = req.body;
        var widgetId = req.params.widgetId;
        for (var w in widgets) {
            if (widgets[w]._id == widgetId) {
                widgets[w] = widget;
            }
        }
        res.send(200);
    }

    function deleteWidget(req, res) {
        var widgetId = req.params.widgetId;
        for (var w in widgets) {
            if (widgets[w]._id == widgetId) {
                widgets.splice(w, 1);
            }
        }
        res.send(200);
    }

};