const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//testimonial schema
const tSchema = new Schema(
    {
        fullName: {type:String,required:true},
        content: {type:String,required:true},
        country: {type:String,required:true}
    }
)

const testimonial = mongoose.model("Testimonials",tSchema)

module.exports = testimonial