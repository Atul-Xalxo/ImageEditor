import mongoose from "mongoose";

const connectDB = async () => {
  try {
    //console.log("MongoDB connection URL: ", process.env.MONGO_URL);
    await mongoose.connect(process.env.MONGO_URL);
    console.log("Database connected successfully !!!");
  } catch (error) {
    console.log(error);
  }
};

export default connectDB;
