var mongoose = require("mongoose");

var medicineSchema = mongoose.Schema({
  productId: {
    type: String
  },
  name: {
    type: String
  },
  quantity: {
    type: Number
  },
  quantityPurchased: {
    type: Number
  },
  cp: {
    type: Number
  },
  sp: {
    type: Number
  },
  generatedBy: {
    type: String
  }
});

module.exports = mongoose.model("Medicine", medicineSchema);
