const mongoose = require("mongoose");
const AutoIncrement = require('mongoose-sequence').mongoose

const userSchema = new mongoose.Schema(
  {
    user_id      : { type : String },
    firstname    : { type : String },
    lastname     : { type : String },
    address      : { type : String },
    country      : { type : String },
    state        : { type : String },
    city         : { type : String },
    username     : { type : String },
    contact      : { type : String },
    email        : { type : String },
    password     : { type : String },
    bagItems     : [{ productId: { type: String }, quantity: { type: Number, default: 1 }, price: { type: Number, default: 0}}],
    wishListItems: [{ productId: { type: String }, price: { type: Number, default: 0 }}],
    active       : { type : Number, default:  1 , enum :[0,1]},
    created_at   : { type : Date , default: Date.now()},
    updated_at   : { type : Date , default: Date.now()}
  },

);
userSchema.plugin(AutoIncrement, {inc_field: 'user_id'});

module.exports = mongoose.model("user", userSchema);