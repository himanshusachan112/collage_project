const express=require("express");
const router=express.Router();

import { createHackathon , deleteHackathon, getHackathon} from '../controllers/hackathon.js'




router.post("/createHackathon",createHackathon);
router.post("/deleteHackathon",deleteHackathon);
router.get("/getHackathon",getHackathon);



module.exports = router;