import express from "express" ;
import cookieParser from "cookie-parser";
import cors from "cors";
import { connection } from "./db/db.connection.js";
import { errorUtils } from "./utils/ApiError.js";
import userRouter from "./routes/user.routes.js";
import { removeUnverifiedAccounts } from "./config/removeaccounts.config.js";

export const app = express();



app.use(cors({
    origin:["process.env.CORS_ORIGIN"],
    methods:["GET" , "POST" , "PUT" , "DELTE"],
    allowedHeaders:['Content-Type', 'Authorization'] ,
    credentials:true,
}))

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use("/api/v1/user",userRouter)

removeUnverifiedAccounts()

connection();

app.use(errorUtils)


