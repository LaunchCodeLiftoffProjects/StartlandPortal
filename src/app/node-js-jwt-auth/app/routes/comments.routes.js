const controller = require("../controllers/comments.controller");

module.exports = function(app) {
    app.use(function(req, res, next) {
        res.header(
            "Access-Control-Allow-Headers",
            "x-access-token, Origin, Content-Type, Accept"
        );
        next();
    });

    app.post("/api/comments/create", controller.create);

    app.get("/api/comments/getAll", controller.findAll);

    app.delete(`/api/comments/:id?`, controller.delete);

    app.put(`/api/comments/:id?`, controller.update);


};