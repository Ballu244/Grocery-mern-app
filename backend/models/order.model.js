import mongoose from "mongoose";

const orderSchema = new mongoose.Schema(
  {
    userID: {
      type: String,
      required: true,
    },
    items: [
      {
        product: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Product",
          required: true,
        },
        quantity: {
          type: Number,
          required: true,
        },
      },
    ],
    address: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Address",
      required: true,
    },
    amount: {
      type: Number,
      required: true,
    },
    paymentType: String,
    isPaid: Boolean,
  },
  { timestamps: true },
);
const Order = mongoose.model("Order", orderSchema);
export default Order;
