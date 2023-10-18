const mongoose = require('mongoose');
var CartSchema = new mongoose.Schema({
    
    // userId: {
    //     type: mongoose.Schema.Types.ObjectId, // Store the user's ID
    //     ref: 'User', // Reference the User model
    //     // required: true,
    // },
    title:{
        type:String,
        // required:true,
        // unique:true,
    },
    price:{
        type: Number,
        // required:true,
    },
    Condition:{
        type:String,
    },
    Stroage: {
        type: String,
    },
    Color: {
        type: String,
    }
});


//Export the model
module.exports = mongoose.model('Cart', CartSchema);