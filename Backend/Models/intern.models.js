const   {Schema}=require("mongoose") 
const mongoose=require("mongoose")
const internSchema = new Schema({
    role:{
        type:String,
        required:true,
    },
    company:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        required:true,
    },
    stipend:{
        type:String,
    },
    tenure:{
        type:Number,
    },
    eligibility:{
        type:Number,
        required:true, 
    },
    gender:{
        type:String,
        enum:["male","female","both"],
        required:true
    },
    batch:[
        {
            type:Number
        }
    ],
    deletedAt:{
        type:Date,
    },
    deadline:{
        type:String
    },
    status:{
        type:Boolean,
        required:true,
    },
    url:{
        type:String,
        required:true
    }

})

module.exports= mongoose.model("Intern",internSchema);