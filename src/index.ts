import express, { Request, Response } from "express";
import cors from "cors";
import "dotenv/config";
import mongoose from "mongoose";
import { v2 as cloudinary } from "cloudinary";
import myUserRoute from "./routes/MyUserRoute"
import myResturantRoute from "./routes/MyRestaurantRoute";
import resturantRoute from "./routes/RestaurantRoute"
import OrderRoute from "./routes/OrderRoute"

mongoose.connect(process.env.MONGO_URI as string)
    .then(() => console.log('Connected to Database!'));

const PORT = process.env.PORT || 8080;

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
});

const app = express();

app.use(cors());

app.use("/api/order/checkout/webhook", express.raw({ type: "*/*" }));

app.use(express.json());

app.get("/health", async (req: Request, res: Response) => {
  res.send({ message: "health OK!" });
});

app.use("/api/my/user", myUserRoute);
app.use("/api/my/restaurant", myResturantRoute);
app.use("/api/restaurant", resturantRoute);
app.use("/api/order", OrderRoute);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})