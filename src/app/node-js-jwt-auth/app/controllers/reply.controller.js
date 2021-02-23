const db = require("../models");
const Reply = db.reply;
const Op = db.Sequelize.Op;

// Create and Save a new Reply
exports.create = (req, res) => {
  Reply.create({
    assignmentId: req.body.assignmentId,
    userId: req.body.userId,
    content: req.body.content
  })
  .then(() => {
    res.send({ message: "Reply was added successfully!" });
  })
  .catch(err => {
    res.status(500).send({ message: err.message });
  })
};

// Retrieve all Replies from the database.
exports.findAll = (req, res) => {
  Reply.findAll()
    .then(replies => {
      res.status(200).send(replies);
    })
    .catch(err => {
      res.status(500).send({ message: err.message });
    });
};

// Find a single Reply with an id
exports.findOne = (req, res) => {
  
};

// Update a Reply by the id in the request
exports.update = (req, res) => {
  Reply.update({ content: req.body.content }, { where: { id: req.params.id }
  })
  .then(() => {
    res.send({ message: "Reply updated successfully!" });
  })
    .catch(err => {
      res.status(500).send({ message: err.message });
    })
  };

// Delete a Reply with the specified id in the request
exports.delete = (req, res) => {
  Reply.destroy({
    where: {
      id: req.params.id
    }
  })
  .then(() => {
    res.send({ message: "Reply was deleted successfully!" });
  })
    .catch(err => {
      res.status(500).send({ message: err.message });
    })
  };

// Delete all Replies from the database.
exports.deleteAll = (req, res) => {
  
};