const mongoose = require('mongoose');

const adminschema = new mongoose.Schema({
    username   :  {type: String },
    contact    : { type: String },
    email      : { type: String },
    password   : { type: String },
    pattern    : { type: String },
    createdAt  : { type: Date,default: Date.now() },
    updatedAt  : { type: Date },
});

module.exports = mongoose.model('admin', adminschema);