import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import dotenv from "dotenv";

import route from "./routes/userRoute.js";


const app = express();

app.use(bodyParser.json());

dotenv.config();
const PORT = process.env.PORT || 5001;
const MONGOURL = process.env.MONGO_URL;

mongoose
    .connect(MONGOURL)
    .then(() => {
        console.log("Database connected!");
        app.listen(PORT, () => {
            console.log(`Server is running port http://localhost:${PORT}`);
        });
    })
    .catch((err) => console.log("error", err));

app.use("/api/user", route);