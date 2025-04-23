import mongoose from "mongoose";

export const  connectDB = async () =>{
    await mongoose.connect('mongodb+srv://sachinyadav887780:Yadav887780@cluster0.kdjeyoa.mongodb.net/Quickle-Dishes').then(()=>console.log("DB Connected"))
}

// add your mongoDB connection string above.
// Do not use '@' symbol in your databse user's password else it will show an error.