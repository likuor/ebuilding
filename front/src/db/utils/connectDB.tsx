import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    if (typeof process.env.NEXT_PUBLIC_DB_API_KEY === 'undefined') return

    await mongoose.connect(process.env.NEXT_PUBLIC_DB_API_KEY)
    console.log("Connected to mongoDB")
  } catch (err) {
    console.log("Faied to connect to mongoDB")
    throw new Error()
  }
}