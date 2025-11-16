const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const contactSchema = new Schema(
    {
        fullname:{type:String,required:true},
        email: {type:String,required:true},
        phone: {type:String,required:true},
        tour: {type:String,required:true},
        message: {type:String}
    },
    {
        timestamps: true
    }
)

const contact = mongoose.model("Contacts", contactSchema)

module.exports = contact