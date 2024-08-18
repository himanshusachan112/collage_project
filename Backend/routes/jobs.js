const express=require("express");
const router=express.Router();

import { createJob , deleteJob, getJob} from '../controllers/jobs.js'




router.post("/createJob",createJob);
router.post("/deleteJob",deleteJob);
router.get("/getJob",getJob);



module.exports = router;