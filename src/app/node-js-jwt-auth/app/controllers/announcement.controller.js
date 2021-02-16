const db = require("../models");
const Announcement = db.announcement;
const Op = db.Sequelize.Op;

// Create and Save a new Announcement
exports.create = (req, res) => {
  
};

// Retrieve all Announcements from the database.
exports.findAll = (req, res) => {
  Announcement.create(req.body)
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