import { app } from "./app.js";
import connectDB from "./db/db.connection.js";
import {config} from "dotenv" ;

config({path: "./.env"});


connectDB()
.then(()=>{
    app.listen(process.env.PORT || 5000,()=>{
        console.log(`server is running at port : ${process.env.PORT}`);
    })
})
.catch((error)=>{
    console.log("MONGO db connection failed !!!", error)
})
