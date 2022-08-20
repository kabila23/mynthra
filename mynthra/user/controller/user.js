const User = require('../models/user');
const { createToken } = require('../helper/authentication');
const encdec = require('../helper/encryption');

//signup

exports.signupuser = async(req, res) =>
 {
    try
    {
        var user = await User.findOne({email: req.body.email})
      
            if (user === null) {
       
                    const password = req.body.password;                
                    const confirmpassword = req.body.confirmpassword;
                    if (password === confirmpassword) {
                        
                            const ency = encdec.encrypt(password);
                            const newUser = new User({
                               username: req.body.username,
                               contact: req.body.phone,
                               email: req.body.email,
                               password: ency,
                               updatedAt: Date.now(),
                           });
                                       
                            await newUser.save()
                                     
                    }
                               
                    else 
                    {
                        return res.json({status: false,message: 'password and confirm password doesnot match '})
                    }
           }
          else
          {
             return res.json({status:false , message: 'Email already exist, try to sign in'})
          }
    }

    catch(error){
        res.json({status:false, message:'Some error occurred'});
    }
}


//sign in

exports.signinuser = async(req, res) => {
    try {
       
         
                const email = req.body.email;
                const password = req.body.password;
                const ency = encdec.encrypt(password);
                const user = await User.findOne({ email: email });
             
                if (user) {
                   if (user.password == ency) 
                    {
                        const token = await createToken(user.email);  
                        res.json({status: true,message: 'Login successfully',token: token});
                                       
                    }
                    else 
                    {        
                               
                        return res.json({status: false,message: 'Email/Password dont Match'});
                    }
                    
                     
                }
                else {
                    return res.json({status: false,message: 'User not Found, Try signup'});
                }
        
        
    } 
    catch(error){
        res.json({status: false,message: 'Some error occurred'});
    }
};