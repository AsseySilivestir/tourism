const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const contactSchema = new Schema(
    {
        fullName:{type:String,required:true},
        email: {type:String,required:true},
        phone: {type:String,required:true},
        interestedTour: {type:String,required:true},
        message: {type:String,required:true}
    },
    {
        timestamps: true
    }
)

const contact = mongoose.model("Contacts", contactSchema)

module.exports = contact