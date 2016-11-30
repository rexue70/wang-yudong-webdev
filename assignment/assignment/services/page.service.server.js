module.exports = function (app, model) {

    app.post('/api/website/:websiteId/page', createPage);
    app.get('/api/website/:websiteId/page', findAllPagesForWebsite);
    app.get('/api/page/:pageId', findPageById);
    app.put('/api/page/:pageId', updatePage);
    app.delete('/api/page/:pageId', deletePage);

    function createPage(req, res) {
        console.log("good");
        var page = req.body;
        model.pageModel
            .createPage(req.params.websiteId, page)
            .then(function (page) {
                res.json(page);
            })
    }
    
    function findAllPagesForWebsite(req, res) {
        var websiteId = req.params.websiteId;
        model
            .pageModel
            .findAllPagesForWebsite(websiteId)
            .then(function (pages) {
                res.json(pages);
            });
    }
    
    function findPageById(req, res) {
        var pageId = req.params.pageId;
        model
            .pageModel
            .findPageById(pageId)
            .then(
                function (page) {
                    if (page) {
                        res.json(page);
                    } else {
                        res.send('0');
                    }
                },
                function (error) {
                    res.sendStatus(400).send(error);
                }
            );
    }
    
    function updatePage(req, res) {
        var page = req.body;
        var pageId = req.params.pageId;
        model
            .pageModel
            .updatePage(pageId, page)
            .then(
                function (status) {
                    res.send(200);
                },
                function (error) {
                    res.sendStatus(400).send(error);
                }
            );

    }
    
    function deletePage(req, res) {
        var pageId = req.params.pageId;
        model
            .pageModel
            .deletePage(pageId)
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