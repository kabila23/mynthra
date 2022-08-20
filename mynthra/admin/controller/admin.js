const Admin = require('../model/admin')
const crypto= require('crypto');

//admin signup
exports.adminregister = async(req,res)=>{
    try{
        const user = await Admin.findOne({email:req.body.email});
        const password = req.body.password;
        const confirmpassword = req.body.confirmpassword; 
        const cipher=crypto.createCipher('aes-128-cbc','mypassword');
        var encrypted=cipher.update(req.body.email,'utf-8','hex')
        encrypted=encrypted+cipher.final('hex');
        if(!user){
           
                    if(password==confirmpassword){
                        const newuser = new Admin({
                            username:req.body.username,
                            contact:req.body.phone,
                            email:encrypted,
                            password:req.body.password,
                            pattern:req.body.pattern
                        });
                        await newuser.save();
                        res.json({status:true, message:'Registration Successful'});
                    }
                    else{
                        return res.json({status:false,message:'password and confirmpassword not match'});
                    }
           
        }else{
            return res.json({status:false,message:'user already exists'});
        }
    }
    catch(error){
        return res.json({status:false,message:'Some error occured'});
    }
};

// admin login
exports.adminlogin = async(req,res)=>{
    try{
        const email = req.body.email;
        const password = req.body.password;
        const pattern = req.body.pattern;
        const cipher=crypto.createCipher('aes-128-cbc','mypassword');
        var encrypted=cipher.update(email,'utf-8','hex')
        encrypted=encrypted+cipher.final('hex');
        const user = await Admin.findOne({email:encrypted});
        if(user){
            if(user.password === password){            
                if(user.pattern === pattern){
                    const token = await signToken(user.email);
                    res.cookie("auth_token",token);
                    await history.save(); 
                    res.json({status:true,message:'login Sucessfully',token});
                }
                else{
                    return res.json({status:false, message:'Wrong Pattern'});
                }
            }
            else{
                return res.json({status:false, message:'Email/Password dont Match'});
            }
        }
        else{
            return res.json({status:false,message:'Given EmailId is not found'});
        }
    }
    catch(error){
        return res.json({status:false,message:'Some error occured'});
    }    
}