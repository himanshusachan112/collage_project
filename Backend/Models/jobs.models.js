import mongoose, {Schema} from 'mongoose'

const jobSchema = new Schema({
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
    ctc:{
        type:String,
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

export const Job = mongoose.model("Job",jobSchema);