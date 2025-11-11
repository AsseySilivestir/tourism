const {Schema} = require("mongoose")

const userSchema = new Schema(
    {
        first_name: String,
        last_name: String,
        username: String,
        email: String,
    }
)