import mongoose from "mongoose";

const connectToMongoDB = async (db) => {
  try {
    await mongoose.connect(process.env.MONGO_DB_URI);
  } catch (e) {
    console.log(error.mesage);
  }
};

export default connectToMongoDB;
