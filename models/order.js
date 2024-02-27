const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema(
  {
    userId: { type: String, required: true },
    products: [
      {
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
      },
    ],
    amount: { type: Number, required: true },

  },
  { timestamps: true }
);

module.exports = mongoose.model("Order", OrderSchema);