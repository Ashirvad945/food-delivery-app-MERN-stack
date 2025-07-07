import mongoose from "mongoose";

export const connectDB = async () =>{
    await mongoose.connect('mongodb+srv://ashirvadpatel86:ashirvadpatel@cluster0.89eeyjn.mongodb.net/Food-Del').then(()=>console.log("DB Connected"));
}