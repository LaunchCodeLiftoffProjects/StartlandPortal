const controller = require("../controllers/announcement.controller");

module.exports = function(app) {
    app.use(function(req, res, next) {
        res.header(
            "Access-Control-Allow-Headers",
            "x-access-token, Origin, Content-Type, Accept"
        );
        next();
    });

    app.post("/api/announcement/create", controller.create);

    app.get("/api/announcement/getAll", controller.findAll);

    app.delete(`/api/announcement/:id?`, controller.delete);

    app.put(`/api/announcement/:id?`, controller.update);

};