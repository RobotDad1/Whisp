import mongoose from "mongoose";
import { ENV } from "./env.js";
import User from "../models/User.js";
import bcrypt from "bcryptjs";

export const connectDB = async () => {
  try {
    const { MONGO_URI } = ENV;
    if (!MONGO_URI) throw new Error("MONGO_URI is not set");

    const conn = await mongoose.connect(ENV.MONGO_URI);
    console.log("MONGODB CONNECTED:", conn.connection.host);

    // Make sure old users who existed before this feature are automatically verified
    await User.updateMany(
      { isVerified: { $exists: false } },
      { $set: { isVerified: true } }
    );

    // Seed Guest User
    const guestEmail = "guest9897@gmail.com";
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash("123456", salt);
    
    await User.updateOne(
        { email: guestEmail },
        {
            $set: {
                fullName: "Guest User",
                password: hashedPassword,
                isVerified: true,
            }
        },
        { upsert: true }
    );
    console.log("Guest user and old users verified successfully.");
  } catch (error) {
    console.error("Error connection to MONGODB:", error);
    process.exit(1); // 1 status code means fail, 0 means success
  }
};