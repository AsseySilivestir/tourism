const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const User = require("./users")

const blogSchema = new Schema(
{
title:{type: String, required:true},
content:{type: String, required: true},
image: {type:String,required:true}
},
{
    timestamps: true
}
)

const blog = mongoose.model("Blog", blogSchema)

module.exports = blog