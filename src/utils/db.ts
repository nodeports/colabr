import mongoose from "mongoose";
import Bluebird from "bluebird";

mongoose.Promise = Bluebird;

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/taskmanager", {});
    console.log("MongoDB connected");
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

export default connectDB;
