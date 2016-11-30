module.exports = function (app, model) {

    app.post('/api/user/:userId/website', createWebsite);
    app.get('/api/user/:userId/websites', findWebsitesByUser);
    app.get('/api/website/:websiteId', findWebsiteById);
    app.put('/api/website/:websiteId', updateWebsite);
    app.delete('/api/website/:websiteId', deleteWebsite);


    function createWebsite(req, res) {
        var website = req.body;
        model.websiteModel
            .createWebsite(req.params.userId, website)
            .then(function (website) {
                console.log(website);
                res.json(website);
            })
    }

    function findWebsitesByUser(req, res) {
        model
            .websiteModel
            .findWebsitesByUser(req.params.userId)
            .then(function (websites) {
                res.json(websites);
            });
    }

    function findWebsiteById(req, res) {
        var websiteId = req.params.websiteId;
        model
            .websiteModel
            .findWebsiteById(websiteId)
            .then(
                function (website) {
                    if (website) {
                        res.json(website);
                    } else {
                        res.send('0');
                    }
                },
                function (error) {
                    res.sendStatus(400).send(error);
                }
            );
    }

    function updateWebsite(req, res) {
        var website = req.body;
        var websiteId = req.params.websiteId;
        model
            .websiteModel
            .updateWebsite(websiteId, website)
            .then(
                function (status) {
                    res.send(200);
                },
                function (error) {
                    res.sendStatus(400).send(error);
                }
            );
    }

    function deleteWebsite(req, res) {
        var websiteId = req.params.websiteId;
        model
            .websiteModel
            .deleteWebsite(websiteId)
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