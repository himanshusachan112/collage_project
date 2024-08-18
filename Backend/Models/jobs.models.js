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
    stipend:{
        type:String,
    },
    tenure:{
        type:Number,
    },
    eligibility:{
        type:Number,
        required:true, 
    }

})

export const Intern = mongoose.model("Intern",jobSchema);