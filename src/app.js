import express from "express" ;
import cookieParser from "cookie-parser";
import cors from "cors";
import { ErrorHandler } from "./utils/ApiError.js";

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


app.use(ErrorHandler)


