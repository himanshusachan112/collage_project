const  { Hackathon } =require("../models/hackathon.model") ;

require("dotenv").config()
//updating user profile
const createHackathon=async (req,res)=>{
        try{
            
            const{name,company,description,batch,deletedAt,deadline,status,url }=req.body;

            const hackathon=await Hackathon.create({
                name,company,description,batch,deletedAt,deadline,status,url 
            })
            const data = await Hackathon.find()
            
            
            res.json({
                success:true,
                message:"Hackathon created successfully",
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

const deleteHackathon = async(req,res)=>{
    try {
        const {id} = req.body;
        await Hackathon.findByIdAndDelete(id);
        const data = await Hackathon.find()

        res.json({
            success:true,
            message:"Hackathon deleted successfully",
            data
        })
    } catch (error) {
        return res.json({
            success:false,
            message:err.message,
        })
    }
}
const getHackathon = async(req,res)=>{
    try {
        const data = await Hackathon.find()

        res.json({
            success:true,
            message:"Hackathon fetched successfully",
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
    createHackathon,
    deleteHackathon,
    getHackathon
}