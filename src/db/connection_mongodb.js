//Third party imports
import mongoose from "mongoose";
import { URI_MONGODB_ATLAS, URI_MONGODB_LOCAL } from '../config/config.js';

export const initMongoDB = async () => {
  try {
    const mongoUrl = URI_MONGODB_ATLAS || URI_MONGODB_LOCAL;
    mongoose.set("strictQuery", false);
    await mongoose.connect(mongoUrl);
    console.log(`Connected to MongoDB 🔥🔥 => Source: ${mongoUrl}`);
  } catch (error) {
    console.log(`${error}😡`);
  }
};
