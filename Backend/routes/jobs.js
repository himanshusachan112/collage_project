const express=require("express");
const router=express.Router();

const  { createJob , deleteJob, getJob} =require('../controllers/jobs.js') 




router.post("/createJob",createJob);
router.post("/deleteJob",deleteJob);
router.get("/getJob",getJob);



module.exports = router;