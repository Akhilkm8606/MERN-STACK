const mongoose = require('mongoose');

// Define the user schema
const userSchema = new mongoose.Schema({
    fullname: {
        type: String,
        minLength: [4, "Full name should have a minimum of 4 characters"],
        maxLength: [16, "Full name should have a maximum of 16 characters"],
        required: [true, "Please enter your full name"]
    },
    email: {
        type: String,
        required: [true, "Please enter your email"],
        unique: true,
    },
    password: {
        type: String,
    }
});

// Create the User model using the user schema
const User = mongoose.model("User", userSchema);

// Export the User model
module.exports = User;
