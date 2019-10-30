var express = require("express");
var router = express.Router();
var Medicine = require("../models/medicineModel");

router.post("/medicine", function(req, res) {
  var medicine = new Medicine({
    productId: req.body.productId,
    name: req.body.name,
    cp: req.body.cp,
    sp: req.body.sp,
    quantity: req.body.quantity,
    quantityPurchased: req.body.quantityPurchased
  });

  medicine.save(function(err, medicine) {
    if (err) {
      res.send.err;
    } else {
      res.json({ message: "Medicine Added", data: medicine });
    }
  });
});

router.get("/medicine/view", function(req, res) {
  Medicine.find({}, function(err, medicines) {
    if (err) {
      res.send(err);
    } else {
      res.json({ message: "Displaying all medicines", data: medicines });
    }
  });
});

router.get("/medicine/:name", function(req, res) {
  Medicine.find({ name: req.params.name }, function(err, medicine) {
    if (err) {
      res.send(err);
    } else {
      res.json({ message: "Here is your searched medicine", data: medicine });
    }
  });
});

router.get("/answer/:id", function(req, res) {
  Answers.findById(req.params.id, function(err, answer) {
    if (err) res.send(err);
    else {
      res.json({ message: "Answer Displayed", data: answer });
    }
  });
});

module.exports = router;
