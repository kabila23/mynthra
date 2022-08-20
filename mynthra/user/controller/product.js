const Product = require('../model/product')
const JWT     = require('jsonwebtoken');
const User    = require('../model/user')


// viewing single prodct

exports. getproduct = async(req,res)=>
{
    try{

        const decode = JWT.verify(req.headers["x-access-token"], config.env.JWT_SECRET);
        const email = decode.email;
        const user = await User.findOne({ email: email })
        if(user !== null){

        const product_name = req.body.product_name

        const ProductExists = await Product.findOne({ productName : product_name})

        if(ProductExists !== null)
        {
            return res.json({status: true , details : ProductExists})

        }
        else
        {
            return res.json({status:false , message: ' Product not found'})
        }
    }
    else{
        return res.json({status: false , message : 'User not found'})
    }

    }
    catch(error)
    {
        return res.json({status:false , message: 'Something went wrong'})
    }
}


// viewing all products


exports. getallproduct = async(req,res)=>
{
    try{

        const decode = JWT.verify(req.headers["x-access-token"], config.env.JWT_SECRET);
        const email = decode.email;
        const user = await User.findOne({ email: email })
        if(user !== null){

        const ProductExists = await Product.find()

        if(ProductExists !== null)
        {
            return res.json({status: true , details : ProductExists})

        }
        else
        {
            return res.json({status:false , message: ' Products not found'})
        }
    }
    else
    {
        return res.json({status: false , message:'User not found'})
    }

    }
    catch(error)
    {
        return res.json({status:false , message: 'Something went wrong'})
    }
}


// create add to cart


exports. addtocart = async (req, res)=>{
    try{
        
         
        const decode = JWT.verify(req.headers["x-access-token"], config.env.JWT_SECRET);
        const email = decode.email;
        const user = await User.findOne({ email: email })
        if(user !== null){

            const productId = req.body.productId

            let bag = user.bagItems

            for(var i=0; i<bag.length ; i++){
                
                if(bag[i].productId == productId){
                    
                    bag[i].quantity++;

                    const user1 = await User.findByIdAndUpdate(user_id,{bagItems : bag})

                    return res.json ({status:false ,message:'Product added to cart successfully', details : user1})
                }
                
                const user1 = await User.findByIdAndUpdate(user_id,{bagItems :[ {productId : productId}]})
                
                return res.json({status : false , message: 'Product added to cart successfully' , details: user1})

            }



        }
        else
        {
            return res.json({status:false , message:'User not found'})
        }


    }
    catch(error)
    {
        return res.json({status:false , message:'Something went wrong'})
    }
}


// view card details

exports.viewcard = async(req,res)=>{
    try{

        const decode = JWT.verify(req.headers["x-access-token"], config.env.JWT_SECRET);
        const email = decode.email;
        const user = await User.findOne({ email: email },{bagItems:1,_id:0})
        if(user !== null)
        {
            return res.json({status:true, details:user})
        }
        else
        {
            return res.json({status:false , message:'User not found'})
        }



    }
    catch(error)
    {
        return res.json({status:false , message:'Something went wrong'})
    }
}