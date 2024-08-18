const express=require("express");
const router=express.Router();

const  { createIntern , deleteIntern, getIntern} =require('../controllers/intern.js') 




router.post("/createIntern",createIntern);
router.post("/deleteIntern",deleteIntern);
router.get("/getIntern",getIntern);




module.exports = router;