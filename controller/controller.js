const Users = require('../models/user-model')

exports.adUser = async(req,res)=>{
    try {
        const newUser = await Users.create({
            name:req.body.name,
            email:req.body.email,
            mobile:req.body.mobile,
            password:req.body.password
        })
        
        res.status(201).json({
            success:true,
            message:"new user added!!!",
            data:newUser
        })
    } catch (error) {
            console.error(error);
        res.status(500).json({
            success:false,
            message:"something went wrong???",
               error: error.message
        })
    }
}

