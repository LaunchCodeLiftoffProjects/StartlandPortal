const controller = require("../controllers/reply.controller");

module.exports = function(app) {
    app.use(function(req, res, next) {
        res.header(
            "Access-Control-Allow-Headers",
            "x-access-token, Origin, Content-Type, Accept"
        );
        next();
    });

    app.post("/api/reply/create", controller.create);

    app.get("/api/reply/getAll", controller.findAll);

    app.delete(`/api/reply/:id?`, controller.delete);

    app.put(`/api/reply/:id?`, controller.update);

};