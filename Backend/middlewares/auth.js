const jwt=require("jsonwebtoken");
require("dotenv").config();


exports.auth=async (req,res,next)=>{

    try{
        const token=req.cookies.token ||
                    req.body.token ||
                    req.header("Authorization").replace("Bearer ","");
        if(!token){
            return res.json({
                success:false,
                message:"Token is Missing"
            })
        }

        //validating the token.
        try{
            const decode=jwt.verify(token,process.env.JWT_SECRET);
            req.user=decode;
        }
        catch(err){
            return res.json({
                success:false,
                message:"Invalid Token",
            })
        }
        next();

    }
    catch(err){
        return res.json({
            success:false,
            message:"Something Went Wrong While Validating the Token",
        })
    }
}


exports.isstudent=async (req,res,next)=>{

    try{
        if(req.user.accounttype!=="Student"){
           return res.json({
                success:false,
                message:"This is Protected Route For Student"
            })
        }

        next();
    }
    catch(err){
       return res.json({
            success:false,
            message:"something went wrong while chceking student route"
        })
    }
}


exports.isalumni=async (req,res,next)=>{

    try{
        if(req.user.accounttype!=="Alumni"){
            return res.json({
                success:false,
                message:"This is Protected Route For Alumni"
            })
        }
        next();
    }
    catch(err){
        return res.json({
            success:false,
            message:"something went wrong while validating Alumni route"
        })
    }
}


