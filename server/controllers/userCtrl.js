const generateToken = require("../config/jwtToken");
const User = require("../models/userModel");
const asyncHandler = require("express-async-handler");

const createUser = async (req, res) => {
  const email = req.body.email;
  const findUser = await User.find({ email: email });
  if (!findUser) {
    //create a new user
    const newUser = User.create(req.body);
    res.json(newUser);
  } else {
    //user already exists
    res.json({
      msg: "user already exists",
      success: false,
    });
  }
};

const loginUserCtrl = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  //check if the user is exists or not
  const findUser = await User.findOne({ email });

  if (findUser && (await findUser.isPasswordMatched(password))) {
    res.json({
        _id: findUser?._id,
        name: findUser?.name,
        email: findUser?.email,
        mobile: findUser?.mobile,
        token: generateToken(findUser?._id)
    });
  } else {
    throw new Error("invalid credentials");
  }
});

module.exports = { createUser, loginUserCtrl };
