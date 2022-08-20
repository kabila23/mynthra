var cloudinary = require('cloudinary');

cloudinary.config({
    cloud_name  : 'mynthra',
    api_key     : "54365475656",
    api_secret  : 'iF4ySAADLBpBBro7uhFTF9sWEc8'
})


module.exports = {
    uploadImage : function(imageName , callback)
    {
       cloudinary.v2.uploader.upload(
        imageName,
        {
            folder:'mynthra',
            resource_type:'image',
            use_filename:true
        },
        function(error,result){
            if(error)
            {
                callback(' ')
            }
            else{
                callback(result)
            }
        }
       )
    }
}