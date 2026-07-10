import Order from "../models/order.model.js";
import Product from "../models/product.model.js";
// place Order COD: /api/order/cod

export const placeOrderCOD = async (req, res) => {
  try {
    const userID = req.user;
    const { items, address } = req.body;
    if (!items || !address) {
      return res
        .status(400)
        .json({ message: "Items and Address are Required", success: true });
    }
    let amount = await items.reduce(async (acc, item) => {
      const product = await Product.findById(item.product);
      return (await acc) + product.offerPrice * item.quantity;
    }, 0);

    // add tex charfe 2%

    amount += Math.floor((amount * 2) / 100);
    await Order.create({
      userID,
      items,
      address,
      amount,
      paymentType: "COD",
      isPaid: false,
    });
    res.status(201).json({
      message: "Order Place Succesfully",
      success: true,
    });
  } catch (error) {
    console.error("Error placing Order:", error);
    res
      .status(500)
      .json({ message: "Internal Srver Error", error: error.message });
  }
};

// order details for individual user : /api/order/user

export const getUserOrders = async (req, res) => {
  try {
    const userID = req.user;
    const orders = await Order.find({
      userID,
      $or: [{ paymentType: "COD" }, { isPaid: false }],
    })
      .populate("items.product address")
      .sort({ createdAt: -1 });
    res.status(201).json({ success: true, orders });
  } catch (error) {
    console.error("Error fetching user Orders:", error);
    res.status(500).json({ message: "Internal Srver Error User Order page " });
  }
};

// get all order for admin :/api/order/seller

export const getAllOrders = async (req, res) => {
  try {
    // const userID = req.user;
    // const orders = await Order.find({
    //   userID,
    //   $or: [{ paymentType: "COD" }, { isPaid: true }],
    // });

    const orders = await Order.find({
      $or: [{ paymentType: "COD" }, { isPaid: true }],
    })
      .populate("items.product address")
      .sort({ createdAt: -1 });
    res.status(200).json({ success: true, orders });
  } catch (error) {
    console.error("Error fetching all Orders:", error);
    res.status(500).json({ message: "Internal Srver Error In All Order" });
  }
};
