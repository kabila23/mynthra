const cloudinary = require('../helper/cloudinary')

module.exports ={
    singleUpload : function(req,callback){
        var imgupload =""
        if(typeof req.file !='undefined' && typeof req.file != undefined && req.file.path != "")
        {
            cloudinary.uploadImage(req.file.path,function(imgres)
            {
                imgupload =imgres.secure_url
                callback(imgupload)
            });
        }
        else{
            callback(imgupload)
        }
    }
}