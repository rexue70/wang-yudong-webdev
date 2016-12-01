module.exports = function (app) {

    app.get("/api/neighbor/:uid", search);


    function search(req, res) {
        console.log("receive");
        res.send(200);
    }
};