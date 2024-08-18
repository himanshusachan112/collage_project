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
const authroutes=require("./routes/auth");
const userroutes=require("./routes/user");



//managing the server usage.
app.use(express.json())
app.use(cookieparser());
app.use(cors({
    // origin:"https://edupulses.netlify.app",
    origin:"http://localhost:5173",
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

