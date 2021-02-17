const db = require("../models");
const Announcement = db.announcement;
const Op = db.Sequelize.Op;

// Create and Save a new Announcement
exports.create = (req, res) => {
  Announcement.create({
    content: req.body.content
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
  
};

// Find a single Announcement with an id
exports.findOne = (req, res) => {
  
};

// Update an Announcement by the id in the request
exports.update = (req, res) => {
  
};

// Delete an Announcement with the specified id in the request
exports.delete = (req, res) => {
  
};

// Delete all Announcements from the database.
exports.deleteAll = (req, res) => {
  
};