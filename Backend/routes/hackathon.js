const express=require("express");
const router=express.Router();

const  { createHackathon , deleteHackathon, getHackathon} =require('../controllers/hackathon.js') 




router.post("/createHackathon",createHackathon);
router.post("/deleteHackathon",deleteHackathon);
router.get("/getHackathon",getHackathon);



module.exports = router;