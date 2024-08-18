const mongoose=require("mongoose");


const secretkeyschema=new mongoose.Schema({
    
    email:{
        type:String,
    },
    secretkey:{
        type:String,
    },
    
});

module.exports=mongoose.model("Secretkey",secretkeyschema);