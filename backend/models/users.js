const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require("bcrypt")

const userSchema = new Schema(
    {
        first_name: {
            type: String,
            required: [true, 'First name is required.'],
            trim: true,
        },
        last_name: {
            type: String,
            required: [true, 'Last name is required.'],
            trim: true,
        },
        username: {
            type: String,
            required: [true, 'Username is required.'],
            unique: true, // 1. Makes the username unique
            trim: true,
            minlength: [3, 'Username must be at least 3 characters long.'],
            set: v => v.toLowerCase() // Ensures username is always saved in lowercase
        },
        email: {
            type: String,
            required: [true, 'Email is required.'],
            unique: true,
            trim: true,
            lowercase: true,
            // Simple regex for email validation
            match: [/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
        },
        password: {
            type: String,
            required: [true, 'Password is required.'],
            minlength: [8, 'Password must be at least 8 characters long.']
        },
        isAdmin:{type:Boolean}
    },
    {
        // 3. Adds createdAt and updatedAt timestamps automatically
        timestamps: true 
    }
);

//  pre-save hook
userSchema.pre('save', async function(next) {
    // Only run this function if password was actually modified
    if (!this.isModified('password')) {
        return next(); // Go to the next middleware
    }

    // Hashing the password with a cost of 10
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    
    next(); // Go to the next middleware
});


// method to compare passwords for login
userSchema.methods.comparePassword = async function(candidatePassword) {
    return await bcrypt.compare(candidatePassword, this.password);
};

const User = mongoose.model('User', userSchema);

module.exports = User;