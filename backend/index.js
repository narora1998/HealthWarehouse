var express = require("express");
var mongoose = require("mongoose");
var cors = require("cors");
var bodyparser = require("body-parser");
var app = express();
var billRoutes = require("./routes/billRoutes");
var medicineRoutes = require("./routes/medicineRoutes");

var port = process.env.port | 8000;

mongoose.connect("mongodb://localhost/HealthWarehouse", {
  useNewUrlParser: true
});

app.use(bodyparser.json());
app.use(
  bodyparser.urlencoded({
    extended: true
  })
);
app.use(cors());

app.use("/", billRoutes);
app.use("/", medicineRoutes);
app.listen(port, () => {
  console.log("listening on port:", port);
});
