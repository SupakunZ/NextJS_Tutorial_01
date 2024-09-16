import mongoose from "mongoose";

//connect Database
const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO)
    console.log("Connect Database")
  } catch (error) {
    throw new Error("Connect failed!");

  }
}

export default connect;