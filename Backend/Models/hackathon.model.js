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
    ]
})

export const Hackathon = mongoose.model("hackathon",hackathonSchema)