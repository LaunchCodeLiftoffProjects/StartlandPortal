const db = require("../models");
const Comment = db.comment;
const Op = db.Sequelize.Op;

// Create and Save a new comment
exports.create = (req, res) => {
  Comment.create({
    assignmentId: req.body.assignmentId,
    userId: req.body.userId,
    content: req.body.comment
  })
  .then(() => {
    res.send({ message: "Comment was added successfully!" });
  })
  .catch(err => {
    res.status(500).send({ message: err.message });
  })
};

// Retrieve all Comments from the database.
exports.findAll = (req, res) => {
  Comment.findAll()
    .then(comments => {
      res.status(200).send(comments);
    })
    .catch(err => {
      res.status(500).send({ message: err.message });
    });
};

// Find a single Comment with an id
exports.findOne = (req, res) => {
  
};

// Update a Comment by the id in the request
exports.update = (req, res) => {
  Comment.update({ content: req.body.content }, { where: { id: req.params.id }
  })
  .then(() => {
    res.send({ message: "Comment updated successfully!" });
  })
    .catch(err => {
      res.status(500).send({ message: err.message });
    })
  };

// Delete a Comment with the specified id in the request
exports.delete = (req, res) => {
  Comment.destroy({
    where: {
      id: req.params.id
    }
  })
  .then(() => {
    res.send({ message: "Comment was deleted successfully!" });
  })
    .catch(err => {
      res.status(500).send({ message: err.message });
    })
  };

// Delete all Comments from the database.
exports.deleteAll = (req, res) => {
  
};