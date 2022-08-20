const mongoose = require('mongoose');
const AutoIncrement = require('mongoose-sequence').mongoose

const productSchema = new mongoose.Schema({
  product_id   : { type: String , index: true },
  brandName    : { type: String, required: true },
  category     : { type: String, required: true },
  description  : { type: String, required: false },
  productName  : { type: String, required: true },
  price        : { type: Number, required: true },
  quantity     : { type: Number, required: false },
  images       : [{ type: String, required: true }],
  discount     : { type: Number, required: false },
  sizes        : [{ type: String, required: false }],
  color        : { type: String, required: false },
  colorIds     : [ { type: mongoose.Schema.Types.ObjectId, ref: "color", required: false }],
  gender       : { type: String, required: true },
  ratings      : {type: Number,default: 0},
  numOfReviews : {type: Number,default: 0},
  user_id      : {type: String},
  createdAt    : {type: Date,default: Date.now} ,

  createdAt    : {type: Date,default: Date.now}
});

productSchema.plugin(AutoIncrement, {inc_field: 'product_id'});
module.exports = mongoose.model('Product', productSchema);