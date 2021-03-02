const db = require("../models");
const User = db.user;
const Op = db.Sequelize.Op;

exports.allAccess = (req, res) => {
    res.status(200).send("Public Content.");
  };
  
  exports.userBoard = (req, res) => {
    res.status(200).send("User Content.");
  };
  
  exports.adminBoard = (req, res) => {
    res.status(200).send("Admin Content.");
  };

  // Retrieve all Users from the database.
exports.findAll = (req, res) => {
  User.findAll()
    .then(users => {
      res.status(200).send(users);
    })
    .catch(err => {
      res.status(500).send({ message: err.message });
    });
};

// Update a User by the id in the request
exports.update = (req, res) => {
  User.update({ username: req.body.username, email: req.body.email }, { where: { id: req.params.id }
  })
  .then(() => {
    res.send({ message: "User updated successfully!" });
  })
    .catch(err => {
      res.status(500).send({ message: err.message });
    })
  };

  // Find a single User with an user id
exports.findSelectedUser = (req, res) => {
  User.findOne({ where: {id: req.params.id }})
  .then(user => {
    res.status(200).send(user);
  })
  .catch(err => {
    res.status(500).send({ message: err.message });
  });
};
