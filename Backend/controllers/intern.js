const  Intern  =require("../models/intern.models.js");

require("dotenv").config()
//updating user profile
const createIntern=async (req,res)=>{
        try{
            
            const{role,company,description,stipend,tenure,eligibility,gender,batch,deletedAt,deadline,status,url }=req.body;
            console.log("dfs")
            const intern=await Intern.create({
                role,company,description,stipend,tenure,eligibility,gender,batch,deletedAt,deadline,status,url
            })
            console.log("dfsdfdsfs")
            const data = await Intern.find()
            
            
            res.json({
                success:true,
                message:"Intern created successfully",
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

const deleteIntern = async(req,res)=>{
    try {
        const {id} = req.body;
        await Intern.findByIdAndDelete(id);
        const data = await Intern.find()

        res.json({
            success:true,
            message:"Intern deleted successfully",
            data
        })
    } catch (error) {
        return res.json({
            success:false,
            message:error.message,
        })
    }
}
const getIntern = async(req,res)=>{
    try {
        const data = await Intern.find()

        res.json({
            success:true,
            message:"Intern fetched successfully",
            data
        })
    } catch (error) {
        return res.json({
            success:false,
            message:error.message,
        })
    }
}
module.exports= {
    createIntern,
    deleteIntern,
    getIntern
}
