const { error } = require("console");
const generateToken = require("../config/jwtToken");
const User = require("../models/userModel");
const Cart = require("../models/CartModel")
const asyncHandler = require("express-async-handler");
const axios = require("axios");

const session = require('express-session');

const createUser = async (req, res) => {
  try {
    const mobile = req.body.mobile;
    const findUser = await User.findOne({ mobile });

    if (findUser) {
      // User already exists
      return res.status(400).json({
        msg: "User already exists",
        success: false,
      });
    }

    // Create a new user
    const newUser = await User.create(req.body);
    res.status(201).json(newUser);
  } catch (error) {
    console.error(error);
    res.status(500).json({
      msg: "An error occurred",
      success: false,
    });
  }
};

const loginUserCtrl = asyncHandler(async (req, res) => {
  const { mobile } = req.body;
  try {
    const findUser = await User.findOne({ mobile });
    if (findUser) {
      // Generate and send OTP to the user's mobile number
      const accountSid = "AC1f4174e615aa1e8cbaaddf35ad2f1104";
      const authToken = "cd4b3944e06e884d562bb2b52000096e";
      const verifySid = "VA44abaf5811c16c7ea7c26d00c234a61e";
      const client = require("twilio")(accountSid, authToken);

      req.session.userId = findUser._id;

      client.verify
        .services(verifySid)
        .verifications.create({ to: mobile, channel: "sms" })
        .then((verification) => {
          const responseMsg = {
            msg: "OTP sent successfully",
            success: true,
            mobile: mobile, // Include the mobile number in the response
            otpStatus: verification.status, // Include OTP status in the response
          };
          res.json(responseMsg);
        })
        .catch((error) => {
          console.error("Error sending OTP:", error);
          res.status(500).json({
            msg: "Error sending OTP",
            success: false,
          });
        });
    } else {
      // User doesn't exist
      res.status(200).json({
        msg: "Error sending OTP",
        success: false,
        mobile: mobile, // Include the mobile number in the response
        otpStatus: "User not found", // Provide an appropriate status
      });
      console.log("User not found");
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({
      msg: "An error occurred",
      success: false,
      mobile: mobile, // Include the mobile number in the response
      otpStatus: "Error occurred", // Provide an appropriate status
    });
  }
});

// for verifying otp
const verifyOtpCtrl = asyncHandler(async (req, res) => {
  const { mobile, otp } = req.body;

  try {
    // First, find the user by mobile number
    const findUser = await User.findOne({ mobile });

    if (!findUser) {
      return res.status(400).json({
        success: false,
        msg: "User not found",
      });
    }

    // Now, verify the OTP using Twilio
    const accountSid = "AC0af3a8ecc541f6da456e6a29d0d656bc";
    const authToken = "dc760f08947b6734283bee68b812cfdb";
    const verifySid = "VA3e3e54786b286fd0c9b86bed1a5936a4";
    const client = require("twilio")(accountSid, authToken);

    // Verify the OTP
    const verificationCheck = await client.verify
      .services(verifySid)
      .verificationChecks.create({
        to: mobile,
        code: otp,
      });

    // Check the verification status
    if (verificationCheck.status === "approved") {
      // OTP is valid
      return res.status(200).json({
        success: true,
        msg: "OTP is valid",
      });
    } else {
      // OTP is invalid
      return res.status(400).json({
        success: false,
        msg: "Invalid OTP",
      });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      msg: "An error occurred",
    });
  }
});

//update a user data

const updateaUser = async (req, res) => {
  console.log(req.params);
  const { id } = req.params;
  console.log("Received user ID:", id);
  try {
    // Check if the user with the specified id exists
    const existingUser = await User.findById(id);

    if (!existingUser) {
      return res.status(404).json({
        msg: "User not found",
        success: false,
      });
    }

    // Update the user data
    const updatedUser = await User.findByIdAndUpdate(
      id,
      {
        name: req?.body?.name,
        email: req?.body?.email,
        mobile: req?.body?.mobile,
      },
      {
        new: true,
      }
    );

    res.json(updatedUser);
  } catch (error) {
    console.error(error);
    res.status(500).json({
      msg: "An error occurred",
      success: false,
    });
  }
};

// Define getallUser as an async function
const getallUser = async (req, res) => {
  try {
    const getUsers = await User.find();
    res.json(getUsers);
  } catch (error) {
    console.error(error);
    res.status(500).json({
      msg: "An error occurred",
      success: false,
    });
  }
};

//get a single user

const getaUser = async (req, res) => {
  console.log(req.params);
  const { id } = req.params;
  try {
    const getaUser = await User.findById(id);
    res.json({
      getaUser,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      msg: "an Error occured",
      success: false,
    });
  }
};

//delete a single user

const deleteaUser = async (req, res) => {
  console.log(req.params);
  const { id } = req.params;
  try {
    const deleteaUser = await User.findByIdAndDelete(id);
    res.json({
      deleteaUser,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      msg: "an Error occured",
      success: false,
    });
  }
};

const addToCart = async (req, res) => {
  try {
    // const { userId } = req.session; // Get the user ID from the session

    // if (!userId) {
    //   return res.status(401).json({ success: false, message: 'User not authenticated.' });
    // }

    // Extract the product details from the request body
    const { title, price, Condition, Storage, Color } = req.body;

    // Create a new cart item for the user
    const cartItem = new Cart({
      title,
      price,
      Condition,
      Storage,
      Color,
    });
    

    // Save the cart item to the database
    await cartItem.save();

    res.status(201).json({ success: true, message: 'Product added to the cart.' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'An error occurred.' });
  }
}

const cartItems = async (req, res) => {
  try {
    const cartItems = await Cart.find();
    res.json(cartItems);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Unable to fetch cart items" });
  }
}

const deleteaItem = async (req, res) => {
  console.log(req.params);
  const { id } = req.params;
  try {
    const deleteaUser = await Cart.findByIdAndDelete(id);
    res.json({
      deleteaItem,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      msg: "an Error occured",
      success: false,
    });
  }
};

module.exports = {
  createUser,
  loginUserCtrl,
  getallUser,
  getaUser,
  deleteaUser,
  updateaUser,
  verifyOtpCtrl,
  addToCart,
  cartItems,
  deleteaItem
};
