const User = require('../models/userModel');

const createUser = async (req, res) => {
    const email = req.body.email;
    
    // Use try-catch to handle errors
    try {
        const existingUser = await User.findOne({ email });

        if (existingUser) {
            // User already exists
            return res.json({
                msg: "User already exists",
                success: false,
            });
        }

        // Create a new user
        const newUser = await User.create(req.body);
        
        // Respond with the new user data
        res.json(newUser);
    } catch (error) {
        console.error(error);
        // Handle database or server errors
        res.status(500).json({
            msg: "Internal server error",
            success: false,
        });
    }
};

module.exports = createUser;
