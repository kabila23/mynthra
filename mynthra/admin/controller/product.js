const Product = require('../model/product')
const JWT     = require('jsonwebtoken');
const config  = require('../helper/config')
const Admin   = require('../model/admin')
const common  = require('../helper/imageUpload')


//product creation

exports.createProduct = async(req,res) =>
{
    try{
        const decode = JWT.verify(req.headers["x-access-token"], config.env.JWT_SECRET);
        const email = decode.email;
        const admin = await Admin.findOne({ email: email });
        const items =req.body

        if(admin !== null)
        {
            const productExists = await Product.findOne({productName:items.productName})
            if(productExists !== null){

                common.singleUpload(req,function(img){
                     var obj ={

                        brandName    : req.body.brandname,
                        category     : req.body.category ,
                        description  : req.body.description ,
                        productName  : req.body.productName ,
                        price        : req.body.price ,
                        quantity     : req.body.quantity ,
                        discount     : req.body.discount ,
                        size         : req.body.size ,
                        color        : req.body.color ,
                        gender       : req.body.gender ,
                        updated_At   : Date.now()


                     }

                     obj['images'] = img


                     Product.create(obj,async (err, createdoc) =>{
                        if(err)
                        {
                            return res.json({status: false , message: 'Failed to create product'})
                        }
                        else{
                            return res.json({status: true , message:'Product created successfully'})
                        }
                     });
                })

            

            
            }
            else
            {
                return res.json({status:false, message:'This Product already exist'})
            }

        }
        else
        {
            return res.json({status:false ,  message: 'Admin not found'})
        }



    }catch(error)
    {
        return res.json({status:false , message: 'Something went wrong!!'})
    }
}