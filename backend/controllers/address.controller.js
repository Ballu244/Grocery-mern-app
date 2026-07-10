import Address from "../models/address.model.js";
import address from "../models/address.model.js";

/// add address :api/address/add

export const addAddress = async (req, res) => {
  try {
    //   console.log("req.user =", req.user);
    //   console.log("req.body =", req.body);
    //   console.log("req.body.address =", req.body.address);

    const userID = req.user;
    const { address } = req.body;
    await Address.create({
      ...address,
      userID,
    });
    res
      .status(201)
      .json({ message: "Address added  Succesfully", success: true });
  } catch (error) {
    console.error("Error adding address:", error);
    res.status(500).json({ message: "Internal Srver Error" });
  }
};
// export const addAddress = async (req, res) => {
//   try {
//     const userID = req.user;

//     await Address.create({
//       ...req.body,
//       userID,
//     });

//     res.status(201).json({
//       success: true,
//       message: "Address added Successfully",
//     });
//   } catch (error) {
//     console.error("Error adding address:", error);
//     res.status(500).json({
//       success: false,
//       message: error.message,
//     });
//   }
// };

// get address :/api/address/get

export const getAddress = async (req, res) => {
  try {
    const userID = req.user;
    const addresses = await Address.find({ userID }).sort({ createdAt: -1 });
    res.status(201).json({ success: true, addresses });
  } catch (error) {
    console.error("Error fetching address:", error);
    res.status(500).json({ message: "Internal Srver Error" });
  }
};
