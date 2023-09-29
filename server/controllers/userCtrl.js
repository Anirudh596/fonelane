const { error } = require("console");
const generateToken = require("../config/jwtToken");
const User = require("../models/userModel");
const asyncHandler = require("express-async-handler");
const axios = require("axios");


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
      const accountSid = "AC0af3a8ecc541f6da456e6a29d0d656bc";
      const authToken = "dc760f08947b6734283bee68b812cfdb";
      const verifySid = "VA3e3e54786b286fd0c9b86bed1a5936a4";
      const client = require("twilio")(accountSid, authToken);

      client.verify
        .services(verifySid)
        .verifications.create({ to: mobile, channel: "sms" })
        .then((verification) => {
          console.log("OTP sent successfully:", verification.status);
          res.json({
            msg: "OTP sent successfully",
            success: true,
          });
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
          });
      console.log("dont exist");
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({
      msg: "An error occurred",
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

// const otpGenerator = async (req, res) => {
//   try {
//     const accountSid = "AC1f4174e615aa1e8cbaaddf35ad2f1104";
// const authToken = "a40784a3a93d4f9fb988a595417fd52e";
// const verifySid = "VA44abaf5811c16c7ea7c26d00c234a61e";
// const client = await require("twilio")(accountSid, authToken);

// client.verify.v2
//   .services(verifySid)
//   .verifications.create({ to: req.body.mobile, channel: "sms" })
//   .then((verification) => console.log(verification.status))
//   .then(() => {
//     const readline = require("readline").createInterface({
//       input: process.stdin,
//       output: process.stdout,
//     });
//     readline.question("Please enter the OTP:", (otpCode) => {
//       client.verify.v2
//         .services(verifySid)
//         .verificationChecks.create({ to: req.body.mobile, code: otpCode })
//         .then((verification_check) => console.log(verification_check.status))
//         .then(() => readline.close());
//     });
//   });
//   } catch (error) {
//     console.log(error);
//   }
// }

module.exports = { createUser, loginUserCtrl ,getallUser, getaUser, deleteaUser, updateaUser};


// const { error } = require("console");
// const generateToken = require("../config/jwtToken");
// const User = require("../models/userModel");
// const asyncHandler = require("express-async-handler");
// const twilio = require("twilio");

// // Create a user
// const createUser = asyncHandler(async (req, res) => {
//   const { mobile } = req.body;
//   const findUser = await User.findOne({ mobile });

//   if (findUser) {
//     return res.status(400).json({
//       msg: "User already exists",
//       success: false,
//     });
//   }

//   const newUser = await User.create(req.body);
//   res.status(201).json(newUser);
// });

// // Login or Register a user
// const loginUserCtrl = asyncHandler(async (req, res) => {
//   const { mobile } = req.body;
//   const findUser = await User.findOne({ mobile });

//   if (findUser && (await findUser.isMobileMatched(mobile))) {
//     const accountSid = "AC1f4174e615aa1e8cbaaddf35ad2f1104";
//     const authToken = "a40784a3a93d4f9fb988a595417fd52e";
//     const verifySid = "VA44abaf5811c16c7ea7c26d00c234a61e";
//     const client = twilio(accountSid, authToken);

//     client.verify.v2
//       .services(verifySid)
//       .verifications.create({ to: req.body.mobile, channel: "sms" })
//       .then((verification) => console.log(verification.status))
//       .then(() => {
//         const readline = require("readline").createInterface({
//           input: process.stdin,
//           output: process.stdout,
//         });
//         readline.question("Please enter the OTP:", (otpCode) => {
//           client.verify.v2
//             .services(verifySid)
//             .verificationChecks.create({ to: req.body.mobile, code: otpCode })
//             .then((verification_check) => console.log(verification_check.status))
//             .then(() => readline.close());
//         });
//       });
//   } else {
//     try {
//       const newUser = await User.create(req.body);
//       res.status(201).json(newUser);
//       console.log("User created successfully");
//     } catch (error) {
//       console.error(error);
//       res.status(500).json({
//         msg: "An error occurred",
//         success: false,
//       });
//     }
//   }
// });

// // Rest of the backend controller functions remain the same

// // Update user data
// const updateaUser = asyncHandler(async (req, res) => {
//   const { id } = req.params;

//   try {
//     const existingUser = await User.findById(id);

//     if (!existingUser) {
//       return res.status(404).json({
//         msg: "User not found",
//         success: false,
//       });
//     }

//     const updatedUser = await User.findByIdAndUpdate(
//       id,
//       {
//         name: req?.body?.name,
//         email: req?.body?.email,
//         mobile: req?.body?.mobile,
//       },
//       {
//         new: true,
//       }
//     );

//     res.json(updatedUser);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({
//       msg: "An error occurred",
//       success: false,
//     });
//   }
// });

// // Get all users
// const getallUser = asyncHandler(async (req, res) => {
//   try {
//     const getUsers = await User.find();
//     res.json(getUsers);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({
//       msg: "An error occurred",
//       success: false,
//     });
//   }
// });

// // Get a single user by ID
// const getaUser = asyncHandler(async (req, res) => {
//   const { id } = req.params;

//   try {
//     const getaUser = await User.findById(id);
//     res.json({
//       getaUser,
//     });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({
//       msg: "An error occurred",
//       success: false,
//     });
//   }
// });

// // Delete a single user by ID
// const deleteaUser = asyncHandler(async (req, res) => {
//   const { id } = req.params;

//   try {
//     const deleteaUser = await User.findByIdAndDelete(id);
//     res.json({
//       deleteaUser,
//     });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({
//       msg: "An error occurred",
//       success: false,
//     });
//   }
// });

// module.exports = {
//   createUser,
//   loginUserCtrl,
//   getallUser,
//   getaUser,
//   deleteaUser,
//   updateaUser,
// };
