const controller = require("../controllers/assignment.controller");

module.exports = function(app) {
    app.use(function(req, res, next) {
        res.header(
            "Access-Control-Allow-Headers",
            "x-access-token, Origin, Content-Type, Accept"
        );
        next();
    });

    app.post("/api/assignment/create", controller.create);

    app.get("/api/assignment/getAll", controller.findAll);

    app.delete(`/api/assignment/:id?`, controller.delete);

    app.put(`/api/assignment/:id?`, controller.update);

};