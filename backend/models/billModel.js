var mongoose = require("mongoose");
var Medicine = require("./medicineModel");

var billSchema = mongoose.Schema({
  customerName: {
    type: String
  },
  mobile: {
    type: String
  },
  address: {
    type: String
  },
  items: {
    type: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Medicine"
      }
    ]
  },
  billDate: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Bill", billSchema);
