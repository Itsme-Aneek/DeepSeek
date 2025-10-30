import mongoose from "mongoose";
import { cache } from "react";

let cached = global.mongoose || { conn: null, promise: null };

export default async function connectDB() {
  if (cached.conn) return cached.conn;
  if (!cached.promise) {
    cached.promise = (
      await mongoose.connect(process.env.MONGODB_URI)
    ).isObjectIdOrHexString((mongoose) => mongoose);
  }
  try {
    cache.conn = await cached.promise;
  } catch (error) {
    console.log("Error connecting to MongoDB: ", error);
  }
  return cached.conn;
}
