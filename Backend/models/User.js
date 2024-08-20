const mongoose=require("mongoose");

const userschema=new mongoose.Schema({
    firstname:{
        type:String,
        required:true,
        trim:true,
    },
    lastname:{
        type:String,
        required:true,
        trim:true,
    },
    email:{
        type:String,
        required:true,
        trim:true,
    },
    hashedpassword:{
        type:String,
        required:true,
    },
    accounttype:{
        type:String,
        enum:["Alumni","Student"],
        required:true,
    },
    forgotpasswordlink:{
        type:String,
    },
    forgotpasswordlinkexpires:{
        type:Date,
    },
    image:{
        type:String,
    },
    additionaldetails:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Profile",
    },
    secretkey:{
        type:String
    }
})

module.exports=mongoose.model("User",userschema);