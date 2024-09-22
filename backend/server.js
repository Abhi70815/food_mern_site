import express from "express"
import cors from "cors"
import { connectDB } from "./config/db.js";
import foodRouter from "./routes/foodRoute.js";
import userRouter from "./routes/userRoute.js";
import cartRouter from "./routes/cartRoute.js";
import orderRouter from "./routes/orderRoute.js";
import path from 'path';
import 'dotenv/config'
import { fileURLToPath } from 'url';



// app config
const app = express();
const PORT = 4000;

//middleware
app.use(express.json());
app.use(cors());




// db connection
connectDB()

//api endpoints
app.use("/api/food", foodRouter);
app.use("/images", express.static('uploads'))
app.use("/api/user", userRouter)
app.use("/api/cart", cartRouter)
app.use("/api/order", orderRouter)




//deploymentcodee
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const resolvedPath = path.resolve(__dirname);

if (process.env.NODE_ENV === 'production') {
    //*Set static folder up in production
    app.use(express.static('frontend/dist'));

    app.get('*', (req,res) => res.sendFile(path.resolve(resolvedPath, 'frontend', 'dist','index.html')));
  }else{
    app.get("/", (req, res) => {
        res.send("API working")
    })
    
}



app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server started`)
})

// mongodb+srv://jeetungaa:<db_password>@cluster0.sfuksba.mongodb.net/