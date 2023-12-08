let express = require("express");
const bodyParser = require("body-parser");
let app = express();

console.log("Hello World");
app.use("/name",bodyParser.urlencoded({ extended: false }));

app.use("/public", express.static(__dirname + "/public"));
//app.use("/", (req, res) => res.sendFile(`${__dirname}/views/index.html`))
//app.use("/public", express.static(`${__dirname}/public`))

app.post("/name", function(req, res) {
  // Handle the data in the request
  var string = req.body.first + " " + req.body.last;
  res.json({ name: string });
});


app.get("/name", (req, res) => {
  res.send({ name: `${req.query.first} ${req.query.last}` });
});

module.exports = app;
