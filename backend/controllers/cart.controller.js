import User from "../models/user.model.js";

// upadate user cart Data: /api/cart/update

export const updateCart = async (req, res) => {
  try {
    const userID = req.user;
    const { cartItems } = req.body;
    const updatedUser = await User.findByIdAndUpdate(
      userID,
      { cartItems },
      { returnDocument: "after" },
    );

    if (!updatedUser) {
      return res
        .status(404)
        .json({ message: "User Not Found", success: false });
    }
    res.status(200).json({
      updatedUser,
      success: true,
      message: "Cart Updated Successfully",
    });
  } catch (error) {
    res.status(500).json({ message: "Srver Error", error: error.message });
  }
};
