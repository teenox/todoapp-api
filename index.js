const express = require("express");
const cors = require("cors");
const cookieParser = require('cookie-parser');

const app = express();

var corsOptions = {
  origin: "*"
};

app.use(cors(corsOptions));

//middleware
app.use(cookieParser())

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: false }));

const db = require("./models");

db.sequelize.sync()
  .then(() => {
    console.log("Synced db.");
  })
  .catch((err) => {
    console.log("Failed to sync db: " + err.message);
  });

app.get('/', (req, res) => {
  res.json({ message: "Welcome to Todo application." });
});

require('./routes/todo.routes')(app);
require ('./routes/user.routes')(app);

// set port, listen for requests
const PORT = process.env.PORT || 8001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});