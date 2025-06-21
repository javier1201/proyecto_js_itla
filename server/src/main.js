import express from "express";
import cors from "cors";
export const app = express();
import hotelRouter from "./routers/hotel_routers.js";

app.use(cors());
app.use(express.json());
app.use("/hotel", hotelRouter);