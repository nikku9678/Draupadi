import express from 'express'
import dotenv from 'dotenv';
import {connectDb} from './config/db.js';
import cookieParser from "cookie-parser";
import cors from "cors";
import { errorMiddleware } from "./middlewares/error.js";
import userRoutes from "./routes/userRoutes.js";
import speakerRoutes from "./routes/speakerRoutes.js";
import adminRoutes from "./routes/adminRoutes.js";
import organizerRoutes from "./routes/organizerRoutes.js";
const app =express(); 

dotenv.config();
connectDb();

app.use(
    cors({
      origin: [process.env.FRONTEND_URL],
      method: ["GET", "POST", "DELETE", "PUT"],
      credentials: true,
    })
  );

  // app.use(cors())
  app.use(cookieParser());
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

app.use("/api/v1/user", userRoutes);
// app.use("/api/v1/speaker", speakerRoutes);
app.use("/api/v1/admin", adminRoutes);
app.use("/api/v1/organizer", organizerRoutes);


const PORT = 8080 || process.env.PORT


app.use(errorMiddleware);
app.listen(8080, ()=>{
    console.log(`Server is running on ${PORT}`)
})