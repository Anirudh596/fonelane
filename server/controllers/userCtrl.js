const generateToken = require("../config/jwtToken");
const User = require("../models/userModel");
const asyncHandler = require("express-async-handler");

const createUser = async (req, res) => {
  try {
    const email = req.body.email;
    const findUser = await User.findOne({ email });

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
  const { email, password } = req.body;

  try {
    // Check if the user exists
    const findUser = await User.findOne({ email });

    if (findUser && (await findUser.isPasswordMatched(password))) {
      // User is authenticated, generate a token
    const token = generateToken(findUser?._id);

    res.json({
      _id: findUser?._id,
      name: findUser?.name,
      email: findUser?.email,
      mobile: findUser?.mobile,
      token,
    });
    }else{
      throw new Error("Invalid credentials");
    }

   
    
  } catch (error) {
    console.error(error);
    res.status(401).json({
      msg: "Authentication failed",
      success: false,
    });
  }
});


//update a user data

const updateaUser = async (req, res) => {
  console.log(req.params)
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

const getaUser = async( req, res) => {
  console.log(req.params)
  const {id} =req.params;
  try {
    const getaUser = await User.findById(id)
    res.json({
      getaUser
    })

  }catch (error){
    console.error(error)
    res.status(500).json({
      msg: "an Error occured",
      success: false,
    });
  };
};

//delete a single user

const deleteaUser = async( req, res) => {
  console.log(req.params)
  const {id} =req.params;
  try {
    const deleteaUser = await User.findByIdAndDelete(id)
    res.json({
      deleteaUser
    })

  }catch (error){
    console.error(error)
    res.status(500).json({
      msg: "an Error occured",
      success: false,
    });
  };
};

module.exports = { createUser, loginUserCtrl ,getallUser, getaUser, deleteaUser, updateaUser};