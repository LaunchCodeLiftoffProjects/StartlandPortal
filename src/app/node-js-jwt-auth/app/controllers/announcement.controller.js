const { announcement } = require("../models");
const db = require("../models");
const Announcement = db.announcement;
const Op = db.Sequelize.Op;

// Create and Save a new Announcement
exports.create = (req, res) => {
  Announcement.create({
    content: req.body.content,
    hyperlink: req.body.hyperlink
  })
  .then(() => {
    res.send({ message: "Announcement was added successfully!" });
  })
  .catch(err => {
    res.status(500).send({ message: err.message });
  })
};

// Retrieve all Announcements from the database.
exports.findAll = (req, res) => {
  Announcement.findAll()
    .then(announcements => {
      res.status(200).send(announcements);
    })
    .catch(err => {
      res.status(500).send({ message: err.message });
    });
};

// Find a single Announcement with an id
exports.findOne = (req, res) => {
  
};

// Update Announcement Text by the id in the request
exports.updateText = (req, res) => {
  Announcement.update({ content: req.body.content }, { where: { id: req.params.id }
  })
  .then(() => {
    res.send({ message: "Announcement updated successfully!" });
  })
    .catch(err => {
      res.status(500).send({ message: err.message });
    })
  };

// Update Announcement Link by the id in the request
exports.updateLink = (req, res) => {
  Announcement.update({ hyperlink: req.body.hyperlink }, { where: { id: req.params.id }
  })
  .then(() => {
    res.send({ message: "Announcement updated successfully!" });
  })
    .catch(err => {
      res.status(500).send({ message: err.message });
    })
  };

// Delete an Announcement with the specified id in the request
exports.delete = (req, res) => {
  Announcement.destroy({
    where: {
      id: req.params.id
    }
  })
  .then(() => {
    res.send({ message: "Announcement was deleted successfully!" });
  })
    .catch(err => {
      res.status(500).send({ message: err.message });
    })
  };

// Delete all Announcements from the database.
exports.deleteAll = (req, res) => {
  
};