module.exports = function (app) {

    app.get("/api/neighbor/:address", search);


    function search(req, res) {
        console.log("receive");
        var address = req.params.address;
        console.log(address);




        res.send(200);
    }

};