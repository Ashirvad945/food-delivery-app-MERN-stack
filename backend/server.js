import express from "express";
import cors from "cors";
import { connectDB } from "./config/db.js";
import foodRouter from "./routes/foodRoutes.js";
import userRouter from "./routes/userRoute.js";
import 'dotenv/config'
import cartRouter from "./routes/cartRoute.js";
import orderRouter from "./routes/orderRoute.js";

const app = express();
const port = 4000;

//middleware
app.use(express.json());
app.use(cors());

//DB connection
connectDB();

//api endpoint
app.use("/api/food", foodRouter);
app.use("/images",express.static('uploads'))
app.use("/api/user", userRouter)
app.use("/api/cart",cartRouter)
app.use("/api/order",orderRouter)



app.get("/", (req, res) => {
  res.send("API working");
});

app.listen(port, () => {
  console.log(`server started on http://localhost:${port}`);
});




//mongodb+srv://ashirvadpatel86:ashirvadpatel@cluster0.89eeyjn.mongodb.net/?