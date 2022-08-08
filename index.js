import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import cookieParser from 'cookie-parser'
import authRoutes from './routes/auth.js';
import userRoutes from './routes/users.js';
import videoRoutes from './routes/video.js';
import commentRoutes from './routes/comment.js';
import cors from 'cors';

const app = express();
dotenv.config();
const PORT = process.env.PORT || 8000;

const connect = () =>{
    mongoose.connect(process.env.MONGO).then(()=>{
        console.log("connected to DB");
    }).catch((error)=>{
        throw error;
    });
}

mongoose.connection.on("disconnected",()=>{
    console.log("mongodb disconnected");
});

//middleware
const corsOptions = {
    origin: true,
    credentials: true,
}
app.use(cors(corsOptions));
app.use(cookieParser());
app.use(express.json());

//route
app.get("/",(req,res)=>{
    res.send("WellCome To Youtube Server!");
})
//auth route
app.use("/api/auth",authRoutes);
//user route
app.use("/api/users",userRoutes);
//vide route
app.use("/api/video",videoRoutes);
//comment route
app.use("/api/comment",commentRoutes);

// error handler 
app.use((err,req,res,next)=>{
    const status = err.status || 500;
    const message = err.message || "Something Went worng";
    return res.status(status).json({
        success: false,
        status,
        message,
    })
})

//listen
app.listen(PORT,()=>{
    connect();
    console.log("Connected to Server");
})

