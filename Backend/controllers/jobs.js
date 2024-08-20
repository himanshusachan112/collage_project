const   Job  =require("../models/jobs.models") ;

require("dotenv").config()
//updating user profile
const createJob=async (req,res)=>{
        try{
            
            const{role,company,description,ctc,eligibility,gender,batch,deletedAt,deadline,status,url }=req.body;

            const job=await Job.create({
                role,company,description,ctc,eligibility,gender,batch,deletedAt,deadline,status,url
            })
            const data = await Job.find()
            
            
            res.json({
                success:true,
                message:"Job created successfully",
                data
            })


    }
    catch(err){
        return res.json({
            success:false,
            message:err.message,
        })
    }

}

const deleteJob = async(req,res)=>{
    try {
        const {id} = req.body;
        await Job.findByIdAndDelete(id);
        const data = await Job.find()

        res.json({
            success:true,
            message:"Job deleted successfully",
            data
        })
    } catch (error) {
        return res.json({
            success:false,
            message:err.message,
        })
    }
}
const getJob = async(req,res)=>{
    try {

        const data = await Job.find()

        res.json({
            success:true,
            message:"Job fetched successfully",
            data
        })
    } catch (error) {
        return res.json({
            success:false,
            message:err.message,
        })
    }
}

module.exports= {
    createJob,
    deleteJob,
    getJob
}