const { tr } = require("faker/lib/locales");
const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema(
  {
    userId: { type: String, required: true },

    productId: {
      type: String,
    },
    quantity: {
      type: Number,
      default: 1,
    },
    size: {
      type: String,
      default: ''
    },
    color: {
      type: String,
      default: ''
    },

    productTitle: {
      type: String,
      required: true,
    },

    productImg: {
      type: String,
      required: true,
    },

    amount: { type: Number, required: true },

  },
  { timestamps: true }
);

module.exports = mongoose.model("Order", OrderSchema);