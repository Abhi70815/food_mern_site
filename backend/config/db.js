import mongoose from "mongoose";

export const connectDB = async () => {
    (await mongoose.connect('mongodb+srv://jeetungaa:vaasu7945@cluster0.sfuksba.mongodb.net/food-del').then(()=> console.log("DB Connected")))
}