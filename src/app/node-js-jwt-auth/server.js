const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

var corsOptions = {
  origin: "http://localhost:8081"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

const db = require("./app/models");
const Role = db.role;

// Testing with no params
// db.sequelize.sync({force: false, alter: true}).then(() => {
//   console.log('Resync Db');
//   initial();
// });

db.sequelize.sync().then(() => {
  //console.log('Resync Db');
  initial();
});

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to Startland Portal application." });
});

// routes
require('./app/routes/auth.routes')(app);
require('./app/routes/user.routes')(app);
require('./app/routes/announcement.routes')(app);
<<<<<<< HEAD
require('./app/routes/reply.routes')(app);
=======
require('./app/routes/assignment.routes')(app);
>>>>>>> finalize-forum

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

function initial() {
  Role.create({
    id: 1,
    name: "user"
  });
 
  Role.create({
    id: 2,
    name: "admin"
  });
}