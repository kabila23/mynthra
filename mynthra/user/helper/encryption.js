var CryptoJS = require("crypto-js");
var cloudinary = require("./cloudinary");

var key = CryptoJS.enc.Base64.parse("nZKwT53C3sozJsAYThQCx7EQivdjFoVS");
var iv  = CryptoJS.enc.Base64.parse("PccrJtEipiqvG4vm87ZVrEUSOOQSuRh7");

module.exports = {
    encrypt : function(txt){
    let encrypted = CryptoJS.AES.encrypt(txt, key,{iv:iv}).toString();
     return encrypted;
    },
    decrypt : function(txt){
    var bytes = CryptoJS.AES.decrypt(txt.toString(), key, {iv:iv});
    return bytes.toString(CryptoJS.enc.Utf8);
     },

     singleUploadcheck : function (req,callback) {
        var uploadImg = "";
        if(typeof req.file != 'undefined' && typeof req.file != undefined && req.file.path != "") {
            cloudinary.uploadImage(req.file.path,function(imgRes){
            uploadImg = imgRes.secure_url;
            callback(uploadImg);
            });
        } else {
            callback(uploadImg);
        }
    }
}