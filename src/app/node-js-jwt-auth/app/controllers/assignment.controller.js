const db = require("../models");
const Assignment = db.assignment;
const Op = db.Sequelize.Op;

// Create and Save a new Assignment
exports.create = (req, res) => {
  Assignment.create({
    name: req.body.name,
    moduleNum: req.body.moduleNum,
    link: req.body.link,
    userId: req.body.userId
  })
  .then(() => {
    res.send({ message: "Assignment was added successfully!" });
  })
  .catch(err => {
    res.status(500).send({ message: err.message });
  })
};

// Retrieve all Assignments from the database.
exports.findAll = (req, res) => {
  Assignment.findAll()
    .then(assignments => {
      res.status(200).send(assignments);
    })
    .catch(err => {
      res.status(500).send({ message: err.message });
    });
};

// Find a single Assignment with an id
exports.findOne = (req, res) => {
  
};

// Update an Assignment by the id in the request
exports.update = (req, res) => {
  Assignment.update({ link: req.body.link }, { where: { id: req.params.id }
  })
  .then(() => {
    res.send({ message: "Assignment updated successfully!" });
  })
    .catch(err => {
      res.status(500).send({ message: err.message });
    })
  };

// Delete an Assignment with the specified id in the request
exports.delete = (req, res) => {
  Assignment.destroy({
    where: {
      id: req.params.id
    }
  })
  .then(() => {
    res.send({ message: "Assignment was deleted successfully!" });
  })
    .catch(err => {
      res.status(500).send({ message: err.message });
    })
  };

// Delete all Assignments from the database.
exports.deleteAll = (req, res) => {
  
};