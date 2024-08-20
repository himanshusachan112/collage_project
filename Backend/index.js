const express=require("express");
const app=express();
require("dotenv").config();
PORT=process.env.PORT || 4000
const cors=require("cors");
const fileupload=require("express-fileupload");
const cookieparser=require("cookie-parser");
//importing functions
const {databaseConnect}=require("./config/ConnectToDatabase");
const {cloudinaryConnect}=require("./config/ConnectToCloudinary");

//importing all the routes
const authroutes=require("./routes/auth.js");
const userroutes=require("./routes/user.js");
const internroutes = require("./routes/interns.js");
const jobroutes = require("./routes/jobs.js");
const hackathonroutes = require("./routes/hackathon.js")



//managing the server usage.
app.use(express.json())
app.use(cookieparser());
app.use(cors({
    // origin:"https://edupulses.netlify.app",
    // origin:"http://localhost:5173",
    origin:"https://career-sync-nita.vercel.app",
    
    credentials:true,
}))
app.use(fileupload({
    useTempFiles:true,
    tempFileDir:'/tmp/',
}))

//connecting to database.
databaseConnect();
//connecting to cloudinary.
cloudinaryConnect();

//defining the routes
app.use("/api/v1/auth",authroutes);
app.use("/api/v1/user",userroutes);
app.use("/api/v1/intern",internroutes);
app.use("/api/v1/job",jobroutes);
app.use("/api/v1/hackathon",hackathonroutes);



//default route.
app.get("/",(req,res)=>{
    return res.json({
        success:true,
        message:"Server is Up and Running.....",
    })
})

//starting the port.
app.listen(PORT,()=>{
    console.log(`server is running at port ${PORT}`)
})

