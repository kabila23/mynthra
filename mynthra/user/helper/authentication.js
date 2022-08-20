const jwt = require("jsonwebtoken");
const config = require('../helper/config');
const createToken = (email)=>{   
    const token = jwt.sign({email},config.env.JWT_SECRET);   
    return token;
};
module.exports.createToken=createToken;