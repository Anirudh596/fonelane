const mongoose = require('mongoose'); // Erase if already required
const bcrypt = require('bcrypt')
// Declare the Schema of the Mongo model
var userSchema = new mongoose.Schema({
    
    mobile:{
        type:String,
        required:true,
        unique:true,
    },
    name:{
        type:String,
        // required:true,
    },
    email:{
        type:String,
        // required:true,
        // unique:true,
    },
    
});


// userSchema.pre('save', async function(next) {
//     const salt =await bcrypt.genSaltSync(10);
//     this.password = await bcrypt.hash(this.password, salt)
    
// });

userSchema.methods.isMobileMatched = async function(enteredMobile) {
    return await bcrypt.compare(enteredMobile, this.mobile);
}

//Export the model
module.exports = mongoose.model('User', userSchema);