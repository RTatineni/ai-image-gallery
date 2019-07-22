require("dotenv").config();

var express = require("express");
var exphbs = require("express-handlebars");
var db = require("./models");
var app = express();
const fileRoutes = require("./routes/file-upload")
var cors = require("cors")
var PORT = process.env.PORT || 3000;
const bodyParser = require('body-parser');

// Middleware
app.use(cors());
app.options('*', cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static("public"));
app.use("/api/", fileRoutes)

// Handlebars
app.engine(
  "handlebars",
  exphbs({
    defaultLayout: "main"
  })
);
app.set("view engine", "handlebars");

// Routes
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);


var syncOptions = { force: false };

// If running a test, set syncOptions.force to true
// clearing the `testdb`
if (process.env.NODE_ENV === "test") {
  syncOptions.force = true;
}

app.listen(PORT, function() {
  console.log(
    "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
    PORT,
    PORT
  );
});

// Starting the server, syncing our models ------------------------------------/
// db.sequelize.sync(syncOptions).then(function() {
  
// });

module.exports = app;
