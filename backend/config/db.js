import mongoose from "mongoose";

export const connectDB = async () => {
    (await mongoose.connect('mongodb+srv://abhishek708158:1234@cluster0.clhi7.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0').then(()=> console.log("DB Connected")))
}