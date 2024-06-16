import mongoose from "mongoose";
import app from "./app.js";

(async ()=>{
    try{
        await mongoose.connect("mongodb://localhost:27017/users")
        console.log("db connected");

        const onListening =()=>{
            console.log("listening on port 5000");
        }

        app.listen(5000,onListening)
    } 
    catch(error){
        console.error("error: ",error);
        throw err;
    }
})()