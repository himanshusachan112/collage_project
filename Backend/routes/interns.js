const express=require("express");
const router=express.Router();

import { createIntern , deleteIntern, getIntern} from '../controllers/intern.js'




router.post("/createIntern",createIntern);
router.post("/deleteIntern",deleteIntern);
router.get("/getIntern",getIntern);




module.exports = router;