import mongoose, {Schema} from 'mongoose'

const hackathonSchema = new Schema({
    name:{
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
        type:String,
        enum:["active","ongoing","finished"],
        required:true,
    },
    url:{
        type:String,
        required:true
    }
})

export const Hackathon = mongoose.model("Hackathon",hackathonSchema)